export async function addTodoSubmitHandler(title, description) {
  try {
    const data = await fetch(`http://localhost:5050/todo/addTodo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
      }),
      credentials: "include", //include cookies
    });

    const responseText = await data.text();
    return responseText;
    
  } catch (error) {
    const res = error.response.data;
    return res;
  }
}
