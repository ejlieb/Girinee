// Systems
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'

// Other Component 
import GIRINEE from '../assets/images/GIRINEE.png'
import './ChordGame.css'
import '../assets/fonts/font.css'
import { LowLevelInfo } from '../components/game/LowLevelInfo'
import { LowLevelController } from '../components/game/LowLevelController'
import { NormalLevelInfo } from '../components/game/NormalLevelInfo'
import { NormalLevelController } from '../components/game/NormalLevelController'
import { HighLevelInfo } from '../components/game/HighLevelInfo'
import { HighLevelController } from '../components/game/HighLevelController'
import { setDegree } from '../features/chordgame/GameSlice'

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

    // const [controllerDegree, setDegree] = useState(0)
    const controllerDegree = useAppSelector((state) => state.game.controllerDegree)
    const dispatch = useAppDispatch()
    const clickLow = () => dispatch(setDegree(0))
    const clickMid = () => dispatch(setDegree(1))
    const clickHigh = () => dispatch(setDegree(2))
    
    
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
      
        {/* Main Contents */}
        <Grid component="div" container>

          {/* Level Info */}
          <Grid item xs={4} p={4}>
            {/* 선택한 난이도 따라서 나타나는 내용 */}
            {/* <Box component="div" sx={{ display:'flex', justifyContent:'center'}}> */}
            {controllerDegree === 0 ? <LowLevelInfo/> : controllerDegree === 1 ? <NormalLevelInfo/> : <HighLevelInfo/>}
            {/* </Box> */}
          </Grid>

          {/* Three js를 위한 공간~ */}
          <Grid item xs={4}>

          </Grid>

          {/* 메인 컨트롤러 + Level별 컨트롤러 */}
          <Grid item xs={4} p={4}>
            {/* 메인 컨트롤러 */}
            <Stack>
              {/* 메인화면으로 돌아가기 */}
              <Box component="div" sx={{ display: 'flex', justifyContent: 'end'}}>
                <form id="quitLever" onClick={() => {
                  setTimeout(() => {navigate('/')}, 600)}}>
                  <input type="checkbox" name="lever" className="lever pristine" id="lever" value="lever value" role="switch" aria-label="lever" aria-checked="false" />
                  <label htmlFor="lever"><span>On</span></label>
                  <label htmlFor="lever"><span>Off</span></label>
                </form>
              </Box>

              {/* 컨트롤러 */}
              <Stack direction="row">
                {/* 노브 */}
                <div id="level-controller" className={`degree${ controllerDegree }`}>
                  <div id="level-index"></div>
                </div>

                {/* 레벨버튼 누르면 해당하는 부분으로 위의 노브가 회전 */}
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
              </Stack>
              
              {/* 메인 컨트롤러 */}
              {controllerDegree === 0 ? <LowLevelController/> : controllerDegree === 1 ? <NormalLevelController /> : <HighLevelController/>}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    )
  }
  
  // Three Function
