"use client";

import { Canvas } from "@react-three/fiber";
import { CAMERA, WAVE } from "./config";
import { network, wave } from "./geometry";
import { Layer } from "./layer";
import { lineShader, nodeShader, packetShader, waveShader } from "./shaders";
import { uniforms } from "./uniforms";
import { useSceneMotion } from "./use-scene-motion";

function Scene({ animate }: { animate: boolean }) {
  const group = useSceneMotion(animate);

  return (
    <group ref={group}>
      <Layer
        kind="points"
        position={WAVE.offset}
        shader={waveShader}
        uniforms={uniforms.wave}
        attributes={{ position: [wave.positions, 3], aRandom: [wave.randoms, 1] }}
      />
      <Layer
        kind="lineSegments"
        shader={lineShader}
        uniforms={uniforms.lines}
        attributes={{ position: [network.lines.positions, 3], aAlpha: [network.lines.alphas, 1] }}
      />
      <Layer
        kind="points"
        shader={nodeShader}
        uniforms={uniforms.nodes}
        attributes={{ position: [network.nodes.positions, 3], aRandom: [network.nodes.randoms, 1] }}
      />
      <Layer
        kind="points"
        shader={packetShader}
        uniforms={uniforms.packets}
        attributes={{
          position: [network.packets.starts, 3],
          aEnd: [network.packets.ends, 3],
          aSpeed: [network.packets.speeds, 1],
          aOffset: [network.packets.offsets, 1],
        }}
      />
    </group>
  );
}

export default function HeroScene({ animate }: { animate: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: CAMERA.position, fov: CAMERA.fov }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      frameloop={animate ? "always" : "demand"}
      onCreated={({ camera }) => camera.lookAt(...CAMERA.target)}
    >
      <Scene animate={animate} />
    </Canvas>
  );
}
