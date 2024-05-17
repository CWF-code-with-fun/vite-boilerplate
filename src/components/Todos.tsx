import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, toggleTodo, removeTodo } from "./features/todo/todoSlice";

const Todos = () => {
    const todos = useSelector((state: any) => state.todos);
    console.log("todos__ss", todos);
    return <div>Todos</div>;
};

export default Todos;
