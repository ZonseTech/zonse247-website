import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Check,
  FileChartColumn,
  Landmark,
  Plug,
  ReceiptText,
  RefreshCw,
  Store,
  Truck,
  Wallet,
  WifiOff,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { AutomationMock } from "./product-mocks/automation-mock";
import { MarketplaceMock } from "./product-mocks/marketplace-mock";
import { PosMock } from "./product-mocks/pos-mock";

const FEATURE_ICONS: Record<string, LucideIcon> = {
  "Works offline": WifiOff,
  "MRA-ready receipts": ReceiptText,
  "Stock and expiry tracking": Boxes,
  "Multi-branch and staff": Store,
  "Verified local shops": BadgeCheck,
  "Synced with your POS": RefreshCw,
  "Collection and delivery": Truck,
  "Mobile money and cards": Wallet,
  "Workflow automation": Workflow,
  "System integrations": Plug,
  "Payment integrations": Landmark,
  "Automated reports": FileChartColumn,
};

const MOCKS = { pos: PosMock, marketplace: MarketplaceMock, automation: AutomationMock };

export function Products() {
  return (
    <section id="products" aria-labelledby="products-title" className="relative isolate overflow-clip bg-slate-950 pb-24 text-white sm:pb-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/3 -z-10 h-[40rem] bg-[radial-gradient(ellipse_at_center,rgb(14_165_233/0.10),transparent_65%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 border-t border-white/10 pt-16 sm:pt-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-sky-400 uppercase">
              <span aria-hidden className="h-0.5 w-10 bg-amber-400" />
              Our products
            </p>
            <h2 id="products-title" className="mt-5 font-heading text-4xl leading-tight font-bold sm:text-5xl">
              Built by us, used every day
            </h2>
          </div>
          <p className="max-w-sm text-lg text-white/60">From the counter to online, connected end to end.</p>
        </div>

        <div className="mt-14 space-y-6">
          {PRODUCTS.map((product, i) => {
            const Mock = MOCKS[product.key];
            const flipped = i % 2 === 1;
            return (
              <div key={product.key} className="relative" style={{ zIndex: PRODUCTS.length - i }}>
                {product.bridge && (
                  <div className="reveal flex items-center justify-center gap-4 pb-6" aria-hidden>
                    <span className="h-px w-8 bg-linear-to-r from-transparent to-sky-400/60 sm:w-16" />
                    <span className="flex items-center gap-2 border border-sky-400/30 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-sky-300">
                      <RefreshCw className="size-3.5" />
                      {product.bridge}
                    </span>
                    <span className="h-px w-8 bg-linear-to-l from-transparent to-sky-400/60 sm:w-16" />
                  </div>
                )}

                <article
                  id={product.key}
                  className="reveal group grid scroll-mt-6 items-center gap-10 border border-white/10 bg-linear-to-br from-white/[0.05] to-transparent p-6 transition-colors duration-500 hover:border-sky-400/30 sm:p-10 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={cn(flipped && "lg:order-2")}>
                    <div className="flex flex-wrap items-center gap-2">
                      {product.platforms.map((platform) => (
                        <span key={platform} className="border border-white/10 px-2.5 py-1 text-[0.7rem] font-medium text-white/60">
                          {platform}
                        </span>
                      ))}
                      {product.status && (
                        <span className="bg-amber-400 px-2.5 py-1 text-[0.7rem] font-bold text-slate-950">{product.status}</span>
                      )}
                    </div>

                    <h3 className="mt-6 font-heading text-3xl font-bold sm:text-4xl">{product.name}</h3>
                    <p className="mt-3 max-w-md text-lg text-white/60">{product.pitch}</p>

                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {product.features.map((feature) => {
                        const Icon = FEATURE_ICONS[feature] ?? Check;
                        return (
                          <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                            <span className="grid size-8 shrink-0 place-items-center border border-sky-400/30 bg-sky-400/10 text-sky-400">
                              <Icon className="size-4 stroke-[1.75]" aria-hidden />
                            </span>
                            {feature}
                          </li>
                        );
                      })}
                    </ul>

                    <Link
                      href={product.cta.href}
                      className="group/cta mt-10 inline-flex h-12 items-center gap-3 border border-sky-400/40 px-6 text-sm font-semibold text-sky-300 transition-colors hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950"
                    >
                      {product.cta.label}
                      <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" aria-hidden />
                    </Link>
                  </div>

                  <div className={cn("relative", flipped && "lg:order-1")}>
                    <div
                      aria-hidden
                      className="absolute -inset-6 -z-10 bg-[radial-gradient(ellipse_at_center,rgb(14_165_233/0.18),transparent_70%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="transition-transform duration-700 ease-out group-hover:-translate-y-1.5">
                      <Mock />
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
