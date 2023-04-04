import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery : fetchBaseQuery({
        baseUrl : process.env.REACT_APP_BASE_URL,
    }),
    reducerPath : 'adminApi',
    // may be problematic
    tagTypes : ['user', 'products', 'customers', 'transactions'],
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
        getCustomers : build.query({
            query : () => `client/customers`,
            providesTags : ['customers'],
        }),
        getTransations : build.query({
            // required params
            query : ({page, pageSize, sort, search}) => {
                return {
                    url : 'client/transactions',
                    method : 'GET',
                    params : {page, pageSize, sort, search},
                }
            } ,
            providesTags : ['transactions'],
        })
        // aatir : build.query({
        //     query : () => `client/products`,
        //     providesTags : ['products'],
        // }),
    })
})


export const { useGetUserQuery, 
    useGetProductsQuery, 
    useGetCustomersQuery,
    useGetTransationsQuery } = api;