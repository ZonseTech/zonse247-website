import {
  Activity,
  Calculator,
  CheckCheck,
  Clock,
  FileText,
  GitBranch,
  MessageCircle,
  ShoppingCart,
  TriangleAlert,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FloatingCard, WindowBar } from "./window-bar";

const FLOWS: { name: string; Icon: LucideIcon; on: boolean; active?: boolean }[] = [
  { name: "Sync sales to accounting", Icon: Calculator, on: true },
  { name: "Low-stock alerts", Icon: TriangleAlert, on: true, active: true },
  { name: "Daily sales report", Icon: FileText, on: true },
  { name: "Mobile money reconcile", Icon: Wallet, on: false },
];

const RUNS = [38, 52, 44, 61, 57, 73, 66, 80, 71, 88];

function FlowNode({
  step,
  title,
  detail,
  Icon,
  tone,
}: {
  step: string;
  title: string;
  detail: string;
  Icon: LucideIcon;
  tone: string;
}) {
  return (
    <div className="relative z-10 border border-white/10 bg-slate-900 p-2 shadow-lg shadow-black/30">
      <p className="text-[0.45rem] font-bold tracking-[0.18em] text-white/40 uppercase">{step}</p>
      <div className="mt-1 flex items-center gap-2">
        <span className={cn("grid size-6 shrink-0 place-items-center", tone)}>
          <Icon className="size-3" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[0.6rem] font-semibold text-white/90">{title}</p>
          <p className="truncate text-[0.5rem] text-white/45">{detail}</p>
        </div>
      </div>
    </div>
  );
}

function Wire({ className }: { className?: string }) {
  return (
    <span className={cn("absolute w-px bg-sky-400/40", className)}>
      <span className="flow-dot absolute left-1/2 size-1.5 -translate-x-1/2 bg-amber-300 motion-reduce:hidden" />
    </span>
  );
}

export function AutomationMock() {
  return (
    <div aria-hidden className="relative select-none">
      <FloatingCard className="float-slow -top-8 -left-3 hidden w-44 p-3 sm:block lg:-left-8">
        <p className="flex items-center gap-1.5 text-[0.6rem] font-semibold tracking-widest text-white/45 uppercase">
          <Activity className="size-3 text-sky-400" />
          Runs today
        </p>
        <div className="mt-1 flex items-end justify-between gap-2">
          <div>
            <p className="font-heading text-lg leading-none font-bold">1,284</p>
            <p className="mt-1 text-[0.55rem] font-semibold text-emerald-400">99.8% success</p>
          </div>
          <div className="flex h-8 items-end gap-0.5">
            {RUNS.map((h, i) => (
              <span key={i} className="w-1 bg-sky-400/70" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </FloatingCard>

      <div className="border border-white/10 bg-slate-900/85 shadow-2xl shadow-sky-950/60">
        <WindowBar title="Automation · Low-stock alerts">
          <span className="flex items-center gap-1.5 bg-emerald-400/15 px-2 py-0.5 text-[0.6rem] font-semibold text-emerald-300">
            <span className="size-1.5 animate-pulse bg-emerald-400 motion-reduce:animate-none" />
            Live
          </span>
        </WindowBar>

        <div className="grid sm:grid-cols-[10.5rem_1fr]">
          <div className="hidden border-r border-white/10 p-2 sm:block">
            <p className="px-1 text-[0.5rem] font-bold tracking-[0.18em] text-white/35 uppercase">Flows</p>
            <ul className="mt-1.5 space-y-1">
              {FLOWS.map(({ name, Icon, on, active }) => (
                <li
                  key={name}
                  className={cn(
                    "flex items-center gap-1.5 border px-1.5 py-1.5",
                    active ? "border-sky-400/50 bg-sky-400/10" : "border-transparent",
                  )}
                >
                  <Icon className={cn("size-3 shrink-0", active ? "text-sky-300" : "text-white/40")} />
                  <span className={cn("min-w-0 flex-1 truncate text-[0.55rem]", active ? "text-white" : "text-white/60")}>
                    {name}
                  </span>
                  <span className={cn("flex h-2.5 w-4 shrink-0 items-center px-px", on ? "justify-end bg-emerald-400/80" : "bg-white/15")}>
                    <span className="size-2 bg-white" />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative bg-[radial-gradient(rgb(255_255_255/0.08)_1px,transparent_1px)] bg-size-[0.75rem_0.75rem] p-3">
            <div className="mx-auto w-3/4 sm:w-2/3">
              <FlowNode step="Trigger" title="Sale completed" detail="Zonse247 POS · any branch" Icon={ShoppingCart} tone="bg-sky-500 text-white" />
            </div>
            <div className="relative mx-auto h-4 w-px">
              <Wire className="inset-y-0 left-0" />
            </div>
            <div className="mx-auto w-3/4 sm:w-2/3">
              <FlowNode step="If" title="Stock ≤ 5 units" detail="Checks each item sold" Icon={GitBranch} tone="bg-amber-400 text-slate-950" />
            </div>
            <div className="relative h-5">
              <Wire className="top-0 left-1/2 h-2.5" />
              <span className="absolute top-2.5 right-1/4 left-1/4 h-px bg-sky-400/40" />
              <Wire className="top-2.5 bottom-0 left-1/4" />
              <Wire className="top-2.5 bottom-0 left-3/4" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <FlowNode step="Then" title="WhatsApp manager" detail="Branch manager" Icon={MessageCircle} tone="bg-emerald-500 text-white" />
              <FlowNode step="Then" title="Draft purchase order" detail="Preferred supplier" Icon={FileText} tone="bg-violet-500 text-white" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-white/10 px-3 py-2 font-mono text-[0.55rem] text-white/50">
          <span className="flex min-w-0 items-center gap-1.5 truncate">
            <span className="size-1.5 shrink-0 bg-emerald-400" />
            Ran for Cooking oil 2L · 3 left · 2 actions
          </span>
          <span className="flex shrink-0 items-center gap-1">
            <Clock className="size-2.5" />
            2s ago
          </span>
        </div>
      </div>

      <FloatingCard className="float-slower -right-3 -bottom-24 hidden w-52 border-emerald-400/30 p-0 sm:block lg:-right-8">
        <p className="flex items-center gap-1.5 border-b border-white/10 bg-emerald-500/15 px-2.5 py-1.5 text-[0.6rem] font-semibold text-emerald-200">
          <MessageCircle className="size-3" />
          Zonse247 Alerts
        </p>
        <div className="p-2.5">
          <div className="bg-emerald-900/60 p-2 text-[0.6rem] leading-snug text-white/90">
            Low stock at Kanengo: <span className="font-semibold">Cooking oil 2L</span>, 3 left. Purchase order drafted.
            <p className="mt-1 flex items-center justify-end gap-1 text-[0.5rem] text-white/45">
              14:32
              <CheckCheck className="size-3 text-sky-300" />
            </p>
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}
