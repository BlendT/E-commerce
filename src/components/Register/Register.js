import classes from "./Register.module.css";
import Input from "../../UI/Input";
import img from "../../assets/headerLogo.svg";
import Button from "../../UI/Button";

const Register = (props) => {
  return (
    <div className={classes["login-container"]}>
      <img src={img} alt="svg" />
      <label htmlFor="email" />
      <div className={classes.input}>
        <form>
          <div>
            <div>
              <Input type="text" placeholder="name" />
            </div>
            <Input type="text" placeholder="email" />
          </div>
          <div>
            <Input type="password" placeholder="password" />
          </div>
          <div>
            <Button>Register</Button>
          </div>
        </form>
        <div>
          <button className={classes.btn} onClick={props.loginHandleOnClick}>
            Back to Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
