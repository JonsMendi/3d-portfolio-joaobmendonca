import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export default function Brain() {

  return (
    <Canvas className="cursor-pointer" >
      {/* <OrbitControls enableZoom={false} /> */}{/* Provide mouse interaction with canvas */}
      <ambientLight intensity={0.5} />{/* Light inserted in the canvas */}
      <directionalLight position={[10, 2, 1]} intensity={1} />{/* Direction of the light inserted in the canvas */}
      <Suspense fallback={null}>
        <Sphere visible args={[1, 100, 200]} scale={1.5}>{/* Sphere is the form displayed by the canvas */}
          <MeshDistortMaterial 
            color="#9f9882" 
            attach="material"
            wireframe={true}
            distort={1.0} 
            speed={2} 
            roughness={1} />{/* Mesh is the Sphere customization */}
        </Sphere>
      </Suspense>
    </Canvas>
  )
}