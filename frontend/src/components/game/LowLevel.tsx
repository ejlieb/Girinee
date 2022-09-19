// Systems
import { useState } from 'react'
import { Link } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

// Other Component 
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
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select'

// -----------------------------------------------------------------------------------------------------


export function LowLevel() {

    // script
    const guitarChords = ['C', 'Cm', 'D', 'Dm', 'E', 'Em', 'F', 'Fm', 'G', 'Gm', 'A', 'Am', 'B', 'Bm']
    
    // 버튼 눌렀을 때 해당 코드 연습 화면으로 변경
    const [cntChord, setCntChord] = useState('C_chord')
    const showChord = (event: SelectChangeEvent) => {
    setCntChord(event.target.value as string)
    }
      
  

    // JSX
    return (
      <div>
        <h1 className="white-text">연습모드</h1>
        <div>
          <FormControl variant="filled" sx={{ minWidth: 120 }}>
            <InputLabel id="chord-select-label">CHORD</InputLabel>
            <Select
              labelId="chord-select-label"
              id="chord-select"
              value={cntChord}
              label="Chord"
              onChange={showChord}
              style={{ color:"white"}}
            >
              {guitarChords.map((chord, idx) => (
                <MenuItem key={idx} value={chord}>{chord}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div id="chord-box">
          <h1 id="chord-name" className='white-text'>{cntChord ==='C' ? 'C' : cntChord ==='Cm' ? 'Cm' :
                               cntChord ==='D' ? 'D' : cntChord ==='Dm' ? 'Dm' :
                               cntChord ==='E' ? 'E' : cntChord ==='Em' ? 'Em' :
                               cntChord ==='F' ? 'F' : cntChord ==='Fm' ? 'Fm' :
                               cntChord ==='G' ? 'G' : cntChord ==='Gm' ? 'Gm' :
                               cntChord ==='A' ? 'A' : cntChord ==='Am' ? 'Am' :
                               cntChord ==='B' ? 'B' : 'Bm'}
          </h1>
          <img src={cntChord ==='C' ? C_chord : cntChord ==='Cm' ? Cm_chord :
                    cntChord ==='D' ? D_chord : cntChord ==='Dm' ? Dm_chord :
                    cntChord ==='E' ? E_chord : cntChord ==='Em' ? Em_chord :
                    cntChord ==='F' ? F_chord : cntChord ==='Fm' ? Fm_chord :
                    cntChord ==='G' ? G_chord : cntChord ==='Gm' ? Gm_chord :
                    cntChord ==='A' ? A_chord : cntChord ==='Am' ? Am_chord :
                    cntChord ==='B' ? B_chord : Bm_chord} id="chord-img" alt="..." />
        </div>
      </div>
    )
  }
  
  // Three Function
