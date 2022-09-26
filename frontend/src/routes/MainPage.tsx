import { Link, useNavigate } from "react-router-dom";
import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import Button from '@mui/material/Button';
import React, { useEffect, useRef, useState, Suspense} from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Box } from '../components/mainpage/three'
import { Logo } from '../components/mainpage/Girinlogo'
import { Firstamp } from '../components/mainpage/Firstamp'
import { RotatingBtn } from "../widgets/RotatingBtn";
import { Secondamp } from '../components/mainpage/Secondamp';
import { PerspectiveCamera, Center, Backdrop, Float, Bounds } from '@react-three/drei';
import { MainContainer } from '../components/mainpage/mainContainer'
import { MainBtn } from "../widgets/MainBtn";
import { MenuContainer } from "../components/mainpage/menuContainer";
import './MainPage.css';
import { Navbar } from "../widgets/Navbar";
import { KakaoLogin } from "./KakaoLogin";
import { Switch } from "@mui/material";
/* swiper */
import { Spinner } from "../widgets/Spinner";
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
  const navigate = useNavigate()


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
      // loop={true}
      // mousewheel={true}
      touchRatio={0}
      navigation= {{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'swiper-button-disabled',
      }}
      // pagination={{ // 페이징 설정
      //   // nextEl: '.swiper-button-next',
      //   // prevEl: '.swiper-button-prev',
      //   el: '.swiper-pagination',
      //   clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
      // }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      keyboard={{enabled: true, onlyInViewport: false, pageUpDown:true, }}
    >
      
      <SwiperSlide id="main-canvas">
        <Navbar />
        <MainContainer />
        <RotatingBtn />
      </SwiperSlide>
      
      <SwiperSlide>
        {({ isActive }) =>
          <div id="main2">
            <Navbar />
            {isActive ? <MenuContainer num={0.65}/> : null }
            <span className="menu-span">Chord Game</span>
            <h2 className="my-record" 
              onClick={() => {
                setTimeout(() => {
                navigate('/profile')
                }, 1000);
              }}>
              기록보기
            </h2>
          </div>
          }
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) =>
          <div id="main2">
            <Navbar />
            {isActive ? <MenuContainer num={0.83}/> : null}
            <span className="menu-span">Chord Table</span>
            <h2 className="my-record" 
              onClick={() => {
                setTimeout(() => {
                navigate('/profile')
                }, 1000);
              }}>
              기록보기
            </h2>

          </div>
          }
      </SwiperSlide>

      <div className="swiper-button-prev swiper-button-disabled"><MainBtn/></div>
      <div className="swiper-button-next"><MainBtn/></div>

    </Swiper>
  )
}