import { LeafDisease } from '../../types';
import imgNitrogenDeficiency from '../../assets/images/nitrogen_deficiency_leaf_1791701206580.jpg';
import imgHealthy from '../../assets/images/healthy_citrus_leaf_1791699764349.jpg';
import imgBlightGeneral from '../../assets/images/unhealthy_blight_leaf_1791699775237.jpg';

export const PEST_ABIOTIC_DISEASES: LeafDisease[] = [
  // ==========================================
  // 1. NUTRIENT DEFICIENCIES (পুষ্টির ঘাটতি)
  // ==========================================
  {
    id: 'deficiency-nitrogen',
    name: 'Nitrogen (N) Deficiency',
    nameBn: 'নাইট্রোজেন (ইউরিয়া) ঘাটতিজনিত ক্লোরোসিস',
    scientificName: 'Abiotic Nutrient Disorder (Nitrogen Deficit)',
    causalOrganism: 'Nutritional Deficiency: Low plant-available nitrogen in soil (NO3- / NH4+)',
    confirmedHosts: ['Rice', 'Wheat', 'Corn', 'Tomato', 'Potato', 'All Crops'],
    plantSpecies: 'All Crops (সার্বিক ফসল)',
    plantSpeciesBn: 'সকল ফসল',
    cropType: 'pest_abiotic',
    category: 'deficiency',
    categoryBn: 'পুষ্টিহীনতা',
    severity: 'Moderate',
    severityBn: 'মাঝারি',
    imageUrl: imgNitrogenDeficiency,
    imageAlt: 'Leaf showing generalized uniform yellowing starting from tip and midrib on older lower foliage',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy dark green foliage with optimal chlorophyll',
    visualCharacteristics: 'Uniform, generalized pale-green to golden-yellow chlorosis beginning on older lower leaves, progressing from leaf tip along the midrib in a V-shape.',
    visualCharacteristicsBn: 'পুরোনো নিচের পাতা থেকে শুরু হওয়া সমরূপ হলদেটে বিবর্ণতা, যা পাতার ডগা থেকে মাঝের শিরা বরাবর ইংরেজি ভি (V) আকৃতিতে ছড়ায়।',
    earlySymptoms: 'Older leaves lose dark green lustre, becoming light yellowish-green.',
    earlySymptomsBn: 'নিচের পুরোনো পাতা গাঢ় সবুজ উজ্জ্বলতা হারিয়ে হালকা হলুদ-সবুজ হয়ে যায়।',
    advancedSymptoms: 'Complete yellowing of lower leaves followed by browning, premature drying, stunted thin stems, and poor tillering.',
    advancedSymptomsBn: 'পুরোনো পাতা পুরোপুরি হলুদ হয়ে শুকিয়ে যায়, গাছের কাণ্ড চিকন ও খর্বাকৃতি হয় এবং কুশি গজায় না।',
    affectedLeafSurface: 'Entire blade of older lower leaves (mobile nutrient in plant)',
    affectedLeafSurfaceBn: 'নিচের পুরোনো পাতার সম্পূর্ণ ফলক (গাছের ভেতরে সহজে চলাচলকারী উপাদান)',
    spreadMechanism: 'Non-infectious physiological disorder; does not transmit between plants',
    spreadMechanismBn: 'অসংক্রামক শারীরবৃত্তীয় সমস্যা; এক গাছ থেকে অন্য গাছে ছড়ায় না',
    frequentConditions: 'Leached sandy soils after heavy rains, waterlogged soils with denitrification, low organic matter.',
    frequentConditionsBn: 'ভারী বৃষ্টির পর বেলে মাটির পুষ্টি ধুয়ে যাওয়া, জলাবদ্ধ মাটিতে গ্যাসিং এবং জৈব পদার্থের অভাব।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BRRI Soil Science Division & BARI Fertilizer Recommendation Guide',
    similarDiseases: [
      {
        name: 'Sulfur (S) Deficiency',
        nameBn: 'গন্ধক (সালফার) ঘাটতি',
        difference: 'Sulfur deficiency shows uniform yellowing on young upper leaves first, whereas Nitrogen deficiency strictly starts on older bottom leaves.',
        differenceBn: 'সালফারের ঘাটতিতে কচি নতুন পাতা আগে হলুদ হয়, কিন্তু নাইট্রোজেনে সবার আগে পুরোনো নিচের পাতা হলুদ হয়।'
      },
      {
        name: 'Rice Tungro Virus',
        nameBn: 'ধানের টুংরো রোগ',
        difference: 'Tungro virus causes patchy yellow-orange leaf discoloration with severe stunting and vector leafhoppers, unlike uniform nutritional chlorosis.',
        differenceBn: 'টুংরোতে পাতা অনিয়মিত কমলা-হলুদ হয় এবং সবুজ পাতাফড়িং পোকা থাকে, পুষ্টির মতো সুষম হলুদ হয় না।'
      }
    ],
    symptoms: [
      'Uniform pale green to bright yellow discoloration of older lower leaves',
      'In cereals: V-shaped yellowing starting at leaf tips and running down midribs',
      'Thin, erect, spindly stems and drastically reduced vegetative growth'
    ],
    symptomsBn: [
      'গাছের নিচের পুরোনো পাতাগুলো পুরোপুরি ফ্যাকাশে হলুদ হয়ে যাওয়া',
      'ধান বা দানাদার ফসলে পাতার ডগা থেকে শিরা বরাবর ইংরেজি "V" আকৃতির হলুদ দাগ',
      'গাছের কাণ্ড চিকন ও খর্বাকৃতি হওয়া এবং কুশি কম হওয়া'
    ],
    causes: [
      'Insufficient application of nitrogenous fertilizers (Urea)',
      'High rainfall leaching nitrates below root zone in sandy soils',
      'Immobilization of nitrogen due to undecomposed high-carbon crop residues'
    ],
    causesBn: [
      'পর্যাপ্ত ইউরিয়া সার প্রয়োগ না করা',
      'অতিরিক্ত বৃষ্টিতে নাইট্রোজেন ধুয়ে মাটির গভীরে চলে যাওয়া',
      'কাঁচা খড় বা অপূর্ণাঙ্গ জৈব পদার্থ মাটিতে পচনের সময় নাইট্রোজেন আটকে রাখা'
    ],
    organicTreatment: [
      'Apply well-decomposed vermicompost (100-200g/plant) or composted poultry manure',
      'Incorporate green manure crops like Dhaincha (Sesbania) prior to planting',
      'Spray vermiwash or cow urine ferment (1:10 dilution in water)'
    ],
    organicTreatmentBn: [
      'গাছের গোড়ায় ভালো পচানো কেঁচো সার বা গোবর সার দিন',
      'জমিতে ধইঞ্চা চাষ করে সবুজ সার হিসেবে মাটিতে মিশিয়ে দিন',
      'ভার্মিওয়াশ বা ১০ গুণ পানিতে মেশানো গোমূত্র স্প্রে করুন'
    ],
    chemicalTreatment: [
      'Top-dress balanced Urea in split doses based on crop growth stage; for rapid rescue spray foliar Urea (1-2% solution = 10-20g/L)'
    ],
    chemicalTreatmentBn: [
      'কিশোর বয়সে ইউরিয়া উপরিপ্রয়োগ করুন; দ্রুত প্রতিকারের জন্য ১-২% ইউরিয়া দ্রবণ (১০-২০ গ্রাম/লিটার পানিতে) স্প্রে করুন'
    ],
    prevention: [
      'Use Leaf Color Chart (LCC) in rice to apply urea only when required',
      'Apply Guti Urea (USG) deeply in root zone to prevent volatilization',
      'Maintain adequate soil organic matter above 2.0%'
    ],
    preventionBn: [
      'ধানের ক্ষেত্রে পাতা রঙের চার্ট (LCC) দেখে পরিমিত ইউরিয়া দিন',
      'গুটি ইউরিয়া মাটির গভীরে পুতে দিন যাতে অপচয় না হয়',
      'মাটিতে নিয়মিত জৈব সারের পরিমাণ বৃদ্ধি করুন'
    ]
  },
  {
    id: 'deficiency-potassium',
    name: 'Potassium (K) Deficiency',
    nameBn: 'পটাশিয়াম (পটাশ) ঘাটতিজনিত পাতার কিনারা পোড়া',
    scientificName: 'Abiotic Nutrient Disorder (Potassium Deficit)',
    causalOrganism: 'Nutritional Deficiency: Low plant-available potassium (K+)',
    confirmedHosts: ['Rice', 'Banana', 'Potato', 'Tomato', 'Cotton', 'All Crops'],
    plantSpecies: 'All Crops (সার্বিক ফসল)',
    plantSpeciesBn: 'সকল ফসল',
    cropType: 'pest_abiotic',
    category: 'deficiency',
    categoryBn: 'পুষ্টিহীনতা',
    severity: 'Moderate',
    severityBn: 'মাঝারি',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Leaf margins showing dry scorched brown necrosis starting from older leaf margins and tips',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy green leaf blade with intact margins',
    visualCharacteristics: 'Marginal chlorosis followed by severe brown necrotic scorching and drying along leaf edges of older foliage; tips curl downward.',
    visualCharacteristicsBn: 'পুরোনো পাতার ডগা ও কিনারা বরাবর হলুদ হয়ে তামাটে-বাদামি পোড়ার মতো শুকিয়ে যাওয়া, যেন আগুনে পুড়ে গেছে।',
    earlySymptoms: 'Yellowing of the tips and outer margins of older mature leaves.',
    earlySymptomsBn: 'পুরোনো পাতার ডগা ও কিনারায় হালকা হলুদ রেখা দেখা দেওয়া।',
    advancedSymptoms: 'Margins become crispy brown and scorched ("marginal scorch"); leaves tear easily; weak lodging stems.',
    advancedSymptomsBn: 'পাতার চারপাশ পুড়ে খসখসে বাদামি হয়ে যায়, পাতা সহজে ফেটে যায় এবং গাছের কাণ্ড নুয়ে পড়ে।',
    affectedLeafSurface: 'Leaf margins and tips of older mature leaves',
    affectedLeafSurfaceBn: 'পুরোনো পাতার কিনারা ও ডগার অংশ',
    spreadMechanism: 'Non-infectious physiological nutritional disorder',
    spreadMechanismBn: 'অসংক্রামক শারীরবৃত্তীয় পুষ্টি সমস্যা',
    frequentConditions: 'Light textured sandy soils, high calcium or magnesium interfering with K uptake, drought stress.',
    frequentConditionsBn: 'বেলে মাটি, অতিরিক্ত চুনযুক্ত মাটি এবং খরার কারণে গাছের পানি টানার ঘাটতি।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Fertilizer Guide & International Plant Nutrition Institute (IPNI)',
    similarDiseases: [
      {
        name: 'Bacterial Leaf Blight of Rice',
        nameBn: 'ধানের পাতা পোড়া রোগ (বিএলবি)',
        difference: 'BLB has wavy water-soaked margins with bacterial ooze beads in morning dew, while Potassium deficiency is dry, continuous marginal scorch without bacterial ooze.',
        differenceBn: 'বিএলবি রোগে ঢেউ খেলানো কিনারা ও সকালে ব্যাকটেরিয়ার রস থাকে, পটাশ ঘাটতিতে কোনো রস ছাড়া শুকনো পোড়া দাগ হয়।'
      },
      {
        name: 'Salt / Salinity Burn',
        nameBn: 'লবণাক্ততাজনিত পোড়া',
        difference: 'Salt burn affects tips evenly in saline soils, whereas K deficiency creates distinctive chlorotic halos ahead of necrosis.',
        differenceBn: 'লবণাক্ততায় দ্রুত ডগা শুকায়, কিন্তু পটাশ ঘাটতিতে পোড়া অংশের ঠিক আগে সুস্পষ্ট হলুদ রেখা থাকে।'
      }
    ],
    symptoms: [
      'Marginal chlorosis turning into dark brown necrotic scorch along leaf edges',
      'Older leaves affected first, appearing as though burnt around margins',
      'Weak stems prone to lodging and reduced disease resistance'
    ],
    symptomsBn: [
      'পাতার চারপাশের কিনারা পুড়ে যাওয়ার মতো শুকিয়ে খসখসে বাদামি হওয়া',
      'প্রথমে নিচের পুরোনো পাতা আক্রান্ত হওয়া',
      'গাছের কাণ্ড দুর্বল হয়ে হেলে পড়া এবং সহজে রোগাক্রান্ত হওয়া'
    ],
    causes: [
      'Failure to apply Muriate of Potash (MOP) during land preparation',
      'Excessive urea application unbalancing the N:K ratio',
      'Sandy soils where potassium leaches rapidly'
    ],
    causesBn: [
      'জমি তৈরিতে পটাশ সার (এমওপি) না দেওয়া',
      'অতিরিক্ত ইউরিয়া প্রয়োগের ফলে পটাশের ভারসাম্য নষ্ট হওয়া',
      'বেলে মাটিতে পটাশ ধুয়ে যাওয়া'
    ],
    organicTreatment: [
      'Apply well-sifted wood ash (wood ash contains 5-10% water-soluble potassium) around plant roots',
      'Incorporate banana peel compost or dried neem cake into the root zone',
      'Apply bio-potash (Potash Solubilizing Bacteria - PSB)'
    ],
    organicTreatmentBn: [
      'গাছের গোড়ায় কাঠকয়লার ছাই ছিটিয়ে দিন (ছাইয়ে প্রচুর পটাশ থাকে)',
      'কলার খোসা পচানো জৈব সার বা খৈল মাটির সাথে মেশান',
      'পটাশ দ্রবীভূতকারী ব্যাকটেরিয়া জৈব সার প্রয়োগ করুন'
    ],
    chemicalTreatment: [
      'Apply Muriate of Potash (MOP) to soil; for quick foliage rescue spray Potassium Nitrate (KNO3) or SOP (1% solution = 10g/L)'
    ],
    chemicalTreatmentBn: [
      'মাটিতে এমওপি সার উপরিপ্রয়োগ করুন; দ্রুত ফলের পুষ্টির জন্য ১% পটাশিয়াম নাইট্রেট স্প্রে করুন'
    ],
    prevention: [
      'Always apply recommended dose of MOP at final land preparation',
      'Maintain balanced N:P:K ratios according to soil test recommendations',
      'Apply potassium in 2 splits on light sandy soils'
    ],
    preventionBn: [
      'জমি তৈরির শেষ চাষে অনুমোদিত মাত্রায় এমওপি সার দিন',
      'মাটি পরীক্ষা অনুযায়ী সুষম মাত্রায় সার ব্যবহার করুন',
      'বেলে মাটিতে পটাশ সার দুই কিস্তিতে ভাগ করে দিন'
    ]
  },
  {
    id: 'deficiency-zinc',
    name: 'Zinc (Zn) Deficiency (Khaira in Rice)',
    nameBn: 'দস্তা (জিঙ্ক) ঘাটতিজনিত খয়রা রোগ',
    scientificName: 'Abiotic Micronutrient Disorder (Zinc Deficit)',
    causalOrganism: 'Nutritional Deficiency: Low plant-available zinc (Zn2+) in alkaline or calcareous soils',
    confirmedHosts: ['Rice (Khaira disease)', 'Corn / Maize', 'Citrus', 'Tomato', 'Bean'],
    plantSpecies: 'Rice, Maize & Citrus (ধান, ভুট্টা ও লেবু)',
    plantSpeciesBn: 'ধান, ভুট্টা ও লেবু',
    cropType: 'pest_abiotic',
    category: 'deficiency',
    categoryBn: 'পুষ্টিহীনতা',
    severity: 'High',
    severityBn: 'তীব্র',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Rice leaves with rusty brown irregular blotches coalescing to bronze the leaf, with stunted plant growth',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy green erect rice seedlings',
    visualCharacteristics: 'Rusty-brown or bronze irregular spots appearing on middle leaves 2-3 weeks after transplanting; spots coalesce causing entire leaf to turn reddish-brown and dry; in maize, wide white bands on either side of the midrib ("white bud").',
    visualCharacteristicsBn: 'রোপণের ২-৩ সপ্তাহ পর ধানের পাতায় মরচে বা খয়েরি রঙের অসম ছোপ ছোপ দাগ, যা মিলে গিয়ে পুরো পাতা খয়েরি হয়ে যায়; ভুট্টায় পাতার শিরার দুই পাশে চওড়া সাদা ব্যান্ড পড়ে।',
    earlySymptoms: 'Faint chlorosis on the mid-blade of young leaves; small reddish-brown rust-like specks.',
    earlySymptomsBn: 'পাতার মাঝখানে হালকা হলুদ ভাব এবং ছোট খয়েরি মরচে দাগ।',
    advancedSymptoms: 'Entire leaf blade turns bronze/rust-colored and dries like leather; plant severely stunted with delayed root development.',
    advancedSymptomsBn: 'পুরো পাতা তামাটে-খয়েরি হয়ে শুকিয়ে যায়; গাছের বৃদ্ধি সম্পূর্ণ থেমে যায় এবং শিকড় গজায় না।',
    affectedLeafSurface: 'Middle leaves (partially mobile element in plants)',
    affectedLeafSurfaceBn: 'মাঝের বয়সের পাতা',
    spreadMechanism: 'Non-infectious physiological soil disorder',
    spreadMechanismBn: 'অসংক্রামক শারীরবৃত্তীয় মাটির পুষ্টি সমস্যা',
    frequentConditions: 'Permanently submerged waterlogged soils, high pH (>7.5), high phosphorus fertilizer application.',
    frequentConditionsBn: 'সারাবছর পানি জমে থাকা নিচু জমি, ক্ষারীয় মাটি এবং অতিরিক্ত টিএসপি সার প্রয়োগ।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BRRI (Pioneer discovery of Khaira disease) & BARI Micronutrient Guidelines',
    similarDiseases: [
      {
        name: 'Rice Brown Spot (Bipolaris)',
        nameBn: 'ধানের বাদামি দাগ রোগ',
        difference: 'Brown spot produces distinct oval spots with yellow halos throughout the canopy, whereas Zinc deficiency creates confluent rusty bronzing across lower-middle leaves with stunted root tufts.',
        differenceBn: 'বাদামি দাগ রোগে ডিম্বাকৃতি নির্দিষ্ট দাগ হয়, কিন্তু জিঙ্ক ঘাটতিতে কোনো নির্দিষ্ট দাগ ছাড়াই পুরো পাতা খয়েরি বা ব্রোঞ্জ রঙ ধারণ করে।'
      }
    ],
    symptoms: [
      'Rusty-brown, bronze blotches appearing on leaves 15-20 days after transplanting',
      'Severe plant stunting and root growth arrest in submerged rice fields',
      'In corn/maize: broad white/cream bleached bands on both sides of the midrib ("White Bud")'
    ],
    symptomsBn: [
      'রোপণের ১৫-২০ দিন পর পাতায় মরচে বা খয়েরি রঙের ছোপ পড়া',
      'গাছের বৃদ্ধি সম্পূর্ণ বন্ধ হয়ে খর্বাকৃতি হওয়া',
      'ভুট্টায় মাঝের শিরার দুই পাশে চওড়া সাদা রেখা তৈরি হওয়া'
    ],
    causes: [
      'Intensive cropping without micronutrient replenishment',
      'Continuous water submergence reducing zinc availability',
      'Excessive phosphorus (TSP/DAP) which binds zinc into insoluble zinc phosphate'
    ],
    causesBn: [
      'নিয়মিত দস্তা সার না দিয়ে নিবিড় চাষাবাদ',
      'জমিতে একটানা পানি জমে থাকায় দস্তার সহজলভ্যতা কমে যাওয়া',
      'অতিরিক্ত টিএসপি সারের সাথে দস্তা বিক্রিয়া করে অদ্রবণীয় হয়ে যাওয়া'
    ],
    organicTreatment: [
      'Drain standing water from the field completely for 3-5 days to aerate the root zone',
      'Apply enriched farmyard manure containing zinc chelate',
      'Mulch soil with organic compost'
    ],
    organicTreatmentBn: [
      'জমি থেকে জমে থাকা পানি ৩-৫ দিনের জন্য নামিয়ে দিয়ে শিকড়ে বাতাস চলাচলের সুযোগ দিন',
      'গোবর সারের সাথে চিলেটেড জিঙ্ক মিশিয়ে প্রয়োগ করুন',
      'মাটির আর্দ্রতা ঠিক রাখতে জৈব সার দিন'
    ],
    chemicalTreatment: [
      'Soil application of Zinc Sulfate (Heptahydrate 21% at 10-12 kg/ha or Monohydrate 36% at 6-7 kg/ha); for instant crop recovery spray Zinc Sulfate (0.5% = 5g/L) + slaked lime (2.5g/L)'
    ],
    chemicalTreatmentBn: [
      'জমিতে জিঙ্ক সালফেট (হেপ্টাহাইড্রেট ২১% বিঘায় ৩ কেজি) প্রয়োগ করুন; দ্রুত প্রতিকারের জন্য ৫ গ্রাম জিঙ্ক সালফেট ও আড়াই গ্রাম চুন প্রতি লিটার পানিতে গুলিয়ে স্প্রে করুন'
    ],
    prevention: [
      'Apply zinc fertilizer once every 3-4 crop cycles in rice-wheat rotations',
      'Never mix Zinc Sulfate directly with phosphate fertilizers (TSP/DAP) in the same slurry',
      'Allow soil to dry out between paddy seasons'
    ],
    preventionBn: [
      'বছরে অন্তত একবার মাটিতে অনুমোদিত মাত্রায় দস্তা সার দিন',
      'কখনো টিএসপি বা ডিএপি সারের সাথে দস্তা সার মিশিয়ে একসাথে দেবেন না',
      'ধান কাটার পর জমি শুকিয়ে গভীরভাবে চাষ দিন'
    ]
  },
  {
    id: 'deficiency-iron',
    name: 'Iron (Fe) Deficiency (Iron Chlorosis)',
    nameBn: 'লৌহ (আয়রন) ঘাটতিজনিত আন্তঃশিরা ক্লোরোসিস',
    scientificName: 'Abiotic Micronutrient Disorder (Iron Deficit)',
    causalOrganism: 'Nutritional Deficiency: Low available iron (Fe2+) in high pH calcareous or waterlogged soils',
    confirmedHosts: ['Rice', 'Citrus', 'Tomato', 'Rose', 'Ornamentals', 'Fruit Trees'],
    plantSpecies: 'Citrus, Rice & Ornamentals (লেবু, ধান ও ফুল)',
    plantSpeciesBn: 'লেবু, ধান ও ফুল',
    cropType: 'pest_abiotic',
    category: 'deficiency',
    categoryBn: 'পুষ্টিহীনতা',
    severity: 'Moderate',
    severityBn: 'মাঝারি',
    imageUrl: imgHealthy,
    imageAlt: 'Youngest terminal leaves completely pale yellow or ivory-white while fine veins remain distinctly green',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy green leaf with uniform dark green blade',
    visualCharacteristics: 'Sharp interveinal chlorosis appearing strictly on the YOUNGEST terminal leaves; leaf blade turns bright lemon-yellow to ivory-white, while the veins remain vividly green like a fine lace.',
    visualCharacteristicsBn: 'সবার আগে কচি নতুন পাতায় দেখা দেওয়া তীব্র আন্তঃশিরা ক্লোরোসিস; পাতার শিরাগুলো গাঢ় সবুজ থাকে কিন্তু শিরার মধ্যবর্তী স্থান উজ্জ্বল হলুদ বা হাতির দাঁতের মতো সাদা হয়ে যায়।',
    earlySymptoms: 'Interveinal chlorosis on the youngest expanding leaves at branch tips.',
    earlySymptomsBn: 'ডালের আগার একদম কচি পাতায় শিরার মাঝে হলুদ ভাব।',
    advancedSymptoms: 'Young leaves turn completely bleached cream-white without chlorophyll; leaf margins scorch brown and die.',
    advancedSymptomsBn: 'কচি পাতা সম্পূর্ণ সাদা হয়ে যায়, পাতার কিনারা বাদামি হয়ে মরে যায়।',
    affectedLeafSurface: 'Youngest emerging terminal leaves (immobile nutrient in plants)',
    affectedLeafSurfaceBn: 'ডগার একদম নতুন কচি পাতা (গাছের ভেতরে চলাচল করতে পারে না)',
    spreadMechanism: 'Non-infectious physiological disorder',
    spreadMechanismBn: 'অসংক্রামক শারীরবৃত্তীয় মাটির সমস্যা',
    frequentConditions: 'Calcareous soils with high free calcium (lime), alkaline pH (>7.6), over-watered potting mix.',
    frequentConditionsBn: 'চুনযুক্ত মাটি, উচ্চ ক্ষারীয় মাটি (পিএইচ ৭.৬ এর বেশি) এবং অতিরিক্ত ভেজা টবের মাটি।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Micronutrient Division & University Horticulture Research',
    similarDiseases: [
      {
        name: 'Magnesium (Mg) Deficiency',
        nameBn: 'ম্যাগনেসিয়াম ঘাটতি',
        difference: 'Magnesium deficiency shows identical interveinal chlorosis but strictly on OLDER lower leaves, while Iron deficiency strictly appears on the YOUNGEST top leaves.',
        differenceBn: 'ম্যাগনেসিয়ামের ঘাটতিও দেখতে একই কিন্তু তা হয় পুরানো নিচের পাতায়, আর আয়রন ঘাটতি হয় একদম কচি নতুন পাতায়।'
      }
    ],
    symptoms: [
      'Striking contrast of vivid green veins against bright yellow interveinal tissue',
      'Strictly affects newest young leaves at the branch tips',
      'In severe cases, leaves turn completely bleached paper-white'
    ],
    symptomsBn: [
      'সবুজ শিরার বিপরীতে পাতার মাঝের অংশ উজ্জ্বল হলুদ বা সাদা হয়ে যাওয়া',
      'শুধুমাত্র ডগার কচি নতুন পাতায় সীমাবদ্ধ থাকা',
      'তীব্র হলে কচি পাতা পুরোপুরি সাদা কাগজের মতো হয়ে যাওয়া'
    ],
    causes: [
      'High soil pH rendering iron insoluble in root zone',
      'Overwatering causing lack of oxygen in root zone',
      'Excessive lime or limestone application in gardens'
    ],
    causesBn: [
      'মাটির উচ্চ পিএইচ-এর কারণে গাছ আয়রন গ্রহণ করতে না পারা',
      'টবে বা জমিতে অতিরিক্ত পানির কারণে শিকড়ে অক্সিজেনের অভাব',
      'অতিরিক্ত চুন প্রয়োগ'
    ],
    organicTreatment: [
      'Apply composted cow dung enriched with sour curd or decomposed citrus peels to lower soil pH',
      'Mulch with pine needles or acidic organic leaf mold',
      'Ensure pot drainage holes are clear and let topsoil dry between waterings'
    ],
    organicTreatmentBn: [
      'গোবর সারের সাথে টক দই বা জৈব অম্ল মিশিয়ে মাটি হালকা অ্যাসিডিক করুন',
      'পচা পাতার গুঁড়ো দিয়ে মালচিং দিন',
      'টবের পানি নিষ্কাশন নিশ্চিত করে অতিরিক্ত পানি দেওয়া কমান'
    ],
    chemicalTreatment: [
      'Foliar spray of Chelated Iron (Fe-EDTA 12% at 1-1.5g/L) for rapid greening within 48-72 hours; or soil drench with Fe-EDDHA (for alkaline soils)'
    ],
    chemicalTreatmentBn: [
      'চিলেটেড আয়রন (Fe-EDTA ১২% প্রতি লিটার পানিতে ১-১.৫ গ্রাম) পাতায় স্প্রে করুন, ৪৮-৭২ ঘণ্টার মধ্যে পাতা সবুজ হবে'
    ],
    prevention: [
      'Avoid excessive liming in citrus and flower garden beds',
      'Maintain soil pH between 6.0 and 6.8',
      'Use porous potting soil mixtures with perlite and cocopeat'
    ],
    preventionBn: [
      'লেবু বা ফুলের জমিতে অতিরিক্ত চুন প্রয়োগ বন্ধ রাখুন',
      'মাটির পিএইচ ৬.০ থেকে ৬.৮ এর মধ্যে রাখুন',
      'টবের মাটিতে কোকোপিট ও বালু মিশিয়ে ঝরঝরে রাখুন'
    ]
  },
  {
    id: 'deficiency-magnesium',
    name: 'Magnesium (Mg) Deficiency',
    nameBn: 'ম্যাগনেসিয়াম ঘাটতিজনিত আন্তঃশিরা ক্লোরোসিস',
    scientificName: 'Abiotic Micronutrient Disorder (Magnesium Deficit)',
    causalOrganism: 'Nutritional Deficiency: Low plant-available magnesium (Mg2+) in acidic sandy soils',
    confirmedHosts: ['Tomato', 'Citrus', 'Potato', 'Grape', 'Pepper', 'Cabbage'],
    plantSpecies: 'Tomato, Citrus & Vegetables (টমেটো, লেবু ও সবজি)',
    plantSpeciesBn: 'টমেটো, লেবু ও সবজি',
    cropType: 'pest_abiotic',
    category: 'deficiency',
    categoryBn: 'পুষ্টিহীনতা',
    severity: 'Moderate',
    severityBn: 'মাঝারি',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Older tomato leaf with inverted V-shaped green area along midrib while interveinal areas are bright yellow with purple tints',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy green tomato leaf',
    visualCharacteristics: 'Interveinal chlorosis on OLDER lower leaves; margins and interveinal spaces turn yellow while veins remain green; often develops reddish-purple tints or an inverted green V at leaf base.',
    visualCharacteristicsBn: 'নিচের পুরোনো পাতায় শিরা ছাড়া বাকি অংশ উজ্জ্বল হলুদ বা লালচে-বেগুনি হয়ে যাওয়া, কিন্তু প্রধান শিরা ও পাতার গোড়ায় ইংরেজি উল্টো ভি (V) আকৃতির সবুজ অংশ থেকে যাওয়া।',
    earlySymptoms: 'Mottled chlorosis between veins of lower mature leaves.',
    earlySymptomsBn: 'নিচের বয়স্ক পাতার শিরার মাঝে মাঝে হালকা হলুদ ছোপ ছোপ ভাব।',
    advancedSymptoms: 'Interveinal areas turn brilliant yellow or purplish-bronze, followed by necrotic brown patches; premature leaf drop.',
    advancedSymptomsBn: 'শিরার মাঝের অংশ সম্পূর্ণ হলুদ বা তামাটে হয়ে দাগ পড়ে এবং পাতা ঝরে যায়।',
    affectedLeafSurface: 'Older and mid-canopy leaves (mobile nutrient in plants)',
    affectedLeafSurfaceBn: 'নিচের পুরোনো ও মাঝের বয়সের পাতা',
    spreadMechanism: 'Non-infectious physiological nutritional disorder',
    spreadMechanismBn: 'অসংক্রামক শারীরবৃত্তীয় পুষ্টি সমস্যা',
    frequentConditions: 'Acidic sandy soils (pH < 5.5), excessive potassium or ammonium fertilizer inhibiting Mg uptake.',
    frequentConditionsBn: 'অম্লীয় বেলে মাটি (পিএইচ ৫.৫ এর নিচে) এবং অতিরিক্ত পটাশ সার যা ম্যাগনেসিয়ামের শোষণ আটকে দেয়।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Soil Science & International Fertilizer Development Center (IFDC)',
    similarDiseases: [
      {
        name: 'Iron Deficiency',
        nameBn: 'আয়রন ঘাটতি',
        difference: 'Iron deficiency affects young leaves at the branch tips, while Magnesium deficiency strictly affects older leaves at the bottom of the plant.',
        differenceBn: 'আয়রন ঘাটতি ডগার কচি পাতায় হয়, কিন্তু ম্যাগনেসিয়াম ঘাটতি গাছের নিচের পুরোনো পাতায় হয়।'
      }
    ],
    symptoms: [
      'Interveinal chlorosis on mature lower leaves',
      'Green inverted "V" pattern remaining at the base of the leaf',
      'Purplish-bronze or reddish pigmentation on older foliage under bright sunlight'
    ],
    symptomsBn: [
      'নিচের বয়স্ক পাতায় শিরা ছাড়া বাকি অংশ হলুদ হয়ে যাওয়া',
      'পাতার গোড়ায় ইংরেজি উল্টো "V" আকৃতির সবুজ অংশ টিকে থাকা',
      'রোদের কারণে হলুদ অংশে লালচে বা বেগুনি ছোপ পড়া'
    ],
    causes: [
      'High potassium (MOP) application outcompeting magnesium absorption',
      'Highly acidic sandy soil where magnesium has washed out',
      'Heavy fruit load draining plant magnesium reserves'
    ],
    causesBn: [
      'অতিরিক্ত পটাশ সার প্রয়োগের ফলে ম্যাগনেসিয়াম শোষণ বাধাগ্রস্ত হওয়া',
      'অম্লীয় বেলে মাটিতে ম্যাগনেসিয়ামের অভাব',
      'গাছে অতিরিক্ত ফল আসার কারণে পুষ্টি ফুরিয়ে যাওয়া'
    ],
    organicTreatment: [
      'Apply dolomite limestone (contains both calcium and magnesium carbonate) to acidic soils',
      'Incorporate composted dairy manure into the planting beds',
      'Spray Epsom salt (Magnesium sulfate) dissolved in water'
    ],
    organicTreatmentBn: [
      'অম্লীয় মাটিতে ডলোমাইট চুন (ক্যালসিয়াম ও ম্যাগনেসিয়াম সমৃদ্ধ) প্রয়োগ করুন',
      'গোবর সার দিয়ে মাটির ধারণক্ষমতা বাড়ান',
      'এপসম সল্ট বা ম্যাগনেসিয়াম সালফেট স্প্রে করুন'
    ],
    chemicalTreatment: [
      'Foliar spray of Magnesium Sulfate (Epsom salt, 20g/L or 2% solution); soil application of Magnesium Sulfate at 15-20 kg/ha'
    ],
    chemicalTreatmentBn: [
      'এপসম সল্ট বা ম্যাগনেসিয়াম সালফেট (প্রতি লিটার পানিতে ২০ গ্রাম) স্প্রে করুন; মাটিতে বিঘা প্রতি ৩ কেজি প্রয়োগ করুন'
    ],
    prevention: [
      'Balance potassium and magnesium application rates',
      'Lime acidic soils to maintain pH around 6.2 to 6.8',
      'Soil test before heavy fertilization'
    ],
    preventionBn: [
      'পটাশ ও ম্যাগনেসিয়াম সারের সঠিক অনুপাত বজায় রাখুন',
      'অম্লীয় মাটিতে ডলোমাইট প্রয়োগ করে পিএইচ ঠিক রাখুন',
      'মাটি পরীক্ষা করে সুষম সার দিন'
    ]
  },

  // ==========================================
  // 2. INSECT PEST DAMAGE (পোকামাকড়ের ক্ষতি)
  // ==========================================
  {
    id: 'pest-spider-mites',
    name: 'Two-Spotted Red Spider Mite Damage',
    nameBn: 'লাল মাকড়ের আক্রমণ (স্পাইডার মাইট)',
    scientificName: 'Tetranychus urticae / Oligonychus spp.',
    causalOrganism: 'Tetranychus urticae (Arachnid foliar pest)',
    confirmedHosts: ['Brinjal / Eggplant', 'Chilli', 'Tomato', 'Cucumber', 'Rose', 'Papaya'],
    plantSpecies: 'Vegetables & Ornamentals (সবজি ও ফুল)',
    plantSpeciesBn: 'সবজি ও ফুল',
    cropType: 'pest_abiotic',
    category: 'pest',
    categoryBn: 'পোকামাকড়জনিত',
    severity: 'High',
    severityBn: 'তীব্র',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Leaf covered in fine yellow speckles stippling and dusty silken webbing with bronzed scorched appearance',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy green foliage without webbing or speckling',
    visualCharacteristics: 'Fine yellow-white stippling (pinhead speckling) on upper leaf surface, dense silken webbing on the leaf underside, and overall dusty, bronzed, scorched appearance.',
    visualCharacteristicsBn: 'পাতার ওপরের পিঠে অসংখ্য সূক্ষ্ম হলুদ ফুটকি দাগ, পাতার নিচের পিঠে মাকড়সার মতো সূক্ষ্ম জাল এবং ধুলোবালি জমা পোড়া বা ব্রোঞ্জ রঙের চেহারা।',
    earlySymptoms: 'Tiny yellow specks along main leaf veins on the underside.',
    earlySymptomsBn: 'পাতার নিচের প্রধান শিরার পাশে সূক্ষ্ম হলুদ ফুটকি ফুটকি দাগ।',
    advancedSymptoms: 'Leaves turn bronze and dry out completely; thick silken webs envelop shoot tips; tiny red/yellow mites visible crawling.',
    advancedSymptomsBn: 'পাতা তামাটে হয়ে পুড়ে যায়, ডগার মাথায় মাকড়সার ঘন জাল তৈরি হয় এবং খালি চোখে সূক্ষ্ম মাকড় নড়াচড়া করতে দেখা যায়।',
    affectedLeafSurface: 'Lower leaf surface primarily (spins webs underneath)',
    affectedLeafSurfaceBn: 'প্রধানত পাতার নিচের পিঠ (যেখানে জাল বোনে)',
    spreadMechanism: 'Wind dispersal on fine silk parachutes ("ballooning"), crawling between touching leaves',
    spreadMechanismBn: 'বাতাসে জালের সুতোয় ভেসে এবং গাছের সংস্পর্শে এসে ছড়ায়',
    frequentConditions: 'Hot, dry, dusty weather (30-38°C) with low relative humidity (<50%).',
    frequentConditionsBn: 'উষ্ণ, শুষ্ক ও ধূলিময় আবহাওয়া (৩০-৩৮ ডিগ্রি) এবং কম আর্দ্রতা।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Entomology Division & IRRI Pest Management Guide',
    similarDiseases: [
      {
        name: 'Powdery Mildew',
        nameBn: 'পাউডারি মিলডিউ',
        difference: 'Powdery mildew produces white talcum fungal powder on top of leaf, while mites produce fine yellow stippling and silken webbing underneath with crawling arachnids.',
        differenceBn: 'পাউডারি মিলডিউতে পাতার ওপরে সাদা পাউডার জমে, কিন্তু মাকড়ে পাতার নিচে সূক্ষ্ম জাল ও হলুদ ফুটকি থাকে এবং পোকা নড়ে।'
      }
    ],
    symptoms: [
      'Dense fine yellow-white stippling dots across the leaf surface',
      'Silken cobwebs on the underside of leaves and growing tips',
      'Leaves turn dry, bronzed, brittle, and drop prematurely'
    ],
    symptomsBn: [
      'পাতার ওপর হাজার হাজার সূক্ষ্ম হলুদ ফুটকি দাগ',
      'পাতার নিচে ও ডালের মাথায় সূক্ষ্ম মাকড়সার জাল',
      'পাতা বাদামি ও তামাটে হয়ে শুকিয়ে খসে পড়া'
    ],
    causes: [
      'Hot dry conditions which allow mites to complete a life cycle in just 5-7 days',
      'Overuse of broad-spectrum synthetic pyrethroids which kill natural predator mites',
      'Water stress and dust deposits on leaves'
    ],
    causesBn: [
      'উষ্ণ ও শুষ্ক আবহাওয়া যেখানে ৫-৭ দিনেই মাকড় বংশবৃদ্ধি করে',
      'অতিরিক্ত কীটনাশক স্প্রে করে উপকারী বন্ধু পোকা মেরে ফেলা',
      'গাছের পাতায় ধুলোবালি জমে থাকা ও পানির অভাব'
    ],
    organicTreatment: [
      'Forceful water spray on leaf undersides in early morning to physically knock off mites and destroy webs',
      'Spray neem oil (5 ml/L) mixed with liquid detergent (2 ml/L) every 5 days',
      'Release predatory mites (Phytoseiulus persimilis) in greenhouses'
    ],
    organicTreatmentBn: [
      'সকালে পাতার নিচের পিঠে জোরে পানির স্প্রে করে জাল ও মাকড় ধুয়ে দিন',
      'নিম তেল (৫ মিলি/লিটার) ও সামান্য ডিটারজেন্ট মিশিয়ে ৫ দিন পর পর পাতার নিচে স্প্রে করুন',
      'উপকারী বন্ধু মাকড় সংরক্ষণ করুন'
    ],
    chemicalTreatment: [
      'Spray specialized acaricide / miticide: Fenazaquin 10 EC (1.5ml/L) or Abamectin 1.8 EC (1.2ml/L) or Spiromesifen 22.9 SC (1ml/L) thoroughly wetting leaf undersides'
    ],
    chemicalTreatmentBn: [
      'মাকড়নাশক স্প্রে করুন: অ্যাবামেকটিন ১.৮ ইসি (১.২ মিলি/লিটার) অথবা ফেনাজাকুইন (১.৫ মিলি/লিটার) পাতার নিচে ভালোভাবে ভিজিয়ে স্প্রে করুন'
    ],
    prevention: [
      'Keep field borders free of weeds that harbor mites',
      'Maintain regular irrigation during hot dry spells to keep humidity up',
      'Avoid unnecessary synthetic pyrethroid sprays'
    ],
    preventionBn: [
      'বাগানের চারপাশের আগাছা পরিষ্কার রাখুন',
      'গরমে নিয়মিত সেচ দিয়ে বাগানের আর্দ্রতা স্বাভাবিক রাখুন',
      'বিনা কারণে কড়া বিষ স্প্রে করা থেকে বিরত থাকুন'
    ]
  },
  {
    id: 'pest-serpentine-leafminer',
    name: 'Serpentine Leafminer Damage',
    nameBn: 'পাতা সুড়ঙ্গকারী পোকা (লিফ মাইনার)',
    scientificName: 'Liriomyza trifolii / Liriomyza sativae',
    causalOrganism: 'Liriomyza spp. (Agromyzid fly larvae tunneling inside leaf mesophyll)',
    confirmedHosts: ['Tomato', 'Cucumber', 'Pumpkin', 'Bean', 'Brinjal', 'Watermelon', 'Pea'],
    plantSpecies: 'Vegetables & Gourds (সবজি ও কুমড়া)',
    plantSpeciesBn: 'সবজি ও কুমড়া',
    cropType: 'pest_abiotic',
    category: 'pest',
    categoryBn: 'পোকামাকড়জনিত',
    severity: 'Moderate',
    severityBn: 'মাঝারি',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Leaf blade with distinct winding white serpentine tunnels made by larvae feeding inside leaf tissue',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy intact green leaf blade without tunnels',
    visualCharacteristics: 'Prominent, irregular, winding white or translucent serpentine tunnels (mines) across the leaf blade; black frass pellets visible inside tunnels.',
    visualCharacteristicsBn: 'পাতার ভেতরে আঁকাবাঁকা সাদা সাপের মতো সুড়ঙ্গ বা দাগ, যার ভেতরে পোকার ক্ষুদ্র কালো মল দেখা যায়।',
    earlySymptoms: 'Tiny white puncture dots on upper leaf surface from adult feeding; short narrow white mines.',
    earlySymptomsBn: 'পাতার ওপর মাছি বসার ছোট সাদা ফুটকি এবং সরু সাদা সুড়ঙ্গ।',
    advancedSymptoms: 'Mines widen and cross over each other; entire leaf mesophyll destroyed; leaf turns dry and scorches.',
    advancedSymptomsBn: 'সুড়ঙ্গগুলো চওড়া হয়ে পুরো পাতায় ছড়িয়ে পড়ে, পাতা শুকিয়ে খড়ের মতো হয়ে যায়।',
    affectedLeafSurface: 'Mesophyll tissue between upper and lower epidermal layers',
    affectedLeafSurfaceBn: 'পাতার ভেতরের সবুজ কোষীয় অংশ (উপর ও নিচের চামড়ার মাঝে)',
    spreadMechanism: 'Small adult yellow-and-black flies fly between plants to lay eggs inside leaf tissue',
    spreadMechanismBn: 'ছোট হলুদ-কালো মাছি উড়ে গিয়ে পাতার চামড়ার নিচে ডিম পাড়ে',
    frequentConditions: 'Warm sunny weather (24-32°C); absence of natural parasitic wasps.',
    frequentConditionsBn: 'উষ্ণ রৌদ্রোজ্জ্বল আবহাওয়া (২৪-৩২ ডিগ্রি) ও উপকারী পরজীবী বোলতার অভাব।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Entomology Division & AVRDC Vegetable IPM Guidelines',
    similarDiseases: [
      {
        name: 'Foliar Bacterial Streak',
        nameBn: 'ব্যাকটেরিয়াল পাতার দাগ',
        difference: 'Bacterial streaks are water-soaked straight or angular stripes, while Leafminer produces distinct serpentine meandering white tunnels with visible larvae or frass.',
        differenceBn: 'ব্যাকটেরিয়ায় সোজা জলছাপের দাগ হয়, কিন্তু লিফ মাইনারে আঁকাবাঁকা সাপের মতো ফাঁপা সুড়ঙ্গ তৈরি হয়।'
      }
    ],
    symptoms: [
      'Winding, meandering white lines (mines) etched on green leaves',
      'Black specks of larval excrement visible inside transparent mines',
      'Reduction in photosynthesis leading to sunscald on unprotected fruit'
    ],
    symptomsBn: [
      'পাতায় স্পষ্ট আঁকাবাঁকা সাপের মতো সাদা সুড়ঙ্গের দাগ',
      'সুড়ঙ্গের ভেতরে পোকার কালো মলের দাগ দেখা যাওয়া',
      'সালোকসংশ্লেষণ কমে পাতা শুকিয়ে যাওয়া'
    ],
    causes: [
      'Fly larvae feeding continuously inside the leaf tissue protected from contact sprays',
      'Killing natural parasitoid wasps (Diglyphus isaea) with broad-spectrum insecticides',
      'Continuous monoculture of cucurbit and solanaceous vegetables'
    ],
    causesBn: [
      'পাতার চামড়ার নিচে পোকা থাকায় সাধারণ স্পর্শক কীটনাশক কাজ না করা',
      'অতিরিক্ত কীটনাশক স্প্রে করায় উপকারী পরজীবী পোকা মারা যাওয়া',
      'একই জমিতে বারবার লতানো সবজি চাষ'
    ],
    organicTreatment: [
      'Hand-pick and crush mined leaves at first notice when only a few mines are present',
      'Hang yellow sticky traps (15-20 traps per bigha) to trap adult leafminer flies',
      'Spray neem seed kernel extract (NSKE 5%) or neem oil (5 ml/L) to deter egg laying'
    ],
    organicTreatmentBn: [
      'আক্রমণের শুরুতে সুড়ঙ্গযুক্ত পাতা ছিঁড়ে মাটিতে পুঁতে ফেলুন',
      'হলুদ আঠালো ফাঁদ (Yellow Sticky Trap) লাগিয়ে উড়ন্ত মাছি পোকা দমন করুন',
      'নিম তেলের স্প্রে (৫ মিলি/লিটার) দিয়ে মাছির ডিম পাড়া রোধ করুন'
    ],
    chemicalTreatment: [
      'Spray translaminar systemic insecticide that penetrates leaf tissue: Abamectin 1.8 EC (1.2ml/L) or Cyromazine 75 WP (0.5g/L) or Spinosad 45 SC (0.4ml/L)'
    ],
    chemicalTreatmentBn: [
      'পাতার ভেতরে প্রবেশকারী কীটনাশক স্প্রে করুন: অ্যাবামেকটিন ১.৮ ইসি (১.২ মিলি/লিটার) অথবা স্পাইনোস্যাড ৪৫ এসসি (০.৪ মিলি/লিটার)'
    ],
    prevention: [
      'Use fine 40-mesh insect-proof netting in seedling nurseries',
      'Conserve natural parasitic wasps by reducing chemical insecticide sprays',
      'Deep plow fields after harvest to bury pupae in the soil'
    ],
    preventionBn: [
      'চারার নার্সারিতে মশারি বা নেট ব্যবহার করুন',
      'জৈব বালাইনাশক ব্যবহার করে বন্ধু পোকা বাঁচিয়ে রাখুন',
      'ফসল তোলার পর জমি গভীরভাবে চাষ দিয়ে পোকার পিউপা ধ্বংস করুন'
    ]
  },

  // ==========================================
  // 3. ENVIRONMENTAL & CHEMICAL DAMAGE (পরিবেশগত ও রাসায়নিক ক্ষতি)
  // ==========================================
  {
    id: 'abiotic-sunscald-heat-scorch',
    name: 'Sunscald & Heat Scorch',
    nameBn: 'রোদপোড়া ও তাপমাত্রাজনিত ক্ষয়ক্ষতি (সানস্কাল্ড)',
    scientificName: 'Abiotic Physiological Injury (Excess Solar Radiation & Thermal Stress)',
    causalOrganism: 'Excessive direct UV radiation and temperatures exceeding 38-42°C',
    confirmedHosts: ['Tomato', 'Chilli / Pepper', 'Brinjal', 'Mango', 'Cucumber', 'Papaya'],
    plantSpecies: 'Vegetables & Fruits (সবজি ও ফল)',
    plantSpeciesBn: 'সবজি ও ফল',
    cropType: 'pest_abiotic',
    category: 'environmental',
    categoryBn: 'পরিবেশগত ক্ষতি',
    severity: 'Moderate',
    severityBn: 'মাঝারি',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Leaf and fruit showing bleached paper-white or light brown dry scorched patch on direct sun-exposed side',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy green leaf blade',
    visualCharacteristics: 'Bleached, papery-white or light tan necrotic patches strictly on leaf surfaces and fruit shoulders directly facing the afternoon sun.',
    visualCharacteristicsBn: 'সরাসরি দুপুরের কড়া রোদ লাগা পাতার ওপরে বা ফলের কাঁধে কাগজের মতো সাদাটে-বাদামি শুষ্ক পোড়া দাগ।',
    earlySymptoms: 'Translucent, watery blister on sun-exposed upper leaf surface or fruit shoulder.',
    earlySymptomsBn: 'রোদের দিকে থাকা পাতার অংশে হালকা জলছাপের মতো চামড়া ওঠা।',
    advancedSymptoms: 'Tissue collapses into a thin, dry, papery white or parchment-like patch; edges become brittle; secondary black mold may invade.',
    advancedSymptomsBn: 'আক্রান্ত অংশ শুকিয়ে কাগজের মতো পাতলা সাদা হয়ে যায়; পরে সেখানে কালো ছাতা বা ছত্রাক জমতে পারে।',
    affectedLeafSurface: 'Strictly upper leaf surface and fruit sides directly exposed to intense sunlight',
    affectedLeafSurfaceBn: 'শুধুমাত্র সরাসরি সূর্যের দিকে থাকা পাতার ওপরের পিঠ',
    spreadMechanism: 'Completely abiotic non-infectious physical heat injury; does not spread',
    spreadMechanismBn: 'সম্পূর্ণ অসংক্রামক ভৌত তাপীয় ক্ষতি; কোনো ছড়ানোর ক্ষমতা নেই',
    frequentConditions: 'Heatwaves with temperatures >38°C, sudden intense sunshine after days of cloudy overcast weather, sudden defoliation exposing fruit.',
    frequentConditionsBn: 'তীব্র তাপপ্রবাহ (৩৮ ডিগ্রির বেশি), টানা মেঘলার পর হঠাৎ তীব্র রোদ এবং গাছ ছাঁটাইয়ের পর ফল উন্মুক্ত হওয়া।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Horticulture Research & FAO Abiotic Crop Stress Guidelines',
    similarDiseases: [
      {
        name: 'Late Blight',
        nameBn: 'লেট ব্লাইট (নাবি ধসা)',
        difference: 'Late blight produces dark brown water-soaked lesions with white mold underneath during cold damp weather, whereas Sunscald produces dry paper-white scorched patches during hot dry sunshine.',
        differenceBn: 'লেট ব্লাইট ঠান্ডা আর্দ্র দিনে হয় ও নিচে সাদা ছত্রাক থাকে, কিন্তু সানস্কাল্ড কড়া রোদের দিনে শুকনো সাদা কাগজের মতো দাগ তৈরি করে।'
      }
    ],
    symptoms: [
      'Bleached, papery white or parchment-like dry patches on sun-exposed surfaces',
      'Affects only leaves and fruits pointing toward the afternoon sun',
      'No fungal spores, bacterial ooze, or living pests on the injury'
    ],
    symptomsBn: [
      'রোদের দিকে থাকা অংশে কাগজের মতো পাতলা সাদা বা বাদামি পোড়া দাগ',
      'গাছের ভেতরের বা ছায়াযুক্ত পাতার কোনো ক্ষতি না হওয়া',
      'দাগের ওপর কোনো ছত্রাকের স্পোর বা ব্যাকটেরিয়ার রস না থাকা'
    ],
    causes: [
      'Intense direct ultraviolet radiation overheating cellular water and killing cells',
      'Sudden pruning of leaf canopy leaving previously shaded leaves and fruit exposed',
      'Moisture stress in soil preventing transpirational leaf cooling'
    ],
    causesBn: [
      'তীব্র অতিবেগুনি রশ্মি ও তাপে পাতার ভেতরের কোষের মৃত্যু',
      'হঠাৎ গাছের পাতা ছাঁটাই করে দেওয়ায় ভেতরের ডালপালায় সরাসরি কড়া রোদ লাগা',
      'মাটিতে পানির অভাবে গাছ বাষ্পমোচনের মাধ্যমে নিজেকে ঠান্ডা রাখতে না পারা'
    ],
    organicTreatment: [
      'Erect 35-50% green agro-shade netting over vegetable and fruit beds during peak summer',
      'Apply kaolin clay spray (Surround, 30-50g/L) to reflect solar radiation and lower leaf temperature by 3-5°C',
      'Maintain adequate soil moisture through mulching to support natural cooling'
    ],
    organicTreatmentBn: [
      'তীব্র গরমে গাছের ওপর সবুজ এগ্রো-শেড নেট (Agro-shade net) টানিয়ে দিন',
      'কেওলিন মাটির স্প্রে দিয়ে পাতায় রোদ প্রতিফলক সাদা আবরণ তৈরি করুন',
      'মাটিতে খড়ের মালচিং দিয়ে রস ধরে রাখুন যাতে গাছ স্বাভাবিক তাপমাত্রা বজায় রাখতে পারে'
    ],
    chemicalTreatment: [
      'No fungicide or chemical is required or effective for physical heat injury; avoid spraying chemicals during hot hours which causes chemical burn'
    ],
    chemicalTreatmentBn: [
      'এটি কোনো রোগ নয়, তাই কোনো বিষ স্প্রে করবেন না; রোদের সময় রাসায়নিক স্প্রে করলে পাতা আরও পুড়ে যাবে'
    ],
    prevention: [
      'Do not over-prune leaves protecting developing fruits',
      'Irrigate during early morning or evening hours so plants are hydrated during midday heat',
      'Orient rows north-to-south to minimize intense direct afternoon sun exposure'
    ],
    preventionBn: [
      'ফলের ওপর ছায়া দেওয়া প্রয়োজনীয় পাতা কেটে ফেলবেন না',
      'সকালে বা বিকেলে সেচ দিন যাতে দুপুরে গাছের পানির টান না পড়ে',
      'উত্তর-দক্ষিণমুখী করে ফসলের সারি তৈরি করুন'
    ]
  },
  {
    id: 'abiotic-herbicide-drift',
    name: 'Herbicide Drift & Chemical Phytotoxicity',
    nameBn: 'আগাছানাশক ও রাসায়নিক বিষক্রিয়া (হার্বিসাইড ড্রিফট)',
    scientificName: 'Chemical Phytotoxicity (Herbicide Drift / Overdose)',
    causalOrganism: 'Synthetic chemical damage: Accidental drift of 2,4-D, Glyphosate, or pesticide cocktail overdose',
    confirmedHosts: ['Tomato', 'Cotton', 'Grapes', 'Brinjal', 'All Broadleaf Crops'],
    plantSpecies: 'All Crops (সার্বিক ফসল)',
    plantSpeciesBn: 'সকল ফসল',
    cropType: 'pest_abiotic',
    category: 'environmental',
    categoryBn: 'পরিবেশগত ক্ষতি',
    severity: 'High',
    severityBn: 'তীব্র',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Leaf blades severely strapped, shoe-stringed, twisted, with parallel veins and down-curled cupping',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy normal lobed leaf blade',
    visualCharacteristics: 'Severe downward cupping, twisting, elongation, strapping ("shoe-stringing"), parallel vein distortion, and yellow mottling caused by hormone herbicide drift.',
    visualCharacteristicsBn: 'পাতা সরু ফিতার মতো হওয়া (শু-স্ট্রিং), ডালপালা অস্বাভাবিক মোচড়ানো বা পেঁচিয়ে যাওয়া এবং শিরাগুলো অস্বাভাবিক ঘন ও সমান্তরাল হয়ে যাওয়া।',
    earlySymptoms: 'Downward curving of petioles ("epinasty") within 24-48 hours of exposure.',
    earlySymptomsBn: 'রাসায়নিকের সংস্পর্শে আসার ২৪-৪৮ ঘণ্টার মধ্যে পাতার বোঁটা নিচের দিকে বেকে যাওয়া।',
    advancedSymptoms: 'New leaves emerge severely deformed, strapped like narrow shoe-strings, thickened with finger-like projections; plant fails to fruit.',
    advancedSymptomsBn: 'নতুন গজানো পাতা ফিতার মতো সরু হয়ে বিকৃত হওয়া এবং ফল ধরা সম্পূর্ণ বন্ধ হওয়া।',
    affectedLeafSurface: 'Growing shoots, young expanding leaves, and stems',
    affectedLeafSurfaceBn: 'কচি বাড়ন্ত ডগা, নতুন পাতা এবং কাণ্ড',
    spreadMechanism: 'Wind drift from adjacent sprayed paddy or field boundaries; contaminated spray tank',
    spreadMechanismBn: 'বাতাসের মাধ্যমে পাশের জমি থেকে বিষের কণা উড়ে আসা এবং একই স্প্রেয়ার না ধুয়ে ব্যবহার করা',
    frequentConditions: 'Spraying herbicides on windy days, using the same knapsack sprayer without washing.',
    frequentConditionsBn: 'বাতাসের দিনে আগাছানাশক স্প্রে করা এবং আগাছানাশক স্প্রে করা ড্রামে সবজির ওষুধ স্প্রে করা।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Weed Science Division & FAO Pesticide Management Guidelines',
    similarDiseases: [
      {
        name: 'Tomato Leaf Curl Virus',
        nameBn: 'টমেটো পাতা কুঁকড়ানো ভাইরাস',
        difference: 'Leaf curl virus causes upward cupping and yellow vein netting transmitted by whiteflies, whereas 2,4-D herbicide drift causes downward epinasty, twisting, and characteristic shoe-string strapping.',
        differenceBn: 'ভাইরাসে পাতা ওপরের দিকে বাটির মতো কুঁকড়ায়, কিন্তু আগাছানাশকে পাতা ফিতার মতো সরু হয়ে নিচের দিকে মোচড় দিয়ে বেকে যায়।'
      }
    ],
    symptoms: [
      'Down-turned, twisted, curled stems and petioles (epinasty)',
      'Narrow, strapped leaves resembling shoe-strings with parallel veins',
      'Swelling or cracking of stems and complete cessation of flowering'
    ],
    symptomsBn: [
      'ডাল ও পাতার বোঁটা নিচের দিকে অস্বাভাবিক মোচড়ানো',
      'পাতা সরু ফিতার মতো চিকন হয়ে যাওয়া',
      'কাণ্ড ফেটে যাওয়া এবং ফুল ঝরে পড়া'
    ],
    causes: [
      'Spraying 2,4-D or non-selective herbicides in adjacent paddy fields on breezy days',
      'Failing to triple-rinse sprayers after herbicide application before spraying vegetables',
      'Excessive pesticide tank mixing combining incompatible chemicals'
    ],
    causesBn: [
      'বাতাসের দিনে পাশের জমিতে আগাছানাশক স্প্রে করার ফলে বাতাসে উড়ে আসা',
      'আগাছানাশকের ড্রাম ভালো করে সাবান দিয়ে না ধুয়ে সেই ড্রামে সবজির স্প্রে করা',
      'একসাথে একাধিক কড়া রাসায়নিক মিশিয়ে অতিরিক্ত মাত্রায় স্প্রে করা'
    ],
    organicTreatment: [
      'Thoroughly wash affected plants with clean water spray immediately if exposure is noticed early',
      'Drench soil with humic acid and spray seaweed extract (Ascophyllum nodosum) to stimulate root recovery',
      'Apply light nitrogen fertilizer to encourage new shoot emergence if damage is mild'
    ],
    organicTreatmentBn: [
      'দ্রুত বুঝতে পারলে গাছ পরিষ্কার পানি দিয়ে ভালো করে ধুয়ে দিন',
      'হিউমিক অ্যাসিড ও সামুদ্রিক শৈবালের রস স্প্রে করে গাছের ধকল কমান',
      'হালকা সার দিয়ে নতুন ডগা গজানোর সুযোগ দিন'
    ],
    chemicalTreatment: [
      'No chemical antidote exists; never apply more pesticides to a chemically injured plant'
    ],
    chemicalTreatmentBn: [
      'এর কোনো প্রতিষেধক ওষুধ নেই; অসুস্থ গাছের ওপর নতুন করে আর কোনো বিষ স্প্রে করবেন না'
    ],
    prevention: [
      'NEVER use the same backpack sprayer for both herbicides and vegetable pest management; keep a dedicated RED sprayer for herbicides',
      'Never spray herbicides when wind speed exceeds 8 km/h',
      'Use drift-reduction nozzles and spray shields'
    ],
    preventionBn: [
      'আগাছানাশকের জন্য সম্পূর্ণ আলাদা রঙের ড্রাম ব্যবহার করুন; সবজির ড্রামে কখনো ঘাসমারা বিষ গুলবেন না',
      'বাতাসের দিনে কখনো আগাছানাশক স্প্রে করবেন না',
      'স্প্রে করার সময় নজলের মুখে হুড বা ঢাকনা ব্যবহার করুন'
    ]
  }
];
