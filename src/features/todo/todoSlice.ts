import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ completed: false, id: String(1), text: "Learn React" }],
};

export const todoSlice = createSlice({
    initialState,
    name: "todos",
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                completed: false,
                id: nanoid(),
                text: action.payload,
            });
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
        },
    },
});

export const { addTodo, updateTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
