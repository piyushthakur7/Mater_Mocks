"use client";

import React, { useState } from "react";

interface PdfResourceItem {
  id: string;
  title: string;
  tier: "Free" | "Premium";
  category: string;
  fileSize: string;
  downloadCount: number;
  uploadedOn: string;
}

export default function AdminResourcesUploadPage() {
  // Main distribution content list state
  const [resources, setResources] = useState<PdfResourceItem[]>([
    { id: "RES-GK-2026-05", title: "May 2026 Comprehensive Banking Awareness Capsule", category: "General Awareness", tier: "Free", fileSize: "4.2 MB", downloadCount: 1840, uploadedOn: "01 June 2026" },
    { id: "RES-QA-DI-99", title: "High-Level Data Interpretation Master Toolkit (100+ Sets)", category: "Quant", tier: "Premium", fileSize: "12.8 MB", downloadCount: 420, uploadedOn: "04 June 2026" },
    { id: "RES-ENG-RC-02", title: "RBI Grade B Phase-1 English RC Strategies", category: "Reasoning", tier: "Premium", fileSize: "2.1 MB", downloadCount: 95, uploadedOn: "09 June 2026" },
  ]);

  // Form block toggle visibility state
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Form input field elements state
  const [newResource, setNewResource] = useState({
    title: "",
    category: "General Awareness",
    tier: "Free" as "Free" | "Premium",
    fileSize: "",
  });

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResource.title || !newResource.fileSize) return;

    const mockId = `RES-CUSTOM-${Math.floor(1000 + Math.random() * 9000)}`;
    const freshItem: PdfResourceItem = {
      id: mockId,
      title: newResource.title,
      category: newResource.category,
      tier: newResource.tier,
      fileSize: `${newResource.fileSize} MB`,
      downloadCount: 0,
      uploadedOn: "12 June 2026",
    };

    // Inject directly to the top of the collection array
    setResources([freshItem, ...resources]);
    
    // Reset inputs and hide panel block cleanly
    setNewResource({ title: "", category: "General Awareness", tier: "Free", fileSize: "" });
    setIsFormVisible(false);
  };

  const deleteResource = (id: string) => {
    setResources(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Banner Hub Header with explicit Global Action Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">PDF Material Distribution Desk</h1>
          <p className="text-xs text-slate-400 font-medium mt-0.5">Stage educational document capsules, map access barriers, and track download metric sheets.</p>
        </div>
        
        {/* CRITICAL ADDING BUTTON INSTALLED HERE */}
        <button 
          onClick={() => setIsFormVisible(!isFormVisible)}
          className={`px-5 py-2.5 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition-all text-center flex items-center gap-2 ${
            isFormVisible ? "bg-slate-700 hover:bg-slate-800" : "bg-[#D00113] hover:bg-[#b0010f]"
          }`}
        >
          {isFormVisible ? "❌ Close Staging Form" : "➕ Add New Resource Capsule"}
        </button>
      </div>

      {/* Conditional Staging Input Drawer Panel Block */}
      {isFormVisible && (
        <div className="bg-white border-2 border-slate-900 rounded-2xl p-6 shadow-xl space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div>
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Configure New Material Asset Record</h3>
            <p className="text-[11px] text-slate-400 font-medium">Assign access rules and metrics to deploy this component directly into student resource modules.</p>
          </div>

          <form onSubmit={handleUploadSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">Document Title String</label>
                <input 
                  type="text" 
                  placeholder="e.g., Union Budget 2026 Critical Takeaways Capsule" 
                  value={newResource.title}
                  onChange={e => setNewResource({...newResource, title: e.target.value})}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#D00113]"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">Subject Classification Track</label>
                <select 
                  value={newResource.category}
                  onChange={e => setNewResource({...newResource, category: e.target.value})}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-[#D00113]"
                >
                  <option value="General Awareness">General Awareness</option>
                  <option value="Quant">Quantitative Aptitude</option>
                  <option value="Reasoning">Reasoning</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">Access Tier Level Mapping</label>
                <select 
                  value={newResource.tier}
                  onChange={e => setNewResource({...newResource, tier: e.target.value as "Free" | "Premium"})}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-[#D00113]"
                >
                  <option value="Free">🆓 Free Resource Tier</option>
                  <option value="Premium">💎 Premium Locked Account Asset</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">File Footprint Allocation (MB)</label>
                <input 
                  type="number" 
                  step="0.1"
                  placeholder="e.g., 4.5" 
                  value={newResource.fileSize}
                  onChange={e => setNewResource({...newResource, fileSize: e.target.value})}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#D00113]"
                  required
                />
              </div>
            </div>

            {/* Simulated Live CDN File Payload Box */}
            <div className="border border-dashed border-slate-200 bg-slate-50 p-4 text-center rounded-xl">
              <span className="text-xl">📁</span>
              <p className="text-[10px] font-black text-slate-400 uppercase mt-1">Virtual CDN Routing Node Bound</p>
              <p className="text-[9px] text-slate-400">File compilation will be tracked and stored locally via state variables.</p>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button 
                type="button" 
                onClick={() => setIsFormVisible(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black uppercase tracking-wider rounded-xl transition-all"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition-all"
              >
                🚀 Push Content Live
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Live Content Manifest Grid Output Table Layout */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Live Document Manifest Repository ({resources.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100">
                <th className="py-2.5 px-4">Document Details</th>
                <th className="py-2.5 px-4">Category Track</th>
                <th className="py-2.5 px-4">Access Rules</th>
                <th className="py-2.5 px-4">Footprint Size</th>
                <th className="py-2.5 px-4">Dispatched Actions</th>
                <th className="py-2.5 px-4 text-right">Flush Nodes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
              {resources.map((res) => (
                <tr key={res.id} className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-slate-900 leading-tight">{res.title}</p>
                    <p className="text-[10px] font-mono text-slate-400 mt-0.5">Manifest Reference: {res.id} | Date: {res.uploadedOn}</p>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                      {res.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`text-[9px] font-black uppercase tracking-wide px-2 py-0.5 border rounded ${
                      res.tier === "Premium" ? "bg-amber-50 text-amber-700 border-amber-100" : "bg-slate-100 text-slate-500 border-slate-200"
                    }`}>
                      {res.tier}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-500">{res.fileSize}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">📥 {res.downloadCount.toLocaleString()} units</td>
                  <td className="py-3.5 px-4 text-right">
                    <button 
                      onClick={() => deleteResource(res.id)}
                      className="text-[10px] font-black uppercase text-slate-400 hover:text-[#D00113] transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}