
import { Link } from "react-router-dom";
import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useEffect, useRef, useState } from 'react'
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
/* swiper */
import 'swiper/css';
import SwiperCore, { Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { useSwiper } from 'swiper/react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import "swiper/swiper.css";
// import "swiper/components/navigation/navigation.css";


export function MainPage() {
  // script
  SwiperCore.use([Navigation]);

  // 로그인
  useEffect(() => {
    const code = new URL(window.location.href)
    const accessToken = code.searchParams.get('accessToken')
    
    if(accessToken) {
      window.location.replace('http://localhost:3000') 
      console.log("현재 login됨")
      console.log(accessToken)
      
      localStorage.setItem("accessToken", accessToken); // 토큰을 로컬 스토리지에 저장 === 로그인 함.
      console.log("localStorage = ", window.localStorage)
    } else {
      console.log("현재 login안되어 있으니까 로그인 해주세여")
      console.log(accessToken)
    }
  },[])
  const logout = () => {
    const logoutConfirm = window.confirm('로그아웃 하시겠습니까?')
    if (logoutConfirm) {
      localStorage.removeItem('accessToken')
      console.log('로그아웃 되었습니다.')
      // window.location.replace('https://j7a202.p.ssafy.io')
    }
  }
  
  // JSX
  return (
    <Swiper id="main-swiper"
      // install Swiper modules
      modules={[ Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, A11y]}
      
      // default
      spaceBetween={0}
      slidesPerView={1}
      // direction={'vertical'}
      centeredSlides={true}
      speed= {2000}
      // import 
      mousewheel={true}
      navigation= {{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      // pagination={{ clickable: true }}
      keyboard={{enabled: true, onlyInViewport: false, pageUpDown:true, }}

    >
      <SwiperSlide id="main-canvas">
        <MainContainer/>
        <RotatingBtn/>
        
      </SwiperSlide>
                  
      <SwiperSlide id="main2">
        <h1 id="main2-h1">엠프 두개</h1>
      </SwiperSlide>
      <div className="swiper-button-prev swiper-button-disabled" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-b76727acd121080f" aria-disabled="true"><MainBtn/></div>
      <div className="swiper-button-next" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-110bee5110a8d034d" aria-disabled="false"><MainBtn/></div>
    </Swiper>
    
  )
}
