import { type PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import type { Todo, TodoLibrary } from "./types";
import { SLICE_NAME } from "../sliceNameConst";

const initialState: TodoLibrary = {
    all: [{ completed: false, id: String(1), text: "Learn React" }],
};

export const todoSlice = createSlice({
    initialState,
    name: SLICE_NAME.TO_DO,
    reducers: {
        addTodo: (todos, action: PayloadAction<Todo["text"]>) => {
            todos.all.push({
                completed: false,
                id: nanoid(),
                text: action.payload,
            });
        },
        removeTodo: (todos, action) => {
            todos.all = todos.all.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (todos, action) => {
            const todo = todos.all.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        updateTodo: (todos, action) => {
            const todo = todos.all.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
        },
    },
});

export const { addTodo, updateTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
