import { useState } from 'react';
import react from 'react';
import "./Navbar.css"

export function Navbar() {
  const logout = () => {
    const logoutConfirm = window.confirm('로그아웃 하시겠습니까?')
    if (logoutConfirm) {
      localStorage.removeItem('accessToken')
      console.log('로그아웃 되었습니다.')
      // window.location.replace('https://j7a202.p.ssafy.io')
    }
  }
  let [opacity , setOpacity] = useState(1)
  
  return (
    <h1 className="logout-btn" onClick={logout} onMouseOver={() => setOpacity(0)} onMouseOut={() => setOpacity(1)}>logout</h1>
  )
}

export default Navbar;
