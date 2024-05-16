import ENDPOINT_URL from "../api-endpoints";
import { apiSlice } from "../api/apiSlice";
import { User } from "./types";

export const userApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUser: builder.query<User, User["id"]>({
            query: id => `${ENDPOINT_URL.USERS_GET_USER}${id}`,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            transformResponse: response => response.data,
        }),
        addUser: builder.mutation<User, Partial<User>>({
            query: data => ({
                url: ENDPOINT_URL.USERS_ADD_USER,
                method: "POST",
                body: data,
            }),
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            transformResponse: response => response.data,
        }),
    }),
});

export const { useGetUserQuery, useAddUserMutation } = userApi;
