import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Box } from '../components/mainpage/three'
import { Model } from '../components/mainpage/Thr10'
import { Test } from '../components/mainpage/Test'


export function MainPage() {
  // script

  // JSX
  return (
    <div>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Test/>
    </Canvas>,
    </div>
  )
}

// Three Function