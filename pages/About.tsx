import React from 'react';
import { Target, Lightbulb, Cpu, Share2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm">About the Project</h2>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            Intelligent System for Early Detection
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Bridging the gap between technology and mental well-being through AI-driven insights.
          </p>
        </div>

        {/* Purpose & Why it matters */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <img 
              src="https://picsum.photos/800/600?grayscale&blur=2" 
              alt="Mental Health Awareness" 
              className="rounded-2xl shadow-xl border border-slate-100"
            />
          </div>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <Target className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-900">Purpose of the Project</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  The primary goal is to develop an accessible, user-friendly platform that allows individuals to self-assess their mental health status. By leveraging intelligent algorithms, we aim to provide immediate feedback and encourage professional consultation when necessary.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Lightbulb className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-900">Why Early Detection Matters</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Mental health issues, when detected early, are significantly more manageable. Early intervention can prevent the escalation of symptoms, reduce the risk of severe crises, and improve overall quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* System Architecture */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">System Architecture</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Input Layer */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                        <Share2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Data Input Layer</h3>
                    <p className="text-sm text-slate-500">User inputs via questionnaire, behavioral data, and self-reports.</p>
                </div>

                {/* Processing Layer */}
                <div className="bg-white p-6 rounded-xl shadow-sm relative">
                     {/* Connector Line for Desktop */}
                    <div className="hidden md:block absolute top-1/2 -left-4 w-8 h-0.5 bg-slate-300"></div>
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-300"></div>

                    <div className="mx-auto bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-teal-600">
                        <Cpu className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Intelligent Processing</h3>
                    <p className="text-sm text-slate-500">Google Gemini API & Rule-based Logic analyze patterns and calculate risk scores.</p>
                </div>

                {/* Output Layer */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="mx-auto bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                        <Target className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Result & Recommendation</h3>
                    <p className="text-sm text-slate-500">Risk categorization, actionable advice, and resource linkage.</p>
                </div>
            </div>
            <p className="text-center mt-8 text-slate-500 text-sm italic">
                Figure 1: High-level architectural view of the Intelligent Mental Health Detection System.
            </p>
        </div>

      </div>
    </div>
  );
};
