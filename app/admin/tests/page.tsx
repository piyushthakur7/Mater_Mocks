"use client";

import { useState } from "react";
import Link from "next/link";

interface AdminMockTestView {
  id: string;
  title: string;
  category: string;
  totalQuestions: number;
  timeLimit: number;
  attemptsCount: number;
  status: "Published" | "Draft" | "Archived";
}

export default function AdminTestsManagementPage() {
  const [testInventory, setTestInventory] = useState<AdminMockTestView[]>( [
    { id: "sbi-po-01", title: "SBI PO Full Length Grand Mock - 01", category: "Quant", totalQuestions: 35, timeLimit: 20, attemptsCount: 1420, status: "Published" },
    { id: "ibps-rrf-04", title: "IBPS RRB Officer Scale-I Reasoning Drill", category: "Reasoning", totalQuestions: 40, timeLimit: 25, attemptsCount: 982, status: "Published" },
    { id: "rbi-asst-02", title: "RBI Assistant Monthly Financial Digest Mock", category: "GA & English", totalQuestions: 50, timeLimit: 30, attemptsCount: 2311, status: "Published" },
    { id: "sbi-clerk-12", title: "SBI Clerk Advanced Data Interpretation Matrix", category: "Quant", totalQuestions: 35, timeLimit: 20, attemptsCount: 0, status: "Draft" },
  ]);

  const toggleTestStatus = (id: string) => {
    setTestInventory(prev => prev.map(test => {
      if (test.id === id) {
        const nextStatus: AdminMockTestView["status"] = test.status === "Published" ? "Draft" : "Published";
        return { ...test, status: nextStatus };
      }
      return test;
    }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Directory Title Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">Mock Assessment Repository</h1>
          <p className="text-xs text-slate-400 font-medium mt-0.5">Author new question parameters, audit completion parameters, or manipulate operational live states.</p>
        </div>
        <Link href="/admin/tests/create" className="px-5 py-2.5 bg-[#D00113] hover:bg-[#b0010f] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition-all text-center">
          ➕ Create New Mock
        </Link>
      </div>

      {/* Roster Listing Grid Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-200">
                <th className="py-3.5 px-6">Test Configuration Metadata</th>
                <th className="py-3.5 px-6">Subject Category</th>
                <th className="py-3.5 px-6">Boundaries Matrix</th>
                <th className="py-3.5 px-6">Total Attempts</th>
                <th className="py-3.5 px-6">Environment Status</th>
                <th className="py-3.5 px-6 text-right">Actions Panel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-600">
              {testInventory.map((test) => (
                <tr key={test.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-bold text-slate-900 text-sm leading-tight">{test.title}</p>
                    <p className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">ID Node: {test.id}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="bg-slate-100 text-slate-700 font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {test.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    ⏱️ {test.timeLimit}m / 📊 {test.totalQuestions} MCQs
                  </td>
                  <td className="py-4 px-6 font-mono font-bold text-slate-900">
                    {test.attemptsCount.toLocaleString()} scripts
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                      test.status === "Published" 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100" 
                        : "bg-amber-50 text-amber-700 border-amber-100"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${test.status === "Published" ? "bg-emerald-500" : "bg-amber-500"}`} />
                      {test.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right space-x-3">
                    <button 
                      onClick={() => toggleTestStatus(test.id)}
                      className={`text-xs font-bold transition-colors ${
                        test.status === "Published" ? "text-amber-600 hover:text-amber-700" : "text-emerald-600 hover:text-emerald-700"
                      }`}
                    >
                      {test.status === "Published" ? "Take Down" : "Go Live"}
                    </button>
                    <span className="text-slate-300">|</span>
                    <button className="text-xs font-bold text-slate-400 hover:text-[#D00113] transition-colors">
                      Edit Matrix
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