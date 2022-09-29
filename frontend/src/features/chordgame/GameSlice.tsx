import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

// type지정

export interface gameData {
  cntChord: string,
  controllerDegree: number,
  chordSecond: number,
}


// Initial State

const initialState = {
    cntChord: 'C',
    controllerDegree: 0,
    chordSecond: 3,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // Reducer 작성
    setCntChord: (state:gameData, action) => {
      state.cntChord = action.payload
    },
    setDegree: (state:gameData, action) => {
      state.controllerDegree = action.payload
    },
    setSecond: (state:gameData, action) => {
      state.chordSecond = action.payload
    },
  }
})
const { reducer, actions } =gameSlice
export const {setCntChord} = actions
export const {setDegree} = actions
export const {setSecond} = actions
export default gameSlice.reducer