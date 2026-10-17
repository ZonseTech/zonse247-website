export const CAMERA = {
  position: [0, 2.2, 8.5] as [number, number, number],
  target: [0, -0.3, -2] as [number, number, number],
  fov: 50,
};

export const WAVE = {
  cols: 180,
  rows: 80,
  width: 30,
  depth: 16,
  jitter: 0.08,
  offset: [2, -0.5, 0] as [number, number, number],
  flow: 1.1,
  speed: 2.2,
  seed: 247,
};

export const NETWORK = {
  nodes: 70,
  linkDistance: 2.8,
  maxLinks: 3,
  packets: 48,
  bounds: { x: [-11.5, -0.5], y: [0.5, 4.4], z: [-8, -1] } as Record<"x" | "y" | "z", [number, number]>,
  lineAlpha: [0.14, 0.36] as [number, number],
  packetSpeed: [0.18, 0.48] as [number, number],
  spin: 0.12,
  seed: 2470,
};

export const COLORS = {
  wave: "#38bdf8",
  waveCrest: "#fbbf24",
  node: "#7dd3fc",
  line: "#38bdf8",
  packet: "#fcd34d",
};

export const PARALLAX = {
  yaw: 0.12,
  pitch: 0.05,
  ease: 0.03,
};
