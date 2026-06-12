"use client";

import React, { useState } from "react";
import Link from "next/link";

interface QuestionTemplate {
  questionText: string;
  options: string[];
  correctOptionIndex: number;
}

export default function AdminCreateTestPage() {
  const [testForm, setTestForm] = useState({
    title: "",
    idNode: "",
    subject: "Reasoning",
    duration: "20",
    positiveMark: "1.0",
    negativeMark: "0.25",
    tier1Reward: "25",
    tier2Reward: "15",
    tier3Reward: "10",
  });

  // Dynamic Array for dynamic question insertion
  const [questions, setQuestions] = useState<QuestionTemplate[]>([
    { questionText: "", options: ["", "", "", ""], correctOptionIndex: 0 }
  ]);

  const handleAddQuestionNode = () => {
    setQuestions([...questions, { questionText: "", options: ["", "", "", ""], correctOptionIndex: 0 }]);
  };

  const handleRemoveQuestionNode = (index: number) => {
    if (questions.length === 1) return;
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleQuestionTextChange = (index: number, text: string) => {
    const updated = [...questions];
    updated[index].questionText = text;
    setQuestions(updated);
  };

  const handleOptionTextChange = (qIndex: number, oIndex: number, text: string) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = text;
    setQuestions(updated);
  };

  const handleCorrectOptionChange = (qIndex: number, oIndex: number) => {
    const updated = [...questions];
    updated[qIndex].correctOptionIndex = oIndex;
    setQuestions(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Compiled Payload Structure:", { ...testForm, questions });
    alert(`Success! Compiled Test Configuration with ${questions.length} questions.`);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 mb-24 animate-in fade-in duration-300">
      
      <Link href="/admin/tests" className="text-xs font-black uppercase tracking-wider text-slate-400 hover:text-[#D00113] transition-colors inline-flex items-center gap-1">
        ← Abort Framework Configuration
      </Link>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* SECTION 1: Meta Settings Block */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-slate-900">1. Exam Core Structural Parameters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-slate-500 tracking-wider">Assessment Title String</label>
              <input 
                type="text" 
                placeholder="e.g., SBI PO Full Length Grand Mock - 01" 
                value={testForm.title}
                onChange={e => setTestForm({...testForm, title: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#D00113]"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-500 tracking-wider">System ID Node Token</label>
                <input 
                  type="text" 
                  placeholder="sbi-po-01" 
                  value={testForm.idNode}
                  onChange={e => setTestForm({...testForm, idNode: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono focus:outline-none focus:border-[#D00113]"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-500 tracking-wider">Subject Track</label>
                <select 
                  value={testForm.subject}
                  onChange={e => setTestForm({...testForm, subject: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-[#D00113]"
                >
                  <option value="Reasoning">Reasoning</option>
                  <option value="Quant">Quantitative Aptitude</option>
                  <option value="GA & English">GA & English</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: DYNAMIC QUESTION BUILDER */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-900">2. Question Bank Construction</h2>
              <p className="text-xs text-slate-400 font-medium mt-0.5">Inject question prompt blocks, choice options matrices, and check keys.</p>
            </div>
            <button
              type="button"
              onClick={handleAddQuestionNode}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-black uppercase tracking-wider rounded-lg transition-all"
            >
              ➕ Append Question Node
            </button>
          </div>

          <div className="space-y-8 divide-y divide-slate-100">
            {questions.map((q, qIndex) => (
              <div key={qIndex} className={`pt-6 ${qIndex === 0 ? "pt-0" : ""} space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#D00113] uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded">
                    Question Object #{qIndex + 1}
                  </span>
                  {questions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveQuestionNode(qIndex)}
                      className="text-xs font-bold text-slate-400 hover:text-red-600 transition-colors"
                    >
                      🗑️ Drop Question
                    </button>
                  )}
                </div>

                {/* Question input field */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black uppercase text-slate-400 tracking-wider">Question Prompt Statement</label>
                  <textarea
                    rows={3}
                    placeholder="Type puzzle description text string or mathematical data prompt here..."
                    value={q.questionText}
                    onChange={e => handleQuestionTextChange(qIndex, e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#D00113]"
                    required
                  />
                </div>

                {/* Option matrix slots */}
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase text-slate-400 tracking-wider block">
                    Multiple Choice Grid & Core Answer Key (Select Radio for Correct Choice)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {q.options.map((option, oIndex) => (
                      <div key={oIndex} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-2 px-3 focus-within:border-slate-400 transition-all">
                        <input
                          type="radio"
                          name={`correct-key-${qIndex}`}
                          checked={q.correctOptionIndex === oIndex}
                          onChange={() => handleCorrectOptionChange(qIndex, oIndex)}
                          className="w-4 h-4 accent-[#D00113] cursor-pointer"
                        />
                        <span className="text-xs font-black text-slate-400 font-mono">
                          {String.fromCharCode(65 + oIndex)}
                        </span>
                        <input
                          type="text"
                          placeholder={`Option label value...`}
                          value={option}
                          onChange={e => handleOptionTextChange(qIndex, oIndex, e.target.value)}
                          className="w-full bg-transparent border-none text-xs font-semibold focus:outline-none"
                          required
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Reward Parameters */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-slate-900">3. Cashback Reward Distribution Ledger</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1.5 border border-slate-100 rounded-xl p-4 bg-slate-50/50">
              <span className="text-[10px] font-black uppercase text-[#D00113] tracking-wider block mb-1">🥇 Tier 1 (Rank #01)</span>
              <input 
                type="number" 
                value={testForm.tier1Reward}
                onChange={e => setTestForm({...testForm, tier1Reward: e.target.value})}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold focus:outline-none focus:border-[#D00113]"
              />
            </div>
            <div className="space-y-1.5 border border-slate-100 rounded-xl p-4 bg-slate-50/50">
              <span className="text-[10px] font-black uppercase text-slate-700 tracking-wider block mb-1">🥈 Tier 2 (Rank #02-#05)</span>
              <input 
                type="number" 
                value={testForm.tier2Reward}
                onChange={e => setTestForm({...testForm, tier2Reward: e.target.value})}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold focus:outline-none focus:border-[#D00113]"
              />
            </div>
            <div className="space-y-1.5 border border-slate-100 rounded-xl p-4 bg-slate-50/50">
              <span className="text-[10px] font-black uppercase text-slate-700 tracking-wider block mb-1">🥉 Tier 3 (Rank #06-#20)</span>
              <input 
                type="number" 
                value={testForm.tier3Reward}
                onChange={e => setTestForm({...testForm, tier3Reward: e.target.value})}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold focus:outline-none focus:border-[#D00113]"
              />
            </div>
          </div>
        </div>

        {/* Global form actions */}
        <div className="flex items-center justify-end gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
          <button type="submit" className="px-6 py-2.5 bg-[#D00113] hover:bg-[#b0010f] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg transition-all">
            Compile & Launch Matrix Live
          </button>
        </div>

      </form>
    </div>
  );
}