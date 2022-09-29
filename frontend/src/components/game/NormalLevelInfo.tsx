// Systems
import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

// Other Component 
import useRecorder from "./useRecorder"
import C_chord from '../../assets/images/chords/C_chord.png'
import Cm_chord from '../../assets/images/chords/Cm_chord.png'
import D_chord from '../../assets/images/chords/D_chord.png'
import Dm_chord from '../../assets/images/chords/Dm_chord.png'
import E_chord from '../../assets/images/chords/E_chord.png'
import Em_chord from '../../assets/images/chords/Em_chord.png'
import F_chord from '../../assets/images/chords/F_chord.png'
import Fm_chord from '../../assets/images/chords/Fm_chord.png'
import G_chord from '../../assets/images/chords/G_chord.png'
import Gm_chord from '../../assets/images/chords/Gm_chord.png'
import A_chord from '../../assets/images/chords/A_chord.png'
import Am_chord from '../../assets/images/chords/Am_chord.png'
import B_chord from '../../assets/images/chords/B_chord.png'
import Bm_chord from '../../assets/images/chords/Bm_chord.png'

// Material UI
import Button from '@mui/material/Button'

// -----------------------------------------------------------------------------------------------------

export function NormalLevelInfo() {
    // script
    const guitarChordSets = [['A', 'B', 'C', 'D'], ['B', 'C', 'D', 'E'], ['C', 'D', 'E', 'F'],['D', 'E', 'F', 'G'],['E', 'F', 'G', 'A']]

    // 녹음에 필요한 정보
    const [audioURL, isRecording, startRecording, stopRecording]:any[] = useRecorder()

    // 사용자가 선택한 시간초 정보
    const chordSecond:number = useAppSelector((state) => state.game.chordSecond)

    const cntChord:string = useAppSelector((state) => state.game.cntChord)
    // JSX
    return (
      <div>
        <div id="chord-box">
          <h1 id="chord-name" className='white-text'>{cntChord ==='C' ? 'C' : cntChord ==='Cm' ? 'Cm' :
                                                      cntChord ==='D' ? 'D' : cntChord ==='Dm' ? 'Dm' :
                                                      cntChord ==='E' ? 'E' : cntChord ==='Em' ? 'Em' :
                                                      cntChord ==='F' ? 'F' : cntChord ==='Fm' ? 'Fm' :
                                                      cntChord ==='G' ? 'G' : cntChord ==='Gm' ? 'Gm' :
                                                      cntChord ==='A' ? 'A' : cntChord ==='Am' ? 'Am' :
                                                      cntChord ==='B' ? 'B' : 'Bm'} 
          </h1>
          {/* 여기서 대기 화면을 넣던가 해야겠음 */}
          <img src={cntChord ==='C' ? C_chord : cntChord ==='Cm' ? Cm_chord :
                    cntChord ==='D' ? D_chord : cntChord ==='Dm' ? Dm_chord :
                    cntChord ==='E' ? E_chord : cntChord ==='Em' ? Em_chord :
                    cntChord ==='F' ? F_chord : cntChord ==='Fm' ? Fm_chord :
                    cntChord ==='G' ? G_chord : cntChord ==='Gm' ? Gm_chord :
                    cntChord ==='A' ? A_chord : cntChord ==='Am' ? Am_chord :
                    cntChord ==='B' ? B_chord : Bm_chord} id="chord-img" alt="..." />

          <h1 id="level-value" className='line-up'>N O R M A L - L E V E L</h1>
          <h3 id="level-discription" className='white-text'>'N O R M A L - L E V E L'에서는 실제 음악에서 자주 사용되는 코드 진행을 랜덤으로</h3>
        </div>
      </div>
    )
  }
  
  // Three Function