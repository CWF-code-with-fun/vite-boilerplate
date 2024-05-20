import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { apiSlice } from "@/features/api/apiSlice";
import authSliceReducer from "@/features/auth/authSlice";
import languageSliceReducer from "@/features/language/languageSlice";
import userSliceReducer from "@/features/users/userSlice";
import todosSliceReducer from "@/features/todo/todoSlice";

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    language: languageSliceReducer,
    user: userSliceReducer,
    todos: todosSliceReducer,
});

export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            thunk: true,
        }).concat(apiSlice.middleware),
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
