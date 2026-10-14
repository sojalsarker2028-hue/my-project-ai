import React from 'react';
import { Cpu, ShieldCheck, Lock, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import greenhouseLabImg from '../assets/images/botanical_greenhouse_lab_1791699786470.jpg';

interface ModelArchitectureProps {
  language: Language;
}

export const ModelArchitecture: React.FC<ModelArchitectureProps> = ({ language }) => {
  return (
    <section id="model-architecture" className="py-12 lg:py-16 bg-white border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image Asset */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-stone-200 shadow-md">
              <div className="aspect-16/10 bg-stone-100">
                <img
                  src={greenhouseLabImg}
                  alt="Modern botanical greenhouse research station"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 bg-stone-50 border-t border-stone-200">
                <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>INPUT: 224 × 224 × 3 RGB</span>
                  <span className="text-emerald-800 font-semibold">TENSORFLOW.JS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Specifications */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <Cpu className="h-4 w-4 text-emerald-700" />
              <span>
                {language === 'en' ? 'Model Specification' : 'মডেল আর্কিটেকচার ও তথ্য'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 font-serif">
              {language === 'en'
                ? 'Client-Side Neural Network Inference'
                : 'ক্লায়েন্ট-সাইড নিউরাল নেটওয়ার্ক প্রযুক্তি'}
            </h2>

            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              {language === 'en'
                ? 'Tree Leaf AI runs Google Teachable Machine transfer learning models directly inside your browser via WebGL shaders. No camera footage or leaf images are uploaded to any server, guaranteeing 100% data privacy and instant millisecond diagnosis.'
                : 'ট্রি লিফ এআই কোনো রিমোট সার্ভার ছাড়া সরাসরি আপনার ডিভাইসের ব্রাউজারে গুগল টিচেবল মেশিন মডেল পরিচালনা করে। কোনো ছবি বাইরের সার্ভারে পাঠানো হয় না, ফলে ব্যবহারকারীর সম্পূর্ণ তথ্যের গোপনীয়তা ও তাৎক্ষণিক ফলাফল নিশ্চিত হয়।'}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-stone-200 bg-stone-50/60 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-700" />
                  <span className="text-xs font-bold text-stone-900">
                    {language === 'en' ? 'Target Classes' : 'শ্রেণিকরণ'}
                  </span>
                </div>
                <p className="text-xs text-stone-600">
                  {language === 'en'
                    ? 'Binary classifier strictly evaluating "Healthy Leaf" and "Unhealthy Leaf".'
                    : 'সুস্থ পাতা এবং রোগাক্রান্ত পাতা এই দুটি ক্যাটাগরিতে নিখুঁত বিভাজন।'}
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-stone-50/60 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Lock className="h-4 w-4 text-emerald-700" />
                  <span className="text-xs font-bold text-stone-900">
                    {language === 'en' ? 'Edge Privacy' : 'সম্পূর্ণ গোপনীয়তা'}
                  </span>
                </div>
                <p className="text-xs text-stone-600">
                  {language === 'en'
                    ? '100% on-device local computation using TensorFlow.js WebGL backend.'
                    : 'ডিভাইসের নিজস্ব প্রসেসরে টেনসরফ্লো জেএস দ্বারা স্থানীয়ভাবে প্রসেস করা হয়।'}
                </p>
              </div>
            </div>

            {/* Model URL Link */}
            <div className="mt-6 flex items-center gap-2 text-xs text-stone-500">
              <span className="font-semibold text-stone-700">Model Origin:</span>
              <a
                href="https://teachablemachine.withgoogle.com/models/Ar97ldT8V/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 font-mono text-emerald-800 hover:underline break-all"
              >
                <span>https://teachablemachine.withgoogle.com/models/Ar97ldT8V/</span>
                <ExternalLink className="h-3 w-3 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
