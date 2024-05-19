import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "../sliceNameConst";

import type { User } from "./types";

const initialState: Partial<User> = {
    email: "",
};

const userSlice = createSlice({
    initialState,
    name: SLICE_NAME.USER,
    reducers: {
        getUserEmail: (state, action: PayloadAction<{ email: string }>) => {
            const { email } = action.payload;
            return {
                ...state,
                email,
            };
        },
    },
});

export const { getUserEmail } = userSlice.actions;
export default userSlice.reducer;
