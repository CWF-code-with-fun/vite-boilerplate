import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageState } from "./types";

const initialState: LanguageState = {
  language: localStorage.getItem("i18nextLng") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.language = action.payload;
      localStorage.setItem("i18nextLng", action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
