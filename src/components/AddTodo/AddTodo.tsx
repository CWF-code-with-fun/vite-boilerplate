import { type PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import { Button } from "keep-react";
import { addTodo } from "@/features/todo/todoSlice";
import { type AppDispatch } from "@/app/store";
import useLocalization from "@/hooks/useLocalization";

export interface AddTodoProps {}

function AddTodo({ children }: PropsWithChildren<AddTodoProps>) {
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useLocalization();

    function handleClick() {
        dispatch(addTodo("Learn React"));
    }

    return (
        <div>
            {children}
            <Button size="md" onClick={handleClick}>
                {t("addTodo")}
            </Button>
        </div>
    );
}

export default AddTodo;
