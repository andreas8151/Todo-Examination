import TodoInput from "../../components/todoInput/TodoInput";
import { addTodoSubmitHandler } from "./functions/addTodoSubmitHandler";

function Home() {
  return (
    <div>
      <TodoInput
        title="Add Todo"
        buttonTitle="Add"
        submitCallbackFunction={addTodoSubmitHandler}
      />
    </div>
  );
}

export default Home;
