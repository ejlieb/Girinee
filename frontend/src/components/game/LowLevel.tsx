export function LowLevel() {
    // script
    const guitarChords = [
      {chordName: 'C', imageUrl: '', soundUrl: ''},
      {chordName: 'Cm', imageUrl: '', soundUrl: ''},
      {chordName: 'D', imageUrl: '', soundUrl: ''},
      {chordName: 'Dm', imageUrl: '', soundUrl: ''},
      {chordName: 'E', imageUrl: '', soundUrl: ''},
      {chordName: 'Em', imageUrl: '', soundUrl: ''},
      {chordName: 'F', imageUrl: '', soundUrl: ''},
      {chordName: 'Fm', imageUrl: '', soundUrl: ''},
      {chordName: 'G', imageUrl: '', soundUrl: ''},
      {chordName: 'Gm', imageUrl: '', soundUrl: ''},
      {chordName: 'A', imageUrl: '', soundUrl: ''},
      {chordName: 'Am', imageUrl: '', soundUrl: ''},
      {chordName: 'B', imageUrl: '', soundUrl: ''},
      {chordName: 'Bm', imageUrl: '', soundUrl: ''}
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
