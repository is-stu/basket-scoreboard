import { configureStore } from '@reduxjs/toolkit'
import { scoreSlice } from './slices/Score/scoreSlice'

export const store = configureStore({
  reducer: {
    score: scoreSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch