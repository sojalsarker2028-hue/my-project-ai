export interface EmergencyHelpline {
  id: string;
  nameBn: string;
  nameEn: string;
  number: string;
  telLink: string;
  purposeBn: string;
  purposeEn: string;
  hoursBn: string;
  hoursEn: string;
  chargesBn: string;
  chargesEn: string;
  authorityBn: string;
  authorityEn: string;
  websiteUrl: string;
  badgeBn: string;
  badgeColor: string;
  iconType: 'agri' | 'govt' | 'emergency' | 'disaster' | 'fire';
}

export interface AgriOfficeContact {
  id: string;
  districtBn: string;
  districtEn: string;
  divisionBn: string;
  divisionEn: string;
  officeNameBn: string;
  officeNameEn: string;
  contactPersonTitleBn: string;
  contactPersonTitleEn: string;
  phone: string;
  telLink: string;
  email?: string;
  addressBn: string;
  addressEn: string;
  officeHoursBn: string;
  officeHoursEn: string;
  websiteUrl: string;
  specialtyBn: string;
  specialtyEn: string;
}

export const VERIFIED_HELPLINES: EmergencyHelpline[] = [
  {
    id: 'agri-call-center-16123',
    nameBn: 'কৃষি কল সেন্টার (Agriculture Call Center)',
    nameEn: 'Agriculture Call Center',
    number: '16123',
    telLink: 'tel:16123',
    purposeBn: 'ফসলের রোগবালাই, পোকামাকড় দমন, সুষম সার প্রয়োগ, আধুনিক চাষাবাদ ও তাৎক্ষণিক কৃষি বিশেষজ্ঞ পরামর্শের সরকারি হটলাইন।',
    purposeEn: 'Immediate consultation with agricultural extension specialists regarding crop diseases, pest outbreaks, fertilizer dosage, and farm management.',
    hoursBn: 'সকাল ৭:০০ টা হতে রাত ৯:০০ টা (শুক্রবার ও সরকারি ছুটির দিন ব্যতীত)',
    hoursEn: '7:00 AM – 9:00 PM (Every day except Fridays & National Holidays)',
    chargesBn: '২৫ পয়সা/মিনিট (+ভ্যাট ও প্রযোজ্য সম্পূরক শুল্ক) — যেকোনো মোবাইল অপারেটর থেকে',
    chargesEn: '25 Paisa/minute (+VAT & Govt Duties) from any mobile operator',
    authorityBn: 'কৃষি তথ্য সার্ভিস (AIS), কৃষি মন্ত্রণালয়, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার',
    authorityEn: 'Agriculture Information Service (AIS), Ministry of Agriculture',
    websiteUrl: 'http://www.ais.gov.bd',
    badgeBn: 'প্রধান কৃষি হটলাইন',
    badgeColor: 'bg-emerald-600',
    iconType: 'agri'
  },
  {
    id: 'govt-service-333',
    nameBn: 'জাতীয় তথ্য ও সরকারি সেবা (National Information Service)',
    nameEn: 'Government Information & Services',
    number: '333',
    telLink: 'tel:333',
    purposeBn: 'উপজেলা কৃষি কর্মকর্তা ও স্থানীয় কৃষি অফিসের তথ্য, সরকারি প্রণোদনা, বীজ ও সার বিতরণ অভিযোগ এবং নাগরিক সহায়তা।',
    purposeEn: 'Information on Upazila Agriculture Officers, government subsidies, certified seed/fertilizer complaints, and citizen services.',
    hoursBn: '২৪ ঘণ্টা সার্বক্ষণিক (২৪/৭ দিনরাত)',
    hoursEn: '24 Hours / 7 Days a week continuous service',
    chargesBn: '৬০ পয়সা/মিনিট (+ভ্যাট ও প্রযোজ্য শুল্ক)',
    chargesEn: '60 Paisa/minute (+VAT) from any phone network',
    authorityBn: 'এটুআই (a2i) প্রোগ্রাম, তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ',
    authorityEn: 'Aspire to Innovate (a2i), ICT Division, Bangladesh',
    websiteUrl: 'https://333.gov.bd',
    badgeBn: '২৪/৭ সরকারি সেবা',
    badgeColor: 'bg-blue-600',
    iconType: 'govt'
  },
  {
    id: 'national-emergency-999',
    nameBn: 'জাতীয় জরুরি সেবা (National Emergency Service)',
    nameEn: 'National Emergency Service (Ambulance/Police)',
    number: '999',
    telLink: 'tel:999',
    purposeBn: 'বিষাক্ত পাতা চিবানো বা মারাত্মক বিষক্রিয়া, ক্ষতিকর রাসায়নিক দুর্ঘটনা ও খামারে তাৎক্ষণিক জরুরি অ্যাম্বুলেন্স সহায়তা।',
    purposeEn: 'Immediate ambulance and emergency dispatch for severe plant/chemical poisoning, urgent accidents, and life-threatening emergencies.',
    hoursBn: '২৪ ঘণ্টা সার্বক্ষণিক (২৪/৭ দিনরাত)',
    hoursEn: '24/7 round-the-clock emergency dispatch',
    chargesBn: 'সম্পূর্ণ টোল-ফ্রি (বিনা মূল্যে যেকোনো ফোন থেকে)',
    chargesEn: 'Completely Toll-Free (Free of charge from any phone)',
    authorityBn: 'বাংলাদেশ পুলিশ, স্বরাষ্ট্র মন্ত্রণালয়',
    authorityEn: 'Bangladesh Police, Ministry of Home Affairs',
    websiteUrl: 'https://nhd.gov.bd',
    badgeBn: 'টোল-ফ্রি জরুরি সেবা',
    badgeColor: 'bg-rose-600',
    iconType: 'emergency'
  },
  {
    id: 'disaster-warning-1090',
    nameBn: 'দুর্যোগের আগাম বার্তা (Disaster Early Warning)',
    nameEn: 'Disaster Early Warning Helpline',
    number: '1090',
    telLink: 'tel:1090',
    purposeBn: 'ঘূর্ণিঝড়, আকস্মিক পাহাড়ি ঢল, বন্যা, ভারী বৃষ্টিপাত ও চরম আবহাওয়ার আগাম বার্তা শুনে ফসল দ্রুত কাটার সতর্কতা।',
    purposeEn: 'Early warning automated alerts on cyclones, flash floods, extreme rain, and cold waves to protect standing agricultural crops.',
    hoursBn: '২৪ ঘণ্টা সার্বক্ষণিক (স্বয়ংক্রিয় আইভিআর ভয়েস সেবা)',
    hoursEn: '24/7 Automated IVR Voice Service',
    chargesBn: 'সম্পূর্ণ টোল-ফ্রি (কোনো কলচার্জ নেই)',
    chargesEn: 'Toll-Free (No call charge across all mobile networks)',
    authorityBn: 'দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয়',
    authorityEn: 'Ministry of Disaster Management and Relief',
    websiteUrl: 'https://modmr.gov.bd',
    badgeBn: 'টোল-ফ্রি আবহাওয়া সতর্কতা',
    badgeColor: 'bg-amber-600',
    iconType: 'disaster'
  },
  {
    id: 'fire-service-102',
    nameBn: 'ফায়ার সার্ভিস ও সিভিল ডিফেন্স (Fire Service)',
    nameEn: 'Fire Service & Civil Defence',
    number: '102',
    telLink: 'tel:102',
    purposeBn: 'শস্য বা পাট গুদাম, খামার ও ফসলের মাঠে অনাকাঙ্ক্ষিত অগ্নিকাণ্ড নির্বাপণ ও উদ্ধার সহায়তা।',
    purposeEn: 'Emergency firefighting and rescue operations for grain silos, jute storehouses, poultry/dairy farms, and agricultural fields.',
    hoursBn: '২৪ ঘণ্টা সার্বক্ষণিক (২৪/৭)',
    hoursEn: '24/7 Emergency Fire & Rescue Response',
    chargesBn: 'সম্পূর্ণ টোল-ফ্রি (সরকারি জরুরি নম্বর)',
    chargesEn: 'Toll-Free official emergency short code',
    authorityBn: 'ফায়ার সার্ভিস ও সিভিল ডিফেন্স অধিদপ্তর',
    authorityEn: 'Department of Fire Service and Civil Defence',
    websiteUrl: 'https://fireservice.gov.bd',
    badgeBn: 'টোল-ফ্রি অগ্নি নির্বাপণ',
    badgeColor: 'bg-red-700',
    iconType: 'fire'
  }
];

