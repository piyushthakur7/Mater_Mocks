"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AdminSettingsConfigPage() {
  // System variables state controls
  const [config, setConfig] = useState({
    platformName: "Master Mocks",
    supportEmail: "ops@mastermocks.com",
    minWithdrawLimit: "100",
    maxWarningsAllowed: "3",
    maintenanceMode: false,
    autoApprovePayouts: false,
  });

  const handleToggleMaintenance = () => {
    setConfig(prev => ({ ...prev, maintenanceMode: !prev.maintenanceMode }));
  };

  const handleTogglePayouts = () => {
    setConfig(prev => ({ ...prev, autoApprovePayouts: !prev.autoApprovePayouts }));
  };

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Global system parameters compiled and written to local state storage.");
  };

  const handleSystemHardReset = () => {
    const confirmation = confirm("CRITICAL ACTIONS WARNING: Are you absolute certain you want to purge cached session metrics? This cannot be undone.");
    if (confirmation) {
      alert("System cache telemetry flushed. Environment re-initialized.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
      
      {/* Route Header Info */}
      <div>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">System Configuration Center</h1>
        <p className="text-xs text-slate-400 font-medium mt-0.5">Control global operational limits, security warning parameters, and handle maintenance switches.</p>
      </div>

      <form onSubmit={handleSaveConfig} className="space-y-6">
        
        {/* BLOCK 1: General Meta Properties */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">1. Platform Meta Properties</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">Public Brand Name String</label>
              <input 
                type="text" 
                value={config.platformName}
                onChange={e => setConfig({...config, platformName: e.target.value})}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#D00113]"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">System Support Email Identity</label>
              <input 
                type="email" 
                value={config.supportEmail}
                onChange={e => setConfig({...config, supportEmail: e.target.value})}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#D00113]"
                required
              />
            </div>
          </div>
        </div>

        {/* BLOCK 2: Financial Thresholds & Risk Limits */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">2. Financial Ledger & Risk Gate Boundaries</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">Minimum Wallet Cash-Out Trigger (INR)</label>
              <input 
                type="number" 
                value={config.minWithdrawLimit}
                onChange={e => setConfig({...config, minWithdrawLimit: e.target.value})}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-[#D00113]"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">Max Allowed Anti-Cheat Flags Before Auto-Ban</label>
              <input 
                type="number" 
                value={config.maxWarningsAllowed}
                onChange={e => setConfig({...config, maxWarningsAllowed: e.target.value})}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-[#D00113]"
                required
              />
            </div>
          </div>
        </div>

        {/* BLOCK 3: Operational Core Toggles */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">3. Live Deployment Switches</h3>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {/* Toggle Row 1: Maintenance */}
            <div className="py-3 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900">Emergency Maintenance Lockout Mode</p>
                <p className="text-slate-400 text-[11px]">When activated, all candidate mock taking endpoints freeze and throw a 503 system break window banner.</p>
              </div>
              <button
                type="button"
                onClick={handleToggleMaintenance}
                className={`px-3 py-1.5 font-black uppercase tracking-wider text-[10px] rounded-lg border transition-all ${
                  config.maintenanceMode 
                    ? "bg-red-50 text-[#D00113] border-red-200" 
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {config.maintenanceMode ? "🛑 ACTIVE LOCKOUT" : "🟢 STANDBY NORMAL"}
              </button>
            </div>

            {/* Toggle Row 2: Auto-Payouts */}
            <div className="py-3 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900">Automated Direct Ledger Payouts</p>
                <p className="text-slate-400 text-[11px]">Bypasses the human audit checklist step and routes winnings directly into student balance accounts upon leaderboard closeout events.</p>
              </div>
              <button
                type="button"
                onClick={handleTogglePayouts}
                className={`px-3 py-1.5 font-black uppercase tracking-wider text-[10px] rounded-lg border transition-all ${
                  config.autoApprovePayouts 
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {config.autoApprovePayouts ? "⚡ AUTOMATED EXECUTE" : "👤 MANUAL REVIEW"}
              </button>
            </div>
          </div>
        </div>

        {/* Global Save Actions */}
        <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <span className="text-[10px] text-slate-400 font-mono tracking-wide uppercase font-bold pl-2">
            Configuration state: Stable
          </span>
          <button
            type="submit"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md"
          >
            Save Global Directives
          </button>
        </div>
      </form>

      {/* DANGER DESTRUCTIVE OVERRIDE CORNER ZONE */}
      <div className="bg-red-50/50 border border-red-200 rounded-2xl p-6 space-y-3">
        <div>
          <h4 className="text-xs font-black text-red-700 uppercase tracking-wider">⚠️ System Hard Core Destruction Zone</h4>
          <p className="text-[11px] text-slate-500 font-medium mt-0.5">These operations erase ephemeral simulation memory fields and require maximum cluster authority level clearances.</p>
        </div>
        <div>
          <button
            type="button"
            onClick={handleSystemHardReset}
            className="px-4 py-2 bg-transparent hover:bg-red-600 text-red-600 hover:text-white border border-red-300 rounded-xl font-black text-[11px] uppercase tracking-wider transition-all"
          >
            Clear Cached Session Logs & Telemetry
          </button>
        </div>
      </div>

    </div>
  );
}