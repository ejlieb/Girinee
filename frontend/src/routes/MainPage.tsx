import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Box } from '../components/mainpage/three'
import { Model } from '../components/mainpage/Scene'
import { MatTest } from '../components/mainpage/Mattest'
import { Logo } from '../components/mainpage/Girinee'
import { PerspectiveCamera, Center, Backdrop, Float, Bounds } from '@react-three/drei'
import './MainPage.css'


export function MainPage() {
  // script

  // JSX
  return (
    <div id="main-canvas">
    <Canvas>
        {/* <Center> */}
          {/* <PerspectiveCamera makeDefault position={[0,0,5]} /> */}
          {/* <ambientLight /> */}
          <pointLight position={[10, 10, 10]} />
          {/* <Box position={[-1.2, 0, 0]} /> */}
          <Model scale={[5,5,5]}/>
          <Logo position={[4, 3,0]}/>
          {/* <MatTest /> */}
        {/* </Center> */}
    </Canvas>,
    </div>
  )
}

// Three Function