// import { useState } from 'react';
// import { createAction } from '@reduxjs/toolkit'
import kakaoImage from '../assets/images/kakao_login_large_wide.png';
import './KakaoLogin.css';
// import MainPage from './MainPage';
// import Auth from "../Auth";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function KakaoLogin() {
    // // 로그인 액션 
    // const SET_USER = "SET_USER";
    // // 로그인 액션 생성
    // const setUser = createAction(SET_USER, (accessToken) => ({ accessToken }));
    // // 초기값
    // const initialState = {
    //   accessToken: null,
    //   isLogin: false,
    // }


    const REDIRECT_URI = "http://localhost:8080/oauth2/authorize/kakao";
    const code = new URL(window.location.href)
    const accessToken = code.searchParams.get('accessToken')

    
    
    if(accessToken) {
      window.location.replace('http://localhost:3000') 
      console.log("현재 login됨")
      console.log(accessToken)
      
      localStorage.setItem("token", accessToken); // 토큰을 로컬 스토리지에 저장 === 로그인 함.
      console.log("localStorage = ", window.localStorage)
    } else {
      console.log("현재 login안되어 있으니까 로그인 해주세여")
      console.log(accessToken)
    }
  
    // JSX
    return (
      <div id="kakao-body">
        <div>
          <h1 id="kakao-h1">카카오 계정으로 시작해 보세요</h1>
            <a href={REDIRECT_URI}><div id="kakao-button"><img src={kakaoImage} width="400" alt="kakao_login_large_wide" /></div></a>
        </div>
      </div>
    )
  }
  
  // Three Function
  export default KakaoLogin()