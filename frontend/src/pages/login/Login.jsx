import Form from "../../components/form/Form";
import { logInSubmitHandler } from "./loginSubmitHandler";

function Login() {
  return (
    <div>
      <Form
        title="Login"
        buttonTitleOne="Login"
        buttonTitleTwo="To Register"
        linkTo="/register"
        submitCallbackFunction={logInSubmitHandler}
      />
    </div>
  );
}

export default Login;
