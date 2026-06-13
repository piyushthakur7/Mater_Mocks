import React from "react";
import Link from "next/link";
import { SearchX, ArrowLeft } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
      <div className="mb-8">
        <Logo />
      </div>
      
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200/80 max-w-lg w-full animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <SearchX className="w-10 h-10 text-slate-300" />
        </div>
        
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-3">
          404
        </h1>
        <h2 className="text-xl font-bold text-slate-700 tracking-tight mb-3">
          Page Not Found
        </h2>
        
        <p className="text-sm text-slate-500 font-medium mb-8 max-w-sm mx-auto">
          The educational material or endpoint you are looking for has been moved, deleted, or does not exist.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-black uppercase tracking-wider transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Safety
          </Link>
        </div>
      </div>
      
      <p className="mt-8 text-xs font-bold text-slate-400 uppercase tracking-wider">
        System Node Offline
      </p>
    </div>
  );
}
