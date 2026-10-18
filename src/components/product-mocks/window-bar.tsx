import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function WindowBar({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="flex items-center gap-3 border-b border-white/10 bg-white/5 px-4 py-2.5">
      <span className="flex gap-1.5">
        <span className="size-2 bg-rose-400/70" />
        <span className="size-2 bg-amber-400/70" />
        <span className="size-2 bg-emerald-400/70" />
      </span>
      <span className="truncate font-mono text-[0.65rem] text-white/40">{title}</span>
      {children && <span className="ml-auto shrink-0">{children}</span>}
    </div>
  );
}

export function FloatingCard({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("absolute z-10 border border-white/15 bg-slate-900/90 shadow-2xl shadow-black/50 backdrop-blur-md", className)}>
      {children}
    </div>
  );
}
