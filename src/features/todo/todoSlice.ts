import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { Todo, TodoLibrary } from "./types";
import { SLICE_NAME } from "../sliceNameConst";

const initialState: TodoLibrary = {
    all: [{ completed: false, id: String(1), text: "Learn React" }],
};

export const todoSlice = createSlice({
    initialState,
    name: SLICE_NAME.TO_DO,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo["text"]>) => {
            state.all.push({
                completed: false,
                id: nanoid(),
                text: action.payload,
            });
        },
        removeTodo: (state, action) => {
            state.all = state.all.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.all.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        updateTodo: (state, action) => {
            const todo = state.all.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
        },
    },
});

export const { addTodo, updateTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
