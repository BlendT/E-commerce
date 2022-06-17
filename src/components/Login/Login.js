import classes from "./Login.module.css";
import Spiner from "../../UI/Spiner";
import Input from "../../UI/Input";
import img from "../../assets/headerLogo.svg";
import Button from "../../UI/Button";
import Register from "../Register/Register";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import AuthContext from "../../store/auth-context";

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
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

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
    setIsLoading(true);
    const timer = setTimeout(() => {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_vXCslWqmxrgT-2KfEQBpjXfzHNlhYV4",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailState.email,
            password: passwordState.password,
            returnSecureToken: true,
          }),

          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            setIsLoading(false);
            return response.json();
          } else {
            return response.json().then((data) => {
              setIsLoading(false);
              throw new Error(data.error.message);
            });
          }
        })
        .then((data) => {
          authCtx.login(data.idToken);
        })
        .catch((err) => alert(err.message));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <div>
      {isLoading && (
        <div className={classes.spiner}>
          <Spiner />
        </div>
      )}
      {!isLoading && !authCtx.registerIsShown && (
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
              <button className={classes.btn} onClick={authCtx.showRegister}>
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
