// Systems
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { render } from "react-dom"

// Other Component 
import useRecorder from "./useRecorder"
import C_chord from '../../assets/images/chords/C_chord.png'
import C_sound from '../../assets/chord_sounds/C_sound.wav'
import Cm_chord from '../../assets/images/chords/Cm_chord.png'
import Cm_sound from '../../assets/chord_sounds/Cm_sound.wav'
import D_chord from '../../assets/images/chords/D_chord.png'
import D_sound from '../../assets/chord_sounds/D_sound.wav'
import Dm_chord from '../../assets/images/chords/Dm_chord.png'
import Dm_sound from '../../assets/chord_sounds/Dm_sound.wav'
import E_chord from '../../assets/images/chords/E_chord.png'
import E_sound from '../../assets/chord_sounds/E_sound.wav'
import Em_chord from '../../assets/images/chords/Em_chord.png'
import Em_sound from '../../assets/chord_sounds/Em_sound.wav'
import F_chord from '../../assets/images/chords/F_chord.png'
import F_sound from '../../assets/chord_sounds/F_sound.wav'
import Fm_chord from '../../assets/images/chords/Fm_chord.png'
import Fm_sound from '../../assets/chord_sounds/Fm_sound.wav'
import G_chord from '../../assets/images/chords/G_chord.png'
import G_sound from '../../assets/chord_sounds/G_sound.wav'
import Gm_chord from '../../assets/images/chords/Gm_chord.png'
import Gm_sound from '../../assets/chord_sounds/Gm_sound.wav'
import A_chord from '../../assets/images/chords/A_chord.png'
import A_sound from '../../assets/chord_sounds/A_sound.wav'
import Am_chord from '../../assets/images/chords/Am_chord.png'
import Am_sound from '../../assets/chord_sounds/Am_sound.wav'
import B_chord from '../../assets/images/chords/B_chord.png'
import B_sound from '../../assets/chord_sounds/B_sound.wav'
import Bm_chord from '../../assets/images/chords/Bm_chord.png'
import Bm_sound from '../../assets/chord_sounds/Bm_sound.wav'

// Material UI
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import StopIcon from '@mui/icons-material/Stop';
import MicIcon from '@mui/icons-material/Mic';
import { createTextSpanFromBounds } from 'typescript'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { withTheme } from '@emotion/react'

// -----------------------------------------------------------------------------------------------------

export function LowLevel() {
    // script
    const guitarChords = ['C', 'Cm', 'D', 'Dm', 'E', 'Em', 'F', 'Fm', 'G', 'Gm', 'A', 'Am', 'B', 'Bm']
    
    // 버튼 눌렀을 때 해당 코드 연습 화면으로 변경
    const [cntChord, setCntChord] = useState('C_chord')
    const showChord = (event: SelectChangeEvent) => {
    setCntChord(event.target.value as string)
    }

    // 녹음에 필요한 것
    // 금단의 any를 사용하고 말았음
    const [audioURL, isRecording, startRecording, stopRecording]:any[] = useRecorder()

    // MUI select 테마 변경
    const theme = createTheme({
      palette: {
        primary: {
          main: '#000',          
        },
      },
    })

    // JSX
    return (
      <div>
        {/* 셀렉트 박스(코드 선택) */}
        <div className="selectBox">
          <ThemeProvider theme={theme}>
            <FormControl variant="filled" sx={{ minWidth: 200 }}>
              <InputLabel id="chord-select-label">CHORD</InputLabel>
              <Select
                placeholder='Select Chord'
                labelId="chord-select-label"
                id="chord-select"
                value={cntChord}
                label="Chord"
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
          {/* 코드 이름 */}
          <h1 id="chord-name" className='white-text'>{cntChord ==='C' ? 'C' : cntChord ==='Cm' ? 'Cm' :
                                                      cntChord ==='D' ? 'D' : cntChord ==='Dm' ? 'Dm' :
                                                      cntChord ==='E' ? 'E' : cntChord ==='Em' ? 'Em' :
                                                      cntChord ==='F' ? 'F' : cntChord ==='Fm' ? 'Fm' :
                                                      cntChord ==='G' ? 'G' : cntChord ==='Gm' ? 'Gm' :
                                                      cntChord ==='A' ? 'A' : cntChord ==='Am' ? 'Am' :
                                                      cntChord ==='B' ? 'B' : 'Bm'}
          </h1>
          {/* 코드 운지표 */}
          <img src={cntChord ==='C' ? C_chord : cntChord ==='Cm' ? Cm_chord :
                    cntChord ==='D' ? D_chord : cntChord ==='Dm' ? Dm_chord :
                    cntChord ==='E' ? E_chord : cntChord ==='Em' ? Em_chord :
                    cntChord ==='F' ? F_chord : cntChord ==='Fm' ? Fm_chord :
                    cntChord ==='G' ? G_chord : cntChord ==='Gm' ? Gm_chord :
                    cntChord ==='A' ? A_chord : cntChord ==='Am' ? Am_chord :
                    cntChord ==='B' ? B_chord : Bm_chord} id="chord-img" alt="..." />
          {/* 코드 소리 */}
          <audio src={cntChord ==='C' ? C_sound : cntChord ==='Cm' ? Cm_sound :
                      cntChord ==='D' ? D_sound : cntChord ==='Dm' ? Dm_sound :
                      cntChord ==='E' ? E_sound : cntChord ==='Em' ? Em_sound :
                      cntChord ==='F' ? F_sound : cntChord ==='Fm' ? Fm_sound :
                      cntChord ==='G' ? G_sound : cntChord ==='Gm' ? Gm_sound :
                      cntChord ==='A' ? A_sound : cntChord ==='Am' ? Am_sound :
                      cntChord ==='B' ? B_sound : Bm_sound} controls></audio>

          {/* 녹음버튼 */}
          <div>
            {/* 녹음한 소리 듣기 */}
            <audio src={audioURL} controls />
            {/* 녹음 시작 */}
            <button id="record-btn" onClick={startRecording} disabled={isRecording}>
              <MicIcon id="record-icon" fontSize="large"/>
            </button>
            {/* 녹음 정지 */}
            <button id="stop-btn" onClick={stopRecording} disabled={!isRecording}>
              <StopIcon id="stop-icon" fontSize="large"/>
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  // Three Function
