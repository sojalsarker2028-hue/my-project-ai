import React from 'react';
import { ShieldCheck, Cpu, Database, ArrowRight, Camera } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import heroLeavesImg from '../assets/images/hero_plant_leaves_1791699754099.jpg';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-linear-to-b from-stone-100/80 via-emerald-50/30 to-stone-50 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline and Context */}
          <div className="lg:col-span-7">
            {/* Model Badge */}
            <div className="inline-flex items-center gap-2 rounded-md bg-emerald-100/80 px-3 py-1 text-xs font-semibold text-emerald-900 border border-emerald-200/60 mb-6">
              <Cpu className="h-3.5 w-3.5 text-emerald-700" />
              <span>{language === 'en' ? 'Active Model: Google Teachable Machine' : 'টিচেবল মেশিন এআই চালিত'}</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl font-serif text-balance">
              {t.heroTitle}
            </h1>

            <p className="mt-4 max-w-2xl text-base text-stone-600 sm:text-lg leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#scanner"
                className="flex items-center gap-2 rounded-lg bg-emerald-800 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-900 transition-colors whitespace-nowrap shrink-0"
              >
                <Camera className="h-4 w-4" />
                <span>{t.heroCta}</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>

              <a
                href="#encyclopedia"
                className="flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 hover:border-emerald-700 hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 shadow-xs"
              >
                <Database className="h-4 w-4 text-emerald-700" />
                <span>{language === 'en' ? 'Browse Crop Diseases' : 'ফসলের রোগ তালিকা'}</span>
              </a>
            </div>

            {/* Meta Key Values */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-stone-200/80 pt-6">
              <div>
                <p className="text-2xl font-bold font-mono text-emerald-950 tabular-nums">100%</p>
                <p className="text-xs font-medium text-stone-500 mt-0.5">{t.accuracyPill}</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-emerald-950 tabular-nums">100+</p>
                <p className="text-xs font-medium text-stone-500 mt-0.5">{t.cropsCovered}</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-emerald-950 tabular-nums">2</p>
                <p className="text-xs font-medium text-stone-500 mt-0.5">{t.bilingualBadge}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Specimen Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-xl shadow-stone-200/50">
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={heroLeavesImg}
                  alt="Healthy green tree leaves foliage"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    <span>Real Model Screening</span>
                  </span>
                  <span className="font-mono text-stone-200">224 × 224 MobileNet</span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span className="font-semibold text-emerald-900">
                    {language === 'en' ? 'Model Target Classes' : 'মডেলের পূর্বাভাস শ্রেণি'}
                  </span>
                  <span className="font-mono text-stone-400">Teachable Machine</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 rounded-md bg-emerald-50 border border-emerald-200 px-3 py-2 text-center">
                    <p className="text-xs font-semibold text-emerald-900">Healthy Leaf</p>
                    <p className="text-[11px] text-emerald-700 font-bangla">সুস্থ পাতা</p>
                  </div>
                  <div className="flex-1 rounded-md bg-amber-50 border border-amber-200 px-3 py-2 text-center">
                    <p className="text-xs font-semibold text-amber-900">Unhealthy Leaf</p>
                    <p className="text-[11px] text-amber-700 font-bangla">অসুস্থ পাতা</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
