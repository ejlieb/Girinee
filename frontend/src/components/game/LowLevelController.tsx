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
import C_sound from '../../assets/chord_sounds/C_sound.wav'

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

    const checkRecord = () => {
      // axios body에 담을 멀티파트 폼 데이터 생성
      const data = new FormData()
      // audioURL (이름은 URL이지만 현재는 audio/wav형태의 blob)
      console.log('audioURL', audioURL)

      // axios로 보내기 전 파일 멀쩡한지 확인 => 정상

      // file과 chord 추가
      // data.append('file', audioURL, 'recorded.wav')
      data.append('file', audioURL, 'audioName')
      data.append('chord', cntChord)

      console.log('data_getall', data.get('file'))
      console.log('data_getall', data.get('chord'))

      // Axios
      axios.post('https://j7a202.p.ssafy.io/api/record/practice', data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error)=> {
          console.log(error)
        })
    }
    // const checkRecord = () => {
    //   // axios body에 담을 멀티파트 폼 데이터 생성
    //   const data = new FormData()
    //   // blob을 file로 변환
    //   const audioFile = new File([audioURL], 'record', {type: 'application/octet-stream'})

    //   // audioURL (이름은 URL이지만 현재는 audio/wav형태의 blob)
    //   console.log('audioURL', audioURL)
    //   console.log('audioFile', audioFile)

    //   // axios로 보내기 전 파일 멀쩡한지 확인 => 정상
    //   const checkURL = URL.createObjectURL(audioFile)
    //   console.log(checkURL)

    //   // file과 chord 추가
    //   // data.append('file', audioURL, 'recorded.wav')
    //   data.append('file', audioFile)
    //   data.append('chord', cntChord)

    //   console.log('data_getall', data.get('file'))
    //   console.log('data_getall', data.get('chord'))

    //   // Axios
    //   axios.post('https://j7a202.p.ssafy.io/api/record/practice', data, {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //       'Content-Type': 'multipart/form-data',
    //       },
    //     })
    //     .then((response) => {
    //       console.log(response.data)
    //     })
    //     .catch((error)=> {
    //       console.log(error)
    //     })
    // }

    const upload = () => {
      const formData = new FormData()
      const file:any = document.getElementById('file')
      console.log('file', file)
      console.log('file.files', file.files)
      formData.append('file', file.files[0])
      formData.append('chord', cntChord)
      axios.post('https://j7a202.p.ssafy.io/api/record/practice', formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        }
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error)=> {
        console.log(error)
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
            <button id="stop-btn" onClick={stopRecording} disabled={!isRecording}>
              <StopIcon id="stop-icon" fontSize="large"/>
            </button>
            {/* 녹음 파일 보내기 */}
            <button id="stop-btn" onClick={checkRecord} disabled={isRecording || audioURL === ""}>
              채점하기
            </button>

            <input type="file" name='file' id='file'/>
            <button onClick={upload} value="upload">asdf</button>

          </Stack>
        </div>
      </Stack>
    )
}