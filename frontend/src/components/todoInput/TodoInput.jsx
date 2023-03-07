import React, { useState } from "react";
import Input from "../input/Input";
import "./todoInput.css";

function TodoInput({ submitCallbackFunction, title, buttonTitle }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [description, setDescription] = useState("");
  const [callbackResult, setCallbackResult] = useState("");

  async function submitHandler(event) {
    event.preventDefault();
    const res = await submitCallbackFunction(todoTitle, description);
    setCallbackResult(res);
  }

  return (
    <>
      <div className="formContainer">
        <form onSubmit={submitHandler}>
          <h1>{title}</h1>
          <label>Todo</label>
          <Input
            type="text"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
          />
          <label>description</label>
          <Input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <button type="submit" className="button" title="Login">
            {buttonTitle}
          </button>
        </form>
      </div>
      <p className="callBackResult">{callbackResult}</p>
    </>
  );
}

export default TodoInput;
