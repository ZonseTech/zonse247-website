import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import { PARALLAX } from "./config";
import { clock } from "./uniforms";

export function useSceneMotion(animate: boolean) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    clock.uPixelRatio.value = state.viewport.dpr;
    if (!animate) return;
    clock.uTime.value += delta;
    const rotation = group.current?.rotation;
    if (rotation) {
      rotation.y += (state.pointer.x * PARALLAX.yaw - rotation.y) * PARALLAX.ease;
      rotation.x += (-state.pointer.y * PARALLAX.pitch - rotation.x) * PARALLAX.ease;
    }
  });

  return group;
}
