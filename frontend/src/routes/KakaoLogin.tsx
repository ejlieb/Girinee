import kakaoImage from '../assets/images/kakao_login_large_wide.png';
import './KakaoLogin.css';

export function KakaoLogin() {
    // script
  
    // JSX
    return (
      <div id="kakao-body">
        <div>
          <h1 id="kakao-h1">카카오 계정으로 시작해 보세요</h1>
          <div id="kakao-button"><img src={kakaoImage} width="400" alt="kakao_login_large_wide" /></div>
        </div>
      </div>
    )
  }
  
  // Three Function
  export default KakaoLogin()