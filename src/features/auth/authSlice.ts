import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SLICE_NAME } from "../sliceNameConst";
import { AuthState } from "./types";

const initialState: AuthState = {
  accessToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: SLICE_NAME.AUTH,
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<AuthState>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
