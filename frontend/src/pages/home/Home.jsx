import TodoInput from "./addTodoInput/TodoInput";
import { addTodoSubmitHandler } from "./addTodoInput/addTodoSubmitHandler";
import TodoContainer from "./TodoContainer/TodoContainer";
import "./home.css";
import AddFriendContainer from "./friends/AddFriendContainer";

function Home() {
  const username = localStorage.getItem("username");
  return (
    <div className="homeContainer">
      <h4>Welcome {username}! </h4>
      <AddFriendContainer />
      <TodoInput
        title="Add Todo"
        buttonTitle="Add"
        submitCallbackFunction={addTodoSubmitHandler}
      />
      <TodoContainer />
    </div>
  );
}
export default Home;
