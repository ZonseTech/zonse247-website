"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useActiveHref } from "./use-scroll";

const HREFS = NAV.map((item) => item.href);

export function DesktopNav() {
  const active = useActiveHref(HREFS, usePathname());

  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {NAV.map((item) => {
          const current = item.href === active;
          return (
            <li key={item.label} className="group relative">
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "relative inline-flex items-center gap-1 py-2 text-sm text-white/80 transition-colors hover:text-white",
                  "after:absolute after:inset-x-0 after:-bottom-1.5 after:h-0.5 after:origin-center after:scale-x-0 after:bg-sky-400 after:transition-transform after:duration-300 hover:after:scale-x-100",
                  current && "text-white after:scale-x-100",
                )}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="size-3.5 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" aria-hidden />
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute top-full left-1/2 z-10 w-56 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="border border-white/10 bg-slate-900/95 p-2 shadow-2xl backdrop-blur">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
