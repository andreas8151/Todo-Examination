import React, { useState, useEffect } from "react";
import TodoInput from "../../components/todoInput/TodoInput";
import { addTodoSubmitHandler } from "./functions/addTodoSubmitHandler";
import { deleteTodoHandler } from "./functions/deleteTodoHandler";
import { updateTodoHandler } from "./functions/updateTodoHandler";
import "./home.css";

function Home() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [description, setDescription] = useState("");

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
    <div className="homeContainer">
      <TodoInput
        title="Add Todo"
        buttonTitle="Add"
        submitCallbackFunction={addTodoSubmitHandler}
      />

      <div className="todoContainer">
        {todos.map((todo, index) => {
          const ID = todo.ID;
          return (
            <div className="todo" key={index}>
              <h4>{todo.title}</h4>
              <small>{todo.description}</small>
              <input
                placeholder="todo"
                type="text"
                  onChange={(event) => setTodoTitle(event.target.value)}
              ></input>
              <input
                placeholder="description"
                type="text"
       
                onChange={(event) => setDescription(event.target.value)}
              ></input>
              <button
                onClick={() => updateTodoHandler(ID, todoTitle, description)}
              >
                Update
              </button>
              <button onClick={() => deleteTodoHandler(ID)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
