import React from 'react';
import { X, ShieldAlert, CheckCircle2, Sprout, FlaskConical, Thermometer, SplitSquareVertical } from 'lucide-react';
import { Language, LeafDisease } from '../types';
import { translations } from '../translations';

interface DiseaseModalProps {
  disease: LeafDisease | null;
  language: Language;
  onClose: () => void;
}

export const DiseaseModal: React.FC<DiseaseModalProps> = ({
  disease,
  language,
  onClose,
}) => {
  if (!disease) return null;
  const t = translations[language];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-2xl rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-lg p-1.5 bg-white/80 backdrop-blur-xs text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors shadow-xs"
          title={t.closeModal}
        >
          <X className="h-5 w-5" />
        </button>

        {/* Real Photographic Images Comparison Gallery */}
        <div className="mb-6 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 rounded-t-2xl overflow-hidden border-b border-stone-200 bg-stone-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
            {/* Affected Diseased Leaf Photo */}
            <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-900">
              <img
                src={disease.imageUrl}
                alt={disease.imageAlt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 bg-rose-800/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs">
                {language === 'en' ? 'Affected Diseased Leaf' : 'আক্রান্ত পাতার লক্ষণ'}
              </div>
              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                <p className="text-[11px] font-medium text-emerald-300 uppercase tracking-wide">
                  {language === 'en' ? `Plant: ${disease.plantSpecies}` : `গাছ: ${disease.plantSpeciesBn}`}
                </p>
                <p className="text-xs font-bold text-white truncate">
                  {language === 'en' ? disease.name : disease.nameBn}
                </p>
              </div>
            </div>

            {/* Healthy Leaf Comparison Photo */}
            <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-900">
              <img
                src={disease.healthyImageUrl || disease.imageUrl}
                alt={disease.healthyImageAlt || 'Healthy leaf specimen for comparison'}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 bg-emerald-800/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs">
                {language === 'en' ? 'Healthy Leaf Reference' : 'সুস্থ পাতার তুলনা'}
              </div>
              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                <p className="text-[11px] font-medium text-emerald-300 uppercase tracking-wide">
                  {language === 'en' ? `Plant: ${disease.plantSpecies}` : `গাছ: ${disease.plantSpeciesBn}`}
                </p>
                <p className="text-xs font-bold text-white truncate">
                  {language === 'en' ? 'Optimal Chlorophyll Foliage' : 'স্বাভাবিক সুস্থ সবুজ পাতা'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Header Metadata */}
        <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
          <span className="font-semibold text-emerald-800">
            {language === 'en' ? disease.plantSpecies : disease.plantSpeciesBn}
          </span>
          <span aria-hidden="true">·</span>
          <span>{language === 'en' ? disease.category : disease.categoryBn}</span>
          <span aria-hidden="true">·</span>
          <span className={disease.severity === 'High' ? 'text-rose-600 font-semibold' : 'text-stone-500'}>
            {language === 'en' ? `${disease.severity} Severity` : `${disease.severityBn} ক্ষতিকর`}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
          {language === 'en' ? disease.name : disease.nameBn}
        </h3>

        <p className="mt-1 text-xs italic text-stone-500 font-serif">
          <span className="font-sans not-italic font-medium text-stone-400">
            {t.modalScientificName}:{' '}
          </span>
          {disease.scientificName}
        </p>

        {/* Favorable Conditions Banner */}
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-stone-50 border border-stone-200 p-3 text-xs text-stone-600">
          <Thermometer className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-stone-800">
              {t.modalFavorableConditions}:{' '}
            </span>
            <span>
              {language === 'en'
                ? disease.frequentConditions
                : disease.frequentConditionsBn}
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-5 max-h-[50vh] overflow-y-auto pr-1">
          {/* Symptoms Section */}
          <div className="rounded-xl border border-stone-200/90 bg-stone-50/50 p-4">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
              <ShieldAlert className="h-4 w-4 text-amber-600" />
              <span>{t.modalSymptoms}</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-600">
              {(language === 'en' ? disease.symptoms : disease.symptomsBn).map(
                (item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Causes Section */}
          <div className="rounded-xl border border-stone-200/90 bg-stone-50/50 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
              {t.modalCauses}
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-600">
              {(language === 'en' ? disease.causes : disease.causesBn).map(
                (item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-stone-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Organic & Biological Treatment */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-950 mb-2">
              <Sprout className="h-4 w-4 text-emerald-700" />
              <span>{t.modalOrganicTreatment}</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-700">
              {(language === 'en'
                ? disease.organicTreatment
                : disease.organicTreatmentBn
              ).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conventional / Chemical Treatment */}
          <div className="rounded-xl border border-stone-200 bg-stone-50/50 p-4">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
              <FlaskConical className="h-4 w-4 text-stone-600" />
              <span>{t.modalChemicalTreatment}</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-600">
              {(language === 'en'
                ? disease.chemicalTreatment
                : disease.chemicalTreatmentBn
              ).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-stone-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prevention */}
          <div className="rounded-xl border border-stone-200 bg-stone-50/50 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
              {t.modalPrevention}
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-600">
              {(language === 'en'
                ? disease.prevention
                : disease.preventionBn
              ).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Farmer Expert Guidance & Local Hotline Card */}
          <div className="rounded-xl border border-emerald-300 bg-emerald-50/70 p-4">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-950 mb-1.5">
              <span>🌾</span>
              <span>{t.cardExpertTitle}</span>
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed mb-3">
              {t.expertNoticeText}
            </p>
            <div className="rounded-lg bg-emerald-800 text-white p-3 text-xs space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <span>📞</span>
                <span>{language === 'en' ? t.hotlineBD : t.hotlineBD}</span>
              </p>
              <p className="text-emerald-100 text-[11px]">
                {language === 'en' ? t.hotlineIN : t.hotlineIN}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Close Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-stone-900 px-4 py-2 text-xs font-semibold text-white hover:bg-stone-800 transition-colors"
          >
            {t.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
