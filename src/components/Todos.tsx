import { RootState } from "@/app/store";
import { Todo } from "@/features/todo/types";
import { useSelector } from "react-redux";

function Todos() {
    const todos = useSelector<RootState, Todo[]>(state => state.todos.all);
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}

export default Todos;
