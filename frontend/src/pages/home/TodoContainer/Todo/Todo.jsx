import { useState } from "react";
import { deleteTodo } from "../../functions/deleteTodoHandler";
import { updateTodo } from "../../functions/updateTodoHandler";
import { toggleCompletion } from "../../functions/toggleCompletion";
export default function Todo({ todo, todos, setTodos }) {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  function toggleCompletionHandler() {
    toggleCompletion(todo.ID).then((res) => {
      const clonedTodos = structuredClone(todos);
      const currentTodo = clonedTodos.find(
        (clonedTodo) => clonedTodo.ID === todo.ID
      );
      currentTodo.completed = res;
      setTodos(clonedTodos);
    });
  }

  function updateTodoHandler() {
    updateTodo(todo.ID, title, description);
  }

  function deleteTodoHandler() {
    deleteTodo(todo.ID);
  }

  return (
    <div className={todo.completed == "1" ? "todoDone" : "todo"}>
      <h4>{title}</h4>
      <small>{description}</small>
      <input
        placeholder="todo"
        type="text"
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        placeholder="description"
        type="text"
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        className="todoDoneButton"
        onClick={() => toggleCompletionHandler(todo.ID)}
      >
        {todo.completed == "1" ? "regret" : "it's done"}
      </button>
      <button onClick={() => updateTodoHandler(todo.ID, title, description)}>
        Update
      </button>
      <button
        className="deleteButton"
        onClick={() => deleteTodoHandler(todo.ID)}
      >
        X
      </button>
    </div>
  );
}
