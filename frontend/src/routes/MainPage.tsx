
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
import { MenuContainer } from "../components/mainpage/menuContainer";
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
  
  const [swiper, setSwiper] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  
  SwiperCore.use([Navigation]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);


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
      loop={true}
      mousewheel={true}
      navigation= {{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ // 페이징 설정
        el: '.swiper-pagination',
        clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
      }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      keyboard={{enabled: true, onlyInViewport: false, pageUpDown:true, }}

    >
      <SwiperSlide id="main-canvas">
        <MainContainer/>
        <RotatingBtn/>
      </SwiperSlide>
                  
      <SwiperSlide id="main2">
        <MenuContainer num={0.83}/>
      </SwiperSlide>

      <SwiperSlide id="main2">
        <MenuContainer num={0.83}/>
      </SwiperSlide>

      <div className="swiper-button-prev swiper-button-disabled"><MainBtn/></div>
      <div className="swiper-button-next"><MainBtn/></div>
      <div className="swiper-pagination"></div>
    </Swiper>
    
  )
}
