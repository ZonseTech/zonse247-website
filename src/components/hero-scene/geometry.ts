import { NETWORK, WAVE } from "./config";

type Vec3 = [number, number, number];

function seeded(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

const between = (random: () => number, [min, max]: [number, number]) => min + random() * (max - min);

function buildWave() {
  const { cols, rows, width, depth, jitter } = WAVE;
  const random = seeded(WAVE.seed);
  const positions = new Float32Array(cols * rows * 3);
  const randoms = new Float32Array(cols * rows);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      positions[i * 3] = (c / (cols - 1) - 0.5) * width + (random() - 0.5) * jitter;
      positions[i * 3 + 2] = (r / (rows - 1) - 0.5) * depth + (random() - 0.5) * jitter;
      randoms[i] = random();
    }
  }
  return { positions, randoms };
}

function linkNodes(nodes: Vec3[]) {
  const edges: [number, number][] = [];
  const degree = new Array(nodes.length).fill(0);
  nodes.forEach((from, a) => {
    const near = nodes
      .map((to, b) => ({ b, d: Math.hypot(to[0] - from[0], to[1] - from[1], to[2] - from[2]) }))
      .filter(({ b, d }) => b > a && d < NETWORK.linkDistance)
      .sort((x, y) => x.d - y.d);
    for (const { b } of near) {
      if (degree[a] >= NETWORK.maxLinks || degree[b] >= NETWORK.maxLinks) continue;
      edges.push([a, b]);
      degree[a]++;
      degree[b]++;
    }
  });
  return edges;
}

function buildNetwork() {
  const random = seeded(NETWORK.seed);
  const { bounds } = NETWORK;
  const nodes = Array.from({ length: NETWORK.nodes }, (): Vec3 => [
    between(random, bounds.x),
    between(random, bounds.y),
    between(random, bounds.z),
  ]);
  const edges = linkNodes(nodes);

  const nodeData = {
    positions: new Float32Array(nodes.flat()),
    randoms: Float32Array.from(nodes, () => random()),
  };

  const lines = {
    positions: new Float32Array(edges.length * 6),
    alphas: new Float32Array(edges.length * 2),
  };
  edges.forEach(([a, b], i) => {
    lines.positions.set(nodes[a], i * 6);
    lines.positions.set(nodes[b], i * 6 + 3);
    lines.alphas.fill(between(random, NETWORK.lineAlpha), i * 2, i * 2 + 2);
  });

  const packets = {
    starts: new Float32Array(NETWORK.packets * 3),
    ends: new Float32Array(NETWORK.packets * 3),
    speeds: new Float32Array(NETWORK.packets),
    offsets: new Float32Array(NETWORK.packets),
  };
  for (let i = 0; i < NETWORK.packets; i++) {
    const [a, b] = edges[Math.floor(random() * edges.length)];
    const [from, to] = random() > 0.5 ? [a, b] : [b, a];
    packets.starts.set(nodes[from], i * 3);
    packets.ends.set(nodes[to], i * 3);
    packets.speeds[i] = between(random, NETWORK.packetSpeed);
    packets.offsets[i] = random();
  }

  return { nodes: nodeData, lines, packets };
}

export const wave = buildWave();
export const network = buildNetwork();
