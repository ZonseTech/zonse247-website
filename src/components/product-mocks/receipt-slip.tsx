import type { ReactNode } from "react";

export const SALE = {
  number: "SALE-20261017-00042",
  date: "Oct 17, 2026",
  terminal: "Till 1",
  items: [
    { name: "Sugar 2kg", qty: 2, unit: 4500 },
    { name: "Cooking oil 2L", qty: 1, unit: 7200 },
    { name: "Tea leaves", qty: 2, unit: 2800 },
  ],
  vatRate: 0.165,
  payment: "Airtel Money",
};

export const subtotal = SALE.items.reduce((sum, item) => sum + item.qty * item.unit, 0);
export const vat = Math.round(subtotal * SALE.vatRate);
export const total = subtotal + vat;

export const money = (amount: number) =>
  `MK${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

function Row({ left, right, bold }: { left: ReactNode; right: ReactNode; bold?: boolean }) {
  return (
    <p className={`flex justify-between gap-2 ${bold ? "font-bold" : ""}`}>
      <span className="truncate">{left}</span>
      <span className="shrink-0">{right}</span>
    </p>
  );
}

const Rule = ({ light }: { light?: boolean }) => (
  <div className={`my-1 border-t ${light ? "border-dashed border-slate-300" : "border-slate-400"}`} />
);

export function ReceiptSlip() {
  return (
    <div className="font-mono text-[0.42rem] leading-[1.35] text-slate-800">
      <Row left="Receipt #:" right={SALE.number} />
      <Row left="Date:" right={SALE.date} />
      <Row left="Customer:" right="Walk-in Customer" />
      <Row left="Terminal:" right={SALE.terminal} />
      <Rule />
      {SALE.items.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <Row left={`  ${item.qty} x ${item.unit.toFixed(2)}`} right={money(item.qty * item.unit)} />
        </div>
      ))}
      <Rule />
      <Row left="Subtotal:" right={money(subtotal)} />
      <Row left="VAT:" right={money(vat)} />
      <Rule light />
      <Row left="TOTAL:" right={money(total)} bold />
      <Rule />
      <p>Payment</p>
      <Row left={`${SALE.payment}:`} right={money(total)} />
      <Rule />
      <p className="text-center">Thank you for your business!</p>
      <p className="mt-1 text-center text-slate-500">Powered by Zonse247 POS</p>
    </div>
  );
}

const STRIP = 12;
const BENDS = [0, -6, -9, -10, -8, -4, 1, 6, 10, 11, 9, 6, 2, -2, -6, -8, -6, -1, 6, 13, 20, 27, 34, 40, 46, 52, 58, 64];

const curve = BENDS.reduce<number[]>((acc, bend) => [...acc, (acc.at(-1) ?? 0) + bend], []);

function shade(angle: number) {
  const tilt = (angle * Math.PI) / 180;
  return Math.min(0.3, 0.02 + 0.22 * (1 - Math.cos(tilt)) + Math.max(0, -Math.sin(tilt)) * 0.14).toFixed(3);
}

function Strip({ index, children }: { index: number; children?: ReactNode }) {
  const last = index === BENDS.length - 1;
  return (
    <div
      className={index === 0 ? "relative transform-3d" : "absolute inset-x-0 top-full transform-3d"}
      style={{ height: STRIP + 1, transformOrigin: "top", transform: `rotateX(${BENDS[index]}deg)` }}
    >
      <div className="relative h-full overflow-hidden bg-white backface-visible">
        <div className="px-2.5 pt-2.5" style={{ transform: `translateY(${-index * STRIP}px)` }}>
          <ReceiptSlip />
        </div>
        <span
          className="absolute inset-0"
          style={{
            background: `linear-gradient(rgb(15 23 42 / ${shade(curve[index])}), rgb(15 23 42 / ${shade(curve[index + 1] ?? curve[index])}))`,
          }}
        />
      </div>
      {last && <div className="receipt-edge absolute inset-x-0 top-full h-2 bg-white" />}
      {children}
    </div>
  );
}

export function CurvedReceipt() {
  const strips = BENDS.reduceRight<ReactNode>((child, _, index) => <Strip index={index}>{child}</Strip>, null);
  return (
    <div className="drop-shadow-[0_18px_18px_rgb(0_0_0/0.55)] perspective-[900px]">
      <div className="transform-3d transform-[rotateX(14deg)_rotateY(-18deg)_rotateZ(3deg)]">
        {strips}
      </div>
    </div>
  );
}
