import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../redux/todoSlice";

function TodoList() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid green" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button
        onClick={() => {
          dispatch(addTodo(input));
          setInput("");
        }}
        style={{ marginLeft: "10px" }}
      >
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
