export const updateTodoHandler = async function updateTodo(
  ID,
  todoTitle,
  description
) {
  try {
    const data = await fetch(`http://localhost:5050/todo/updateTodo`, {
      credentials: "include", //include cookies
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todoTitle,
        description,
        ID,
      }),
    });

    const responseText = await data.text();

    if (data.status === 200) {
      window.location.href = "/loggedIn";
      return responseText;
    }
    return responseText;
  } catch (error) {
    const res = error.response.data;
    return res;
  }
};
