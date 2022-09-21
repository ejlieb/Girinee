import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useScroll, ScrollControls, Environment, Merged, Text, MeshReflectorMaterial, Center } from '@react-three/drei'
import { Firstamp } from './Firstamp'
import { Secondamp } from './Secondamp'

export function MenuContainer(props) {
  

  return (
    <Canvas dpr={window.decivePixelRatio} shadows  gl={{ alpha: false }}>
      <fog attach="fog" args={['#17171b', 30, 40]} />
      <color attach="background" args={['#17171b']} />
      <ambientLight intensity={0.25} />
      <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
        <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
      </directionalLight>
      <Suspense fallback={null}>
        <ScrollControls pages={3}>
          <Center onCentered={({ container, height }) => container.scale.setScalar(3)}>
            {props.num === 0.65 ? <Firstamp position={[-1.8,1.36,0]} /> : <Secondamp position={[1.4,1.5,0.3]}/>}
            
          </Center>
        </ScrollControls>
        <mesh position={[0, -props.num, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[500, 500]} />
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={4024}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.85}
            color="#151515"
            metalness={0.6}
            roughness={1}
          />
        </mesh>
        <Environment preset="dawn" />
      </Suspense>
    </Canvas>
  )
}