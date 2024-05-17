import React from "react";
import { addTodo } from "../../features/todo/todoSlice";
import { useDispatch } from "react-redux";

const AddTodo = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addTodo("drink water"));
    };
    return (
        <div>
            <button className="button" onClick={handleClick}>
                add Todo
            </button>
        </div>
    );
};

export default AddTodo;
