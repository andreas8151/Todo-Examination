export async function toggleCompletion(ID) {
  try {
    const data = await fetch(`http://localhost:5050/todo/todoDone`, {
      method: "POST",
      credentials: "include", //include cookies
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ID }),
    });

    const responseNumber = await data.text();
    return responseNumber;
    
  } catch (error) {
    const res = error.response.data;
    return res;
  }
}
