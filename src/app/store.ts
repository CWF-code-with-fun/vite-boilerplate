import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "@/features/api/apiSlice";
import authSliceReducer from "@/features/auth/authSlice";
import userSliceReducer from "@/features/users/userSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authSliceReducer,
  user: userSliceReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false, 
    }).concat(apiSlice.middleware),
});
