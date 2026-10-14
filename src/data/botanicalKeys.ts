import { BotanicalFeatures } from '../types';

/**
 * Verified Botanical Morphology Profiles for Asian Crops and Species
 * Rigorously defines: Leaf Shape, Margin/Edges, Apex/Tip, Venation, Texture, Taxonomic Diagnostic Markers, and Lookalike Comparisons.
 */
export const BOTANICAL_SPECIES_REGISTRY: Record<string, BotanicalFeatures & { plantNameEn: string; plantNameBn: string; scientificName: string }> = {
  // 1. CITRUS / LEMON / LIME
  citrus: {
    plantNameEn: 'Lemon / Lime (Citrus limon / aurantifolia)',
    plantNameBn: 'লেবু / পাতিলেবু (Citrus limon)',
    scientificName: 'Citrus limon (L.) Osbeck',
    leafShapeEn: 'Elliptic to oblong-ovate with rounded base',
    leafShapeBn: 'ডিম্বাকার থেকে উপবৃত্তাকার ফলক ও গোলাকার গোড়া',
    marginEn: 'Crenulate to sub-entire (subtle rounded notches)',
    marginBn: 'হালকা ঢেউখেলানো বা প্রায় মসৃণ কিনারা',
    apexTipEn: 'Acute to slightly obtuse, often mucronate with glandular tip',
    apexTipBn: 'সূঁচালো থেকে সামান্য ভোঁতা, ক্ষুদ্র গ্রন্থিযুক্ত ডগা',
    venationEn: 'Pinnate-reticulate with fine netted secondary veins',
    venationBn: 'শাখান্বিত জালিকাকার শিরাবিন্যাস',
    textureEn: 'Coriaceous (leathery), glossy dark green upper surface with translucent pellucid oil glands',
    textureBn: 'চামড়ার মতো শক্ত (লেদারি), তেলগ্রন্থিযুক্ত চকচকে গাঢ় সবুজ',
    diagnosticMarkerEn: 'Distinctive winged/sub-winged petiole and translucent aromatic citrus oil dots visible against sunlight',
    diagnosticMarkerBn: 'পাখনাবিশিষ্ট বোঁটা (Winged petiole) এবং আলোর বিপরীতে দৃশ্যমান সুগন্ধি সাইট্রাস তেলগ্রন্থি',
    lookalikeComparisonEn: 'Distinguished from Guava by winged petiole, alternate phyllotaxy, and translucent citrus oil dots (Guava has strictly opposite leaves with prominent raised rib-like veins and unwinged petiole).',
    lookalikeComparisonBn: 'পেয়ারা পাতার বিপরীতমুখী জোড়া ও পাঁজরের মতো শিরার বিপরীতে লেবু পাতার পাখনাবিশিষ্ট বোঁটা ও তেলগ্রন্থি নিশ্চিতভাবে পার্থক্য গড়ে তোলে।'
  },

  // 2. GUAVA
  guava: {
    plantNameEn: 'Guava (Psidium guajava)',
    plantNameBn: 'পেয়ারা (Psidium guajava)',
    scientificName: 'Psidium guajava L.',
    leafShapeEn: 'Oblong-elliptic to oval, symmetrical blade',
    leafShapeBn: 'আয়তাকার-উপবৃত্তাকার থেকে ডিম্বাকার ফলক',
    marginEn: 'Entire (strictly smooth, completely non-serrated), slightly recurved',
    marginBn: 'সম্পূর্ণ মসৃণ (খাঁজহীন) কিনারা',
    apexTipEn: 'Obtuse to shortly acute with a tiny mucronate tip',
    apexTipBn: 'ভোঁতা বা ক্ষুদ্র সূঁচালো ডগা',
    venationEn: 'Brochidodromous pinnate with 10–20 pairs of prominent parallel secondary veins looping near margin',
    venationBn: '১০-২০ জোড়া অত্যন্ত সুস্পষ্ট পাঁজরের মতো উঁচু সমান্তরাল পার্শ্বশিরা',
    textureEn: 'Semi-coriaceous, stiff, glabrous above and finely pubescent (downy hairs) beneath',
    textureBn: 'পুরু ও শক্ত, উপরের পিঠ মসৃণ কিন্তু নিচের পিঠ সূক্ষ্ম রোমশ',
    diagnosticMarkerEn: 'Strictly opposite leaf phyllotaxy, deeply impressed secondary veins giving rib-like surface, and 4-angled young twigs',
    diagnosticMarkerBn: 'শাখায় পাতার বিপরীতমুখী জোড়া (Opposite), পাঁজরের মতো গভীর খাঁজকাটা শিরা ও চারকোনা কচি ডাল',
    lookalikeComparisonEn: 'Distinguished from Lemon by strictly opposite leaves, deeply indented rib-like secondary veins, and lack of winged petiole or oil glands.',
    lookalikeComparisonBn: 'লেবু থেকে বিপরীতমুখী বিন্যাস, তেলগ্রন্থিহীনতা এবং পাঁজরের মতো খাঁজকাটা সমান্তরাল শিরা দিয়ে পেয়ারা নিশ্চিত করা যায়।'
  },

  // 3. BEAN
  bean: {
    plantNameEn: 'Country Bean / Hyacinth Bean (Lablab purpureus)',
    plantNameBn: 'শিম / বরবটি (Lablab purpureus)',
    scientificName: 'Lablab purpureus (L.) Sweet / Phaseolus vulgaris',
    leafShapeEn: 'Trifoliate compound leaf (terminal leaflet rhomboid-ovate, 2 lateral leaflets asymmetrical with oblique base)',
    leafShapeBn: '৩টি ফলকযুক্ত ত্রিপত্রক যৌগিক পাতা (মাঝেরটি প্রতিসম, পাশের দুটি অপ্রতিসম)',
    marginEn: 'Entire (completely smooth margin)',
    marginBn: 'মসৃণ ও খাঁজহীন কিনারা',
    apexTipEn: 'Acuminate (slender tapering point)',
    apexTipBn: 'লম্বা সূঁচালো শীর্ষভাগ (অ্যাকুমিনেট)',
    venationEn: 'Palmatinerved at leaflet base with 3 primary veins, then reticulate',
    venationBn: 'ফলকের গোড়ায় ৩টি প্রধান শিরা থেকে বিস্তৃত জালিকাকার শিরাবিন্যাস',
    textureEn: 'Thin, herbaceous, papery, softly pubescent with micro-hairs',
    textureBn: 'পাতলা, কোমল ও ক্ষুদ্র রোমযুক্ত পৃষ্ঠ',
    diagnosticMarkerEn: 'Trifoliate architecture with pulvinate swollen petiole base, distinct stipules and paired stipels',
    diagnosticMarkerBn: 'ত্রিপত্রক ফলক, বোঁটার গোড়ায় স্ফীত পালভিনাস ও খুদে উপপত্র (Stipules/Stipels)',
    lookalikeComparisonEn: 'Distinguished from Jute by compound trifoliate leaf architecture and smooth entire margins (Jute is simple and sharply serrated with basal bristles).',
    lookalikeComparisonBn: 'পাটের একক করাত-খাঁজকাটা ও শুঙ্গযুক্ত পাতার বিপরীতে শিমের ৩টি ফলকযুক্ত যৌগিক পাতা ও মসৃণ কিনারা প্রধান পার্থক্য।'
  },

  // 4. JUTE
  jute: {
    plantNameEn: 'Jute (Corchorus capsularis / olitorius)',
    plantNameBn: 'পাট / দেশী বা তোষা পাট (Corchorus)',
    scientificName: 'Corchorus capsularis L. / Corchorus olitorius L.',
    leafShapeEn: 'Simple ovate-lanceolate to oblong-elliptic blade with rounded base',
    leafShapeBn: 'একক ডিম্বাকার-বল্লমাকার ফলক ও গোলাকার গোড়া',
    marginEn: 'Sharply and finely serrate (saw-toothed) with two elongated basal hair-like bristles',
    marginBn: 'তীক্ষ্ণ করাত-খাঁজকাটা কিনারা এবং গোড়ায় ২টি বিশিষ্ট শুঙ্গ (Basal hair bristles)',
    apexTipEn: 'Long acuminate (sharply pointed apex)',
    apexTipBn: 'লম্বা সূঁচালো শীর্ষ (অ্যাকুমিনেট)',
    venationEn: '3 to 5 basal veins radiating from petiole insertion, then pinnately branched',
    venationBn: 'বোঁটার সংযোগস্থল থেকে ৩-৫টি মূল শিরা ছড়ানো এবং শাখান্বিত',
    textureEn: 'Thin, membranous, soft, glabrous with sparse fine hairs on main veins',
    textureBn: 'পাতলা, কোমল ও নরম ফলক',
    diagnosticMarkerEn: 'Two distinct filiform, thread-like basal appendages/bristles (আকর্ষী / শুঙ্গ) at the lower blade margin',
    diagnosticMarkerBn: 'পাতার ফলকের গোড়ায় দুটি বিশিষ্ট চুল বা সুতার মতো শুঙ্গ (Basal bristles / appendages)',
    lookalikeComparisonEn: 'Distinguished from Bean by simple (not compound) leaf and saw-toothed margins with basal bristles; distinguished from Guava by serrated edges and alternate arrangement.',
    lookalikeComparisonBn: 'শিমের ৩টি ফলকযুক্ত পাতার বিপরীতে পাটের একক পাতা, করাত-খাঁজ এবং গোড়ার অনন্য শুঙ্গ একে নিশ্চিতভাবে আলাদা করে।'
  },

  // 5. TOMATO
  tomato: {
    plantNameEn: 'Tomato (Solanum lycopersicum)',
    plantNameBn: 'টমেটো (Solanum lycopersicum)',
    scientificName: 'Solanum lycopersicum L.',
    leafShapeEn: 'Odd-pinnately divided compound leaf with ovate-elliptic, deeply lobed or dentate leaflets',
    leafShapeBn: 'বিজোড়-পক্ষল যৌগিক পাতা, গভীরভাবে খণ্ডিত খাঁজকাটা উপপত্রসহ',
    marginEn: 'Irregularly dentate, serrate, or deeply lobed',
    marginBn: 'অনিয়মিত খাঁজকাটা ও খণ্ডিত কিনারা',
    apexTipEn: 'Acute to acuminate',
    apexTipBn: 'সূঁচালো ডগা',
    venationEn: 'Pinnate-reticulate with prominent midveins on each leaflet',
    venationBn: 'প্রতিটি ফলকে স্পষ্ট মধ্যশিরাসহ জালিকাকার শিরাবিন্যাস',
    textureEn: 'Soft, pubescent, covered with glandular trichomes producing green resinous residue and pungent solanaceous aroma',
    textureBn: 'নরম, রোমশ এবং গ্রন্থিযুক্ত রোম (যা স্পর্শে সবুজ দাগ ও তীব্র সুগন্ধ তৈরি করে)',
    diagnosticMarkerEn: 'Intercalary mini-leaflets along the rachis and dense aromatic glandular hairs',
    diagnosticMarkerBn: 'পত্রদণ্ডে বড় ফলকের মাঝে মাঝে ছোট খুদে পাতা এবং তীব্র সুগন্ধযুক্ত রোম',
    lookalikeComparisonEn: 'Distinguished from Potato by more deeply dissected/lobed leaflets and dense pungent glandular trichomes.',
    lookalikeComparisonBn: 'আলুর চেয়ে টমেটোর পাতা অনেক বেশি গভীরভাবে খণ্ডিত এবং তীব্র সুগন্ধি গ্রন্থিযুক্ত রোমে ঢাকা।'
  },

  // 6. POTATO
  potato: {
    plantNameEn: 'Potato (Solanum tuberosum)',
    plantNameBn: 'আলু (Solanum tuberosum)',
    scientificName: 'Solanum tuberosum L.',
    leafShapeEn: 'Interruptedly pinnate compound leaf with 3-4 pairs of large ovate lateral leaflets interspersed with tiny folioles',
    leafShapeBn: 'অনিয়মিত পক্ষল যৌগিক পাতা, বড় ডিম্বাকার ফলকের মাঝে ছোট উপপত্রসহ',
    marginEn: 'Entire to slightly undulate or wavy, never deeply lobed',
    marginBn: 'মসৃণ থেকে সামান্য ঢেউখেলানো কিনারা (টমেটোর মতো গভীর খাঁজ নেই)',
    apexTipEn: 'Abruptly acuminate to acute',
    apexTipBn: 'হঠাৎ সূঁচালো ডগা',
    venationEn: 'Pinnate-reticulate, prominent beneath',
    venationBn: 'শাখান্বিত জালিকাকার শিরা',
    textureEn: 'Herbaceous, moderately pubescent with short simple hairs, less glandular than tomato',
    textureBn: 'কোমল, হালকা রোমশ এবং টমেটোর চেয়ে কম আঠালো',
    diagnosticMarkerEn: 'Interrupted pinnation with large rounded lateral leaflets and smaller secondary leaflets, smoother margin than tomato',
    diagnosticMarkerBn: 'বড় ও ছোট ফলকের পর্যায়ক্রমিক বিন্যাস এবং টমেটোর চেয়ে মসৃণ কিনারা',
    lookalikeComparisonEn: 'Distinguished from Tomato by entire/wavy (not deeply lobed) leaflet margins and larger, broader ovate terminal leaflets.',
    lookalikeComparisonBn: 'টমেটোর পাতার খাঁজের চেয়ে আলুর পাতার কিনারা অনেক বেশি মসৃণ ও ফলকগুলো বড়।'
  },

  // 7. BRINJAL / EGGPLANT
  brinjal: {
    plantNameEn: 'Brinjal / Eggplant (Solanum melongena)',
    plantNameBn: 'বেগুন (Solanum melongena)',
    scientificName: 'Solanum melongena L.',
    leafShapeEn: 'Large, simple, broadly ovate to oblong-elliptic with asymmetrical cordate base',
    leafShapeBn: 'বিশাল, একক, চওড়া ডিম্বাকার ফলক ও অপ্রতিসম গোড়া',
    marginEn: 'Coarsely sinuate-lobed or wavy with 3-5 shallow rounded lobes',
    marginBn: 'মোটা ঢেউখেলানো বা অগভীর খাঁজযুক্ত কিনারা (Sinuate-lobed)',
    apexTipEn: 'Obtuse to acute',
    apexTipBn: 'ভোঁতা থেকে হালকা সূঁচালো',
    venationEn: 'Pinnate with heavy secondary ribs, sometimes bearing prickly spines along midrib',
    venationBn: 'পুরু মধ্যশিরা ও পার্শ্বশিরা, কখনো মধ্যশিরায় কাঁটা থাকে',
    textureEn: 'Velvety, densely covered with grayish-green stellate (star-shaped) hairs, soft and thick to the touch',
    textureBn: 'মখমলের মতো নরম, ধূসর-সবুজ তারকা-আকৃতির সূক্ষ্ম রোমে (Stellate hairs) ঢাকা',
    diagnosticMarkerEn: 'Massive velvety broad leaf with sinuate-lobed margins, dense star-hairs, and stout fleshy petiole',
    diagnosticMarkerBn: 'বিশাল মখমলে পাতা, ঢেউখেলানো অগভীর খাঁজ, ঘন ধূসর রোম এবং পুরু রসালো বোঁটা',
    lookalikeComparisonEn: 'Distinguished from Tomato and Potato by simple (non-compound), much larger velvety leaf with sinuate lobes.',
    lookalikeComparisonBn: 'টমেটো বা আলুর যৌগিক পাতার বিপরীতে বেগুনের পাতা একক, অনেক বড় ও মখমলের মতো রোমশ।'
  },

  // 8. CHILLI / PEPPER
  chilli: {
    plantNameEn: 'Chilli / Green Pepper (Capsicum annuum)',
    plantNameBn: 'মরিচ / কাঁচামরিচ (Capsicum annuum)',
    scientificName: 'Capsicum annuum L.',
    leafShapeEn: 'Simple, ovate to elliptic-lanceolate with tapering base',
    leafShapeBn: 'একক ডিম্বাকার থেকে বল্লমাকার ফলক ও সরু গোড়া',
    marginEn: 'Entire (strictly smooth margin, never lobed)',
    marginBn: 'সম্পূর্ণ মসৃণ কিনারা (কোনো খাঁজ বা ঢেউ নেই)',
    apexTipEn: 'Acuminate to sharply acute',
    apexTipBn: 'তীক্ষ্ণ সূঁচালো ডগা',
    venationEn: 'Pinnate-camptodromous with 4–8 pairs of ascending secondary veins',
    venationBn: 'উর্ধ্বমুখী শাখান্বিত শিরাবিন্যাস',
    textureEn: 'Glabrous (smooth), shiny deep green, thin to chartaceous',
    textureBn: 'মসৃণ, চকচকে গাঢ় সবুজ ও পাতলা',
    diagnosticMarkerEn: 'Glabrous glossy lanceolate blade with entire margin and solitary or paired nodal arrangement',
    diagnosticMarkerBn: 'চকচকে মসৃণ বল্লমাকার ফলক, খাঁজহীন কিনারা ও তীক্ষ্ণ সূঁচালো ডগা',
    lookalikeComparisonEn: 'Distinguished from Brinjal by smooth, hairless, smaller lanceolate leaves with zero lobing.',
    lookalikeComparisonBn: 'বেগুনের বিশাল রোমশ পাতার বিপরীতে মরিচের পাতা অনেক ছোট, মসৃণ, খাঁজহীন ও চকচকে।'
  },

  // 9. RICE / PADDY
  rice: {
    plantNameEn: 'Rice / Paddy (Oryza sativa)',
    plantNameBn: 'ধান (Oryza sativa)',
    scientificName: 'Oryza sativa L.',
    leafShapeEn: 'Linear, elongated grass-like blade with parallel margins and sheathing base',
    leafShapeBn: 'লম্বা রৈখিক ঘাসজাতীয় ফলক ও সমান্তরাল কিনারা',
    marginEn: 'Scabrid / serrulate with microscopic upward-pointing silica teeth (sharp to touch)',
    marginBn: 'খসখসে ধারালো কিনারা (সিলিকাযুক্ত সূক্ষ্ম করাত দাঁত)',
    apexTipEn: 'Long acute to attenuate',
    apexTipBn: 'অতিমাত্রায় সূঁচালো ও দীর্ঘায়িত ডগা',
    venationEn: 'Strictly parallel venation running length of blade',
    venationBn: 'সম্পূর্ণ সমান্তরাল শিরাবিন্যাস',
    textureEn: 'Rigid, chartaceous, scabrous with rough silica granules along surface',
    textureBn: 'শক্ত, পাতলা ও খসখসে পৃষ্ঠতল',
    diagnosticMarkerEn: 'Presence of a conspicuous membranous ligule (10–25 mm) and hairy sickle-shaped auricles clasping the stem',
    diagnosticMarkerBn: 'কাণ্ডের সংযোগস্থলে সুস্পষ্ট পাতলা লিগিউল (Ligule) এবং কাণ্ড জড়িয়ে ধরা রোমশ অরিকল (Auricles)',
    lookalikeComparisonEn: 'Distinguished from Wheat by longer, split membranous ligule and silica-rough blade texture; distinguished from Corn by narrow blade width (1–2 cm vs 5–10 cm).',
    lookalikeComparisonBn: 'গমের চেয়ে বড় লিগিউল ও বেশি খসখসে কিনারা এবং ভুট্টার চেয়ে অনেক সরু পাতা দিয়ে ধান নিশ্চিত করা যায়।'
  },

  // 10. WHEAT
  wheat: {
    plantNameEn: 'Wheat (Triticum aestivum)',
    plantNameBn: 'গম (Triticum aestivum)',
    scientificName: 'Triticum aestivum L.',
    leafShapeEn: 'Linear-lanceolate, flat elongated blade',
    leafShapeBn: 'রৈখিক-বল্লমাকার সমতল দীর্ঘ ফলক',
    marginEn: 'Smooth to finely scabrous along upper margin',
    marginBn: 'হালকা খসখসে সমান্তরাল কিনারা',
    apexTipEn: 'Acute, tapering to fine tip',
    apexTipBn: 'সরু সূঁচালো ডগা',
    venationEn: 'Parallel venation with prominent central longitudinal groove',
    venationBn: 'সমান্তরাল শিরাবিন্যাস ও মাঝের খাঁজ',
    textureEn: 'Glabrous to sparsely pubescent, softer and less abrasive than rice',
    textureBn: 'ধানের চেয়ে তুলনামূলক নরম ও কম খসখসে',
    diagnosticMarkerEn: 'Distinct hairy claw-like clasping auricles at the junction of the sheath and blade with a short membranous ligule',
    diagnosticMarkerBn: 'বোঁটা ও ফলকের সংযোগস্থলে কাণ্ড জড়িয়ে রাখা বাঁকানো রোমশ অরিকল (Clasping auricles)',
    lookalikeComparisonEn: 'Distinguished from Rice by shorter ligule, prominent clasping auricles, and softer blade feel.',
    lookalikeComparisonBn: 'ধানের চেয়ে ছোট লিগিউল ও কাণ্ড আঁকড়ে ধরা রোমশ অরিকল দিয়ে গম নিশ্চিতভাবে আলাদা করা যায়।'
  },

  // 11. CORN / MAIZE
  corn: {
    plantNameEn: 'Corn / Maize (Zea mays)',
    plantNameBn: 'ভুট্টা (Zea mays)',
    scientificName: 'Zea mays L.',
    leafShapeEn: 'Broadly linear-lanceolate, arched blade (5–10 cm wide, 50–100 cm long)',
    leafShapeBn: 'অতি প্রশস্ত রৈখিক-বল্লমাকার বাঁকানো ফলক (৫-১০ সেমি চওড়া)',
    marginEn: 'Undulate, wavy with fine scabrid edges',
    marginBn: 'ঢেউখেলানো কিনারা',
    apexTipEn: 'Acuminate, drooping',
    apexTipBn: 'সূঁচালো ও কিছুটা নিম্নমুখী ডগা',
    venationEn: 'Parallel venation with a very prominent, wide white-to-light-green central midrib',
    venationBn: 'সমান্তরাল শিরাবিন্যাস এবং অত্যন্ত প্রশস্ত স্পষ্ট সাদাটে মধ্যশিরা',
    textureEn: 'Coarse, thick, pubescent to glabrescent with prominent longitudinal ridges',
    textureBn: 'পুরু, খসখসে ও স্পষ্ট সমান্তরাল খাঁজযুক্ত',
    diagnosticMarkerEn: 'Massive wide blade with thick white midrib, wavy margins, and prominent translucent ligule',
    diagnosticMarkerBn: 'বিশাল চওড়া ফলক, সাদা মোটা মধ্যশিরা ও ঢেউখেলানো কিনারা',
    lookalikeComparisonEn: 'Distinguished from Rice and Wheat by massive leaf width (5–10 cm wide) and prominent thick white central midrib.',
    lookalikeComparisonBn: 'ধান বা গমের ১-২ সেমি সরু পাতার তুলনায় ভুট্টার পাতা ৫-১০ সেমি চওড়া এবং স্পষ্ট সাদা মধ্যশিরাযুক্ত।'
  },

  // 12. MANGO
  mango: {
    plantNameEn: 'Mango (Mangifera indica)',
    plantNameBn: 'আম (Mangifera indica)',
    scientificName: 'Mangifera indica L.',
    leafShapeEn: 'Lanceolate to oblong-elliptic, spirally arranged on branches',
    leafShapeBn: 'বল্লমাকার থেকে আয়তাকার-উপবৃত্তাকার, ডালে সর্পিলাকার বিন্যস্ত',
    marginEn: 'Undulate, distinctly wavy, entire',
    marginBn: 'স্পষ্ট ঢেউখেলানো ও মসৃণ কিনারা',
    apexTipEn: 'Acuminate to acute',
    apexTipBn: 'তীক্ষ্ণ সূঁচালো ডগা',
    venationEn: 'Pinnate-reticulate with 15–30 pairs of prominent secondary lateral veins',
    venationBn: '১৫-৩০ জোড়া স্পষ্ট শাখান্বিত শিরাবিন্যাস',
    textureEn: 'Coriaceous (stiff leathery), deep shiny green above, paler beneath, emitting resinous terpentine aroma when crushed',
    textureBn: 'চামড়ার মতো শক্ত ও পুরু, চকচকে গাঢ় সবুজ এবং রজনযুক্ত তীব্র সুগন্ধি',
    diagnosticMarkerEn: 'Spirally clustered twigs, swollen petiole base, strongly undulate (wavy) margins, and resinous aroma',
    diagnosticMarkerBn: 'ডালের মাথায় গুচ্ছবদ্ধ বিন্যাস, বোঁটার গোড়ায় স্ফীতি, স্পষ্ট ঢেউখেলানো কিনারা ও রজনযুক্ত ঘ্রাণ',
    lookalikeComparisonEn: 'Distinguished from Guava by alternate/spiral phyllotaxy (Guava is strictly opposite) and wavy margin; distinguished from Citrus by lack of winged petiole.',
    lookalikeComparisonBn: 'পেয়ারার বিপরীতমুখী জোড়া পাতার বিপরীতে আমের পাতা ডালে সর্পিলাকার এবং কিনারা ঢেউখেলানো।'
  },

  // 13. BANANA
  banana: {
    plantNameEn: 'Banana (Musa acuminata / balbisiana)',
    plantNameBn: 'কলা (Musa paradisiaca)',
    scientificName: 'Musa paradisiaca L.',
    leafShapeEn: 'Gigantic oblong to elliptic blade with rounded to cordate base',
    leafShapeBn: 'বিশাল আয়তাকার থেকে ডিম্বাকার ফলক',
    marginEn: 'Entire, but frequently torn into parallel strips by wind pressure',
    marginBn: 'মূলত মসৃণ, তবে বাতাসে সমান্তরাল ফালিতে ছিঁড়ে যায়',
    apexTipEn: 'Obtuse to truncate',
    apexTipBn: 'ভোঁতা বা চ্যাপ্টা শীর্ষ',
    venationEn: 'Massive central midrib (costa) with closely spaced parallel transverse secondary lateral veins extending to margin',
    venationBn: 'বিশাল মধ্যশিরা থেকে আড়াআড়িভাবে সমান্তরাল বিস্তৃত শত শত পার্শ্বশিরা',
    textureEn: 'Smooth, fleshy-coriaceous, water-repellent waxy upper cuticle',
    textureBn: 'মসৃণ, রসালো ও মোমের প্রলেপযুক্ত জলরোধী পৃষ্ঠ',
    diagnosticMarkerEn: 'Enormous size, massive hollowed midrib, and parallel transverse veins that tear cleanly along lines',
    diagnosticMarkerBn: 'অতিকায় আকার, মোটা খাঁজকাটা মধ্যশিরা ও আড়াআড়ি সমান্তরাল শিরা',
    lookalikeComparisonEn: 'Distinguished from all other crops by its enormous size (1–2+ meters) and transverse parallel venation.',
    lookalikeComparisonBn: 'এর বিশাল আকার ও আড়াআড়ি সমান্তরাল শিরাবিন্যাস অন্য যেকোনো ফসল থেকে সম্পূর্ণ অনন্য।'
  },

  // 14. CUCUMBER
  cucumber: {
    plantNameEn: 'Cucumber (Cucumis sativus)',
    plantNameBn: 'শসা (Cucumis sativus)',
    scientificName: 'Cucumis sativus L.',
    leafShapeEn: 'Palmately 3-5 angled or shallowly lobed, triangular-ovate with deep cordate base',
    leafShapeBn: 'হস্তাকার ৩-৫ কোণযুক্ত বা অগভীর খণ্ডিত, গোড়ায় গভীর খাঁজসহ (Cordate)',
    marginEn: 'Denticulate / finely toothed with sharp angles',
    marginBn: 'সূক্ষ্ম দাঁতযুক্ত ও কোণবিশিষ্ট কিনারা',
    apexTipEn: 'Acute at lobe apexes',
    apexTipBn: 'কোণের মাথায় সূঁচালো শীর্ষভাগ',
    venationEn: 'Palmate venation with 5–7 main ribs radiating from petiole attachment',
    venationBn: 'বোঁটার গোড়া থেকে ৫-৭টি প্রধান শিরা হস্তাকারে বিস্তৃত',
    textureEn: 'Hispid, scabrous, covered with rough bristly prickly hairs that feel sandpaper-like',
    textureBn: 'খসখসে, শিরিষ কাগজের মতো কর্কশ ও সূক্ষ্ম কাঁটাযুক্ত রোমশ',
    diagnosticMarkerEn: 'Palmate 3-5 angled leaf with deeply indented cordate base, bristly hispid texture, and simple coiling tendrils at node',
    diagnosticMarkerBn: 'হস্তাকার ৩-৫ কোণবিশিষ্ট পাতা, কর্কশ কাঁটাময় অনুভূতি ও পর্ব থেকে নির্গত আকর্ষী (Tendril)',
    lookalikeComparisonEn: 'Distinguished from Bean by simple (not trifoliate) palmate-angled leaf and harsh prickly bristly texture.',
    lookalikeComparisonBn: 'শিমের ৩টি ফলকযুক্ত মসৃণ পাতার বিপরীতে শসার একক হস্তাকার কোণযুক্ত পাতা অত্যন্ত খসখসে ও কাঁটাময়।'
  },

  // 15. PAPAYA
  papaya: {
    plantNameEn: 'Papaya (Carica papaya)',
    plantNameBn: 'পেঁপে (Carica papaya)',
    scientificName: 'Carica papaya L.',
    leafShapeEn: 'Suborbicular massive leaf, deeply palmately 7–9 lobed with each lobe further pinnately pinnatifid',
    leafShapeBn: 'বিশাল গোলাকার পাতা, গভীরভাবে হস্তাকারে ৭-৯টি খণ্ডে বিভক্ত',
    marginEn: 'Deeply lobed with irregularly pointed sub-lobes',
    marginBn: 'গভীরভাবে খণ্ডিত ও বহুস্তরীয় সূঁচালো খাঁজযুক্ত কিনারা',
    apexTipEn: 'Acuminate at each lobe termination',
    apexTipBn: 'প্রতিটি খণ্ডের মাথায় সূঁচালো ডগা',
    venationEn: 'Prominent palmate venation radiating from central petiole sinus',
    venationBn: 'কেন্দ্র থেকে ৭-৯টি খণ্ডে বিস্তৃত স্পষ্ট মোটা শিরাবিন্যাস',
    textureEn: 'Glabrous, chartaceous, exuding white milky latex when torn or cut',
    textureBn: 'মসৃণ, পাতলা এবং ভাঙলে সাদাটে দুধের মতো কষ (Latex) বের হয়',
    diagnosticMarkerEn: 'Huge 7–9 palmately lobed leaf with long hollow tubular petiole (30–80 cm) and milky sap',
    diagnosticMarkerBn: '৭-৯টি গভীর খণ্ডে বিভক্ত পাতা, দীর্ঘ ফাঁপা নলের মতো বোঁটা এবং সাদা দুধের মতো কষ',
    lookalikeComparisonEn: 'Distinguished from all common crops by deeply palmately dissected 7–9 lobes and long hollow petiole.',
    lookalikeComparisonBn: 'গভীরভাবে ৭-৯ খণ্ডে বিভক্ত বিশালাকার পাতা ও ফাঁপা লম্বা বোঁটা পেঁপেকে সম্পূর্ণ স্বতন্ত্র করে তোলে।'
  },

  // 16. ROSE
  rose: {
    plantNameEn: 'Rose (Rosa spp.)',
    plantNameBn: 'গোলাপ (Rosa)',
    scientificName: 'Rosa spp.',
    leafShapeEn: 'Odd-pinnately compound leaf with 3, 5, or 7 ovate to elliptic leaflets',
    leafShapeBn: 'বিজোড়-পক্ষল যৌগিক পাতা, ৩, ৫ বা ৭টি ডিম্বাকার ফলকসহ',
    marginEn: 'Sharply serrate (saw-toothed) with acute upward-pointing teeth',
    marginBn: 'তীক্ষ্ণ করাত-খাঁজকাটা কিনারা (Serrate)',
    apexTipEn: 'Acute to short acuminate',
    apexTipBn: 'সূঁচালো ডগা',
    venationEn: 'Pinnate-reticulate, visible on upper surface',
    venationBn: 'শাখান্বিত জালিকাকার শিরা',
    textureEn: 'Glabrous, semi-glossy dark green, moderately stiff',
    textureBn: 'মসৃণ, ঈষৎ চকচকে গাঢ় সবুজ',
    diagnosticMarkerEn: 'Pinnate compound leaf with sharply serrate leaflets and characteristic adnate wing-like stipules fused to the petiole base',
    diagnosticMarkerBn: 'করাত-খাঁজকাটা ৩-৭টি ফলকযুক্ত পাতা এবং বোঁটার গোড়ায় ডানার মতো যুক্ত উপপত্র (Adnate stipules)',
    lookalikeComparisonEn: 'Distinguished from Bean by pinnate (3-7 leaflets with serrated margins) vs Bean trifoliate with smooth margins; distinguished from Jute by compound architecture.',
    lookalikeComparisonBn: 'শিমের মসৃণ কিনারার বিপরীতে গোলাপের ৩-৭টি ফলক ধারালো করাত-খাঁজকাটা এবং উপপত্র বোঁটায় জোড়া লাগানো।'
  }
};

