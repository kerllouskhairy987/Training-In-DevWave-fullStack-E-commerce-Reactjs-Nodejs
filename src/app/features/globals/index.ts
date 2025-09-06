import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface globalState {
    email: string
}

const initialState: globalState = {
    email: "",
}

export const globalSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        emailValue: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { emailValue } = globalSlice.actions

export default globalSlice.reducer