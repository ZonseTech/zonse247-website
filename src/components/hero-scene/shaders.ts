import { NETWORK, WAVE } from "./config";

const center = (range: [number, number]) => ((range[0] + range[1]) / 2).toFixed(2);

export type Shader = { vertexShader: string; fragmentShader: string };

const networkDrift = `
  vec3 drift(vec3 p, float t) {
    vec2 c = vec2(${center(NETWORK.bounds.x)}, ${center(NETWORK.bounds.z)});
    float a = t * ${NETWORK.spin.toFixed(3)};
    vec2 r = mat2(cos(a), -sin(a), sin(a), cos(a)) * (p.xz - c) + c;
    vec3 q = vec3(r.x, p.y, r.y);
    q.x += sin(t * 0.5 + p.y * 1.3 + p.z * 0.7) * 0.18;
    q.y += sin(t * 0.7 + p.x * 0.9 + p.z * 1.1) * 0.22;
    return q;
  }
`;

const roundPoint = `
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
`;

export const waveShader: Shader = {
  vertexShader: `
    uniform float uTime;
    uniform float uPixelRatio;
    attribute float aRandom;
    varying float vElevation;
    varying float vDepth;
    varying float vEdge;

    const float HALF_DEPTH = ${(WAVE.depth / 2).toFixed(2)};
    const float FLOW = ${WAVE.flow.toFixed(2)};
    const float SPEED = ${WAVE.speed.toFixed(2)};

    void main() {
      vec3 g = position;
      vec3 p = position;
      p.z = mod(p.z + HALF_DEPTH + uTime * FLOW, HALF_DEPTH * 2.0) - HALF_DEPTH;
      float t = uTime * SPEED;
      float e = sin(g.x * 0.32 + t * 0.55) * 0.55
        + sin(g.z * 0.55 + t * 0.4) * 0.45
        + sin((g.x + g.z) * 0.9 + t * 0.9) * 0.12;
      p.y += e;
      vElevation = e;
      vEdge = smoothstep(-HALF_DEPTH, -HALF_DEPTH + 3.0, p.z) * smoothstep(HALF_DEPTH, HALF_DEPTH - 1.5, p.z);

      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_Position = projectionMatrix * mv;
      gl_PointSize = (2.2 + aRandom * 3.0) * uPixelRatio * (12.0 / -mv.z);
      vDepth = -mv.z;
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    uniform vec3 uCrest;
    varying float vElevation;
    varying float vDepth;
    varying float vEdge;

    void main() {
      ${roundPoint}
      float alpha = smoothstep(0.5, 0.05, d);
      vec3 color = mix(uColor, uCrest, smoothstep(0.55, 1.05, vElevation));
      float fade = smoothstep(24.0, 7.0, vDepth) * vEdge;
      gl_FragColor = vec4(color, alpha * fade);
    }
  `,
};

export const nodeShader: Shader = {
  vertexShader: `
    uniform float uTime;
    uniform float uPixelRatio;
    attribute float aRandom;
    varying float vGlow;
    ${networkDrift}

    void main() {
      vec3 p = drift(position, uTime);
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_Position = projectionMatrix * mv;
      vGlow = 0.55 + 0.45 * sin(uTime * 1.4 + aRandom * 6.28);
      gl_PointSize = (7.0 + aRandom * 6.0) * uPixelRatio * (10.0 / -mv.z);
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    varying float vGlow;

    void main() {
      ${roundPoint}
      float core = smoothstep(0.22, 0.0, d);
      float halo = smoothstep(0.5, 0.0, d) * 0.35;
      gl_FragColor = vec4(uColor, (core + halo) * vGlow);
    }
  `,
};

export const lineShader: Shader = {
  vertexShader: `
    uniform float uTime;
    attribute float aAlpha;
    varying float vAlpha;
    ${networkDrift}

    void main() {
      vAlpha = aAlpha;
      vec3 p = drift(position, uTime);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    varying float vAlpha;

    void main() {
      gl_FragColor = vec4(uColor, vAlpha);
    }
  `,
};

export const packetShader: Shader = {
  vertexShader: `
    uniform float uTime;
    uniform float uPixelRatio;
    attribute vec3 aEnd;
    attribute float aSpeed;
    attribute float aOffset;
    varying float vProgress;
    ${networkDrift}

    void main() {
      float t = fract(uTime * aSpeed + aOffset);
      vec3 from = drift(position, uTime);
      vec3 to = drift(aEnd, uTime);
      vec3 p = mix(from, to, t);
      vProgress = t;
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_Position = projectionMatrix * mv;
      gl_PointSize = 10.0 * uPixelRatio * (10.0 / -mv.z);
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    varying float vProgress;

    void main() {
      ${roundPoint}
      float alpha = smoothstep(0.5, 0.0, d) * sin(vProgress * 3.14159);
      gl_FragColor = vec4(uColor, alpha);
    }
  `,
};
