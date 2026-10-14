import React, { useState } from 'react';
import {
  User,
  Phone,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Lock,
  Eye,
  EyeOff,
  KeyRound,
  UserCheck
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { translations } from '../translations';
import { validateProfile, saveUserProfile } from '../services/userProfile';
import { loginAdmin } from '../services/adminService';

interface MandatoryProfileGateProps {
  language: Language;
  onProfileComplete: (profile: UserProfile) => void;
  onAdminLogin: (token: string) => void;
  initialMode?: 'user' | 'admin';
}

export const MandatoryProfileGate: React.FC<MandatoryProfileGateProps> = ({
  language,
  onProfileComplete,
  onAdminLogin,
  initialMode = 'user'
}) => {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState<'user' | 'admin'>(initialMode);

  // User form states
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [mobileError, setMobileError] = useState<string | null>(null);
  const [isSubmittingUser, setIsSubmittingUser] = useState(false);
  const [userSuccessMessage, setUserSuccessMessage] = useState<string | null>(null);

  // Admin form states
  const [adminPassword, setAdminPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [adminError, setAdminError] = useState<string | null>(null);
  const [isSubmittingAdmin, setIsSubmittingAdmin] = useState(false);
  const [adminSuccessMessage, setAdminSuccessMessage] = useState<string | null>(null);

  const handleUserSubmit = async (e: React.FormEvent) => {
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

    setIsSubmittingUser(true);
    try {
      const saved = await saveUserProfile(fullName, mobileNumber);
      setUserSuccessMessage(t.profileSaveSuccess);
      setTimeout(() => {
        onProfileComplete(saved);
      }, 500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to save profile';
      setMobileError(msg);
      setIsSubmittingUser(false);
    }
  };

  const handleAdminSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminError(null);

    if (!adminPassword.trim()) {
      setAdminError(language === 'bn' ? 'অ্যাডমিন পাসওয়ার্ড লিখুন।' : 'Please enter admin password.');
      return;
    }

    setIsSubmittingAdmin(true);
    try {
      const result = await loginAdmin(adminPassword);
      if (result.success && result.token) {
        setAdminSuccessMessage(t.adminLoginSuccess);
        setTimeout(() => {
          onAdminLogin(result.token!);
        }, 500);
      } else {
        setAdminError(language === 'bn' ? t.adminAccessDenied : (result.error || t.adminAccessDenied));
        setIsSubmittingAdmin(false);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Login failed';
      setAdminError(msg);
      setIsSubmittingAdmin(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-stone-200 text-stone-900 my-8 animate-fadeIn">
        {/* Top Header Segment / Tab Switcher: User Access alongside Admin Panel */}
        <div className="mb-6">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              {activeTab === 'user' ? t.profileBadge : t.adminDashboardBadge}
            </span>
            <span className="text-xs text-stone-500 font-medium">
              {activeTab === 'user' ? '1st Time Verification' : 'Secure Admin Portal'}
            </span>
          </div>

          {/* Access Switcher Tabs */}
          <div className="grid grid-cols-2 p-1.5 bg-stone-100 rounded-2xl border border-stone-200/80 gap-1.5">
            <button
              type="button"
              onClick={() => {
                setActiveTab('user');
                setAdminError(null);
              }}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'user'
                  ? 'bg-white text-emerald-900 shadow-sm border border-stone-200/80'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              <UserCheck className="w-4 h-4 text-emerald-700" />
              <span>{t.accessSelectUser}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('admin');
                setFullNameError(null);
                setMobileError(null);
              }}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'admin'
                  ? 'bg-stone-900 text-white shadow-sm border border-stone-900'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              <Lock className="w-4 h-4 text-amber-400" />
              <span>{t.accessSelectAdmin}</span>
            </button>
          </div>
        </div>

        {/* --- USER / STUDENT ACCESS TAB --- */}
        {activeTab === 'user' && (
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900 tracking-tight mb-2">
              {t.profileRequiredTitle}
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed mb-6">
              {t.profileRequiredSubtitle}
            </p>

            {userSuccessMessage ? (
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 animate-pulse" />
                <p className="text-sm font-semibold">{userSuccessMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleUserSubmit} className="space-y-5">
                {/* Full Name Field */}
                <div>
                  <label
                    htmlFor="profile-fullname"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    {t.profileFullNameLabel} <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      id="profile-fullname"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (fullNameError) setFullNameError(null);
                      }}
                      placeholder={t.profileFullNamePlaceholder}
                      className={`block w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm transition-colors focus:outline-hidden ${
                        fullNameError
                          ? 'border-rose-400 bg-rose-50/40 text-stone-900 focus:border-rose-600 focus:ring-1 focus:ring-rose-500'
                          : 'border-stone-300 bg-stone-50 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600'
                      }`}
                    />
                  </div>
                  {fullNameError && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {fullNameError}
                    </p>
                  )}
                </div>

                {/* Mobile Number Field */}
                <div>
                  <label
                    htmlFor="profile-mobile"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    {t.profileMobileLabel} <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Phone className="h-4 w-4" />
                    </div>
                    <input
                      id="profile-mobile"
                      type="tel"
                      required
                      value={mobileNumber}
                      onChange={(e) => {
                        setMobileNumber(e.target.value);
                        if (mobileError) setMobileError(null);
                      }}
                      placeholder={t.profileMobilePlaceholder}
                      className={`block w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm transition-colors focus:outline-hidden ${
                        mobileError
                          ? 'border-rose-400 bg-rose-50/40 text-stone-900 focus:border-rose-600 focus:ring-1 focus:ring-rose-500'
                          : 'border-stone-300 bg-stone-50 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600'
                      }`}
                    />
                  </div>
                  {mobileError ? (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {mobileError}
                    </p>
                  ) : (
                    <p className="mt-1.5 text-xs text-stone-500">
                      {t.profileMobileHelp}
                    </p>
                  )}
                </div>

                {/* Privacy note */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-600 text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <p>{t.profilePrivacyNotice}</p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmittingUser}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm sm:text-base shadow-md transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmittingUser ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-emerald-200" />
                      <span>{t.profileSubmitBtn}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        )}

        {/* --- ADMIN PANEL LOGIN TAB --- */}
        {activeTab === 'admin' && (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-700 border border-amber-300/60">
                <KeyRound className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold font-serif text-stone-900 tracking-tight">
                  {t.accessAdminTitle}
                </h2>
                <p className="text-xs text-stone-500">
                  {t.accessAdminSubtitle}
                </p>
              </div>
            </div>

            {adminSuccessMessage ? (
              <div className="mt-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 animate-pulse" />
                <p className="text-sm font-semibold">{adminSuccessMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleAdminSubmit} className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="admin-password-input"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    {t.adminPasswordLabel} <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Lock className="h-4 w-4" />
                    </div>
                    <input
                      id="admin-password-input"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={adminPassword}
                      onChange={(e) => {
                        setAdminPassword(e.target.value);
                        if (adminError) setAdminError(null);
                      }}
                      placeholder={t.adminPasswordPlaceholder}
                      className={`block w-full pl-10 pr-11 py-3 rounded-xl border text-sm transition-colors focus:outline-hidden ${
                        adminError
                          ? 'border-rose-400 bg-rose-50/40 text-stone-900 focus:border-rose-600 focus:ring-1 focus:ring-rose-500'
                          : 'border-stone-300 bg-stone-50 focus:border-stone-900 focus:bg-white focus:ring-1 focus:ring-stone-900'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-700 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {adminError ? (
                    <div className="mt-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 flex items-start gap-2 text-xs font-medium">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>{adminError}</span>
                    </div>
                  ) : (
                    <p className="mt-1.5 text-xs text-stone-500 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
                      {t.adminPasswordHint}
                    </p>
                  )}
                </div>

                <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-stone-600 text-xs leading-relaxed">
                  <p className="font-semibold text-stone-800 mb-1">Backend Security Notice:</p>
                  <p>Credentials are cryptographically verified by the server. Passwords are never stored or hardcoded in frontend application code.</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingAdmin}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-stone-900 hover:bg-black text-white font-semibold text-sm sm:text-base shadow-md transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmittingAdmin ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Lock className="w-4 h-4 text-amber-400" />
                      <span>{t.adminLoginBtn}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
