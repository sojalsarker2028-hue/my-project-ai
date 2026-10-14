export type Language = 'en' | 'bn';

export interface UserProfile {
  fullName: string;
  mobileNumber: string;
  createdAt: number;
  updatedAt: number;
}

export type PathogenCategory =
  | 'fungal'
  | 'bacterial'
  | 'viral'
  | 'deficiency'
  | 'pest'
  | 'environmental'
  | 'unknown';

export interface SimilarDiseaseComparison {
  name: string;
  nameBn: string;
  difference: string;
  differenceBn: string;
}

export interface LeafDisease {
  id: string;
  name: string;
  nameBn: string;
  scientificName: string;
  causalOrganism?: string;
  confirmedHosts?: string[];
  plantSpecies: string;
  plantSpeciesBn: string;
  cropType?: 'cereal' | 'vegetable' | 'fruit' | 'flower' | 'commercial' | 'pest_abiotic' | 'other';
  category: PathogenCategory;
  categoryBn: string;
  severity: 'High' | 'Moderate' | 'Low';
  severityBn: 'তীব্র' | 'মাঝারি' | 'কম';
  imageUrl: string;
  imageAlt: string;
  healthyImageUrl?: string;
  healthyImageAlt?: string;
  visualCharacteristics: string;
  visualCharacteristicsBn: string;
  earlySymptoms?: string;
  earlySymptomsBn?: string;
  advancedSymptoms?: string;
  advancedSymptomsBn?: string;
  affectedLeafSurface?: string;
  affectedLeafSurfaceBn?: string;
  spreadMechanism?: string;
  spreadMechanismBn?: string;
  similarDiseases?: SimilarDiseaseComparison[];
  verificationStatus?: 'Verified (BARI/BRRI/CABI/EPPO)' | 'Validated Field Record' | 'Information not verified yet';
  referenceSource?: string;
  symptoms: string[];
  symptomsBn: string[];
  causes: string[];
  causesBn: string[];
  organicTreatment: string[];
  organicTreatmentBn: string[];
  chemicalTreatment: string[];
  chemicalTreatmentBn: string[];
  prevention: string[];
  preventionBn: string[];
  frequentConditions: string;
  frequentConditionsBn: string;
}

export interface PredictionClass {
  className: string;
  probability: number;
  percentage: string;
}

export interface SampleLeaf {
  id: string;
  nameEn: string;
  nameBn: string;
  cropId: string;
  cropNameEn: string;
  cropNameBn: string;
  cropEmoji: string;
  imageUrl: string;
  type: 'healthy' | 'unhealthy';
  symptomsBn: string;
  symptomsEn: string;
  possibleCausesBn: string;
  possibleCausesEn: string;
  suspectedProblemBn?: string;
  suspectedProblemEn?: string;
  treatmentStepsBn?: string[];
  treatmentStepsEn?: string[];
  preventionStepsBn?: string[];
  preventionStepsEn?: string[];
  isPoisonous?: boolean;
  toxicityLevel?: ToxicityLevel;
  plantNameEn?: string;
  plantNameBn?: string;
  botanicalFeatures?: BotanicalFeatures;
}

export type ToxicityLevel = 'None' | 'Low' | 'Moderate' | 'High' | 'Unknown';

export interface ToxicityAssessment {
  classification: 'Normal' | 'Poisonous' | 'Unknown';
  classificationBn: string; // 'স্বাভাবিক পাতা' or 'বিষাক্ত পাতা' or 'অজানা—স্পর্শ বা খাওয়া থেকে বিরত থাকুন'
  toxicityLevel: ToxicityLevel;
  toxicityLevelBn: string;
  plantNameEn?: string;
  plantNameBn?: string;
  scientificName?: string;
  warningEn: string;
  warningBn: string; // e.g. "সাবধান! শিশুদের দূরে রাখুন এবং ভুলেও স্পর্শ করবেন না বা খাবেন না।"
  actionStepsEn: string[];
  actionStepsBn: string[];
  isUncertain: boolean;
}

export type HealthStatus =
  | 'Healthy'
  | 'Partially Healthy'
  | 'Unhealthy'
  | 'Unable to Determine — Please Upload a Clearer Image.';

export interface SymptomMetrics {
  healthyTissuePercentage: number;
  chlorosisPercentage: number;
  necroticPercentage: number;
  powderyMildewPercentage: number;
  totalDamagePercentage: number;
  leafCoverage: number;
  isLeafDetected: boolean;
  clarityScore: number;
  detectedSymptomsEn: string[];
  detectedSymptomsBn: string[];
}

export interface DetailedAnalysis {
  statusStatementEn: string;
  statusStatementBn: string;
  visibleSymptomsEn: string;
  visibleSymptomsBn: string;
  detectedProblemsEn: string;
  detectedProblemsBn: string;
  treatmentOrCareEn: string[];
  treatmentOrCareBn: string[];
}

export type BanglaLeafStatus = 'সুস্থ পাতা' | 'রোগাক্রান্ত পাতা' | 'নিশ্চিত নয়' | 'সঠিকভাবে শনাক্ত করা যায়নি—আরও পরিষ্কার ছবি দিন';

