import TodoInput from "./addTodoInput/TodoInput";
import { addTodoSubmitHandler } from "./addTodoInput/addTodoSubmitHandler";
import TodoContainer from "./TodoContainer/TodoContainer";
import "./home.css";
import AddFriendContainer from "./friends/FriendContainer";

function Home() {
  return (
    <div className="homeContainer">
      {" "}
      <TodoInput
        title="Add Todo"
        buttonTitle="Add"
        submitCallbackFunction={addTodoSubmitHandler}
      />
      <TodoContainer />
      <AddFriendContainer />
    </div>
  );
}
export default Home;
