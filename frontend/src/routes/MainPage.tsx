import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Box } from '../components/mainpage/three'
import { Logo } from '../components/mainpage/Girinlogo'
import { Firstamp } from '../components/mainpage/Firstamp'
import { Secondamp } from '../components/mainpage/Secondamp'
import { PerspectiveCamera, Center, Backdrop, Float, Bounds } from '@react-three/drei'
import { MainContainer } from '../components/mainpage/mainContainer'
import './MainPage.css'


export function MainPage() {
  // script
  
  // JSX
  return (
    <div id="main-canvas">
      <MainContainer/>
    </div>
  )
}

// Three Function