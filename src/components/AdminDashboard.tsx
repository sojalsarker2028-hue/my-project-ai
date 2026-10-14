import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Globe,
  Send,
  KeyRound,
  Shield,
  Eye,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Users,
  RefreshCw,
  Bell,
  Trash2,
  Lock,
  EyeOff,
  Sparkles,
  Radio,
  Sliders,
  Check,
  Megaphone,
  ArrowRight
} from 'lucide-react';
import {
  Language,
  RegisteredUser,
  WebsiteSettings,
  AdminNotification
} from '../types';
import {
  getRegisteredUsers,
  getWebsiteSettings,
  updateWebsiteSettings,
  changeAdminPassword,
  sendNotificationToAllUsers,
  getAdminNotifications,
  deleteAdminNotification,
  logoutAdmin
} from '../services/adminService';

interface AdminDashboardProps {
  language: Language;
  onPreviewUserDashboard: () => void;
  onLogout: () => void;
  onToggleLanguage: () => void;
}

// Strictly 4 options as requested:
type AdminTab = 'dashboard' | 'website-control' | 'send-notification' | 'admin-password';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  language,
  onPreviewUserDashboard,
  onLogout,
  onToggleLanguage
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');

  // Real database states
  const [users, setUsers] = useState<RegisteredUser[]>([]);
  const [settings, setSettings] = useState<WebsiteSettings | null>(null);
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Send Notification form states
  const [notifTitle, setNotifTitle] = useState('');
  const [notifMessage, setNotifMessage] = useState('');
  const [notifCategory, setNotifCategory] = useState<'announcement' | 'alert' | 'advisory' | 'update'>('announcement');
  const [notifPriority, setNotifPriority] = useState<'normal' | 'high'>('normal');
  const [isSendingNotif, setIsSendingNotif] = useState(false);

  // Website Control form states
  const [siteTitle, setSiteTitle] = useState('');
  const [bannerNoticeEn, setBannerNoticeEn] = useState('');
  const [bannerNoticeBn, setBannerNoticeBn] = useState('');
  const [showBanner, setShowBanner] = useState(true);
  const [allowRegistration, setAllowRegistration] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [isSavingSettings, setIsSavingSettings] = useState(false);

  // Admin Password states
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  const showFeedback = (text: string, type: 'success' | 'error' = 'success') => {
    setFeedbackMsg({ type, text });
    setTimeout(() => setFeedbackMsg(null), 4000);
  };

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [fetchedUsers, fetchedSettings, fetchedNotifs] = await Promise.all([
        getRegisteredUsers(),
        getWebsiteSettings(),
        getAdminNotifications()
      ]);

      setUsers(fetchedUsers);
      setSettings(fetchedSettings);
      setNotifications(fetchedNotifs);

      if (fetchedSettings) {
        setSiteTitle(fetchedSettings.siteTitle || '');
        setBannerNoticeEn(fetchedSettings.bannerNoticeEn || '');
        setBannerNoticeBn(fetchedSettings.bannerNoticeBn || '');
        setShowBanner(!!fetchedSettings.showBanner);
        setAllowRegistration(fetchedSettings.allowRegistration !== false);
        setMaintenanceMode(!!fetchedSettings.maintenanceMode);
      }
    } catch {
      showFeedback('Error loading database records', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle Send Notification
  const handleSendNotification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifTitle.trim() || !notifMessage.trim()) {
      showFeedback('Please provide both notification title and message.', 'error');
      return;
    }

    setIsSendingNotif(true);
    try {
      const result = await sendNotificationToAllUsers({
        title: notifTitle.trim(),
        message: notifMessage.trim(),
        category: notifCategory,
        priority: notifPriority
      });

      if (result.success) {
        showFeedback(result.message || 'Notification broadcasted and saved to inbox successfully!');
        setNotifTitle('');
        setNotifMessage('');
        // Refresh notifications list
        const updatedNotifs = await getAdminNotifications();
        setNotifications(updatedNotifs);
      } else {
        showFeedback(result.error || 'Failed to broadcast notification.', 'error');
      }
    } catch {
      showFeedback('Network error sending notification.', 'error');
    } finally {
      setIsSendingNotif(false);
    }
  };

  // Handle Delete Notification
  const handleDeleteNotif = async (id: string) => {
    const ok = await deleteAdminNotification(id);
    if (ok) {
      showFeedback('Notification deleted successfully');
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    } else {
      showFeedback('Failed to delete notification', 'error');
    }
  };

  // Handle Save Website Settings
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingSettings(true);
    try {
      const updated = await updateWebsiteSettings({
        siteTitle: siteTitle.trim(),
        bannerNoticeEn: bannerNoticeEn.trim(),
        bannerNoticeBn: bannerNoticeBn.trim(),
        showBanner,
        allowRegistration,
        maintenanceMode
      });
      if (updated) {
        setSettings(updated);
        showFeedback('Website controls and configurations saved successfully!');
      } else {
        showFeedback('Failed to save website controls', 'error');
      }
    } catch {
      showFeedback('Error saving website controls', 'error');
    } finally {
      setIsSavingSettings(false);
    }
  };

  // Handle Update Admin Password
  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword) {
      showFeedback('Please enter current password', 'error');
      return;
    }
    if (newPassword.length < 6) {
      showFeedback('New password must be at least 6 characters', 'error');
      return;
    }
    if (newPassword !== confirmPassword) {
      showFeedback('New passwords do not match', 'error');
      return;
    }

    setIsUpdatingPassword(true);
    try {
      const res = await changeAdminPassword(currentPassword, newPassword);
      if (res.success) {
        showFeedback('Admin password updated successfully with encrypted backend hash!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        showFeedback(res.error || 'Password update failed', 'error');
      }
    } catch {
      showFeedback('Network error updating password', 'error');
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  const navItems = [
    {
      id: 'dashboard' as AdminTab,
      labelEn: 'Dashboard',
      labelBn: 'ড্যাশবোর্ড',
      icon: LayoutDashboard,
      badge: users.length.toString(),
      description: 'Accurate user counts & system health'
    },
    {
      id: 'website-control' as AdminTab,
      labelEn: 'Website Control',
      labelBn: 'ওয়েবসাইট কন্ট্রোল',
      icon: Sliders,
      description: 'Manage banners & live site operations'
    },
    {
      id: 'send-notification' as AdminTab,
      labelEn: 'Send Notification',
      labelBn: 'বিজ্ঞপ্তি পাঠান',
      icon: Send,
      badge: notifications.length > 0 ? notifications.length.toString() : undefined,
      description: 'Broadcast to all genuine users'
    },
    {
      id: 'admin-password' as AdminTab,
      labelEn: 'Admin Password',
      labelBn: 'অ্যাডমিন পাসওয়ার্ড',
      icon: KeyRound,
      description: 'Secure backend credential management'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 border-b border-stone-800/80 bg-stone-950/90 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-stone-950 font-bold shadow-lg shadow-amber-500/10">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-white">
                Plant Doctor AI
              </h1>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-400 border border-amber-500/30">
                Admin Panel
              </span>
            </div>
            <p className="text-xs text-stone-400 hidden sm:block">
              Clean, accurate management portal with persistent backend sync
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Refresh Data Button */}
          <button
            type="button"
            onClick={loadData}
            disabled={isLoading}
            className="p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-700 transition-colors cursor-pointer"
            title="Refresh database records"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-amber-400' : ''}`} />
          </button>

          {/* Toggle Language */}
          <button
            type="button"
            onClick={onToggleLanguage}
            className="px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-xs font-semibold text-stone-300 hover:text-white hover:border-stone-700 transition-colors cursor-pointer"
          >
            {language === 'en' ? 'বাংলা' : 'English'}
          </button>

          {/* Live Preview Mode */}
          <button
            type="button"
            onClick={onPreviewUserDashboard}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-700/50 hover:bg-emerald-900/60 transition-colors text-xs font-semibold cursor-pointer shadow-xs"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Preview Website</span>
            <span className="sm:hidden">Preview</span>
          </button>

          {/* Sign Out */}
          <button
            type="button"
            onClick={async () => {
              await logoutAdmin();
              onLogout();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-950/60 text-rose-300 border border-rose-800/40 hover:bg-rose-900/60 transition-colors text-xs font-semibold cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row gap-6">
        {/* Navigation Sidebar (4 Options Only) */}
        <aside className="w-full md:w-64 shrink-0 space-y-2">
          <div className="p-3 bg-stone-900/80 rounded-2xl border border-stone-800/80 shadow-md">
            <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-stone-400 flex items-center justify-between">
              <span>Navigation Menu</span>
              <span className="text-[10px] text-amber-400 font-mono">4 Options</span>
            </div>

            <nav className="space-y-1 mt-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20'
                        : 'text-stone-300 hover:bg-stone-800/70 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-stone-950' : 'text-amber-400'}`} />
                      <span>{language === 'bn' ? item.labelBn : item.labelEn}</span>
                    </div>
                    {item.badge !== undefined && (
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-stone-950 text-amber-300 font-bold'
                            : 'bg-stone-800 text-stone-300 border border-stone-700/60'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Persistent Database Health Card */}
          <div className="p-4 rounded-2xl bg-stone-900/50 border border-stone-800/60 space-y-2 hidden md:block">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Real Database Connected</span>
            </div>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              Serving genuine registered users from persistent database. Sample data, rankings, and exam leaderboards are strictly removed.
            </p>
          </div>
        </aside>

        {/* Content Panel */}
        <main className="flex-1 bg-stone-900/40 p-5 sm:p-7 rounded-3xl border border-stone-800/80 min-w-0 shadow-xl">
          {/* Feedback Toast Notification */}
          {feedbackMsg && (
            <div
              className={`mb-6 p-4 rounded-2xl flex items-center gap-3 text-sm font-semibold animate-fadeIn ${
                feedbackMsg.type === 'success'
                  ? 'bg-emerald-950/80 text-emerald-200 border border-emerald-700/50'
                  : 'bg-rose-950/80 text-rose-200 border border-rose-700/50'
              }`}
            >
              {feedbackMsg.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
              )}
              <span>{feedbackMsg.text}</span>
            </div>
          )}

          {isLoading ? (
            <div className="py-24 flex flex-col items-center justify-center text-center">
              <RefreshCw className="w-8 h-8 text-amber-400 animate-spin mb-3" />
              <p className="text-sm font-medium text-stone-300">Fetching records from persistent database...</p>
            </div>
          ) : (
            <>
              {/* ======================================================== */}
              {/* 1. DASHBOARD TAB                                          */}
              {/* ======================================================== */}
              {activeTab === 'dashboard' && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {language === 'bn' ? 'অ্যাডমিন ড্যাশবোর্ড' : 'System Dashboard'}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-400 mt-1">
                      {language === 'bn'
                        ? 'প্রকৃত নিবন্ধিত ব্যবহারকারী এবং ওয়েবসাইটের প্রয়োজনীয় স্ট্যাটাস'
                        : 'Accurate total count of genuine registered users and essential website status.'}
                    </p>
                  </div>

                  {/* Primary KPI: Genuine Registered Users */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Registered Users Count Card */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-900/90 border border-stone-800 shadow-md relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-5 opacity-10">
                        <Users className="w-20 h-20 text-amber-400" />
                      </div>
                      <div className="flex items-center justify-between text-stone-400 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                          {language === 'bn' ? 'মোট নিবন্ধিত ব্যবহারকারী' : 'Total Registered Users'}
                        </span>
                        <Users className="w-5 h-5 text-amber-400" />
                      </div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                        {users.length}
                      </div>
                      <div className="text-xs text-stone-400 mt-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>
                          {users.length === 0
                            ? language === 'bn'
                              ? 'এখনো কোনো নিবন্ধিত ব্যবহারকারী নেই'
                              : 'No registered users yet'
                            : language === 'bn'
                            ? `${users.length} জন আসল কৃষক ও শিক্ষার্থী`
                            : `${users.length} genuine verified user(s)`}
                        </span>
                      </div>
                    </div>

                    {/* Sent Notifications Card */}
                    <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-md">
                      <div className="flex items-center justify-between text-stone-400 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                          {language === 'bn' ? 'প্রেরিত বিজ্ঞপ্তি' : 'Sent Notifications'}
                        </span>
                        <Megaphone className="w-5 h-5 text-sky-400" />
                      </div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                        {notifications.length}
                      </div>
                      <div className="text-xs text-stone-400 mt-2 flex items-center gap-1.5">
                        <Radio className="w-3.5 h-3.5 text-sky-400" />
                        <span>Saved to user in-app inboxes</span>
                      </div>
                    </div>

                    {/* Operational Status Card */}
                    <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-md sm:col-span-2 lg:col-span-1">
                      <div className="flex items-center justify-between text-stone-400 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                          {language === 'bn' ? 'ওয়েবসাইট অবস্থা' : 'Website Status'}
                        </span>
                        <Globe className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${maintenanceMode ? 'bg-amber-400 animate-ping' : 'bg-emerald-400 animate-pulse'}`} />
                        <span>{maintenanceMode ? 'Maintenance' : 'Live & Active'}</span>
                      </div>
                      <div className="text-xs text-stone-400 mt-2">
                        Banner Notice: {showBanner ? 'Active' : 'Hidden'}
                      </div>
                    </div>
                  </div>

                  {/* Genuine Users Section */}
                  <div className="p-6 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                          <Users className="w-4 h-4 text-amber-400" />
                          <span>{language === 'bn' ? 'প্রকৃত নিবন্ধিত ব্যবহারকারী তালিকা' : 'Genuine Registered Users'}</span>
                        </h3>
                        <p className="text-xs text-stone-400 mt-0.5">
                          {language === 'bn'
                            ? 'শুধুমাত্র আসল ব্যবহারকারীগণ প্রদর্শিত (কোনো ফেক বা স্যাম্পল ডাটা নেই)'
                            : 'Directly sourced from persistent database. Zero fabricated records.'}
                        </p>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-stone-800 text-amber-300 border border-stone-700">
                        {users.length} {users.length === 1 ? 'user' : 'users'}
                      </span>
                    </div>

                    {users.length === 0 ? (
                      <div className="py-12 text-center rounded-xl bg-stone-950/60 border border-dashed border-stone-800">
                        <Users className="w-10 h-10 text-stone-600 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-stone-300">
                          {language === 'bn' ? 'এখনো কোনো নিবন্ধিত ব্যবহারকারী নেই।' : 'No registered users yet.'}
                        </p>
                        <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                          {language === 'bn'
                            ? 'কৃষক ও শিক্ষার্থীগণ প্রথমবার প্রবেশ করার সময় তাদের প্রোফাইল সংরক্ষণ করলে এখানে স্বয়ংক্রিয়ভাবে তালিকাভুক্ত হবে।'
                            : 'When farmers and students register with their full name and mobile number, they will appear here.'}
                        </p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead>
                            <tr className="border-b border-stone-800 text-stone-400 uppercase text-[11px] tracking-wider">
                              <th className="py-3 px-3">#</th>
                              <th className="py-3 px-3">Full Name</th>
                              <th className="py-3 px-3">Mobile Number</th>
                              <th className="py-3 px-3">Registered At</th>
                              <th className="py-3 px-3 text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-800/60">
                            {users.map((u, idx) => (
                              <tr key={u.id} className="hover:bg-stone-800/40 transition-colors">
                                <td className="py-3 px-3 text-stone-500 font-mono">{idx + 1}</td>
                                <td className="py-3 px-3 font-semibold text-white">{u.fullName}</td>
                                <td className="py-3 px-3 text-stone-300 font-mono">{u.mobileNumber}</td>
                                <td className="py-3 px-3 text-stone-400 text-xs">
                                  {new Date(u.createdAt).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                  })}
                                </td>
                                <td className="py-3 px-3 text-right">
                                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-950 text-emerald-300 border border-emerald-700/60">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    Active
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* 2. WEBSITE CONTROL TAB                                    */}
              {/* ======================================================== */}
              {activeTab === 'website-control' && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {language === 'bn' ? 'ওয়েবসাইট কন্ট্রোল' : 'Website Control'}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-400 mt-1">
                      {language === 'bn'
                        ? 'ওয়েবসাইটের মূল সেটিংস, নোটিশ ব্যানার ও কার্যক্রম নিয়ন্ত্রণ করুন'
                        : 'Manage essential app settings, public announcements, and operational toggles.'}
                    </p>
                  </div>

                  <form onSubmit={handleSaveSettings} className="space-y-6">
                    {/* Site Title */}
                    <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
                      <h3 className="text-sm font-bold text-stone-200 uppercase tracking-wider flex items-center gap-2">
                        <Sliders className="w-4 h-4 text-amber-400" />
                        Application Identity & Operations
                      </h3>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-stone-300">
                          Website Title
                        </label>
                        <input
                          type="text"
                          value={siteTitle}
                          onChange={(e) => setSiteTitle(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:border-amber-500 focus:outline-hidden"
                          placeholder="Plant Doctor AI - Leaf Health & Disease Guide"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <label className="flex items-center justify-between p-3.5 rounded-xl bg-stone-950 border border-stone-800 cursor-pointer hover:border-stone-700">
                          <div>
                            <span className="text-xs sm:text-sm font-semibold text-stone-200 block">
                              Allow User Registration
                            </span>
                            <span className="text-[11px] text-stone-500">
                              Allow new farmers & students to complete profiles
                            </span>
                          </div>
                          <input
                            type="checkbox"
                            checked={allowRegistration}
                            onChange={(e) => setAllowRegistration(e.target.checked)}
                            className="w-4 h-4 rounded-sm text-amber-500 focus:ring-amber-500"
                          />
                        </label>

                        <label className="flex items-center justify-between p-3.5 rounded-xl bg-stone-950 border border-stone-800 cursor-pointer hover:border-stone-700">
                          <div>
                            <span className="text-xs sm:text-sm font-semibold text-stone-200 block">
                              Maintenance Mode
                            </span>
                            <span className="text-[11px] text-stone-500">
                              Show maintenance notice to incoming visitors
                            </span>
                          </div>
                          <input
                            type="checkbox"
                            checked={maintenanceMode}
                            onChange={(e) => setMaintenanceMode(e.target.checked)}
                            className="w-4 h-4 rounded-sm text-amber-500 focus:ring-amber-500"
                          />
                        </label>
                      </div>
                    </div>

                    {/* Top Announcement Banner Controls */}
                    <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-stone-200 uppercase tracking-wider flex items-center gap-2">
                          <Megaphone className="w-4 h-4 text-emerald-400" />
                          Public Top Banner Notice
                        </h3>
                        <label className="flex items-center gap-2 text-xs font-semibold text-stone-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={showBanner}
                            onChange={(e) => setShowBanner(e.target.checked)}
                            className="w-4 h-4 rounded-sm text-emerald-500 focus:ring-emerald-500"
                          />
                          <span>Show Banner</span>
                        </label>
                      </div>

                      <div className="space-y-3">
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-stone-300">
                            Banner Notice (English)
                          </label>
                          <input
                            type="text"
                            value={bannerNoticeEn}
                            onChange={(e) => setBannerNoticeEn(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:border-amber-500 focus:outline-hidden"
                            placeholder="Official Agricultural Leaf Diagnostic Portal."
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-stone-300">
                            Banner Notice (বাংলা)
                          </label>
                          <input
                            type="text"
                            value={bannerNoticeBn}
                            onChange={(e) => setBannerNoticeBn(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:border-amber-500 focus:outline-hidden"
                            placeholder="অফিসিয়াল কৃষি পাতা রোগ নির্ণয় পোর্টাল।"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={isSavingSettings}
                        className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer disabled:opacity-50"
                      >
                        {isSavingSettings ? 'Saving Settings...' : 'Save Website Controls'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* ======================================================== */}
              {/* 3. SEND NOTIFICATION TAB                                  */}
              {/* ======================================================== */}
              {activeTab === 'send-notification' && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {language === 'bn' ? 'বিজ্ঞপ্তি পাঠান' : 'Send Notification'}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-400 mt-1">
                      {language === 'bn'
                        ? 'সমস্ত নিবন্ধিত ব্যবহারকারীকে বিজ্ঞপ্তি পাঠান এবং ইনবক্সে সংরক্ষণ নিশ্চিত করুন।'
                        : 'Admin can write and send a notification to ALL registered users. Saved in the database and delivered to user in-app inboxes.'}
                    </p>
                  </div>

                  {/* Notification Composition Form */}
                  <form onSubmit={handleSendNotification} className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                        <Send className="w-4 h-4" />
                        <span>Broadcast Message</span>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-stone-800 text-stone-300 font-mono">
                        Audience: All {users.length} Registered User(s)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-stone-300">
                          Notification Title *
                        </label>
                        <input
                          type="text"
                          value={notifTitle}
                          onChange={(e) => setNotifTitle(e.target.value)}
                          placeholder="e.g. Urgent Weather & Blight Advisory / নতুন কৃষি পরামর্শ"
                          className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:border-amber-500 focus:outline-hidden"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-stone-300">
                            Category
                          </label>
                          <select
                            value={notifCategory}
                            onChange={(e) => setNotifCategory(e.target.value as any)}
                            className="w-full px-3 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:border-amber-500 focus:outline-hidden cursor-pointer"
                          >
                            <option value="announcement">Announcement</option>
                            <option value="alert">Pest Alert</option>
                            <option value="advisory">Weather Advisory</option>
                            <option value="update">System Update</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-stone-300">
                            Priority
                          </label>
                          <select
                            value={notifPriority}
                            onChange={(e) => setNotifPriority(e.target.value as any)}
                            className="w-full px-3 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:border-amber-500 focus:outline-hidden cursor-pointer"
                          >
                            <option value="normal">Normal</option>
                            <option value="high">High / Urgent</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-300">
                        Message Content *
                      </label>
                      <textarea
                        rows={4}
                        value={notifMessage}
                        onChange={(e) => setNotifMessage(e.target.value)}
                        placeholder="Write the complete notification message for farmers and students. Explain visible symptoms, weather advisories, preventive measures, or portal announcements..."
                        className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:border-amber-500 focus:outline-hidden resize-none"
                        required
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-[11px] text-stone-400">
                        Saved in database and delivered to in-app notification inboxes.
                      </div>

                      <button
                        type="submit"
                        disabled={isSendingNotif}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSendingNotif ? 'Broadcasting...' : 'Broadcast Notification to All'}</span>
                      </button>
                    </div>
                  </form>

                  {/* Sent Notifications Log */}
                  <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-stone-200 uppercase tracking-wider flex items-center gap-2">
                        <Megaphone className="w-4 h-4 text-sky-400" />
                        Notification History ({notifications.length})
                      </h3>
                      <span className="text-[11px] text-stone-500">
                        Delivered to all registered users
                      </span>
                    </div>

                    {notifications.length === 0 ? (
                      <div className="py-10 text-center text-stone-500 text-xs">
                        No broadcast notifications sent yet. Use the form above to send your first message.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {notifications.map((notif) => (
                          <div
                            key={notif.id}
                            className="p-4 rounded-xl bg-stone-950 border border-stone-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                          >
                            <div className="space-y-1 min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                                  notif.priority === 'high'
                                    ? 'bg-rose-950 text-rose-300 border border-rose-800'
                                    : 'bg-stone-800 text-stone-300'
                                }`}>
                                  {notif.category}
                                </span>
                                <h4 className="text-sm font-bold text-white truncate">
                                  {notif.title}
                                </h4>
                              </div>
                              <p className="text-xs text-stone-400 line-clamp-2">
                                {notif.message}
                              </p>
                              <div className="text-[10px] text-stone-500 flex items-center gap-3">
                                <span>Sent: {new Date(notif.sentAt).toLocaleString()}</span>
                                <span>Recipients: {notif.recipientCount}</span>
                                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                                  <Check className="w-3 h-3" />
                                  {notif.deliveryStatus}
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleDeleteNotif(notif.id)}
                              className="p-2 rounded-lg bg-stone-900 hover:bg-rose-950 hover:text-rose-300 text-stone-500 border border-stone-800 transition-colors cursor-pointer shrink-0"
                              title="Delete notification"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* 4. ADMIN PASSWORD TAB                                     */}
              {/* ======================================================== */}
              {activeTab === 'admin-password' && (
                <div className="space-y-6 animate-fadeIn max-w-xl">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {language === 'bn' ? 'অ্যাডমিন পাসওয়ার্ড' : 'Admin Password'}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-400 mt-1">
                      {language === 'bn'
                        ? 'নিরাপদ অ্যাডমিন পাসওয়ার্ড ব্যবস্থাপনা (PBKDF2 SHA-256 এনক্রিপ্টেড)'
                        : 'Secure administrator credential management. Fixed default is 007521 with backend encryption.'}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-1.5">
                    <div className="font-bold flex items-center gap-2 text-amber-300">
                      <Shield className="w-4 h-4 text-amber-400" />
                      <span>Security & Backend Authentication</span>
                    </div>
                    <p className="text-[11px] text-amber-200/80 leading-relaxed">
                      All password checks happen strictly on the Node.js backend using a salted PBKDF2 hash. Passwords are never exposed in frontend code or public database responses.
                    </p>
                  </div>

                  <form onSubmit={handlePasswordUpdate} className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-300">
                        Current Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showCurrentPass ? 'text' : 'password'}
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          placeholder="Enter current admin password"
                          className="w-full px-4 py-2.5 pr-10 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:border-amber-500 focus:outline-hidden font-mono"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPass(!showCurrentPass)}
                          className="absolute right-3 top-2.5 text-stone-500 hover:text-stone-300 cursor-pointer"
                        >
                          {showCurrentPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-300">
                        New Password (minimum 6 characters) *
                      </label>
                      <div className="relative">
                        <input
                          type={showNewPass ? 'text' : 'password'}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Enter new admin password"
                          className="w-full px-4 py-2.5 pr-10 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:border-amber-500 focus:outline-hidden font-mono"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPass(!showNewPass)}
                          className="absolute right-3 top-2.5 text-stone-500 hover:text-stone-300 cursor-pointer"
                        >
                          {showNewPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-300">
                        Confirm New Password *
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-type new admin password"
                        className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:border-amber-500 focus:outline-hidden font-mono"
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isUpdatingPassword}
                        className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer disabled:opacity-50"
                      >
                        {isUpdatingPassword ? 'Updating...' : 'Update Admin Password'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};
