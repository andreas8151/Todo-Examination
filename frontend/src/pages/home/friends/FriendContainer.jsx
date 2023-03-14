import React, { useState, useEffect } from "react";
import { addFriend } from "./addFriend";
import "./friendsContainer.css";

function AddFriendContainer() {
  const [friend, setFriend] = useState("");
  const [resText, setResText] = useState("");
  const [friends, setFriends] = useState([]);
  const [friendTodoList, setFriendTodoList] = useState([]);

  const username = localStorage.getItem("username");

  //get friends
  useEffect(() => {
    async function getFriends() {
      const data = await fetch("http://localhost:5050/friend/getFriends", {
        credentials: "include",
      });
      const res = await data.json();
      setFriends(res);
    }
    getFriends();
  }, []);

  async function submitHandler() {
    const res = await addFriend(friend);
    getFriendTodoList(friend);
    setResText(res);
    if (res == "Friend Added") {
      setFriends([...friends, { username: friend }]);
    }
  }

  async function getFriendTodoList(friend) {
    const data = await fetch("http://localhost:5050/friend/getFriendTodos", {
      credentials: "include", //include cookies
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        friend,
      }),
    });
    const res = await data.json();
    setFriendTodoList(res);
  }

  return (
    <div className="friendsContainer">
      <h4>Friends of {username}! </h4>{" "}
      <div className="addFriendContainer">
        <input onChange={(event) => setFriend(event.target.value)} />
        <button onClick={submitHandler}>Add Friend</button>
        <p>{resText}</p>
        <div className="friendList">
          {friends.map((friend, index) => {
            return (
              <button
                key={index}
                onClick={() => getFriendTodoList(friend.username)}
              >
                {friend.username}
              </button>
            );
          })}
        </div>
      </div>
      {friendTodoList.map((todo, index) => {
        return (
          <p
            className={todo.completed == "1" ? "friendTodoDone" : "friendTodo"}
            key={index}
          >
            {todo.title}
          </p>
        );
      })}
    </div>
  );
}

export default AddFriendContainer;
