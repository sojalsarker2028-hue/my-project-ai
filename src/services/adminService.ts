import {
  RegisteredUser,
  Exam,
  ExamQuestion,
  ExamSubmissionResult,
  WebsiteSettings,
  AdminAuthResponse,
  AdminNotification,
  InAppNotification
} from '../types';

const ADMIN_TOKEN_KEY = 'treeleaf_admin_token_v1';

export function getAdminToken(): string | null {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem(ADMIN_TOKEN_KEY) || localStorage.getItem(ADMIN_TOKEN_KEY);
}

export function setAdminToken(token: string, persist: boolean = true): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(ADMIN_TOKEN_KEY, token);
  if (persist) {
    localStorage.setItem(ADMIN_TOKEN_KEY, token);
  }
}

export function clearAdminToken(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(ADMIN_TOKEN_KEY);
  localStorage.removeItem(ADMIN_TOKEN_KEY);
}

function getAuthHeaders(): HeadersInit {
  const token = getAdminToken();
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
}

/**
 * Log in to Admin Panel via backend verification.
 * Never stores or validates password on client side.
 */
export async function loginAdmin(password: string): Promise<AdminAuthResponse> {
  try {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });

    const data = await res.json();
    if (res.ok && data.success && data.token) {
      setAdminToken(data.token, true);
      return { success: true, token: data.token };
    }
    return {
      success: false,
      error: data.error || 'Access Denied: Incorrect administrator password'
    };
  } catch (err) {
    console.error('Admin login network error:', err);
    return {
      success: false,
      error: 'Failed to connect to backend authentication service. Please try again.'
    };
  }
}

/**
 * Verify whether current admin session token is still valid.
 */
export async function verifyAdminSession(): Promise<boolean> {
  const token = getAdminToken();
  if (!token) return false;

  try {
    const res = await fetch('/api/admin/verify', {
      method: 'POST',
      headers: getAuthHeaders()
    });
    if (!res.ok) {
      clearAdminToken();
      return false;
    }
    const data = await res.json();
    if (!data.valid) {
      clearAdminToken();
      return false;
    }
    return true;
  } catch {
    // If backend is momentarily unreachable, keep token unless 401
    return !!token;
  }
}

/**
 * Logout admin
 */
export async function logoutAdmin(): Promise<void> {
  try {
    await fetch('/api/admin/logout', {
      method: 'POST',
      headers: getAuthHeaders()
    });
  } catch {
    // ignore
  } finally {
    clearAdminToken();
  }
}

/**
 * Change admin password securely on backend
 */
export async function changeAdminPassword(currentPassword: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch('/api/admin/change-password', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ currentPassword, newPassword })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      return { success: true };
    }
    return { success: false, error: data.error || 'Failed to update password' };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Network error';
    return { success: false, error: msg };
  }
}

/**
 * Fetch all registered users
 */
export async function getRegisteredUsers(): Promise<RegisteredUser[]> {
  try {
    const res = await fetch('/api/admin/users', {
      headers: getAuthHeaders()
    });
    const data = await res.json();
    if (res.ok && data.success && Array.isArray(data.users)) {
      return data.users;
    }
  } catch (err) {
    console.error('Error fetching registered users:', err);
  }
  return [];
}

/**
 * Register user to backend database
 */
export async function registerUserToBackend(fullName: string, mobileNumber: string): Promise<RegisteredUser | null> {
  try {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, mobileNumber })
    });
    const data = await res.json();
    if (res.ok && data.success && data.user) {
      return data.user;
    }
  } catch (err) {
    console.error('Error registering user to backend:', err);
  }
  return null;
}

/**
 * Update registered user details (Admin)
 */
export async function updateUser(id: string, updates: Partial<RegisteredUser>): Promise<RegisteredUser | null> {
  try {
    const res = await fetch(`/api/admin/users/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(updates)
    });
    const data = await res.json();
    if (res.ok && data.success && data.user) {
      return data.user;
    }
  } catch (err) {
    console.error('Error updating user:', err);
  }
  return null;
}

/**
 * Delete registered user (Admin)
 */
export async function deleteUser(id: string): Promise<boolean> {
  try {
    const res = await fetch(`/api/admin/users/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    const data = await res.json();
    return res.ok && data.success;
  } catch (err) {
    console.error('Error deleting user:', err);
    return false;
  }
}

/**
 * Fetch all exams with questions
 */
export async function getExams(): Promise<Exam[]> {
  try {
    const res = await fetch('/api/exams');
    const data = await res.json();
    if (res.ok && data.success && Array.isArray(data.exams)) {
      return data.exams;
    }
  } catch (err) {
    console.error('Error fetching exams:', err);
  }
  return [];
}

/**
 * Add a new question to an exam (Admin)
 */
export async function addExamQuestion(question: Omit<ExamQuestion, 'id'>): Promise<ExamQuestion | null> {
  try {
    const res = await fetch('/api/admin/exam-questions', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(question)
    });
    const data = await res.json();
    if (res.ok && data.success && data.question) {
      return data.question;
    }
  } catch (err) {
    console.error('Error adding question:', err);
  }
  return null;
}

/**
 * Update exam question (Admin)
 */
