"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Save, AlertTriangle, Settings2, Shield, Activity } from "lucide-react";

export default function AdminSettingsConfigPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [config, setConfig] = useState({
    platformName: "Master Mocks",
    supportEmail: "support@mastermocks.com",
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
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      toast.success("Global system parameters saved successfully");
      setIsSubmitting(false);
    }, 800);
  };

  const handleSystemHardReset = () => {
    if (confirm("CRITICAL WARNING: Are you sure you want to purge cached session metrics? This cannot be undone.")) {
      toast.success("System cache telemetry flushed successfully");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
      
      {/* Route Header */}
      <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">System Configuration Center</h1>
          <p className="text-xs text-slate-400 font-medium mt-0.5">Control global operational limits, security parameters, and maintenance modes.</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
          <Settings2 className="w-6 h-6 text-slate-400" />
        </div>
      </div>

      <form onSubmit={handleSaveConfig} className="space-y-6">
        
        {/* BLOCK 1: General Properties */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
            <Activity className="w-4 h-4 text-slate-400" />
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Platform Properties</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">Public Brand Name</label>
              <input 
                type="text" 
                value={config.platformName}
                onChange={e => setConfig({...config, platformName: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#D00113]"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">Support Email Address</label>
              <input 
                type="email" 
                value={config.supportEmail}
                onChange={e => setConfig({...config, supportEmail: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#D00113]"
                required
              />
            </div>
          </div>
        </div>

        {/* BLOCK 2: Financial Thresholds & Risk */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
            <Shield className="w-4 h-4 text-slate-400" />
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Financial & Security Boundaries</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">Minimum Wallet Cash-Out Trigger (INR)</label>
              <input 
                type="number" 
                value={config.minWithdrawLimit}
                onChange={e => setConfig({...config, minWithdrawLimit: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-[#D00113]"
                min="0" required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">Max Allowed Anti-Cheat Flags Before Auto-Ban</label>
              <input 
                type="number" 
                value={config.maxWarningsAllowed}
                onChange={e => setConfig({...config, maxWarningsAllowed: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-[#D00113]"
                min="1" required
              />
            </div>
          </div>
        </div>

        {/* BLOCK 3: Toggles */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
            <Settings2 className="w-4 h-4 text-slate-400" />
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Live Deployment Switches</h3>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900">Emergency Maintenance Lockout Mode</p>
                <p className="text-slate-400 text-[11px] mt-0.5 max-w-md">When activated, all candidate mock taking endpoints freeze and users see a maintenance banner.</p>
              </div>
              <button
                type="button"
                onClick={handleToggleMaintenance}
                className={`px-4 py-2 font-black uppercase tracking-wider text-[10px] rounded-xl border transition-all shrink-0 ${
                  config.maintenanceMode 
                    ? "bg-red-50 text-[#D00113] border-red-200" 
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {config.maintenanceMode ? "🛑 ACTIVE LOCKOUT" : "🟢 STANDBY NORMAL"}
              </button>
            </div>

            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900">Automated Direct Ledger Payouts</p>
                <p className="text-slate-400 text-[11px] mt-0.5 max-w-md">Bypasses the human audit checklist step and routes winnings directly into student balance accounts upon leaderboard closeout events.</p>
              </div>
              <button
                type="button"
                onClick={handleTogglePayouts}
                className={`px-4 py-2 font-black uppercase tracking-wider text-[10px] rounded-xl border transition-all shrink-0 ${
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
        <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg sticky bottom-6 z-10">
          <span className="text-[10px] text-slate-400 font-mono tracking-wide uppercase font-bold pl-2">
            Status: {isSubmitting ? 'Saving...' : 'Ready'}
          </span>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2.5 bg-[#D00113] hover:bg-[#b0010f] disabled:opacity-50 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> Save Global Directives
          </button>
        </div>
      </form>

      {/* DANGER ZONE */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6 space-y-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-black text-red-700 uppercase tracking-wider">System Purge Operations</h4>
            <p className="text-[11px] text-red-600/70 font-medium mt-0.5">These operations erase cached memory fields and require maximum cluster authority level clearances.</p>
          </div>
        </div>
        <div className="pt-2 pl-8">
          <button
            type="button"
            onClick={handleSystemHardReset}
            className="px-5 py-2.5 bg-white hover:bg-red-600 text-red-600 hover:text-white border border-red-200 rounded-xl font-black text-[10px] uppercase tracking-wider transition-all shadow-sm"
          >
            Clear Cached Session Logs
          </button>
        </div>
      </div>

    </div>
  );
}