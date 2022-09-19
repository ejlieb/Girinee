import { Link } from "react-router-dom";
import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Box } from '../components/mainpage/three'
import { Logo } from '../components/mainpage/Girinlogo'
import { Firstamp } from '../components/mainpage/Firstamp'
import { RotatingBtn } from "../widgets/RotatingBtn";
import { Secondamp } from '../components/mainpage/Secondamp';
import { PerspectiveCamera, Center, Backdrop, Float, Bounds } from '@react-three/drei';
import { MainContainer } from '../components/mainpage/mainContainer'
import { MainBtn } from "../widgets/MainBtn";
import './MainPage.css';
import { KakaoLogin } from "./KakaoLogin";

export function MainPage() {
  // script
  const logout = () => {
    const logoutConfirm = window.confirm('로그아웃 하시겠습니까?')
    if (logoutConfirm) {
      localStorage.setItem("accessToken",'');
      console.log('로그아웃 되었습니다.')
      // window.location.replace('https://j7a202.p.ssafy.io')
    }
  }

  // JSX
  return (
    <div>
      <div id="main-canvas">
        <MainContainer/>
        <RotatingBtn/>
        <MainBtn/>
      </div>
      <div id="main2">
        <KakaoLogin/>
      </div>
      <button><Link to="/:userId">myRecord</Link></button>
      {/* <button onClick={logout}>Logout</button> */}
      {/* <div id="main-body">
      <div>
        <h1 id="main-h1">MainPage</h1>
          <button><Link to="/login">kakaoLogin</Link></button>
          <button onClick={logout}>Logout</button>
        <div id="main-button">
          
          <button><Link to="/game">game</Link></button>
          <button><Link to="/backing">backing</Link></button>
        </div>
      </div>
    </div> */}
      {/* <div className="swiper-pagination"></div> */}
    </div>
    
  )
}
export default MainPage;


// Three Function