export interface VisibleEvidenceMetrics {
  spotsAndLesionsBn: string;
  spotsAndLesionsEn: string;
  yellowingAndChlorosisBn: string;
  yellowingAndChlorosisEn: string;
  tissueDecayBn: string;
  tissueDecayEn: string;
  chlorophyllIntegrityBn: string;
  chlorophyllIntegrityEn: string;
  discolorationSummaryBn: string;
  discolorationSummaryEn: string;
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

export interface ClassificationResult {
  isPlantIdentified?: boolean; // Whether plant species is reliably identified (true) or ambiguous/unidentified (false)
  plantConfidence?: number; // Confidence score for plant identification (e.g. 0.94)
  plantConfidencePercentage?: string; // Confidence % for plant identification (e.g. "94.0%")
  botanicalFeatures?: BotanicalFeatures; // Rigorous botanical morphology breakdown
  topClass: 'Healthy Leaf' | 'Unhealthy Leaf' | 'Partially Healthy' | 'Unable to Determine — Please Upload a Clearer Image.' | string;
  banglaDiagnosis: BanglaLeafStatus; // “সুস্থ পাতা”, “রোগাক্রান্ত পাতা”, or “নিশ্চিত নয়”
  visibleEvidence: VisibleEvidenceMetrics; // Discoloration, spots, lesions, yellowing, decay, chlorophyll
  confidence: number; // AI model confidence (0 to 1, e.g. 0.982)
  confidencePercentage: string; // AI model confidence percentage (e.g. "98.2%") - separate from Health %
  healthyPercentage: number; // Teachable Machine Healthy Leaf probability %
  unhealthyPercentage: number; // Teachable Machine Unhealthy Leaf probability %
  healthPercentage: number; // Exact calculated Health % (80-100% = Healthy, 50-79% = Partially Healthy, 0-49% = Unhealthy, or -1 if undetermined)
  healthStatus: HealthStatus;
  healthStatusBn: string;
  diseaseName: string; // 3. Disease Name (e.g. "None (Healthy Leaf)", specific disease name, "Unknown", or "N/A")
  diseaseNameBn: string;
  toxicityAssessment: ToxicityAssessment; // Toxicity screening: Healthy/Normal vs Poisonous/Toxic
  detailedAnalysis: DetailedAnalysis; // 4. Detailed Analysis explaining symptoms, detected problems, and treatment
  symptomMetrics: SymptomMetrics;
  isUncertain: boolean;
  isLowConfidence: boolean;
  predictions: PredictionClass[];
  timestamp: number;
  imageUrl: string;
  selectedCrop?: string;
  sampleMeta?: SampleLeaf;
  retrainingRecommended?: boolean;
  diagnosticNoteEn?: string;
  diagnosticNoteBn?: string;
  plantNameEn?: string;
  plantNameBn?: string;
  plantSpecies?: string;
  plantSpeciesBn?: string;
  scientificName?: string;
  problemCategory?: PathogenCategory | 'healthy' | 'toxic' | 'other';
  problemCategoryBn?: string;
  severity?: 'High' | 'Moderate' | 'Low' | 'N/A';
  severityBn?: string;
  preventionAdviceEn?: string[];
  preventionAdviceBn?: string[];
  aiModelUsed?: string;
  matchedDiseaseId?: string;
  identificationStatus?: 'Likely Disease' | 'Possible Disease' | 'Healthy-looking Leaf' | 'Insufficient Evidence';
  identificationStatusBn?: string;
  causesAndSpreadEn?: string;
  causesAndSpreadBn?: string;
  differentialDiagnoses?: Array<{
    diseaseName: string;
    diseaseNameBn: string;
    probability: string;
    distinguishingFeatureEn: string;
    distinguishingFeatureBn: string;
  }>;
  whenToConsultOfficerEn?: string;
  whenToConsultOfficerBn?: string;
  labTestingWarningEn?: string;
  labTestingWarningBn?: string;
  severityAssessmentNoteEn?: string;
  severityAssessmentNoteBn?: string;
}

export interface RegisteredUser {
  id: string;
  fullName: string;
  mobileNumber: string;
  createdAt: number;
  updatedAt: number;
  status: 'active' | 'suspended';
  examsTaken?: number;
  notes?: string;
}

export interface ExamQuestion {
  id: string;
  examId?: string;
  questionEn: string;
  questionBn: string;
  optionsEn: string[];
  optionsBn: string[];
  correctOptionIndex: number;
  explanationEn: string;
  explanationBn: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Exam {
  id: string;
  titleEn: string;
  titleBn: string;
  descriptionEn: string;
  descriptionBn: string;
  category: string;
  timeLimitMinutes: number;
  passPercentage: number;
  questions: ExamQuestion[];
  createdAt: number;
}

export interface ExamSubmissionAnswer {
  questionId: string;
  selectedOptionIndex: number;
  correctOptionIndex: number;
  isCorrect: boolean;
}

export interface ExamSubmissionResult {
  id: string;
  userId: string;
  userName: string;
  userMobile: string;
  examId: string;
  examTitle: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  answers: ExamSubmissionAnswer[];
  completedAt: number;
}

export interface WebsiteSettings {
  siteTitle: string;
  bannerNoticeEn: string;
  bannerNoticeBn: string;
  showBanner: boolean;
  allowRegistration: boolean;
  examPassPercentage: number;
  maintenanceMode: boolean;
}

export interface AdminAuthResponse {
  success: boolean;
  token?: string;
  error?: string;
}

export interface AdminNotification {
  id: string;
  title: string;
  message: string;
  category: 'announcement' | 'alert' | 'advisory' | 'update';
  priority: 'normal' | 'high';
  sentAt: number;
  targetAudience: 'all_registered_users';
  recipientCount: number;
  deliveryStatus: 'delivered' | 'sending' | 'failed';
  readBy?: string[];
}

export interface InAppNotification {
  id: string;
  title: string;
  message: string;
  category: 'announcement' | 'alert' | 'advisory' | 'update';
  priority: 'normal' | 'high';
  sentAt: number;
}
