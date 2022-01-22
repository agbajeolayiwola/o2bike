import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react'
import {OrbitControls, 
  ContactShadows, 
  Environment, 
  Cloud,} from '@react-three/drei';
import Bikejs from './Bike';


const Bikemod = () => {
  return (
        <div>
        <Canvas shadows
        dpr={[1, 2]}
        camera={{ position: [3, 0, 0], fov: 50 }}
        style={{height:'250px', width:'350px'}}
        className="canvas">
        <ambientLight intensity={0.1} />
        <spotLight intensity={3.5} 
        angle={0.1} penumbra={3} 
        position={[10, 15, 10]} 
        castShadow />
        <Suspense fallback={null}>
         
                <Cloud
                opacity={0.5}
                speed={0.1} // Rotation speed
                width={140} // Width of the full cloud
                depth={1.5} // Z-dir depth
                segments={20} // Number of particles
                />
                <Bikejs/>
            
            <Environment preset="city" />
            <ContactShadows rotation-x={Math.PI / 2} position={[0, -1, 0]} opacity={1.25} width={30} height={10} blur={1.5} far={3.8} />
        </Suspense>
        <OrbitControls
            minPolarAngle={Math.PI / 2} 
            maxPolarAngle={Math.PI / 2} 
            enableZoom={true} 
            enablePan={true}/>
        </Canvas>
        </div>
  )
};

export default Bikemod;
