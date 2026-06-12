"use client";

import Link from "next/link";

export default function AdminDashboardOverviewPage() {
  const corporateMetrics = [
    { title: "Total Registered Aspirants", value: "14,842", delta: "+342 this week", icon: "👥" },
    { title: "Total Reward Payout Liabilities", value: "₹42,150.00", delta: "Ledger status: Stable", icon: "🧾" },
    { title: "Live Published Assessment Matrix", value: "35 Mocks", delta: "12 Free / 23 Premium", icon: "🛠️" },
    { title: "Test Scripts Evaluated", value: "112,490", delta: "Avg Accuracy: 74.2%", icon: "🏁" }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Upper Status Bar Panel Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">System Operational Overview</h1>
          <p className="text-xs text-slate-400 font-medium mt-0.5">Global configuration monitor tracking performance metrics and reward distributions.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/tests/create" className="px-4 py-2.5 bg-[#D00113] hover:bg-[#b0010f] text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all">
            ➕ Author Mock Test
          </Link>
          <Link href="/admin/resources/create" className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all">
            📤 Upload PDF Capsule
          </Link>
        </div>
      </div>

      {/* Aggregated Analytics Scoreboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {corporateMetrics.map((card, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between relative group hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 max-w-[150px] leading-tight">
                {card.title}
              </span>
              <span className="text-xl bg-slate-50 w-9 h-9 rounded-lg flex items-center justify-center border border-slate-100 shadow-sm">{card.icon}</span>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 tracking-tight">{card.value}</p>
              <p className="text-[10px] text-slate-400 font-bold mt-0.5 uppercase tracking-wide">{card.delta}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Split Control Overview Block */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Section Column: Payout Requests Audit */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Pending Payout Approvals</h3>
                <p className="text-xs text-slate-400 font-medium">Top ranking target-tier clearing records flagged for automated payout approval.</p>
              </div>
              <Link href="/admin/reports" className="text-xs font-bold text-[#D00113] hover:underline">Audits Ledger</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    <th className="py-2.5 px-4">Student</th>
                    <th className="py-2.5 px-4">Exam Block ID</th>
                    <th className="py-2.5 px-4">Rank/Percentile</th>
                    <th className="py-2.5 px-4 text-right">Reward</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-4 text-slate-900 font-bold">Vikram Malhotra</td>
                    <td className="py-3 px-4 font-mono text-[11px]">sbi-po-01</td>
                    <td className="py-3 px-4 text-[#D00113] font-bold">Rank #01 (99.8%)</td>
                    <td className="py-3 px-4 text-emerald-600 font-bold text-right">₹25.00</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-4 text-slate-900 font-bold">Ananya Sen</td>
                    <td className="py-3 px-4 font-mono text-[11px]">lic-ado-03</td>
                    <td className="py-3 px-4 text-[#D00113] font-bold">Rank #02 (98.4%)</td>
                    <td className="py-3 px-4 text-emerald-600 font-bold text-right">₹15.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
            <button className="text-xs font-black uppercase text-slate-500 hover:text-[#D00113] transition-colors">
              Execute Batch Ledger Clearance Process ✓
            </button>
          </div>
        </div>

        {/* Right Section Column: Anti-Cheat Flags Log */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <div>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Anti-Cheat Flags Log</h3>
            <p className="text-xs text-slate-400 font-medium">Active testing instances flagged for boundary anomalies.</p>
          </div>

          <div className="space-y-3">
            <div className="border border-red-100 bg-red-50/40 rounded-xl p-3 flex items-start gap-3">
              <span className="text-base">🚨</span>
              <div className="text-xs font-medium text-slate-600 space-y-0.5">
                <p className="font-bold text-slate-900">User #4891: Tab Mismatch Boundary</p>
                <p className="text-slate-400 text-[11px]">Triggered during: IBPS Clerk Quant Mock 09</p>
                <p className="text-[10px] font-bold font-mono text-[#D00113] uppercase tracking-wide">Status: 2 warnings logged</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}