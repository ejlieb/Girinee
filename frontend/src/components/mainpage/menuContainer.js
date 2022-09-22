import { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useScroll, ScrollControls, Environment, Merged, Text, MeshReflectorMaterial, Center } from '@react-three/drei'
import { Firstamp } from './Firstamp'
import { Secondamp } from './Secondamp'
import useInterval from '../../utils/timer'
import { Spinner } from '../../widgets/Spinner'
import { dividerClasses } from '@mui/material'
import "./menuContainer.css"
import { useHover } from '@use-gesture/react'

export function MenuContainer(props) {
  let [flag, setFlag] = useState(false)
  setTimeout(() => setFlag(true), 3000)

  const bind = useHover((state) => console.log(state.target))

  return (
    <div id={flag === false ? "menu-container" : null} className='canvas-container'>
      {flag === false ? <Spinner/> : 
      <Canvas dpr={window.decivePixelRatio} shadows  gl={{ alpha: false }}>
      <fog attach="fog" args={['#17171b', 30, 40]} />
      <color attach="background" args={['#17171b']} />
      <ambientLight intensity={0.25} />
      {/* <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
        <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
      </directionalLight> */}
      <Suspense fallback={null}>
          <Center onCentered={({ container, height }) => container.scale.setScalar(3)}>
            {props.num === 0.65 ? <Firstamp position={[-1.8,1.36,0]} {...bind()} onClick={() => console.log('hi')} /> : props.num === 0.83 ? <Secondamp position={[1.4,1.5,0.3]}/> : null}
            
          </Center>
        <mesh position={[0, -props.num, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[500, 500]} />
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={2024}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.85}
            color="rgb(25,25,25)"
            metalness={0.6}
            roughness={1}
          />
        </mesh>
        <Environment preset="dawn" />
      </Suspense>
    </Canvas>}
    
    </div>
    
  )
}