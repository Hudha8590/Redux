import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./TodoSlice";

const TodoApp = () => {
    const [text, setText] = useState("");
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim() === "") return;
        dispatch(addTodo(text));
        setText("");
    };

    return (
        <div>
            <h2>Todo App</h2>
            <input
                type="text"
                value={text}
                placeholder="Enter todo..."
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
                            onClick={() => dispatch(toggleTodo(todo.id))}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
