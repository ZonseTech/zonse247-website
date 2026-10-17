import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { PRODUCTS, SERVICES } from "@/lib/site";
import { SocialLinks } from "./social-icons";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  { title: "Services", links: SERVICES.map(({ label, href }) => ({ label, href })) },
  { title: "Products", links: PRODUCTS.map(({ name, href }) => ({ label: name, href })) },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="group/footer relative isolate overflow-clip border-t border-white/10 bg-slate-950 text-white">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_bottom,rgb(14_165_233/0.12),transparent_70%)]"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-12 sm:px-6 sm:pt-20 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10">
        <div>
          <p className="max-w-xs text-sm leading-relaxed text-white/55">
            IT equipment, software, data and AI for businesses in Malawi.
          </p>
          <SocialLinks className="mt-6 text-white/60" />
        </div>

        {COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="text-xs font-bold tracking-[0.2em] text-white/45 uppercase">{column.title}</h2>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-white/75 transition-colors hover:text-white"
                  >
                    <span aria-hidden className="h-px w-0 bg-sky-400 transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <p
        aria-hidden
        className="pointer-events-none mx-auto flex max-w-7xl items-center justify-center overflow-hidden px-4 font-heading text-[18vw] leading-[0.8] font-bold tracking-tight text-transparent select-none [-webkit-text-stroke:1px_rgb(255_255_255/0.09)] sm:px-6 lg:text-[13.5rem]"
      >
        Z
        <Image
          src={logo}
          alt=""
          className="mx-[-0.04em] h-[0.98em] w-auto opacity-35 transition-opacity duration-700 group-hover/footer:opacity-90"
        />
        NSE247
      </p>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-white/45 sm:flex-row sm:px-6">
          <p>© {year} Zonse247 Group of Companies. All rights reserved.</p>
          <a href="#" className="group inline-flex items-center gap-2 transition-colors hover:text-white">
            Back to top
            <span className="grid size-7 place-items-center border border-white/15 transition-colors group-hover:border-sky-400 group-hover:bg-sky-400 group-hover:text-slate-950">
              <ArrowUp className="size-3.5" aria-hidden />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
