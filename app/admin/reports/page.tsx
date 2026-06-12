"use client";

import React, { useState } from "react";

interface PayoutClaimRow {
  id: string;
  studentName: string;
  testId: string;
  achievedRank: string;
  payoutValue: number;
  paymentStatus: "Pending Audit" | "Disbursed" | "Flagged / Held";
  timestamp: string;
}

export default function AdminPayoutAuditsPage() {
  const [claims, setClaims] = useState<PayoutClaimRow[]>([
    { id: "PAY-9011-A", studentName: "Vikram Malhotra", testId: "sbi-po-01", achievedRank: "Rank #01", payoutValue: 25.00, paymentStatus: "Pending Audit", timestamp: "11 June 2026 14:22" },
    { id: "PAY-4831-B", studentName: "Ananya Sen", testId: "lic-ado-03", achievedRank: "Rank #02", payoutValue: 15.00, paymentStatus: "Pending Audit", timestamp: "11 June 2026 16:05" },
    { id: "PAY-1102-C", studentName: "John Doe", testId: "sbi-po-01", achievedRank: "Rank #03", payoutValue: 15.00, paymentStatus: "Disbursed", timestamp: "10 June 2026 11:40" },
    { id: "PAY-8821-D", studentName: "Rahul Verma", testId: "ibps-rrf-04", achievedRank: "Rank #01 (Flagged)", payoutValue: 20.00, paymentStatus: "Flagged / Held", timestamp: "09 June 2026 18:50" },
  ]);

  const approvePayout = (id: string) => {
    setClaims(prev => prev.map(claim => {
      if (claim.id === id) {
        return { ...claim, paymentStatus: "Disbursed" };
      }
      return claim;
    }));
    alert(`Financial clearance token generated. Payout ledger ${id} updated to 'Disbursed'.`);
  };

  const holdPayout = (id: string) => {
    setClaims(prev => prev.map(claim => {
      if (claim.id === id) {
        return { ...claim, paymentStatus: "Flagged / Held" };
      }
      return claim;
    }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Upper Section Header */}
      <div>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Financial Settlement Audit Desk</h1>
        <p className="text-xs text-slate-400 font-medium mt-0.5">Authorize student performance prize allocations, audit cheat exception records, and clear settlement backlogs.</p>
      </div>

      {/* Aggregate Financial Performance Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Queue Awaiting Clearance</p>
          <p className="text-2xl font-black text-amber-600 mt-1">
            ₹{claims.filter(c => c.paymentStatus === "Pending Audit").reduce((acc, curr) => acc + curr.payoutValue, 0).toFixed(2)}
          </p>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Settled Disbursed Volume</p>
          <p className="text-2xl font-black text-emerald-600 mt-1">
            ₹{claims.filter(c => c.paymentStatus === "Disbursed").reduce((acc, curr) => acc + curr.payoutValue, 0).toFixed(2)}
          </p>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Escrow Retained (Suspended Node Security)</p>
          <p className="text-2xl font-black text-[#D00113] mt-1">
            ₹{claims.filter(c => c.paymentStatus === "Flagged / Held").reduce((acc, curr) => acc + curr.payoutValue, 0).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Core Claims Data Log Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-200">
                <th className="py-3.5 px-4">Transaction Token Meta</th>
                <th className="py-3.5 px-4">Aspirant Profile</th>
                <th className="py-3.5 px-4">Exam Block ID / Rank</th>
                <th className="py-3.5 px-4">Dispatched Value</th>
                <th className="py-3.5 px-4">Clearance Status</th>
                <th className="py-3.5 px-4 text-right">Ledger Control Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
              {claims.map((claim) => (
                <tr key={claim.id} className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-4 px-4">
                    <p className="font-mono font-bold text-slate-900">{claim.id}</p>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">{claim.timestamp}</p>
                  </td>
                  <td className="py-4 px-4 text-slate-900 font-bold">
                    {claim.studentName}
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-mono bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[10px]">
                      {claim.testId}
                    </span>
                    <span className="text-[#D00113] font-bold ml-2">{claim.achievedRank}</span>
                  </td>
                  <td className="py-4 px-4 font-black text-slate-900 text-sm">
                    ₹{claim.payoutValue.toFixed(2)}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 border rounded ${
                      claim.paymentStatus === "Disbursed" 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100" 
                        : claim.paymentStatus === "Flagged / Held"
                        ? "bg-red-50 text-[#D00113] border-red-100"
                        : "bg-amber-50 text-amber-700 border-amber-100"
                    }`}>
                      <span className={`w-1 h-1 rounded-full ${
                        claim.paymentStatus === "Disbursed" ? "bg-emerald-500" : claim.paymentStatus === "Flagged / Held" ? "bg-red-500" : "bg-amber-500"
                      }`} />
                      {claim.paymentStatus}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right space-x-3">
                    {claim.paymentStatus === "Pending Audit" ? (
                      <>
                        <button 
                          onClick={() => approvePayout(claim.id)}
                          className="text-[11px] font-black uppercase text-emerald-600 hover:text-emerald-700 transition-colors"
                        >
                          Disburse Credit ✓
                        </button>
                        <span className="text-slate-200">|</span>
                        <button 
                          onClick={() => holdPayout(claim.id)}
                          className="text-[11px] font-black uppercase text-[#D00113] hover:text-red-700 transition-colors"
                        >
                          Freeze Claim
                        </button>
                      </>
                    ) : (
                      <span className="text-[10px] text-slate-400 tracking-wider uppercase font-bold">
                        Ledger Record Closed
                      </span>
                    )}
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