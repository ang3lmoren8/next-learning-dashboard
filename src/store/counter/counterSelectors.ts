import { RootState } from '@/store/appStore.types'
import { COUNTER_SLICE_NAME } from '@/store/counter/counterSlice'

export const selectCounter = (state: RootState) =>
  state[COUNTER_SLICE_NAME].counter
