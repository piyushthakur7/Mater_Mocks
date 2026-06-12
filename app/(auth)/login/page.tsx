"use client";

import Link from "next/link";

export default function StudentLoginPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Welcome Back Aspirant</h1>
        <p className="text-sm text-slate-500 mt-1">Provide credentials to access dashboards and launch active mocks.</p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Email Address</label>
          <input 
            type="email" 
            placeholder="name@example.com" 
            className="w-full text-sm px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-[#D00113] focus:ring-1 focus:ring-[#D00113] transition-all bg-slate-50/50 font-medium text-slate-800" 
            required 
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Password</label>
            <Link href="/forgot-password" className="text-xs font-bold text-[#D00113] hover:underline tab-index-[-1]">
              Forgot Password?
            </Link>
          </div>
          <input 
            type="password" 
            placeholder="••••••••" 
            className="w-full text-sm px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-[#D00113] focus:ring-1 focus:ring-[#D00113] transition-all bg-slate-50/50 font-medium text-slate-800" 
            required 
          />
        </div>

        {/* Dynamic Action Button Route Group Push to Student Workspace */}
        <Link 
          href="/dashboard" 
          className="block w-full py-3 bg-[#D00113] hover:bg-[#b0010f] text-white text-center font-bold text-sm rounded-lg shadow-md shadow-red-600/10 transition-all mt-6"
        >
          Sign In to Portal
        </Link>
      </form>

      <div className="text-center pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-[#D00113] font-bold hover:underline">
          Create Account Free
        </Link>
      </div>
    </div>
  );
}