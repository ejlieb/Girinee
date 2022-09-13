import { Link } from "react-router-dom";
import './MainPage.css';

export function MainPage() {
  // script
  const logout = () => {
    const logoutConfirm = window.confirm('로그아웃 하시겠습니까?')
    if (logoutConfirm) {
      localStorage.setItem("token", ' ');
      console.log('로그아웃 되었습니다.')
      window.location.replace('http://localhost:3000')
    }
  }
  // JSX
  return (
    <div id="main-body">
      <div>
        <h1 id="main-h1">MainPage</h1>
          <button><Link to="/login">kakaoLogin</Link></button>
          <button onClick={logout}>Logout</button>
        <div id="main-button">
          <button><Link to="/:userId">myRecord</Link></button>
          <button><Link to="/game">game</Link></button>
          <button><Link to="/backing">backing</Link></button>
        </div>
      </div>
    </div>

  )
}
export default MainPage;

// store function
// function logged( state, action) {
//   switch(action.type) {
//     case LOG_IN:
//       return true
//     case LOG_OUT:
//       return false
//     default:
//       return false
//   }
    
// }

// Three Function
