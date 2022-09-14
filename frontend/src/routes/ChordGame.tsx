import { useState, useEffect } from 'react'
import GIRINEE from '../assets/images/GIRINEE.png'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { PowerSettingsNew } from '@mui/icons-material'
// import { typography } from '@mui/system'
import './ChordGame.css'

export function ChordGame() {
    // script
    const [controllerDegree, setDegree] = useState(0)
    const clickLow = () => setDegree((prev) => 0)
    const clickMid = () => setDegree((prev) => 1)
    const clickHigh = () => setDegree((prev) => 2)
    
    let levelValue = ""
    if (controllerDegree === 0) {
      levelValue = '초급 난이도'
    } else if (controllerDegree === 1) {
      levelValue = '중급 난이도'
    } else {
      levelValue = '상급 난이도'
    }


    // JSX
    return (
      <Box id="game-body" sx={{ display: 'flex', flexDirection: 'column' }}>
        {/* Navbar */}
        <Box id="menu-bar" sx={{ mt: 4, px: 8, display: 'flex', justifyContent: 'space-between'}}>
          {/* 텍스트로고 */}
          <img id="girinee-img" src={GIRINEE} alt="GIRINEE.png" />
          <Stack spacing={2} direction="row">
            <Button variant="text">
              <Typography className="menu-text">MY PAGE</Typography>
            </Button>
            <Button variant="text">
              <Typography className="menu-text">LOGOUT</Typography>
            </Button>
          </Stack>
        </Box>
      
        {/* 컨트롤패널 */}
        <Box id="control-panel" sx={{ mt: 5, px: 10, display: 'flex', justifyContent: 'space-between'}}>
          <Box sx={{ display: 'flex'}}>
            {/* 컨트롤러 */}
            <div id="level-controller" className={`degree${ controllerDegree } metal radial`}>
              <div id="level-index"></div>
            </div>

            {/* 레벨버튼 누르면 해당하는 부분으로 위의 컨트롤러가 회전 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <Button id="low-level-btn" variant="text" onClick={clickLow}>
                <Typography className="white-text">LOW</Typography>
              </Button>
              <Button id="mid-level-btn" variant="text" onClick={clickMid}>
                <Typography className="white-text">MID</Typography>
              </Button>
              <Button id="high-level-btn" variant="text" onClick={clickHigh}>
                <Typography className="white-text">HIGH</Typography>
              </Button>
            </Box>
          </Box>

          {/* 현재 난이도 표시 */}
          <h1 className='level-text'> {levelValue} </h1>

            {/* 메인화면으로 돌아가기 */}
            {/* <Stack spacing={2} sx={{ my: 3 }} direction="row">
              <PowerSettingsNew fontSize="large" sx={{ color: 'white'}} />
              <Switch></Switch>
              <h3 className='white-text'>On / Off</h3>
            </Stack> */}

          {/* 선택한 난이도 시작하기 */}

          {/* 메인 화면 */}
          <form id="quitLever">
          	<input type="checkbox" name="lever" className="lever pristine" id="lever" value="lever value" role="switch" aria-label="lever" aria-checked="false" />
          	<label htmlFor="lever"><span>On</span></label>
          	<label htmlFor="lever"><span>Off</span></label>
          </form>
          {/* https://mui.com/material-ui/react-switch/#basic-switches */}
        </Box>
      </Box>
    )
  }
  
  // Three Function
