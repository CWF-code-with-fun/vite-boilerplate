import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "../sliceNameConst";

import type { AuthState } from "./types";

const initialState: AuthState = {
    accessToken: undefined,
    user: undefined,
};

const authSlice = createSlice({
    initialState,
    name: SLICE_NAME.AUTH,
    reducers: {
        userLoggedIn: (state, action: PayloadAction<AuthState>) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: state => {
            state.accessToken = undefined;
            state.user = undefined;
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
