import classes from "./Login.module.css";
import Input from "../../UI/Input";
import img from "../../assets/headerLogo.svg";
import Button from "../../UI/Button";
import Register from "../Register/Register";
import { useReducer, useState } from "react";

const initialState = {
  email: "",
  password: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.email };

    case "password":
      return { ...state, password: action.password };

    default:
      return state;
  }
};

const Login = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [showRegister, setShowRegister] = useState(false);
  console.log(formState.password);

  const registerHandleOnClick = () => {
    setShowRegister(true);
  };

  const loginHandleOnClick = () => {
    setShowRegister(false);
  };

  const emailHandleOnChange = (event) => {
    dispatch({
      type: "email",
      email: event.target.value,
    });
  };

  const passwordHandleOnChange = (event) => {
    dispatch({
      type: "password",
      password: event.target.value,
    });
  };

  return (
    <div>
      {!showRegister && (
        <div className={classes["login-container"]}>
          <img src={img} alt="svg" />
          <label htmlFor="email" />
          <div className={classes.input}>
            <form>
              <div>
                <Input
                  type="text"
                  placeholder="email"
                  value={formState.email}
                  onChange={emailHandleOnChange}
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="password"
                  value={formState.password}
                  onChange={passwordHandleOnChange}
                />
              </div>
              <div>
                <Button>Log In</Button>
              </div>
            </form>
            <div>
              <button className={classes.btn} onClick={registerHandleOnClick}>
                Register
              </button>
            </div>
          </div>
        </div>
      )}
      {showRegister && <Register loginHandleOnClick={loginHandleOnClick} />}
    </div>
  );
};

export default Login;
