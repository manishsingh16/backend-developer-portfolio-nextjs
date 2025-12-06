import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
        <MeshDistortMaterial
          color="#8b5cf6" // Violet/Neon
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </Sphere>
    </Float>
  );
};

const InnerCore = () => {
   return (
    <Float speed={4} rotationIntensity={2} floatIntensity={1}>
        <Sphere args={[1, 32, 32]} scale={1.2}>
            {/* @ts-ignore */}
            <meshStandardMaterial 
                color="#06b6d4" 
                emissive="#06b6d4"
                emissiveIntensity={2}
                roughness={0.1}
            />
        </Sphere>
    </Float>
   )
}

const Hero3D: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* @ts-ignore */}
        <ambientLight intensity={0.5} />
        {/* @ts-ignore */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#06b6d4" />
        {/* @ts-ignore */}
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
        
        <AnimatedShape />
        <InnerCore />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Hero3D;