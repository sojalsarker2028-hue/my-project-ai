import { ToxicityLevel } from '../types';

export interface ToxicPlantSignature {
  id: string;
  nameEn: string;
  nameBn: string;
  scientificName: string;
  family: string;
  toxicityLevel: ToxicityLevel;
  toxicityLevelBn: string;
  activeToxin: string;
  activeToxinBn: string;
  targetOrgans: string;
  targetOrgansBn: string;
  symptomsIfIngestedEn: string[];
  symptomsIfIngestedBn: string[];
  contactHazardEn: string;
  contactHazardBn: string;
  emergencyCareEn: string[];
  emergencyCareBn: string[];
  childSafetyWarningEn: string;
  childSafetyWarningBn: string;
  visualKeywords: string[];
}

export const TOXIC_PLANT_DATABASE: ToxicPlantSignature[] = [
  {
    id: 'calotropis-gigantea',
    nameEn: 'Crown Flower / Giant Milkweed (Akanda)',
    nameBn: 'আকন্দ পাতা (Calotropis gigantea)',
    scientificName: 'Calotropis gigantea / Calotropis procera',
    family: 'Apocynaceae',
    toxicityLevel: 'High',
    toxicityLevelBn: 'উচ্চ মাত্রার বিষাক্ত (High Toxicity)',
    activeToxin: 'Cardiac glycosides (Calotropin, Uscharin, Calotoxin) & caustic milky latex',
    activeToxinBn: 'কার্ডিয়াক গ্লাইকোসাইড (ক্যালোট্রপিন) এবং ক্ষারীয় সাদা দুধের মতো কষ',
    targetOrgans: 'Heart, central nervous system, eyes, oral mucosa',
    targetOrgansBn: 'হৃদযন্ত্র, স্নায়ুতন্ত্র, চোখ এবং মুখগহ্বর',
    symptomsIfIngestedEn: [
      'Severe burning sensation in mouth and throat',
      'Intense nausea, projectile vomiting, and abdominal cramps',
      'Severe cardiac arrhythmias, slow or irregular heartbeat',
      'Corneal toxicity and temporary or permanent blindness if sap enters eyes'
    ],
    symptomsIfIngestedBn: [
      'মুখ ও গলায় তীব্র জ্বালাপোড়া ও ফুলে যাওয়া',
      'প্রচণ্ড বমি ও পেটে তীব্র ব্যথা',
      'হৃদস্পন্দন অনিয়মিত বা বিপজ্জনকভাবে কমে যাওয়া (অ্যারিদমিয়া)',
      'চোখে কষ লাগলে কর্নিয়া ক্ষতিগ্রস্ত হয়ে অন্ধত্ব সৃষ্টি হতে পারে'
    ],
    contactHazardEn: 'Skin blistering, dermatitis, and severe ocular inflammation from milky latex.',
    contactHazardBn: 'সাদা কষ চামড়ায় লাগলে ফোসকা পড়ে ও চোখে লাগলে তীব্র প্রদাহ ও অন্ধত্ব হতে পারে।',
    emergencyCareEn: [
      'Immediately rinse skin/eyes with running cold water for at least 15 minutes.',
      'Do NOT induce vomiting without medical guidance.',
      'Rush immediately to the nearest hospital or emergency center.',
      'Call National Health Emergency Hotline (16263 in Bangladesh / 112).'
    ],
    emergencyCareBn: [
      'ত্বক বা চোখে কষ লাগলে সাথে সাথে অন্তত ১৫ মিনিট পরিষ্কার ঠাণ্ডা পানিতে ধুয়ে ফেলুন।',
      'ডাক্তারের পরামর্শ ছাড়া জোরপূর্বক বমি করানোর চেষ্টা করবেন না।',
      'দেরি না করে দ্রুত নিকটস্থ সরকারি হাসপাতাল বা জরুরি বিভাগে রোগীকে নিয়ে যান।',
      'জরুরি সহায়তার জন্য জাতীয় স্বাস্থ্য বা বিষ নিয়ন্ত্রণ হটলাইনে (১৬২৬৩) যোগাযোগ করুন।'
    ],
    childSafetyWarningEn: 'WARNING: EXTREMELY TOXIC! KEEP CHILDREN AND PETS AWAY. NEVER TOUCH, RUB SAP, OR INGEST ANY PART OF THIS LEAF.',
    childSafetyWarningBn: 'সাবধান! মারাত্মক বিষাক্ত পাতা। শিশুদের সম্পূর্ণ দূরে রাখুন এবং ভুলেও স্পর্শ করবেন না বা খাবেন না।',
    visualKeywords: ['calotropis', 'akanda', 'crown flower', 'milkweed', 'latex']
  },
  {
    id: 'nerium-oleander',
    nameEn: 'Oleander (Karabi)',
    nameBn: 'করবী পাতা (Nerium oleander)',
    scientificName: 'Nerium oleander',
    family: 'Apocynaceae',
    toxicityLevel: 'High',
    toxicityLevelBn: 'উচ্চ মাত্রার মারাত্মক বিষাক্ত (High Toxicity)',
    activeToxin: 'Oleandrin, Neriine & cardiac glycosides (entire leaf is lethal)',
    activeToxinBn: 'ওলিয়ান্ড্রিন ও নেরিন (মারাত্মক কার্ডিয়াক গ্লাইকোসাইড)',
    targetOrgans: 'Cardiovascular system, digestive tract, brain',
    targetOrgansBn: 'হৃদযন্ত্র, পরিপাকতন্ত্র ও মস্তিষ্ক',
    symptomsIfIngestedEn: [
      'Severe irregular pulse, bradycardia, ventricular fibrillation',
      'Violent abdominal cramping, bloody diarrhea, and dizziness',
      'Confusion, pupil dilation, tremors, coma, and fatal cardiac arrest'
    ],
    symptomsIfIngestedBn: [
      'নাড়ির স্পন্দন অনিয়মিত হওয়া ও রক্তচাপ দ্রুত কমে যাওয়া',
      'পেটে তীব্র মোচড়, রক্তাক্ত পাতলা পায়খানা ও মাথা ঘোরা',
      'অচেতনতা, খিঁচুনি এবং এক টুকরো পাতা খেলেও হৃৎপিণ্ড অচল হয়ে মৃত্যুঝুঁকি'
    ],
    contactHazardEn: 'Sap causes severe allergic contact dermatitis and skin irritation.',
    contactHazardBn: 'পাতার কষ চামড়ায় লাগলে চুলকানি, ফুসকুড়ি ও চর্মরোগ সৃষ্টি হয়।',
    emergencyCareEn: [
      'Seek emergency emergency room care immediately—time is critical.',
      'Bring a sample of the plant to help clinicians administer Digoxin Fab fragments.',
      'Keep patient calm and lying down; monitor breathing and pulse.'
    ],
    emergencyCareBn: [
      'এক মুহূর্তও দেরি না করে রোগীকে জরুরি হাসপাতালে নিয়ে যান—প্রতিটি সেকেন্ড গুরুত্বপূর্ণ।',
      'চিকিৎসকের দ্রুত চিকিৎসার সুবিধার্থে গাছের একটি পাতার নমুনা সাথে নিন।',
      'রোগীকে স্থির রাখুন এবং শ্বাসপ্রশ্বাস পর্যবেক্ষণ করুন।'
    ],
    childSafetyWarningEn: 'WARNING: LETHAL TOXICITY! EVEN A SINGLE CHEWED LEAF CAN BE FATAL TO CHILDREN. DO NOT TOUCH OR INGEST.',
    childSafetyWarningBn: 'মারাত্মক বিপদ! এমনকি একটি মাত্র পাতা চিবোলে শিশুর জীবনহানি ঘটতে পারে। শিশুদের ভুলেও কাছে যেতে দেবেন না।',
    visualKeywords: ['oleander', 'karabi', 'nerium']
  },
  {
    id: 'datura-stramonium',
    nameEn: 'Jimsonweed / Thorn Apple (Dhutura)',
    nameBn: 'ধুতুরা পাতা (Datura stramonium / Datura metel)',
    scientificName: 'Datura metel / Datura stramonium',
    family: 'Solanaceae',
    toxicityLevel: 'High',
    toxicityLevelBn: 'উচ্চ মাত্রার বিষাক্ত (High Toxicity)',
    activeToxin: 'Tropane alkaloids (Scopolamine, Hyoscyamine, Atropine)',
    activeToxinBn: 'ট্রোপেন অ্যালকালয়েড (স্কোপোলামিন, হায়োসায়ামিন ও অ্যাট্রোপিন)',
    targetOrgans: 'Central nervous system, parasympathetic autonomic nervous system',
    targetOrgansBn: 'কেন্দ্রীয় স্নায়ুতন্ত্র, চোখ ও মস্তিষ্ক',
    symptomsIfIngestedEn: [
      'Extreme dry mouth, burning thirst, and unable to swallow',
      'Widely dilated pupils (mydriasis), severe blurred vision, photophobia',
      'High fever, flushed red skin, rapid heart rate (tachycardia)',
      'Severe delirium, vivid hallucinations, convulsions, and respiratory failure'
    ],
    symptomsIfIngestedBn: [
      'মুখ ও গলা শুকিয়ে কাঠ হয়ে যাওয়া এবং তীব্র তৃষ্ণা',
      'চোখের মণি অস্বাভাবিক বড় হওয়া ও ঝাপসা দৃষ্টি',
      'উচ্চ জ্বর, গায়ের চামড়া লাল হয়ে যাওয়া ও দ্রুত বুক ধড়ফড় করা',
      'প্রলাপ বকা, হ্যালুসিনেশন, মানসিক ভারসাম্যহীনতা ও অজ্ঞান হওয়া'
    ],
    contactHazardEn: 'Touching leaves and then rubbing eyes leads to dilated pupils and vision impairment.',
    contactHazardBn: 'পাতা স্পর্শ করার পর চোখে হাত দিলে চোখের মণি বড় হয়ে দৃষ্টিশক্তি ব্যাহত হয়।',
    emergencyCareEn: [
      'Rush to the hospital ICU immediately for airway support and Physostigmine antidote evaluation.',
      'Wash hands thoroughly with soap and water after accidental contact.',
      'Keep patient in a quiet, dim room to avoid sensory overload seizures.'
    ],
    emergencyCareBn: [
      'দেরি না করে দ্রুত আইসিইউ সুবিধাযুক্ত হাসপাতালে নিয়ে যান।',
      'ভুলবশত পাতা স্পর্শ করলে তৎক্ষণাৎ সাবান-পানি দিয়ে হাত ভালো করে ধুয়ে ফেলুন।',
      'উত্তেজনা কমাতে রোগীকে শান্ত ও অন্ধকার ঘরে রাখুন।'
    ],
    childSafetyWarningEn: 'WARNING: DANGEROUS PSYCHOTROPIC TOXIN! KEEP CHILDREN STRICTLY AWAY. NEVER TOUCH, PLUCK, OR EAT.',
    childSafetyWarningBn: 'সাবধান! মারাত্মক স্নায়ুবিষ। শিশুদের কঠোরভাবে দূরে রাখুন এবং কোনো অবস্থাতেই স্পর্শ বা ভক্ষণ করবেন না।',
    visualKeywords: ['datura', 'dhutura', 'thorn apple', 'jimsonweed']
  },
  {
    id: 'ricinus-communis',
    nameEn: 'Castor Bean Leaf (Bhenna / Reri)',
    nameBn: 'রেড়ী বা ভেন্না পাতা (Ricinus communis)',
    scientificName: 'Ricinus communis',
    family: 'Euphorbiaceae',
    toxicityLevel: 'Moderate',
    toxicityLevelBn: 'মাঝারি থেকে তীব্র বিষাক্ত (Moderate to High)',
    activeToxin: 'Ricin (ribosome-inactivating protein) and Ricinine alkaloid in foliage',
    activeToxinBn: 'রিসিন প্রোটিন ও রিসিনিন ক্ষারীয় উপাদান',
    targetOrgans: 'Cellular protein synthesis, liver, kidneys, gastrointestinal tract',
    targetOrgansBn: 'কোষীয় গঠন, যকৃৎ (লিভার), বৃক্ক (কিডনি) ও অন্ত্র',
    symptomsIfIngestedEn: [
      'Burning sensation in throat and esophagus',
      'Persistent severe abdominal cramps, vomiting, and dehydration',
      'Internal mucosal hemorrhage and progressive liver/kidney damage'
    ],
    symptomsIfIngestedBn: [
      'গলা ও খাদ্যনালীতে তীব্র জ্বালাপোড়া',
      'অনবরত পেটব্যথা, বমি ও চরম পানিশূন্যতা',
      'অন্ত্রে রক্তক্ষরণ এবং লিভার ও কিডনির মারাত্মক ক্ষতি'
    ],
    contactHazardEn: 'Crushed leaves can cause skin allergy, itching, and contact rash.',
    contactHazardBn: 'পাতার রস ত্বকে লাগলে চুলকানি ও অ্যালার্জিজনিত র‍্যাশ হতে পারে।',
    emergencyCareEn: [
      'Provide fluid replacement immediately and take to hospital.',
      'Do not give home remedies; hospital supportive care is mandatory.'
    ],
    emergencyCareBn: [
      'রোগীকে প্রচুর পানি ও ওরাল স্যালাইন দিয়ে দ্রুত হাসপাতালে নিয়ে যান।',
      'ঘরোয়া টোটকা না দিয়ে চিকিৎসকের তত্ত্বাবধানে চিকিৎসা নিন।'
    ],
    childSafetyWarningEn: 'WARNING: TOXIC VEGETATION! PREVENT CHILDREN AND GRAZING LIVESTOCK FROM CHEWING OR TOUCHING.',
    childSafetyWarningBn: 'সতর্কতা: বিষাক্ত লতাপাতা! শিশু ও গবাদি পশুকে পাতা চিবানো বা স্পর্শ করা থেকে দূরে রাখুন।',
    visualKeywords: ['ricinus', 'castor', 'bhenna', 'reri', 'palmate']
  },
  {
    id: 'dieffenbachia-dumb-cane',
    nameEn: 'Dumb Cane (Dieffenbachia)',
    nameBn: 'ডাইফেনবাকিয়া বা ডাম্ব কেইন পাতা (ইনডোর টক্সিক প্ল্যান্ট)',
    scientificName: 'Dieffenbachia seguine / amoena',
    family: 'Araceae',
    toxicityLevel: 'Moderate',
    toxicityLevelBn: 'মাঝারি বিষাক্ত (Moderate Toxicity)',
    activeToxin: 'Microscopic insoluble calcium oxalate raphide needles & proteolytic enzymes',
    activeToxinBn: 'ক্যালসিয়াম অক্সালেট র‍্যাফাইড সূঁচ ও প্রোটিওলাইটিক এনজাইম',
    targetOrgans: 'Mouth, tongue, vocal cords, pharynx',
    targetOrgansBn: 'মুখ, জিহ্বা, স্বরযন্ত্র ও খাদ্যনালী',
    symptomsIfIngestedEn: [
      'Immediate excruciating oral pain and swelling of lips, tongue, and throat',
      'Inability to speak (temporary loss of speech, hence "Dumb Cane")',
      'Profuse salivation, difficulty breathing, and airway obstruction risk in children'
    ],
    symptomsIfIngestedBn: [
      'মুখে দেওয়া মাত্রই জিহ্বা ও গলায় অসহ্য জ্বালা ও তীব্র ফোলা',
      'কথা বলার ক্ষমতা সাময়িকভাবে নষ্ট হওয়া',
      'অতিরিক্ত লালা ঝরা এবং শ্বাসকষ্টের মারাত্মক ঝুঁকি তৈরি হওয়া'
    ],
    contactHazardEn: 'Sap causes skin redness, burning, and severe stinging in eyes.',
    contactHazardBn: 'কষ চামড়ায় লাগলে লাল হয়ে জ্বালাপোড়া করে এবং চোখে তীব্র প্রদাহ সৃষ্টি হয়।',
    emergencyCareEn: [
      'Rinse mouth thoroughly with cold milk or ice water to soothe burning.',
      'If swelling threatens breathing, rush to emergency care immediately.'
    ],
    emergencyCareBn: [
      'মুখের জ্বালা কমাতে সাথে সাথে বরফ ঠাণ্ডা দুধ বা পানি দিয়ে ভালো করে কুলকুচি করান।',
      'গলা ফুলে শ্বাসকষ্ট হলে কালবিলম্ব না করে হাসপাতালে জরুরি বিভাগে নিন।'
    ],
    childSafetyWarningEn: 'WARNING: TOXIC ORNAMENTAL! KEEP OUT OF REACH OF CHILDREN AND PETS. DO NOT CHEW OR SQUEEZE SAP.',
    childSafetyWarningBn: 'সাবধান! বিষাক্ত শোভাময় পাতা। শিশুদের নাগালের বাইরে রাখুন এবং কখনোই মুখে দিতে দেবেন না।',
    visualKeywords: ['dieffenbachia', 'dumb cane', 'calcium oxalate']
  },
  {
    id: 'abrus-precatorius',
    nameEn: 'Rosary Pea / Crab\'s Eye (Ratti / Kunch)',
    nameBn: 'রত্তি বা কুঁচ পাতা (Abrus precatorius)',
    scientificName: 'Abrus precatorius',
    family: 'Fabaceae',
    toxicityLevel: 'High',
    toxicityLevelBn: 'উচ্চ মাত্রার মারাত্মক বিষাক্ত (Lethal Abrin)',
    activeToxin: 'Abrin (extremely potent ribosome-inactivating protein, more toxic than ricin)',
    activeToxinBn: 'অ্যাব্রিন (অতি মারাত্মক রাইবোজোম নিষ্ক্রিয়কারী প্রোটিন বিষ)',
    targetOrgans: 'Cellular ribosomes, GI tract, kidneys, liver, vascular endothelium',
    targetOrgansBn: 'কোষীয় রাইবোজোম, পাকস্থলী ও অন্ত্র, কিডনি, লিভার ও রক্তনালী',
    symptomsIfIngestedEn: [
      'Severe nausea, vomiting, abdominal colic, and severe diarrhea',
      'Massive gastrointestinal bleeding and shock',
      'Acute kidney failure and hepatic necrosis within 48 hours'
    ],
    symptomsIfIngestedBn: [
      'প্রচণ্ড বমি, পেটে তীব্র মোচড় ও মারাত্মক পাতলা পায়খানা',
      'পরিপাকতন্ত্রে রক্তক্ষরণ ও শক সিন্ড্রোম',
      '৪৮ ঘণ্টার মধ্যে তীব্র কিডনি ও লিভার বিকল হওয়ার মারাত্মক ঝুঁকি'
    ],
    contactHazardEn: 'Crushed leaves and sap cause severe conjunctivitis and contact dermatitis.',
    contactHazardBn: 'পাতা বা কষ চোখে লাগলে তীব্র প্রদাহ ও ত্বকে ক্ষতের সৃষ্টি হতে পারে।',
    emergencyCareEn: [
      'Immediate hospital emergency admission is mandatory.',
      'Aggressive intravenous fluid resuscitation and renal support.',
      'Bring plant sample for toxicologist identification.'
    ],
    emergencyCareBn: [
      'বিলম্ব না করে তৎক্ষণাৎ হাসপাতালে ভর্তি করুন।',
      'শিরায় স্যালাইন প্রয়োগ ও কিডনি সুরক্ষার ব্যবস্থা নিন।',
      'চিকিৎসকের সুবিধার্থে গাছের পাতার নমুনা সাথে নিন।'
    ],
    childSafetyWarningEn: 'WARNING: EXTREME DANGER! ABRIN IS ONE OF NATURE\'S MOST POWERFUL TOXINS. PREVENT CHILDREN FROM TOUCHING OR CHEWING.',
    childSafetyWarningBn: 'মারাত্মক বিপদ! কুঁচ পাতার অ্যাব্রিন অত্যন্ত প্রাণঘাতী বিষ। শিশুদের কঠোরভাবে দূরে রাখুন।',
    visualKeywords: ['abrus', 'precatorius', 'ratti', 'kunch', 'rosary pea']
  },
  {
    id: 'gloriosa-superba',
    nameEn: 'Flame Lily / Glory Lily (Ulatchandal / Kalihari)',
    nameBn: 'উলটচণ্ডাল বা কলিহারী পাতা (Gloriosa superba)',
    scientificName: 'Gloriosa superba',
    family: 'Colchicaceae',
    toxicityLevel: 'High',
    toxicityLevelBn: 'উচ্চ মাত্রার মারাত্মক বিষাক্ত (High Toxicity - Colchicine)',
    activeToxin: 'Colchicine and Gloriosine alkaloids (cell mitosis inhibitors)',
    activeToxinBn: 'কোলচিসিন ও গ্লোরিওসিন ক্ষারীয় বিষ (কোষ বিভাজন রোধক)',
    targetOrgans: 'Bone marrow, gastrointestinal tract, nervous system, myocardium',
    targetOrgansBn: 'অস্থিমজ্জা, অন্ত্র, স্নায়ুতন্ত্র ও হৃৎপিণ্ড',
    symptomsIfIngestedEn: [
      'Severe burning throat and mouth, intractable nausea and vomiting',
      'Intense cholera-like watery diarrhea with severe dehydration',
      'Multi-organ failure, alopecia (hair loss), and respiratory paralysis'
    ],
    symptomsIfIngestedBn: [
      'গলায় প্রচণ্ড জ্বালাপোড়া, অনবরত বমি ও বমিভাব',
      'কলেরার মতো তীব্র পাতলা পায়খানা ও দ্রুত পানিশূন্যতা',
      'একাধিক অঙ্গ বিকল, চুল পড়ে যাওয়া এবং শ্বাসযন্ত্র স্তব্ধ হয়ে মৃত্যুঝুঁকি'
    ],
    contactHazardEn: 'Skin irritation and numbness upon prolonged handling.',
    contactHazardBn: 'বেশি সময় ধরে পাতা বা কাণ্ড ধরলে ত্বক অবশ ও চুলকানি হতে পারে।',
    emergencyCareEn: [
      'Immediate gastric decontamination in a tertiary hospital.',
      'Electrolyte balance monitoring and ICU respiratory management.'
    ],
    emergencyCareBn: [
      'দেরি না করে দ্রুত টারশিয়ারি হাসপাতালে আইসিইউতে নিন।',
      'ইলেক্ট্রোলাইট নিয়ন্ত্রণ ও কৃত্রিম শ্বাসপ্রশ্বাসের ব্যবস্থা রাখুন।'
    ],
    childSafetyWarningEn: 'WARNING: ALL PARTS CONTAIN LETHAL COLCHICINE. KEEP CHILDREN AND LIVESTOCK STRICTLY AWAY.',
    childSafetyWarningBn: 'সাবধান! উলটচণ্ডাল পাতায় প্রাণঘাতী কোলচিসিন থাকে। শিশুদের নাগালের বাইরে রাখুন।',
    visualKeywords: ['gloriosa', 'superba', 'flame lily', 'kalihari', 'ulatchandal']
  },
  {
    id: 'thevetia-peruviana',
    nameEn: 'Yellow Oleander / Lucky Nut (Kolke Phool / Pithkarabi)',
    nameBn: 'হলুদ করবী বা কলকে ফুল পাতা (Thevetia peruviana / Cascabela thevetia)',
    scientificName: 'Cascabela thevetia (Thevetia peruviana)',
    family: 'Apocynaceae',
    toxicityLevel: 'High',
    toxicityLevelBn: 'উচ্চ মাত্রার মারাত্মক বিষাক্ত (Cardiotoxic Thevetin)',
    activeToxin: 'Thevetin A, Thevetin B, Peruvoside & Thevetoxin (cardiac glycosides)',
    activeToxinBn: 'থেভেতিন এ, থেভেতিন বি ও পেরুভোসাইড (মারাত্মক কার্ডিয়াক গ্লাইকোসাইড)',
    targetOrgans: 'Heart conduction pathways, autonomic nervous system',
    targetOrgansBn: 'হৃৎপিণ্ডের সংবহন পথ ও সংবেদনশীল স্নায়ুতন্ত্র',
    symptomsIfIngestedEn: [
      'Dangerous cardiac bradycardia, heart block, and ventricular arrhythmias',
      'Numbness of tongue and lips, burning mouth sensation',
      'Severe dizziness, dilated pupils, coma, and sudden cardiac arrest'
    ],
    symptomsIfIngestedBn: [
      'হৃদস্পন্দন বিপজ্জনকভাবে কমে যাওয়া (ব্র্যাডিকার্ডিয়া) ও হার্ট ব্লক',
      'জিহ্বা ও ঠোঁট অবশ হয়ে যাওয়া ও মুখে তীব্র জ্বালাপোড়া',
      'মাথা ঘোরা, চোখের মণি প্রসারিত হওয়া এবং হঠাৎ হৃৎযন্ত্র থেমে যাওয়া'
    ],
    contactHazardEn: 'Milky sap causes dermatitis and severe corneal burns.',
    contactHazardBn: 'সাদা দুধের মতো কষ চামড়ায় লাগলে ক্ষত ও চোখে লাগলে মারাত্মক ক্ষতি করে।',
    emergencyCareEn: [
      'Rush to hospital cardiac ICU immediately.',
      'Administration of Digoxin-specific antibodies (Fab fragments) if available.'
    ],
    emergencyCareBn: [
      'দেরি না করে দ্রুত কার্ডিয়াক আইসিইউতে স্থানান্তর করুন।',
      'ডিগক্সিন-নির্দিষ্ট অ্যান্টিবডি ইনজেকশন দেওয়ার ব্যবস্থা নিশ্চিত করুন।'
    ],
    childSafetyWarningEn: 'WARNING: HIGHLY LETHAL CARDIOTOXIC LEAF. INGESTION OF EVEN A SINGLE LEAF IS DANGEROUS TO CHILDREN.',
    childSafetyWarningBn: 'সতর্কতা: মারাত্মক হৃৎপিণ্ডের বিষ। এমনকি একটি পাতা খেলেও শিশু মৃত্যুর মুখে পড়তে পারে।',
    visualKeywords: ['thevetia', 'peruviana', 'yellow oleander', 'kolke', 'pithkarabi']
  },
  {
    id: 'atropa-belladonna',
    nameEn: 'Deadly Nightshade (Belladonna)',
    nameBn: 'ডেডলি নাইটশেড পাতা (Atropa belladonna)',
    scientificName: 'Atropa belladonna',
    family: 'Solanaceae',
    toxicityLevel: 'High',
    toxicityLevelBn: 'উচ্চ মাত্রার বিষাক্ত (High Toxicity - Tropane Alkaloids)',
    activeToxin: 'Atropine, Scopolamine, and Hyoscyamine tropane alkaloids',
    activeToxinBn: 'অ্যাট্রোপিন, স্কোপোলামিন ও হায়োসায়ামিন (অ্যান্টিকোলিনার্জিক বিষ)',
    targetOrgans: 'Central nervous system, eyes, cardiovascular system',
    targetOrgansBn: 'কেন্দ্রীয় স্নায়ুতন্ত্র, চোখ ও সংবহনতন্ত্র',
    symptomsIfIngestedEn: [
      'Severe dry mouth, slurred speech, and extreme unquenchable thirst',
      'Extreme pupil dilation (mydriasis) and photophobia with blurred vision',
      'Rapid tachycardia, extreme hyperthermia, hallucinations, and convulsions'
    ],
    symptomsIfIngestedBn: [
      'মুখ ও জিহ্বা শুকিয়ে কথা জড়ানো এবং তীব্র তৃষ্ণা',
      'চোখের মণি অস্বাভাবিক বড় হওয়া ও ঝাপসা দৃষ্টি',
      'দ্রুত হৃদস্পন্দন, তীব্র জ্বর, প্রলাপ ও খিঁচুনি'
    ],
    contactHazardEn: 'Sap absorption through broken skin can induce systemic anticholinergic signs.',
    contactHazardBn: 'ত্বকে ক্ষত থাকলে কষ রক্তে মিশে বিষক্রিয়া ঘটাতে পারে।',
    emergencyCareEn: [
      'Immediate hospital admission and antidote (Physostigmine) evaluation.',
      'Active cooling measures for hyperthermia.'
    ],
    emergencyCareBn: [
      'দ্রুত হাসপাতালে নিয়ে অ্যান্টিডোট দেওয়ার ব্যবস্থা করুন।',
      'উচ্চ জ্বর কমাতে ঠাণ্ডা পানি দিয়ে শরীর মুছিয়ে দিন।'
    ],
    childSafetyWarningEn: 'WARNING: DEADLY TOXICITY! NEVER TOUCH OR CONSUME ANY PART OF THIS PLANT.',
    childSafetyWarningBn: 'মারাত্মক বিপদ! এই উদ্ভিদের কোনো অংশ স্পর্শ বা ভক্ষণ করবেন না।',
    visualKeywords: ['atropa', 'belladonna', 'nightshade']
  },
  {
    id: 'aconitum-napellus',
    nameEn: 'Monkshood / Wolfsbane (Kathbish / Mitha Bish)',
    nameBn: 'কাঠবিষ বা নেপাল বিষ পাতা (Aconitum napellus)',
    scientificName: 'Aconitum napellus / Aconitum ferox',
    family: 'Ranunculaceae',
    toxicityLevel: 'High',
    toxicityLevelBn: 'চরম মাত্রার বিষাক্ত (Extremely Lethal Aconitine)',
    activeToxin: 'Aconitine alkaloid (voltage-gated sodium channel opener)',
    activeToxinBn: 'অ্যাকোনাইটিন ক্ষারীয় উপাদান (সোডিয়াম চ্যানেল বিধ্বংসী স্নায়ুবিষ)',
    targetOrgans: 'Heart, central nervous system, sensory nerves',
    targetOrgansBn: 'হৃৎপিণ্ড, কেন্দ্রীয় স্নায়ুতন্ত্র ও ইন্দ্রিয় স্নায়ু',
    symptomsIfIngestedEn: [
      'Immediate tingling, burning, and numbness spreading across mouth and face',
      'Intense sensation of freezing cold water flowing through veins',
      'Refractory ventricular arrhythmias and respiratory arrest within 1-2 hours'
    ],
    symptomsIfIngestedBn: [
      'মুখে, জিহ্বায় ও ঠোঁটে তীব্র ঝিনঝিন অনুভূতি ও অসাড়তা',
      'শরীরের রক্তনালীতে বরফ ঠাণ্ডা প্রবাহের অনুভূতি',
      '১-২ ঘণ্টার মধ্যে মারাত্মক হৃদরোগ ও শ্বাসযন্ত্র অচল হয়ে জীবনহানি'
    ],
    contactHazardEn: 'Aconitine absorbs rapidly through intact skin; do NOT touch with bare hands.',
    contactHazardBn: 'অ্যাকোনাইটিন খালি ত্বকের মধ্য দিয়েও দ্রুত রক্তে শোষিত হয়; ভুলেও হাত দিয়ে ধরবেন না।',
    emergencyCareEn: [
      'Critical emergency ICU care; immediate anti-arrhythmic and cardiopulmonary support.',
      'Wear gloves when handling specimens.'
    ],
    emergencyCareBn: [
      'তৎক্ষণাৎ আইসিইউতে কৃত্রিম শ্বাসপ্রশ্বাস ও কার্ডিয়াক সাপোর্ট নিশ্চিত করুন।',
      'গাছ নাড়াচাড়া করতে সবসময় সুরক্ষামূলক গ্লাভস পরুন।'
    ],
    childSafetyWarningEn: 'WARNING: EXTREMELY DEADLY! SKIN CONTACT ALONE CAN CAUSE CARDIAC ARRHYTHMIAS. KEEP ALL CHILDREN AWAY.',
    childSafetyWarningBn: 'চরম সতর্কবার্তা! শুধুমাত্র স্পর্শ করলেও হৃৎপিণ্ডের সমস্যা হতে পারে। শিশুদের কাছে যেতে দেবেন না।',
    visualKeywords: ['aconitum', 'monkshood', 'wolfsbane', 'kathbish']
  },
  {
    id: 'conium-maculatum',
    nameEn: 'Poison Hemlock',
    nameBn: 'পয়জন হেমলক পাতা (Conium maculatum)',
    scientificName: 'Conium maculatum',
    family: 'Apiaceae',
    toxicityLevel: 'High',
    toxicityLevelBn: 'উচ্চ মাত্রার মারাত্মক বিষাক্ত (Lethal Coniine)',
    activeToxin: 'Coniine and pyridine alkaloids (nicotinic acetylcholine receptor blocker)',
    activeToxinBn: 'কোনিন নিউরোটক্সিন (স্নায়ু সংকেত বন্ধকারী বিষ)',
    targetOrgans: 'Neuromuscular junction, peripheral nervous system, diaphragm',
    targetOrgansBn: 'স্নায়ু ও পেশির সংযোগস্থল, প্রান্তীয় স্নায়ুতন্ত্র ও ফুসফুসীয় পেশি',
    symptomsIfIngestedEn: [
      'Progressive ascending muscular paralysis starting from legs up to the chest',
      'Loss of speech, trembling, pupil dilation, and slowed respiration',
      'Death by complete asphyxiation due to diaphragm muscle paralysis'
    ],
    symptomsIfIngestedBn: [
      'পা থেকে বুক পর্যন্ত ক্রমান্বয়ে পেশি অবশ বা পক্ষাঘাতগ্রস্ত হওয়া',
      'কথা বন্ধ হওয়া, কাঁপুনি ও শ্বাসপ্রশ্বাস মন্থর হয়ে আসা',
      'ফুসফুসের ডায়াফ্রাম পেশি অচল হয়ে দম বন্ধ হয়ে মৃত্যু'
    ],
    contactHazardEn: 'Can cause skin rashes; crushed leaves emit a distinctive mousy odor.',
    contactHazardBn: 'ত্বকে চুলকানি হতে পারে; পাতা পিষলে তীব্র আঁশটে গন্ধ বের হয়।',
    emergencyCareEn: [
      'Immediate mechanical ventilation and hospital emergency intensive care.',
      'Maintain clear airway until toxin clears the body.'
    ],
    emergencyCareBn: [
      'কালবিলম্ব না করে ভেন্টিলেটর সাপোর্টের জন্য জরুরি হাসপাতালে নিন।',
      'বিষ শরীর থেকে দূর না হওয়া পর্যন্ত কৃত্রিম অক্সিজেন চালু রাখুন।'
    ],
    childSafetyWarningEn: 'WARNING: HISTORICALLY LETHAL POISON! RESEMBLES PARSLEY/CARROT LEAVES. NEVER FORAGE OR EAT.',
    childSafetyWarningBn: 'সাবধান! ধনেপাতা বা গাজর পাতার মতো দেখতে এই পাতা মারাত্মক বিষাক্ত। কখনোই ছিঁড়বেন না।',
    visualKeywords: ['conium', 'maculatum', 'hemlock', 'poison hemlock']
  },
  {
    id: 'cicuta-virosa',
    nameEn: 'Water Hemlock / Cowbane',
    nameBn: 'ওয়াটার হেমলক পাতা (Cicuta virosa)',
    scientificName: 'Cicuta virosa / Cicuta maculata',
    family: 'Apiaceae',
    toxicityLevel: 'High',
    toxicityLevelBn: 'চরম মাত্রার বিষাক্ত (Cicutoxin Neurotoxin)',
    activeToxin: 'Cicutoxin (highly potent non-competitive GABA antagonist)',
    activeToxinBn: 'সিক্যুটক্সিন (তীব্র স্নায়ুবিক খিঁচুনি সৃষ্টিকারী বিষ)',
    targetOrgans: 'Central nervous system, brainstem, kidneys',
    targetOrgansBn: 'কেন্দ্রীয় স্নায়ুতন্ত্র, মস্তিষ্ক ও বৃক্ক',
    symptomsIfIngestedEn: [
      'Violent grand mal seizures and convulsions within 15 to 30 minutes',
      'Excessive frothing at the mouth, muscle tremors, and extreme agitation',
      'Rhabdomyolysis, metabolic acidosis, status epilepticus, and death'
    ],
    symptomsIfIngestedBn: [
      '১৫-৩০ মিনিটের মধ্যে প্রচণ্ড খিঁচুনি ও অজ্ঞান হয়ে যাওয়া',
      'মুখে অতিরিক্ত ফেনা ওঠা, সারা শরীর কাঁপা ও অস্থিরতা',
      'পেশি ধ্বংস, রক্তে এসিড বৃদ্ধি এবং অবিরাম খিঁচুনিতে জীবনহানি'
    ],
    contactHazardEn: 'Toxic oily sap absorbs through abrasions.',
    contactHazardBn: 'তৈলাক্ত বিষাক্ত কষ ত্বকের কাটা অংশে লাগলে শরীরে প্রবেশ করতে পারে।',
    emergencyCareEn: [
      'Rush to nearest emergency department immediately for IV anticonvulsants (Benzodiazepines).',
      'Protect patient from physical injury during seizures.'
    ],
    emergencyCareBn: [
      'খিঁচুনি বন্ধের জরুরি ইনজেকশনের জন্য দ্রুত হাসপাতালে নিন।',
      'খিঁচুনির সময় রোগীকে শক্ত আঘাত থেকে রক্ষা করুন।'
    ],
    childSafetyWarningEn: 'WARNING: ONE OF NORTH AMERICA & ASIA\'S MOST VIOLENTLY TOXIC PLANTS. KEEP CHILDREN AWAY.',
    childSafetyWarningBn: 'সতর্কতা: অত্যন্ত বিপজ্জনক বিষাক্ত উদ্ভিদ। শিশুদের এর কাছে যেতে দেওয়া সম্পূর্ণ নিষিদ্ধ।',
    visualKeywords: ['cicuta', 'water hemlock', 'cowbane']
  },
  {
    id: 'euphorbia-tirucalli',
    nameEn: 'Pencil Cactus / Milk Bush (Shiddhu)',
    nameBn: 'শিদ্ধু বা শপ্তপর্ণ ক্যাকটাস পাতা (Euphorbia tirucalli)',
    scientificName: 'Euphorbia tirucalli',
    family: 'Euphorbiaceae',
    toxicityLevel: 'Moderate',
    toxicityLevelBn: 'মাঝারি বিষাক্ত (Caustic Latex Hazard)',
    activeToxin: 'Euphorbon, diterpene esters & caustic milky white latex',
    activeToxinBn: 'ইউফরবন ও ক্ষারীয় দুধের মতো সাদা কষ',
    targetOrgans: 'Eyes, skin, mucous membranes, stomach',
    targetOrgansBn: 'চোখ, ত্বক, শ্লেষ্মা ঝিল্লি ও পাকস্থলী',
    symptomsIfIngestedEn: [
      'Severe burning pain in mouth, tongue, and throat with blister formation',
      'Vomiting, abdominal cramps, and diarrhea'
    ],
    symptomsIfIngestedBn: [
      'মুখ, জিহ্বা ও গলায় তীব্র জ্বালাপোড়া ও ফোসকা পড়া',
      'বমি, পেটে তীব্র মোচড় ও পাতলা পায়খানা'
    ],
    contactHazardEn: 'Extremely caustic sap causes chemical burns, blisters, and temporary blindness if splashed into eyes.',
    contactHazardBn: 'কষ চোখে লাগলে কর্নিয়া পুড়ে সাময়িক অন্ধত্ব এবং ত্বকে লাগলে ফোসকা পড়ে।',
    emergencyCareEn: [
      'Flush eyes immediately with continuous running water for 15-20 minutes.',
      'Seek ophthalmology emergency evaluation.'
    ],
    emergencyCareBn: [
      'চোখে কষ লাগলে সাথে সাথে অন্তত ১৫-২০ মিনিট প্রচুর পানি দিয়ে চোখ ধুয়ে চিকিৎসকের কাছে যান।',
      'ত্বকে সাবান-পানি দিয়ে ধুয়ে নিন।'
    ],
    childSafetyWarningEn: 'WARNING: HIGHLY IRRITATING SAP! KEEP CHILDREN AWAY FROM PENCIL CACTUS HEDGES.',
    childSafetyWarningBn: 'সাবধান! দুধের মতো সাদা কষ অত্যন্ত ক্ষতিকর। শিশুদের এই গাছ ভাঙতে বা ধরতে দেবেন না।',
    visualKeywords: ['euphorbia', 'tirucalli', 'pencil cactus', 'milk bush', 'shiddhu']
  },
  {
    id: 'plumeria-rubra',
    nameEn: 'Frangipani / Temple Tree (Kathgolap)',
    nameBn: 'কাঠগোলাপ পাতা (Plumeria rubra / Plumeria obtusa)',
    scientificName: 'Plumeria rubra / Plumeria obtusa',
    family: 'Apocynaceae',
    toxicityLevel: 'Moderate',
    toxicityLevelBn: 'মাঝারি বিষাক্ত (Irritant Milky Sap)',
    activeToxin: 'Plumericin, fulvoplumerin, and toxic milky latex',
    activeToxinBn: 'প্লুমেরিসিন ও বিষাক্ত দুধের মতো কষ',
    targetOrgans: 'Skin, eyes, gastrointestinal tract',
    targetOrgansBn: 'ত্বক, চোখ ও পরিপাকতন্ত্র',
    symptomsIfIngestedEn: [
      'Mild to moderate stomach upset, nausea, vomiting, and diarrhea',
      'Mouth tingling and throat discomfort'
    ],
    symptomsIfIngestedBn: [
      'পেট খারাপ, বমিভাব, বমি ও পাতলা পায়খানা',
      'মুখ ও গলায় অস্বস্তি ও চুলকানি'
    ],
    contactHazardEn: 'Milky sap causes skin rash, itching, and severe eye irritation.',
    contactHazardBn: 'পাতার কষ ত্বকে লাগলে অ্যালার্জি, চুলকানি ও চোখে প্রদাহ তৈরি করে।',
    emergencyCareEn: [
      'Wash affected skin with warm soap and water.',
      'Rinse mouth if ingested; consult doctor if symptoms persist.'
    ],
    emergencyCareBn: [
      'আক্রান্ত ত্বক সাবান-পানি দিয়ে ধুয়ে নিন।',
      'মুখে গেলে ভালো করে কুলকুচি করুন ও ডাক্তারের পরামর্শ নিন।'
    ],
    childSafetyWarningEn: 'WARNING: TOXIC SAP! DO NOT ALLOW CHILDREN TO TEAR LEAVES OR GET SAP IN EYES.',
    childSafetyWarningBn: 'সতর্কতা: কাঠগোলাপের কষ ক্ষতিকর! শিশুদের পাতা ছিঁড়তে বা চোখে কষ লাগাতে দেবেন না।',
    visualKeywords: ['plumeria', 'rubra', 'frangipani', 'kathgolap']
  },
  {
    id: 'catharanthus-roseus',
    nameEn: 'Madagascar Periwinkle (Nayantara)',
    nameBn: 'নয়নতারা পাতা (Catharanthus roseus / Vinca rosea)',
    scientificName: 'Catharanthus roseus',
    family: 'Apocynaceae',
    toxicityLevel: 'Low',
    toxicityLevelBn: 'কম থেকে মাঝারি বিষাক্ত (Vinca Alkaloids)',
    activeToxin: 'Vincristine, Vinblastine, Ajmalicine, and Serpentine alkaloids',
    activeToxinBn: 'ভিনক্রিস্টিন, ভিনব্লাস্টিন ও সর্পেন্টাইন অ্যালকালয়েড',
    targetOrgans: 'Bone marrow, peripheral nerves, stomach',
    targetOrgansBn: 'অস্থিমজ্জা, প্রান্তীয় স্নায়ু ও পাকস্থলী',
    symptomsIfIngestedEn: [
      'Nausea, vomiting, stomach cramps, and diarrhea',
      'Peripheral neuropathy (tingling in fingers/toes) and reduced white blood cell count upon high dosage'
    ],
    symptomsIfIngestedBn: [
      'বমিভাব, বমি, পেটব্যথা ও পাতলা পায়খানা',
      'বেশি পরিমাণে খেলে হাত-পা ঝিনঝিন করা ও রক্তকণিকা কমে যাওয়ার ঝুঁকি'
    ],
    contactHazardEn: 'Mild skin irritation in sensitive individuals.',
    contactHazardBn: 'সংবেদনশীল ত্বকে সামান্য চুলকানি হতে পারে।',
    emergencyCareEn: [
      'Rinse mouth thoroughly; monitor hydration.',
      'Seek medical advice if child accidentally chews multiple leaves.'
    ],
    emergencyCareBn: [
      'মুখ ভালো করে ধুয়ে স্যালাইন দিন।',
      'শিশু কয়েকটি পাতা চিবিয়ে ফেললে চিকিৎসকের পরামর্শ নিন।'
    ],
    childSafetyWarningEn: 'WARNING: MEDICINAL BUT TOXIC! KEEP RAW LEAVES OUT OF REACH OF CHILDREN.',
    childSafetyWarningBn: 'সতর্কতা: ভেষজ হলেও বিষাক্ত উপাদান সমৃদ্ধ! কাঁচা পাতা শিশুদের মুখে দিতে দেবেন না।',
    visualKeywords: ['catharanthus', 'roseus', 'periwinkle', 'nayantara', 'vinca']
  },
  {
    id: 'alocasia-macrorrhizos',
    nameEn: 'Giant Taro / Elephant Ear (Bishkachu / Mankachu)',
    nameBn: 'বিষকচু বা বুনো মানকচু পাতা (Alocasia macrorrhizos)',
    scientificName: 'Alocasia macrorrhizos / Colocasia esculenta (wild)',
    family: 'Araceae',
    toxicityLevel: 'Moderate',
    toxicityLevelBn: 'মাঝারি বিষাক্ত (Insoluble Oxalate Raphides)',
    activeToxin: 'Sharp needle-shaped calcium oxalate raphides & sapotoxin',
    activeToxinBn: 'সূঁচালো ক্যালসিয়াম অক্সালেট ক্রিস্টাল ও স্যাপোটক্সিন',
    targetOrgans: 'Mouth, pharynx, vocal cords, tongue',
    targetOrgansBn: 'মুখগহ্বর, গলবিল, স্বরযন্ত্র ও জিহ্বা',
    symptomsIfIngestedEn: [
      'Severe stinging and burning of lips, tongue, and throat upon contact',
      'Significant swelling of tongue and throat, excessive salivation',
      'Risk of breathing obstruction in toddlers'
    ],
    symptomsIfIngestedBn: [
      'মুখে স্পর্শ করা মাত্রই তীব্র জ্বালা, খোঁচা লাগা ও চুলকানি',
      'জিহ্বা ও গলা ফুলে ওঠা এবং অতিরিক্ত লালা পড়া',
      'ছোট শিশুদের ক্ষেত্রে গলা ফুলে শ্বাসকষ্ট হওয়ার ঝুঁকি'
    ],
    contactHazardEn: 'Raw sap causes immediate itching and skin redness.',
    contactHazardBn: 'কাঁচা কষ লাগলে ত্বক সাথে সাথে চুলকায় ও লাল হয়ে যায়।',
    emergencyCareEn: [
      'Rinse mouth with cold water, milk, or lime juice to soothe crystals.',
      'Seek emergency airway evaluation if swallowing or breathing is compromised.'
    ],
    emergencyCareBn: [
      'মুখে বরফ ঠাণ্ডা দুধ বা লেবুর পানি দিয়ে কুলকুচি করান।',
      'শ্বাস নিতে কষ্ট হলে তৎক্ষণাৎ জরুরি বিভাগে যোগাযোগ করুন।'
    ],
    childSafetyWarningEn: 'WARNING: RAW LEAF CAUSES ACUTE ORAL BURNING. NEVER CONSUME UNCOOKED OR ALLOW CHILDREN TO TOUCH.',
    childSafetyWarningBn: 'সাবধান! কাঁচা পাতা বা কষ মুখে দিলে প্রচণ্ড জ্বালা ও ফোলা তৈরি হয়। শিশুদের দূরে রাখুন।',
    visualKeywords: ['alocasia', 'macrorrhizos', 'taro', 'bishkachu', 'mankachu', 'elephant ear']
  },
  {
    id: 'strychnos-nux-vomica',
    nameEn: 'Poison Nut / Strychnine Tree (Kuchila)',
    nameBn: 'কুচিলা পাতা (Strychnos nux-vomica)',
    scientificName: 'Strychnos nux-vomica',
    family: 'Loganiaceae',
    toxicityLevel: 'High',
    toxicityLevelBn: 'উচ্চ মাত্রার মারাত্মক বিষাক্ত (Lethal Strychnine)',
    activeToxin: 'Strychnine and Brucine alkaloids (glycine receptor competitive antagonist)',
    activeToxinBn: 'স্ট্রাইকনিন ও ব্রুসিন অ্যালকালয়েড (মারাত্মক মেরুদণ্ডীয় স্নায়ুবিষ)',
    targetOrgans: 'Spinal cord motor neurons, central nervous system',
    targetOrgansBn: 'মেরুদণ্ডের মোটর নিউরন ও কেন্দ্রীয় স্নায়ুতন্ত্র',
    symptomsIfIngestedEn: [
      'Extreme stiffness in neck and facial muscles, painful muscle spasms',
      'Violent tetanic convulsions triggered by minimal sensory stimuli (light/sound)',
      'Asphyxia due to continuous contraction of respiratory muscles'
    ],
    symptomsIfIngestedBn: [
      'ঘাড় ও মুখের পেশি অস্বাভাবিক শক্ত হয়ে যাওয়া ও তীব্র খিঁচুনি',
      'সামান্য আলো বা শব্দেই সারা শরীরে মারাত্মক ধনুর্বিধ খিঁচুনি',
      'শ্বাসযন্ত্রের পেশি সংকুচিত হয়ে দম বন্ধ হয়ে মৃত্যু'
    ],
    contactHazardEn: 'Toxic dust or sap absorption.',
    contactHazardBn: 'কষ বা শুকনো পাতার গুঁড়ো নিঃশ্বাসের সাথে শরীরে গেলে ক্ষতি হতে পারে।',
    emergencyCareEn: [
      'Urgent hospital emergency care; place patient in a dark, quiet room.',
      'Intravenous administration of muscle relaxants and mechanical ventilation.'
    ],
    emergencyCareBn: [
      'তৎক্ষণাৎ হাসপাতালে নিয়ে যান এবং রোগীকে সম্পূর্ণ অন্ধকার ও শান্ত ঘরে রাখুন।',
      'পেশি শিথিলকারক ইনজেকশন ও কৃত্রিম শ্বাসপ্রশ্বাসের ব্যবস্থা নিন।'
    ],
    childSafetyWarningEn: 'WARNING: STRONGLY LETHAL STRYCHNINE POISON. STRICTLY FORBIDDEN FOR CONSUMPTION.',
    childSafetyWarningBn: 'মারাত্মক বিপদ! কুচিলা গাছ অত্যন্ত প্রাণঘাতী স্ট্রাইকনিন বিষ ধারণ করে। শিশুদের সম্পূর্ণ দূরে রাখুন।',
    visualKeywords: ['strychnos', 'nux-vomica', 'kuchila', 'strychnine']
  },
  {
    id: 'digitalis-purpurea',
    nameEn: 'Foxglove',
    nameBn: 'ফক্সগ্লোভ পাতা (Digitalis purpurea)',
    scientificName: 'Digitalis purpurea',
    family: 'Plantaginaceae',
    toxicityLevel: 'High',
    toxicityLevelBn: 'উচ্চ মাত্রার বিষাক্ত (Digitalis Glycosides)',
    activeToxin: 'Digoxin, Digitoxin, and Gitoxin cardiac glycosides',
    activeToxinBn: 'ডিগক্সিন ও ডিজিটক্সিন (কার্ডিয়াক গ্লাইকোসাইড বিষ)',
    targetOrgans: 'Heart, sodium-potassium ATPase pump, vision',
    targetOrgansBn: 'হৃৎপিণ্ড, সোডিয়াম-পটাশিয়াম পাম্প ও দৃষ্টিশক্তি',
    symptomsIfIngestedEn: [
      'Severe nausea, persistent vomiting, abdominal pain',
      'Abnormal slow pulse (bradycardia), heart block, ventricular fibrillation',
      'Yellow-green halo vision (xanthopsia) and delirium'
    ],
    symptomsIfIngestedBn: [
      'তীব্র বমিভাব, পেটব্যথা ও মাথা ঘোরা',
      'নাড়ির গতি অস্বাভাবিক ধীর হওয়া ও মারাত্মক হার্ট অ্যাটাকের ঝুঁকি',
      'সবকিছু হলুদ বা সবুজ দেখার মতো দৃষ্টি বিভ্রম (জ্যান্থোপসিয়া)'
    ],
    contactHazardEn: 'Skin contact can cause dermatitis.',
    contactHazardBn: 'পাতার সংস্পর্শে চর্মরোগ বা ফুসকুড়ি হতে পারে।',
    emergencyCareEn: [
      'Immediate hospital emergency transport; monitor cardiac telemetry.',
      'Digoxin-specific Fab fragments antidote therapy.'
    ],
    emergencyCareBn: [
      'দ্রুত কার্ডিয়াক হাসপাতালে স্থানান্তর করুন এবং ইসিজি পর্যবেক্ষণ করুন।',
      'নির্দিষ্ট অ্যান্টিডোট ইনজেকশন দেওয়ার ব্যবস্থা নিন।'
    ],
    childSafetyWarningEn: 'WARNING: LETHAL HEART TOXIN. KEEP CHILDREN AWAY FROM ORNAMENTAL FOXGLOVE PLANTS.',
    childSafetyWarningBn: 'সাবধান! মারাত্মক হৃদরোগের বিষ। শিশুদের এই ফুল ও পাতা স্পর্শ করতে দেবেন না।',
    visualKeywords: ['digitalis', 'purpurea', 'foxglove']
  },
  {
    id: 'zantedeschia-aethiopica',
    nameEn: 'Calla Lily',
    nameBn: 'কালা লিলি পাতা (Zantedeschia aethiopica)',
    scientificName: 'Zantedeschia aethiopica',
    family: 'Araceae',
    toxicityLevel: 'Moderate',
    toxicityLevelBn: 'মাঝারি বিষাক্ত (Insoluble Oxalates)',
    activeToxin: 'Microscopic needle-like calcium oxalate crystals & toxic alkaloids',
    activeToxinBn: 'ক্যালসিয়াম অক্সালেট ক্রিস্টাল সূঁচ ও ক্ষারীয় বিষ',
    targetOrgans: 'Mouth, tongue, lips, esophagus',
    targetOrgansBn: 'মুখ, জিহ্বা, ঠোঁট ও খাদ্যনালী',
    symptomsIfIngestedEn: [
      'Immediate intense oral burning sensation and swelling',
      'Difficulty swallowing (dysphagia), excessive drooling, hoarseness',
      'Gastric irritation and vomiting'
    ],
    symptomsIfIngestedBn: [
      'মুখে দেওয়ার সাথে সাথে তীব্র জ্বালাপোড়া ও ফোলা',
      'খাবার গিলতে কষ্ট হওয়া, অতিরিক্ত লালা ঝরা ও গলা ভাঙা',
      'পেটব্যথা ও বমি'
    ],
    contactHazardEn: 'Sap causes skin erythema, burning, and eye stinging.',
    contactHazardBn: 'কষ লাগলে ত্বক লাল হয়ে জ্বলে ও চোখে তীব্র প্রদাহ সৃষ্টি হয়।',
    emergencyCareEn: [
      'Rinse mouth thoroughly with cool milk or water.',
      'Seek medical care if swelling threatens breathing.'
    ],
    emergencyCareBn: [
      'মুখ ঠাণ্ডা দুধ বা পানি দিয়ে ভালো করে কুলকুচি করান।',
      'শ্বাসকষ্ট দেখা দিলে দ্রুত হাসপাতালে নিন।'
    ],
    childSafetyWarningEn: 'WARNING: ORNAMENTAL TOXIC! KEEP CHILDREN AND HOUSE PETS FROM CHEWING LEAVES.',
    childSafetyWarningBn: 'সতর্কতা: শোভাময় হলেও ক্ষতিকর পাতা! শিশু ও গৃহপালিত প্রাণীকে দূরে রাখুন।',
    visualKeywords: ['zantedeschia', 'calla lily', 'aethiopica']
  },
  {
    id: 'philodendron-hederaceum',
    nameEn: 'Heartleaf Philodendron',
    nameBn: 'ফিলোডেনড্রন পাতা (Philodendron hederaceum)',
    scientificName: 'Philodendron hederaceum / Philodendron cordatum',
    family: 'Araceae',
    toxicityLevel: 'Low',
    toxicityLevelBn: 'কম থেকে মাঝারি বিষাক্ত (Indoor Oxalate Hazard)',
    activeToxin: 'Insoluble calcium oxalate raphides',
    activeToxinBn: 'অদ্রবণীয় ক্যালসিয়াম অক্সালেট সূঁচ',
    targetOrgans: 'Oral cavity, lips, throat',
    targetOrgansBn: 'মুখগহ্বর, ঠোঁট ও গলা',
    symptomsIfIngestedEn: [
      'Burning sensation in mouth and lips, localized swelling',
      'Mild stomach discomfort and salivation in young children'
    ],
    symptomsIfIngestedBn: [
      'মুখ ও ঠোঁটে জ্বালাপোড়া ও ফোলা ভাব',
      'ছোট শিশুদের ক্ষেত্রে পেটে অস্বস্তি ও লালা পড়া'
    ],
    contactHazardEn: 'Mild skin irritation from sap.',
    contactHazardBn: 'কষ লাগলে সামান্য চুলকানি হতে পারে।',
    emergencyCareEn: [
      'Wipe mouth with damp cloth; offer cold drinks or ice cubes.',
      'Consult pediatrician if swelling persists.'
    ],
    emergencyCareBn: [
      'ভেজা কাপড় দিয়ে মুখ মুছে দিন এবং বরফ বা ঠাণ্ডা পানি দিন।',
      'ফোলা না কমলে শিশু চিকিৎসকের পরামর্শ নিন।'
    ],
    childSafetyWarningEn: 'WARNING: KEEP INDOOR HOUSEPLANT AWAY FROM TODDLERS AND PETS.',
    childSafetyWarningBn: 'সতর্কতা: ঘরের ইনডোর গাছ শিশুদের নাগালের বাইরে রাখুন।',
    visualKeywords: ['philodendron', 'hederaceum', 'heartleaf']
  }
];
