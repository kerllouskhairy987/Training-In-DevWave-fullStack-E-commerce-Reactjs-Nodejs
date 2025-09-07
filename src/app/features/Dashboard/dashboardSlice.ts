
import type { IChangeRoleUserResponse, ICreateCAtegoryResponse, ICreateProduct, IProduct, IResponseCategory, IResponseProduct, ISearchUsersResponse } from '@/interfaces'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    tagTypes: ['Product'],
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({ baseUrl: 'https://training-in-dev-wave-full-stack-e-c.vercel.app' }),

    // --------------------------For Products-----------------------
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
        createProduct: builder.mutation<{ status: boolean, message: string }, ICreateProduct>({
            query: ({ brand, description, discount, price, stars, stock, name, category, deliveryDate, images, saleRate }) => ({
                url: `/api/products/create`,
                method: 'POST',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
                body: {
                    name,
                    brand,
                    description,
                    price,
                    category,
                    stock,
                    images,
                    stars,
                    deliveryDate,
                    discount,
                    saleRate,
                },
            }),
            invalidatesTags: ['Product'],
        }),

        // Delete Product
        deleteProduct: builder.mutation<{ status: boolean, message: string }, { id: string }>({
            query: ({ id }) => ({
                url: `/api/products/delete/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
            }),
            invalidatesTags: ['Product'],
        }),

        // Edit(Update) Product
        updateProduct: builder.mutation<{ status: boolean, message: string }, { id: string, data: ICreateProduct }>({
            query: ({ id, data }) => ({
                url: `/api/products/update/${id}`,
                method: 'PUT',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
                body: data,
            }),
            invalidatesTags: ['Product'],
        }),

        // Get Single Product
        getSingleProduct: builder.query<IProduct, { id: string }>({
            query: ({ id }) => ({
                url: `/api/products/${id}`,
                method: 'GET',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
            }),
            providesTags: ['Product'],
        }),

        // ------------------------For Category-------------------------
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


        // Get Single Category
        getSingleCategory: builder.mutation<IResponseCategory, { id: string }>({
            query: ({ id }) => ({
                url: `/api/categories/${id}`,
                method: 'GET',
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                }
            }),
            invalidatesTags: ['Product'],
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

        // -------------------------------For Users-----------------------
        // Change Role Of User
        changeRole: builder.mutation<IChangeRoleUserResponse, { userId: string, role: "admin" | "user" }>({
            query: ({ userId, role }) => ({
                url: `/api/users/${userId}/role`,
                method: "PUT",
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
                body: {
                    role
                }
            }),
            invalidatesTags: ['Product'],
        }),

        // Delete User
        deleteUser: builder.mutation<{ status: number, message: string }, { userId: string }>({
            query: ({ userId }) => ({
                url: `/api/users/${userId}`,
                method: "DELETE",
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                },
            }),
            invalidatesTags: ['Product'],
        }),

        // Search In Users
        searchUsers: builder.mutation<ISearchUsersResponse, { searchTerm: string, limit: number, page: number }>({
            query: ({ searchTerm, limit = 10, page }) => ({
                url: `/api/users?page=${page}&limit=${limit}&searchTerm=${searchTerm}`,
                method: "GET",
                headers: {
                    Authorization: localStorage.getItem('userToken')
                        ? `Bearer ${localStorage.getItem('userToken')}`
                        : "",
                }
            }),
            invalidatesTags: ['Product'],
        })
    }),
})

export const {
    useGetProductsQuery, useGetSingleProductQuery, useCreateProductMutation, useDeleteProductMutation, useUpdateProductMutation,
    useGetAllCategoriesQuery, useGetSingleCategoryMutation, useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation,
    useSearchUsersMutation, useChangeRoleMutation, useDeleteUserMutation
}
    = dashboardApi