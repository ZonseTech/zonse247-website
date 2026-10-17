import { ArrowRight, ArrowUpRight, BrainCircuit, Code, Headset, Laptop, MessageCircle, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SERVICES } from "@/lib/site";
import { HeroBackground } from "./hero-background";

const ICONS: Record<(typeof SERVICES)[number]["key"], LucideIcon> = {
  supply: Laptop,
  software: Code,
  "data-ai": BrainCircuit,
  advisory: Headset,
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 bg-[radial-gradient(ellipse_at_75%_60%,rgb(14_165_233/0.18),transparent_60%)] text-white">
      <HeroBackground />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-slate-950/90 via-slate-950/50 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-28 pb-14 sm:px-6 lg:min-h-144 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pt-32 lg:pb-16">
        <div>
          <div className="intro-headline">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.12em] text-sky-400 uppercase sm:tracking-[0.2em]">
              <span aria-hidden className="h-0.5 w-10 bg-amber-400" />
              IT dealers and technology partners
            </p>

            <h1 className="mt-5 font-heading text-[2rem] leading-tight font-bold sm:text-5xl">
              <span className="sr-only">Everything IT, from equipment to AI</span>
              <span aria-hidden className="intro-line-left block w-fit">
                Everything IT,
              </span>
              <span aria-hidden className="intro-line-right block w-fit lg:pl-12">
                From Equipment to{" "}
                <span className="whitespace-nowrap">
                  <svg viewBox="0 0 100 100" className="intro-chevron inline-block size-[0.74em] -rotate-90 fill-amber-400 align-[-0.02em]">
                    <path d="M0 10h40l60 40-60 40H0l60-40z" />
                  </svg>
                  I
                </span>
              </span>
            </h1>
          </div>

          <div className="intro-body">
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              Equipment, software, data and AI, backed by expert support.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link
                href="/#services"
                className="group inline-flex h-12 items-center gap-3 bg-sky-500 px-6 text-sm font-semibold shadow-[0_8px_24px_-6px] shadow-sky-500/50 transition-colors hover:bg-sky-400"
              >
                Explore our services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white"
              >
                <MessageCircle className="size-5 stroke-[1.75] text-sky-400" aria-hidden />
                <span className="bg-linear-to-r from-sky-400 to-sky-400 bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                  Talk to us
                </span>
              </Link>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-px border border-white/10 bg-white/10">
          {SERVICES.map(({ key, label, description, href }, i) => {
            const Icon = ICONS[key];
            return (
              <li key={key} style={{ "--i": i } as CSSProperties} className="intro-card">
                <Link
                  href={href}
                  className="group relative flex h-full flex-col justify-between gap-8 bg-slate-950/55 p-4 backdrop-blur-sm transition-colors duration-300 hover:bg-slate-900/80 sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-10 place-items-center border border-sky-400/30 bg-sky-400/10 text-sky-400 transition-colors duration-300 group-hover:border-sky-400 group-hover:bg-sky-400 group-hover:text-slate-950">
                      <Icon className="size-5 stroke-[1.75]" aria-hidden />
                    </span>
                    <span className="relative grid size-6 place-items-center">
                      <span className="font-mono text-xs text-white/35 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ArrowUpRight
                        className="absolute size-5 -translate-x-1 translate-y-1 text-sky-400 opacity-0 transition-all duration-300 group-hover:translate-0 group-hover:opacity-100 group-focus-visible:translate-0 group-focus-visible:opacity-100"
                        aria-hidden
                      />
                    </span>
                  </div>
                  <div>
                    <h2 className="font-heading text-sm font-bold sm:text-base">{label}</h2>
                    <p className="mt-1 text-xs text-white/55 sm:text-sm">{description}</p>
                  </div>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-sky-400 to-amber-400 transition-transform duration-500 group-hover:scale-x-100"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
