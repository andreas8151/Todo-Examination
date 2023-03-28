import { useState } from "react";
import { deleteTodo } from "../../todoFunctions/deleteTodoHandler";
import { updateTodo } from "../../todoFunctions/updateTodoHandler";
import { toggleCompletion } from "../../todoFunctions/toggleCompletion";
import TodoInputs from "./todoInputs/TodoInputs";
import TodoCompletionButton from "./todoCompletionButton/TodoCompletionButton";
import TodoDeleteButton from "./todoDeleteButton/TodoDeleteButton";
import TodoUpdateButton from "./todoUpdateButton/TodoUpdateButton";

export default function Todo({ todo, todos, setTodos }) {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  async function toggleCompletionHandler() {
    const resNumber = await toggleCompletion(todo.ID);

    const clonedTodos = [...todos];
    const currentTodo = clonedTodos.find(
      (clonedTodo) => clonedTodo.ID === todo.ID
    );
    currentTodo.completed = resNumber;
    setTodos(clonedTodos);
  }

  async function updateTodoHandler() {
    const resStatus = await updateTodo(todo.ID, title, description);

    if (resStatus === 200) {
      const clonedTodos = [...todos];
      const currentTodo = clonedTodos.find(
        (clonedTodo) => clonedTodo.ID === todo.ID
      );
      currentTodo.title = title;
      currentTodo.description = description;
    }
  }

  async function deleteTodoHandler() {
    const resStatus = await deleteTodo(todo.ID);
    if (resStatus === 204) {
      const clonedTodos = [...todos];
      const updatedTodos = clonedTodos.filter(
        (clonedTodo) => clonedTodo.ID !== todo.ID
      );
      setTodos(updatedTodos);
    }
  }

  return (
    <div className={todo.completed == "1" ? "todoDone" : "todo"}>
      <h4>{title}</h4>
      <small>{description}</small>
      <TodoInputs
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
      />
      <TodoCompletionButton onClick={toggleCompletionHandler} todo={todo} />
      <TodoUpdateButton onClick={updateTodoHandler} />
      <TodoDeleteButton onClick={deleteTodoHandler} />
    </div>
  );
}
