import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const COUNTER_SLICE_NAME = 'counter'

export type CounterState = {
  counter: number
  isReady: boolean
}

const initialState: CounterState = {
  counter: 0,
  isReady: false,
}

const counterSlice = createSlice({
  name: COUNTER_SLICE_NAME,
  initialState,
  reducers: {
    initCounter: (state, action: PayloadAction<number>) => {
      if (state.isReady) return

      state.counter = action.payload
      state.isReady = true
    },

    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },

    setCounter: (state, action: PayloadAction<number>) => {
      state.counter = action.payload
    },
  },
})

export const { initCounter, increment, decrement, setCounter } =
  counterSlice.actions

export default counterSlice.reducer
