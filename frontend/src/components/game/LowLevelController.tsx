// Systems
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { render } from "react-dom"
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import axios from 'axios'

// Other components
import useRecorder from "./useRecorder"
import { setCntChord } from '../../features/chordgame/GameSlice'
import { setSecond } from '../../features/chordgame/GameSlice'

// MUI
import { InputLabel, FormControl, Stack } from '@mui/material'
// import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import StopIcon from '@mui/icons-material/Stop';
import MicIcon from '@mui/icons-material/Mic';
import { createTheme, ThemeProvider } from '@mui/material/styles'

// -----------------------------------------------------------------------------------------------------

export function LowLevelController() {
    // script
    const guitarChords = ['C', 'Cm', 'D', 'Dm', 'E', 'Em', 'F', 'Fm', 'G', 'Gm', 'A', 'Am', 'B', 'Bm']
    
    // 버튼 눌렀을 때 해당 코드 연습 화면으로 변경
    // const [cntChord, setCntChord] = useState('C_chord')
    const cntChord = useAppSelector((state)=>state.game.cntChord)
    const dispatch = useAppDispatch()
    const showChord = (event: SelectChangeEvent) => {
      dispatch(setCntChord(event.target.value as string))
    }

    // 녹음에 필요한 것
    // 금단의 any를 사용하고 말았음
    const [audioURL, isRecording, startRecording, stopRecording]:any[] = useRecorder()

    // MUI select 테마 변경
    const theme = createTheme({
      palette: {
        primary: {
          main: '#fff',          
        },
      },
    })

    const accessToken = window.localStorage.getItem('accessToken')

    const clickStop = () => {
      stopRecording()
      console.log('audioURL=', audioURL)
      console.log('audioType', typeof audioURL)
      console.log('currentChord=', cntChord)
      // Axios

      axios.post('https://j7a202.p.ssafy.io/api/record/practice', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        'file': audioURL,
        'chord': cntChord,
        })
      .then((Response) => {
        console.log(Response.data)
      })
      .catch((Error)=> {
        console.log(Error)
      })
    }

    // JSX
    return (
      <Stack my={5} spacing={4} alignItems="center">
        {/* 셀렉트 박스(코드 선택) */}
        <div className="selectBox justify-content-center">
          <p className="white-text" style={{margin:0}}>SELECT CHORD</p>
          <ThemeProvider theme={theme}>
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel variant="standard" id="chord-select-label"></InputLabel>
              <Select
                placeholder='Select Chord'
                labelId="chord-select-label"
                id="chord-select"
                value={cntChord}
                // label="Chord"
                onChange={showChord}          
              >
                {guitarChords.map((chord, idx) => (
                  <MenuItem key={idx} value={chord}>{chord}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </ThemeProvider>
        </div>
        
        {/* 코드 관련 */}
        <div id="chord-box">
          {/* 녹음버튼 */}
          <Stack direction="row" spacing={5}>
            {/* 녹음 시작 */}
            <button id="record-btn" onClick={startRecording} disabled={isRecording}>
              <MicIcon id="record-icon" fontSize="large"/>
            </button>
            {/* 녹음 정지 */}
            <button id="stop-btn" onClick={clickStop} disabled={!isRecording}>
              <StopIcon id="stop-icon" fontSize="large"/>
            </button>
          </Stack>
        </div>
      </Stack>
    )
}