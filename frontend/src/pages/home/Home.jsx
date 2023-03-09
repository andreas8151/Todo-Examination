import TodoInput from "../../components/todoInput/TodoInput";
import { addTodoSubmitHandler } from "./functions/addTodoSubmitHandler";
import TodoContainer from "./TodoContainer/TodoContainer";
import "./home.css";

function Home() {
  return (
    <div className="homeContainer">
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
