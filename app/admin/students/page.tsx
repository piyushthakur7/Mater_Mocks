"use client";

import React, { useState } from "react";

interface StudentCandidateRow {
  id: string;
  name: string;
  email: string;
  walletBalance: number;
  completedMocks: number;
  cheatFlags: number;
  joinDate: string;
}

export default function AdminStudentsRosterPage() {
  const [students, setStudents] = useState<StudentCandidateRow[]>([
    { id: "MM-89422", name: "John Doe", email: "johndoe@gmail.com", walletBalance: 145.00, completedMocks: 18, cheatFlags: 0, joinDate: "12 May 2026" },
    { id: "MM-48912", name: "Vikram Malhotra", email: "vikram.m@outlook.com", walletBalance: 230.50, completedMocks: 24, cheatFlags: 2, joinDate: "01 June 2026" },
    { id: "MM-90125", name: "Ananya Sen", email: "ananya.sen@yahoo.com", walletBalance: 15.00, completedMocks: 3, cheatFlags: 1, joinDate: "05 June 2026" },
    { id: "MM-11402", name: "Rahul Verma", email: "rahul100@gmail.com", walletBalance: 0.00, completedMocks: 1, cheatFlags: 3, joinDate: "10 June 2026" },
  ]);

  const resetCheatFlags = (id: string) => {
    setStudents(prev => prev.map(student => {
      if (student.id === id) {
        return { ...student, cheatFlags: 0 };
      }
      return student;
    }));
    alert(`Anti-cheat warning tokens successfully cleared for node ${id}`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Upper Descriptive Column */}
      <div>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">Aspirant Candidate Directory</h1>
        <p className="text-xs text-slate-400 font-medium mt-0.5">Audit complete user profile registrations, observe global wallet liabilities, and handle system security flag metrics.</p>
      </div>

      {/* Grid Quick Indicators Summary Track */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Total Evaluated Users</p>
          <p className="text-2xl font-black text-slate-900 mt-1">{students.length} Candidates</p>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Dispatched Wallet Credits</p>
          <p className="text-2xl font-black text-emerald-600 mt-1">
            ₹{students.reduce((acc, curr) => acc + curr.walletBalance, 0).toFixed(2)}
          </p>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Active Critical Flag Count</p>
          <p className="text-2xl font-black text-[#D00113] mt-1">
            {students.filter(s => s.cheatFlags >= 2).length} Under Suspension
          </p>
        </div>
      </div>

      {/* Main Roster Matrix Grid Table Layout */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-200">
                <th className="py-3.5 px-6">Candidate Meta Profile</th>
                <th className="py-3.5 px-6">Registration Date</th>
                <th className="py-3.5 px-6">Completed Scripts</th>
                <th className="py-3.5 px-6">Ledger Balance</th>
                <th className="py-3.5 px-6">Anti-Cheat Flags</th>
                <th className="py-3.5 px-6 text-right">Actions Panel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-600">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-bold text-slate-900 text-sm leading-tight">{student.name}</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">{student.email} | {student.id}</p>
                  </td>
                  <td className="py-4 px-6 text-slate-500">{student.joinDate}</td>
                  <td className="py-4 px-6 font-mono font-bold text-slate-900">{student.completedMocks} modules</td>
                  <td className="py-4 px-6 font-bold text-emerald-600">₹{student.walletBalance.toFixed(2)}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                      student.cheatFlags >= 3 
                        ? "bg-red-100 text-[#D00113]" 
                        : student.cheatFlags > 0 
                        ? "bg-amber-100 text-amber-800" 
                        : "bg-slate-100 text-slate-500"
                    }`}>
                      🚨 {student.cheatFlags} / 3 Warnings
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right space-x-3">
                    <button 
                      onClick={() => resetCheatFlags(student.id)}
                      disabled={student.cheatFlags === 0}
                      className="text-xs font-bold text-slate-500 hover:text-[#D00113] disabled:opacity-30 disabled:hover:text-slate-500 transition-colors"
                    >
                      Reset Flags
                    </button>
                    <span className="text-slate-300">|</span>
                    <button className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors">
                      View Profile
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