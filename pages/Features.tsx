import React from 'react';
import { Scan, SmilePlus, BarChart3, BookOpen } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Scan className="h-8 w-8 text-teal-600" />,
      title: "AI-Based Symptom Screening",
      description: "Our core feature utilizes an intelligent questionnaire adapted from standard psychological tools (like PHQ-9 and GAD-7) to assess current mental state.",
      color: "bg-teal-50"
    },
    {
      icon: <SmilePlus className="h-8 w-8 text-blue-600" />,
      title: "Mood Tracking",
      description: "Keep a digital diary of your emotions. Visualizing mood trends helps in understanding triggers and patterns over time.",
      color: "bg-blue-50"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
      title: "Stress Indicator",
      description: "Calculates a real-time stress index based on your responses to lifestyle and pressure-related questions.",
      color: "bg-indigo-50"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-emerald-600" />,
      title: "Recommendation Engine",
      description: "Based on your risk level, the system suggests specific reading materials, meditation exercises, or professional directories.",
      color: "bg-emerald-50"
    }
  ];

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900">System Features</h2>
          <p className="mt-4 text-xl text-slate-500">
            A comprehensive suite of tools designed to support your mental wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100 flex items-start gap-6">
              <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
