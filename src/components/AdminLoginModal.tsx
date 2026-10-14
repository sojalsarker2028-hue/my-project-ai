import React, { useState } from 'react';
import { Lock, Eye, EyeOff, X, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { loginAdmin } from '../services/adminService';

interface AdminLoginModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (token: string) => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  language,
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const t = translations[language];
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!password.trim()) {
      setError(language === 'bn' ? 'অ্যাডমিন পাসওয়ার্ড লিখুন।' : 'Please enter admin password.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await loginAdmin(password);
      if (result.success && result.token) {
        setSuccess(t.adminLoginSuccess);
        setTimeout(() => {
          onLoginSuccess(result.token!);
          onClose();
        }, 500);
      } else {
        setError(language === 'bn' ? t.adminAccessDenied : (result.error || t.adminAccessDenied));
        setIsSubmitting(false);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Login failed';
      setError(msg);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-stone-200 text-stone-900 animate-fadeIn">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-amber-700" />
            {t.adminDashboardBadge}
          </span>
        </div>

        <h2 className="text-2xl font-extrabold font-serif text-stone-900 tracking-tight mb-1">
          {t.accessAdminTitle}
        </h2>
        <p className="text-xs text-stone-500 mb-6">
          {t.accessAdminSubtitle}
        </p>

        {success ? (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 animate-pulse" />
            <p className="text-sm font-semibold">{success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="modal-admin-password"
                className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
              >
                {t.adminPasswordLabel} <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  id="modal-admin-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder={t.adminPasswordPlaceholder}
                  className={`block w-full pl-10 pr-11 py-3 rounded-xl border text-sm transition-colors focus:outline-hidden ${
                    error
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

              {error ? (
                <div className="mt-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 flex items-start gap-2 text-xs font-medium">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              ) : (
                <p className="mt-1.5 text-xs text-stone-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
                  {t.adminPasswordHint}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-stone-900 hover:bg-black text-white font-semibold text-sm shadow-md transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer mt-4"
            >
              {isSubmitting ? (
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
    </div>
  );
};
