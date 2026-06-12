"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function InteractiveTestEnginePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(1200); // 20 Minutes in seconds

  // Live timer simulation effect
  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const mockQuestions = [
    { id: 1, text: "Points P, Q, R, S, T, U and V are placed in a directional grid network. Q is 12m North of P. R is 10m West of Q. S is 6m South of R. T is 5m East of S. What is the shortest computational distance between P and T?", options: ["13 meters", "15 meters", "11 meters", "8 meters"] },
    { id: 2, text: "In a certain code language, 'BANKING' is written as 'OBKCCFM' and 'INSURANCE' is written as 'TOVBSFMDJ'. Following this exact logical rule matrix, how will 'MOCKTEST' be represented?", options: ["LBBKSDJS", "NPDLSDST", "OPDLTEFU", "NPDLTFST"] },
    { id: 3, text: "Statement: All Puzzles are Syllogisms. No Syllogism is a Conclusion. Some Conclusions are Data Sets. Determine which derived structural argument holds true integrity thresholds.", options: ["Some Puzzles are Conclusions", "No Puzzle is a Conclusion", "All Data Sets are Syllogisms", "None of the above matches"] },
  ];

  const handleOptionSelect = (optionIdx: number) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: optionIdx });
  };

  return (
    <div className="fixed inset-0 bg-slate-100 flex flex-col z-50 animate-in fade-in duration-200 select-none">
      
      {/* ─── SYSTEM HEADER ─── */}
      <header className="h-14 bg-[#1A1A1A] text-white px-6 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="text-xs font-black tracking-wider bg-[#D00113] px-2.5 py-1 rounded">LIVE RUNTIME</span>
          <span className="text-xs font-bold text-slate-300">SBI PO Grand Mock - 01 // Section: Reasoning Ability</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-[10px] block text-slate-400 font-bold uppercase tracking-wider">Remaining Clock</span>
            <span className={`text-base font-black font-mono ${timeLeft < 120 ? "text-[#D00113] animate-pulse" : "text-emerald-400"}`}>
              {formatTimer(timeLeft)}
            </span>
          </div>
        </div>
      </header>

      {/* ─── MAIN COCKPIT INTERFACE ─── */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT WORKSPACE: Question & Submission Panel */}
        <div className="flex-1 flex flex-col justify-between bg-white overflow-y-auto p-8 lg:p-12">
          <div className="max-w-3xl w-full mx-auto space-y-8">
            
            {/* Question Identity Indicator */}
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-wider">Question Reference {mockQuestions[currentQuestion].id} of {mockQuestions.length}</h2>
            </div>

            {/* Prompt String Description */}
            <p className="text-slate-800 font-semibold text-base leading-relaxed">
              {mockQuestions[currentQuestion].text}
            </p>

            {/* Multiple Choice Radio List */}
            <div className="space-y-3 pt-2">
              {mockQuestions[currentQuestion].options.map((option, idx) => {
                const isSelected = selectedAnswers[currentQuestion] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-bold transition-all flex items-center justify-between group ${
                      isSelected
                        ? "border-[#D00113] bg-red-50/40 text-[#D00113]"
                        : "border-slate-200 hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs border ${
                        isSelected ? "bg-[#D00113] text-white border-[#D00113]" : "bg-slate-100 border-slate-200 text-slate-500 font-bold"
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? "border-[#D00113]" : "border-slate-300"}`}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-[#D00113]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigational Trigger Bottom Foot Row */}
          <div className="max-w-3xl w-full mx-auto border-t border-slate-100 pt-6 mt-12 flex items-center justify-between">
            <button
              onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestion === 0}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:hover:bg-slate-100 text-slate-700 text-xs font-black uppercase tracking-wider rounded-xl transition-all"
            >
              ← Previous MCQ
            </button>
            
            {currentQuestion < mockQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestion((prev) => Math.min(mockQuestions.length - 1, prev + 1))}
                className="px-6 py-2.5 bg-[#1A1A1A] hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all"
              >
                Save & Next →
              </button>
            ) : (
              <Link
                href="/reports/sbi-po-01-result"
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md shadow-emerald-600/10 transition-all text-center"
              >
                Submit Exam Script ✓
              </Link>
            )}
          </div>
        </div>

        {/* RIGHT WORKSPACE: Index Matrix Navigation Sidebar */}
        <aside className="w-80 bg-slate-50 border-l border-slate-200 p-6 flex flex-col justify-between hidden md:flex">
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Question Grid Navigation</h3>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">Click any node block index to move focus coordinates directly.</p>
            </div>

            {/* Grid Mapping Core Output */}
            <div className="grid grid-cols-4 gap-2.5">
              {mockQuestions.map((q, idx) => {
                const isCurrent = currentQuestion === idx;
                const isAnswered = selectedAnswers[idx] !== undefined;
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestion(idx)}
                    className={`h-11 rounded-lg text-xs font-black border transition-all flex items-center justify-center ${
                      isCurrent
                        ? "border-[#D00113] bg-[#D00113] text-white shadow-md shadow-red-600/10"
                        : isAnswered
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700 font-bold"
                        : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
                    }`}
                  >
                    {q.id.toString().padStart(2, "0")}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Informational Guide Footer */}
          <div className="border-t border-slate-200/80 pt-4 space-y-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-[#D00113] rounded" /> Active Selection Focus</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-emerald-500 rounded" /> Answered Metric Saved</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-white border border-slate-200 rounded" /> Unvisited Question Node</div>
          </div>
        </aside>

      </div>
    </div>
  );
}