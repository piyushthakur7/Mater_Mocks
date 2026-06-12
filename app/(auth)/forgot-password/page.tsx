"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Recover Secure Credentials</h1>
        <p className="text-sm text-slate-500 mt-1">Enter your recovery email to issue a secure password adjustment token path.</p>
      </div>

      {!isSubmitted ? (
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Registered Email</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              className="w-full text-sm px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-[#D00113] focus:ring-1 focus:ring-[#D00113] transition-all bg-slate-50/50 font-medium text-slate-800" 
              required 
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-[#D00113] hover:bg-[#b0010f] text-white text-center font-bold text-sm rounded-lg shadow-md shadow-red-600/10 transition-all mt-2"
          >
            Transmit Reset Signature
          </button>
        </form>
      ) : (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-emerald-900 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
            <span>✉️</span> Transmission Dispatched
          </p>
          <p className="text-xs font-medium leading-relaxed">
            If an active account maps to that entry, a password verification string has been directed to its inbox. Please monitor folders for activation paths.
          </p>
        </div>
      )}

      <div className="text-center pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
        Remembered credentials?{" "}
        <Link href="/login" className="text-[#D00113] font-bold hover:underline">
          Return to Login
        </Link>
      </div>
    </div>
  );
}