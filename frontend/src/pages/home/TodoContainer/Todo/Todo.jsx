import { useState } from "react";
import { deleteTodo } from "../../functions/deleteTodoHandler";
import { updateTodo } from "../../functions/updateTodoHandler";
import { toggleCompletion } from "../../functions/toggleCompletion";
import TodoInputs from "./todoInputs/TodoInputs";
import TodoCompletionButton from "./todoCompletionButton/TodoCompletionButton";
import TodoDeleteButton from "./todoDeleteButton/TodoDeleteButton";
import TodoUpdateButton from "./todoUpdateButton/TodoUpdateButton";

export default function Todo({ todo, todos, setTodos }) {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  async function toggleCompletionHandler() {
    const res = await toggleCompletion(todo.ID);
    const clonedTodos = [...todos];
    const currentTodo = clonedTodos.find(
      (clonedTodo) => clonedTodo.ID === todo.ID
    );
    currentTodo.completed = res;
    setTodos(clonedTodos);
  }

  //TODO
  async function updateTodoHandler() {
    await updateTodo(todo.ID, title, description);
    const clonedTodos = [...todos];
    const currentTodo = clonedTodos.find(
      (clonedTodo) => clonedTodo.ID === todo.ID
    );
    currentTodo.title = title;
    currentTodo.description = description;
    setTodos(clonedTodos);
  }
  async function deleteTodoHandler() {
    await deleteTodo(todo.ID);
    const clonedTodos = [...todos];
    const updatedTodos = clonedTodos.filter(
      (clonedTodo) => clonedTodo.ID !== todo.ID
    );
    setTodos(updatedTodos);
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
