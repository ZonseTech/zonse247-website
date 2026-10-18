"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrolled } from "./use-scroll";

export function HeaderShell({ children }: { children: ReactNode }) {
  const scrolled = useScrolled();

  return (
    <header
      data-scrolled={scrolled}
      className={cn(
        "intro-header group/header fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled ? "border-white/10 bg-slate-950/85 backdrop-blur-md" : "border-transparent",
      )}
    >
      {children}
    </header>
  );
}
