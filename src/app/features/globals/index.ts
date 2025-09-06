import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface globalState {
    email: string,
    currentPage: number;
    quantityInCart: string
}

const initialState: globalState = {
    email: "",
    currentPage: 1,
    quantityInCart: "1"
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

        // Get Quantity For Shopping Cart
        getQuantityForShoppingCart: (state, action: PayloadAction<string>) => {
            state.quantityInCart = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { emailValue, currentPage, getQuantityForShoppingCart } = globalSlice.actions

export default globalSlice.reducer