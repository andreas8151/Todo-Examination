export async function updateTodo(ID, title, description) {
  try {
    const data = await fetch(`http://localhost:5050/todo/updateTodo`, {
      credentials: "include", //include cookies
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        ID,
      }),
    });

    const responseText = await data.text();

    return responseText;
  } catch (error) {
    const res = error.response.data;
    return res;
  }
}
