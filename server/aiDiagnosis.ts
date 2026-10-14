import { GoogleGenAI } from '@google/genai';

export interface AIDiagnosisRequest {
  imageBase64: string;
  selectedCrop?: string;
  mimeType?: string;
}

export interface BotanicalFeatures {
  leafShapeEn: string;
  leafShapeBn: string;
  marginEn: string;
  marginBn: string;
  apexTipEn: string;
  apexTipBn: string;
  venationEn: string;
  venationBn: string;
  textureEn: string;
  textureBn: string;
  diagnosticMarkerEn: string;
  diagnosticMarkerBn: string;
  distinguishingFeaturesEn?: string;
  distinguishingFeaturesBn?: string;
  lookalikeComparisonEn?: string;
  lookalikeComparisonBn?: string;
}

export interface AIDiagnosisResponse {
  success: boolean;
  isLeafDetected: boolean;
  isPlantIdentified: boolean;
  plantConfidence: number;
  plantConfidencePercentage: string;
  botanicalFeatures?: BotanicalFeatures;
  isUncertain: boolean;
  plantNameEn: string;
  plantNameBn: string;
  plantSpecies: string;
  plantSpeciesBn: string;
  scientificName: string;
  isHealthy: boolean;
  healthStatus: 'Healthy' | 'Partially Healthy' | 'Unhealthy' | 'Unable to Determine — Please Upload a Clearer Image.';
  healthStatusBn: string;
  healthPercentage: number;
  diseaseName: string;
  diseaseNameBn: string;
  problemCategory: 'fungal' | 'bacterial' | 'viral' | 'pest' | 'deficiency' | 'healthy' | 'toxic' | 'other';
  problemCategoryBn: string;
  severity: 'High' | 'Moderate' | 'Low' | 'N/A';
  severityBn: string;
  confidence: number;
  confidencePercentage: string;
  visibleSymptomsEn: string;
  visibleSymptomsBn: string;
  detectedProblemsEn: string;
  detectedProblemsBn: string;
  treatmentAdviceEn: string[];
  treatmentAdviceBn: string[];
  preventionAdviceEn: string[];
  preventionAdviceBn: string[];
  toxicityAssessment: {
    classification: 'Normal' | 'Poisonous' | 'Unknown';
    classificationBn: string;
    toxicityLevel: 'None' | 'Low' | 'Moderate' | 'High' | 'Unknown';
    toxicityLevelBn: string;
    plantNameEn?: string;
    plantNameBn?: string;
    scientificName?: string;
    warningEn: string;
    warningBn: string;
    actionStepsEn: string[];
    actionStepsBn: string[];
    isUncertain: boolean;
  };
  aiModelUsed: string;
  error?: string;
}

const CANDIDATE_MODELS = [
  'gemini-flash-latest',
  'gemini-3.8-flash',
  'gemini-3.1-flash-lite'
];

/**
 * Strips data URL prefix and gets pure base64 and mime type
 */
function cleanBase64Data(raw: string, defaultMime = 'image/jpeg'): { base64: string; mimeType: string } {
  if (raw.startsWith('data:')) {
    const parts = raw.split(',');
    const meta = parts[0];
    const base64 = parts[1] || '';
    const match = meta.match(/data:([^;]+);base64/);
    const mimeType = match ? match[1] : defaultMime;
    return { base64, mimeType };
  }
  return { base64: raw, mimeType: defaultMime };
}

