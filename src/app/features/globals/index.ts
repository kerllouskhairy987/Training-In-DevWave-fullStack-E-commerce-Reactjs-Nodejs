import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface globalState {
    email: string,
    valueInSelected: string | undefined | { productId: string, name: string }
    currentPage: number
    websiteProductPaginationState: number
    currentUserPagination: number
    network: boolean,
    filterProductByCategory: string
    filterProductByMaxPrice: number
    filterProductByMinPrice: number
}

const initialState: globalState = {
    email: "",
    currentPage: 1,
    currentUserPagination: 1,
    websiteProductPaginationState: 1,
    valueInSelected: undefined,
    network: true,
    filterProductByCategory: "",
    filterProductByMaxPrice: 0,
    filterProductByMinPrice: 0,
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
        websiteProductPaginationAction: (state, action: PayloadAction<number>) => {
            state.websiteProductPaginationState = action.payload
        },

        // Get Quantity For Shopping Cart
        selectedValue: (state, action: PayloadAction<string | undefined>) => {
            state.valueInSelected = action.payload
        },

        // Filter Products By Category
        filterProductByCategoryAction: (state, action: PayloadAction<string>) => {
            state.filterProductByCategory = action.payload
        },

        // Filter Products By Price
        filterProductByMaxPriceAction: (state, action: PayloadAction<number>) => {
            state.filterProductByMaxPrice = action.payload
        },
        filterProductByMinPriceAction: (state, action: PayloadAction<number>) => {
            state.filterProductByMinPrice = action.payload
        },

        // Network Connection
        networkMode: (state, action: PayloadAction<boolean>) => {
            state.network = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    emailValue
    , currentPage
    , currentUserPaginationAction
    , selectedValue
    , networkMode
    , websiteProductPaginationAction
    , filterProductByCategoryAction
    , filterProductByMaxPriceAction
    , filterProductByMinPriceAction
} = globalSlice.actions

export default globalSlice.reducer