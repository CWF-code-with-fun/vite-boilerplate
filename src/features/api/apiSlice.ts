import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

import { userLoggedOut } from "@/features/auth/authSlice";

import { SLICE_NAME } from "../sliceNameConst";

import type { RootState } from "./types";

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = fetchBaseQuery({
    baseUrl: "http://localhost:5000", // API URL
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState)?.auth?.accessToken;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }

        return headers;
    },
});

export const apiSlice = createApi({
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions);

        if (result?.error && result.error?.status === 401) {
            api.dispatch(userLoggedOut());
        }
        return result;
    },
    endpoints: () => ({}),
    reducerPath: SLICE_NAME.REDUCER_PATH,
    tagTypes: [],
});
