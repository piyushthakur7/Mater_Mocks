"use client";

import Link from "next/link";

export default function StudentDashboardPage() {
  // Mock data structure replicating the items represented in your framework wireframe
  const metrics = [
    { title: "Performance Wallet Balance", value: "₹145.00", sub: "Earned via mock target tiers", icon: "💰", statusColor: "text-emerald-600" },
    { title: "Overall Diagnostic Accuracy", value: "78%", sub: "Average across last 12 tests", icon: "🎯", statusColor: "text-[#D00113]" },
    { title: "Completed Test Modules", value: "18 / 35", sub: "Active program progress path", icon: "🏁", statusColor: "text-slate-800" }
  ];

  const contentStreams = [
    {
      subject: "Reasoning Ability",
      icon: "🧩",
      recentActivity: "High-tier Puzzle Mock #4 completed yesterday",
      actionLink: "/tests?subject=reasoning",
      availableMocks: 14
    },
    {
      subject: "Quantitative Aptitude",
      icon: "📊",
      recentActivity: "Data Interpretation Module #2 pending review",
      actionLink: "/tests?subject=quant",
      availableMocks: 19
    },
    {
      subject: "General Awareness & English",
      icon: "📰",
      recentActivity: "Daily Financial Capsule read 2 hours ago",
      actionLink: "/resources",
      availableMocks: 24
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Upper Welcoming Title Block */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Candidate Workspace</h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Welcome back, John. Complete targeted performance test blocks to claim wallet rewards.</p>
        </div>
        <div>
          <Link href="/tests" className="inline-block px-5 py-2.5 bg-[#D00113] hover:bg-[#b0010f] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md shadow-red-600/10 transition-all text-center">
            🚀 Launch Live Test Matrix
          </Link>
        </div>
      </div>

      {/* ─── METRIC SCOREBOARDS TRACK (WIREFRAME DIAGNOSTICS) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, i) => (
          <div key={i} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex items-start justify-between relative overflow-hidden group hover:border-slate-300 transition-all">
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">{metric.title}</p>
              <p className={`text-3xl font-black tracking-tight ${metric.statusColor}`}>{metric.value}</p>
              <p className="text-xs text-slate-400 font-medium">{metric.sub}</p>
            </div>
            <div className="text-2xl bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
              {metric.icon}
            </div>
          </div>
        ))}
      </div>

      {/* ─── SUBJECT RUNWAYS SECTION (WIREFRAME COLUMNS) ─── */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-black text-slate-900 tracking-tight">Active Learning Categories</h2>
          <p className="text-xs text-slate-400 font-medium mt-0.5">Select a category lane below to review solutions or launch available mock papers.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {contentStreams.map((stream, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl bg-slate-50 w-10 h-10 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm">{stream.icon}</span>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-[#D00113] transition-colors">{stream.subject}</h3>
                  </div>
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {stream.availableMocks} Live Mocks
                  </span>
                </div>
                
                <div className="bg-slate-50/60 border border-slate-100 rounded-xl p-3.5 text-xs text-slate-500 font-medium">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Last Interaction Status</span>
                  {stream.recentActivity}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link href={stream.actionLink} className="w-full py-2.5 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-[#D00113] hover:text-white hover:border-[#D00113] text-center block text-xs font-bold rounded-xl transition-all">
                  Open Category Workspace
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── RECENT REWARDS & PERFORMANCE TRANSACTION HISTORY ─── */}
      <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-base font-black text-slate-900 tracking-tight">Recent Wallet Allocations</h2>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Real-time ledger updates reflecting leaderboard prizes earned.</p>
          </div>
          <span className="text-xs font-bold text-[#D00113] hover:underline cursor-pointer">View All Transactions</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-200/60">
                <th className="py-3 px-6">Mock Assessment Identity</th>
                <th className="py-3 px-6">Scored Percentile</th>
                <th className="py-3 px-6">Rank Position</th>
                <th className="py-3 px-6 text-right">Wallet Allocation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-600">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">SBI PO Mains Booster - Full Mock #02</td>
                <td className="py-4 px-6 text-[#D00113] font-bold">94.8%</td>
                <td className="py-4 px-6">Rank #03 / 1,420</td>
                <td className="py-4 px-6 text-emerald-600 font-bold text-right">+ ₹25.00</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">IBPS Clerk Quant Sectional Workout #09</td>
                <td className="py-4 px-6 text-[#D00113] font-bold">91.2%</td>
                <td className="py-4 px-6">Rank #11 / 2,105</td>
                <td className="py-4 px-6 text-emerald-600 font-bold text-right">+ ₹15.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}