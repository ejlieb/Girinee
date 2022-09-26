import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

// type지정

export interface mainData {
    onRoute: boolean
}


// Initial State

const initialState = {
    onRoute: false
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    // Reducer 작성
    setOnRoute: (state:mainData) => {
      console.log('gks')
      state.onRoute = true
    },
  }
})

const { reducer, actions } = mainSlice
export const {setOnRoute} = actions
export default mainSlice.reducer