import type { IAddToCartResponse, IGetCartResponse } from '@/interfaces'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shoppingApi = createApi({
    reducerPath: 'shoppingApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://training-in-dev-wave-full-stack-e-c.vercel.app` }),
    tagTypes: ["shopping"],
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    endpoints: (builder) => ({

        // Get Cart 
        getCart: builder.query<IGetCartResponse, void>({
            query: () => ({
                url: `/api/cart/get-cart`,
                method: 'GET',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
            }),
            providesTags: ["shopping"],
        }),

        // Add To Cart
        addToCart: builder.mutation<IAddToCartResponse, { productId: string, quantity: number }>({
            query: ({ productId, quantity }) => ({
                url: `/api/cart/add-to-cart`,
                method: 'POST',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
                body: {
                    productId,
                    quantity
                }
            }),
            invalidatesTags: ["shopping"],
        }),

        // Remove From Cart
        DeleteFromCart: builder.mutation<{ status: boolean, message: string }, { productId: string }>({
            query: ({ productId }) => ({
                url: `/api/cart/remove-from-cart`,
                method: 'DELETE',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
                body: {
                    productId
                }
            }),
            invalidatesTags: ["shopping"],
        }),

        // Clear Cart
        clearCart: builder.mutation<{ status: boolean, message: string }, void>({
            query: () => ({
                url: `/api/cart/clear-cart`,
                method: 'DELETE',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
            }),
            invalidatesTags: ["shopping"],
        })
    }),
})

export const { useGetCartQuery, useAddToCartMutation, useDeleteFromCartMutation, useClearCartMutation } = shoppingApi