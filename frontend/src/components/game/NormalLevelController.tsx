// Systems
import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import axios from 'axios'

// Other Component 
import useRecorder from "./useRecorder"
import { setSecond, setCountDownNumber, setCntChord } from '../../features/chordgame/GameSlice'

// Material UI
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Stack } from '@mui/system'
import { DataArray } from '@mui/icons-material'


export function NormalLevelController() {
    // script
    // 준비된 기타 코드셋 5개
    const guitarChordSets = [['A', 'B', 'C', 'D'], ['B', 'C', 'D', 'E'], ['C', 'D', 'E', 'F'],['D', 'E', 'F', 'G'],['E', 'F', 'G', 'A']]

    const [whichSet, setWhichSet] = useState(['','','',''])

    // 녹음에 필요한 정보들
    const [audioURL, isRecording, startRecording, stopRecording]:any[] = useRecorder()

    // 디스패치로 사용자가 슬라이더로 선택하는 시간 초 변경, 설정된 초 가져오기
    const chordSecond:number = useAppSelector((state) => state.game.chordSecond)
    const dispatch = useAppDispatch()
    const handleChange = (event: Event, newValue: number | number[]) => {
      dispatch(setSecond(newValue as number));
    }

    // 카운트다운 숫자
    const countDownNumber:number = useAppSelector((state) => state.game.countDownNumber)
    
    const theme = createTheme({
      palette: {
        primary: {
          main: '#fff',          
        },
      },
    })   

    // 버튼 눌렀을 때 해당 코드 연습 화면으로 변경
    let cntIdx = -2

    const startGame = () => {
      const randomIdx = Math.floor(Math.random() * 5)
      const cntChordset = guitarChordSets[randomIdx]

      console.log(cntChordset);
      
      cntIdx++
      // console.log('cntIdx', cntIdx)
      function countDown() {
      }

      function plusIdx() {
          startRecording()
          // console.log('start recording')
          if (cntIdx === -1) {
            cntIdx++
            dispatch(setCntChord(cntChordset[cntIdx] as string))
            // console.log('cntIdx', cntIdx)
          }
        }

      function flipChord() {setInterval(function() {
          if (cntIdx === 0 || cntIdx === 1 || cntIdx === 2) {
            cntIdx++
            // console.log('cntIdx', cntIdx)
            dispatch(setCntChord(cntChordset[cntIdx] as string))
          } else if (cntIdx === 3) {
            stopRecording()
            // console.log('stop recording')
            cntIdx = -2
          }
        }, chordSecond*1000)
      }

      countDown()
      setTimeout(plusIdx, 4000)
      setTimeout(flipChord, 3000)
      setWhichSet((prev) => cntChordset)
    }

    const accessToken = window.localStorage.getItem('accessToken')

    const checkRecord = () => {
      const fullAudio = audioURL
      console.log(fullAudio)
      const fullSize = fullAudio.size
      const quarterSize = Math.floor(fullSize / 4)

      console.log(fullAudio.size)
      console.log(whichSet)
      // full Audio 자르기
      const audio_1 = fullAudio.slice(0, quarterSize, 'audio/wav')
      const audio_2 = fullAudio.slice(quarterSize, 2*quarterSize, 'audio/wav')
      const audio_3 = fullAudio.slice(2*quarterSize, 3*quarterSize, 'audio/wav')
      const audio_4 = fullAudio.slice(3*quarterSize, 4*quarterSize, 'audio/wav')
      const [chord_1, chord_2, chord_3, chord_4] = whichSet
      console.log(audio_1)
      console.log(audio_2)
      console.log(audio_3)
      console.log(audio_4)
      console.log(URL.createObjectURL(audio_1))
      console.log(URL.createObjectURL(audio_2))
      console.log(URL.createObjectURL(audio_3))
      console.log(URL.createObjectURL(audio_4))
      console.log(chord_1)
      console.log(chord_2)
      console.log(chord_3)
      console.log(chord_4)

      const data = new FormData()
      data.append('files', audio_1, 'audio_1')
      data.append('files', audio_2, 'audio_2')
      data.append('files', audio_3, 'audio_3')
      data.append('files', audio_4, 'audio_4')
      data.append('chords', chord_1)
      data.append('chords', chord_2)
      data.append('chords', chord_3)
      data.append('chords', chord_4)
      data.append('difficulty', 'normal')
      console.log(data)

      // Axios
      axios.post('https://j7a202.p.ssafy.io/api/record/game', data, {
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
      
    // JSX
    return (
      <Stack alignItems="center" spacing={5}>
        <ThemeProvider theme={theme}>
          <Button id="normal-start-btn" variant="outlined" className="white-text" disabled={isRecording} onClick={startGame}>시 작 하 기</Button>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Button id="normal-check-btn" variant="outlined" className="white-text" disabled={isRecording || audioURL===""} onClick={checkRecord}>채 점 하 기</Button>
        </ThemeProvider>
      </Stack>
    )
}