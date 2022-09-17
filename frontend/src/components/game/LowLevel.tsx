export function LowLevel() {
    // script
    const guitarChords = [
      {chordName: 'C', imageUrl: '@/assets/images/chords/C_chord.png', soundUrl: ''},
      {chordName: 'Cm', imageUrl: '@/assets/images/chords/Cm_chord.png', soundUrl: ''},
      {chordName: 'D', imageUrl: '@/assets/images/chords/D_chord.png', soundUrl: ''},
      {chordName: 'Dm', imageUrl: '@/assets/images/chords/Dm_chord.png', soundUrl: ''},
      {chordName: 'E', imageUrl: '@/assets/images/chords/E_chord.png', soundUrl: ''},
      {chordName: 'Em', imageUrl: '@/assets/images/chords/Em_chord.png', soundUrl: ''},
      {chordName: 'F', imageUrl: '@/assets/images/chords/F_chord.png', soundUrl: ''},
      {chordName: 'Fm', imageUrl: '@/assets/images/chords/Fm_chord.png', soundUrl: ''},
      {chordName: 'G', imageUrl: '@/assets/images/chords/G_chord.png', soundUrl: ''},
      {chordName: 'Gm', imageUrl: '@/assets/images/chords/Gm_chord.png', soundUrl: ''},
      {chordName: 'A', imageUrl: '@/assets/images/chords/A_chord.png', soundUrl: ''},
      {chordName: 'Am', imageUrl: '@/assets/images/chords/Am_chord.png', soundUrl: ''},
      {chordName: 'B', imageUrl: '@/assets/images/chords/B_chord.png', soundUrl: ''},
      {chordName: 'Bm', imageUrl: '@/assets/images/chords/Bm_chord.png', soundUrl: ''}
    ]

    // JSX
    return (
      <div>
        <h1 className="white-text">연습모드</h1>
        {guitarChords.map((data, idx) => (
          <button>
            <span key={idx}>{data.chordName}</span>
          </button>
        ))}

      </div>
    )
  }
  
  // Three Function
