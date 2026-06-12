"use client";

import React, { useState } from "react";

interface StudyMaterial {
  id: string;
  title: string;
  category: string;
  fileSize: string;
  tier: "Free" | "Premium";
  downloadCount: number;
}

export default function StudentResourcesVaultPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const studyMaterials: StudyMaterial[] = [
    { id: "RES-GK-01", title: "May 2026 Comprehensive Banking Awareness Capsule", category: "General Awareness", fileSize: "4.2 MB", tier: "Free", downloadCount: 1420 },
    { id: "RES-QA-02", title: "High-Level Data Interpretation Master Toolkit (100+ Sets)", category: "Quant", fileSize: "12.8 MB", tier: "Premium", downloadCount: 980 },
    { id: "RES-RE-03", title: "Syllogism & Logical Deduction Edge Guide", category: "Reasoning", fileSize: "1.9 MB", tier: "Free", downloadCount: 2450 },
    { id: "RES-GK-04", title: "Union Budget 2026 Core Highlights & MCQ Points", category: "General Awareness", fileSize: "3.1 MB", tier: "Premium", downloadCount: 310 },
  ];

  const categories = ["All", "General Awareness", "Quant", "Reasoning"];

  const filteredMaterials = activeFilter === "All" 
    ? studyMaterials 
    : studyMaterials.filter(m => m.category === activeFilter);

  const handleDownloadTrigger = (title: string, tier: string) => {
    if (tier === "Premium") {
      alert(`Checking premium wallet enrollment token for: "${title}". Link generated via CDN proxy.`);
    } else {
      alert(`Downloading artifact payload: "${title}"`);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Banner Deck Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 text-white shadow-sm">
        <span className="text-[10px] font-black bg-[#D00113] text-white px-2.5 py-1 rounded-md uppercase tracking-wider">
          Knowledge base
        </span>
        <h1 className="text-xl sm:text-2xl font-black tracking-tight mt-2">Study Materials & PDF Capsules</h1>
        <p className="text-xs text-slate-400 font-medium mt-1 max-w-xl">
          Equip yourself with curated monthly current affairs, short formula sheets, and strategy toolkits compiled by exam experts.
        </p>
      </div>

      {/* Segmented Category Filter Toggles */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider border transition-all ${
              activeFilter === cat
                ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PDF Resource Inventory Stack Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMaterials.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <span className={`text-[9px] font-black uppercase tracking-wide px-2 py-0.5 border rounded ${
                  item.tier === "Premium" ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-emerald-50 text-emerald-700 border-emerald-200"
                }`}>
                  {item.tier === "Premium" ? "💎 Premium" : "🆓 Free"}
                </span>
              </div>
              <h3 className="text-sm font-black text-slate-800 group-hover:text-[#D00113] transition-colors leading-snug">
                {item.title}
              </h3>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-5 text-[11px] font-bold text-slate-400">
              <span className="font-mono">📄 Size: {item.fileSize}</span>
              <button
                onClick={() => handleDownloadTrigger(item.title, item.tier)}
                className="px-4 py-2 bg-slate-100 group-hover:bg-[#1A1A1A] group-hover:text-white text-slate-700 rounded-xl transition-all text-xs font-black uppercase tracking-wider"
              >
                📥 Get Capsule
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}