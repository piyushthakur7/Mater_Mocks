"use client";

import { useState } from "react";
import Link from "next/link";

interface MockTest {
  id: string;
  title: string;
  subject: "Reasoning" | "Quant" | "GA & English";
  questions: number;
  duration: number; // in minutes
  isPremium: boolean;
  rewardTier: string;
}

export default function StudentTestsPage() {
  const [activeTab, setActiveTab] = useState<"All" | "Reasoning" | "Quant" | "GA & English">("All");

  const availableTests: MockTest[] = [
    { id: "sbi-po-01", title: "SBI PO Full Length Grand Mock - 01", subject: "Quant", questions: 35, duration: 20, isPremium: true, rewardTier: "₹25 / ₹20 / ₹15" },
    { id: "ibps-rrf-04", title: "IBPS RRB Officer Scale-I Reasoning Drill", subject: "Reasoning", questions: 40, duration: 25, isPremium: false, rewardTier: "Practice (No Reward)" },
    { id: "rbi-asst-02", title: "RBI Assistant Monthly Financial Digest Mock", subject: "GA & English", questions: 50, duration: 30, isPremium: true, rewardTier: "₹15 / ₹10" },
    { id: "sbi-clerk-11", title: "SBI Clerk Preliminary Speed Mathematics", subject: "Quant", questions: 35, duration: 20, isPremium: false, rewardTier: "Free Entry" },
    { id: "lic-ado-03", title: "LIC ADO Syllogism & Coding Critical Matrix", subject: "Reasoning", questions: 35, duration: 20, isPremium: true, rewardTier: "₹20 / ₹15" },
  ];

  const filteredTests = activeTab === "All" 
    ? availableTests 
    : availableTests.filter(t => t.subject === activeTab);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Upper Descriptive Column */}
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Available Mock Assessments</h1>
        <p className="text-xs text-slate-500 font-medium mt-0.5">Select a testing matrix below. Premium modules allocate payouts directly to your student ledger upon achieving rank tiers.</p>
      </div>

      {/* Categorical Filtering Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-px">
        {(["All", "Reasoning", "Quant", "GA & English"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 px-4 text-xs font-black uppercase tracking-wider transition-all border-b-2 -mb-px ${
              activeTab === tab
                ? "border-[#D00113] text-[#D00113]"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tests Layout Feed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTests.map((test) => (
          <div key={test.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between group hover:border-slate-300 transition-all">
            <div className="space-y-4">
              
              {/* Badge row */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
                  {test.subject}
                </span>
                {test.isPremium ? (
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-red-50 text-[#D00113] border border-red-100 rounded-md">
                    💎 Premium Reward
                  </span>
                ) : (
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-slate-50 text-slate-400 rounded-md">
                    🆓 Free Pass
                  </span>
                )}
              </div>

              {/* Title parameters */}
              <div>
                <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#D00113] transition-colors">
                  {test.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mt-2">
                  <span className="flex items-center gap-1">⏱️ {test.duration} Mins</span>
                  <span className="flex items-center gap-1">📊 {test.questions} MCQs</span>
                </div>
              </div>

              {/* Target Reward Ledger Metric Box */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Performance Wallet Prize:</span>
                <span className={`text-xs font-bold ${test.isPremium ? "text-emerald-600" : "text-slate-500"}`}>{test.rewardTier}</span>
              </div>
            </div>

            {/* Launch trigger action wire route */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link 
                href={`/tests/${test.id}`} 
                className="w-full py-2.5 bg-[#1A1A1A] hover:bg-[#D00113] text-white text-center block text-xs font-black uppercase tracking-wider rounded-xl transition-all"
              >
                Configure Test Environment
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}