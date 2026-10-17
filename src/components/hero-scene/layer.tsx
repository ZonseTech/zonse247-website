import { useMemo } from "react";
import { AdditiveBlending, type IUniform } from "three";
import type { Shader } from "./shaders";

type Attributes = Record<string, [Float32Array, number]>;

type LayerProps = {
  kind: "points" | "lineSegments";
  attributes: Attributes;
  shader: Shader;
  uniforms: Record<string, IUniform>;
  position?: [number, number, number];
};

export function Layer({ kind, attributes, shader, uniforms, position }: LayerProps) {
  const material = useMemo(
    () => [{ ...shader, uniforms, transparent: true, depthWrite: false, blending: AdditiveBlending }] as const,
    [shader, uniforms],
  );

  const children = (
    <>
      <bufferGeometry>
        {Object.entries(attributes).map(([name, [array, size]]) => (
          <bufferAttribute key={name} attach={`attributes-${name}`} args={[array, size]} />
        ))}
      </bufferGeometry>
      <shaderMaterial args={material} />
    </>
  );

  return kind === "points" ? (
    <points position={position}>{children}</points>
  ) : (
    <lineSegments position={position}>{children}</lineSegments>
  );
}
