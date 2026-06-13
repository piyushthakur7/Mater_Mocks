import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon, SearchX } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({ title, description, icon: Icon = SearchX, action, className }: EmptyStateProps) {
  return (
    <div className={cn("bg-white border border-slate-200/80 rounded-2xl p-12 text-center shadow-sm flex flex-col items-center justify-center animate-in fade-in duration-300", className)}>
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4">
        <Icon className="w-8 h-8 text-slate-400" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">{description}</p>
      )}
      {action && (
        <div className="mt-2">
          {action}
        </div>
      )}
    </div>
  );
}
