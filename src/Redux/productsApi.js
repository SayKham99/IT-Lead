import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/'}),
    refetchOnFocus: true,
    endpoints: (build) => ({
        getProducts: build.query({
            query: (limit='')=>`products?${limit && `_limit=${limit}`}`
        }),
        getProduct:build.query({
            query:postID=>`${postID}`
        })
    })
})

export const {useGetProductsQuery,useGetProductQuery} = productsApi;