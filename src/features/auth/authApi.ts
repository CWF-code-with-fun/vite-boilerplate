import { apiSlice } from "../api/apiSlice";
import ENDPOINT_URL from "../api-endpoints";

import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                    );
                } catch (err) {
                    // do nothing
                }
            },

            query: data => ({
                body: data,
                method: "POST",
                url: ENDPOINT_URL.AUTH_LOGIN,
            }),
        }),
        register: builder.mutation({
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                    );
                } catch (err) {
                    // do nothing
                }
            },
            query: data => ({
                body: data,
                method: "POST",
                url: ENDPOINT_URL.AUTH_REGISTER,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
