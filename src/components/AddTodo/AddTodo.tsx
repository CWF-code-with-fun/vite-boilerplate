import { type PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import { Button } from "keep-react";
import { addTodo } from "@/features/todo/todoSlice";
import { type AppDispatch } from "@/app/store";

export interface AddTodoProps {}

function AddTodo({ children }: PropsWithChildren<AddTodoProps>) {
    const dispatch = useDispatch<AppDispatch>();

    function handleClick() {
        dispatch(addTodo("Learn React"));
    }

    return (
        <div>
            {children}
            <Button size="md" onClick={handleClick}>
                Add Todo
            </Button>
        </div>
    );
}

export default AddTodo;
