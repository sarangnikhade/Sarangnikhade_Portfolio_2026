"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = window.innerHeight * 2;
      setP(Math.min(1, window.scrollY / max));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

function MorphingShape() {
  const ref = useRef<THREE.Mesh>(null!);
  const mat = useRef<any>(null!);
  const p = useScrollProgress();

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
    const s = 1.2 + p * 0.4;
    ref.current.scale.lerp(new THREE.Vector3(s, s, s), 0.08);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, -p * 1.4, 0.08);
    if (mat.current) {
      mat.current.distort = 0.35 + Math.sin(state.clock.elapsedTime * 0.6) * 0.1 + p * 0.2;
      mat.current.speed = 1.2 + p * 1.5;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.4, 24]} />
        <MeshDistortMaterial
          ref={mat}
          color="#c8ff3e"
          roughness={0.15}
          metalness={0.85}
          distort={0.35}
          speed={1.4}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 4 + Math.random() * 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x += delta * 0.02;
    }
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#f5f1ea" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-0">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 6, 5]} intensity={1.2} />
          <pointLight position={[-4, -3, -2]} intensity={0.8} color="#c8ff3e" />
          <MorphingShape />
          <Particles />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
