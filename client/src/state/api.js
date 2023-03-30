import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery : fetchBaseQuery({
        baseUrl : process.env.REACT_APP_BASE_URL,
    }),
    reducerPath : 'adminApi',
    // may be problematic
    tagTypes : ['user', 'products'],
    // api calls we will make
    endpoints : (build) => ({
        getUser : build.query({
            query : (id) => `general/user/${id}`,
            providesTags : ['user']
        }),
        getProducts : build.query({
            query : () => `client/products`,
            providesTags : ['products'],
        }),
        // aatir : build.query({
        //     query : () => `client/products`,
        //     providesTags : ['products'],
        // }),
    })
})


export const { useGetUserQuery, useGetProductsQuery } = api;