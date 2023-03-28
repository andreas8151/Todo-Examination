function TodoInputs({ title, description, setTitle, setDescription }) {
  return (
    <>
      {" "}
      <input
        placeholder="todo"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        placeholder="description"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
    </>
  );
}

export default TodoInputs;
