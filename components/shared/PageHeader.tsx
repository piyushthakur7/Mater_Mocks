import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  action?: React.ReactNode;
  className?: string;
}

export function PageHeader({ title, description, icon: Icon, action, className }: PageHeaderProps) {
  return (
    <div className={cn("bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", className)}>
      <div className="flex items-center gap-4">
        {Icon && (
          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6 text-slate-400" />
          </div>
        )}
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">{title}</h1>
          {description && (
            <p className="text-xs text-slate-400 font-medium mt-0.5">{description}</p>
          )}
        </div>
      </div>
      {action && (
        <div className="flex items-center shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}
