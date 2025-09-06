import type { ICreateCAtegoryResponse, IResponseCategory, IResponseProduct } from '@/interfaces'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    tagTypes: ['Product'],
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({ baseUrl: 'https://training-in-dev-wave-full-stack-e-c.vercel.app' }),
    endpoints: (builder) => ({
        // Get Products
        getProducts: builder.query<IResponseProduct, { page: number }>({
            query: ({ page }) => ({
                url: `/api/products/all?page=${page}&limit=10`,
                method: 'GET',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
            }),
            providesTags: ['Product'],
        }),

        // Create Product
        createProduct: builder.mutation<{ status: boolean, message: string }, { body: Record<string, string | File>, category: string }>({
            query: ({ body, category }) => ({
                url: `/api/products/create`,
                method: 'POST',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
                body: {
                    ...body,
                    category: category
                }
            })
        }),










        // -------------------------------------------------
        // Get All Categories
        getAllCategories: builder.query<IResponseCategory, void>({
            query: () => ({
                url: `/api/categories/all-categories`,
                method: 'GET',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
            }),
            providesTags: ['Product'],
        }),

        // Create Category
        createCategory: builder.mutation<ICreateCAtegoryResponse, { name: string, description: string }>({
            query: ({ name, description }) => ({
                url: `/api/categories/create`,
                method: 'POST',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
                body: {
                    name: name,
                    description: description
                }
            }),
            invalidatesTags: ['Product'],
        }),

        // Update Category
        updateCategory: builder.mutation<ICreateCAtegoryResponse, { id: string, name: string, description: string }>({
            query: ({ id, name, description }) => ({
                url: `/api/categories/update/${id}`,
                method: 'PUT',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
                body: {
                    name: name,
                    description: description
                }
            }),
            invalidatesTags: ['Product'],
        }),

        // Delete Category
        deleteCategory: builder.mutation<ICreateCAtegoryResponse, { id: string }>({
            query: ({ id }) => ({
                url: `/api/categories/delete/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
            }),
            invalidatesTags: ['Product'],
        }),
    }),
})

export const {
    useGetProductsQuery, useCreateProductMutation,
    useGetAllCategoriesQuery, useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation
}
    = dashboardApi