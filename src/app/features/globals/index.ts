import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface globalState {
    email: string,
    valueInSelected: string | undefined | { productId: string, name: string }
    currentPage: number
    currentUserPagination: number
}

const initialState: globalState = {
    email: "",
    currentPage: 1,
    currentUserPagination: 1,
    valueInSelected: undefined,
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
        },
        currentUserPaginationAction: (state, action: PayloadAction<number>) => {
            state.currentUserPagination = action.payload
        },

        // Get Quantity For Shopping Cart
        selectedValue: (state, action: PayloadAction<string | undefined>) => {
            state.valueInSelected = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { emailValue, currentPage, currentUserPaginationAction, selectedValue } = globalSlice.actions

export default globalSlice.reducer