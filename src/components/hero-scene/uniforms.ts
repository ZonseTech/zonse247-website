import { Color } from "three";
import { COLORS } from "./config";

export const clock = { uTime: { value: 0 }, uPixelRatio: { value: 1 } };

const color = (hex: string) => ({ value: new Color(hex) });

export const uniforms = {
  wave: { ...clock, uColor: color(COLORS.wave), uCrest: color(COLORS.waveCrest) },
  nodes: { ...clock, uColor: color(COLORS.node) },
  lines: { ...clock, uColor: color(COLORS.line) },
  packets: { ...clock, uColor: color(COLORS.packet) },
};
