import { useState } from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import './App.css'

function App() {
 

  return (
    <div>
       <Canvas color='111' >
        <OrbitControls/>
        <ambientLight intensity={1.5}/>

        {/* dj booth */}
        <mesh position={[0,0,-2]}>
          <boxGeometry/>
          <meshBasicMaterial color={'yellow'}/>
        </mesh>

        {/* disco ball  */}
        <mesh position={[0,3,0]}>
          <sphereGeometry/>
          <meshBasicMaterial color={'red'}/>
        </mesh>

        {/* speaker */}
        {/* left */}
        <mesh position={[3,-2,-2]}>
          <boxGeometry args={[1,3,1]}/>
          <meshBasicMaterial color={'orange'}/>
        </mesh>

        {/* right */}
        <mesh position={[-3,-2,-2]}>
          <boxGeometry args={[1,3,1]}/>
          <meshBasicMaterial color={'orange'}/>
        </mesh>

        {/* food table */}
        <group position={[3,0,0]}>
          <mesh position={[0,0,0]} rotation={[0,0,0]}>
            <boxGeometry args={[0.5,.5,2]}/>
            <meshBasicMaterial color={'violet'}/>
          </mesh>
          {/* punch */}
          <mesh position={[0,.5,-.75]} rotation={[0,0,0]}>
            <boxGeometry args={[0.5,.5,.5]}/>
            <meshBasicMaterial color={'blue'}/>
          </mesh>
          {/* cups */}
          <mesh position={[0,.5,0]} rotation={[0,0,0]}>
            <boxGeometry args={[0.5,.5,.5]}/>
            <meshBasicMaterial color={'lightblue'}/>
          </mesh>
          {/* food */}
          <mesh position={[0,.5,.75]} rotation={[0,0,0]}>
            <boxGeometry args={[0.5,.5,.5]}/>
            <meshBasicMaterial color={'limegreen'}/>
          </mesh>
        </group>

        {/* doors */}
        {/* men */}
        <mesh position={[-2,0,0]} rotation={[0,Math.PI * .5,0]}>
          <boxGeometry args={[1,2,.25]}/>
          <meshBasicMaterial color={'white'}/>
        </mesh>
        {/* women */}
        <mesh position={[-2,0,1.5]} rotation={[0,Math.PI * .5,0]}>
          <boxGeometry args={[1,2,.25]}/>
          <meshBasicMaterial color={'white'}/>
        </mesh>

        {/* walls */}
        {/* left */}
        <mesh position={[-4,0,0]} rotation={[0,Math.PI * .5,0]}>
          <boxGeometry args={[6,6,.25]}/>
          <meshBasicMaterial color={'purple'}/>
        </mesh>
        {/* right */}
        <mesh position={[4,0,0]} rotation={[0,Math.PI * .5,0]}>
          <boxGeometry args={[6,6,.25]}/>
          <meshBasicMaterial color={'purple'}/>
        </mesh>
        {/* back */}
        <mesh position={[0,0,-4]} rotation={[0,0,0]}>
          <boxGeometry args={[6,6,.25]}/>
          <meshBasicMaterial color={'purple'}/>
        </mesh>

        {/* floor */}
        <mesh position={[0,-4,0]}>
          <boxGeometry args={[6,.25,6]}/>
          <meshBasicMaterial color={'green'}/>
        </mesh>
       </Canvas>
    </div>
  )
}

export default App
