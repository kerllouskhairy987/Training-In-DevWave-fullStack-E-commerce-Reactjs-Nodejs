import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface globalState {
    email: string,
<<<<<<< HEAD
    currentPage: number;
    quantityInCart: string
=======
    currentPage: number
>>>>>>> ProfileToUser
}

const initialState: globalState = {
    email: "",
<<<<<<< HEAD
    currentPage: 1,
    quantityInCart: "1"
=======
    currentPage: 1
>>>>>>> ProfileToUser
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
<<<<<<< HEAD
        },

        // Get Quantity For Shopping Cart
        getQuantityForShoppingCart: (state, action: PayloadAction<string>) => {
            state.quantityInCart = action.payload
=======
>>>>>>> ProfileToUser
        }
    },
})

// Action creators are generated for each case reducer function
<<<<<<< HEAD
export const { emailValue, currentPage, getQuantityForShoppingCart } = globalSlice.actions
=======
export const { emailValue, currentPage } = globalSlice.actions
>>>>>>> ProfileToUser

export default globalSlice.reducer