"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/site";
import { SocialLinks } from "./social-icons";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="grid size-10 place-items-center text-white transition-colors hover:bg-white/10"
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="absolute inset-x-4 top-full border border-white/10 bg-slate-900/95 p-3 shadow-2xl backdrop-blur motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-2"
        >
          <ul>
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block px-3 py-2.5 font-medium text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-1 ml-3 border-l border-white/10 pl-2">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={close}
                          className="block px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <SocialLinks className="mt-2 border-t border-white/10 px-3 pt-4 pb-2 text-white/70 sm:hidden" />
        </nav>
      )}
    </div>
  );
}