export async function updateExamQuestion(id: string, updates: Partial<ExamQuestion>): Promise<ExamQuestion | null> {
  try {
    const res = await fetch(`/api/admin/exam-questions/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(updates)
    });
    const data = await res.json();
    if (res.ok && data.success && data.question) {
      return data.question;
    }
  } catch (err) {
    console.error('Error updating question:', err);
  }
  return null;
}

/**
 * Delete exam question (Admin)
 */
export async function deleteExamQuestion(id: string): Promise<boolean> {
  try {
    const res = await fetch(`/api/admin/exam-questions/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    const data = await res.json();
    return res.ok && data.success;
  } catch (err) {
    console.error('Error deleting question:', err);
    return false;
  }
}

/**
 * Submit exam answers for evaluation
 * Strictly NO RANKING is calculated or returned.
 */
export async function submitExamAnswers(submission: {
  examId: string;
  userId?: string;
  userName: string;
  userMobile: string;
  answers: { questionId: string; selectedOptionIndex: number }[];
}): Promise<ExamSubmissionResult | null> {
  try {
    const res = await fetch('/api/exams/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submission)
    });
    const data = await res.json();
    if (res.ok && data.success && data.result) {
      return data.result;
    }
  } catch (err) {
    console.error('Error submitting exam:', err);
  }
  return null;
}

/**
 * Fetch all exam results (Admin)
 * Contains scores, pass/fail status, and timestamps.
 * Strictly NO RANKING or leaderboards.
 */
export async function getExamResults(): Promise<ExamSubmissionResult[]> {
  try {
    const res = await fetch('/api/admin/exam-results', {
      headers: getAuthHeaders()
    });
    const data = await res.json();
    if (res.ok && data.success && Array.isArray(data.results)) {
      return data.results;
    }
  } catch (err) {
    console.error('Error fetching exam results:', err);
  }
  return [];
}

/**
 * Get website settings
 */
export async function getWebsiteSettings(): Promise<WebsiteSettings> {
  const defaultSettings: WebsiteSettings = {
    siteTitle: 'Plant Doctor AI - Leaf Health & Disease Guide',
    bannerNoticeEn: 'Official Agricultural Leaf Diagnostic Portal. All data is verified for agricultural education.',
    bannerNoticeBn: 'অফিসিয়াল কৃষি পাতা রোগ নির্ণয় পোর্টাল। সমস্ত তথ্য কৃষি শিক্ষার জন্য যাচাইকৃত।',
    showBanner: true,
    allowRegistration: true,
    examPassPercentage: 70,
    maintenanceMode: false
  };

  try {
    const res = await fetch('/api/settings');
    const data = await res.json();
    if (res.ok && data.success && data.settings) {
      return { ...defaultSettings, ...data.settings };
    }
  } catch (err) {
    console.error('Error fetching settings:', err);
  }
  return defaultSettings;
}

/**
 * Update website settings (Admin)
 */
export async function updateWebsiteSettings(settings: Partial<WebsiteSettings>): Promise<WebsiteSettings | null> {
  try {
    const res = await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(settings)
    });
    const data = await res.json();
    if (res.ok && data.success && data.settings) {
      return data.settings;
    }
  } catch (err) {
    console.error('Error updating settings:', err);
  }
  return null;
}

/**
 * Send notification to all registered users (Admin)
 */
export async function sendNotificationToAllUsers(notification: {
  title: string;
  message: string;
  category?: 'announcement' | 'alert' | 'advisory' | 'update';
  priority?: 'normal' | 'high';
}): Promise<{ success: boolean; notification?: AdminNotification; error?: string; message?: string }> {
  try {
    const res = await fetch('/api/admin/notifications', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(notification)
    });
    const data = await res.json();
    if (res.ok && data.success) {
      return { success: true, notification: data.notification, message: data.message };
    }
    return { success: false, error: data.error || 'Failed to send notification' };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Network error';
    return { success: false, error: msg };
  }
}

/**
 * Fetch all notifications (Admin)
 */
export async function getAdminNotifications(): Promise<AdminNotification[]> {
  try {
    const res = await fetch('/api/admin/notifications', {
      headers: getAuthHeaders()
    });
    const data = await res.json();
    if (res.ok && data.success && Array.isArray(data.notifications)) {
      return data.notifications;
    }
  } catch (err) {
    console.error('Error fetching notifications:', err);
  }
  return [];
}

/**
 * Delete a notification (Admin)
 */
export async function deleteAdminNotification(id: string): Promise<boolean> {
  try {
    const res = await fetch(`/api/admin/notifications/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    const data = await res.json();
    return res.ok && data.success;
  } catch (err) {
    console.error('Error deleting notification:', err);
    return false;
  }
}

/**
 * Fetch in-app notifications for users (Public / Student)
 */
export async function getInAppNotifications(): Promise<InAppNotification[]> {
  try {
    const res = await fetch('/api/notifications');
    const data = await res.json();
    if (res.ok && data.success && Array.isArray(data.notifications)) {
      return data.notifications;
    }
  } catch (err) {
    console.error('Error fetching in-app notifications:', err);
  }
  return [];
}

/**
 * Mark in-app notification read by user
 */
export async function markNotificationRead(id: string, userIdentifier?: string): Promise<void> {
  try {
    await fetch(`/api/notifications/${id}/read`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: userIdentifier })
    });
  } catch {
    // Non-blocking
  }
}
