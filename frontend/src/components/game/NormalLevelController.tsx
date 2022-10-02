// Systems
import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

// Other Component 
import useRecorder from "./useRecorder"
import { setSecond } from '../../features/chordgame/GameSlice'
import { setCntChord } from '../../features/chordgame/GameSlice'

// Material UI
import Button from '@mui/material/Button'
import Slider from '@mui/material/Slider'


export function NormalLevelController() {
    // script
    // 준비된 기타 코드셋 5개
    const guitarChordSets = [['A', 'B', 'C', 'D'], ['B', 'C', 'D', 'E'], ['C', 'D', 'E', 'F'],['D', 'E', 'F', 'G'],['E', 'F', 'G', 'A']]

    // 녹음에 필요한 정보들
    const [audioURL, isRecording, startRecording, stopRecording]:any[] = useRecorder()

    // 디스패치로 사용자가 슬라이더로 선택하는 시간 초 변경, 설정된 초 가져오기
    const chordSecond:number = useAppSelector((state) => state.game.chordSecond)
    const dispatch = useAppDispatch()
    const handleChange = (event: Event, newValue: number | number[]) => {
      dispatch(setSecond(newValue as number));
    }
    


    // 버튼 눌렀을 때 해당 코드 연습 화면으로 변경
    const startGame = () => {
      const randomIdx = Math.floor(Math.random() * 5)
      const cntChordset = guitarChordSets[randomIdx]
      console.log(cntChordset);

      setTimeout(startRecording(), chordSecond * 1000)

      let cntIdx = -1      
      setInterval(function() {
        if (cntIdx !== 3) {
          cntIdx++
          dispatch(setCntChord(cntChordset[cntIdx] as string))
        } else {
          setTimeout(stopRecording())
        } 
      }, chordSecond * 1000)      
    }
      
    // JSX
    return (
      <div>
        <Button className="white-text" disabled={isRecording} onClick={startGame}>시작!</Button>
      </div>
    )
}