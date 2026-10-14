import { LeafDisease } from '../../types';
import imgAppleScab from '../../assets/images/apple_scab_leaf_1791700931614.jpg';
import imgHealthy from '../../assets/images/healthy_citrus_leaf_1791699764349.jpg';
import imgBlightGeneral from '../../assets/images/unhealthy_blight_leaf_1791699775237.jpg';

export const TEMPERATE_NATIVE_FRUIT_DISEASES: LeafDisease[] = [
  // --- APPLE (আপেল) ---
  {
    id: 'apple-scab',
    name: 'Apple Scab',
    nameBn: 'আপেল পাতার স্ক্যাব রোগ (খোস রোগ)',
    scientificName: 'Venturia inaequalis',
    causalOrganism: 'Venturia inaequalis (Ascomycete fungus)',
    confirmedHosts: ['Malus domestica (Apple)', 'Malus sylvestris (Crabapple)'],
    plantSpecies: 'Apple (আপেল)',
    plantSpeciesBn: 'আপেল',
    cropType: 'fruit',
    category: 'fungal',
    categoryBn: 'ছত্রাকজনিত',
    severity: 'High',
    severityBn: 'তীব্র',
    imageUrl: imgAppleScab,
    imageAlt: 'Apple leaf with olive-green to dull dark brown velvety fungal lesions with feathered margins',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy bright green apple leaf blade',
    visualCharacteristics: 'Olive-green to dull black, velvety circular or irregular lesions on leaf upper surface, becoming corky and distorted with age.',
    visualCharacteristicsBn: 'পাতার ওপরের পিঠে জলপাই-সবুজ থেকে কালচে বাদামি মখমলের মতো গোলাকার দাগ যা ধীরে ধীরে খসখসে হয়ে পাতাকে বিকৃত করে।',
    earlySymptoms: 'Dull olive-green velvety spots with indistinct margins on young expanding leaves in spring.',
    earlySymptomsBn: 'বসন্তে কচি পাতায় অস্পষ্ট কিনারাবিশিষ্ট জলপাই-সবুজ মখমলের মতো দাগ।',
    advancedSymptoms: 'Spots turn dark brownish-black, leaves pucker, become brittle, twist, and drop prematurely; fruit cracks.',
    advancedSymptomsBn: 'দাগগুলো কালচে হয়ে যায়, পাতা কুঁচকে ভঙ্গুর হয় এবং অকালে ঝরে পড়ে; ফলের গায়ে ফাটা দাগ হয়।',
    affectedLeafSurface: 'Upper leaf surface initially, spreading to underside and fruit skin',
    affectedLeafSurfaceBn: 'প্রথমে পাতার ওপরের পিঠ, পরে নিচের পিঠ এবং ফলের ত্বক',
    spreadMechanism: 'Airborne ascospores in spring; conidia spread by rain splashing',
    spreadMechanismBn: 'বসন্তে বাতাসের মাধ্যমে ছড়ায় এবং গ্রীষ্মে বৃষ্টির পানির ছিটায় স্পোর স্থানান্তরিত হয়',
    frequentConditions: 'Extended spring wetness (leaves wet for 9+ hours) at 15-22°C.',
    frequentConditionsBn: 'বসন্তকালে পাতা ৯ ঘণ্টার বেশি ভেজা থাকা ও ১৫-২২ ডিগ্রি সেলসিয়াস তাপমাত্রা।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'CABI Crop Protection Compendium & EPPO Data Sheets',
    similarDiseases: [
      {
        name: 'Apple Cedar Rust',
        nameBn: 'আপেলের সিডার মরিচা রোগ',
        difference: 'Cedar rust creates bright orange-yellow spots on the upper leaf with tubular spore cups underneath, unlike velvety olive scab.',
        differenceBn: 'সিডার রাস্টে ওপরে উজ্জ্বল কমলা-হলুদ দাগ ও নিচে নল আকৃতির স্পোর কাপ তৈরি হয়, জলপাই রঙের মখমল দাগ নয়।'
      }
    ],
    symptoms: [
      'Olive-green velvety spots on upper leaf surfaces',
      'Crinkled, puckered leaves that yellow and drop early',
      'Corky black scabs on developing fruit causing cracks'
    ],
    symptomsBn: [
      'পাতার ওপরের পিঠে জলপাই-সবুজ মখমলের মতো দাগ',
      'পাতা কুঁচকে যাওয়া এবং অকালে হলুদ হয়ে ঝরে পড়া',
      'ফলের গায়ে খসখসে কালো খোস দাগ ও ফেটে যাওয়া'
    ],
    causes: [
      'Fungus overwintering in fallen leaves on orchard floor',
      'Continuous spring rains keeping foliage wet',
      'Dense tree canopies with no sunlight penetration'
    ],
    causesBn: [
      'বাগানের মাটিতে পড়ে থাকা শুকনো পাতায় ছত্রাকের বেঁচে থাকা',
      'টানা বৃষ্টির কারণে পাতা দীর্ঘক্ষণ ভেজা থাকা',
      'গাছের ডালপালা অতিরিক্ত ঘন হওয়ায় রোদ না পৌঁছানো'
    ],
    organicTreatment: [
      'Shred or compost fallen leaves thoroughly in autumn with 5% urea spray to speed decomposition',
      'Prune center of apple tree to allow sunlight and rapid air drying',
      'Spray lime sulfur or wettable sulfur before flower bud break'
    ],
    organicTreatmentBn: [
      'শীতের শুরুতে ঝরে পড়া সব পাতা কুড়িয়ে ৫% ইউরিয়া ছিটিয়ে পচিয়ে ফেলুন',
      'গাছের ভেতরের ডাল ছেঁটে রোদ ও বাতাস চলাচলের ব্যবস্থা করুন',
      'কুঁড়ি ফোটার আগে লাইম সালফার স্প্রে করুন'
    ],
    chemicalTreatment: [
      'Spray Difenoconazole 25 EC (Score, 0.5ml/L) or Captan 50 WP (2.5g/L) during pink-bud and petal-fall stages'
    ],
    chemicalTreatmentBn: [
      'গোলাপি কুঁড়ি ও পাপড়ি ঝরার সময় স্কোর ২৫ ইসি (০.৫ মিলি/লিটার) অথবা ক্যাপটান স্প্রে করুন'
    ],
    prevention: [
      'Plant resistant apple cultivars where available',
      'Maintain wide tree spacing (4-5 meters)',
      'Keep orchard ground clean and well-drained'
    ],
    preventionBn: [
      'রোগপ্রতিরোধী আপেলের জাত রোপণ করুন',
      'গাছ থেকে গাছের দূরত্ব ৪-৫ মিটার বজায় রাখুন',
      'বাগানের মাটি পরিচ্ছন্ন ও জলাবদ্ধতামুক্ত রাখুন'
    ]
  },
  {
    id: 'apple-powdery-mildew',
    name: 'Apple Powdery Mildew',
    nameBn: 'আপেল পাতার পাউডারি মিলডিউ রোগ',
    scientificName: 'Podosphaera leucotricha',
    causalOrganism: 'Podosphaera leucotricha (Obligate biotrophic fungus)',
    confirmedHosts: ['Malus domestica', 'Pyrus communis (Pear)'],
    plantSpecies: 'Apple (আপেল)',
    plantSpeciesBn: 'আপেল',
    cropType: 'fruit',
    category: 'fungal',
    categoryBn: 'ছত্রাকজনিত',
    severity: 'Moderate',
    severityBn: 'মাঝারি',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Young apple terminal shoot coated with thick powdery white mycelium, leaves narrow and curled',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy apple leaf shoot',
    visualCharacteristics: 'White to light grey powdery fungal felt covering young terminal leaves, shoots, and buds, causing narrow, stunted, upright foliage.',
    visualCharacteristicsBn: 'কচি ডগা ও পাতায় সাদাটে-ধূসর পাউডারের পুরু আস্তরণ যা পাতাকে সরু, সোজা ও কুঁকড়ে ফেলে।',
    earlySymptoms: 'White felt-like patches on lower surface of emerging spring leaves.',
    earlySymptomsBn: 'বসন্তে গজানো কচি পাতার নিচের পিঠে সাদা নরম পাউডারের ছোপ।',
    advancedSymptoms: 'Shoots become silvery-white ("silver shoot"), leaves curl, margins turn brown and brittle, buds abort.',
    advancedSymptomsBn: 'ডগাগুলো রূপালী-সাদা হয়ে যায়, পাতা কুঁকড়ে বাদামি হয় এবং কুঁড়ি নষ্ট হয়ে যায়।',
    affectedLeafSurface: 'Young unfolding leaves, petioles, and terminal shoots',
    affectedLeafSurfaceBn: 'কচি নতুন পাতা, বোঁটা এবং ডালপালার শীর্ষ ডগা',
    spreadMechanism: 'Airborne conidia favored by dry windy days with high night humidity',
    spreadMechanismBn: 'বাতাসের মাধ্যমে স্পোর ছড়ায়; শুষ্ক দিন ও রাতে আর্দ্র আবহাওয়া বিস্তার ঘটায়',
    frequentConditions: 'Warm temperatures (19-25°C) with high relative humidity (>70%) but without rainfall.',
    frequentConditionsBn: 'উষ্ণ আবহাওয়া (১৯-২৫ ডিগ্রি) এবং উচ্চ আর্দ্রতা, কিন্তু বৃষ্টিহীন অবস্থা।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'EPPO Global Database & CABI Compendium',
    similarDiseases: [
      {
        name: 'Apple Scab',
        nameBn: 'আপেল স্ক্যাব',
        difference: 'Scab produces olive-black velvety lesions that blister, while Mildew produces dry white talcum powder felt.',
        differenceBn: 'স্ক্যাবে জলপাই-কালো মখমলের মতো ঘা হয়, কিন্তু মিলডিউতে সাদা শুষ্ক পাউডারের প্রলেপ পড়ে।'
      }
    ],
    symptoms: [
      'Silvery-white powdery felt on young terminal leaves and shoots',
      'Narrow, elongated, curled leaves with brittle edges',
      'Delayed growth of fruit buds and russeting on apple skin'
    ],
    symptomsBn: [
      'কচি ডগা ও পাতায় রূপালী-সাদা পাউডারের আবরণ',
      'পাতা সরু, লম্বা ও কুঁকড়ে শক্ত হয়ে যাওয়া',
      'ফলের কুঁড়ির বৃদ্ধি বন্ধ হওয়া এবং ফলের ত্বকে খসখসে জালিকা তৈরি হওয়া'
    ],
    causes: [
      'Mycelium overwintering inside dormant fruit and leaf buds',
      'Dry spring weather preventing spore wash-off',
      'Excess nitrogen feeding generating succulent tender foliage'
    ],
    causesBn: [
      'সুপ্ত কুঁড়ির ভেতরে ছত্রাকের বেঁচে থাকা',
      'বৃষ্টিহীন শুষ্ক বসন্তের আবহাওয়া',
      'অতিরিক্ত নাইট্রোজেন সারের কারণে নরম ডাল গজানো'
    ],
    organicTreatment: [
      'Prune off all infected terminal "silver shoots" during winter and early spring dormancy',
      'Spray potassium bicarbonate (3g/L) mixed with horticultural mineral oil',
      'Apply bio-fungicide Bacillus subtilis at bloom'
    ],
    organicTreatmentBn: [
      'শীতের শেষে সব সাদা আক্রান্ত ডগা ছেঁটে পুড়িয়ে ফেলুন',
      'পটাশিয়াম বাইকার্বনেট (৩ গ্রাম/লিটার) ও তেল স্প্রে করুন',
      'ব্যাসিলাস সাবটিলিস জৈব ছত্রাকনাশক প্রয়োগ করুন'
    ],
    chemicalTreatment: [
      'Spray Hexaconazole 5 EC (1ml/L) or Myclobutanil 10 WP (1g/L) at bud swell and petal fall'
    ],
    chemicalTreatmentBn: [
      'হেক্সাকোনাজল ৫ ইসি (১ মিলি/লিটার) অথবা মাইক্লোবুটানিল (১ গ্রাম/লিটার) স্প্রে করুন'
    ],
    prevention: [
      'Inspect trees in winter and cut out all powdery terminal twigs',
      'Plant less susceptible cultivars',
      'Maintain balanced potash nutrition to harden foliage'
    ],
    preventionBn: [
      'শীতে সাদা পাউডারযুক্ত ডাল চিহ্নিত করে কেটে ফেলুন',
      'প্রতিরোধী জাতের চাষ করুন',
      'সুষম পটাশ সার ব্যবহার করে পাতার চামড়া শক্ত করুন'
    ]
  },

  // --- PEAR (নাশপাতি) ---
  {
    id: 'pear-fire-blight',
    name: 'Pear & Apple Fire Blight',
    nameBn: 'নাশপাতি ও আপেলের ফায়ার ব্লাইট (আগুন পোড়া রোগ)',
    scientificName: 'Erwinia amylovora',
    causalOrganism: 'Erwinia amylovora (Enterobacterial pathogen)',
    confirmedHosts: ['Pyrus communis (Pear)', 'Malus domestica (Apple)', 'Cydonia oblonga (Quince)'],
    plantSpecies: 'Pear (নাশপাতি)',
    plantSpeciesBn: 'নাশপাতি',
    cropType: 'fruit',
    category: 'bacterial',
    categoryBn: 'ব্যাকটেরিয়াজনিত',
    severity: 'High',
    severityBn: 'তীব্র',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Pear branch and leaves blackened and scorched as if burned by fire with sheperds crook curved tip',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy green pear leaf',
    visualCharacteristics: 'Leaves, blossoms, and twigs rapidly turn blackened and scorched as if burned by fire; terminal shoots hook into a characteristic "shepherd\'s crook".',
    visualCharacteristicsBn: 'পাতা, ফুল ও ডালপালা আগুনে পোড়ার মতো দ্রুত কুচকুচে কালো হয়ে যায় এবং ডগার মাথা রাখালের লাঠির মতো বেকে যায়।',
    earlySymptoms: 'Water-soaked translucent lesions on blossoms and young shoots with milky-white bacterial ooze droplets.',
    earlySymptomsBn: 'ফুল ও কচি ডালে জলছাপের মতো দাগ এবং দুধের মতো সাদা ব্যাকটেরিয়ার রস বের হওয়া।',
    advancedSymptoms: 'Rapid blight travelling downward into major branches; leaves shrivel, turn jet-black, and remain tightly attached.',
    advancedSymptomsBn: 'দ্রুত নিচের প্রধান ডালে ছড়িয়ে পড়ে; পাতা কুচকুচে কালো হয়ে গাছে ঝুলে থাকে।',
    affectedLeafSurface: 'Vascular veins, petiole, and whole leaf blade',
    affectedLeafSurfaceBn: 'পাতার শিরা, বোঁটা এবং সম্পূর্ণ ফলক',
    spreadMechanism: 'Pollinating bees, flies, rain splash, pruning shears, and windblown bacterial strands',
    spreadMechanismBn: 'মৌমাছি, মাছি, বৃষ্টির পানির ছিটা ও ছাঁটাইয়ের কাঁচির মাধ্যমে',
    frequentConditions: 'Warm humid weather (24-29°C) with rain, heavy dew, or hail during flowering.',
    frequentConditionsBn: 'ফুল ফোটার সময় উষ্ণ আর্দ্র আবহাওয়া (২৪-২৯ ডিগ্রি) ও বৃষ্টি বা শিলাবৃষ্টি।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'EPPO Quarantine A2 List & CABI Plantwise Guide',
    similarDiseases: [
      {
        name: 'Pear Pseudomonas Blossom Blast',
        nameBn: 'নাশপাতির সিউডোমোনাস পুষ্প ব্লাইট',
        difference: 'Pseudomonas blast occurs in cold frosty weather (below 15°C) and stops at the twig base, without shepherd\'s crook curving.',
        differenceBn: 'সিউডোমোনাস ঠান্ডা আবহাওয়ায় হয় এবং কাণ্ডে ছড়ায় না, রাখালের লাঠির মতো ডাল বাঁকে না।'
      }
    ],
    symptoms: [
      'Sudden blackening of flowers, leaves, and terminal twigs',
      'Curved "shepherd\'s crook" hook at terminal shoot tips',
      'Milky bacterial droplet exudation under humid conditions',
      'Dead blackened leaves clinging persistently to twigs'
    ],
    symptomsBn: [
      'হঠাৎ ফুল, পাতা ও ডাল আগুনে পোড়ার মতো কালো হয়ে যাওয়া',
      'ডগার মাথা রাখালের লাঠির মতো বেকে যাওয়া',
      'আর্দ্র আবহাওয়ায় ডাল থেকে আঠালো দুধের মতো রস নির্গমন',
      'কালো মরা পাতা ঝরে না পড়ে গাছে শক্তভাবে লেগে থাকা'
    ],
    causes: [
      'Bacteria entering open blossoms through nectar glands',
      'Hail wounds or wind damage allowing bacterial invasion',
      'Over-fertilizing with nitrogen stimulating lush succulent growth'
    ],
    causesBn: [
      'ফুল ফোটার সময় ফুলের মধুগ্রন্থি দিয়ে ব্যাকটেরিয়া প্রবেশ',
      'শিলাবৃষ্টি বা বাতাসে গাছের ক্ষতের সৃষ্টি হওয়া',
      'অতিরিক্ত নাইট্রোজেন সারের কারণে নরম জলীয় ডালপালা গজানো'
    ],
    organicTreatment: [
      'Prune infected branches at least 30 cm (12 inches) below visible blackened margins during dry weather',
      'Sterilize shears in 10% bleach or 70% ethanol between every single cut',
      'Apply dormant copper sprays before bud swell'
    ],
    organicTreatmentBn: [
      'শুকনো দিনে কালো অংশের অন্তত ৩০ সেমি নিচ থেকে ডাল কেটে পুড়িয়ে ফেলুন',
      'প্রতিবার কাটার পর কাঁচি অ্যালকোহল বা ব্লিচিং দ্রবণে চুবিয়ে জীবাণুমুক্ত করুন',
      'কুঁড়ি ফোটার আগে কপার স্প্রে করুন'
    ],
    chemicalTreatment: [
      'Spray Streptomycin Sulfate + Tetracycline (Plantomycin / Streptocycline 1g/10L) at 4-5 day intervals during bloom'
    ],
    chemicalTreatmentBn: [
      'ফুল ফোটার সময় স্ট্রেপ্টোসাইক্লিন বা প্লান্টোমাইসিন (১ গ্রাম/১০ লিটার) ৪-৫ দিন পর পর স্প্রে করুন'
    ],
    prevention: [
      'Avoid high-nitrogen fertilizers that produce tender growth',
      'Control aphids and plant bugs that transmit bacteria to shoots',
      'Plant tolerant European or Asian pear rootstocks'
    ],
    preventionBn: [
      'অতিরিক্ত ইউরিয়া সার ব্যবহার বন্ধ রাখুন',
      'রস চোষা পোকা দমন করুন যা ব্যাকটেরিয়া বহন করে',
      'রোগসহনশীল জাত রোপণ করুন'
    ]
  },

  // --- PEACH & PLUM (পীচ ও আলুবোখারা) ---
  {
    id: 'peach-leaf-curl',
    name: 'Peach Leaf Curl',
    nameBn: 'পীচ ফলের পাতা কুঁকড়ানো রোগ (ট্যাফ্রিনা)',
    scientificName: 'Taphrina deformans',
    causalOrganism: 'Taphrina deformans (Ascomycete fungus)',
    confirmedHosts: ['Prunus persica (Peach & Nectarine)', 'Prunus dulcis (Almond)'],
    plantSpecies: 'Peach (পীচ)',
    plantSpeciesBn: 'পীচ ফল',
    cropType: 'fruit',
    category: 'fungal',
    categoryBn: 'ছত্রাকজনিত',
    severity: 'High',
    severityBn: 'তীব্র',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Peach leaves severely puckered, thickened, blistered and curled with reddish-purple and yellow discoloration',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy lanceolate green peach foliage',
    visualCharacteristics: 'Severe thickening, puckering, twisting, and blistering of newly emerged spring leaves; color changes to bright reddish-pink, purple, and pale yellow with velvety white bloom.',
    visualCharacteristicsBn: 'বসন্তে কচি পাতা অস্বাভাবিক পুরু, ফোলা ফোস্কাযুক্ত ও কুঁকড়ানো; পাতার রঙ উজ্জ্বল লালচে-গোলাপি, বেগুনি বা হলুদ হয়ে মখমলের মতো দেখায়।',
    earlySymptoms: 'Reddish thickened areas on expanding spring leaflets.',
    earlySymptomsBn: 'বসন্তের কচি পাতায় লালচে স্ফীত মাংসল ছোপ।',
    advancedSymptoms: 'Leaves turn heavily distorted, brittle, rubbery, develop white spore bloom, turn brown, and drop heavily in late spring.',
    advancedSymptomsBn: 'পাতা ভীষণ বিকৃত ও রবারের মতো শক্ত হয়ে সাদা স্পোরে ঢেকে যায় এবং শুকিয়ে ঝরে পড়ে।',
    affectedLeafSurface: 'Entire thickness of the leaf blade due to fungal hormone production',
    affectedLeafSurfaceBn: 'হরমোনের প্রভাবে পাতার পুরুত্ব ও সম্পূর্ণ ফলক',
    spreadMechanism: 'Rain-splashed blastospores overwintering in bark crevices and bud scales',
    spreadMechanismBn: 'গাছের বাকলের ফাঁকে থাকা স্পোর বৃষ্টির পানির ছিটায় নতুন কুঁড়িতে পৌঁছায়',
    frequentConditions: 'Cool, wet spring weather (10-18°C) with persistent rains during bud swell.',
    frequentConditionsBn: 'ঠান্ডা ও ভেজা বসন্তের আবহাওয়া (১০-১৮ ডিগ্রি) এবং কুঁড়ি ফোটার সময়ে বৃষ্টি।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'CABI Crop Protection Compendium & University IPM Guidelines',
    similarDiseases: [
      {
        name: 'Peach Aphid Leaf Curl',
        nameBn: 'পীচ এফিডের পাতা কুঁকড়ানো',
        difference: 'Aphid feeding curls leaves tightly without reddish blister thickening or rubbery distortion; live aphids or sticky honeydew are inside.',
        differenceBn: 'এফিডে পাতা মুড়ে যায় কিন্তু মাংসল ফোস্কা বা লালচে ভাব হয় না; ভেতরে জাবপোকা ও আঠালো রস থাকে।'
      }
    ],
    symptoms: [
      'Thickened, distorted, and blistered leaves',
      'Bright reddish-pink to yellow discoloration on curled foliage',
      'Premature defoliation exhausting tree vigor and reducing fruit set'
    ],
    symptomsBn: [
      'পাতা অস্বাভাবিক পুরু, ফোস্কাযুক্ত ও বিকৃত হয়ে যাওয়া',
      'কুঁকড়ানো পাতার রঙ উজ্জ্বল লালচে-গোলাপি থেকে হলুদ হওয়া',
      'অকালে পাতা ঝরে গাছ দুর্বল হওয়া ও ফলন কমে যাওয়া'
    ],
    causes: [
      'Failure to apply a protective dormant spray before bud break',
      'Prolonged cool wet spring weather lasting >12 hours at bud swell',
      'Fungal spores protected in rough bark over winter'
    ],
    causesBn: [
      'কুঁড়ি ফোটার আগে শীতকালীন ছত্রাকনাশক স্প্রে না করা',
      'বসন্তে একটানা ঠান্ডা ও বৃষ্টিময় আবহাওয়া',
      'বাকলের খাজে ছত্রাকের সুপ্তাবস্থা'
    ],
    organicTreatment: [
      'Collect and destroy all fallen curled leaves immediately to reduce inoculum',
      'Apply liquid seaweed and balanced fertilizer to help defoliated trees grow new summer leaves',
      'Thin fruit load heavily on infected trees to prevent tree exhaustion'
    ],
    organicTreatmentBn: [
      'ঝরে পড়া সব বিকৃত পাতা কুড়িয়ে ধ্বংস করুন',
      'গাছের দুর্বলতা কাটাতে সুষম সার ও অণুখাদ্য স্প্রে করুন',
      'গাছের ধকল কমাতে অতিরিক্ত ফল পাতলা করে ফেলুন'
    ],
    chemicalTreatment: [
      'Single dormant spray of Copper Oxychloride 50 WP (3g/L) or Bordeaux mixture (1%) strictly BEFORE bud swell in late winter'
    ],
    chemicalTreatmentBn: [
      'শীতের শেষে কুঁড়ি ফোটার ঠিক আগে কপার অক্সিক্লোরাইড ৫০ ডব্লিউপি (৩ গ্রাম/লিটার) বা বোর্দো মিশ্রণ ১% ভালো করে স্প্রে করুন'
    ],
    prevention: [
      'CRITICAL: Once leaves show curl in spring, no fungicide spray is effective for that season — timing dormant spray is key',
      'Plant curl-resistant cultivars where available',
      'Protect potted trees under rain shelters during bud break'
    ],
    preventionBn: [
      'গুরুত্বপূর্ণ: পাতা কুঁকড়ে যাওয়ার পর স্প্রে করে কোনো লাভ হয় না; শীতের শেষেই আগাম স্প্রে করা একমাত্র উপায়',
      'প্রতিরোধী জাত রোপণ করুন',
      'কুঁড়ি ফোটার সময় চারা গাছকে বৃষ্টির পানি থেকে আড়ালে রাখুন'
    ]
  },

  // --- JACKFRUIT (কাঁঠাল) ---
  {
    id: 'jackfruit-rhizopus-rot',
    name: 'Jackfruit Rhizopus Blossom & Fruit Rot',
    nameBn: 'কাঁঠালের পচা রোগ বা মোচা পচা রোগ',
    scientificName: 'Rhizopus artocarpi',
    causalOrganism: 'Rhizopus artocarpi (Zygomycete fungus)',
    confirmedHosts: ['Artocarpus heterophyllus (Jackfruit)', 'Artocarpus integer (Cempedak)'],
    plantSpecies: 'Jackfruit (কাঁঠাল)',
    plantSpeciesBn: 'কাঁঠাল',
    cropType: 'fruit',
    category: 'fungal',
    categoryBn: 'ছত্রাকজনিত',
    severity: 'High',
    severityBn: 'তীব্র',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Young jackfruit blossom and stalk covered in dark whiskers of black fungal whiskers with rotted mushy tissue',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy green female jackfruit spike and leaf',
    visualCharacteristics: 'Water-soaked soft brown decay of male and female inflorescences and young fruitlets, rapidly covered by dense greyish-black whisker-like fungal sporangiophores with pinhead dots.',
    visualCharacteristicsBn: 'কচি কাঁঠাল বা মোচায় নরম জলছাপ পচন যা দ্রুত কালো গোঁফের মতো লম্বা ছত্রাকের রোঁয়া ও কালো দানায় ঢেকে যায়।',
    earlySymptoms: 'Soft, water-soaked brown spots on male spikes and young fruitlets.',
    earlySymptomsBn: 'পুরুষ ফুল বা কচি মোচায় নরম জলছাপের মতো বাদামি দাগ।',
    advancedSymptoms: 'Fruitlet turns completely mushy, black, and falls off; dense black furry whiskers cover the surface.',
    advancedSymptomsBn: 'কাঁঠালের মোচা পুরোপুরি পচে কালো হয়ে ঝরে পড়ে এবং উপরিভাগে কালো লোমশ ছত্রাক জমে।',
    affectedLeafSurface: 'Stalks, fruitlet rinds, and adjacent bract leaves',
    affectedLeafSurfaceBn: 'মোচার বোঁটা, কচি ফলের ত্বক এবং সংলগ্ন পাতা',
    spreadMechanism: 'Airborne sporangiospores and wind-driven rain; insect transmission through feeding wounds',
    spreadMechanismBn: 'বাতাসের স্পোর, বৃষ্টির পানির ঝাপটা এবং পোকার ক্ষতের মাধ্যমে',
    frequentConditions: 'Warm, rainy humid monsoon weather (25-32°C) with continuous high humidity.',
    frequentConditionsBn: 'বর্ষাকালের উষ্ণ আর্দ্র আবহাওয়া (২৫-৩২ ডিগ্রি) ও বৃষ্টির দিনে।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Pomology Division & Bangladesh Agricultural University Journal',
    similarDiseases: [
      {
        name: 'Jackfruit Pink Disease',
        nameBn: 'কাঁঠালের গোলাপী রোগ',
        difference: 'Pink disease (Corticium salmonicolor) affects thick branches with a pinkish powdery crust, while Rhizopus specifically rots flowering spikes with black whiskers.',
        differenceBn: 'গোলাপী রোগে কাণ্ডে গোলাপি আস্তরণ পড়ে, কিন্তু রাইজোপাসে কচি কাঁঠাল পচে কালো রোঁয়া বের হয়।'
      }
    ],
    symptoms: [
      'Black whisker-like fungal growth over rotting young fruitlets',
      'Premature drop of small tender jackfruits ("mocha")',
      'Foul sour odor from rotting inflorescences'
    ],
    symptomsBn: [
      'পচে যাওয়া কচি মোচার ওপর কালো গোঁফের মতো ছত্রাকের বৃদ্ধি',
      'ছোট অবস্থাতেই কচি মোচা কালো হয়ে ঝরে পড়ে যাওয়া',
      'পচা ফুল থেকে টক দুর্গন্ধ বের হওয়া'
    ],
    causes: [
      'Decaying male spikes remaining on the tree providing continuous inoculum',
      'Dense inner tree shade with stagnant humid air',
      'Insect bores or wounds allowing fungal entry'
    ],
    causesBn: [
      'গাছে ঝুলে থাকা পচা পুরুষ ফুল থেকে জীবাণুর বিস্তার',
      'গাছের ভেতরে বাতাস চলাচলের অভাব ও মাত্রাতিরিক্ত আর্দ্রতা',
      'কীটপতঙ্গের কামড়ে তৈরি হওয়া ক্ষত'
    ],
    organicTreatment: [
      'Regularly pluck off and bury all shed male spikes and rotting blackened fruitlets',
      'Thin out overlapping internal branches in winter to allow morning sun to reach the main trunk',
      'Bag healthy developing fruitlets with breathable brown paper or mesh bags after pollination'
    ],
    organicTreatmentBn: [
      'গাছের নিচে বা ডালে জমে থাকা সব পচা পুরুষ ফুল কুড়িয়ে মাটিতে পুঁতে ফেলুন',
      'শীতকালে গাছের ভেতরের অপ্রয়োজনীয় ডাল ছেঁটে রোদ প্রবেশের সুযোগ দিন',
      'পরাগায়নের পর কচি কাঁঠালে ছিদ্রযুক্ত কাগজের ব্যাগ বা নেট পরিয়ে দিন'
    ],
    chemicalTreatment: [
      'Spray Mancozeb 75 WP (Indofil, 2.5g/L) or Copper Oxychloride (2g/L) at 10-day intervals from flowering until fruit set'
    ],
    chemicalTreatmentBn: [
      'ফুল আসার শুরু থেকে ম্যানকোজেব (২.৫ গ্রাম/লিটার) অথবা কপার অক্সিক্লোরাইড (২ গ্রাম/লিটার) ১০ দিন পর পর স্প্রে করুন'
    ],
    prevention: [
      'Clean tree trunks before flowering season begins',
      'Avoid planting jackfruit trees in waterlogged lowlands',
      'Control fruit borer insects and shoot borers proactively'
    ],
    preventionBn: [
      'ফুল আসার আগেই গাছের গুঁড়ি পরিষ্কার রাখুন',
      'জলাবদ্ধ নিচু জমিতে কাঁঠাল চাষ পরিহার করুন',
      'মোচা ছিদ্রকারী পোকা নিয়মিত দমন করুন'
    ]
  },

  // --- POMEGRANATE (বেদানা / ডালিম) ---
  {
    id: 'pomegranate-bacterial-blight',
    name: 'Pomegranate Bacterial Blight (Telya)',
    nameBn: 'ডালিম বা বেদানার তৈলাক্ত রোগ (ব্যাকটেরিয়াল ব্লাইট)',
    scientificName: 'Xanthomonas axonopodis pv. punicae',
    causalOrganism: 'Xanthomonas axonopodis pv. punicae (Bacterial plant pathogen)',
    confirmedHosts: ['Punica granatum (Pomegranate)'],
    plantSpecies: 'Pomegranate (বেদানা / ডালিম)',
    plantSpeciesBn: 'বেদানা / ডালিম',
    cropType: 'fruit',
    category: 'bacterial',
    categoryBn: 'ব্যাকটেরিয়াজনিত',
    severity: 'High',
    severityBn: 'তীব্র',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Pomegranate leaf with dark black water-soaked oily spots with yellow halo and nodal cankers',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy shining green pomegranate leaf',
    visualCharacteristics: 'Dark brown to jet-black, shiny, water-soaked oily spots (1-5 mm) with yellow halos on leaves, cracking black nodal cankers on twigs, and "L" or "Y" shaped cracking on fruit rind.',
    visualCharacteristicsBn: 'পাতায় চকচকে তৈলাক্ত কালো জলছাপের মতো দাগ ও হলুদ বলয়, ডালে কালো ঘা এবং ফলের গায়ে এল (L) বা ওয়াই (Y) অক্ষরের মতো ফাটা দাগ।',
    earlySymptoms: 'Tiny translucent water-soaked spots on leaf surfaces that look greasy or oily when held up to the light.',
    earlySymptomsBn: 'পাতায় ছোট জলছাপযুক্ত তৈলাক্ত দাগ যা আলোর বিপরীতে ধরলে স্বচ্ছ দেখায়।',
    advancedSymptoms: 'Spots turn black and coalesce causing severe defoliation; stems split into black cankers; fruit rinds crack open.',
    advancedSymptomsBn: 'দাগগুলো কালো হয়ে মিলে পাতা ঝরে যায়; ডাল ফেটে কালো ক্যাংকার হয় এবং ডালিমের খোসা ফেটে নষ্ট হয়ে যায়।',
    affectedLeafSurface: 'Both leaf surfaces, stems, nodes, flowers, and fruit peel',
    affectedLeafSurfaceBn: 'পাতার উভয় পিঠ, ডাল, গিট, ফুল এবং ফলের খোসা',
    spreadMechanism: 'Wind-driven rain, contaminated pruning shears, infected sapling material',
    spreadMechanismBn: 'ঝড়ো বৃষ্টি, ছাঁটাইয়ের কাঁচি এবং নার্সারির সংক্রমিত চারা',
    frequentConditions: 'Cloudy rainy days with temperatures 25-35°C and relative humidity >50%.',
    frequentConditionsBn: 'মেঘলা ও বৃষ্টিমুখর দিন, ২৫-৩৫ ডিগ্রি তাপমাত্রা এবং ৫০% এর বেশি আর্দ্রতা।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'ICAR National Research Centre on Pomegranate & BARI Pomology',
    similarDiseases: [
      {
        name: 'Pomegranate Cercospora Spot',
        nameBn: 'ডালিমের সারকোস্পোরা দাগ',
        difference: 'Cercospora creates dry circular spots with grayish centers without the characteristic oily water-soaked shine or fruit cracking.',
        differenceBn: 'সারকোস্পোরাতে শুষ্ক ছাইরঙা কেন্দ্রযুক্ত দাগ হয়, তৈলাক্ত চকচকে ভাব বা ফল ফেটে যাওয়া থাকে না।'
      }
    ],
    symptoms: [
      'Shiny dark black oily spots surrounded by yellow halos on leaves',
      'Premature leaf drop leading to bare twigs',
      'Deep black cracks on fruit rind ("Telya" symptom) rotting internal arils'
    ],
    symptomsBn: [
      'পাতায় চকচকে কালো তৈলাক্ত দাগ এবং চারপাশে হলুদ আভা',
      'পাতা অকালে ঝরে গিয়ে গাছ ন্যাড়া হয়ে যাওয়া',
      'ফলের খোসায় গভীর কালো ফাটল ধরে ভেতরের দানা পচে যাওয়া'
    ],
    causes: [
      'Planting infected air-layered saplings from uncertified nurseries',
      'Frequent pruning during rainy monsoon months',
      'High wind and driving rains splashing bacterial inoculum'
    ],
    causesBn: [
      'অবিশ্বস্ত নার্সারি থেকে আনা কলমের চারা রোপণ',
      'বর্ষাকালে ডালপালা ছাঁটাই করা',
      'বৃষ্টির পানির ঝাপটায় ব্যাকটেরিয়ার দ্রুত সংক্রমণ'
    ],
    organicTreatment: [
      'Prune infected twigs 5 cm below the canker strictly during dry sunny weather',
      'Immediately paste cut ends with Bordeaux paste (1:1:10 copper sulfate, lime, water)',
      'Collect and burn all dropped spotted leaves and cracked fruits'
    ],
    organicTreatmentBn: [
      'শুকনো দিনে আক্রান্ত অংশের ৫ সেমি নিচ থেকে ডাল কেটে ফেলুন',
      'কাটা মুখে তাৎক্ষণিকভাবে বোর্দো পেস্টের প্রলেপ দিন',
      'ঝরে পড়া পাতা ও ফেটে যাওয়া ডালিম বাগান থেকে কুড়িয়ে পুড়িয়ে ফেলুন'
    ],
    chemicalTreatment: [
      'Spray Streptocycline (0.5g/L) + Copper Oxychloride (2.5g/L) or 2-Bromo-2-nitropropane-1,3-diol (Bronopol, 0.5g/L) every 12-15 days during rainy season'
    ],
    chemicalTreatmentBn: [
      'বর্ষাকালে স্ট্রেপ্টোসাইক্লিন (০.৫ গ্রাম/লিটার) ও কপার অক্সিক্লোরাইড (২.৫ গ্রাম/লিটার) মিশিয়ে ১২-১৫ দিন পর পর স্প্রে করুন'
    ],
    prevention: [
      'Purchase tissue-culture or certified disease-free pomegranate saplings only',
      'Disinfect secateurs with 20% sodium hypochlorite between plants',
      'Avoid overhead irrigation; use drip lines at soil surface'
    ],
    preventionBn: [
      'টিস্যু কালচার বা রোগমুক্ত প্রত্যায়িত চারা রোপণ করুন',
      'কাঁচি জীবাণুমুক্ত না করে এক গাছ থেকে অন্য গাছে ব্যবহার করবেন না',
      'ওপর থেকে পানি না দিয়ে মাটির সমান্তরালে ড্রিপ সেচ দিন'
    ]
  }
];
