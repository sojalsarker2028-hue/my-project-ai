import React, { useState, useMemo } from 'react';
import {
  Phone,
  PhoneCall,
  ExternalLink,
  ShieldAlert,
  Clock,
  Coins,
  MapPin,
  Building2,
  Search,
  Sprout,
  CheckCircle2,
  Flame,
  CloudLightning,
  AlertTriangle,
  Info,
  Filter
} from 'lucide-react';
import { Language } from '../types';
import {
  VERIFIED_HELPLINES,
  DISTRICT_AGRI_OFFICES,
  EmergencyHelpline,
  AgriOfficeContact
} from '../data/emergencyHelplines';

interface EmergencyAgriHelpProps {
  language: Language;
}

export const EmergencyAgriHelp: React.FC<EmergencyAgriHelpProps> = ({ language }) => {
  const isBn = language === 'bn';
  const [selectedDivision, setSelectedDivision] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const divisions = [
    { id: 'all', nameBn: 'সব বিভাগ (All)', nameEn: 'All Divisions' },
    { id: 'ঢাকা', nameBn: 'ঢাকা', nameEn: 'Dhaka' },
    { id: 'ময়মনসিংহ', nameBn: 'ময়মনসিংহ', nameEn: 'Mymensingh' },
    { id: 'রাজশাহী', nameBn: 'রাজশাহী', nameEn: 'Rajshahi' },
    { id: 'রংপুর', nameBn: 'রংপুর', nameEn: 'Rangpur' },
    { id: 'খুলনা', nameBn: 'খুলনা', nameEn: 'Khulna' },
    { id: 'চট্টগ্রাম', nameBn: 'চট্টগ্রাম', nameEn: 'Chattogram' },
    { id: 'সিলেট', nameBn: 'সিলেট', nameEn: 'Sylhet' },
    { id: 'বরিশাল', nameBn: 'বরিশাল', nameEn: 'Barishal' }
  ];

  const filteredOffices = useMemo(() => {
    return DISTRICT_AGRI_OFFICES.filter((office) => {
      const matchDivision = selectedDivision === 'all' || office.divisionBn === selectedDivision || office.divisionEn.toLowerCase() === selectedDivision.toLowerCase();
      if (!matchDivision) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        office.districtBn.toLowerCase().includes(q) ||
        office.districtEn.toLowerCase().includes(q) ||
        office.officeNameBn.toLowerCase().includes(q) ||
        office.officeNameEn.toLowerCase().includes(q) ||
        office.contactPersonTitleBn.toLowerCase().includes(q) ||
        office.specialtyBn.toLowerCase().includes(q) ||
        office.specialtyEn.toLowerCase().includes(q)
      );
    });
  }, [selectedDivision, searchQuery]);

  const getHelplineIcon = (type: EmergencyHelpline['iconType']) => {
    switch (type) {
      case 'agri':
        return <Sprout className="h-7 w-7 text-emerald-600" />;
      case 'govt':
        return <Building2 className="h-7 w-7 text-blue-600" />;
      case 'emergency':
        return <ShieldAlert className="h-7 w-7 text-rose-600" />;
      case 'disaster':
        return <CloudLightning className="h-7 w-7 text-amber-600" />;
      case 'fire':
        return <Flame className="h-7 w-7 text-red-600" />;
      default:
        return <Phone className="h-7 w-7 text-emerald-600" />;
    }
  };

  return (
    <div className="w-full bg-linear-to-b from-stone-50 via-emerald-50/25 to-stone-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <PhoneCall className="h-4 w-4 text-emerald-700 animate-pulse" />
            <span>{isBn ? 'জরুরি কৃষি সহায়তা ও সরকারি ডিরেক্টরি' : 'Emergency Agricultural Assistance & Directory'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight font-serif">
            {isBn ? 'জরুরি কৃষি সহায়তা' : 'Emergency Agricultural Assistance'}
          </h2>

          <p className="mt-3.5 text-stone-600 text-sm sm:text-base leading-relaxed">
            {isBn
              ? 'ফসলে তীব্র রোগবালাই, বিষক্রিয়া বা প্রাকৃতিক দুর্যোগের সময়ে বাংলাদেশ সরকারের যাচাইকৃত হটলাইন ও জেলা পর্যায়ের কৃষি বিশেষজ্ঞ কর্মকর্তাদের তাৎক্ষণিক সহায়তা ডিরেক্টরি।'
              : 'Verified Bangladesh government toll-free & subsidized helplines, local agricultural extension officers, and plant pathology clinics for immediate farm assistance.'}
          </p>
        </div>

        {/* 5 Verified National Helplines Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {VERIFIED_HELPLINES.map((helpline) => (
            <div
              key={helpline.id}
              className="bg-white rounded-3xl border-2 border-emerald-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-emerald-500"
            >
              {/* Card Header & Badge */}
              <div className="p-5 sm:p-6 pb-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 group-hover:scale-105 transition-transform shrink-0">
                    {getHelplineIcon(helpline.iconType)}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-white text-[11px] font-bold tracking-wide shadow-2xs ${helpline.badgeColor}`}>
                    {isBn ? helpline.badgeBn : helpline.nameEn}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                  {isBn ? helpline.nameBn : helpline.nameEn}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {isBn ? helpline.purposeBn : helpline.purposeEn}
                </p>

                {/* Big Number Display */}
                <div className="my-4 py-3 px-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-800 block">
                      {isBn ? 'হটলাইন নম্বর (Short Code)' : 'Helpline Number'}
                    </span>
                    <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-emerald-950">
                      {helpline.number}
                    </span>
                  </div>

                  <a
                    href={helpline.telLink}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-sm px-4 py-2.5 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                    title={`Call ${helpline.number}`}
                  >
                    <Phone className="h-4 w-4 fill-white" />
                    <span>{isBn ? 'সরাসরি কল' : 'Call Now'}</span>
                  </a>
                </div>

                {/* Verified Metadata Specs */}
                <div className="space-y-2 text-[11px] sm:text-xs text-stone-600 border-t border-stone-100 pt-3">
                  <div className="flex items-start gap-2">
                    <Clock className="h-3.5 w-3.5 text-stone-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-800 mr-1">{isBn ? 'সময়সূচি:' : 'Operating Hours:'}</strong>
                      <span>{isBn ? helpline.hoursBn : helpline.hoursEn}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Coins className="h-3.5 w-3.5 text-stone-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-800 mr-1">{isBn ? 'কল চার্জ:' : 'Call Charge:'}</strong>
                      <span className="text-emerald-800 font-semibold">{isBn ? helpline.chargesBn : helpline.chargesEn}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Info className="h-3.5 w-3.5 text-stone-400 shrink-0 mt-0.5" />
                    <div className="text-[11px] text-stone-500">
                      <span>{isBn ? helpline.authorityBn : helpline.authorityEn}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: One-Tap Call & Website Button */}
              <div className="bg-stone-50 px-5 py-3 border-t border-stone-200/80 flex items-center justify-between gap-2 text-xs">
                <a
                  href={helpline.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-800 hover:text-emerald-950 font-bold hover:underline transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>{isBn ? 'অফিসিয়াল ওয়েবসাইট' : 'Official Portal'}</span>
                </a>

                <a
                  href={helpline.telLink}
                  className="font-mono font-bold text-emerald-900 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-300"
                >
                  {helpline.number}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* DISTRICT-WISE DIRECTORY: LOCAL EXTENSION OFFICERS & CLINICS */}
        {/* ----------------------------------------------------------------- */}
        <div className="bg-white rounded-3xl border-2 border-emerald-300/80 p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-1">
                <Building2 className="h-4 w-4" />
                <span>{isBn ? 'মাঠপর্যায়ের স্থানীয় অফিস ও বিশেষজ্ঞ তালিকা' : 'District Agriculture Offices & Experts'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
                {isBn ? 'জেলা কৃষি কর্মকর্তা ও উদ্ভিদ রোগতত্ত্ববিদ ডিরেক্টরি' : 'District Agriculture Officers & Plant Pathologists'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                {isBn
                  ? 'আপনার এলাকার উপপরিচালক কার্যালয় (ডিএই), বিএআরআই গবেষণা কেন্দ্র ও কৃষি বিশ্ববিদ্যালয়ের উদ্ভিদ ক্লিনিকের সাথে সরাসরি যোগাযোগ করুন।'
                  : 'Connect with local DAE Deputy Directors, BARI regional research stations, and university plant disease diagnostic clinics.'}
              </p>
            </div>

            {/* Quick Search Input */}
            <div className="relative min-w-[260px] sm:w-80">
              <Search className="h-4 w-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isBn ? 'জেলা, অফিস বা ফসল দিয়ে খুঁজুন...' : 'Search by district, office, or crop...'}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Division Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-thin">
            <span className="text-xs font-bold text-stone-500 mr-1.5 flex items-center gap-1 shrink-0">
              <Filter className="h-3.5 w-3.5" />
              <span>{isBn ? 'বিভাগ:' : 'Division:'}</span>
            </span>
            {divisions.map((div) => (
              <button
                key={div.id}
                onClick={() => setSelectedDivision(div.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedDivision === div.id
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {isBn ? div.nameBn : div.nameEn}
              </button>
            ))}
          </div>

          {/* Directory Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredOffices.length === 0 ? (
              <div className="col-span-full py-12 text-center text-stone-500 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
                <AlertTriangle className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                <p className="font-bold text-sm">
                  {isBn ? 'এই সার্চে কোনো অফিস পাওয়া যায়নি।' : 'No local agriculture offices found matching your search.'}
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  {isBn ? 'অন্য কোনো জেলা বা ফসলের নাম দিয়ে চেষ্টা করুন।' : 'Try searching for another district or division.'}
                </p>
              </div>
            ) : (
              filteredOffices.map((office) => (
                <div
                  key={office.id}
                  className="bg-stone-50/80 rounded-2xl border border-stone-200 p-5 hover:border-emerald-400 hover:bg-white transition-all shadow-2xs hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    {/* Location Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                        <MapPin className="h-3 w-3" />
                        <span>{isBn ? office.districtBn : office.districtEn}</span>
                        <span className="text-emerald-500">|</span>
                        <span>{isBn ? office.divisionBn : office.divisionEn}</span>
                      </span>

                      <span className="text-[10px] text-stone-500 font-medium">
                        {isBn ? 'যাচাইকৃত অফিস' : 'Verified'}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-stone-900 leading-snug">
                      {isBn ? office.officeNameBn : office.officeNameEn}
                    </h4>

                    {/* Officer Title */}
                    <p className="text-xs font-semibold text-emerald-900 mt-1 mb-2.5">
                      👤 {isBn ? office.contactPersonTitleBn : office.contactPersonTitleEn}
                    </p>

                    {/* Specialty Callout */}
                    <div className="p-2.5 rounded-xl bg-white border border-stone-200/90 text-[11px] text-stone-700 mb-3 space-y-1">
                      <div className="font-bold text-emerald-950 flex items-center gap-1">
                        <Sprout className="h-3 w-3 text-emerald-700" />
                        <span>{isBn ? 'বিশেষত্ব ও ডায়াগনস্টিক সেল:' : 'Specialty & Diagnostics:'}</span>
                      </div>
                      <p className="leading-relaxed">
                        {isBn ? office.specialtyBn : office.specialtyEn}
                      </p>
                    </div>

                    {/* Address & Hours */}
                    <div className="space-y-1.5 text-[11px] text-stone-600 mb-4">
                      <p className="flex items-start gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-stone-400 shrink-0 mt-0.5" />
                        <span>{isBn ? office.addressBn : office.addressEn}</span>
                      </p>
                      <p className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-stone-400 shrink-0" />
                        <span>{isBn ? office.officeHoursBn : office.officeHoursEn}</span>
                      </p>
                    </div>
                  </div>

                  {/* Actions: One-Tap Call + Website */}
                  <div className="pt-3 border-t border-stone-200 flex items-center justify-between gap-2">
                    <a
                      href={office.telLink}
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-3.5 py-2 shadow-xs transition-transform active:scale-95 cursor-pointer"
                    >
                      <Phone className="h-3.5 w-3.5 fill-white" />
                      <span>{office.phone}</span>
                    </a>

                    <a
                      href={office.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-stone-600 hover:text-emerald-800 hover:bg-stone-100 border border-stone-200 transition-colors"
                      title={isBn ? 'ওয়েবসাইটে ভিজিট করুন' : 'Visit Official Website'}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Safety & Protocol Banner */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong className="block font-bold text-amber-900 text-sm sm:text-base mb-0.5">
                {isBn ? 'কৃষকদের জন্য জরুরি সতর্কতা ও পরামর্শ' : 'Emergency Guidelines for Farmers'}
              </strong>
              <p>
                {isBn
                  ? 'অপরিচিত বা বিষাক্ত পাতার সংস্পর্শে এলে অবিলম্বে সাবান-পানি দিয়ে ধুয়ে ফেলুন। রাসায়নিক কীটনাশক প্রয়োগের পূর্বে সর্বদা উপসহকারী কৃষি কর্মকর্তা (SAAO) বা কৃষি কল সেন্টার ১৬১২৩-এ ফোন করে সঠিক ডোজ নিশ্চিত হোন।'
                  : 'Always wash with soap and water after touching unfamiliar or toxic leaves. Consult with SAAO or call 16123 to verify safe pesticide dosage before application.'}
              </p>
            </div>
          </div>

          <a
            href="tel:16123"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-black text-xs sm:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <Phone className="h-4 w-4 fill-white" />
            <span>{isBn ? '১৬১২৩-এ ডায়াল করুন' : 'Call 16123'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
