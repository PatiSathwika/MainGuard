import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Activity, Smile } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-200 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-200 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              Early Detection for a <br />
              <span className="text-teal-600">Healthier Mind</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              An intelligent system designed to help you monitor your mental well-being through AI-powered analysis and early symptom detection.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/screening">
                <button className="w-full sm:w-auto px-8 py-4 bg-teal-600 text-white rounded-full font-semibold text-lg hover:bg-teal-700 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  Take Screening Test <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              <Link to="/about">
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold text-lg hover:bg-slate-50 shadow-sm hover:shadow-md transition-all">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 text-teal-600">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Prevention First</h3>
              <p className="text-slate-600">
                Identify potential risks early before they escalate. Early intervention is key to effective mental health management.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Activity className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Tracking</h3>
              <p className="text-slate-600">
                Monitor mood patterns and stress levels over time using our intelligent data-driven approach.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6 text-indigo-600">
                <Smile className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Personalized Care</h3>
              <p className="text-slate-600">
                Receive tailored recommendations and resources based on your unique screening results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
