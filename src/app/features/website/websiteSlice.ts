import type { IFeedbackResponse, IProductResponse, IResponseProduct } from '@/interfaces'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const websiteApi = createApi({
    reducerPath: 'websiteApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://training-in-dev-wave-full-stack-e-c.vercel.app` }),
    tagTypes: ["website"],
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    endpoints: (builder) => ({
        // Get Products
        getProducts: builder.query<
            IResponseProduct,
            { page?: number; category?: string; minPrice?: number; maxPrice?: number }
        >({
            query: ({ page = 1, category = "", minPrice, maxPrice }) => {
                const params = new URLSearchParams();

                // page دايماً موجود 
                params.append("page", page.toString());

                // category لو موجودة
                if (category) params.append("category", category);

                // minPrice لو رقم مش undefined
                if (minPrice !== undefined) {
                    params.append("minPrice", minPrice.toString());
                }

                // maxPrice لو رقم مش undefined
                if (maxPrice !== undefined) {
                    params.append("maxPrice", maxPrice.toString());
                }

                return {
                    url: `/api/products/filter?${params.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ["website"],
        }),

        // Get Single Product
        getSingleProduct: builder.query<IProductResponse, string>({
            query: (id) => ({
                url: `/api/products/${id}`,
                method: 'GET',
            }),
            providesTags: ["website"],
        }),

        // Get All Feedback For Product 
        getAllFeedbackForProduct: builder.query<IFeedbackResponse, string>({
            query: (id) => ({
                url: `/api/feedback/product-feedback/${id}`,
                method: 'GET',
            }),
            providesTags: ["website"],
        })
    }),
})

export const {
    useGetProductsQuery, useGetSingleProductQuery, useGetAllFeedbackForProductQuery
} = websiteApi