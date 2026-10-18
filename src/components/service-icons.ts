import { BrainCircuit, Code, Headset, Laptop, type LucideIcon } from "lucide-react";
import type { SERVICES } from "@/lib/site";

export const SERVICE_ICONS: Record<(typeof SERVICES)[number]["key"], LucideIcon> = {
  supply: Laptop,
  software: Code,
  "data-ai": BrainCircuit,
  advisory: Headset,
};
