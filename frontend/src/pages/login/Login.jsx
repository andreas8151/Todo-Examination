import Form from "../../components/form/Form";
import { logInSubmitHandler } from "./loginSubmitHandler";
import "./login.css";

function Login() {
  return (
    <div className="logInContainer">
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