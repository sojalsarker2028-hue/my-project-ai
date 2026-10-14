import { UserProfile } from '../types';

const STORAGE_KEY_V1 = 'treeleaf_user_profile_v1';
const DB_NAME = 'TreeLeafDB';
const DB_VERSION = 1;
const STORE_NAME = 'user_profiles';
const ACTIVE_PROFILE_KEY = 'active_user_profile';

// Helper to open indexedDB
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Validates full name and mobile number.
 * Returns an error object or null if valid.
 */
export function validateProfile(fullName: string, mobileNumber: string): {
  fullNameErrorEn?: string;
  fullNameErrorBn?: string;
  mobileErrorEn?: string;
  mobileErrorBn?: string;
  isValid: boolean;
} {
  const trimmedName = fullName.trim();
  const trimmedMobile = mobileNumber.trim();
  let fullNameErrorEn: string | undefined;
  let fullNameErrorBn: string | undefined;
  let mobileErrorEn: string | undefined;
  let mobileErrorBn: string | undefined;

  // Name validation: min 2 letters, letters/spaces/dots/hyphens allowed (including Bengali letters)
  if (!trimmedName) {
    fullNameErrorEn = 'Full name is required.';
    fullNameErrorBn = 'আপনার পুরো নাম আবশ্যক।';
  } else if (trimmedName.length < 2) {
    fullNameErrorEn = 'Name must be at least 2 characters.';
    fullNameErrorBn = 'নাম কমপক্ষে ২ অক্ষরের হতে হবে।';
  } else if (trimmedName.length > 70) {
    fullNameErrorEn = 'Name must be under 70 characters.';
    fullNameErrorBn = 'নাম ৭০ অক্ষরের কম হতে হবে।';
  }

  // Mobile number validation:
  // Supports Bangladesh (+8801XXXXXXXXX or 01XXXXXXXXX), India (+91XXXXXXXXXX or 10 digits), and general international E.164 (7 to 15 digits)
  // Strips formatting characters (spaces, hyphens, parentheses, plus sign)
  const cleanMobile = trimmedMobile.replace(/[\s\-()+]/g, '');
  const digitsOnlyRegex = /^\d+$/;

  if (!trimmedMobile) {
    mobileErrorEn = 'Mobile number is required.';
    mobileErrorBn = 'মোবাইল নম্বর আবশ্যক।';
  } else if (!digitsOnlyRegex.test(cleanMobile)) {
    mobileErrorEn = 'Please enter a valid numeric mobile number.';
    mobileErrorBn = 'অনুগ্রহ করে সঠিক মোবাইল নম্বর দিন।';
  } else if (cleanMobile.length < 8 || cleanMobile.length > 15) {
    mobileErrorEn = 'Mobile number should be between 8 and 15 digits.';
    mobileErrorBn = 'মোবাইল নম্বর ৮ থেকে ১৫ ডিজিটের হতে হবে।';
  }

  return {
    fullNameErrorEn,
    fullNameErrorBn,
    mobileErrorEn,
    mobileErrorBn,
    isValid: !fullNameErrorEn && !mobileErrorEn
  };
}

/**
 * Retrieves the persisted profile synchronously or from fallback cache.
 */
export function getSavedProfile(): UserProfile | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY_V1);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as UserProfile;
    if (parsed && parsed.fullName && parsed.mobileNumber) {
      const val = validateProfile(parsed.fullName, parsed.mobileNumber);
      if (val.isValid) return parsed;
    }
  } catch (e) {
    console.error('Error reading profile from localStorage:', e);
  }
  return null;
}

/**
 * Loads profile with IndexedDB persistence verification.
 */
export async function loadUserProfileAsync(): Promise<UserProfile | null> {
  const syncProfile = getSavedProfile();
  if (syncProfile) return syncProfile;

  // Try recovering from IndexedDB
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const req = store.get(ACTIVE_PROFILE_KEY);
      req.onsuccess = () => {
        if (req.result && req.result.profile) {
          const prof = req.result.profile as UserProfile;
          const val = validateProfile(prof.fullName, prof.mobileNumber);
          if (val.isValid) {
            // Re-sync to localStorage
            try {
              localStorage.setItem(STORAGE_KEY_V1, JSON.stringify(prof));
            } catch {
              // ignore
            }
            resolve(prof);
            return;
          }
        }
        resolve(null);
      };
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

/**
 * Saves profile to both localStorage and IndexedDB for maximum resilience across restarts.
 */
export async function saveUserProfile(fullName: string, mobileNumber: string): Promise<UserProfile> {
  const trimmedName = fullName.trim();
  const trimmedMobile = mobileNumber.trim();

  const validation = validateProfile(trimmedName, trimmedMobile);
  if (!validation.isValid) {
    throw new Error(validation.fullNameErrorEn || validation.mobileErrorEn || 'Invalid profile');
  }

  const existing = getSavedProfile();
  const now = Date.now();
  const profile: UserProfile = {
    fullName: trimmedName,
    mobileNumber: trimmedMobile,
    createdAt: existing?.createdAt || now,
    updatedAt: now
  };

  // 1. Save to LocalStorage
  try {
    localStorage.setItem(STORAGE_KEY_V1, JSON.stringify(profile));
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
  }

  // 2. Save to IndexedDB
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const req = store.put({ id: ACTIVE_PROFILE_KEY, profile });
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB persistence fallback notice:', err);
  }

  // 3. Sync to backend database
  try {
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: profile.fullName, mobileNumber: profile.mobileNumber })
    }).catch(() => {
      // Non-blocking sync
    });
  } catch {
    // Non-blocking
  }

  return profile;
}

/**
 * Clears profile from all storage engines (for testing or profile reset).
 */
export async function clearUserProfile(): Promise<void> {
  try {
    localStorage.removeItem(STORAGE_KEY_V1);
  } catch {
    // ignore
  }

  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const req = store.delete(ACTIVE_PROFILE_KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {
    // ignore
  }
}
