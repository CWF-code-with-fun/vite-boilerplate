import ENDPOINT_URL from "../api-endpoints";
import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) =>
                `${ENDPOINT_URL.USERS_GET_USER}${id}`,
        }),
        addUser: builder.mutation({
            query: (data) => ({
                url: ENDPOINT_URL.USERS_ADD_USER,
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetUserQuery, useAddUserMutation } = userApi;
