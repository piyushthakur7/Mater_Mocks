"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Dashboard", href: "/dashboard", icon: "📊" },
    { name: "Mock Tests", href: "/tests", icon: "📝" },
    { name: "Study Resources", href: "/resources", icon: "📚" },
    { name: "Performance Reports", href: "/reports", icon: "📈" },
    { name: "Portal Settings", href: "/settings", icon: "⚙️" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row antialiased font-sans">
      
      {/* ─── MOBILE HEADER NAVIGATION ─── */}
      <header className="md:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-base font-black tracking-tight">
            <span className="text-[#1A1A1A]">MASTER</span><span className="text-[#D00113]">MOCKS</span>
          </span>
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-md text-xl"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* ─── MOBILE DROPDOWN MENU PANEL ─── */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[53px] bg-white border-b border-slate-200 z-40 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="p-4 space-y-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                    isActive 
                      ? "bg-red-50 text-[#D00113]" 
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <Link href="/login" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-500 hover:text-red-600 transition-colors">
                <span>🚪</span> Exit Workspace
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* ─── DESKTOP SIDEBAR NAVIGATION ─── */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 sticky top-0 h-screen p-6 justify-between shrink-0">
        <div className="space-y-8">
          {/* Logo Brand Frame */}
          <Link href="/dashboard" className="flex items-center gap-2 group">
            <div className="relative w-7 h-7 overflow-hidden rounded-md">
              <Image src="/logo.jpeg" alt="Master Mocks Logo" fill sizes="28px" className="object-cover" />
            </div>
            <span className="text-lg font-black tracking-tight">
              <span className="text-[#1A1A1A]">MASTER</span>
              <span className="text-[#D00113]">MOCKS</span>
            </span>
          </Link>

          {/* Nav Stack Links */}
          <nav className="space-y-1.5">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                    isActive 
                      ? "bg-[#D00113] text-white shadow-md shadow-red-600/10" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="text-sm normal-case">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Workspace Foot Profile Link */}
        <div className="border-t border-slate-100 pt-4">
          <Link href="/login" className="flex items-center justify-between p-2 rounded-xl hover:bg-red-50 group transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-900 text-white font-black text-xs flex items-center justify-center shadow-inner">
                JD
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 group-hover:text-slate-900">John Doe</p>
                <p className="text-[10px] font-medium text-slate-400">ID: #89422</p>
              </div>
            </div>
            <span className="text-slate-400 group-hover:text-[#D00113] text-xs font-bold transition-colors pr-1">🚪</span>
          </Link>
        </div>
      </aside>

      {/* ─── MAIN CONTENT VIEWPORT VARIABLE CONTAINER ─── */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <div className="p-4 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto space-y-8">
          {children}
        </div>
      </main>

    </div>
  );
}