import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronRight,
  RotateCcw,
  BookOpen,
  Award,
  Sparkles
} from 'lucide-react';
import { Language, Exam, ExamSubmissionResult, UserProfile } from '../types';
import { getExams, submitExamAnswers } from '../services/adminService';

interface StudentExamCenterProps {
  language: Language;
  userProfile?: UserProfile | null;
}

export const StudentExamCenter: React.FC<StudentExamCenterProps> = ({
  language,
  userProfile
}) => {
  const [exams, setExams] = useState<Exam[]>([]);
  const [activeExam, setActiveExam] = useState<Exam | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ExamSubmissionResult | null>(null);

  useEffect(() => {
    getExams().then((data) => {
      if (Array.isArray(data)) setExams(data);
    });
  }, []);

  const handleStartExam = (exam: Exam) => {
    setActiveExam(exam);
    setCurrentIdx(0);
    setSelectedAnswers({});
    setResult(null);
  };

  const handleSelectOption = (qId: string, optIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qId]: optIndex
    }));
  };

  const handleSubmitExam = async () => {
    if (!activeExam) return;
    setIsSubmitting(true);

    const answersPayload = activeExam.questions.map((q) => ({
      questionId: q.id,
      selectedOptionIndex: selectedAnswers[q.id] !== undefined ? selectedAnswers[q.id] : -1
    }));

    const sub = await submitExamAnswers({
      examId: activeExam.id,
      userId: userProfile?.mobileNumber,
      userName: userProfile?.fullName || 'Student Learner',
      userMobile: userProfile?.mobileNumber || 'N/A',
      answers: answersPayload
    });

    setIsSubmitting(false);
    if (sub) {
      setResult(sub);
    }
  };

  return (
    <section id="exams" className="py-12 sm:py-16 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4 text-emerald-700" />
            {language === 'bn' ? 'কৃষি জ্ঞান ও দক্ষতা যাচাই' : 'Agri-Pathology Knowledge Hub'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900 tracking-tight mb-2">
            {language === 'bn' ? 'উদ্ভিদের পাতার রোগ নির্ণয় পরীক্ষা' : 'Leaf Pathology Examination & Self-Test'}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {language === 'bn'
              ? 'কৃষি কর্মকর্তা ও মাঠপর্যায়ের শিক্ষার্থীদের জন্য তৈরি। নিজের জ্ঞান যাচাই করুন ও বিস্তারিত সমাধান শিখুন।'
              : 'Designed for agronomy students, farmers, and extension officers. Evaluate diagnostic skills with verified botanical explanations.'}
          </p>
        </div>

        {!activeExam ? (
          /* Exam Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exams.map((exam) => (
              <div
                key={exam.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {exam.category}
                    </span>
                    <span className="text-xs text-stone-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {exam.timeLimitMinutes} Mins
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {language === 'bn' ? exam.titleBn : exam.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {language === 'bn' ? exam.descriptionBn : exam.descriptionEn}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-stone-500 font-medium">
                    <span>{exam.questions?.length || 0} Questions</span>
                    <span>•</span>
                    <span>Pass Score: {exam.passPercentage}%</span>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => handleStartExam(exam)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm shadow-sm transition-all active:scale-[0.99] cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-emerald-200" />
                    <span>{language === 'bn' ? 'পরীক্ষা শুরু করুন' : 'Begin Examination'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : result ? (
          /* Result View (STRICTLY NO RANKING) */
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl max-w-3xl mx-auto space-y-6 animate-fadeIn">
            <div className="text-center space-y-2">
              <div
                className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${
                  result.passed
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-amber-100 text-amber-700'
                }`}
              >
                {result.passed ? (
                  <Award className="w-8 h-8" />
                ) : (
                  <HelpCircle className="w-8 h-8" />
                )}
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">
                {result.passed
                  ? (language === 'bn' ? 'অভিনন্দন! আপনি উত্তীর্ণ হয়েছেন' : 'Congratulations! Examination Passed')
                  : (language === 'bn' ? 'পুনর্বিবেচনা প্রয়োজন' : 'Requires Additional Study')}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500">
                {language === 'bn' ? activeExam.titleBn : activeExam.titleEn}
              </p>
            </div>

            {/* Scorecard */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="text-xs text-stone-500 font-semibold uppercase">
                  {language === 'bn' ? 'মোট স্কোর' : 'Score'}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                  {result.score} / {result.totalQuestions}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="text-xs text-stone-500 font-semibold uppercase">
                  {language === 'bn' ? 'শতাংশ' : 'Accuracy'}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-700 mt-1">
                  {result.percentage}%
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="text-xs text-stone-500 font-semibold uppercase">
                  {language === 'bn' ? 'ফলাফল' : 'Assessment'}
                </div>
                <div
                  className={`text-sm sm:text-base font-bold mt-2 uppercase ${
                    result.passed ? 'text-emerald-700' : 'text-amber-700'
                  }`}
                >
                  {result.passed ? (language === 'bn' ? 'উত্তীর্ণ' : 'Passed') : (language === 'bn' ? 'অনুত্তীর্ণ' : 'Review')}
                </div>
              </div>
            </div>

            {/* Detailed Question Review */}
            <div className="space-y-4 pt-4 border-t border-stone-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-800">
                {language === 'bn' ? 'প্রশ্নোত্তর ও সঠিক ব্যাখ্যা' : 'Question Review & Diagnostic Rationales'}
              </h4>
              <div className="space-y-3">
                {activeExam.questions.map((q, idx) => {
                  const userAns = result.answers.find((a) => a.questionId === q.id);
                  const isCorrect = userAns?.isCorrect;
                  const chosenText =
                    userAns && userAns.selectedOptionIndex >= 0
                      ? (language === 'bn' ? q.optionsBn[userAns.selectedOptionIndex] : q.optionsEn[userAns.selectedOptionIndex])
                      : (language === 'bn' ? 'কোনো উত্তর দেওয়া হয়নি' : 'Not answered');
                  const correctText =
                    language === 'bn' ? q.optionsBn[q.correctOptionIndex] : q.optionsEn[q.correctOptionIndex];

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-2xl border space-y-2 ${
                        isCorrect
                          ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                          : 'bg-rose-50/60 border-rose-200 text-rose-950'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs sm:text-sm font-semibold text-stone-900">
                          {idx + 1}. {language === 'bn' ? q.questionBn : q.questionEn}
                        </p>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase shrink-0 ${
                            isCorrect
                              ? 'bg-emerald-200 text-emerald-800'
                              : 'bg-rose-200 text-rose-800'
                          }`}
                        >
                          {isCorrect ? (language === 'bn' ? 'সঠিক' : 'Correct') : (language === 'bn' ? 'ভুল' : 'Incorrect')}
                        </span>
                      </div>
                      <div className="text-xs text-stone-700">
                        <span className="font-semibold">{language === 'bn' ? 'আপনার উত্তর: ' : 'Your Choice: '}</span>
                        {chosenText}
                      </div>
                      {!isCorrect && (
                        <div className="text-xs text-emerald-800 font-semibold">
                          <span>{language === 'bn' ? 'সঠিক উত্তর: ' : 'Correct Answer: '}</span>
                          {correctText}
                        </div>
                      )}
                      {(q.explanationEn || q.explanationBn) && (
                        <div className="p-2.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-600">
                          <span className="font-semibold text-stone-900">
                            {language === 'bn' ? 'ব্যাখ্যা: ' : 'Scientific Rationale: '}
                          </span>
                          {language === 'bn' ? (q.explanationBn || q.explanationEn) : q.explanationEn}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setActiveExam(null)}
                className="px-4 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs sm:text-sm font-semibold cursor-pointer"
              >
                {language === 'bn' ? 'অন্য পরীক্ষা দেখুন' : 'Explore Other Tests'}
              </button>
              <button
                type="button"
                onClick={() => handleStartExam(activeExam)}
                className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold cursor-pointer"
              >
                {language === 'bn' ? 'পুনরায় পরীক্ষা দিন' : 'Retake This Exam'}
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Quiz Runner */
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs text-emerald-700 font-bold uppercase tracking-wider">
                  {language === 'bn' ? activeExam.titleBn : activeExam.titleEn}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-0.5">
                  {language === 'bn'
                    ? `প্রশ্ন ${currentIdx + 1} / ${activeExam.questions.length}`
                    : `Question ${currentIdx + 1} of ${activeExam.questions.length}`}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveExam(null)}
                className="text-xs text-stone-500 hover:text-stone-800 cursor-pointer"
              >
                {language === 'bn' ? 'বাতিল করুন' : 'Exit Exam'}
              </button>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-700 h-full transition-all duration-300"
                style={{
                  width: `${((currentIdx + 1) / activeExam.questions.length) * 100}%`
                }}
              />
            </div>

            {/* Current Question */}
            {(() => {
              const q = activeExam.questions[currentIdx];
              if (!q) return null;
              const questionText = language === 'bn' ? (q.questionBn || q.questionEn) : q.questionEn;
              const options = language === 'bn' && q.optionsBn ? q.optionsBn : q.optionsEn;

              return (
                <div className="space-y-4">
                  <h4 className="text-base sm:text-lg font-bold text-stone-900 leading-relaxed">
                    {questionText}
                  </h4>

                  <div className="space-y-2.5">
                    {options.map((opt, optIdx) => {
                      const isSelected = selectedAnswers[q.id] === optIdx;
                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`w-full p-4 rounded-2xl border text-left flex items-center gap-3.5 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-50 border-emerald-700 text-emerald-950 font-semibold shadow-xs'
                              : 'bg-stone-50/50 border-stone-200 text-stone-800 hover:bg-stone-100/70'
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                              isSelected
                                ? 'bg-emerald-800 text-white'
                                : 'bg-stone-200 text-stone-700'
                            }`}
                          >
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="text-xs sm:text-sm flex-1">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              <button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((p) => p - 1)}
                className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                {language === 'bn' ? 'পূর্ববর্তী' : 'Previous'}
              </button>

              {currentIdx < activeExam.questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentIdx((p) => p + 1)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold cursor-pointer"
                >
                  {language === 'bn' ? 'পরবর্তী প্রশ্ন' : 'Next Question'} &rarr;
                </button>
              ) : (
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmitExam}
                  className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold shadow-md cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting
                    ? (language === 'bn' ? 'যাচাই করা হচ্ছে...' : 'Submitting Answers...')
                    : (language === 'bn' ? 'ফলাফল দেখুন' : 'Submit & See Result')}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
