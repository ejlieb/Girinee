import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

// type지정

export interface gameData {
  cntChord: string,
  controllerDegree: number,
}


// Initial State

const initialState = {
    cntChord: 'C_chord',
    controllerDegree: 0
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
    }
  }
})
const { reducer, actions } =gameSlice
export const {setCntChord} = actions
export const {setDegree} = actions
export default gameSlice.reducer