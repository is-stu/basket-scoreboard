import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface scoreState {
  homeTeamScore: number;
  awayTeamScore: number;
}

const initialState: scoreState = {
  homeTeamScore: 0,
  awayTeamScore: 0
}

export const scoreSlice = createSlice({
  name: 'globalScore',
  initialState,
  reducers: {
   incrementHomeTeamScore: (state, action: PayloadAction<number>) => {
     state.homeTeamScore += action.payload
   },
   incrementAwayTeamScore: (state, action: PayloadAction<number>) => {
     state.awayTeamScore += action.payload
   },
  },
})

// Action creators are generated for each case reducer function
export const { incrementHomeTeamScore, incrementAwayTeamScore } = scoreSlice.actions