/**
 * Resolves botanical features for any crop name or ID
 */
export function getBotanicalFeaturesForCrop(cropQuery: string): (BotanicalFeatures & { plantNameEn: string; plantNameBn: string; scientificName: string }) | null {
  if (!cropQuery) return null;
  const q = cropQuery.toLowerCase().trim();

  for (const [key, profile] of Object.entries(BOTANICAL_SPECIES_REGISTRY)) {
    if (
      q.includes(key) ||
      key.includes(q) ||
      profile.plantNameEn.toLowerCase().includes(q) ||
      profile.plantNameBn.includes(q) ||
      profile.scientificName.toLowerCase().includes(q)
    ) {
      return profile;
    }
  }

  // Common aliases
  if (q.includes('lemon') || q.includes('lime') || q.includes('lebu') || q.includes('লেবু')) return BOTANICAL_SPECIES_REGISTRY.citrus;
  if (q.includes('guava') || q.includes('peyara') || q.includes('পেয়ারা') || q.includes('পেয়ারা')) return BOTANICAL_SPECIES_REGISTRY.guava;
  if (q.includes('bean') || q.includes('shim') || q.includes('শিম') || q.includes('বরবটি')) return BOTANICAL_SPECIES_REGISTRY.bean;
  if (q.includes('jute') || q.includes('pat') || q.includes('পাট')) return BOTANICAL_SPECIES_REGISTRY.jute;
  if (q.includes('tomato') || q.includes('টমেটো')) return BOTANICAL_SPECIES_REGISTRY.tomato;
  if (q.includes('potato') || q.includes('alu') || q.includes('আলু')) return BOTANICAL_SPECIES_REGISTRY.potato;
  if (q.includes('brinjal') || q.includes('eggplant') || q.includes('begun') || q.includes('বেগুন')) return BOTANICAL_SPECIES_REGISTRY.brinjal;
  if (q.includes('chili') || q.includes('chilli') || q.includes('morich') || q.includes('মরিচ')) return BOTANICAL_SPECIES_REGISTRY.chilli;
  if (q.includes('rice') || q.includes('paddy') || q.includes('dhan') || q.includes('ধান')) return BOTANICAL_SPECIES_REGISTRY.rice;
  if (q.includes('wheat') || q.includes('gom') || q.includes('গম')) return BOTANICAL_SPECIES_REGISTRY.wheat;
  if (q.includes('corn') || q.includes('maize') || q.includes('bhutta') || q.includes('ভুট্টা')) return BOTANICAL_SPECIES_REGISTRY.corn;
  if (q.includes('mango') || q.includes('aam') || q.includes('আম')) return BOTANICAL_SPECIES_REGISTRY.mango;
  if (q.includes('banana') || q.includes('kola') || q.includes('কলা')) return BOTANICAL_SPECIES_REGISTRY.banana;
  if (q.includes('cucumber') || q.includes('shosha') || q.includes('শসা')) return BOTANICAL_SPECIES_REGISTRY.cucumber;
  if (q.includes('papaya') || q.includes('pepe') || q.includes('পেঁপে')) return BOTANICAL_SPECIES_REGISTRY.papaya;
  if (q.includes('rose') || q.includes('golap') || q.includes('গোলাপ')) return BOTANICAL_SPECIES_REGISTRY.rose;

  return null;
}
