import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center, useGLTF, Environment } from '@react-three/drei'
import { useRef } from 'react'

export const App = ({ position = [-1,0,2.5], fov = 25 }) => (
  <Canvas 
    eventSource={document.getElementById('root')}
    eventPrefix='client'
    camera={{ position, fov }}>
    <ambientLight intensity={0.5} />
    <Environment preset="city" />
    <Center>
      <Shirt />
    </Center>
    <OrbitControls />
  </Canvas>
)

function Shirt(props) {
  const { nodes, materials } = useGLTF('/shirt_baked.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_shirt_male.geometry}
        material={materials.lambert1}
      />
    </group>
  )
}

useGLTF.preload('/shirt_baked.glb');
