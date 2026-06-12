"use client";

import Link from "next/link";

export default function PostExamPerformanceAnalyticsPage() {
  const leadershipBoard = [
    { rank: "01", name: "Amit Sharma", score: "142.50", accuracy: "96.2%", payout: "₹25.00", isUser: false },
    { rank: "02", name: "Priya Patel", score: "131.00", accuracy: "92.0%", payout: "₹20.00", isUser: false },
    { rank: "03", name: "John Doe (You)", score: "125.00", accuracy: "89.4%", payout: "₹15.00", isUser: true },
    { rank: "04", name: "Rohan Verma", score: "119.25", accuracy: "86.5%", payout: "Practice Tier", isUser: false },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Upper Success Payout Status Header */}
      <div className="bg-gradient-to-r from-emerald-900 to-slate-950 p-6 sm:p-8 rounded-2xl text-white border border-emerald-800 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 bottom-0 right-0 w-1/3 bg-[linear-gradient(to_right,transparent,#ffffff05)] pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full inline-block">
            ✓ Performance Verified Ledger Checked
          </span>
          <h1 className="text-2xl font-black tracking-tight">Congratulations! Payout Triggered Successfully</h1>
          <p className="text-xs text-slate-300 font-medium max-w-xl">
            Your performance tracking module cleared the target 3rd tier threshold. A compensation credit value of <span className="font-bold text-emerald-400">₹15.00</span> has been dispatched to your dashboard student wallet.
          </p>
        </div>
      </div>

      {/* ─── SCORES DATA METRIC SECTION (BOTTOM LEFT BOX OF WIREFRAME) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center space-y-1">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Your Compiled Score</p>
          <p className="text-3xl font-black text-[#D00113]">125 / 150</p>
          <p className="text-xs text-slate-400 font-medium">Accuracy Rating: 89.4%</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center space-y-1">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Percentile Rating Position</p>
          <p className="text-3xl font-black text-slate-900">94.82%</p>
          <p className="text-xs text-slate-400 font-medium">Outranked 1,346 competitors</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center space-y-1">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Time Deficit Speed Track</p>
          <p className="text-3xl font-black text-slate-900">14m : 22s</p>
          <p className="text-xs text-slate-400 font-medium">Saved 5m 38s under limit</p>
        </div>
      </div>

      {/* ─── MOCK ASSESSMENT PUBLIC LEADERBOARD (BOTTOM RIGHT BOX OF WIREFRAME) ─── */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-base font-black text-slate-900 tracking-tight">Active Live Board Rankings</h2>
          <p className="text-xs text-slate-400 font-medium mt-0.5">Finalized performance positions for the runtime test window cycle.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100">
                <th className="py-3 px-6 w-20">Rank Position</th>
                <th className="py-3 px-6">Competitor Name</th>
                <th className="py-3 px-6">Score Matrix</th>
                <th className="py-3 px-6">Precision Ratio</th>
                <th className="py-3 px-6 text-right">Prize Dispatched</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-600">
              {leadershipBoard.map((row, idx) => (
                <tr key={idx} className={`transition-colors ${row.isUser ? "bg-red-50/50 font-bold" : "hover:bg-slate-50/60"}`}>
                  <td className="py-4 px-6 font-mono text-slate-900 font-black">{row.rank}</td>
                  <td className="py-4 px-6 text-slate-900">{row.name}</td>
                  <td className="py-4 px-6">{row.score}</td>
                  <td className="py-4 px-6">{row.accuracy}</td>
                  <td className={`py-4 px-6 text-right font-bold ${row.payout.startsWith("₹") ? "text-emerald-600" : "text-slate-400"}`}>
                    {row.payout}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom return navigation actions track button link layout */}
      <div className="text-center">
        <Link href="/dashboard" className="inline-block px-6 py-3 bg-[#1A1A1A] hover:bg-[#D00113] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition-all">
          ← Terminate Review & Go To Dashboard
        </Link>
      </div>

    </div>
  );
}