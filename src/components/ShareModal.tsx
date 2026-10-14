import React, { useState } from 'react';
import { X, Copy, Check, QrCode, Share2, Smartphone } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ShareModalProps {
  language: Language;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ language, onClose }) => {
  const t = translations[language];
  const [copied, setCopied] = useState<boolean>(false);

  // Determine current public URL
  const currentUrl =
    typeof window !== 'undefined'
      ? window.location.href.split('#')[0]
      : 'https://ais-pre-33o25pwap5fqnvi5w5qcua-931383992309.asia-southeast1.run.app';

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = currentUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Tree Leaf AI - Leaf Health Scanner',
          text: 'Diagnose healthy vs unhealthy leaves in real-time with Google Teachable Machine AI.',
          url: currentUrl,
        });
      } catch {
        // User dismissed share dialog
      }
    } else {
      handleCopy();
    }
  };

  // QR code image via quick SVG generator or standard reliable API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    currentUrl
  )}&color=064e3b&bgcolor=ffffff&qzone=1`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-stone-200 bg-white p-6 sm:p-7 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
          title={t.closeModal}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
            <Share2 className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-900 font-serif">
              {t.shareTitle}
            </h3>
          </div>
        </div>

        <p className="text-xs text-stone-600 leading-relaxed mt-1">
          {t.shareSubtitle}
        </p>

        {/* Copy Link Input Bar */}
        <div className="mt-5">
          <label className="block text-xs font-semibold text-stone-700 mb-1.5">
            {t.copyLink}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="flex-1 rounded-lg border border-stone-300 bg-stone-50 px-3 py-2 text-xs font-mono text-stone-700 select-all focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-800 text-white hover:bg-emerald-900'
              }`}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>{language === 'en' ? 'Copied!' : 'কপি হয়েছে!'}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>{language === 'en' ? 'Copy' : 'কপি'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mt-6 rounded-xl border border-stone-200 bg-stone-50/70 p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-stone-700 mb-2">
            <QrCode className="h-4 w-4 text-emerald-700" />
            <span>{language === 'en' ? 'Scan QR on Mobile Phone' : 'স্মার্টফোনে কিউআর কোড স্ক্যান করুন'}</span>
          </div>

          <div className="mx-auto my-2 flex h-40 w-40 items-center justify-center rounded-lg bg-white p-2 border border-stone-200 shadow-xs">
            <img
              src={qrCodeUrl}
              alt="QR Code for mobile access"
              referrerPolicy="no-referrer"
              className="h-full w-full object-contain"
            />
          </div>

          <p className="text-[11px] text-stone-500 max-w-xs mx-auto leading-relaxed">
            {language === 'en'
              ? 'Open your smartphone camera to scan and test on real leaves outdoors in the field.'
              : 'মোবাইলের ক্যামেরা দিয়ে স্ক্যান করে সরাসরি মাঠে বা বাগানে পাতার ছবি তুলুন।'}
          </p>
        </div>

        {/* Native Mobile Share Button */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <div className="mt-4">
            <button
              onClick={handleNativeShare}
              className="w-full flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white py-2 text-xs font-semibold text-stone-800 hover:bg-stone-50"
            >
              <Smartphone className="h-4 w-4 text-emerald-700" />
              <span>{language === 'en' ? 'Open Device Share Sheet' : 'ডিভাইসে শেয়ার করুন'}</span>
            </button>
          </div>
        )}

        <div className="mt-4 text-center">
          <p className="text-[10px] text-stone-400">
            {language === 'en'
              ? 'Zero installation needed. Universal browser compatibility (Chrome, Safari, iOS, Android).'
              : 'কোনো অ্যাপ ডাউনলোডের প্রয়োজন নেই। যেকোনো স্মার্টফোন বা কম্পিউটারে সরাসরি কাজ করে।'}
          </p>
        </div>
      </div>
    </div>
  );
};
