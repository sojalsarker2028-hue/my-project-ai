import React from 'react';
import { Leaf, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];

  return (
    <footer className="border-t border-stone-200 bg-stone-100/80 text-stone-600 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-800 text-white">
              <Leaf className="h-4 w-4" />
            </span>
            <div>
              <span className="font-bold text-stone-900 text-sm font-serif">
                {t.appTitle}
              </span>
              <p className="text-[11px] text-stone-500">
                {t.appTagline}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-stone-600 font-medium">
            <a href="#scanner" className="hover:text-emerald-800 transition-colors">
              {t.navChecker}
            </a>
            <a href="#encyclopedia" className="hover:text-emerald-800 transition-colors">
              {t.navDiseases}
            </a>
            <a href="#model-architecture" className="hover:text-emerald-800 transition-colors">
              {t.navHelp}
            </a>
          </div>
        </div>

        {/* Agricultural Disclaimer */}
        <div className="pt-6">
          <p className="text-[11px] text-stone-500 leading-relaxed max-w-4xl">
            {t.disclaimerText}
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-stone-400">
            <p>{language === 'en' ? 'Powered by Google Teachable Machine & TensorFlow.js edge AI.' : 'গুগল টিচেবল মেশিন ও টেনসরফ্লো জেএস চালিত।'}</p>
            <p>© {new Date().getFullYear()} Tree Leaf AI. All agricultural advice curated under CC BY-SA.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
