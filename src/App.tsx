import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FarmerHealthChecker } from './components/FarmerHealthChecker';
import { EmergencyAgriHelp } from './components/EmergencyAgriHelp';
import { DiseaseDatabase } from './components/DiseaseDatabase';
import { StudentExamCenter } from './components/StudentExamCenter';
import { ModelArchitecture } from './components/ModelArchitecture';
import { Footer } from './components/Footer';
import { DiseaseModal } from './components/DiseaseModal';
import { ShareModal } from './components/ShareModal';
import { MandatoryProfileGate } from './components/MandatoryProfileGate';
import { ProfileModal } from './components/ProfileModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminDashboard } from './components/AdminDashboard';
import { NotificationInboxModal } from './components/NotificationInboxModal';
import { Language, LeafDisease, UserProfile, WebsiteSettings } from './types';
import { getSavedProfile, loadUserProfileAsync } from './services/userProfile';
import {
  getAdminToken,
  verifyAdminSession,
  clearAdminToken,
  getWebsiteSettings,
  getInAppNotifications
} from './services/adminService';
import { Shield, ArrowLeft, AlertCircle } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('treeleaf_lang');
      if (saved === 'en' || saved === 'bn') return saved;
    }
    return 'bn'; // default to Bangla for farmer-first friendliness
  });

  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    return getSavedProfile();
  });
  const [isProfileLoading, setIsProfileLoading] = useState<boolean>(true);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isAdminLoginModalOpen, setIsAdminLoginModalOpen] = useState<boolean>(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<'user' | 'admin'>('user');
  const [selectedDisease, setSelectedDisease] = useState<LeafDisease | null>(null);
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);
  const [websiteSettings, setWebsiteSettings] = useState<WebsiteSettings | null>(null);
  const [isNotificationInboxOpen, setIsNotificationInboxOpen] = useState<boolean>(false);
  const [notificationCount, setNotificationCount] = useState<number>(0);

  // Check admin session, user profile, and notifications on mount
  useEffect(() => {
    let isMounted = true;

    // Check if admin is already logged in
    const token = getAdminToken();
    if (token) {
      verifyAdminSession().then((isValid) => {
        if (isMounted && isValid) {
          setIsAdminAuthenticated(true);
        }
      });
    }

    // Load website settings
    getWebsiteSettings().then((settings) => {
      if (isMounted) setWebsiteSettings(settings);
    });

    // Check for notifications
    getInAppNotifications().then((notifs) => {
      if (isMounted) setNotificationCount(notifs.length);
    });

    // Restore user profile from storage / IndexedDB
    loadUserProfileAsync()
      .then((profile) => {
        if (isMounted) {
          if (profile) {
            setUserProfile(profile);
          }
          setIsProfileLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setIsProfileLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'bn' : 'en';
    setLanguage(nextLang);
    try {
      localStorage.setItem('treeleaf_lang', nextLang);
    } catch {
      // ignore storage errors
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleAdminLoginSuccess = () => {
    setIsAdminAuthenticated(true);
    setCurrentView('admin');
  };

  const handleAdminLogout = () => {
    clearAdminToken();
    setIsAdminAuthenticated(false);
    setCurrentView('user');
  };

  // While checking persistence cache briefly on first mount
  if (isProfileLoading && !userProfile && !isAdminAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4 font-sans">
        <div className="h-10 w-10 border-4 border-emerald-700 border-t-transparent rounded-full animate-spin mb-3" />
        <p className="text-sm font-medium text-stone-600">Verifying session credentials...</p>
      </div>
    );
  }

  // If in Admin Dashboard view
  if (isAdminAuthenticated && currentView === 'admin') {
    return (
      <AdminDashboard
        language={language}
        onPreviewUserDashboard={() => setCurrentView('user')}
        onLogout={handleAdminLogout}
        onToggleLanguage={toggleLanguage}
      />
    );
  }

  return (
    <div className={`min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans ${language === 'bn' ? 'font-bangla' : ''}`}>
      {/* Admin Preview Mode Floating Top Bar */}
      {isAdminAuthenticated && currentView === 'user' && (
        <div className="sticky top-0 z-50 bg-amber-500 text-stone-950 px-4 py-2 text-xs sm:text-sm font-bold flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-stone-900" />
            <span>Preview Mode: Viewing website as a Farmer / Student</span>
          </div>
          <button
            type="button"
            onClick={() => setCurrentView('admin')}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-950 text-amber-300 hover:bg-stone-900 transition-colors cursor-pointer text-xs uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Admin Dashboard</span>
          </button>
        </div>
      )}

      {/* Mandatory User Profile / Admin Access Gate on first visit if neither user profile nor admin session exists */}
      {!userProfile && !isAdminAuthenticated && (
        <MandatoryProfileGate
          language={language}
          onProfileComplete={(completed) => {
            setUserProfile(completed);
          }}
          onAdminLogin={() => {
            setIsAdminAuthenticated(true);
            setCurrentView('admin');
          }}
        />
      )}

      {/* System Announcement Banner if configured by Admin */}
      {websiteSettings?.showBanner && (
        <div className="bg-emerald-900 text-emerald-100 text-xs py-2 px-4 text-center font-medium border-b border-emerald-800">
          <span>{language === 'bn' ? websiteSettings.bannerNoticeBn : websiteSettings.bannerNoticeEn}</span>
        </div>
      )}

      {/* 3-Zone Header Contract with User Profile & Admin Panel buttons */}
      <Header
        language={language}
        onToggleLanguage={toggleLanguage}
        onOpenShare={() => setIsShareOpen(true)}
        onOpenProfile={userProfile ? () => setIsProfileModalOpen(true) : undefined}
        userName={userProfile?.fullName}
        onOpenAdmin={() => setIsAdminLoginModalOpen(true)}
        isAdmin={isAdminAuthenticated}
        onReturnToAdmin={() => setCurrentView('admin')}
        onOpenNotifications={() => setIsNotificationInboxOpen(true)}
        unreadNotificationCount={notificationCount}
      />

      <main className="flex-1">
        {/* Simple Farmer-First Hero */}
        <Hero language={language} />

        {/* The Central Farmer Leaf Health Checker */}
        <section id="scanner">
          <FarmerHealthChecker
            language={language}
            onSelectDisease={(d) => setSelectedDisease(d)}
          />
        </section>

        {/* Professional Bangla Section: জরুরি কৃষি সহায়তা */}
        <section id="emergency-helpline">
          <EmergencyAgriHelp language={language} />
        </section>

        {/* Botanical Leaf Disease Encyclopedia with Real Photos */}
        <section id="encyclopedia">
          <DiseaseDatabase
            language={language}
            onSelectDisease={(d) => setSelectedDisease(d)}
          />
        </section>

        {/* Student & Farmer Agri-Exam Center (strictly no ranking) */}
        <StudentExamCenter
          language={language}
          userProfile={userProfile}
        />

        {/* Edge AI & Model Architecture */}
        <section id="model-architecture">
          <ModelArchitecture language={language} />
        </section>
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Disease Detail Protocol Modal */}
      <DiseaseModal
        disease={selectedDisease}
        language={language}
        onClose={() => setSelectedDisease(null)}
      />

      {/* Public Shareable Link & Mobile QR Modal */}
      {isShareOpen && (
        <ShareModal
          language={language}
          onClose={() => setIsShareOpen(false)}
        />
      )}

      {/* User Profile View / Edit Modal */}
      {userProfile && (
        <ProfileModal
          language={language}
          profile={userProfile}
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
          onProfileUpdated={(updated) => {
            setUserProfile(updated);
          }}
        />
      )}

      {/* Admin Login Modal (for clicking Admin Panel in Header) */}
      <AdminLoginModal
        language={language}
        isOpen={isAdminLoginModalOpen}
        onClose={() => setIsAdminLoginModalOpen(false)}
        onLoginSuccess={handleAdminLoginSuccess}
      />

      {/* Notification Inbox Modal for Users */}
      <NotificationInboxModal
        language={language}
        isOpen={isNotificationInboxOpen}
        onClose={() => setIsNotificationInboxOpen(false)}
        userMobile={userProfile?.mobileNumber}
      />
    </div>
  );
}
