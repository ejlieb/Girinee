import { Suspense, useMemo, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useScroll, ScrollControls, Environment, Merged, Text, MeshReflectorMaterial, Center, OrbitControls } from '@react-three/drei'
import { Spinner } from '../../widgets/Spinner'
import { dividerClasses } from '@mui/material'
import { ContactlessOutlined } from '@mui/icons-material'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { useNavigate } from 'react-router-dom'
import useInterval from '../../utils/timer'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setRoBtnState } from '../../features/rotatingbtn/RotateSlice'
import { C } from './C'
import { GameFrame } from './GameFrame'
import { Firstamp } from '../mainpage/Firstamp'


export function TableContainer(props) {

  // const directIntensity = useAppSelector((state) => state.main.directIntensity)
  
  return (
    <div className='canvas-container'>
      <Canvas dpr={window.decivePixelRatio} shadows camera={{ position: [0,0,5], fov: 35 }} gl={{ alpha: false }}  id={'menu-canvas'}>
        <directionalLight castShadow intensity={1.2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}> 
        </directionalLight>
      <Suspense fallback={null}>
          
        <Center onCentered={({ container, height }) => container.scale.setScalar(1)}>

        <group>
            <C position={[-0.6,-0.16,0]}/>
            <GameFrame position={[-0.7,-0.32,0]}/>
        </group>

        <mesh position={[0, -0.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[500000, 500000]} />
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={2024}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.55}
            color="rgb(25,25,25)"
            metalness={0.6}
            roughness={1}
          />
        </mesh>
        </Center>
      </Suspense>
      {/* <Environment preset ="dawn" /> */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
    
    </div>
    
  )
}