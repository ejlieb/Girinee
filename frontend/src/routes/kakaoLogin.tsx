import kakaoImage from '../assets/images/kakao_login_large_wide.png';
import './KakaoLogin.css';
// import Auth from "../Auth";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function KakaoLogin() {
    // script
    // const code = new URL(window.location.href).searchParams.get("code");
    const REST_API_KEY = "902bc5840ad68fdc48d2b62be37965a7";
    const REDIRECT_URI = "http://localhost:8080/oauth2/authorize/kakao";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    // JSX
    return (
      <div id="kakao-body">
        <div>
          <h1 id="kakao-h1">카카오 계정으로 시작해 보세요</h1>
            <a href={KAKAO_AUTH_URL}><div id="kakao-button"><img src={kakaoImage} width="400" alt="kakao_login_large_wide" /></div></a>
        </div>
      </div>
    )
  }
  
  // Three Function
  export default KakaoLogin()