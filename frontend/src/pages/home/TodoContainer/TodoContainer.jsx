import React, { useState, useEffect } from "react";
import Todo from "./Todo/Todo.jsx";

export default function TodoContainer() {
  const [todos, setTodos] = useState([]);

  // Gets all the lists when component loads.
  useEffect(() => {
    async function getUsersTodos() {
      const data = await fetch("http://localhost:5050/todo/getUsersTodos", {
        credentials: "include",
      });
      const res = await data.json();
      setTodos(res);
    }

    getUsersTodos();
  }, []);

  return (
    <div className="todoContainer">
      {todos.map((todo) => (
        <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.ID} />
      ))}
    </div>
  );
}
