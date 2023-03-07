export const addTodoSubmitHandler = async function addTodoHandler(
  todoTitle,
  description
) {
  try {
    const data = await fetch(`http://localhost:5050/todo/addTodo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todoTitle,
        description,
      }),
      credentials: "include", //include cookies
    });

    const responseText = await data.text();

    if (data.status === 200) {
      return responseText;
    }
    return responseText;
  } catch (error) {
    const res = error.response.data;
    return res;
  }
};
