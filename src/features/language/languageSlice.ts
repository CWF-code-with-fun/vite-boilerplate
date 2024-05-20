import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { LanguageState } from "./types";
import { SLICE_NAME } from "../sliceNameConst";

const initialState: LanguageState = {
    selected: localStorage.getItem("i18nextLng") || "en",
};

const languageSlice = createSlice({
    initialState,
    name: SLICE_NAME.LANGUAGE,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            console.log(action.payload);
            state.selected = action.payload;
            localStorage.setItem("i18nextLng", action.payload);
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
