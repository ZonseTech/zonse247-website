import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/site";
import { SERVICE_ICONS } from "./service-icons";
import { ServicesIndex } from "./services-index";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative isolate overflow-clip bg-slate-950 pt-16 pb-24 text-white sm:pt-20 sm:pb-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.035)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[linear-gradient(to_bottom,transparent,black_10rem,transparent_75%)]"
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-sky-400 uppercase">
            <span aria-hidden className="h-0.5 w-10 bg-amber-400" />
            What we do
          </p>
          <h2 id="services-title" className="mt-5 font-heading text-4xl leading-tight font-bold sm:text-5xl">
            Four ways we power your business
          </h2>
          <p className="mt-5 max-w-md text-lg text-white/60">From the hardware on your desk to the AI behind your decisions.</p>
          <ServicesIndex />
        </div>

        <ol className="divide-y divide-white/10 border border-white/10">
          {SERVICES.map(({ key, label, summary, points }, i) => {
            const Icon = SERVICE_ICONS[key];
            const number = String(i + 1).padStart(2, "0");
            return (
              <li key={key} id={key} className="reveal scroll-mt-6">
                <article className="group relative overflow-hidden p-6 transition-colors duration-500 hover:bg-white/[0.03] sm:p-10">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-6 right-4 font-heading text-[8rem] leading-none font-bold text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.07)] transition-colors duration-500 select-none group-hover:[-webkit-text-stroke:1px_rgb(56_189_248/0.4)] sm:text-[10rem]"
                  >
                    {number}
                  </span>

                  <span className="relative grid size-12 place-items-center border border-sky-400/30 bg-sky-400/10 text-sky-400 transition-colors duration-300 group-hover:border-sky-400 group-hover:bg-sky-400 group-hover:text-slate-950">
                    <Icon className="size-5 stroke-[1.75]" aria-hidden />
                  </span>

                  <h3 className="relative mt-8 font-heading text-2xl font-bold sm:text-3xl">{label}</h3>
                  <p className="relative mt-3 max-w-md text-white/60">{summary}</p>

                  <ul className="relative mt-6 flex flex-wrap gap-2">
                    {points.map((point) => (
                      <li key={point} className="border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75">
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/?interest=${key}#contact`}
                    className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition-colors hover:text-sky-300"
                  >
                    Enquire
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>

                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-sky-500 to-amber-400 transition-transform duration-700 group-hover:scale-x-100"
                  />
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
