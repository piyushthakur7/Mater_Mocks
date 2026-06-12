"use client";

import React, { use } from "react";
import Link from "next/link";

interface PageParameters {
  params: Promise<{ token: string }>;
}

export default function ResetPasswordTokenPage({ params }: PageParameters) {
  // Unwraps the parameters object dynamically using React's unwrap hook
  const unwrappedParams = use(params);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Establish New Password</h1>
        <p className="text-sm text-slate-500 mt-1">Configure your entry sequence. Your verified network signature is validated.</p>
      </div>

      {/* Debug string tracker showing security validation layer status */}
      <div className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-md font-mono text-[10px] text-slate-400 select-none">
        Secure Handshake Validation Token: {unwrappedParams.token.slice(0, 12)}...
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">New Password</label>
          <input 
            type="password" 
            placeholder="Minimum 8 characters" 
            className="w-full text-sm px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-[#D00113] focus:ring-1 focus:ring-[#D00113] transition-all bg-slate-50/50 font-medium text-slate-800" 
            required 
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Re-enter New Password</label>
          <input 
            type="password" 
            placeholder="Confirm selection mismatch matches" 
            className="w-full text-sm px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-[#D00113] focus:ring-1 focus:ring-[#D00113] transition-all bg-slate-50/50 font-medium text-slate-800" 
            required 
          />
        </div>

        <Link 
          href="/login" 
          className="block w-full py-3 bg-[#D00113] hover:bg-[#b0010f] text-white text-center font-bold text-sm rounded-lg shadow-md shadow-red-600/10 transition-all mt-4"
        >
          Update Credentials & Sign In
        </Link>
      </form>
    </div>
  );
}