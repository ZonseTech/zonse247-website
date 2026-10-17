import { Clock, Handshake, Lightbulb, MapPin, type LucideIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { COMPANY } from "@/lib/site";
import { CountUp } from "./count-up";

const STATEMENT = [
  { text: "Zonse", accent: true },
  { text: "means" },
  { text: "everything", accent: true },
  { text: "in Chichewa." },
  { text: "We bring everything your business needs from technology into one place, and keep it running" },
  { text: "around the clock.", accent: true },
];

const VALUES: { title: string; text: string; Icon: LucideIcon }[] = [
  { title: "Local first", text: "Built in Malawi, for Malawian businesses.", Icon: MapPin },
  { title: "Always on", text: "Systems that keep working, online or offline.", Icon: Clock },
  { title: "Practical innovation", text: "Technology that solves real problems, not trends.", Icon: Lightbulb },
  { title: "Partnership", text: "We stay with you long after go-live.", Icon: Handshake },
];

const STATS: { value: ReactNode; label: string }[] = [
  { value: COMPANY.founded, label: "Founded" },
  { value: <CountUp value={COMPANY.businessesServed} />, label: "Businesses served" },
  { value: <CountUp value={COMPANY.districts} />, label: "Districts reached" },
];

const words = STATEMENT.flatMap(({ text, accent }) => text.split(" ").map((word) => ({ word, accent: !!accent })));

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative isolate overflow-clip bg-slate-950 pb-24 text-white sm:pb-32">
      <div
        aria-hidden
        className="absolute top-32 left-0 -z-10 h-[36rem] w-[50rem] bg-[radial-gradient(ellipse_at_left,rgb(251_191_36/0.07),transparent_65%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t border-white/10 pt-16 sm:pt-20">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-sky-400 uppercase">
            <span aria-hidden className="h-0.5 w-10 bg-amber-400" />
            About us
          </p>
          <h2 id="about-title" className="sr-only">
            About Zonse247
          </h2>

          <p className="statement mt-8 max-w-5xl font-heading text-3xl leading-[1.2] font-bold sm:text-5xl">
            {words.map(({ word, accent }, i) => (
              <span
                key={i}
                className={accent ? "statement-word text-amber-400" : "statement-word"}
                style={{ "--p": i / (words.length - 1) } as CSSProperties}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>

        <dl className="relative mt-14 grid grid-cols-3 border-y border-white/10 lg:mt-16">
          <span aria-hidden className="draw-x absolute inset-x-0 -top-px h-px bg-linear-to-r from-sky-400 via-sky-400/60 to-amber-400" />
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              style={{ "--i": i } as CSSProperties}
              className={i > 0 ? "reveal-stagger border-l border-white/10 py-8 pl-4 sm:pl-8" : "reveal-stagger py-8 pr-4 sm:pr-8"}
            >
              <dt className="text-[0.65rem] font-semibold tracking-[0.18em] text-white/45 uppercase sm:text-xs">{label}</dt>
              <dd className="mt-3 font-heading text-4xl leading-none font-bold tabular-nums sm:text-6xl">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {VALUES.map(({ title, text, Icon }, i) => (
            <li key={title} className="group relative bg-slate-950 p-6 transition-colors duration-500 hover:bg-slate-900 sm:p-8">
              <div className="reveal-stagger" style={{ "--i": i } as CSSProperties}>
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center border border-sky-400/30 bg-sky-400/10 text-sky-400 transition-colors duration-300 group-hover:border-sky-400 group-hover:bg-sky-400 group-hover:text-slate-950">
                    <Icon className="size-5 stroke-[1.75]" aria-hidden />
                  </span>
                  <span className="font-mono text-xs text-white/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 font-heading text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{text}</p>
              </div>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-sky-500 to-amber-400 transition-transform duration-500 group-hover:scale-x-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
