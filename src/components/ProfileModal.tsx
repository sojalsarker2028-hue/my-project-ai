import React, { useState } from 'react';
import { User, Phone, X, CheckCircle2, AlertCircle, Calendar, ShieldCheck, Save, Clock } from 'lucide-react';
import { Language, UserProfile } from '../types';
import { translations } from '../translations';
import { validateProfile, saveUserProfile } from '../services/userProfile';

interface ProfileModalProps {
  language: Language;
  profile: UserProfile;
  isOpen: boolean;
  onClose: () => void;
  onProfileUpdated: (updated: UserProfile) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  language,
  profile,
  isOpen,
  onClose,
  onProfileUpdated
}) => {
  const t = translations[language];
  const [fullName, setFullName] = useState(profile.fullName);
  const [mobileNumber, setMobileNumber] = useState(profile.mobileNumber);
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [mobileError, setMobileError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  if (!isOpen) return null;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setFullNameError(null);
    setMobileError(null);

    const validation = validateProfile(fullName, mobileNumber);
    if (!validation.isValid) {
      if (validation.fullNameErrorEn) {
        setFullNameError(language === 'bn' ? validation.fullNameErrorBn! : validation.fullNameErrorEn);
      }
      if (validation.mobileErrorEn) {
        setMobileError(language === 'bn' ? validation.mobileErrorBn! : validation.mobileErrorEn);
      }
      return;
    }

    setIsSaving(true);
    try {
      const updated = await saveUserProfile(fullName, mobileNumber);
      onProfileUpdated(updated);
      setSuccessToast(true);
      setTimeout(() => {
        setSuccessToast(false);
      }, 2500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to update profile';
      setMobileError(msg);
    } finally {
      setIsSaving(false);
    }
  };

  const formatDate = (timestamp: number) => {
    try {
      const date = new Date(timestamp);
      return date.toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-stone-200 text-stone-900 my-8 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label={t.profileModalClose}
        >
          <X className="h-5 w-5" />
        </button>

        {/* Top Tag & Title */}
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            {t.profileBadge}
          </span>
        </div>

        <h2 className="text-2xl font-bold font-serif text-stone-900 tracking-tight mb-1">
          {t.profileEditTitle}
        </h2>
        <p className="text-sm text-stone-600 mb-6">
          {t.profileEditSubtitle}
        </p>

        {successToast && (
          <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Profile information successfully updated!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="edit-fullname"
              className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
            >
              {t.profileFullNameLabel} <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                <User className="h-4 w-4" />
              </div>
              <input
                id="edit-fullname"
                type="text"
                required
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (fullNameError) setFullNameError(null);
                }}
                className={`block w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-hidden ${
                  fullNameError
                    ? 'border-rose-400 bg-rose-50/40 text-stone-900 focus:border-rose-600'
                    : 'border-stone-300 bg-stone-50 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600'
                }`}
              />
            </div>
            {fullNameError && (
              <p className="mt-1 flex items-center gap-1 text-xs text-rose-600 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {fullNameError}
              </p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="edit-mobile"
              className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
            >
              {t.profileMobileLabel} <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                <Phone className="h-4 w-4" />
              </div>
              <input
                id="edit-mobile"
                type="tel"
                required
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                  if (mobileError) setMobileError(null);
                }}
                className={`block w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-hidden ${
                  mobileError
                    ? 'border-rose-400 bg-rose-50/40 text-stone-900 focus:border-rose-600'
                    : 'border-stone-300 bg-stone-50 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600'
                }`}
              />
            </div>
            {mobileError && (
              <p className="mt-1 flex items-center gap-1 text-xs text-rose-600 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {mobileError}
              </p>
            )}
          </div>

          {/* Account Metadata Stats */}
          <div className="grid grid-cols-2 gap-3 py-3 border-y border-stone-200 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-700 shrink-0" />
              <div>
                <p className="text-[10px] uppercase font-bold text-stone-400">{t.profileMemberSince}</p>
                <p className="font-semibold text-stone-800">{formatDate(profile.createdAt)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
              <div>
                <p className="text-[10px] uppercase font-bold text-stone-400">{t.profileLastUpdated}</p>
                <p className="font-semibold text-stone-800">{formatDate(profile.updatedAt)}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 font-semibold text-sm hover:bg-stone-100 transition-colors cursor-pointer"
            >
              {t.profileModalClose}
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm shadow-sm transition-colors cursor-pointer disabled:opacity-60"
            >
              {isSaving ? (
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>{t.profileUpdateBtn}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
