import React from "react";
import { Loader2 } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

export default function GlobalLoading() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
      <div className="mb-6 animate-pulse">
        <Logo />
      </div>
      <div className="flex items-center gap-3 text-slate-500 font-bold text-sm tracking-wide">
        <Loader2 className="w-5 h-5 text-[#D00113] animate-spin" />
        INITIALIZING INTERFACE...
      </div>
    </div>
  );
}
