import React from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../features/todo/todoSlice";

type AddTodoProps = {
    children: React.ReactNode;
};
function AddTodo({ children }: AddTodoProps) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addTodo("drink water"));
    };
    return (
        <div>
            <button type="button" className="button" onClick={handleClick}>
                add Todo
            </button>
            {children}
        </div>
    );
}

export default AddTodo;
