import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SLICE_NAME } from "../sliceNameConst";
import { User } from "./types";

const initialState: Partial<User> = {
    email: "",
};

const userSlice = createSlice({
    name: SLICE_NAME.USER,
    initialState,
    reducers: {
        getUserEmail: (state, action: PayloadAction<{ email: string }>) => {
            const { email } = action.payload;
            return {
                ...state,
                email: email,
            };
        },
    },
});

export const { getUserEmail } = userSlice.actions;
export default userSlice.reducer;
