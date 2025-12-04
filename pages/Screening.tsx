import React, { useState } from 'react';
import { Question, Option, RiskLevel, ScreeningResult } from '../types';
import { AlertTriangle, CheckCircle, Info, RefreshCw, Loader2, Sparkles } from 'lucide-react';
import { getAiAnalysis } from '../services/geminiService';

const questions: (Question & { options: Option[] })[] = [
  { id: 1, text: "Little interest or pleasure in doing things?", options: [{label: "Not at all", score: 0}, {label: "Several days", score: 1}, {label: "More than half the days", score: 2}, {label: "Nearly every day", score: 3}] },
  { id: 2, text: "Feeling down, depressed, or hopeless?", options: [{label: "Not at all", score: 0}, {label: "Several days", score: 1}, {label: "More than half the days", score: 2}, {label: "Nearly every day", score: 3}] },
  { id: 3, text: "Trouble falling or staying asleep, or sleeping too much?", options: [{label: "Not at all", score: 0}, {label: "Several days", score: 1}, {label: "More than half the days", score: 2}, {label: "Nearly every day", score: 3}] },
  { id: 4, text: "Feeling tired or having little energy?", options: [{label: "Not at all", score: 0}, {label: "Several days", score: 1}, {label: "More than half the days", score: 2}, {label: "Nearly every day", score: 3}] },
  { id: 5, text: "Poor appetite or overeating?", options: [{label: "Not at all", score: 0}, {label: "Several days", score: 1}, {label: "More than half the days", score: 2}, {label: "Nearly every day", score: 3}] },
  { id: 6, text: "Feeling bad about yourself - or that you are a failure?", options: [{label: "Not at all", score: 0}, {label: "Several days", score: 1}, {label: "More than half the days", score: 2}, {label: "Nearly every day", score: 3}] },
  { id: 7, text: "Trouble concentrating on things, such as reading or watching TV?", options: [{label: "Not at all", score: 0}, {label: "Several days", score: 1}, {label: "More than half the days", score: 2}, {label: "Nearly every day", score: 3}] },
  { id: 8, text: "Moving or speaking so slowly that other people could have noticed?", options: [{label: "Not at all", score: 0}, {label: "Several days", score: 1}, {label: "More than half the days", score: 2}, {label: "Nearly every day", score: 3}] },
  { id: 9, text: "Thoughts that you would be better off dead, or of hurting yourself?", options: [{label: "Not at all", score: 0}, {label: "Several days", score: 1}, {label: "More than half the days", score: 2}, {label: "Nearly every day", score: 3}] },
  { id: 10, text: "Feeling nervous, anxious, or on edge?", options: [{label: "Not at all", score: 0}, {label: "Several days", score: 1}, {label: "More than half the days", score: 2}, {label: "Nearly every day", score: 3}] },
];

export const Screening: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<ScreeningResult | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  const handleOptionSelect = (questionId: number, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }));
  };

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    let level = RiskLevel.LOW;
    let description = "Your responses suggest you are coping well. Maintain your healthy habits.";

    if (totalScore >= 10 && totalScore <= 19) {
      level = RiskLevel.MODERATE;
      description = "You may be experiencing mild to moderate symptoms. Consider monitoring your mood and practicing stress reduction.";
    } else if (totalScore >= 20) {
      level = RiskLevel.HIGH;
      description = "Your responses indicate a high level of distress. We strongly recommend consulting a mental health professional.";
    }

    setResult({ score: totalScore, level, description });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAiAnalysis = async () => {
    if (!result) return;
    setLoadingAi(true);
    const analysis = await getAiAnalysis(result.score, result.level);
    setAiAnalysis(analysis);
    setLoadingAi(false);
  };

  const resetTest = () => {
    setAnswers({});
    setResult(null);
    setAiAnalysis(null);
  };

  const progress = (Object.keys(answers).length / questions.length) * 100;

  if (result) {
    return (
      <div className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Screening Results</h2>
              <p className="text-slate-500">Based on your responses</p>
            </div>

            <div className={`p-6 rounded-xl mb-8 border-l-4 ${
              result.level === RiskLevel.LOW ? 'bg-green-50 border-green-500 text-green-900' :
              result.level === RiskLevel.MODERATE ? 'bg-yellow-50 border-yellow-500 text-yellow-900' :
              'bg-red-50 border-red-500 text-red-900'
            }`}>
              <div className="flex items-start gap-4">
                {result.level === RiskLevel.LOW ? <CheckCircle className="w-8 h-8 flex-shrink-0" /> :
                 result.level === RiskLevel.MODERATE ? <Info className="w-8 h-8 flex-shrink-0" /> :
                 <AlertTriangle className="w-8 h-8 flex-shrink-0" />}
                <div>
                  <h3 className="text-xl font-bold mb-1">{result.level}</h3>
                  <p className="font-medium opacity-90">Score: {result.score} / 30</p>
                  <p className="mt-2 opacity-80">{result.description}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4" /> Disclaimer
                </h4>
                <p className="text-sm text-blue-800">
                  This screening tool is for informational purposes only and does not constitute a medical diagnosis. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
              </div>

              {/* AI Analysis Section */}
              {!aiAnalysis && !loadingAi && (
                <div className="text-center mt-8">
                  <p className="text-slate-600 mb-4">Want detailed, personalized coping strategies?</p>
                  <button 
                    onClick={handleAiAnalysis}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    <Sparkles className="w-5 h-5" /> Generate AI Analysis
                  </button>
                </div>
              )}

              {loadingAi && (
                <div className="flex flex-col items-center justify-center py-8">
                  <Loader2 className="w-8 h-8 text-teal-600 animate-spin mb-2" />
                  <p className="text-slate-500">Consulting the intelligent system...</p>
                </div>
              )}

              {aiAnalysis && (
                <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-teal-500" /> Intelligent Insights
                  </h3>
                  <div className="prose prose-slate text-slate-600 whitespace-pre-wrap">
                    {aiAnalysis}
                  </div>
                </div>
              )}

              <button 
                onClick={resetTest}
                className="w-full mt-6 flex items-center justify-center gap-2 text-slate-500 hover:text-slate-700 font-medium transition-colors"
              >
                <RefreshCw className="w-4 h-4" /> Retake Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Mental Health Self-Screening</h1>
          <p className="mt-2 text-slate-500">Answer the following questions based on how you have felt over the last 2 weeks.</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-2.5 mb-8">
          <div className="bg-teal-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-medium text-slate-900 mb-4">{q.id}. {q.text}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleOptionSelect(q.id, opt.score)}
                    className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-all ${
                      answers[q.id] === opt.score
                        ? 'bg-teal-600 text-white shadow-md'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={calculateResult}
            disabled={Object.keys(answers).length !== questions.length}
            className={`px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all ${
              Object.keys(answers).length === questions.length
                ? 'bg-teal-600 text-white hover:bg-teal-700 transform hover:-translate-y-1'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            }`}
          >
            Calculate Results
          </button>
          {Object.keys(answers).length !== questions.length && (
            <p className="mt-2 text-sm text-red-400">Please answer all questions to proceed.</p>
          )}
        </div>
      </div>
    </div>
  );
};
