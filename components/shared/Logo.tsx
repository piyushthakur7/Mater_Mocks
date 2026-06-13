import React from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  href?: string;
}

export function Logo({ className, iconClassName, textClassName, href = "/" }: LogoProps) {
  const content = (
    <>
      <div className={cn("w-8 h-8 rounded-xl bg-[#D00113] flex items-center justify-center shrink-0 shadow-sm", iconClassName)}>
        <BookOpen className="w-5 h-5 text-white" />
      </div>
      <span className={cn("font-black tracking-tight text-xl text-slate-900", textClassName)}>
        Master<span className="text-[#D00113]">Mocks</span>
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn("flex items-center gap-2.5 transition-opacity hover:opacity-90", className)}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {content}
    </div>
  );
}
