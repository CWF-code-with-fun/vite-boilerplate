import { apiSlice } from "../api/apiSlice";
import ENDPOINT_URL from "../api-endpoints";

import type { User } from "./types";

export const userApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addUser: builder.mutation<User, Partial<User>>({
            query: data => ({
                body: data,
                method: "POST",
                url: ENDPOINT_URL.USERS_ADD_USER,
            }),
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            transformResponse: response => response.data,
        }),
        getUser: builder.query<User, User["id"]>({
            query: id => `${ENDPOINT_URL.USERS_GET_USER}${id}`,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            transformResponse: response => response.data,
        }),
    }),
});

export const { useGetUserQuery, useAddUserMutation } = userApi;
