"use client";

import Link from "next/link";

export default function StudentRegisterPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Create Free Account</h1>
        <p className="text-sm text-slate-500 mt-1">Get access to live rankings, performance insights, and free mock downloads.</p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Full Name</label>
          <input 
            type="text" 
            placeholder="Enter full name" 
            className="w-full text-sm px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-[#D00113] focus:ring-1 focus:ring-[#D00113] transition-all bg-slate-50/50 font-medium text-slate-800" 
            required 
          />
        </div>

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
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Phone Number</label>
          <input 
            type="tel" 
            placeholder="Enter 10-digit mobile number" 
            className="w-full text-sm px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-[#D00113] focus:ring-1 focus:ring-[#D00113] transition-all bg-slate-50/50 font-medium text-slate-800" 
            required 
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Password</label>
          <input 
            type="password" 
            placeholder="Create secure password" 
            className="w-full text-sm px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-[#D00113] focus:ring-1 focus:ring-[#D00113] transition-all bg-slate-50/50 font-medium text-slate-800" 
            required 
          />
        </div>

        <div className="flex items-start gap-2.5 pt-2">
          <input type="checkbox" id="terms" className="mt-1 accent-[#D00113]" required />
          <label htmlFor="terms" className="text-xs text-slate-500 font-medium leading-normal">
            I agree to the Master Mocks terms of service and performance wallet allocation rules policies.
          </label>
        </div>

        <Link 
          href="/dashboard" 
          className="block w-full py-3 bg-[#D00113] hover:bg-[#b0010f] text-white text-center font-bold text-sm rounded-lg shadow-md shadow-red-600/10 transition-all mt-4"
        >
          Register & Access Portal
        </Link>
      </form>

      <div className="text-center pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
        Already registered?{" "}
        <Link href="/login" className="text-[#D00113] font-bold hover:underline">
          Sign In Instead
        </Link>
      </div>
    </div>
  );
}