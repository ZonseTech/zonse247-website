"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SERVICES } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServicesIndex() {
  const [active, setActive] = useState<string>(SERVICES[0].key);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { key } of SERVICES) {
      const el = document.getElementById(key);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Services" className="mt-12 hidden lg:block">
      <ol className="border-l border-white/10">
        {SERVICES.map(({ key, label, href }, i) => {
          const current = key === active;
          return (
            <li key={key}>
              <Link
                href={href}
                aria-current={current ? "true" : undefined}
                className={cn(
                  "relative -ml-px flex items-center gap-4 border-l-2 py-3 pl-5 text-sm transition-colors duration-300",
                  current ? "border-sky-400 font-semibold text-white" : "border-transparent text-white/50 hover:text-white",
                )}
              >
                <span className={cn("font-mono text-xs", current ? "text-sky-400" : "text-white/30")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
