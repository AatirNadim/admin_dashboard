import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery : fetchBaseQuery({
        baseUrl : process.env.REACT_APP_BASE_URL,
    }),
    reducerPath : 'adminApi',
    tagTypes : ['user'],
    // api calls we will make
    endpoints : (build) => {
        getUser : build.query({
            query : (id) => `general/user/${id}`,
            providesTags : ['user']
        })
    }

})


export const { useGetUserQuery } = api;