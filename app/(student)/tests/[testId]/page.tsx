"use client";

import React, { use } from "react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ testId: string }>;
}

export default function StudentTestInstructionsPage({ params }: PageProps) {
  const unwrappedParams = use(params);

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-300">
      
      {/* Back button track routing */}
      <Link href="/tests" className="text-xs font-black uppercase tracking-wider text-slate-400 hover:text-[#D00113] transition-colors flex items-center gap-1">
        ← Return To Test Deck
      </Link>

      {/* Header Container */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2">
        <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-red-50 text-[#D00113] border border-red-100 rounded-md inline-block">
          Assessment Selected: {unwrappedParams.testId.toUpperCase()}
        </span>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">SBI PO Full Length Grand Mock - 01</h1>
        <p className="text-xs text-slate-400 font-medium">Please review structural performance boundaries thoroughly prior to triggering compilation execution steps.</p>
      </div>

      {/* Instructions Framework Blueprint */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        <h2 className="text-sm font-black uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-3">Examination Protocol Rules</h2>
        
        <div className="space-y-4 text-xs font-medium text-slate-600 leading-relaxed">
          <div className="flex gap-3">
            <span className="text-[#D00113] font-bold">01.</span>
            <p><strong className="text-slate-900">Fixed Session Boundary:</strong> The counter tracking mechanism starts immediately upon confirmation. Once initiated, pauses cannot be performed. Closing the workspace automatically terminates compilation evaluation files.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#D00113] font-bold">02.</span>
            <p><strong className="text-slate-900">Negative Score Allocation:</strong> Standard exam marking rules apply. Each accurate choice awards +1 point, while erroneous entries deduct -0.25 marks.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#D00113] font-bold">03.</span>
            <p><strong className="text-slate-900">Anti-Cheat Matrix:</strong> Tab switching, screen minimized instances, or operating auxiliary secondary peripherals tracks a penalty flag count. Accumulating 3 flags breaks network clearance validation protocols.</p>
          </div>
        </div>

        {/* Structural Metrics Information Grid */}
        <div className="grid grid-cols-3 gap-4 border-y border-slate-100 py-4 text-center">
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400">Total Timer</p>
            <p className="text-lg font-black text-slate-900">20 Mins</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400">Total Value</p>
            <p className="text-lg font-black text-slate-900">35 MCQs</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400">Pass-Mark Target</p>
            <p className="text-lg font-black text-emerald-600">90% Percentile</p>
          </div>
        </div>

        {/* Dynamic Launch Triggers */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
          <div className="flex items-start gap-2.5">
            <input type="checkbox" id="confirm-rules" className="mt-0.5 accent-[#D00113]" />
            <label htmlFor="confirm-rules" className="text-[11px] text-slate-400 font-medium leading-tight">
              I certify that my workstation hardware configuration meets environment integrity requirements.
            </label>
          </div>
          
          {/* Points dynamically directly forward to the start page execution node */}
          <Link 
            href={`/tests/${unwrappedParams.testId}/start`}
            className="px-6 py-3 bg-[#D00113] hover:bg-[#b0010f] text-white text-center font-black text-xs uppercase tracking-wider rounded-xl shadow-md shadow-red-600/10 transition-all shrink-0"
          >
            Acknowledge & Start Test
          </Link>
        </div>

      </div>

    </div>
  );
}