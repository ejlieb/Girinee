import React from 'react';
import './MyRecord.css'
import GIRINEE from '../assets/images/GIRINEE.png'

import { Box } from '@mui/system'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import { GameReport } from '../components/myRecord/GameReport';
import { PracticeReport } from '../components/myRecord/PracticeReport';


export function MyRecord() {
    // script
    const logout = () => {
      const logoutConfirm = window.confirm('로그아웃 하시겠습니까?')
      if (logoutConfirm) {
        localStorage.setItem("token", ' ');
        console.log('로그아웃 되었습니다.')
        window.location.replace('http://localhost:3000')
      }
    };

    const [Graph, setGraph] = useState(0)
    const codeAccuracyClick = () => setGraph((prev) => 0)
    const GameClick = () => setGraph((prev) => 1)

    // JSX
    return (
      <div>
        <Box component="div" id="my-record-body" sx={{ display: 'flex', flexDirection: 'column' }}>

          {/* Navbar */}
          <Box component="div" id="my-record-menu-bar" sx={{ mt: 4, px: 8, display: 'flex', justifyContent: 'space-between'}}>
            {/* 텍스트로고 */}
            <img id="girinee-img" src={GIRINEE} alt="GIRINEE.png" />
            <Stack spacing={2} direction="row">
              <Button variant="text">
                <Typography className="menu-text">MY PAGE</Typography>
              </Button>
              <Button variant="text">
                <Typography className="menu-text" onClick={logout}>LOGOUT</Typography>
              </Button>
            </Stack>
          </Box>
          
          {/* 그래프 선택 */}
          <Box component="div" sx={{ my: 5, display: 'flex', justifyContent: 'center'}}>
            <Stack spacing={2} direction="row">
            <Button variant="text" onClick={codeAccuracyClick}>
              <Typography id="graph-text" >Code Accuracy</Typography>
            </Button>
            <Button variant="text" onClick={GameClick}>
              <Typography id="graph-text">Game</Typography>
            </Button>
            </Stack>
          </Box>

          {/* 그래프 */}
            <Box component="div" sx={{ display: 'flex', justifyContent: 'center'}}>
              {Graph === 0 ? <PracticeReport/> : <GameReport/>}
            </Box>

        </Box>
      </div>
    )
  }


  
  // Three Function