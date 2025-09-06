import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface globalState {
    email: string,
    currentPage: number
}

const initialState: globalState = {
    email: "",
    currentPage: 1
}

export const globalSlice = createSlice({
    name: 'globals',
    initialState,
    reducers: {
        // email value 
        emailValue: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },

        // pagination current page
        currentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { emailValue, currentPage } = globalSlice.actions

export default globalSlice.reducer