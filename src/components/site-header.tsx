import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import { SiteLogo } from "./site-logo";
import { SocialLinks } from "./social-icons";

const link = "relative py-2 text-sm text-white/80 transition-colors hover:text-white";

export function SiteHeader() {
  return (
    <header className="intro-header absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <SiteLogo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item, i) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  aria-current={i === 0 ? "page" : undefined}
                  className={cn(
                    link,
                    "inline-flex items-center gap-1",
                    "after:absolute after:inset-x-0 after:-bottom-1.5 after:h-0.5 after:origin-center after:scale-x-0 after:bg-sky-400 after:transition-transform hover:after:scale-x-100",
                    i === 0 && "text-white after:scale-x-100",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />
                  )}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
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
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <SocialLinks className="hidden text-white/80 sm:flex" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
