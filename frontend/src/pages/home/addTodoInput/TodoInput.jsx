import React, { useState } from "react";
import Input from "../../../components/input/Input";
import "./todoInput.css";

function TodoInput({ submitCallbackFunction, title, buttonTitle }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [description, setDescription] = useState("");

  async function submitHandler() {
    submitCallbackFunction(todoTitle, description);
  }

  return (
    <>
      <form className="addTodoInputForm" onSubmit={submitHandler}>
        <h1>{title}</h1>
        <label>Todo</label>
        <Input
          type="text"
          onChange={(event) => setTodoTitle(event.target.value)}
        />
        <label>description</label>
        <Input onChange={(event) => setDescription(event.target.value)} />
        <button type="submit" className="button" title="Login">
          {buttonTitle}
        </button>
      </form>
    </>
  );
}

export default TodoInput;
