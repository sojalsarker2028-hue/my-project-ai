import React, { useState, useEffect } from 'react';
import {
  Bell,
  X,
  AlertTriangle,
  Info,
  CheckCircle2,
  Calendar,
  Sparkles,
  Megaphone
} from 'lucide-react';
import { Language, InAppNotification } from '../types';
import { getInAppNotifications, markNotificationRead } from '../services/adminService';

interface NotificationInboxModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  userMobile?: string;
}

export const NotificationInboxModal: React.FC<NotificationInboxModalProps> = ({
  language,
  isOpen,
  onClose,
  userMobile
}) => {
  const [notifications, setNotifications] = useState<InAppNotification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      getInAppNotifications()
        .then((items) => {
          setNotifications(items);
          setIsLoading(false);
          // Mark all retrieved as read locally
          items.forEach((item) => {
            markNotificationRead(item.id, userMobile);
          });
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [isOpen, userMobile]);

  if (!isOpen) return null;

  const formatDate = (timestamp: number) => {
    try {
      const date = new Date(timestamp);
      return date.toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-stone-900 border border-stone-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-5 border-b border-stone-800 flex items-center justify-between bg-stone-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                {language === 'bn' ? 'বিজ্ঞপ্তি ইনবক্স' : 'Notification Inbox'}
                {notifications.length > 0 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
                    {notifications.length}
                  </span>
                )}
              </h3>
              <p className="text-xs text-stone-400">
                {language === 'bn'
                  ? 'অ্যাডমিন থেকে প্রেরিত গুরুত্বপূর্ণ নোটিশ ও আপডেট'
                  : 'Official announcements and updates from administration'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-3.5 flex-1 divide-y divide-stone-800/40">
          {isLoading ? (
            <div className="py-12 text-center text-stone-400 text-sm">
              <div className="w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
              <span>{language === 'bn' ? 'বিজ্ঞপ্তি লোড হচ্ছে...' : 'Loading notifications...'}</span>
            </div>
          ) : notifications.length === 0 ? (
            <div className="py-14 text-center">
              <div className="w-12 h-12 rounded-2xl bg-stone-800/80 text-stone-500 flex items-center justify-center mx-auto mb-3">
                <Megaphone className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-stone-300">
                {language === 'bn' ? 'এখনো কোনো বিজ্ঞপ্তি নেই' : 'No notifications yet'}
              </p>
              <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                {language === 'bn'
                  ? 'অ্যাডমিন নতুন বার্তা বা সতর্কতা পাঠালে এখানে প্রদর্শিত হবে।'
                  : 'When the administrator sends announcements or advisory alerts, they will appear here.'}
              </p>
            </div>
          ) : (
            notifications.map((notif) => {
              const isHigh = notif.priority === 'high';
              return (
                <div
                  key={notif.id}
                  className={`pt-3.5 first:pt-0 rounded-2xl p-4 transition-all ${
                    isHigh
                      ? 'bg-rose-950/20 border border-rose-900/40 text-rose-100'
                      : 'bg-stone-900/80 border border-stone-800/70 text-stone-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-2">
                      {isHigh ? (
                        <span className="p-1 rounded-md bg-rose-500/20 text-rose-400">
                          <AlertTriangle className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <span className="p-1 rounded-md bg-amber-500/20 text-amber-400">
                          <Info className="w-3.5 h-3.5" />
                        </span>
                      )}
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {notif.title}
                      </h4>
                    </div>
                    {isHigh && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        {language === 'bn' ? 'জরুরি' : 'Urgent'}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed whitespace-pre-wrap pl-5 sm:pl-6">
                    {notif.message}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-stone-500 pl-5 sm:pl-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(notif.sentAt)}
                    </span>
                    <span className="capitalize px-2 py-0.5 rounded-md bg-stone-800 text-stone-400 text-[10px]">
                      {notif.category}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-800 bg-stone-900/90 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            {language === 'bn' ? 'বন্ধ করুন' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
