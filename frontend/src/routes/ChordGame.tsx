// Systems
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// Other Component 
import GIRINEE from '../assets/images/GIRINEE.png'
import './ChordGame.css'
import '../assets/fonts/font.css'

import { LowLevel } from '../components/game/LowLevel'
import { IntermediateLevel } from '../components/game/IntermediateLevel'
import { HighLevel } from '../components/game/HighLevel'

// Material UI
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
// import Switch from '@mui/material/Switch';  
// import { PowerSettingsNew } from '@mui/icons-material'

// -----------------------------------------------------------------------------------------------------

export function ChordGame() {
    // script
    // 로그아웃
    const logout = () => {
      const logoutConfirm = window.confirm('로그아웃 하시겠습니까?')
      if (logoutConfirm) {
        localStorage.setItem("token", ' ');
        console.log('로그아웃 되었습니다.')
        window.location.replace('http://localhost:3000')
      }
    };
  
    // 난이도 따라서 하단 컴포넌트 변경하기
    const [controllerDegree, setDegree] = useState(0)
    const clickLow = () => setDegree((prev) => 0)
    const clickMid = () => setDegree((prev) => 1)
    const clickHigh = () => setDegree((prev) => 2)
    
    let levelValue = "E A S Y - L E V E L"
    let levelExplanation = "쉬워요"
    if (controllerDegree === 0) {
      levelValue = 'E A S Y - L E V E L'
      levelExplanation = "연습하기 원하는 코드를 직접 선택하여 진행하세요."  
    } else if (controllerDegree === 1) {
      levelValue = 'N O R M A L - L E V E L'
      levelExplanation = "'N O R M A L - L E V E L'에서는 실제 음악에서 자주 사용되는 코드 진행을 랜덤으로"
    } else {
      levelValue = 'H A R D - L E V E L'
      levelExplanation = "어려워요"
    }

    const navigate = useNavigate()

    // JSX
    return (
      <Box component="div" id="game-body" sx={{ display: 'flex', flexDirection: 'column' }}>
        {/* Navbar */}
        <Box component="div" id="menu-bar" sx={{ mt: 4, px: 8, display: 'flex', justifyContent: 'space-between'}}>
          {/* 텍스트로고 */}
          <img id="girinee-img" src={GIRINEE} alt="GIRINEE.png" />
          <Stack spacing={2} direction="row">

            {/* 마이페이지 */}
            <Button variant="text">
              <Typography className="menu-text"><Link to="/:userId" className="none-deco menu-text">MY PAGE</Link></Typography>
            </Button>

            {/* 로그아웃 */}
            <Button variant="text">
              <Typography className="menu-text" onClick={logout}>LOGOUT</Typography>
            </Button>
          </Stack>
        </Box>
      
        {/* 컨트롤패널 */}
        <Grid container component="div" id="control-panel" sx={{ mt: 5, px: 10, display: 'flex', justifyContent: 'space-between'}}>
          <Grid item xs={2} component="div" sx={{ display: 'flex'}}>
            {/* 컨트롤러 */}
            <div id="level-controller" className={`degree${ controllerDegree } metal radial`}>
              <div id="level-index"></div>
            </div>

            {/* 레벨버튼 누르면 해당하는 부분으로 위의 컨트롤러가 회전 */}
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <Button id="low-level-btn" variant="text" onClick={clickLow}>
                <p className="white-text new-font">LOW</p>
              </Button>
              <Button id="mid-level-btn" variant="text" onClick={clickMid}>
                <p className="white-text new-font">MID</p>
              </Button>
              <Button id="high-level-btn" variant="text" onClick={clickHigh}>
                <p className="white-text new-font">HIGH</p>
              </Button>
            </Box>
          </Grid>

          {/* 현재 난이도 표시 */}
          <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center'}}>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
              <h1 id="level-value" key={levelValue} className='line-up'> {levelValue} </h1>
              <h3 id="level-discription" className='white-text'> {levelExplanation} </h3>
            </Stack>
          </Grid>

          {/* 메인화면으로 돌아가기 */}
          <Grid item xs={2}>
            <form id="quitLever" onClick={() => {
              setTimeout(() => {navigate('/')}, 600)}}>
              <input type="checkbox" name="lever" className="lever pristine" id="lever" value="lever value" role="switch" aria-label="lever" aria-checked="false" />
              <label htmlFor="lever"><span>On</span></label>
              <label htmlFor="lever"><span>Off</span></label>
            </form>
          </Grid>
        </Grid>

        {/* 선택한 난이도 따라서 나타나는 내용 */}
        <Box component="div" sx={{ display:'flex', justifyContent:'center'}}>
          {controllerDegree === 0 ? <LowLevel/> : controllerDegree === 1 ? <IntermediateLevel/> : <HighLevel/>}
        </Box>
      </Box>
    )
  }
  
  // Three Function
