export async function deleteTodo(ID) {
  try {
    const data = await fetch(`http://localhost:5050/todo/deleteTodo`, {
      method: "DELETE",
      credentials: "include", //include cookies
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ID }),
    });

    const responseText = await data.text();
    return responseText;
  } catch (error) {
    const res = error.response.data;
    return res;
  }
}
