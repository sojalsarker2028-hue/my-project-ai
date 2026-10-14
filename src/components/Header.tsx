import React from 'react';
import { Leaf, Share2, Globe, Shield, Lock, GraduationCap, Bell, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  onOpenShare: () => void;
  onOpenProfile?: () => void;
  userName?: string;
  onOpenAdmin?: () => void;
  isAdmin?: boolean;
  onReturnToAdmin?: () => void;
  onOpenNotifications?: () => void;
  unreadNotificationCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  onOpenShare,
  onOpenProfile,
  userName,
  onOpenAdmin,
  isAdmin,
  onReturnToAdmin,
  onOpenNotifications,
  unreadNotificationCount = 0
}) => {
  const t = translations[language];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200 bg-stone-50/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-emerald-950 whitespace-nowrap shrink-0 group"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-700 text-white shadow-sm transition-transform group-hover:scale-105">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="text-xl font-bold tracking-tight font-serif text-emerald-900">
            {t.appTitle}
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
          <a
            href="#scanner"
            className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0"
          >
            {t.navChecker}
          </a>
          <a
            href="#encyclopedia"
            className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0"
          >
            {t.navDiseases}
          </a>
          <a
            href="#exams"
            className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <GraduationCap className="w-4 h-4 text-emerald-700" />
            <span>{t.navExams}</span>
          </a>
          <a
            href="#emergency-helpline"
            className="hover:text-emerald-950 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 text-emerald-900 font-bold bg-emerald-100/80 hover:bg-emerald-200/80 px-2.5 py-1 rounded-lg border border-emerald-300/80"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-700 animate-pulse" />
            <span>{t.navEmergency || 'জরুরি কৃষি সহায়তা'}</span>
          </a>
          <a
            href="#model-architecture"
            className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0"
          >
            {t.navHelp}
          </a>
        </nav>

        {/* Zone 3: Actions (Language switcher + Profile + Admin button + Share action) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Admin Panel Button */}
          {isAdmin ? (
            <button
              onClick={onReturnToAdmin}
              className="flex items-center gap-1.5 rounded-lg border border-amber-500/80 bg-amber-50 px-2.5 py-1.5 text-xs font-bold text-amber-900 hover:bg-amber-100 transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer animate-pulse"
              title="Return to Admin Dashboard"
            >
              <Shield className="h-3.5 w-3.5 text-amber-700" />
              <span className="hidden sm:inline">Admin Dashboard</span>
              <span className="sm:hidden">Admin</span>
            </button>
          ) : (
            onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 rounded-lg border border-stone-300 bg-stone-100 hover:bg-stone-200 px-2.5 py-1.5 text-xs font-bold text-stone-800 transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
                title="Open Admin Login"
              >
                <Lock className="h-3.5 w-3.5 text-stone-600" />
                <span className="hidden sm:inline">{t.navAdmin}</span>
                <span className="sm:hidden">Admin</span>
              </button>
            )
          )}

          {/* User Profile Button */}
          {onOpenProfile && (
            <button
              onClick={onOpenProfile}
              className="flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50/80 px-2.5 py-1.5 text-xs font-semibold text-emerald-900 hover:bg-emerald-100 hover:border-emerald-300 transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
              title={t.profileEditTitle}
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-[10px] font-bold text-white uppercase">
                {userName ? userName.charAt(0) : 'U'}
              </div>
              <span className="max-w-[80px] sm:max-w-[120px] truncate hidden xs:inline">
                {userName || t.profileMenuBtn}
              </span>
            </button>
          )}

          {/* Notification Inbox Button */}
          {onOpenNotifications && (
            <button
              onClick={onOpenNotifications}
              className="relative flex items-center justify-center rounded-lg border border-stone-300 bg-white p-2 text-stone-700 hover:text-emerald-800 hover:border-emerald-600 transition-colors shrink-0 shadow-xs cursor-pointer"
              title={language === 'bn' ? 'বিজ্ঞপ্তি ইনবক্স' : 'Notification Inbox'}
              aria-label="Notification Inbox"
            >
              <Bell className="h-4 w-4" />
              {unreadNotificationCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white shadow-xs animate-bounce">
                  {unreadNotificationCount > 9 ? '9+' : unreadNotificationCount}
                </span>
              )}
            </button>
          )}

          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-stone-700 hover:border-emerald-600 hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
            title="Switch Language / ভাষা পরিবর্তন করুন"
          >
            <Globe className="h-3.5 w-3.5 text-emerald-700" />
            <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
          </button>

          {/* Share Button */}
          <button
            onClick={onOpenShare}
            className="flex items-center gap-1.5 rounded-lg bg-emerald-800 px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-emerald-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{t.shareLink}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
