import {
  Apple,
  Backpack,
  BadgeCheck,
  Bell,
  CircleCheck,
  Lamp,
  MapPin,
  Plus,
  Search,
  Shirt,
  ShoppingCart,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FloatingCard, WindowBar } from "./window-bar";

const CATEGORIES = ["All", "Groceries", "Electronics", "Fashion", "School"];

const LISTINGS: { name: string; shop: string; district: string; price: string; tone: string; Icon: LucideIcon }[] = [
  { name: "Fresh tomatoes 1kg", shop: "Limbe Fresh Mart", district: "Blantyre", price: "3,500", tone: "from-rose-400/30 text-rose-300", Icon: Apple },
  { name: "Solar lantern", shop: "Area 47 Electricals", district: "Lilongwe", price: "28,000", tone: "from-amber-400/30 text-amber-300", Icon: Lamp },
  { name: "School bag", shop: "Kanengo General", district: "Lilongwe", price: "18,500", tone: "from-sky-400/30 text-sky-300", Icon: Backpack },
  { name: "Chitenje fabric", shop: "Mzuzu Textiles", district: "Mzuzu", price: "9,000", tone: "from-emerald-400/30 text-emerald-300", Icon: Shirt },
];

export function MarketplaceMock() {
  return (
    <div aria-hidden className="relative select-none">
      <FloatingCard className="float-slow -top-8 -right-3 hidden w-52 p-3 sm:block lg:-right-8">
        <div className="flex items-start gap-2.5">
          <span className="grid size-7 shrink-0 place-items-center bg-sky-500 text-white">
            <Bell className="size-3.5" />
          </span>
          <div className="min-w-0">
            <p className="flex justify-between gap-2 text-[0.65rem] font-semibold">
              New order
              <span className="font-normal text-white/40">now</span>
            </p>
            <p className="truncate text-[0.6rem] text-white/60">2 × Solar lantern · Area 47</p>
            <p className="mt-0.5 font-mono text-[0.65rem] text-amber-300">MK 56,000</p>
          </div>
        </div>
      </FloatingCard>

      <div className="border border-white/10 bg-slate-900/85 shadow-2xl shadow-sky-950/60">
        <WindowBar title="Zonse247 Marketplace" />

        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
          <span className="font-heading text-[0.7rem] font-bold">
            Zonse<span className="text-amber-400">247</span>
          </span>
          <div className="flex flex-1 items-center gap-1.5 border border-white/10 bg-white/5 px-2 py-1">
            <Search className="size-3 text-white/40" />
            <span className="truncate text-[0.55rem] text-white/35">Search products and shops</span>
          </div>
          <span className="relative text-white/70">
            <ShoppingCart className="size-3.5" />
            <span className="absolute -top-1.5 -right-1.5 grid size-3 place-items-center bg-amber-400 text-[0.45rem] font-bold text-slate-950">
              2
            </span>
          </span>
        </div>

        <div className="p-3">
          <div className="flex gap-1 overflow-hidden">
            {CATEGORIES.map((category, i) => (
              <span
                key={category}
                className={cn("shrink-0 px-2 py-0.5 text-[0.55rem] font-medium", i === 0 ? "bg-white text-slate-950" : "bg-white/5 text-white/55")}
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-2.5 grid grid-cols-2 gap-2">
            {LISTINGS.map(({ name, shop, district, price, tone, Icon }) => (
              <div key={name} className="border border-white/5 bg-white/[0.03]">
                <div className={cn("relative grid h-14 place-items-center bg-linear-to-br to-transparent", tone)}>
                  <Icon className="size-5" />
                  <span className="absolute top-1 left-1 flex items-center gap-0.5 bg-slate-950/70 px-1 py-0.5 text-[0.45rem] font-semibold text-emerald-300">
                    <BadgeCheck className="size-2.5" />
                    Verified
                  </span>
                </div>
                <div className="p-2">
                  <p className="truncate text-[0.6rem] text-white/85">{name}</p>
                  <p className="mt-0.5 truncate text-[0.5rem] text-white/45">{shop}</p>
                  <div className="mt-1.5 flex items-center justify-between">
                    <span className="font-mono text-[0.6rem] text-sky-300">MK {price}</span>
                    <span className="flex items-center gap-0.5 text-[0.45rem] text-white/40">
                      <MapPin className="size-2" />
                      {district}
                    </span>
                  </div>
                  <span className="mt-1.5 flex items-center justify-center gap-1 border border-white/10 py-0.5 text-[0.5rem] font-medium text-white/70">
                    <Plus className="size-2.5" />
                    Add to cart
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FloatingCard className="float-slower -bottom-8 -left-3 hidden w-48 p-3 sm:block lg:-left-8">
        <div className="flex items-center gap-2.5">
          <span className="grid size-7 shrink-0 place-items-center bg-rose-500/20 text-rose-300">
            <Smartphone className="size-3.5" />
          </span>
          <div className="min-w-0">
            <p className="text-[0.6rem] text-white/50">Airtel Money</p>
            <p className="flex items-center gap-1 text-[0.65rem] font-semibold text-emerald-300">
              <CircleCheck className="size-3" />
              Payment received
            </p>
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}
