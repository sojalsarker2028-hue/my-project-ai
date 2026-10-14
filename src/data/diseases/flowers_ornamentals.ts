import { LeafDisease } from '../../types';
import imgRoseBlackSpot from '../../assets/images/rose_black_spot_leaf_1791700970361.jpg';
import imgHealthyRose from '../../assets/images/healthy_rose_leaf_1791895415800.jpg';
import imgHealthy from '../../assets/images/healthy_citrus_leaf_1791699764349.jpg';
import imgBlightGeneral from '../../assets/images/unhealthy_blight_leaf_1791699775237.jpg';

export const FLOWER_ORNAMENTAL_DISEASES: LeafDisease[] = [
  // --- ROSE (গোলাপ) ---
  {
    id: 'rose-black-spot',
    name: 'Rose Black Spot',
    nameBn: 'গোলাপের কালো দাগ রোগ (ব্ল্যাক স্পট)',
    scientificName: 'Diplocarpon rosae',
    causalOrganism: 'Diplocarpon rosae (Ascomycete fungus)',
    confirmedHosts: ['Rosa spp. (Cultivated & wild roses)'],
    plantSpecies: 'Rose (গোলাপ)',
    plantSpeciesBn: 'গোলাপ',
    cropType: 'flower',
    category: 'fungal',
    categoryBn: 'ছত্রাকজনিত',
    severity: 'High',
    severityBn: 'তীব্র',
    imageUrl: imgRoseBlackSpot,
    imageAlt: 'Rose foliage with circular black spots with feathery fringed margins',
    healthyImageUrl: imgHealthyRose,
    healthyImageAlt: 'Healthy glossy green rose leaf',
    visualCharacteristics: 'Circular black spots (2-12 mm) with characteristic feathery or fringed margins, surrounded by chlorotic yellow halos.',
    visualCharacteristicsBn: 'গোলাকার কালো দাগ যার কিনারা খাঁজকাটা বা পালকের মতো এবং চারপাশে হলুদ বলয় থাকে।',
    earlySymptoms: 'Tiny circular purplish-black spots on upper leaf surface.',
    earlySymptomsBn: 'পাতার ওপরের পিঠে ছোট গোলাকার বেগুনী-কালো ছোপ।',
    advancedSymptoms: 'Spots enlarge, entire leaf yellows and undergoes severe premature defoliation leaving bare stems.',
    advancedSymptomsBn: 'দাগগুলো বড় হয়ে পুরো পাতা হলুদ হয়ে ঝরে পড়ে এবং কাণ্ড পাতাশূন্য হয়ে যায়।',
    affectedLeafSurface: 'Upper leaf blade, occasionally petioles and green canes',
    affectedLeafSurfaceBn: 'পাতার ওপরের ফলক, বোঁটা এবং কচি ডালপালা',
    spreadMechanism: 'Water splashing from rain or overhead watering, contaminated pruning shears',
    spreadMechanismBn: 'বৃষ্টির পানির ছিটা, ওপর থেকে সেচ এবং অপরিষ্কার কাঁচি দ্বারা ছড়ায়',
    frequentConditions: 'Wet foliage for >7 hours at 20-27°C with high relative humidity.',
    frequentConditionsBn: 'পাতা ৭ ঘণ্টার বেশি ভেজা থাকা, ২০-২৭ ডিগ্রি সেলসিয়াস তাপমাত্রা ও আর্দ্র আবহাওয়া।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Floriculture Division & Royal Horticultural Society Guide',
    similarDiseases: [
      {
        name: 'Rose Cercospora Leaf Spot',
        nameBn: 'গোলাপের সারকোস্পোরা পাতার দাগ',
        difference: 'Cercospora spots have distinct grayish-tan centers with smooth purple borders, whereas Black Spot has feathery fringed borders.',
        differenceBn: 'সারকোস্পোরার দাগের কেন্দ্র ধূসর ও মসৃণ বেগুনি কিনারাযুক্ত, কিন্তু ব্ল্যাক স্পটের কিনারা খাঁজকাটা বা পালকের মতো।'
      },
      {
        name: 'Rose Downy Mildew',
        nameBn: 'গোলাপের ডাউনি মিলডিউ',
        difference: 'Downy mildew forms angular purplish-red blocks delineated by veins rather than circular fringed spots.',
        differenceBn: 'ডাউনি মিলডিউ শিরা দ্বারা সীমাবদ্ধ কৌণিক বেগুনি-লাল দাগ তৈরি করে।'
      }
    ],
    symptoms: [
      'Circular black spots with feathery edges on upper leaf surfaces',
      'Extensive yellowing around lesions',
      'Severe premature leaf drop weakening plant flowering'
    ],
    symptomsBn: [
      'পাতার ওপরের অংশে খাঁজকাটা পালকের মতো কিনারাবিশিষ্ট কালো দাগ',
      'দাগের চারপাশে পাতা হলুদ হয়ে যাওয়া',
      'অকালে পাতা ঝরে গিয়ে ফুলের উৎপাদন মারাত্মক ব্যাহত হওয়া'
    ],
    causes: [
      'Fungal spores overwintering on fallen infected leaves',
      'Overhead watering keeping leaves wet through the night',
      'Poor airflow in dense garden shrub beds'
    ],
    causesBn: [
      'ঝরে পড়া আক্রান্ত পাতার মাঝে ছত্রাকের সুপ্তাবস্থা',
      'সন্ধ্যায় ওপর থেকে গাছে পানি দেওয়ার ফলে পাতা দীর্ঘক্ষণ ভেজা থাকা',
      'গাছের ঘনত্ব বেশি থাকায় আলো-বাতাসের অপর্যাপ্ততা'
    ],
    organicTreatment: [
      'Rake up and burn all fallen leaves immediately',
      'Prune lower branches to improve air circulation at ground level',
      'Spray neem oil (5 ml/L) mixed with mild liquid soap weekly'
    ],
    organicTreatmentBn: [
      'ঝরে পড়া সব আক্রান্ত পাতা কুড়িয়ে পুড়িয়ে ফেলুন',
      'গাছের নিচের ডালপালা ছেঁটে বাতাস চলাচলের ব্যবস্থা করুন',
      'প্রতি লিটার পানিতে ৫ মিলি নিম তেল ও সামান্য ডিটারজেন্ট মিশিয়ে স্প্রে করুন'
    ],
    chemicalTreatment: [
      'Spray Mancozeb 75 WP (2g/L) or Tebuconazole + Trifloxystrobin (0.6g/L) at first sign of spots'
    ],
    chemicalTreatmentBn: [
      'দাগ দেখা মাত্র ম্যানকোজেব ৭৫ ডব্লিউপি (২ গ্রাম/লিটার) অথবা ট্রাইফ্লক্সিস্ট্রবিন মিশ্রণ স্প্রে করুন'
    ],
    prevention: [
      'Never water roses overhead; irrigate strictly at the base/root zone in early morning',
      'Disinfect pruning shears with 70% alcohol between cuts',
      'Plant resistant varieties in sunny locations with 6+ hours of direct sunlight'
    ],
    preventionBn: [
      'কখনো ওপর থেকে গাছে পানি দেবেন না; সকালে গাছের গোড়ায় পানি দিন',
      'ডাল ছাঁটার কাঁচি অ্যালকোহল দিয়ে জীবাণুমুক্ত রাখুন',
      'প্রতিদিন অন্তত ৬ ঘণ্টা সরাসরি রোদ পায় এমন খোলামেলা স্থানে গোলাপ লাগান'
    ]
  },
  {
    id: 'rose-powdery-mildew',
    name: 'Rose Powdery Mildew',
    nameBn: 'গোলাপের পাউডারি মিলডিউ রোগ',
    scientificName: 'Podosphaera pannosa',
    causalOrganism: 'Podosphaera pannosa (Obligate biotrophic fungus)',
    confirmedHosts: ['Rosa spp.'],
    plantSpecies: 'Rose (গোলাপ)',
    plantSpeciesBn: 'গোলাপ',
    cropType: 'flower',
    category: 'fungal',
    categoryBn: 'ছত্রাকজনিত',
    severity: 'Moderate',
    severityBn: 'মাঝারি',
    imageUrl: imgRoseBlackSpot,
    imageAlt: 'Young rose shoots and leaves covered with white talcum-powder like fungal mycelium',
    healthyImageUrl: imgHealthyRose,
    healthyImageAlt: 'Healthy unfolded rose shoot',
    visualCharacteristics: 'White, powdery fungal patches on young leaves, flower buds, and stems causing curling and distortion.',
    visualCharacteristicsBn: 'কচি পাতা, কুঁড়ি এবং ডালপালায় ট্যালকম পাউডারের মতো সাদা গুঁড়ো ছোপ যা পাতাকে কুঁকড়ে ফেলে।',
    earlySymptoms: 'Blistered, reddish patches on young leaves before white powder appears.',
    earlySymptomsBn: 'সাদা গুঁড়ো হওয়ার আগে কচি পাতায় কিছুটা ফোলা লালচে ছোপ।',
    advancedSymptoms: 'Heavy white talcum-like felt coating; leaves curl upward and flower buds fail to open.',
    advancedSymptomsBn: 'পুরু সাদা গুঁড়োর আস্তরণ; পাতা ওপরের দিকে কুঁকড়ে যায় এবং ফুলের কুঁড়ি ফোটে না।',
    affectedLeafSurface: 'Upper and lower surfaces of young tender foliage and sepals',
    affectedLeafSurfaceBn: 'কচি পাতার উভয় পিঠ ও ফুলের বৃতি',
    spreadMechanism: 'Wind-blown airborne conidia in dry atmospheric conditions with humid nights',
    spreadMechanismBn: 'বাতাসের মাধ্যমে স্পোর ছড়িয়ে পড়ে, বিশেষত শুষ্ক দিনে ও আর্দ্র রাতে',
    frequentConditions: 'Warm dry days (22-28°C) paired with cool humid nights (85-95% RH).',
    frequentConditionsBn: 'উষ্ণ শুষ্ক দিন এবং রাতে ঠান্ডা ও উচ্চ আর্দ্রতা।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'CABI Invasive Species Compendium & BARI Horticulture Guide',
    similarDiseases: [
      {
        name: 'Rose Downy Mildew',
        nameBn: 'গোলাপের ডাউনি মিলডিউ',
        difference: 'Downy mildew grows underneath the leaf with purplish patches, while Powdery Mildew is prominent white powder on top.',
        differenceBn: 'ডাউনি মিলডিউ পাতার নিচের পিঠে বেগুনি ছোপ হিসেবে থাকে, পাউডারি মিলডিউ ওপরের পিঠে সাদা পাউডার।'
      }
    ],
    symptoms: [
      'White powdery talc-like coating on upper leaf surfaces',
      'Distortion, puckering, and upward curling of young tender leaves',
      'Stunted shoots and deformed or unopening flower buds'
    ],
    symptomsBn: [
      'পাতার ওপরের পিঠে ট্যালকম পাউডারের মতো সাদা আবরণ',
      'কচি পাতা কুঁকড়ে যাওয়া এবং অসম বৃদ্ধি',
      'শাখা খর্বাকৃতি হওয়া এবং কুঁড়ি না ফোটা'
    ],
    causes: [
      'Shady growing locations lacking air circulation',
      'Overuse of succulent tender growth from excess nitrogen',
      'Dry weather with high ambient night humidity'
    ],
    causesBn: [
      'ছায়াযুক্ত স্যাঁতসেঁতে স্থানে গোলাপ গাছ রোপণ',
      'অতিরিক্ত ইউরিয়া সারের কারণে কচি ডালপালা নরম ও সংবেদনশীল হওয়া',
      'শুষ্ক দিন ও রাতে আর্দ্র আবহাওয়া'
    ],
    organicTreatment: [
      'Spray baking soda solution (5g sodium bicarbonate + 2ml horticultural oil/L)',
      'Spray dilute milk spray (1 part milk : 9 parts water) in direct sunlight',
      'Prune infected terminal shoots and discard in sealed bags'
    ],
    organicTreatmentBn: [
      'বেকিং সোডা দ্রবণ (প্রতি লিটার পানিতে ৫ গ্রাম বেকিং সোডা ও ২ মিলি তেল) স্প্রে করুন',
      'রোদের সময় দুধ ও পানির মিশ্রণ (১:৯ অনুপাতে) স্প্রে করুন',
      'আক্রান্ত কচি ডগা কেটে পলিথিনে ভরে ফেলে দিন'
    ],
    chemicalTreatment: [
      'Spray Wettable Sulfur 80 WP (2g/L) or Dinocap (1ml/L) or Propiconazole 25 EC (1ml/L)'
    ],
    chemicalTreatmentBn: [
      'সালফার ৮০ ডব্লিউপি (২ গ্রাম/লিটার) অথবা প্রপিকোনাজল ২৫ ইসি (১ মিলি/লিটার) স্প্রে করুন'
    ],
    prevention: [
      'Locate rose beds in full morning sun to dry foliage rapidly',
      'Space plants at least 75 cm apart for free air circulation',
      'Avoid high-nitrogen fertilizer late in the growing cycle'
    ],
    preventionBn: [
      'সকালের পর্যাপ্ত রোদ পায় এমন স্থানে গাছ লাগান',
      'গাছ থেকে গাছের দূরত্ব অন্তত ৭৫ সেমি রাখুন',
      'অতিরিক্ত নাইট্রোজেন সার পরিহার করুন'
    ]
  },
  {
    id: 'rose-dieback',
    name: 'Rose Stem Blight & Dieback',
    nameBn: 'গোলাপের ডাইব্যাক রোগ',
    scientificName: 'Lasiodiplodia theobromae / Botrytis cinerea',
    causalOrganism: 'Lasiodiplodia theobromae & Phomopsis spp.',
    confirmedHosts: ['Rosa spp.'],
    plantSpecies: 'Rose (গোলাপ)',
    plantSpeciesBn: 'গোলাপ',
    cropType: 'flower',
    category: 'fungal',
    categoryBn: 'ছত্রাকজনিত',
    severity: 'High',
    severityBn: 'তীব্র',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Rose cane browning and dying backwards from pruned tip towards root',
    healthyImageUrl: imgHealthyRose,
    healthyImageAlt: 'Healthy green vigorous rose cane',
    visualCharacteristics: 'Blackened or brown cane tip dying backwards downwards toward the root graft with withering scorched leaves.',
    visualCharacteristicsBn: 'ছাঁটা ডাল বা ডগার ওপর থেকে কালো-বাদামি হয়ে নিচের দিকে শুকিয়ে পচন ছড়িয়ে পড়া।',
    earlySymptoms: 'Water-soaked brown discoloration at the cut surface of pruned stem.',
    earlySymptomsBn: 'ছাঁটা ডালের মুখে জলছাপের মতো বাদামি দাগ।',
    advancedSymptoms: 'Progressive downward black rot of cane; attached leaves shrivel, turn brown, and remain hanging dead.',
    advancedSymptomsBn: 'কাণ্ডের ওপর থেকে নিচ পর্যন্ত কালো হয়ে পচে যাওয়া এবং পাতা শুকিয়ে গাছে ঝুলে থাকা।',
    affectedLeafSurface: 'Foliage attached to infected canes; entire vascular system of cane',
    affectedLeafSurfaceBn: 'আক্রান্ত ডালের সব পাতা ও কাণ্ডের পরিবহন কলা',
    spreadMechanism: 'Pruning with unsterilized rusty tools during humid rainy weather',
    spreadMechanismBn: 'বর্ষায় ভোঁতা বা জীবাণুযুক্ত কাঁচি দিয়ে ডাল কাটার মাধ্যমে ছত্রাক প্রবেশ করে',
    frequentConditions: 'Humid monsoon months, pruning during wet weather, weak root systems.',
    frequentConditionsBn: 'বর্ষাকাল, বৃষ্টির দিনে ডাল কাটা এবং দুর্বল শিকড়।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Floriculture Guide & ICAR Rose Pathology',
    similarDiseases: [
      {
        name: 'Rose Stem Canker',
        nameBn: 'গোলাপের কাণ্ডের ক্যাংকার',
        difference: 'Canker produces localized oval lesions on the stem, whereas Dieback kills the cane continuously from tip downward.',
        differenceBn: 'ক্যাংকારે কাণ্ডে নির্দিষ্ট ডিম্বাকৃতি ঘা তৈরি হয়, ডাইব্যাকে ওপর থেকে একটানা নিচের দিকে ডাল শুকিয়ে যায়।'
      }
    ],
    symptoms: [
      'Blackish-brown discoloration starting at cut ends and progressing downward',
      'Desiccation and sudden browning of foliage on affected canes',
      'Entire branch turns brittle and dies'
    ],
    symptomsBn: [
      'কাটা অংশ থেকে বাদামি-কালো দাগ শুরু হয়ে নিচের দিকে নেমে আসা',
      'আক্রান্ত ডালের পাতা হঠাৎ তামাটে হয়ে শুকিয়ে যাওয়া',
      'পুরো ডাল শুকিয়ে শক্ত ও ভঙ্গুর হয়ে মরে যাওয়া'
    ],
    causes: [
      'Pruning stems straight across instead of at a 45-degree angle',
      'Failing to paste fungicide over fresh cut wounds',
      'Poor drainage causing root suffocation and weakness'
    ],
    causesBn: [
      'ডাল ৪৫ ডিগ্রি কোণে না কেটে সমান করে কাটা ফলে পানি জমে থাকা',
      'কাটা মুখে ছত্রাকনাশকের প্রলেপ না দেওয়া',
      'গোড়ায় পানি জমে শিকড় দুর্বল হওয়া'
    ],
    organicTreatment: [
      'Cut affected canes 5 cm below the advancing black margin into healthy white pith',
      'Immediately apply fresh turmeric paste or Bordeaux paste on the freshly cut wound',
      'Improve soil aeration by gently loosening topsoil and adding well-rotted vermicompost'
    ],
    organicTreatmentBn: [
      'আক্রান্ত ডালের কালো অংশের অন্তত ৫ সেমি নিচে সবুজ ও সুস্থ অংশ থেকে কেটে ফেলুন',
      'কাটা মুখে তাৎক্ষণিকভাবে কাঁচা হলুদের পেস্ট বা বোর্দো পেস্টের প্রলেপ দিন',
      'টবের মাটি হালকা নিড়িয়ে দিন এবং ভার্মিকম্পোস্ট প্রয়োগ করুন'
    ],
    chemicalTreatment: [
      'Apply Copper Oxychloride 50 WP paste directly to cut wounds; spray Carbendazim 50 WP (2g/L) across all foliage'
    ],
    chemicalTreatmentBn: [
      'কাটা মুখে কপার অক্সিক্লোরাইড ৫০ ডব্লিউপি পেস্ট লাগান এবং কার্বেনডাজিম ৫০ ডব্লিউপি (২ গ্রাম/লিটার) স্প্রে করুন'
    ],
    prevention: [
      'Always prune rose canes at a 45-degree angle 6 mm above an outward-facing bud on sunny dry days',
      'Dip pruning shears in sanitizer after cutting each bush',
      'Ensure pots have unobstructed drainage holes'
    ],
    preventionBn: [
      'সবসময় শুকনো দিনে কুঁড়ির ওপর ৪৫ ডিগ্রি কোণে ঢালু করে ডাল কাটুন',
      'প্রতিটি গাছ কাটার পর কাঁচি স্যানিটাইজার দিয়ে মুছে নিন',
      'টবের ড্রেনেজ ব্যবস্থা শতভাগ কার্যকর রাখুন'
    ]
  },

  // --- MARIGOLD (গাঁদা) ---
  {
    id: 'marigold-alternaria-blight',
    name: 'Marigold Alternaria Leaf Blight',
    nameBn: 'গাঁদা ফুলের পাতা ও পুষ্পমুকুল পোড়া রোগ',
    scientificName: 'Alternaria tagetica',
    causalOrganism: 'Alternaria tagetica (Fungus)',
    confirmedHosts: ['Tagetes erecta (African marigold)', 'Tagetes patula (French marigold)'],
    plantSpecies: 'Marigold (গাঁদা)',
    plantSpeciesBn: 'গাঁদা',
    cropType: 'flower',
    category: 'fungal',
    categoryBn: 'ছত্রাকজনিত',
    severity: 'High',
    severityBn: 'তীব্র',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Marigold pinnate leaves with brown target-spot lesions and dried blackened flower buds',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy bright green marigold foliage',
    visualCharacteristics: 'Dark brown to black necrotic spots with concentric rings on pinnate leaflets; flower buds rot and turn black.',
    visualCharacteristicsBn: 'পাতার খণ্ডে গাড় বাদামি বা কালো রঙের চক্রাকার রিংযুক্ত দাগ এবং কুঁড়িতে পচন।',
    earlySymptoms: 'Tiny brown pinhead flecks on lower older marigold leaves.',
    earlySymptomsBn: 'নিচের পুরোনো পাতায় ক্ষুদ্র বাদামি পিনহেড দাগ।',
    advancedSymptoms: 'Spots merge, leaflets scorch and curl; unopened buds rot, and blossoms show brown necrotic petal decay.',
    advancedSymptomsBn: 'দাগ মিলে পাতা খড়ের মতো পুড়ে যায়, কুঁড়ি কালো হয়ে পচে এবং ফুল ঝরে যায়।',
    affectedLeafSurface: 'Leaflets, petioles, calyx, and flower petals',
    affectedLeafSurfaceBn: 'পাতা, বোঁটা, বোঁটার চারপাশ ও ফুলের পাপড়ি',
    spreadMechanism: 'Seed-borne mycelium and wind/splashing water conidia',
    spreadMechanismBn: 'আক্রান্ত বীজ এবং বাতাসের আর্দ্রতায় ভেসে আসা স্পোর',
    frequentConditions: 'Overhead sprinkler irrigation, continuous damp winter fog, temperatures 20-26°C.',
    frequentConditionsBn: 'কুয়াশাচ্ছন্ন শীতের সকাল, ওপর থেকে সেচ এবং ২০-২৬ ডিগ্রি সেলসিয়াস তাপমাত্রা।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Floriculture Research Division & CABI',
    similarDiseases: [
      {
        name: 'Marigold Cercospora Spot',
        nameBn: 'গাঁদার সারকোস্পোরা দাগ',
        difference: 'Cercospora causes smaller circular spots without concentric target-board rings.',
        differenceBn: 'সারকোস্পোরাতে ছোট গোলাকার দাগ হয়, অল্টারনারিয়ার মতো চক্রাকার রিং থাকে না।'
      }
    ],
    symptoms: [
      'Brown circular target-board spots on foliage',
      'Leaves dry up from bottom of the plant moving upward',
      'Bud rot causing black unopened flower heads'
    ],
    symptomsBn: [
      'পাতায় চক্রাকার বলয়যুক্ত বাদামি পোড়া দাগ',
      'গাছের নিচের দিক থেকে পাতা শুকিয়ে ওপরের দিকে ওঠা',
      'কুঁড়ি কালো হয়ে পচে ফুল ফোটা বন্ধ হওয়া'
    ],
    causes: [
      'Planting infected seeds or seedlings without treatment',
      'Frequent overhead sprinkling wetting blossoms and foliage',
      'Crowded planting in moist flower beds'
    ],
    causesBn: [
      'শোধন ছাড়া আক্রান্ত নার্সারির চারা রোপণ',
      'ফুলের ওপর সরাসরি পানি ছিটানো',
      'ঘন করে চারা রোপণ'
    ],
    organicTreatment: [
      'Remove and destroy diseased lower leaves and rotted buds early in the season',
      'Spray garlic-chilli extract or trichoderma bio-fungicide slurry',
      'Mulch soil around marigold base to prevent soil splash'
    ],
    organicTreatmentBn: [
      'নিচের আক্রান্ত পাতা ও নষ্ট কুঁড়ি তুলে ধ্বংস করুন',
      'ট্রাইকোডার্মা জৈব ছত্রাকনাশক স্প্রে করুন',
      'গাছের গোড়ায় খড় দিয়ে মালচিং করে মাটির ছিটা আটকান'
    ],
    chemicalTreatment: [
      'Spray Iprodione 50 WP (Rovral, 2g/L) or Mancozeb 75 WP (2.5g/L) every 10-12 days'
    ],
    chemicalTreatmentBn: [
      'রোভরাল ৫০ ডব্লিউপি (২ গ্রাম/লিটার) অথবা ম্যানকোজেব (২.৫ গ্রাম/লিটার) ১০ দিন পর পর স্প্রে করুন'
    ],
    prevention: [
      'Treat marigold seeds with Thiram (2g/kg seed) before nursery sowing',
      'Water only at root level using drip or furrow irrigation',
      'Maintain 30x30 cm spacing between plants'
    ],
    preventionBn: [
      'থাইরাম দিয়ে বীজ শোধন করে চারা তৈরি করুন',
      'গাছের গোড়ায় পানি দিন, ফুলের ওপর নয়',
      'গাছ থেকে গাছের দূরত্ব ৩০x৩০ সেমি বজায় রাখুন'
    ]
  },

  // --- CHRYSANTHEMUM (চন্দ্রমল্লিকা) ---
  {
    id: 'chrysanthemum-white-rust',
    name: 'Chrysanthemum White Rust',
    nameBn: 'চন্দ্রমল্লিকার সাদা মরিচা রোগ (হোয়াইট রাস্ট)',
    scientificName: 'Puccinia horiana',
    causalOrganism: 'Puccinia horiana (Quarantine rust fungus)',
    confirmedHosts: ['Chrysanthemum morifolium', 'Chrysanthemum indicum'],
    plantSpecies: 'Chrysanthemum (চন্দ্রমল্লিকা)',
    plantSpeciesBn: 'চন্দ্রমল্লিকা',
    cropType: 'flower',
    category: 'fungal',
    categoryBn: 'ছত্রাকজনিত',
    severity: 'High',
    severityBn: 'তীব্র',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Chrysanthemum leaf with yellow dimples on top and raised waxy white-buff pustules on underside',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy lobed chrysanthemum leaf',
    visualCharacteristics: 'Pale green-to-yellow sunken spots (1-5 mm) on upper leaf surface, corresponding to prominent raised, chalky-white or buff waxy pustules on the lower leaf surface.',
    visualCharacteristicsBn: 'পাতার ওপরের পিঠে ছোট হলুদ খাঁজ এবং ঠিক বিপরীত পিঠে (নিচে) স্পষ্ট ফোলা সাদাটে-গোলাপি মোমের মতো ফোস্কা বা পুস্টুল।',
    earlySymptoms: 'Dimpled yellow spots on the upper leaf surface.',
    earlySymptomsBn: 'পাতার ওপরের পিঠে হালকা হলুদ ছোট দাগ।',
    advancedSymptoms: 'Pustules turn waxy white to pinkish-buff on the lower surface; leaves brown, curl, and die completely.',
    advancedSymptomsBn: 'নিচের ফোস্কাগুলো মোমের মতো সাদা-গোলাপি হয়; পাতা তামাটে হয়ে শুকিয়ে ঝরে পড়ে।',
    affectedLeafSurface: 'Lower leaf surface primarily for pustules; upper for chlorotic depression',
    affectedLeafSurfaceBn: 'পুস্টুলের জন্য প্রধানত পাতার নিচের পিঠ; ওপরে হলুদ গর্তের মতো দাগ',
    spreadMechanism: 'Airborne basidiospores discharged in high humidity; contaminated cuttings',
    spreadMechanismBn: 'উচ্চ আর্দ্রতায় বাতাসে স্পোর ছড়ায় এবং আক্রান্ত কাটিং চারার মাধ্যমে ছড়ায়',
    frequentConditions: 'Cool temperatures (15-20°C) with 96-100% relative humidity and free moisture for 5 hours.',
    frequentConditionsBn: '১৫-২০ ডিগ্রি সেলসিয়াস তাপমাত্রা, ৯৬-১০০% আর্দ্রতা এবং পাতা অন্তত ৫ ঘণ্টা ভেজা থাকা।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'EPPO Global Database & BARI Floriculture division',
    similarDiseases: [
      {
        name: 'Chrysanthemum Brown Rust',
        nameBn: 'চন্দ্রমল্লিকার বাদামি মরিচা',
        difference: 'Brown rust produces dark brown powdery pustules on both surfaces, whereas White Rust produces prominent chalky white waxy cushions underneath.',
        differenceBn: 'ব্রাউন রাস্টে কালচে বাদামি গুঁড়ো ফোস্কা হয়, হোয়াইট রাস্টে নিচের পিঠে চকচকে সাদা মোমের মতো পুস্টুল তৈরি হয়।'
      }
    ],
    symptoms: [
      'Yellow depressions on upper leaf surfaces',
      'Chalky-white to buff raised pustules on leaf undersides',
      'Premature foliage death and stunted flowering'
    ],
    symptomsBn: [
      'পাতার ওপরের পিঠে হলুদ খাঁজকাটা দাগ',
      'পাতার নিচের পিঠে ফোলা সাদা মোমের মতো পুস্টুল',
      'পাতা শুকিয়ে মরে যাওয়া এবং ফুল ফোটা ব্যাহত হওয়া'
    ],
    causes: [
      'Introduction of infected nursery cuttings',
      'Damp greenhouse or polyhouse without adequate ventilation',
      'Water droplets remaining on leaves overnight'
    ],
    causesBn: [
      'সংক্রমিত কাটিং থেকে তৈরি চারা ব্যবহার',
      'গ্রিনহাউস বা পলিহাউসে বাতাস চলাচলের ঘাটতি',
      'রাতে পাতার ওপর পানির বিন্দু জমে থাকা'
    ],
    organicTreatment: [
      'Immediately isolate and bag affected plants; burn all leaves with pustules',
      'Increase greenhouse exhaust ventilation to maintain relative humidity below 80%',
      'Dip mother stock cuttings in hot water (46°C for 5 minutes) before planting'
    ],
    organicTreatmentBn: [
      'আক্রান্ত গাছ আলাদা করে আক্রান্ত সব পাতা পুড়িয়ে ফেলুন',
      'বাতাস চলাচলের ব্যবস্থা করে আর্দ্রতা ৮০% এর নিচে রাখুন',
      'কাটিং চারা লাগানোর আগে ৪৬ ডিগ্রি সেলসিয়াস গরম পানিতে ৫ মিনিট চুবিয়ে শোধন করুন'
    ],
    chemicalTreatment: [
      'Spray Hexaconazole 5 EC (1ml/L) or Azoxystrobin + Difenoconazole (0.75ml/L) thoroughly on leaf undersides'
    ],
    chemicalTreatmentBn: [
      'হেক্সাকোনাজল ৫ ইসি (১ মিলি/লিটার) অথবা অ্যামিস্টার টপ (০.৭৫ মিলি/লিটার) পাতার নিচে ভালো করে স্প্রে করুন'
    ],
    prevention: [
      'Source certified disease-free cuttings only',
      'Install drip irrigation and avoid overhead wetting',
      'Avoid high-density planting to promote rapid leaf drying'
    ],
    preventionBn: [
      'রোগমুক্ত প্রত্যায়িত নার্সারি থেকে কাটিং সংগ্রহ করুন',
      'ওপর থেকে পানি ছিটানো বন্ধ করে ড্রিপ সেচ দিন',
      'গাছের ফাঁকা জায়গা বাড়িয়ে পাতা দ্রুত শুকানোর সুযোগ দিন'
    ]
  },

  // --- HIBISCUS (জবা) ---
  {
    id: 'hibiscus-leaf-curl',
    name: 'Hibiscus Leaf Curl Virus',
    nameBn: 'জবা ফুলের পাতা কুঁকড়ানো রোগ (লিফ কার্ল)',
    scientificName: 'Hibiscus leaf curl virus (HLCuV / Begomovirus)',
    causalOrganism: 'Hibiscus leaf curl virus (Begomovirus transmitted by Whiteflies)',
    confirmedHosts: ['Hibiscus rosa-sinensis', 'Hibiscus syriacus', 'Malvaceae family'],
    plantSpecies: 'Hibiscus (জবা)',
    plantSpeciesBn: 'জবা',
    cropType: 'flower',
    category: 'viral',
    categoryBn: 'ভাইরাসজনিত',
    severity: 'Moderate',
    severityBn: 'মাঝারি',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Hibiscus leaves severely curled upward with enations and swollen vein thickenings',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy broad green hibiscus foliage',
    visualCharacteristics: 'Upward curling of leaves, vein thickening, leaf enations (leafy outgrowths on leaf undersides), and severe flower budding drop.',
    visualCharacteristicsBn: 'পাতা ওপরের দিকে কুঁকড়ে যাওয়া, শিরা পুরু বা স্ফীত হওয়া, পাতার নিচে উপবৃদ্ধি (এনেশন) এবং ফুলের কুঁড়ি ঝরে পড়া।',
    earlySymptoms: 'Vein clearing and mild upward cupping of youngest apical leaves.',
    earlySymptomsBn: 'কচি পাতার প্রধান শিরা হালকা হলুদ হয়ে ওপরের দিকে খাঁজ খাওয়া।',
    advancedSymptoms: 'Severe leaf deformation, enations on underside veins, brittle crinkled leaves, and failure to bloom.',
    advancedSymptomsBn: 'পাতা ভীষণ কুঁকড়ে শক্ত ও ভঙ্গুর হওয়া, পাতার নিচের শিরায় ছোট পাতার মতো উপবৃদ্ধি এবং ফুল না ফোটা।',
    affectedLeafSurface: 'Vascular veins and entire newly emerging leaf blades',
    affectedLeafSurfaceBn: 'পাতার শিরা উপশিরা এবং কচি ডগার সব পাতা',
    spreadMechanism: 'Transmitted persistently by whitefly (Bemisia tabaci) and vegetative grafting',
    spreadMechanismBn: 'সাদা মাছি (Bemisia tabaci) এবং জোড় কলমের মাধ্যমে ছড়ায়',
    frequentConditions: 'Hot dry weather (28-35°C) favoring whitefly populations.',
    frequentConditionsBn: 'উষ্ণ শুষ্ক আবহাওয়া ও তাপমাত্রা ২৮-৩৫ ডিগ্রি সেলসিয়াস যা সাদা মাছির বিস্তার ঘটায়।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Plant Pathology Division & Virus Research Journals',
    similarDiseases: [
      {
        name: 'Hibiscus Spider Mite Damage',
        nameBn: 'জবার লাল মাকড় ক্ষতি',
        difference: 'Spider mites cause fine yellow stippling and webbing on leaf undersides without vein enations or viral puckering.',
        differenceBn: 'মাকড়ে পাতার ওপর সূক্ষ্ম হলুদ ফুটকি ও তলায় জাল হয়, কিন্তু শিরার উপবৃদ্ধি বা ভাইরাসের মতো কুঁকড়ে যায় না।'
      }
    ],
    symptoms: [
      'Upward rolling and curling of leaves',
      'Thickened, swollen, dark green veins',
      'Small leafy outgrowths (enations) under the main veins'
    ],
    symptomsBn: [
      'পাতা ওপরের দিকে বাটির মতো কুঁকড়ে যাওয়া',
      'শিরার অস্বাভাবিক স্ফীতি ও গাঢ় সবুজ হওয়া',
      'পাতার নিচের প্রধান শিরায় ছোট উপবৃদ্ধি বের হওয়া'
    ],
    causes: [
      'Whitefly vector feeding on sap and injecting virus particles',
      'Using cuttings from infected mother plants',
      'Presence of alternate weed hosts nearby (Parthenium, Ageratum)'
    ],
    causesBn: [
      'সাদা মাছি রস চুষে ভাইরাস সংক্রমিত করা',
      'আক্রান্ত গাছ থেকে ডাল কেটে কলম তৈরি করা',
      'আশেপাশে আগাছার উপস্থিতি যেখানে সাদা মাছি বংশবৃদ্ধি করে'
    ],
    organicTreatment: [
      'Spray insecticidal soap or neem oil (5 ml/L) weekly to kill whitefly nymphs',
      'Install yellow sticky traps (30 cm above canopy) to catch adult whiteflies',
      'Prune severely curled shoots and spray seaweed fertilizer to promote healthy growth'
    ],
    organicTreatmentBn: [
      'সাদা মাছি দমনে নিম তেল (৫ মিলি/লিটার) প্রতি সপ্তাহে স্প্রে করুন',
      'গাছের কাছে হলুদ আঠালো ফাঁদ (Yellow Sticky Trap) স্থাপন করুন',
      'কুঁকড়ানো ডাল ছাঁটাই করে গাছের রোগ প্রতিরোধ শক্তি বাড়াতে জৈব সার দিন'
    ],
    chemicalTreatment: [
      'Control whitefly vectors by spraying Acetamiprid 20 SP (0.5g/L) or Imidacloprid 17.8 SL (0.5ml/L)'
    ],
    chemicalTreatmentBn: [
      'সাদা মাছি দমনে এসিটামিপ্রিড ২০ এসপি (০.৫ গ্রাম/লিটার) অথবা ইমিডাক্লোপ্রিড (০.৫ মিলি/লিটার) স্প্রে করুন'
    ],
    prevention: [
      'Eradicate host weeds surrounding garden plants',
      'Inspect incoming nursery hibiscus bushes for leaf curl and whitefly eggs',
      'Spray preventive systemic neem formulation at early vegetative stage'
    ],
    preventionBn: [
      'বাগানের চারপাশের আগাছা পরিষ্কার রাখুন',
      'নার্সারি থেকে কেনার সময় কুঁকড়ানো পাতা ও সাদা মাছি পরীক্ষা করুন',
      'প্রাথমিক অবস্থায় নিয়মিত নিমযুক্ত জৈব কীটনাশক প্রয়োগ করুন'
    ]
  },

  // --- DAHLIA (ডালিয়া) ---
  {
    id: 'dahlia-smut-entyloma',
    name: 'Dahlia Leaf Smut (Entyloma)',
    nameBn: 'ডালিয়া পাতার স্মাট রোগ',
    scientificName: 'Entyloma dahliae',
    causalOrganism: 'Entyloma dahliae (Basidiomycete smut fungus)',
    confirmedHosts: ['Dahlia pinnata', 'Dahlia variabilis'],
    plantSpecies: 'Dahlia (ডালিয়া)',
    plantSpeciesBn: 'ডালিয়া',
    cropType: 'flower',
    category: 'fungal',
    categoryBn: 'ছত্রাকজনিত',
    severity: 'Moderate',
    severityBn: 'মাঝারি',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Dahlia foliage with pale greenish-yellow circular spots turning brown with papery dry centers',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy lush dahlia foliage',
    visualCharacteristics: 'Circular or angular pale greenish-white to yellow spots (2-8 mm) on leaves that turn brown, dry, and papery, often dropping out to leave shot-holes.',
    visualCharacteristicsBn: 'পাতায় গোল বা কৌণিক ফ্যাকাসে সাদাটে-হলুদ ছোপ যা পরবর্তীতে বাদামি ও শুকিয়ে কাগজের মতো হয়ে খসে পড়ে।',
    earlySymptoms: 'Pale yellowish-green spots on lower leaves.',
    earlySymptomsBn: 'নিচের পাতায় হালকা হলুদাভ-সবুজ দাগ।',
    advancedSymptoms: 'Centers of spots turn light brown and brittle; heavily spotted leaves wither and dry prematurely.',
    advancedSymptomsBn: 'দাগের মাঝখান বাদামি ও ভঙ্গুর হয়ে ফুটো হয়ে যায় এবং পাতা শুকিয়ে যায়।',
    affectedLeafSurface: 'Both surfaces of lower and mid-canopy leaves',
    affectedLeafSurfaceBn: 'নিচের ও মাঝের পাতার উভয় পিঠ',
    spreadMechanism: 'Soil-borne chlamydospores splashed onto leaves by irrigation or heavy rain',
    spreadMechanismBn: 'মাটিতে থাকা স্পোর সেচ বা বৃষ্টির পানির ছিটার মাধ্যমে পাতায় পৌঁছায়',
    frequentConditions: 'Damp cool weather (16-22°C) with dense foliage canopy.',
    frequentConditionsBn: 'স্যাঁতসেঁতে ঠান্ডা আবহাওয়া (১৬-২২ ডিগ্রি) ও ঘন পাতার ঝাড়।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Horticulture & RHS Plant Diseases',
    similarDiseases: [
      {
        name: 'Dahlia Bacterial Leaf Spot',
        nameBn: 'ডালিয়ার ব্যাকটেরিয়াল পাতার দাগ',
        difference: 'Bacterial leaf spot has water-soaked translucent halos, whereas Entyloma smut develops papery dry grayish centers.',
        differenceBn: 'ব্যাকটেরিয়াল দাগে জলছাপযুক্ত তৈলাক্ত ভাব থাকে, স্মাটে কাগজের মতো শুষ্ক ধূসর কেন্দ্র তৈরি হয়।'
      }
    ],
    symptoms: [
      'Pale green to yellowish circular spots that turn light brown and papery',
      'Spots may dry up and drop out leaving shot-hole perforations',
      ' premature withering of lower leaves during winter bloom'
    ],
    symptomsBn: [
      'হালকা সবুজ বা হলুদ দাগ যা শুকিয়ে কাগজের মতো পাতলা বাদামি হয়ে যায়',
      'দাগের কেন্দ্র খসে গিয়ে পাতায় ফুটো বা শট-হোল তৈরি হওয়া',
      'শীতের মৌসুমে নিচের পাতা অকালে শুকিয়ে যাওয়া'
    ],
    causes: [
      'Infected tubers carrying dormant fungal spores',
      'Splashing soil from forceful hose watering onto lower leaves',
      'Planting dahlias in the same bed consecutively without crop rotation'
    ],
    causesBn: [
      'আক্রান্ত টিউবার বা কন্দ ব্যবহার',
      'পাইপ দিয়ে জোরে পানি দেওয়ার ফলে মাটির কণা পাতায় ছিটকে পড়া',
      'একই টব বা জমিতে বারবার ডালিয়া চাষ'
    ],
    organicTreatment: [
      'Pluck off and destroy the first spotted leaves as soon as noticed',
      'Mulch soil bed with rice straw or dry leaves to create a physical barrier against soil splashing',
      'Spray copper hydroxide or bordeaux mixture lightly'
    ],
    organicTreatmentBn: [
      'দাগ দেখা মাত্র নিচের প্রথম আক্রান্ত পাতাগুলো ছিঁড়ে নষ্ট করুন',
      'মাটির ওপর খড়ের মালচিং দিন যাতে পানির ছিটায় জীবাণু না ছড়ায়',
      'বোর্দো মিশ্রণ বা কপার হাইড্রোক্সাইড হালকা করে স্প্রে করুন'
    ],
    chemicalTreatment: [
      'Spray Mancozeb 75 WP (2g/L) or Carbendazim 12% + Mancozeb 63% WP (Saaf, 2g/L)'
    ],
    chemicalTreatmentBn: [
      'ম্যানকোজেব ৭৫ ডব্লিউপি (২ গ্রাম/লিটার) অথবা সাফ (২ গ্রাম/লিটার) স্প্রে করুন'
    ],
    prevention: [
      'Disinfect dahlia tubers before planting in 0.2% Carbendazim solution for 30 minutes',
      'Water at soil level without wetting lower foliage',
      'Provide stakes and prune lower 15 cm of foliage to improve ventilation'
    ],
    preventionBn: [
      'কন্দ লাগানোর আগে কার্বেনডাজিম দ্রবণে ৩০ মিনিট ভিজিয়ে শোধন করুন',
      'পাতায় পানি না দিয়ে সরাসরি গোড়ায় পানি দিন',
      'গাছের নিচের ১৫ সেমি পর্যন্ত পাতা ছেঁটে রোদ-বাতাস নিশ্চিত করুন'
    ]
  },

  // --- GERBERA (জারবেরা) ---
  {
    id: 'gerbera-leaf-spot-alternaria',
    name: 'Gerbera Alternaria Leaf Spot',
    nameBn: 'জারবেরার অল্টারনারিয়া পাতার দাগ',
    scientificName: 'Alternaria gerberae',
    causalOrganism: 'Alternaria gerberae (Fungus)',
    confirmedHosts: ['Gerbera jamesonii (Transvaal daisy)'],
    plantSpecies: 'Gerbera (জারবেরা)',
    plantSpeciesBn: 'জারবেরা',
    cropType: 'flower',
    category: 'fungal',
    categoryBn: 'ছত্রাকজনিত',
    severity: 'Moderate',
    severityBn: 'মাঝারি',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Gerbera rosette leaves with circular brown-to-black necrotic lesions with target rings',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy large green gerbera rosette leaf',
    visualCharacteristics: 'Circular to oval dark brown necrotic lesions with distinct concentric target rings and yellow halos on broad basal rosette leaves.',
    visualCharacteristicsBn: 'গোড়ার চওড়া পাতায় গাঢ় বাদামি চক্রাকার বলয়যুক্ত দাগ ও চারপাশে হলুদ বলয়।',
    earlySymptoms: 'Small brown specks on outer older leaves of the basal rosette.',
    earlySymptomsBn: 'গোড়ার পুরোনো পাতার কিনারায় ছোট বাদামি ফোঁটা।',
    advancedSymptoms: 'Lesions enlarge to 10-25 mm, coalesce into large blights, flower stalks decay and break.',
    advancedSymptomsBn: 'দাগগুলো ১০-২৫ মিমি পর্যন্ত বড় হয়ে একীভূত হয় এবং ফুলের বোঁটায় পচন ধরে ভেঙে পড়ে।',
    affectedLeafSurface: 'Basal rosette leaves, floral scapes (stalks)',
    affectedLeafSurfaceBn: 'গোড়ার রোজেট পাতা ও ফুলের লম্বা বোঁটা',
    spreadMechanism: 'Airborne spores and irrigation water splash in polytunnels',
    spreadMechanismBn: 'বাতাসের স্পোর এবং পলিহাউসে সেচের পানির ছিটার মাধ্যমে',
    frequentConditions: 'Warm humid conditions (22-28°C), standing water in the crown of the plant.',
    frequentConditionsBn: 'উষ্ণ আর্দ্র আবহাওয়া এবং গাছের ক্রাউন বা গোড়ায় পানি জমে থাকা।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Floriculture Division & CABI',
    similarDiseases: [
      {
        name: 'Gerbera Powdery Mildew',
        nameBn: 'জারবেরার পাউডারি মিলডিউ',
        difference: 'Powdery mildew produces white talc powder, while Alternaria causes dark brown necrotic sunken target spots.',
        differenceBn: 'পাউডারি মিলডিউতে সাদা পাউডার জমে, কিন্তু অল্টারনারিয়াতে বাদামি চক্রাকার ক্ষত তৈরি হয়।'
      }
    ],
    symptoms: [
      'Concentric target-like brown spots on large rosette leaves',
      'Yellow chlorotic halos surrounding lesions',
      'Infection extending to flower stalks causing blossoms to drop'
    ],
    symptomsBn: [
      'পাতায় চক্রাকার বলয়যুক্ত বাদামি দাগ',
      'দাগের চারপাশে হলুদ বলয়',
      'ফুলের বোঁটায় দাগ পড়ে ফুল খসে পড়া'
    ],
    causes: [
      'Planting gerbera crown too deep below soil level',
      'Drenching water directly into the plant crown',
      'Poor drainage in raised beds or containers'
    ],
    causesBn: [
      'জারবেরার ক্রাউন বা বাড়ন্ত ডগা মাটির খুব গভীরে রোপণ করা',
      'গাছের ঠিক মাথার ওপর পানি ঢালা',
      'টব বা বেডে পানি নিষ্কাশন ব্যবস্থা খারাপ হওয়া'
    ],
    organicTreatment: [
      'Remove older spotted leaves carefully without damaging the central crown',
      'Spray neem oil or diluted cow-urine ferment as a protective barrier',
      'Ensure raised bed soil is loose, sandy-loam and drains freely'
    ],
    organicTreatmentBn: [
      'গোড়ার আক্রান্ত পুরোনো পাতা সাবধানে কেটে ফেলে দিন',
      'নিম তেল স্প্রে করে পাতায় সুরক্ষামূলক আবরণ তৈরি করুন',
      'বেডের মাটি বেলে-দোআঁশ ও সুনিষ্কাশিত রাখুন'
    ],
    chemicalTreatment: [
      'Spray Difenoconazole 25 EC (Score, 0.5ml/L) or Iprodione 50 WP (2g/L)'
    ],
    chemicalTreatmentBn: [
      'ডাইফেনোকোনাজল ২৫ ইসি (স্কোর, ০.৫ মিলি/লিটার) অথবা রোভরাল (২ গ্রাম/লিটার) স্প্রে করুন'
    ],
    prevention: [
      'Always plant gerbera with the crown 1 cm above soil surface level',
      'Water strictly through drip tubes under the leaf canopy',
      'Disinfect polyhouse structures and tools between crop cycles'
    ],
    preventionBn: [
      'চারা রোপণের সময় ক্রাউন মাটির ১ সেমি ওপরে রাখুন',
      'ড্রিপ সেচের মাধ্যমে পাতার নিচে পানি দিন',
      'পলিহাউস ও চাষের সরঞ্জাম নিয়মিত জীবাণুমুক্ত রাখুন'
    ]
  },

  // --- GLADIOLUS (গ্ল্যাডিওলাস) ---
  {
    id: 'gladiolus-fusarium-corm-rot',
    name: 'Gladiolus Fusarium Wilt & Corm Rot',
    nameBn: 'গ্ল্যাডিওলাসের ফিউসারিয়াম উইল্ট ও কন্দ পচন রোগ',
    scientificName: 'Fusarium oxysporum f. sp. gladioli',
    causalOrganism: 'Fusarium oxysporum f. sp. gladioli (Soil-borne fungus)',
    confirmedHosts: ['Gladiolus grandiflorus', 'Iris spp.', 'Crocus spp.'],
    plantSpecies: 'Gladiolus (গ্ল্যাডিওলাস)',
    plantSpeciesBn: 'গ্ল্যাডিওলাস',
    cropType: 'flower',
    category: 'fungal',
    categoryBn: 'ছত্রাকজনিত',
    severity: 'High',
    severityBn: 'তীব্র',
    imageUrl: imgBlightGeneral,
    imageAlt: 'Gladiolus sword-like leaves yellowing from tip downward, curved and drooping, with brown corm rot',
    healthyImageUrl: imgHealthy,
    healthyImageAlt: 'Healthy upright sword-shaped gladiolus leaves',
    visualCharacteristics: 'Progressive yellowing of leaf tips spreading down the sword-shaped leaf blade; leaves curve or droop; brown dry rot inside corms.',
    visualCharacteristicsBn: 'তলোয়ারের মতো পাতার ডগা থেকে হলুদ হয়ে নিচের দিকে নামা, পাতা বেকে যাওয়া এবং কন্দের ভেতরে বাদামি পচন।',
    earlySymptoms: 'Yellowing of outer older leaf blades beginning at the tips.',
    earlySymptomsBn: 'বাইরের পুরোনো পাতার ডগা থেকে হলুদ হওয়া শুরু।',
    advancedSymptoms: 'Foliage turns bronze and withers; flower spikes fail to emerge or open deformed; corm shows brown concentric vascular discoloration.',
    advancedSymptomsBn: 'পাতা তামাটে হয়ে নুয়ে পড়ে; ফুলের স্টিক বের হয় না এবং কন্দের ভেতর বাদামি দাগের রিং দেখা যায়।',
    affectedLeafSurface: 'Entire sword foliage due to vascular blockage; corm root plate',
    affectedLeafSurfaceBn: 'পরিবহন কলা বন্ধ হওয়ার কারণে সম্পূর্ণ পাতা এবং কন্দের তলা',
    spreadMechanism: 'Infected seed corms/cormels and long-persisting chlamydospores in soil',
    spreadMechanismBn: 'আক্রান্ত কন্দ এবং মাটিতে দীর্ঘদিন বেঁচে থাকা স্পোরের মাধ্যমে',
    frequentConditions: 'Warm soil (25-30°C) with waterlogging or excessive nitrogen fertilization.',
    frequentConditionsBn: 'উষ্ণ মাটি (২৫-৩০ ডিগ্রি), জলাবদ্ধতা ও অতিরিক্ত নাইট্রোজেন সার।',
    verificationStatus: 'Verified (BARI/BRRI/CABI/EPPO)',
    referenceSource: 'BARI Floriculture Division (Jessore Floriculture Hub) & CABI',
    similarDiseases: [
      {
        name: 'Gladiolus Stromatinia Dry Rot',
        nameBn: 'গ্ল্যাডিওলাসের স্ট্রোমাটিনিয়া শুষ্ক পচন',
        difference: 'Stromatinia produces tiny black sclerotia on neck and corm, while Fusarium produces brown vascular ring discolouration.',
        differenceBn: 'স্ট্রোমাটিনিয়াতে ছোট কালো দানাদার স্কেলেরোশিয়া থাকে, ফিউসারিয়ামে কন্দের শিরায় বাদামি বলয় তৈরি হয়।'
      }
    ],
    symptoms: [
      'Leaf tips yellow and die backwards toward the stem',
      'Curved, sickle-shaped drooping foliage',
      'Stunted flowering spike with missing florets',
      'Brown rot on storage corms'
    ],
    symptomsBn: [
      'পাতার ডগা হলুদ হয়ে নিচের দিকে শুকিয়ে আসা',
      'পাতা বাঁকা বা কাস্তের মতো নুয়ে পড়া',
      'ফুলের স্টিক খর্বাকৃতি হওয়া ও ফুল কম ফোটা',
      'কন্দে বাদামি শুষ্ক পচন'
    ],
    causes: [
      'Planting infected corms without fungicide dip',
      'Heavy poorly drained clay soils in winter',
      'High soil temperatures during planting time'
    ],
    causesBn: [
      'ছত্রাকনাশক দিয়ে শোধন না করে কন্দ রোপণ',
      'ভারী এঁটেল মাটিতে পানি নিষ্কাশনের অভাব',
      'রোপণের সময় মাটির উচ্চ তাপমাত্রা'
    ],
    organicTreatment: [
      'Solarize planting beds under clear polythene for 4-6 weeks before planting',
      'Apply Trichoderma viride enriched compost (50g/plant) into planting furrows',
      'Rogue out and discard wilting plants with their entire corm ball'
    ],
    organicTreatmentBn: [
      'লাগানোর আগে পলিথিন দিয়ে মাটি ৪-৬ সপ্তাহ সোলারাইজেশন বা জীবাণুমুক্ত করুন',
      'রোপণের গর্তে ট্রাইকোডার্মা সমৃদ্ধ জৈব সার দিন',
      'আক্রান্ত নেতিয়ে পড়া গাছ কন্দসহ তুলে ফেলে দিন'
    ],
    chemicalTreatment: [
      'Pre-soak corms in Carbendazim 50 WP (2g/L) for 30 minutes; drench furrow with Thiophanate-methyl (1.5g/L)'
    ],
    chemicalTreatmentBn: [
      'রোপণের আগে কন্দ কার্বেনডাজিম ৫০ ডব্লিউপি (২ গ্রাম/লিটার) পানিতে ৩০ মিনিট ভিজিয়ে রাখুন'
    ],
    prevention: [
      'Never plant gladiolus in the same field for at least 3 years',
      'Sort and reject all corms with sunken brown basal spots before cold storage',
      'Plant on 15 cm high raised beds to ensure rapid root drainage'
    ],
    preventionBn: [
      'একই জমিতে পর পর ৩ বছর গ্ল্যাডিওলাস চাষ করবেন না',
      'সংরক্ষণের আগে দাগযুক্ত বা পচা কন্দ বাছাই করে বাদ দিন',
      '১৫ সেমি উঁচু বেড তৈরি করে কন্দ রোপণ করুন'
    ]
  }
];
