import { Canvas } from '@react-three/fiber'

export const App = () => (
  <Canvas>
    <Shirt />
  </Canvas>
)

function Shirt(){
  return(
    <mesh>
      <boxGeometry args={[1,1,1]} />
      <meshBasicMaterial />
    </mesh>
  )
}