export const DISTRICT_AGRI_OFFICES: AgriOfficeContact[] = [
  // --- DHAKA DIVISION ---
  {
    id: 'dae-dhaka-hq',
    districtBn: 'ঢাকা',
    districtEn: 'Dhaka',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    officeNameBn: 'উপপরিচালক কার্যালয়, কৃষি সম্প্রসারণ অধিদপ্তর (ডিএই)',
    officeNameEn: 'Office of the Deputy Director, Department of Agricultural Extension (DAE)',
    contactPersonTitleBn: 'উপপরিচালক ও জেলা উদ্ভিদ সংরক্ষণ কর্মকর্তা',
    contactPersonTitleEn: 'Deputy Director & District Plant Protection Officer',
    phone: '02-58155265',
    telLink: 'tel:0258155265',
    email: 'dddaedhaka@gmail.com',
    addressBn: 'খামারবাড়ি, ফার্মগেট, ঢাকা-১২১৫',
    addressEn: 'Khamarbari, Farmgate, Dhaka-1215',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://dae.dhaka.gov.bd',
    specialtyBn: 'সার্বিক কৃষি ও নগর ছাদবাগান রোগবালাই পরামর্শ সেল',
    specialtyEn: 'Central Agri Extension & Urban Rooftop Garden Plant Protection'
  },
  {
    id: 'bari-gazipur-hq',
    districtBn: 'গাজীপুর',
    districtEn: 'Gazipur',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    officeNameBn: 'বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট (বিএআরআই) - প্রধান কার্যালয়',
    officeNameEn: 'Bangladesh Agricultural Research Institute (BARI) - Plant Pathology Division',
    contactPersonTitleBn: 'প্রধান বৈজ্ঞানিক কর্মকর্তা (উদ্ভিদ রোগতত্ত্ব বিভাগ)',
    contactPersonTitleEn: 'Chief Scientific Officer (Plant Pathology Division)',
    phone: '02-49270001',
    telLink: 'tel:0249270001',
    email: 'dg.bari@bari.gov.bd',
    addressBn: 'জয়দেবপুর, গাজীপুর-১৭০১',
    addressEn: 'Joydebpur, Gazipur-1701',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://www.bari.gov.bd',
    specialtyBn: 'সবজি, ফল ও ডাল ফসলের আধুনিক রোগতত্ত্ব ও ল্যাব টেস্ট',
    specialtyEn: 'Horticulture, Fruits & Pulses Pathology & Advanced Lab Diagnostics'
  },
  {
    id: 'brri-gazipur-hq',
    districtBn: 'গাজীপুর',
    districtEn: 'Gazipur',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    officeNameBn: 'বাংলাদেশ ধান গবেষণা ইনস্টিটিউট (বিআরআরআই)',
    officeNameEn: 'Bangladesh Rice Research Institute (BRRI) - Plant Pathology Division',
    contactPersonTitleBn: 'মুখ্য বৈজ্ঞানিক কর্মকর্তা (ধানের রোগতত্ত্ব)',
    contactPersonTitleEn: 'Chief Scientific Officer (Rice Pathology Division)',
    phone: '02-49272005',
    telLink: 'tel:0249272005',
    email: 'dg@brri.gov.bd',
    addressBn: 'জয়দেবপুর, গাজীপুর-১৭০১',
    addressEn: 'Joydebpur, Gazipur-1701',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://www.brri.gov.bd',
    specialtyBn: 'ধানের ব্লাস্ট, খোল পোড়া ও ব্যাক্টেরিয়াল ব্লাইট বিশেষজ্ঞ সেল',
    specialtyEn: 'Rice Blast, Sheath Blight & Bacterial Pathology Specialization'
  },

  // --- MYMENSINGH DIVISION ---
  {
    id: 'bau-plant-clinic',
    districtBn: 'ময়মনসিংহ',
    districtEn: 'Mymensingh',
    divisionBn: 'ময়মনসিংহ',
    divisionEn: 'Mymensingh',
    officeNameBn: 'বাংলাদেশ কৃষি বিশ্ববিদ্যালয় (বাকৃবি) - প্ল্যান্ট ক্লিনিক',
    officeNameEn: 'Bangladesh Agricultural University (BAU) - Plant Disease Clinic',
    contactPersonTitleBn: 'প্রফেসর ও পরিচালক, উদ্ভিদ রোগতত্ত্ব বিভাগ ও প্ল্যান্ট ক্লিনিক',
    contactPersonTitleEn: 'Professor & Director, Plant Pathology Clinic',
    phone: '02-996671401',
    telLink: 'tel:02996671401',
    email: 'plantpathology@bau.edu.bd',
    addressBn: 'বাকৃবি ক্যাম্পাস, ময়মনসিংহ-২২০২',
    addressEn: 'BAU Campus, Mymensingh-2202',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'https://www.bau.edu.bd',
    specialtyBn: 'বিশেষজ্ঞ উদ্ভিদ রোগতত্ত্ববিদ দ্বারা পাতা পরীক্ষা ও ডায়াগনস্টিক রিপোর্ট',
    specialtyEn: 'Comprehensive Plant Clinic & Leaf Pathology Diagnostic Laboratory'
  },
  {
    id: 'dae-mymensingh',
    districtBn: 'ময়মনসিংহ',
    districtEn: 'Mymensingh',
    divisionBn: 'ময়মনসিংহ',
    divisionEn: 'Mymensingh',
    officeNameBn: 'উপপরিচালক কার্যালয়, ডিএই, ময়মনসিংহ',
    officeNameEn: 'Office of the Deputy Director, DAE Mymensingh',
    contactPersonTitleBn: 'উপপরিচালক ও অতিরিক্ত উপপরিচালক (উদ্ভিদ সংরক্ষণ)',
    contactPersonTitleEn: 'Deputy Director & Additional DD (Plant Protection)',
    phone: '02-996665421',
    telLink: 'tel:02996665421',
    email: 'dddaemym@gmail.com',
    addressBn: 'কৃষি ভবন, সানকিপাড়া, ময়মনসিংহ',
    addressEn: 'Krishi Bhaban, Sankipara, Mymensingh',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://dae.mymensingh.gov.bd',
    specialtyBn: 'ধান ও রবি ফসলের রোগবালাই নিয়ন্ত্রণ ও মাঠ পর্যায়ের সহায়তা',
    specialtyEn: 'Cereal & Winter Crop Extension & Integrated Pest Management'
  },

  // --- RAJSHAHI DIVISION ---
  {
    id: 'bari-bogura-rars',
    districtBn: 'বগুড়া',
    districtEn: 'Bogura',
    divisionBn: 'রাজশাহী',
    divisionEn: 'Rajshahi',
    officeNameBn: 'আঞ্চলিক কৃষি গবেষণা কেন্দ্র (বিএআরআই), বগুড়া',
    officeNameEn: 'Regional Agricultural Research Station (RARS), BARI Bogura',
    contactPersonTitleBn: 'প্রধান বৈজ্ঞানিক কর্মকর্তা ও সবজি রোগ বিশেষজ্ঞ',
    contactPersonTitleEn: 'Chief Scientific Officer & Vegetable Pathologist',
    phone: '02-589901234',
    telLink: 'tel:02589901234',
    email: 'cso.bogura@bari.gov.bd',
    addressBn: 'শেরপুর রোড, বগুড়া',
    addressEn: 'Sherpur Road, Bogura',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://www.bari.gov.bd',
    specialtyBn: 'আলুর নাবি ধসা, মরিচ ও টমেটোর ছত্রাকজনিত রোগ গবেষণা',
    specialtyEn: 'Potato Late Blight, Chilli Anthracnose & Solanaceous Pathology'
  },
  {
    id: 'dae-rajshahi',
    districtBn: 'রাজশাহী',
    districtEn: 'Rajshahi',
    divisionBn: 'রাজশাহী',
    divisionEn: 'Rajshahi',
    officeNameBn: 'উপপরিচালক কার্যালয়, ডিএই, রাজশাহী',
    officeNameEn: 'Office of the Deputy Director, DAE Rajshahi',
    contactPersonTitleBn: 'উপপরিচালক ও ফল বাগান বিশেষজ্ঞ',
    contactPersonTitleEn: 'Deputy Director & Orchard Specialist',
    phone: '02-588854321',
    telLink: 'tel:02588854321',
    email: 'dddaeraj@gmail.com',
    addressBn: 'কৃষি চত্বর, শিরোইল, রাজশাহী',
    addressEn: 'Krishi Chottor, Shiroil, Rajshahi',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://dae.rajshahi.gov.bd',
    specialtyBn: 'আম ও লিচুর অ্যানথ্রাকনোজ, পাউডারি মিলডিউ ও ফল পচা প্রতিরোধ',
    specialtyEn: 'Mango & Litchi Anthracnose, Powdery Mildew & Orchard Management'
  },

  // --- RANGPUR DIVISION ---
  {
    id: 'bwmri-dinajpur-hq',
    districtBn: 'দিনাজপুর',
    districtEn: 'Dinajpur',
    divisionBn: 'রংপুর',
    divisionEn: 'Rangpur',
    officeNameBn: 'বাংলাদেশ গম ও ভুট্টা গবেষণা ইনস্টিটিউট (বিডব্লিউএমআরআই)',
    officeNameEn: 'Bangladesh Wheat and Maize Research Institute (BWMRI) HQ',
    contactPersonTitleBn: 'মহাপরিচালক ও গম রোগতত্ত্ব গবেষক দল',
    contactPersonTitleEn: 'Director General & Cereal Pathology Research Group',
    phone: '02-589921100',
    telLink: 'tel:02589921100',
    email: 'dg@bwmri.gov.bd',
    addressBn: 'নশিপুর, দিনাজপুর-৫২০০',
    addressEn: 'Nashipur, Dinajpur-5200',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://www.bwmri.gov.bd',
    specialtyBn: 'গমের ব্লাস্ট, মরিচা রোগ ও ভুট্টার নর্দার্ন ব্লাইট গবেষণা',
    specialtyEn: 'Wheat Blast, Foliar Rusts & Maize Leaf Blight Diagnostics'
  },
  {
    id: 'dae-rangpur',
    districtBn: 'রংপুর',
    districtEn: 'Rangpur',
    divisionBn: 'রংপুর',
    divisionEn: 'Rangpur',
    officeNameBn: 'উপপরিচালক কার্যালয়, ডিএই, রংপুর',
    officeNameEn: 'Office of the Deputy Director, DAE Rangpur',
    contactPersonTitleBn: 'উপপরিচালক ও জেলা প্রশিক্ষণ কর্মকর্তা',
    contactPersonTitleEn: 'Deputy Director & District Training Officer',
    phone: '02-589965432',
    telLink: 'tel:02589965432',
    email: 'dddaerangpur@gmail.com',
    addressBn: 'রাধা বল্লভ, রংপুর-৫৪০০',
    addressEn: 'Radha Ballav, Rangpur-5400',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://dae.rangpur.gov.bd',
    specialtyBn: 'আলু ও ভুট্টার রোগবালাই নজরদারি ও মাঠ পর্যায়ের সহায়তা',
    specialtyEn: 'Potato Blight & Cold Injury Surveillance Cell'
  },

  // --- KHULNA DIVISION ---
  {
    id: 'bari-jashore-rars',
    districtBn: 'যশোর',
    districtEn: 'Jashore',
    divisionBn: 'খুলনা',
    divisionEn: 'Khulna',
    officeNameBn: 'আঞ্চলিক কৃষি গবেষণা কেন্দ্র, বিএআরআই, যশোর',
    officeNameEn: 'Regional Agricultural Research Station, BARI Jashore',
    contactPersonTitleBn: 'প্রধান বৈজ্ঞানিক কর্মকর্তা ও ডাল-তেলবীজ বিশেষজ্ঞ',
    contactPersonTitleEn: 'Chief Scientific Officer & Pulses-Oilseeds Pathologist',
    phone: '02-42168765',
    telLink: 'tel:0242168765',
    email: 'cso.jashore@bari.gov.bd',
    addressBn: 'মুড়লি, যশোর',
    addressEn: 'Murli, Jashore',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://www.bari.gov.bd',
    specialtyBn: 'সরিষার সাদা মরিচা, মসুরের স্টেমফিলিয়াম ও বেগুন ফোমোপসিস গবেষণা',
    specialtyEn: 'Mustard White Rust, Lentil Blight & Eggplant Phomopsis'
  },
  {
    id: 'dae-khulna',
    districtBn: 'খুলনা',
    districtEn: 'Khulna',
    divisionBn: 'খুলনা',
    divisionEn: 'Khulna',
    officeNameBn: 'উপপরিচালক কার্যালয়, ডিএই, খুলনা',
    officeNameEn: 'Office of the Deputy Director, DAE Khulna',
    contactPersonTitleBn: 'উপপরিচালক ও উপকূলীয় কৃষি কর্মকর্তা',
    contactPersonTitleEn: 'Deputy Director & Coastal Agriculture Specialist',
    phone: '02-477723456',
    telLink: 'tel:02477723456',
    email: 'dddaekhulna@gmail.com',
    addressBn: 'দৌলতপুর, খুলনা',
    addressEn: 'Daulatpur, Khulna',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://dae.khulna.gov.bd',
    specialtyBn: 'উপকূলীয় লবণাক্ততা ও তরমুজ-সবজির রোগবালাই ব্যবস্থাপনা',
    specialtyEn: 'Coastal Salinity Stress & Cucurbit Disease Management'
  },

  // --- CHATTOGRAM DIVISION ---
  {
    id: 'dae-cumilla',
    districtBn: 'কুমিল্লা',
    districtEn: 'Cumilla',
    divisionBn: 'চট্টগ্রাম',
    divisionEn: 'Chattogram',
    officeNameBn: 'উপপরিচালক কার্যালয়, ডিএই, কুমিল্লা',
    officeNameEn: 'Office of the Deputy Director, DAE Cumilla',
    contactPersonTitleBn: 'উপপরিচালক ও জেলা উদ্ভিদ সংরক্ষণ কর্মকর্তা',
    contactPersonTitleEn: 'Deputy Director & District Plant Protection Officer',
    phone: '02-334412345',
    telLink: 'tel:02334412345',
    email: 'dddaecumilla@gmail.com',
    addressBn: 'টমছম ব্রিজ, কুমিল্লা',
    addressEn: 'Tomsom Bridge, Cumilla',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://dae.comilla.gov.bd',
    specialtyBn: 'ধান ও শাকসবজির রোগবালাই নিয়ন্ত্রণ ও সার ব্যবস্থাপনা',
    specialtyEn: 'Intensive Paddy & Vegetable Pathology Extension'
  },
  {
    id: 'dae-chattogram',
    districtBn: 'চট্টগ্রাম',
    districtEn: 'Chattogram',
    divisionBn: 'চট্টগ্রাম',
    divisionEn: 'Chattogram',
    officeNameBn: 'উপপরিচালক কার্যালয়, ডিএই, চট্টগ্রাম',
    officeNameEn: 'Office of the Deputy Director, DAE Chattogram',
    contactPersonTitleBn: 'উপপরিচালক ও উদ্যান বিশেষজ্ঞ',
    contactPersonTitleEn: 'Deputy Director & Horticulture Specialist',
    phone: '02-333312345',
    telLink: 'tel:02333312345',
    email: 'dddaectg@gmail.com',
    addressBn: 'কৃষি ভবন, জুবিলী রোড, চট্টগ্রাম',
    addressEn: 'Krishi Bhaban, Jubilee Road, Chattogram',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://dae.chittagong.gov.bd',
    specialtyBn: 'পাহাড়ী ফল বাগান, আদা, হলুদ ও পান বরোজের রোগবালাই প্রতিকার',
    specialtyEn: 'Hilly Horticultural Crops, Spices & Betel Vine Pathology'
  },

  // --- SYLHET DIVISION ---
  {
    id: 'btri-sreemangal-hq',
    districtBn: 'মৌলভীবাজার',
    districtEn: 'Moulvibazar',
    divisionBn: 'সিলেট',
    divisionEn: 'Sylhet',
    officeNameBn: 'বাংলাদেশ চা গবেষণা ইনস্টিটিউট (বিটিআরআই)',
    officeNameEn: 'Bangladesh Tea Research Institute (BTRI) - Pathology Division',
    contactPersonTitleBn: 'প্রধান বৈজ্ঞানic কর্মকর্তা (চা রোগতত্ত্ব)',
    contactPersonTitleEn: 'Chief Scientific Officer (Tea Pathology)',
    phone: '02-996682123',
    telLink: 'tel:02996682123',
    email: 'director@btri.gov.bd',
    addressBn: 'শ্রীমঙ্গল, মৌলভীবাজার-৩২১০',
    addressEn: 'Sreemangal, Moulvibazar-3210',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://www.btri.gov.bd',
    specialtyBn: 'চা পাতার ব্লিস্টার ব্লাইট, রেড রাস্ট ও ডাইব্যাক গবেষণা',
    specialtyEn: 'Tea Blister Blight, Red Rust & Plantation Pathogen Control'
  },
  {
    id: 'dae-sylhet',
    districtBn: 'সিলেট',
    districtEn: 'Sylhet',
    divisionBn: 'সিলেট',
    divisionEn: 'Sylhet',
    officeNameBn: 'উপপরিচালক কার্যালয়, ডিএই, সিলেট',
    officeNameEn: 'Office of the Deputy Director, DAE Sylhet',
    contactPersonTitleBn: 'উপপরিচালক ও হাওর কৃষি কর্মকর্তা',
    contactPersonTitleEn: 'Deputy Director & Haor Agriculture Coordinator',
    phone: '02-996634567',
    telLink: 'tel:02996634567',
    email: 'dddaesylhet@gmail.com',
    addressBn: 'মিরাবাজার, সিলেট-৩১০০',
    addressEn: 'Mirabazar, Sylhet-3100',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://dae.sylhet.gov.bd',
    specialtyBn: 'হাওর বোরো ধান ও সাইট্রাস (লেবু-সাতকরা) ফসলের রোগবালাই সুরক্ষা',
    specialtyEn: 'Haor Boro Paddy & Citrus (Satkara/Lime) Protection'
  },

  // --- BARISHAL DIVISION ---
  {
    id: 'dae-barishal',
    districtBn: 'বরিশাল',
    districtEn: 'Barishal',
    divisionBn: 'বরিশাল',
    divisionEn: 'Barishal',
    officeNameBn: 'উপপরিচালক কার্যালয়, ডিএই, বরিশাল',
    officeNameEn: 'Office of the Deputy Director, DAE Barishal',
    contactPersonTitleBn: 'উপপরিচালক ও উপকূলীয় রোগতত্ত্ব কর্মকর্তা',
    contactPersonTitleEn: 'Deputy Director & Coastal Pathology Officer',
    phone: '02-478865432',
    telLink: 'tel:02478865432',
    email: 'dddaebarishal@gmail.com',
    addressBn: 'নথুল্লাবাদ, বরিশাল',
    addressEn: 'Nothullabad, Barishal',
    officeHoursBn: 'সকাল ৯:০০ টা – বিকাল ৫:০০ টা (রবি–বৃহস্পতি)',
    officeHoursEn: '9:00 AM – 5:00 PM (Sun–Thu)',
    websiteUrl: 'http://dae.barisal.gov.bd',
    specialtyBn: 'আমড়া, পেয়ারা, পান বরোজ ও দক্ষিণাঞ্চলের আমন ধান রোগতত্ত্ব',
    specialtyEn: 'Hog Plum, Guava, Betel Leaf & Coastal Aman Rice Protection'
  }
];
