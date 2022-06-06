import classes from "./Login.module.css";
import Input from "../../UI/Input";
import img from "../../assets/headerLogo.svg";
import Button from "../../UI/Button";
import Register from "../Register/Register";
import { useEffect, useReducer, useRef, useState } from "react";

const emailReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return {
        email: action.email,
        emailIsValid: action.email.includes("@") ? true : false,
      };

    case "EMAIL_ON_BLUR":
      return {
        email: state.email,
        emailIsValid: state.email.includes("@") ? true : false,
      };

    default:
      return state;
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "PASSWORD":
      return {
        password: action.password,
        passwordIsValid: action.password.length > 6 ? true : false,
      };

    case "PASSWORD_ON_BLUR":
      return {
        password: state.password,
        passwordIsValid: state.password.length > 6 ? true : false,
      };

    default:
      return state;
  }
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState();

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    email: "",
    emailIsValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    password: "",
    passwordIsValid: null,
  });

  const { emailIsValid } = emailState;
  const { passwordIsValid } = passwordState;

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 1000);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const [showRegister, setShowRegister] = useState(false);

  const registerHandleOnShow = () => {
    setShowRegister(true);
  };

  const loginHandleOnShow = () => {
    setShowRegister(false);
  };

  const emailHandleOnChange = (event) => {
    dispatchEmail({
      type: "EMAIL",
      email: event.target.value,
    });
  };

  const emailHandleOnBlur = () => {
    dispatchEmail({
      type: "EMAIL_ON_BLUR",
    });
  };

  const passwordOnBlur = () => {
    dispatchPassword({
      type: "PASSWORD_ON_BLUR",
    });
  };

  const passwordHandleOnChange = (event) => {
    dispatchPassword({
      type: "PASSWORD",
      password: event.target.value,
    });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
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
                  ref={emailInputRef}
                  type="text"
                  placeholder="email"
                  isValid={emailState.emailIsValid}
                  value={emailState.email}
                  onChange={emailHandleOnChange}
                  onBlur={emailHandleOnBlur}
                />
              </div>

              <div>
                <Input
                  ref={passwordInputRef}
                  type="password"
                  placeholder="password"
                  isValid={passwordState.passwordIsValid}
                  value={passwordState.password}
                  onChange={passwordHandleOnChange}
                  onBlur={passwordOnBlur}
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
