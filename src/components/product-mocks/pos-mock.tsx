import {
  ChartColumn,
  Coffee,
  Droplet,
  Milk,
  Minus,
  Package,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Users,
  Wheat,
  WifiOff,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CurvedReceipt, money, SALE, subtotal, total, vat } from "./receipt-slip";
import { FloatingCard, WindowBar } from "./window-bar";

const RAIL: { Icon: LucideIcon; active?: boolean }[] = [
  { Icon: ShoppingCart, active: true },
  { Icon: Package },
  { Icon: Users },
  { Icon: ChartColumn },
  { Icon: Settings },
];

const CATEGORIES = ["All", "Groceries", "Drinks", "Household"];

const TILES: { name: string; price: string; stock: number; tone: string; Icon: LucideIcon }[] = [
  { name: "Sugar 2kg", price: "4,500", stock: 48, tone: "from-sky-400/25 text-sky-300", Icon: Package },
  { name: "Cooking oil 2L", price: "7,200", stock: 3, tone: "from-amber-400/25 text-amber-300", Icon: Droplet },
  { name: "Maize flour 10kg", price: "12,000", stock: 26, tone: "from-emerald-400/25 text-emerald-300", Icon: Wheat },
  { name: "Tea leaves", price: "2,800", stock: 61, tone: "from-orange-400/25 text-orange-300", Icon: Coffee },
  { name: "Fresh milk 1L", price: "1,900", stock: 14, tone: "from-sky-400/25 text-sky-200", Icon: Milk },
  { name: "Soap bar", price: "1,250", stock: 90, tone: "from-rose-400/25 text-rose-300", Icon: Sparkles },
];


const PAYMENTS = ["Cash", "Airtel Money", "Mpamba", "Card"];

const SPARK = "M0 22 L12 18 L24 20 L36 12 L48 14 L60 7 L72 9 L84 2";

export function PosMock() {
  return (
    <div aria-hidden className="relative select-none">
      <FloatingCard className="float-slow -top-8 -left-3 hidden w-48 p-3 sm:block lg:-left-8">
        <p className="text-[0.6rem] font-semibold tracking-widest text-white/45 uppercase">Today&apos;s sales</p>
        <p className="mt-1 font-heading text-lg font-bold">MK 1,248,500</p>
        <div className="mt-1 flex items-end justify-between gap-2">
          <span className="flex items-center gap-1 text-[0.6rem] font-semibold whitespace-nowrap text-emerald-400">
            <TrendingUp className="size-3" />
            12% vs yesterday
          </span>
          <svg viewBox="0 0 84 24" className="h-5 w-14 text-sky-400">
            <path d={SPARK} fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </FloatingCard>

      <div className="border border-white/10 bg-slate-900/85 shadow-2xl shadow-sky-950/60">
        <WindowBar title="Zonse247 POS · Till 1">
          <span className="flex items-center gap-1.5 bg-amber-400/15 px-2 py-0.5 text-[0.6rem] font-semibold text-amber-300">
            <WifiOff className="size-3" />
            Offline · 3 sales queued
          </span>
        </WindowBar>

        <div className="grid grid-cols-[1fr_8.5rem] sm:grid-cols-[2.5rem_1fr_10.5rem]">
          <div className="hidden flex-col items-center gap-1 border-r border-white/10 py-3 sm:flex">
            {RAIL.map(({ Icon, active }, i) => (
              <span key={i} className={cn("grid size-7 place-items-center", active ? "bg-sky-500 text-white" : "text-white/35")}>
                <Icon className="size-3.5" />
              </span>
            ))}
          </div>

          <div className="min-w-0 p-3">
            <div className="flex items-center gap-2 border border-white/10 bg-white/5 px-2.5 py-1.5">
              <Search className="size-3 text-white/40" />
              <span className="text-[0.6rem] text-white/35">Scan or search products</span>
            </div>
            <div className="mt-2 flex gap-1 overflow-hidden">
              {CATEGORIES.map((category, i) => (
                <span
                  key={category}
                  className={cn("shrink-0 px-2 py-0.5 text-[0.55rem] font-medium", i === 0 ? "bg-white text-slate-950" : "bg-white/5 text-white/55")}
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="mt-2.5 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
              {TILES.map(({ name, price, stock, tone, Icon }, i) => (
                <div key={name} className={cn("border border-white/5 bg-white/[0.03]", i >= 4 && "hidden sm:block")}>
                  <div className={cn("relative grid h-10 place-items-center bg-linear-to-br to-transparent", tone)}>
                    <Icon className="size-4" />
                    <span
                      className={cn(
                        "absolute top-1 right-1 px-1 text-[0.5rem] font-semibold",
                        stock <= 5 ? "bg-amber-400 text-slate-950" : "bg-slate-950/60 text-white/60",
                      )}
                    >
                      {stock <= 5 ? `${stock} left` : stock}
                    </span>
                  </div>
                  <div className="p-1.5">
                    <p className="truncate text-[0.6rem] text-white/85">{name}</p>
                    <p className="font-mono text-[0.55rem] text-sky-300">MK {price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col border-l border-white/10 bg-white/[0.02] p-3">
            <div className="flex items-baseline justify-between">
              <p className="text-[0.6rem] font-semibold tracking-widest text-white/45 uppercase">Sale</p>
              <p className="font-mono text-[0.55rem] text-white/35">#{SALE.number.slice(-5)}</p>
            </div>
            <ul className="mt-2 space-y-2">
              {SALE.items.map((line) => (
                <li key={line.name} className="text-[0.6rem]">
                  <p className="truncate text-white/85">{line.name}</p>
                  <div className="mt-0.5 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-white/50">
                      <Minus className="size-2.5 border border-white/15" />
                      <span className="font-mono">{line.qty}</span>
                      <Plus className="size-2.5 border border-white/15" />
                    </span>
                    <span className="font-mono text-white/75">{(line.qty * line.unit).toLocaleString("en-US")}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3 space-y-1 border-t border-dashed border-white/15 pt-2 font-mono text-[0.55rem] text-white/50">
              <p className="flex justify-between">
                <span>Subtotal</span>
                <span>{subtotal.toLocaleString("en-US")}</span>
              </p>
              <p className="flex justify-between">
                <span>VAT 16.5%</span>
                <span>{vat.toLocaleString("en-US")}</span>
              </p>
              <p className="flex justify-between text-[0.7rem] font-semibold text-white">
                <span className="font-sans">Total</span>
                <span className="text-amber-300">{money(total)}</span>
              </p>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1">
              {PAYMENTS.map((method) => (
                <span
                  key={method}
                  className={cn(
                    "truncate border px-1 py-0.5 text-center text-[0.5rem]",
                    method === SALE.payment ? "border-sky-400 bg-sky-400/15 text-sky-200" : "border-white/10 text-white/50",
                  )}
                >
                  {method}
                </span>
              ))}
            </div>
            <p className="mt-2 bg-sky-500 py-1.5 text-center text-[0.65rem] font-semibold">Charge {money(total)}</p>
          </div>
        </div>
      </div>

      <div className="float-slower absolute top-full right-6 z-20 -mt-2 hidden w-44 origin-top-right sm:block lg:-right-12 lg:scale-85 xl:scale-100">
        <CurvedReceipt />
      </div>
    </div>
  );
}
