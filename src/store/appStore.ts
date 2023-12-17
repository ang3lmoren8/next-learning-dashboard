import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import { COUNTER_SLICE_NAME } from '@/store/counter/counterSlice'

export const store = configureStore({
  reducer: {
    [COUNTER_SLICE_NAME]: counterReducer,
  },
})
