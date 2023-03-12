import React, { useState } from "react";
import Input from "../../../components/input/Input";
import { addFriend } from "./addFriend";

function AddFriendContainer() {
  const [friend, setFriend] = useState("");

  async function submitHandler() {
    const res = await addFriend(friend);
  }

  return (
    <div>
      <Input onChange={(event) => setFriend(event.target.value)} />
      <button onClick={submitHandler}>Add Friend</button>
    </div>
  );
}

export default AddFriendContainer;
