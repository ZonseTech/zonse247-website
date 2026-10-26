import { ArrowRight, Download, MonitorDown, RefreshCw, ShieldAlert, Store, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPosRelease, POS_INSTALLER_URL } from "@/lib/pos-release";

export const metadata: Metadata = {
  title: "Download Zonse247 POS for Windows",
  description: "Download and install the Zonse247 POS point of sale for Windows. It works offline and updates itself.",
};

const STEPS: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Download the installer",
    body: "Save Zonse247_POS_Setup.exe to the computer you will use as a till.",
    Icon: Download,
  },
  {
    title: "Run it",
    body: "Open the file and follow the installer. If Windows shows “Windows protected your PC”, select More info, then Run anyway.",
    Icon: ShieldAlert,
  },
  {
    title: "Set up your business",
    body: "Open Zonse247 POS from the desktop shortcut and follow the set-up steps to connect your business and till.",
    Icon: Store,
  },
  {
    title: "Stay up to date",
    body: "New versions download in the background. You will be asked to restart when one is ready.",
    Icon: RefreshCw,
  },
];

function formatSize(bytes: number) {
  return `${Math.round(bytes / (1024 * 1024))} MB`;
}

function formatDate(iso: string) {
  const date = new Date(iso);
  return Number.isNaN(date.getTime())
    ? null
    : date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Africa/Blantyre" });
}

export default async function DownloadPage() {
  const release = await getPosRelease();
  const released = release?.releasedAt ? formatDate(release.releasedAt) : null;
  const details = [
    release && `Version ${release.version}`,
    release?.size && formatSize(release.size),
    "Windows 10 and 11, 64-bit",
    released && `Released ${released}`,
  ].filter(Boolean);

  return (
    <>
      <SiteHeader />
      <main>
        <section
          aria-labelledby="download-title"
          className="relative isolate overflow-clip bg-slate-950 bg-[radial-gradient(ellipse_at_75%_30%,rgb(14_165_233/0.16),transparent_60%)] pt-36 pb-24 text-white sm:pt-40 sm:pb-32"
        >
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-sky-400 uppercase">
                <span aria-hidden className="h-0.5 w-10 bg-amber-400" />
                Zonse247 POS
              </p>
              <h1 id="download-title" className="mt-5 font-heading text-4xl leading-tight font-bold text-balance sm:text-5xl">
                Download Zonse247 POS for Windows
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/65">
                Install the point of sale on your shop&apos;s computer. It works offline and keeps itself up to date.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                <a
                  href={release?.url ?? POS_INSTALLER_URL}
                  download
                  className="group inline-flex h-12 items-center gap-3 bg-sky-500 px-6 text-sm font-semibold shadow-[0_8px_24px_-6px] shadow-sky-500/50 transition-colors hover:bg-sky-400"
                >
                  <MonitorDown className="size-5 stroke-[1.75]" aria-hidden />
                  Download for Windows
                </a>
                <Link
                  href="/?interest=pos#contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white"
                >
                  <span className="bg-linear-to-r from-sky-400 to-sky-400 bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                    Request a demo
                  </span>
                  <ArrowRight className="size-4 text-sky-400 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>

              <p className="mt-6 text-sm text-white/50">{details.join(" · ")}</p>
            </div>

            <div className="relative border border-white/10 bg-linear-to-br from-white/[0.05] to-transparent p-6 sm:p-10">
              <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-sky-500 to-amber-400" />
              <h2 className="text-xs font-semibold tracking-[0.2em] text-white/45 uppercase">How to install</h2>
              <ol className="mt-6 space-y-6">
                {STEPS.map(({ title, body, Icon }, i) => (
                  <li key={title} style={{ "--i": i } as CSSProperties} className="reveal-stagger flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center border border-sky-400/30 bg-sky-400/10 text-sky-400">
                      <Icon className="size-4 stroke-[1.75]" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-heading font-bold">
                        <span className="mr-2 font-mono text-xs font-normal text-sky-300">{String(i + 1).padStart(2, "0")}</span>
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/60">
                Need a hand?{" "}
                <Link href="/?interest=pos#contact" className="font-semibold text-sky-300 transition-colors hover:text-sky-200">
                  We can install and set it up for you
                </Link>
                .
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
