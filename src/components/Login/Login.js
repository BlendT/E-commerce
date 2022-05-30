import classes from "./Login.module.css";
import Input from "../../UI/Input";
import img from "../../assets/headerLogo.svg";
import Button from "../../UI/Button";
import Register from "../Register/Register";
import { useReducer, useState } from "react";

const emailReducer = (state, action) => {
  switch (action.type) {
    case "email":
      return {
        email: action.email,
        emailIsValid: action.email.includes("@") ? true : false,
      };

    default:
      return state;
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "password":
      return {
        password: action.password,
        passwordIsValid: action.password.length > 6 ? true : false,
      };
    default:
      return state;
  }
};

const Login = () => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    email: "",
    emailIsValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    password: "",
    passwordIsValid: null,
  });

  const [showRegister, setShowRegister] = useState(false);

  const registerHandleOnShow = () => {
    setShowRegister(true);
  };

  const loginHandleOnShow = () => {
    setShowRegister(false);
  };

  const emailHandleOnChange = (event) => {
    dispatchEmail({
      type: "email",
      email: event.target.value,
    });
  };

  const passwordHandleOnChange = (event) => {
    dispatchPassword({
      type: "password",
      password: event.target.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("eemasdsd", emailState.emailIsValid);
    console.log("password", passwordState.passwordIsValid);
    dispatchEmail({
      type: "email",
      email: "",
    });
  };

  return (
    <div>
      {!showRegister && (
        <div className={classes["login-container"]}>
          <img src={img} alt="svg" />
          <label htmlFor="email" />
          <div className={classes.input}>
            <form onSubmit={handleOnSubmit}>
              <div>
                <Input
                  type="text"
                  placeholder="email"
                  value={emailState.email}
                  onChange={emailHandleOnChange}
                />
              </div>
              {!emailState.emailIsValid && <p>sdsd</p>}
              <div>
                <Input
                  type="password"
                  placeholder="password"
                  value={passwordState.password}
                  onChange={passwordHandleOnChange}
                />
              </div>
              <div>
                <Button>Log In</Button>
              </div>
            </form>
            <div>
              <button className={classes.btn} onClick={registerHandleOnShow}>
                Register
              </button>
            </div>
          </div>
        </div>
      )}
      {showRegister && <Register loginHandleOnShow={loginHandleOnShow} />}
    </div>
  );
};

export default Login;
