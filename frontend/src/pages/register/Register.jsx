import Form from "../../components/form/Form";
import { registerSubmitHandler } from "./registerSubmitHandler";

function Register() {
  return (
    <div>
      {" "}
      <Form
        title="Register"
        buttonTitleOne="Register"
        buttonTitleTwo="To Login"
        linkTo="/"
        submitCallbackFunction={registerSubmitHandler}
      />
    </div>
  );
}

export default Register;
