import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const StarBackground = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    // Generate sphere positions manually to avoid NaN issues with maath
    const positions = new Float32Array(8000);
    for (let i = 0; i < 8000; i += 3) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 1.5;
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
      
      // Ensure all values are valid numbers
      if (!isFinite(positions[i])) positions[i] = 0;
      if (!isFinite(positions[i + 1])) positions[i + 1] = 0;
      if (!isFinite(positions[i + 2])) positions[i + 2] = 0;
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-screen fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />

        <Preload all />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
