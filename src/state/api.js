import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', import.meta.env.VITE_API_URL);

export const cardStoreApi = createApi({
    reducerPath: "cardStoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        redirect: "follow",
        credentials: "include",
        headers
    }),
    tagTypes: ["User", "Card", "Users"],
    endpoints: (builder) => ({
        getUserInfo: builder.query({
            query: (user_id) => `/user/single/${user_id}`,
            invalidatesTags: ["User"],
            providesTags: ["User"]
        }),
        getUsersToChoose: builder.query({
            query: () => '/auth/demos',
            providesTags: ["User", "Users"]
        }),
        getCart: builder.query({
            query: (user_id) => `/cart/${user_id}`,
            providesTags: ["Cart"]
        }),
        getCard: builder.query({
            query: (card_id) => `/player/single/${card_id}`,
            providesTags: ["Card", "Cards", "Single"]
        }),
        getAllCards: builder.query({
            query: ({ limit = 10, page = 0 }) => `/player?limit=${limit}&page=${page}`,
            providesTags: ["Card", "Cards", "All"]
        }),
        getCards: builder.query({
            query: ({ fetchType, searchValue, limit = 10, page = 0 }) => `/player/type/${fetchType}/${searchValue}?limit=${limit}&page=${page}`,
            providesTags: ["Card", "Cards", "Type"]
        }),
        getRelatedCards: builder.query({
            query: (card_id) => `/player/related/${card_id}`,
            providesTags: ["Cards", "Related"]
        }),
        getSports: builder.query({
            query: () => "/sport",
            providesTags: ["Sports"]
        }),
        getTeams: builder.query({
            query: () => "/team",
            providesTags: ["Teams"]
        }),
        getSearchResults: builder.query({
            query: (searchValue) => `/search/${searchValue}`,
            providesTags: ["Search"]
        }),
        getOrders: builder.query({
            query: ({user_id, fetchType, currentPage}) => `/order/${fetchType}/${user_id}?page=${currentPage}`,
            providesTags: ["Orders"]
        }),
        getOrder: builder.query({
            query: ({order_id, user_id}) => `/order/single/${order_id}/${user_id}`,
            providesTags: ["Orders"]
        })
    })
})

export const {
    useGetUserInfoQuery,
    useGetUsersToChooseQuery,
    useGetCartQuery,
    useGetCardQuery,
    useGetAllCardsQuery,
    useGetCardsQuery,
    useGetRelatedCardsQuery,
    useGetSportsQuery,
    useGetTeamsQuery,
    useGetSearchResultsQuery,
    useGetOrdersQuery,
    useGetOrderQuery
} = cardStoreApi