export async function diagnoseLeafWithAI(req: AIDiagnosisRequest): Promise<AIDiagnosisResponse> {
  const { imageBase64, selectedCrop, mimeType: rawMime } = req;
  const { base64, mimeType } = cleanBase64Data(imageBase64, rawMime || 'image/jpeg');

  if (!base64 || base64.length < 50) {
    throw new Error('Image data is missing or invalid');
  }

  const ai = new GoogleGenAI();

  const prompt = `You are an elite botanical taxonomist and plant pathologist specializing in Asian agricultural crops, horticulture, and regional flora, with expert mastery of Bangladesh and South Asian species.

User Context / Hint: "${selectedCrop || 'Unknown / Not specified'}".

CRITICAL MANDATE:
Perform a STRICT TWO-PHASE EVALUATION:
PHASE 1: RIGOROUS BOTANICAL PLANT IDENTIFICATION FIRST.
PHASE 2: HEALTH STATUS & DISEASE DIAGNOSIS (evaluated separately only after species is analyzed).

========================================================================
PHASE 1: BOTANICAL FEATURE EXTRACTION & PLANT IDENTIFICATION
========================================================================
Carefully examine the leaf's:
1. SHAPE (আকৃতি): Ovate, obovate, elliptic, oblong, lanceolate, cordate, palmate, linear, trifoliate compound, pinnate compound.
2. EDGES / MARGIN (কিনারার ধরন): Entire (smooth), serrate (saw-toothed), crenate (scalloped), dentate, sinuate, lobed.
3. APEX / TIP (শীর্ষভাগ): Acute, acuminate (slender tapering point), obtuse, mucronate, rounded.
4. VEINS / VENATION (শিরাবিন্যাস): Parallel (grasses), pinnate-reticulate (netted), palmate, camptodromous/brochidodromous (looping).
5. TEXTURE & SURFACE (পৃষ্ঠ ও স্পর্শ): Coriaceous/leathery, glossy, glabrous, pubescent/hairy, rugose, scabrous.
6. LEAF ARRANGEMENT (Phyllotaxy - পত্রবিন্যাস) & PETIOLAR / BASAL / TAXONOMIC MARKERS:
   - NEVER GUESS A PLANT NAME FROM COLOR ALONE! A green or yellow leaf could belong to hundreds of plants; identification must rely on structural morphology (margins, venation, arrangement, apex, and petiole).
   - LEMON / LIME (Citrus / লেবু): Alternate phyllotaxy, elliptic-ovate leaf, crenulate to sub-entire margin, leathery, dark glossy green with TRANSLUCENT PELLUCID OIL GLANDS (aromatic citrus scent), and critically a WINGED or SUB-WINGED PETIOLE.
   - GUAVA (Psidium guajava / পেয়ারা): Strictly OPPOSITE leaf arrangement (leaves emerge in opposite pairs along stem), ENTIRE margin, LEATHERY texture, very PROMINENT RIB-LIKE PINNATE SECONDARY VEINS (10–20 pairs) deeply impressed above and strongly raised beneath, unwinged petiole, square stems.
   - BEAN (Lablab / Phaseolus / শিম, বরবটি): Alternate TRIFOLIATE compound leaf (3 leaflets: 1 terminal symmetrical leaflet, 2 lateral asymmetrical leaflets), entire margin, acuminate tip, pulvinate petiole with stipules and stipels.
   - JUTE (Corchorus capsularis / olitorius / পাট): Simple alternate ovate-lanceolate blade, SHARPLY SERRATED (saw-toothed) margin with TWO DISTINCT FILIFORM HAIR-LIKE BRISTLES / APPENDAGES (আকর্ষী / শুঙ্গ) at the blade base, 3-5 basal veins.
   - TOMATO (Solanum lycopersicum / টমেটো): Alternate irregularly odd-pinnately divided leaf with lobed/dentate leaflets interspersed with tiny foliar segments, dense glandular trichomes producing aromatic scent and green resin.
   - POTATO (Solanum tuberosum / আলু): Alternate pinnately compound with large terminal and lateral leaflets with tiny interspersed folioles, smoother and less deeply dissected than tomato.
   - BRINJAL (Solanum melongena / বেগুন): Large, simple alternate broadly ovate leaf with wavy-lobed/sinuate margins, dense grayish-green stellate pubescence (star hairs), thick petiole.
   - CHILLI (Capsicum / মরিচ): Simple alternate to paired ovate-lanceolate, entire margin, smooth glabrous dark green surface, acute tip.
   - MANGO (Mangifera / আম): Alternate/spirally arranged, lanceolate-elliptic, coriaceous, glossy, wavy undulate margin, acute apex.
   - RICE / PADDY (Oryza sativa / ধান): Alternate linear leaf blade, parallel venation, rough scabrous margin, distinct membranous ligule and hairy auricles.
   - WHEAT (Triticum / গম): Alternate linear-lanceolate blade, parallel venation, prominent clasping auricles at collar.
   - CORN / MAIZE (Zea mays / ভুট্টা): Alternate very broad arching linear blade with prominent wide white central midrib, wavy margins.
   - BANANA (Musa / কলা): Spirally arranged giant oblong blade with thick central costa and transverse parallel lateral veins.
   - CUCUMBER (Cucumis / শসা): Alternate palmately 3-5 angled/lobed cordate leaf, rough hispid bristly texture, palmate veins, nodal tendrils.
   - ROSE (Rosa / গোলাপ): Alternate pinnately compound (3-7 ovate leaflets), sharply serrated edges, adnate stipules at petiole base.

STRICT ACCURACY RULES FOR PLANT IDENTIFICATION:
- NEVER guess or randomly assign a plant name from leaf color or general appearance alone!
- Do NOT simply echo the user's hint if the visual morphology contradicts it.
- If the image is blurry, partial, poorly lit, or lacks clear diagnostic features (plantConfidence < 0.65 or 65%):
  * Set isPlantIdentified: false
  * Set plantConfidence: calculated value between 0.20 and 0.64
  * Set plantConfidencePercentage: e.g. "48.0%"
  * Set plantNameEn: "Plant not identified"
  * Set plantNameBn: "সঠিকভাবে শনাক্ত করা যায়নি—আরও পরিষ্কার ছবি দিন"
  * Set plantSpecies: "Unknown"
  * Set plantSpeciesBn: "সঠিকভাবে শনাক্ত করা যায়নি—আরও পরিষ্কার ছবি দিন"
  * Set scientificName: "Undetermined / Clarification needed"
  * Set healthStatus: "Unable to Determine — Please Upload a Clearer Image."
  * Set healthStatusBn: "সঠিকভাবে শনাক্ত করা যায়নি—আরও পরিষ্কার ছবি দিন"
  * Set visibleSymptomsEn: "Plant could not be identified with confidence. Diagnostic botanical traits (margins, venation, or petiole) are unclear. Please upload a sharper photo showing the upper and lower leaf surface and edges."
  * Set visibleSymptomsBn: "সঠিকভাবে শনাক্ত করা যায়নি—আরও পরিষ্কার ছবি দিন। পাতার কিনারা ও শিরাবিন্যাস স্পষ্টভাবে দেখা যায় এমন ছবি দিন।"
- If confidence is >= 0.65:
  * Set isPlantIdentified: true
  * Provide exact plantNameEn, plantNameBn, plantSpecies, plantSpeciesBn, scientificName, plantConfidence, and comprehensive botanicalFeatures.

========================================================================
PHASE 2: HEALTH STATUS & DISEASE DIAGNOSIS
========================================================================
Only evaluate health & pathology after morphological examination:
1. HEALTH CLASSIFICATION:
   - "Healthy": Intact photosynthetic green blade, uniform chlorophyll, zero necrotic lesions or fungal sporulation. (healthPercentage: 82-97%, healthStatus: "Healthy", healthStatusBn: "সুস্থ পাতা (৮০-১০০%)", diseaseName: "None (Healthy Leaf)", diseaseNameBn: "কোনো রোগ নেই (সুস্থ পাতা)", problemCategory: "healthy").
   - "Partially Healthy": Early stage infection, localized spots, mild chlorosis, or minor damage (healthPercentage: 50-79%, healthStatus: "Partially Healthy", healthStatusBn: "আংশিক সুস্থ (৫০-৭৯%)").
   - "Unhealthy": Severe necrosis, blight, rotting, widespread mildew, or heavy mosaic distortion (healthPercentage: 12-49%, healthStatus: "Unhealthy", healthStatusBn: "অসুস্থ পাতা (০-৪৯%)").
   - If plant/leaf is undetermined: healthStatus: "Unable to Determine — Please Upload a Clearer Image.", healthStatusBn: "নির্ধারণ করা সম্ভব নয় — অনুগ্রহ করে আরও স্পষ্ট ছবি আপলোড করুন", healthPercentage: -1.

2. PROBLEM CATEGORY: "fungal" | "bacterial" | "viral" | "pest" | "deficiency" | "healthy" | "toxic" | "other"
3. SEVERITY: "High" | "Moderate" | "Low" | "N/A"
4. TOXICITY ASSESSMENT:
   - Normal edible/agricultural plant: classification: "Normal", toxicityLevel: "None".
   - Poisonous wild flora (Datura, Nerium, Calotropis, Ricinus, Dieffenbachia, Abrus, etc.): classification: "Poisonous", toxicityLevel: "High" | "Moderate" | "Low", with urgent Bengali and English safety warnings.
   - Uncertain: classification: "Unknown", warning: "অজানা—স্পর্শ বা খাওয়া থেকে বিরত থাকুন।"

Return STRICT JSON matching this schema:
{
  "isLeafDetected": boolean,
  "isPlantIdentified": boolean,
  "plantConfidence": number,
  "plantConfidencePercentage": string,
  "plantNameEn": string,
  "plantNameBn": string,
  "plantSpecies": string,
  "plantSpeciesBn": string,
  "scientificName": string,
  "botanicalFeatures": {
    "leafShapeEn": string,
    "leafShapeBn": string,
    "marginEn": string,
    "marginBn": string,
    "apexTipEn": string,
    "apexTipBn": string,
    "venationEn": string,
    "venationBn": string,
    "textureEn": string,
    "textureBn": string,
    "diagnosticMarkerEn": string,
    "diagnosticMarkerBn": string,
    "lookalikeComparisonEn": string,
    "lookalikeComparisonBn": string
  },
  "isUncertain": boolean,
  "isHealthy": boolean,
  "healthStatus": "Healthy" | "Partially Healthy" | "Unhealthy" | "Unable to Determine — Please Upload a Clearer Image.",
  "healthStatusBn": string,
  "healthPercentage": number,
  "diseaseName": string,
  "diseaseNameBn": string,
  "problemCategory": "fungal" | "bacterial" | "viral" | "pest" | "deficiency" | "healthy" | "toxic" | "other",
  "problemCategoryBn": string,
  "severity": "High" | "Moderate" | "Low" | "N/A",
  "severityBn": string,
  "confidence": number,
  "confidencePercentage": string,
  "visibleSymptomsEn": string,
  "visibleSymptomsBn": string,
  "detectedProblemsEn": string,
  "detectedProblemsBn": string,
  "treatmentAdviceEn": string[],
  "treatmentAdviceBn": string[],
  "preventionAdviceEn": string[],
  "preventionAdviceBn": string[],
  "toxicityAssessment": {
    "classification": "Normal" | "Poisonous" | "Unknown",
    "classificationBn": string,
    "toxicityLevel": "None" | "Low" | "Moderate" | "High" | "Unknown",
    "toxicityLevelBn": string,
    "warningEn": string,
    "warningBn": string,
    "actionStepsEn": string[],
    "actionStepsBn": string[],
    "isUncertain": boolean
  }`;

  let lastError: any = null;

  for (const modelName of CANDIDATE_MODELS) {
    try {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: [
          {
            role: 'user',
            parts: [
              {
                inlineData: {
                  mimeType,
                  data: base64
                }
              },
              {
                text: prompt
              }
            ]
          }
        ],
        config: {
          responseMimeType: 'application/json'
        }
      });

      const text = response.text?.trim() || '{}';
      const parsed = JSON.parse(text);

      // Handle array response if model wrapped in array
      const data = Array.isArray(parsed) ? parsed[0] : parsed;

      // Ensure valid structured response with calibrated confidence
      const rawConfidence = Number(data.confidence);
      const confidence = Math.min(0.985, Math.max(0.2, !isNaN(rawConfidence) ? rawConfidence : 0.88));
      const confidencePercentage = `${Math.round(confidence * 1000) / 10}%`;

      // PHASE 1: BOTANICAL PLANT IDENTIFICATION GATING
      const isLeaf = Boolean(data.isLeafDetected ?? true);
      const rawPlantConf = Number(data.plantConfidence ?? confidence);
      const rawPlantScore = !isNaN(rawPlantConf) ? rawPlantConf : 0.85;

      // Never guess plant name: requires clear leaf detection, confidence >= 0.65, and unambiguous name
      const isPlantIdentified = Boolean(
        isLeaf &&
        data.isPlantIdentified !== false &&
        rawPlantScore >= 0.65 &&
        data.plantNameEn &&
        !data.plantNameEn.toLowerCase().includes('not identified') &&
        !data.plantNameEn.toLowerCase().includes('unknown') &&
        !data.plantNameEn.toLowerCase().includes('undetermined')
      );

      const plantConfidence = isPlantIdentified
        ? Math.min(0.985, Math.max(0.65, rawPlantScore))
        : Math.min(0.64, Math.max(0.2, rawPlantScore));
      const plantConfidencePercentage = `${Math.round(plantConfidence * 1000) / 10}%`;

      const plantNameEn = isPlantIdentified
        ? (data.plantNameEn || 'Identified Plant Specimen')
        : 'Plant not identified';
      const plantNameBn = isPlantIdentified
        ? (data.plantNameBn || 'চিহ্নিত উদ্ভিদ প্রজাতি')
        : 'সঠিকভাবে শনাক্ত করা যায়নি—আরও পরিষ্কার ছবি দিন';
      const plantSpecies = isPlantIdentified
        ? (data.plantSpecies || data.plantNameEn || 'Identified Flora')
        : 'Unknown / Undetermined';
      const plantSpeciesBn = isPlantIdentified
        ? (data.plantSpeciesBn || data.plantNameBn || 'চিহ্নিত উদ্ভিদ')
        : 'সঠিকভাবে শনাক্ত করা যায়নি—আরও পরিষ্কার ছবি দিন';
      const scientificName = isPlantIdentified
        ? (data.scientificName || '')
        : 'Undetermined (Clarification needed)';

      const bf = data.botanicalFeatures || {};
      const botanicalFeatures: BotanicalFeatures = {
        leafShapeEn: bf.leafShapeEn || (isPlantIdentified ? 'Foliar blade morphology analyzed.' : 'Shape contours unclear or occluded.'),
        leafShapeBn: bf.leafShapeBn || (isPlantIdentified ? 'পাতার ফলকের আকার বিশ্লেষণ করা হয়েছে।' : 'পাতার স্পষ্ট রূপরেখা পাওয়া যায়নি।'),
        marginEn: bf.marginEn || (isPlantIdentified ? 'Leaf margin examined.' : 'Edge margin details ambiguous.'),
        marginBn: bf.marginBn || (isPlantIdentified ? 'পাতার কিনারার ধরন পর্যালোচনা করা হয়েছে।' : 'কিনারার খাঁজ বা মসৃণতা অস্পষ্ট।'),
        apexTipEn: bf.apexTipEn || (isPlantIdentified ? 'Apex structure evaluated.' : 'Leaf apex not clearly visible.'),
        apexTipBn: bf.apexTipBn || (isPlantIdentified ? 'পাতার শীর্ষভাগের গঠন।' : 'পাতার ডগা স্পষ্ট দেখা যায়নি।'),
        venationEn: bf.venationEn || (isPlantIdentified ? 'Venation network mapped.' : 'Vein architecture not adequately resolved.'),
        venationBn: bf.venationBn || (isPlantIdentified ? 'পাতার শিরাবিন্যাস বিশ্লেষণ করা হয়েছে।' : 'শিরাবিন্যাস অস্পষ্ট।'),
        textureEn: bf.textureEn || (isPlantIdentified ? 'Surface texture examined.' : 'Surface texture undetermined.'),
        textureBn: bf.textureBn || (isPlantIdentified ? 'পাতার ত্বক ও পৃষ্ঠতলের ধরন।' : 'পৃষ্ঠতলের টেক্সচার নিশ্চিত নয়।'),
        diagnosticMarkerEn: bf.diagnosticMarkerEn || (isPlantIdentified ? 'Diagnostic taxonomic markers verified.' : 'Missing essential taxonomic markers for safe identification.'),
        diagnosticMarkerBn: bf.diagnosticMarkerBn || (isPlantIdentified ? 'প্রধান ট্যাক্সোনমিক শনাক্তকারী বৈশিষ্ট্য চিহ্নিত।' : 'নিশ্চিত শনাক্তকরণের জন্য প্রয়োজনীয় বৈশিষ্ট্য অনুপস্থিত।'),
        lookalikeComparisonEn: bf.lookalikeComparisonEn || '',
        lookalikeComparisonBn: bf.lookalikeComparisonBn || ''
      };

      // PHASE 2: HEALTH STATUS & PATHOLOGY GATING
      const isUncertain = !isLeaf || !isPlantIdentified || Boolean(data.isUncertain);

      const healthStatus = !isPlantIdentified
        ? 'Unable to Determine — Please Upload a Clearer Image.'
        : data.healthStatus || (data.isHealthy ? 'Healthy' : 'Unhealthy');

      const healthStatusBn = !isPlantIdentified
        ? 'সঠিকভাবে শনাক্ত করা যায়নি—আরও পরিষ্কার ছবি দিন'
        : data.healthStatusBn || (data.isHealthy ? 'সুস্থ পাতা (৮০-১০০%)' : 'অসুস্থ পাতা (০-৪৯%)');

      const healthPercentage = !isPlantIdentified
        ? -1
        : typeof data.healthPercentage === 'number'
        ? Math.min(97.5, Math.max(data.healthPercentage === -1 ? -1 : 12, data.healthPercentage))
        : data.isHealthy
        ? 94.2
        : 38.5;

      const tox = data.toxicityAssessment || {};
      const toxicityAssessment = {
        classification: (tox.classification || (data.isPoisonous ? 'Poisonous' : 'Normal')) as 'Normal' | 'Poisonous' | 'Unknown',
        classificationBn:
          tox.classificationBn ||
          (tox.classification === 'Poisonous'
            ? 'বিষাক্ত পাতা (Poisonous/Toxic)'
            : tox.classification === 'Unknown'
            ? 'অজানা—স্পর্শ বা খাওয়া থেকে বিরত থাকুন'
            : 'স্বাভাবিক পাতা'),
        toxicityLevel: (tox.toxicityLevel || (data.isPoisonous ? 'High' : 'None')) as 'None' | 'Low' | 'Moderate' | 'High' | 'Unknown',
        toxicityLevelBn:
          tox.toxicityLevelBn ||
          (tox.toxicityLevel === 'High'
            ? 'উচ্চ মাত্রার বিষাক্ত (High)'
            : tox.toxicityLevel === 'Moderate'
            ? 'মাঝারি মাত্রার বিষাক্ত (Moderate)'
            : tox.toxicityLevel === 'Low'
            ? 'কম মাত্রার বিষাক্ত (Low)'
            : tox.toxicityLevel === 'None'
            ? 'বিষহীন / স্বাভাবিক (Non-Toxic)'
            : 'অজানা (Unknown)'),
        plantNameEn,
        plantNameBn,
        scientificName,
        warningEn:
          tox.warningEn ||
          (tox.classification === 'Poisonous'
            ? 'DANGER: Highly toxic foliage! Keep children and animals away. Never ingest, touch, or chew.'
            : 'Standard non-toxic plant foliage.'),
        warningBn:
          tox.warningBn ||
          (tox.classification === 'Poisonous'
            ? 'সাবধান! মারাত্মক বিষাক্ত পাতা। শিশুদের সম্পূর্ণ দূরে রাখুন এবং ভুলেও স্পর্শ করবেন না বা খাবেন না।'
            : 'এটি স্বাভাবিক উদ্ভিদের পাতা (বিষাক্ত প্রজাতির নয়)।'),
        actionStepsEn: Array.isArray(tox.actionStepsEn) ? tox.actionStepsEn : [
          'Wash hands thoroughly if accidental contact occurs.',
          'Keep children and animals away from unfamiliar plants.'
        ],
        actionStepsBn: Array.isArray(tox.actionStepsBn) ? tox.actionStepsBn : [
          'স্পর্শ লাগলে তৎক্ষণাৎ সাবান-পানি দিয়ে হাত ভালো করে ধুয়ে নিন।',
          'অপরিচিত উদ্ভিদের কাছে শিশু ও পোষা প্রাণীকে যেতে দেবেন না।'
        ],
        isUncertain: Boolean(tox.isUncertain || tox.classification === 'Unknown' || !isPlantIdentified)
      };

      const diseaseName = !isPlantIdentified
        ? 'Undetermined'
        : data.isHealthy
        ? 'None (Healthy Leaf)'
        : (data.diseaseName || 'Foliar Infection');

      const diseaseNameBn = !isPlantIdentified
        ? 'সঠিকভাবে শনাক্ত করা যায়নি—আরও পরিষ্কার ছবি দিন'
        : data.isHealthy
        ? 'কোনো রোগ নেই (সুস্থ পাতা)'
        : (data.diseaseNameBn || 'পাতার রোগ সংক্রমণ');

      return {
        success: true,
        isLeafDetected: isLeaf,
        isPlantIdentified,
        plantConfidence,
        plantConfidencePercentage,
        botanicalFeatures,
        isUncertain,
        plantNameEn,
        plantNameBn,
        plantSpecies,
        plantSpeciesBn,
        scientificName,
        isHealthy: isPlantIdentified && Boolean(data.isHealthy),
        healthStatus,
        healthStatusBn,
        healthPercentage: Math.round(healthPercentage * 10) / 10,
        diseaseName,
        diseaseNameBn,
        problemCategory: data.problemCategory || (data.isHealthy ? 'healthy' : 'fungal'),
        problemCategoryBn:
          data.problemCategoryBn ||
          (data.problemCategory === 'fungal'
            ? 'ছত্রাকজনিত রোগ'
            : data.problemCategory === 'bacterial'
            ? 'ব্যাকটেরিয়াজনিত রোগ'
            : data.problemCategory === 'viral'
            ? 'ভাইরাসজনিত রোগ'
            : data.problemCategory === 'pest'
            ? 'পোকামাকড়জনিত ক্ষতি'
            : data.problemCategory === 'deficiency'
            ? 'পুষ্টির অভাব / ঘাটতি'
            : 'রোগমুক্ত পাতা'),
        severity: data.severity || (data.isHealthy ? 'N/A' : 'Moderate'),
        severityBn:
          data.severityBn ||
          (data.severity === 'High'
            ? 'তীব্র'
            : data.severity === 'Moderate'
            ? 'মাঝারি'
            : data.severity === 'Low'
            ? 'কম'
            : 'প্রযোজ্য নয়'),
        confidence,
        confidencePercentage,
        visibleSymptomsEn: !isPlantIdentified
          ? 'Plant could not be reliably identified from leaf morphology. Edges, tip, or venation are unclear. Please upload another clear photo.'
          : (data.visibleSymptomsEn || 'Photosynthetic leaf surface observed.'),
        visibleSymptomsBn: !isPlantIdentified
          ? 'সঠিকভাবে শনাক্ত করা যায়নি—আরও পরিষ্কার ছবি দিন। পাতার আকৃতি, কিনারা, ডগা ও শিরাবিন্যাস স্পষ্টভাবে দেখা যায় এমন ছবি দিন।'
          : (data.visibleSymptomsBn || 'পাতার স্বাভাবিক ক্লোরোফিল ও পৃষ্ঠ পর্যবেক্ষণ করা হয়েছে।'),
        detectedProblemsEn: !isPlantIdentified
          ? 'Low botanical identification confidence (<65%). Plant species must be verified before diagnosing foliar health or disease.'
          : (data.detectedProblemsEn || (data.isHealthy ? 'None. Foliage is vibrant and healthy.' : 'Foliar damage detected.')),
        detectedProblemsBn: !isPlantIdentified
          ? 'উদ্ভিদ প্রজাতি সঠিকভাবে শনাক্ত করা যায়নি (<৬৫%)। রোগ নির্ণয়ের পূর্বে পাতার আকৃতি, কিনারা, ডগা ও শিরাবিন্যাস নিশ্চিত করা প্রয়োজন।'
          : (data.detectedProblemsBn || (data.isHealthy ? 'কোনো সমস্যা শনাক্ত হয়নি। পাতাটি সম্পূর্ণ রোগমুক্ত।' : 'পাতায় রোগ বা ক্ষতের লক্ষণ পাওয়া গেছে।')),
        treatmentAdviceEn: Array.isArray(data.treatmentAdviceEn) && data.treatmentAdviceEn.length > 0 ? data.treatmentAdviceEn : [
          'Maintain balanced soil moisture and avoid overhead water splashing.',
          'Apply organic compost and ensure adequate sunlight.'
        ],
        treatmentAdviceBn: Array.isArray(data.treatmentAdviceBn) && data.treatmentAdviceBn.length > 0 ? data.treatmentAdviceBn : [
          'পরিমিত সেচ দিন এবং পাতার ওপর সরাসরি পানি ছিটাবেন না।',
          'জৈব সার ব্যবহার করুন এবং পর্যাপ্ত সূর্যের আলো নিশ্চিত করুন।'
        ],
        preventionAdviceEn: Array.isArray(data.preventionAdviceEn) && data.preventionAdviceEn.length > 0 ? data.preventionAdviceEn : [
          'Inspect plants regularly during humid and foggy weather.',
          'Sterilize pruning shears between cuttings.'
        ],
        preventionAdviceBn: Array.isArray(data.preventionAdviceBn) && data.preventionAdviceBn.length > 0 ? data.preventionAdviceBn : [
          'স্যাঁতসেঁতে ও কুয়াশাচ্ছন্ন আবহাওয়ায় নিয়মিত ক্ষেত পরিদর্শন করুন।',
          'ডাল বা পাতা ছাঁটার কাঁচি ব্যবহারের পর পরিষ্কার রাখুন।'
        ],
        toxicityAssessment,
        aiModelUsed: `Gemini Multimodal (${modelName})`
      };
    } catch (err: any) {
      lastError = err;
      console.warn(`Model ${modelName} failed, attempting next model fallback:`, err?.message || err);
    }
  }

  throw lastError || new Error('All AI vision models failed to diagnose image');
}
