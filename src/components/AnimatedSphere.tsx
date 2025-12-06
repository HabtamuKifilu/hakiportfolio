'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Stars } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'

function CrystalOrb() {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.x = Math.sin(t * 0.4) * 0.1
      ref.current.rotation.y += 0.005
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref}>
       {/* <sphereGeometry args={[2.5, 64, 64]} /> */}
        <meshPhysicalMaterial
          color="#2f2b10"
          roughness={0}
          metalness={1}
          transmission={0.98}
          thickness={1.5}
          envMapIntensity={3}
          clearcoat={1}
          clearcoatRoughness={0}
          ior={1.5}
          attenuationColor="#ffd700"
          attenuationDistance={5}
        />
      </mesh>
    </Float>
  )
}

export default function AnimatedSphere() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#a78bfa" />
        <directionalLight position={[-10, -5, 5]} intensity={1} color="#60a5fa" />
        <pointLight position={[0, 0, 0]} intensity={1.5} color="#ffd700" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <CrystalOrb />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
