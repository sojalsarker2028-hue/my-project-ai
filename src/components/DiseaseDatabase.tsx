import React, { useState, useMemo } from 'react';
import {
  Search,
  Database,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  Filter,
  PhoneCall,
  Flame,
  Check
} from 'lucide-react';
import { Language, LeafDisease, PathogenCategory } from '../types';
import { translations } from '../translations';
import { LEAF_DISEASES, PLANT_SPECIES_LIST, CROP_CATEGORY_META } from '../data/diseases';

interface DiseaseDatabaseProps {
  language: Language;
  onSelectDisease: (disease: LeafDisease) => void;
}

export const DiseaseDatabase: React.FC<DiseaseDatabaseProps> = ({
  language,
  onSelectDisease,
}) => {
  const t = translations[language];

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCrop, setSelectedCrop] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [showHealthyComparison, setShowHealthyComparison] = useState<{ [id: string]: boolean }>({});

  const toggleHealthyView = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setShowHealthyComparison((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter diseases dynamically
  const filteredDiseases = useMemo(() => {
    return LEAF_DISEASES.filter((disease) => {
      // Search text match across name, Bengali name, scientific name, symptoms, crop
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        disease.name.toLowerCase().includes(query) ||
        disease.nameBn.includes(query) ||
        disease.scientificName.toLowerCase().includes(query) ||
        disease.plantSpecies.toLowerCase().includes(query) ||
        disease.plantSpeciesBn.includes(query) ||
        disease.visualCharacteristics.toLowerCase().includes(query) ||
        disease.visualCharacteristicsBn.includes(query) ||
        disease.symptoms.some((s) => s.toLowerCase().includes(query)) ||
        disease.symptomsBn.some((s) => s.includes(query));

      // Crop species match
      const matchesCrop =
        selectedCrop === 'All' ||
        disease.plantSpecies.toLowerCase().includes(selectedCrop.toLowerCase()) ||
        disease.plantSpeciesBn.includes(selectedCrop);

      // Category match
      const matchesCategory =
        selectedCategory === 'all' || disease.category === selectedCategory;

      // Severity match
      const matchesSeverity =
        selectedSeverity === 'all' || disease.severity === selectedSeverity;

      return matchesSearch && matchesCrop && matchesCategory && matchesSeverity;
    });
  }, [searchQuery, selectedCrop, selectedCategory, selectedSeverity]);

  // Category counts for quick tabs
  const categoryCounts = useMemo(() => {
    return {
      all: LEAF_DISEASES.length,
      fungal: LEAF_DISEASES.filter((d) => d.category === 'fungal').length,
      bacterial: LEAF_DISEASES.filter((d) => d.category === 'bacterial').length,
      viral: LEAF_DISEASES.filter((d) => d.category === 'viral').length,
      deficiency: LEAF_DISEASES.filter((d) => d.category === 'deficiency').length,
      pest: LEAF_DISEASES.filter((d) => d.category === 'pest').length,
    };
  }, []);

  return (
    <section id="encyclopedia" className="py-12 lg:py-16 bg-stone-50 border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Database className="h-4 w-4 text-emerald-700" />
            <span>{language === 'en' ? 'Verified Botanical Pathology' : 'যাচাইকৃত উদ্ভিদ রোগ তথ্যভাণ্ডার'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 font-serif">
            {t.databaseHeading}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {t.databaseSubheading}
          </p>
        </div>

        {/* Agricultural Expert Hotline Banner */}
        <div className="mx-auto max-w-5xl mb-8 rounded-2xl bg-linear-to-r from-emerald-800 to-teal-900 p-4 sm:p-5 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-xs text-emerald-300">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                {t.hotlineTitle}
              </p>
              <p className="text-sm font-semibold text-white">
                {language === 'en' ? t.hotlineBD : t.hotlineBD}
              </p>
              <p className="text-xs text-emerald-100/80">
                {language === 'en' ? t.hotlineIN : t.hotlineIN}
              </p>
            </div>
          </div>
          <div className="text-xs bg-white/20 backdrop-blur-xs px-3 py-1.5 rounded-lg font-medium text-white shrink-0">
            {language === 'en' ? 'Toll-Free Agricultural Support' : 'বিনামূল্যে সরকারি কৃষি সেবা'}
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mx-auto max-w-5xl mb-8 space-y-4">
          {/* Main Search Input */}
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full rounded-2xl border border-stone-300 bg-white pl-11 pr-16 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 focus:outline-none shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-500 hover:text-stone-800 bg-stone-100 px-2 py-1 rounded"
              >
                {language === 'en' ? 'Clear' : 'মুছুন'}
              </button>
            )}
          </div>

          {/* Quick Crop Selector Pills (Horizontal Scroll) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                {language === 'en' ? 'Select Crop / Plant:' : 'ফসল অনুযায়ী ফিল্টার করুন:'}
              </span>
              <span className="text-xs text-stone-500">
                {selectedCrop === 'All'
                  ? (language === 'en' ? 'All 21+ Crops' : 'সকল ২১+ ফসল')
                  : selectedCrop}
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              <button
                onClick={() => setSelectedCrop('All')}
                className={`shrink-0 rounded-xl px-3 py-1.5 text-xs font-bold transition-all shadow-xs ${
                  selectedCrop === 'All'
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-white border border-stone-300 text-stone-700 hover:bg-stone-50'
                }`}
              >
                🌱 {language === 'en' ? `All Crops (${LEAF_DISEASES.length})` : `সকল ফসল (${LEAF_DISEASES.length})`}
              </button>

              {CROP_CATEGORY_META.map((crop) => {
                const isSelected = selectedCrop === crop.id;
                return (
                  <button
                    key={crop.id}
                    onClick={() => setSelectedCrop(crop.id)}
                    className={`shrink-0 flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all shadow-xs ${
                      isSelected
                        ? 'bg-emerald-800 text-white shadow-sm'
                        : 'bg-white border border-stone-300 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>{crop.emoji}</span>
                    <span>{language === 'en' ? crop.nameEn : crop.nameBn}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Filter Chips & Counter */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-200">
            {/* Category Chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-stone-900 text-white font-bold'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {language === 'en' ? `All (${categoryCounts.all})` : `সকল (${categoryCounts.all})`}
              </button>

              <button
                onClick={() => setSelectedCategory('fungal')}
                className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                  selectedCategory === 'fungal'
                    ? 'bg-emerald-800 text-white font-bold'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {language === 'en' ? `Fungal (${categoryCounts.fungal})` : `ছত্রাকজনিত (${categoryCounts.fungal})`}
              </button>

              <button
                onClick={() => setSelectedCategory('bacterial')}
                className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                  selectedCategory === 'bacterial'
                    ? 'bg-amber-800 text-white font-bold'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {language === 'en' ? `Bacterial (${categoryCounts.bacterial})` : `ব্যাকটেরিয়াজনিত (${categoryCounts.bacterial})`}
              </button>

              <button
                onClick={() => setSelectedCategory('viral')}
                className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                  selectedCategory === 'viral'
                    ? 'bg-rose-800 text-white font-bold'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {language === 'en' ? `Viral (${categoryCounts.viral})` : `ভাইরাসজনিত (${categoryCounts.viral})`}
              </button>

              <button
                onClick={() => setSelectedCategory('deficiency')}
                className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                  selectedCategory === 'deficiency'
                    ? 'bg-indigo-800 text-white font-bold'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {language === 'en' ? `Deficiency (${categoryCounts.deficiency})` : `পুষ্টির অভাব (${categoryCounts.deficiency})`}
              </button>

              <button
                onClick={() => setSelectedCategory('pest')}
                className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                  selectedCategory === 'pest'
                    ? 'bg-purple-800 text-white font-bold'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {language === 'en' ? `Pest (${categoryCounts.pest})` : `পোকা/মাকড় (${categoryCounts.pest})`}
              </button>
            </div>

            {/* Results Counter */}
            <div className="text-xs font-mono font-bold text-emerald-950 tabular-nums bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
              {filteredDiseases.length} {language === 'en' ? 'diseases found' : 'রোগ প্রদর্শিত'}
            </div>
          </div>
        </div>

        {/* Diseases Grid */}
        {filteredDiseases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDiseases.map((disease) => {
              const isShowingHealthy = showHealthyComparison[disease.id] || false;
              const displayImage = isShowingHealthy && disease.healthyImageUrl
                ? disease.healthyImageUrl
                : disease.imageUrl;
              const displayAlt = isShowingHealthy && disease.healthyImageAlt
                ? disease.healthyImageAlt
                : disease.imageAlt;

              return (
                <div
                  key={disease.id}
                  onClick={() => onSelectDisease(disease)}
                  className="group flex flex-col justify-between cursor-pointer rounded-2xl border border-stone-200/90 bg-white overflow-hidden shadow-xs hover:border-emerald-600 hover:shadow-xl transition-all"
                >
                  {/* Real Photographic Leaf Image Container */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100">
                    <img
                      src={displayImage}
                      alt={displayAlt}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = disease.imageUrl;
                      }}
                    />
                    
                    {/* Visual Scrim for crisp text contrast */}
                    <div className="absolute inset-0 bg-linear-to-t from-stone-950/85 via-stone-950/25 to-transparent pointer-events-none" />

                    {/* Top Status Tags */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                      <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold text-white shadow-xs ${
                        isShowingHealthy ? 'bg-emerald-700' : 'bg-stone-900/80 backdrop-blur-xs'
                      }`}>
                        {isShowingHealthy
                          ? (language === 'en' ? 'Healthy Leaf Reference' : 'সুস্থ পাতার নমুনা')
                          : (language === 'en' ? 'Affected Diseased Leaf' : 'রোগাক্রান্ত পাতার লক্ষণ')}
                      </span>

                      <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold text-white shadow-xs ${
                        disease.severity === 'High'
                          ? 'bg-rose-700'
                          : disease.severity === 'Moderate'
                          ? 'bg-amber-700'
                          : 'bg-emerald-700'
                      }`}>
                        {language === 'en' ? `${disease.severity} Severity` : `${disease.severityBn} ক্ষতিকর`}
                      </span>
                    </div>

                    {/* Plant name & Disease name UNDER the photo on the image banner */}
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <p className="text-[11px] font-medium text-emerald-300 uppercase tracking-wider">
                        {language === 'en' ? `Plant: ${disease.plantSpecies}` : `ফসল: ${disease.plantSpeciesBn}`}
                      </p>
                      <p className="text-sm sm:text-base font-bold font-serif text-white truncate">
                        {language === 'en' ? disease.name : disease.nameBn}
                      </p>
                      <p className="text-[10px] italic text-stone-300 truncate">
                        {disease.scientificName}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                    <div>
                      {/* Category Tag & Comparison Toggle */}
                      <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                        <span className="font-semibold text-emerald-800 uppercase tracking-wider text-[11px]">
                          {language === 'en' ? disease.category : disease.categoryBn}
                        </span>

                        {/* Interactive Healthy vs Diseased photo comparison toggle */}
                        {disease.healthyImageUrl && (
                          <button
                            onClick={(e) => toggleHealthyView(disease.id, e)}
                            className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-950 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 transition-colors"
                          >
                            {isShowingHealthy
                              ? (language === 'en' ? 'Show Disease' : 'রোগের ছবি দেখুন')
                              : (language === 'en' ? 'Compare Healthy' : 'সুস্থ পাতার তুলনা')}
                          </button>
                        )}
                      </div>

                      {/* Visible Diagnostic Symptoms */}
                      <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-3">
                        {language === 'en'
                          ? disease.visualCharacteristics
                          : disease.visualCharacteristicsBn}
                      </p>

                      {/* Quick Symptoms Bullet Preview */}
                      <div className="rounded-lg bg-stone-50 p-2.5 border border-stone-100 text-[11px] text-stone-700 mb-4 space-y-1">
                        <span className="font-bold text-stone-900 block">
                          {language === 'en' ? 'Key Field Symptoms:' : 'প্রধান লক্ষণসমূহ:'}
                        </span>
                        {(language === 'en' ? disease.symptoms : disease.symptomsBn)
                          .slice(0, 2)
                          .map((sym, idx) => (
                            <p key={idx} className="flex items-start gap-1.5 truncate">
                              <span className="text-amber-600 font-bold">•</span>
                              <span className="truncate">{sym}</span>
                            </p>
                          ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-800 group-hover:text-emerald-950 flex items-center gap-1">
                        <span>{t.viewDetails}</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono">
                        #{disease.id.split('-')[0]}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-stone-300 bg-white p-12 text-center max-w-md mx-auto">
            <ShieldAlert className="mx-auto h-12 w-12 text-stone-400 mb-3" />
            <h3 className="text-base font-bold text-stone-900">
              {language === 'en' ? 'No matching plant diseases found' : 'কোনো রোগ খুঁজে পাওয়া যায়নি'}
            </h3>
            <p className="mt-1 text-xs text-stone-500">
              {language === 'en'
                ? 'Try searching with different terms or reset your filters.'
                : 'ভিন্ন নাম দিয়ে অনুসন্ধান করুন অথবা ফিল্টার পরিবর্তন করুন।'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCrop('All');
                setSelectedCategory('all');
                setSelectedSeverity('all');
              }}
              className="mt-4 rounded-xl bg-emerald-800 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-900 transition-colors"
            >
              {language === 'en' ? 'Reset All Filters' : 'সকল ফিল্টার রিসেট করুন'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
