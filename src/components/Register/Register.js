import Spiner from "../../UI/Spiner";
import classes from "./Register.module.css";
import Input from "../../UI/Input";
import img from "../../assets/headerLogo.svg";
import Button from "../../UI/Button";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import AuthContext from "../../store/auth-context";

const nameRegex = new RegExp(/[A-Za-z]+/g);

const nameReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return {
        name: action.name,
        isValid: action.name.match(nameRegex) ? true : false,
      };

    case "NAME_ON_BLUR":
      return {
        name: state.name,
        isValid: state.name.match(nameRegex) ? true : false,
      };
    default:
      return state;
  }
};

const emailReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return {
        email: action.email,
        isValid: action.email.includes("@") ? true : false,
      };

    case "EMAIL_ON_BLUR":
      return {
        email: state.email,
        isValid: state.email.includes("@") ? true : false,
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
        isValid: action.password.length > 6 ? true : false,
      };

    case "PASSWORD_ON_BLUR":
      return {
        password: state.password,
        isValid: state.password.length > 6 ? true : false,
      };

    default:
      return state;
  }
};

const Register = (props) => {
  const [formIsValid, setFormIsValid] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const authCtx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    email: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    password: "",
    isValid: null,
  });

  const [nameState, dispatchName] = useReducer(nameReducer, {
    name: "",
    isValid: null,
  });

  const nameHandleOnChange = (event) => {
    dispatchName({
      type: "NAME",
      name: event.target.value,
    });
  };

  const emailHandleOnChange = (event) => {
    dispatchEmail({
      type: "EMAIL",
      email: event.target.value,
    });
  };

  const passwordHandleOnChange = (event) => {
    dispatchPassword({
      type: "PASSWORD",
      password: event.target.value,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        emailState.isValid && nameState.isValid && passwordState.isValid
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [emailState.isValid, passwordState.isValid, nameState.isValid]);

  const emailRef = useRef();
  const passwordRef = useRef();

  const nameHandleOnBlur = () => {
    dispatchName({
      type: "NAME_ON_BLUR",
    });
  };

  const emailHandleOnBlur = () => {
    dispatchEmail({
      type: "EMAIL_ON_BLUR",
    });
  };

  const passwordHandleOnBlur = () => {
    dispatchEmail({
      tupe: "PASSOWRD_ON_BLUR",
    });
  };

  const formHandleOnSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(() => {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_vXCslWqmxrgT-2KfEQBpjXfzHNlhYV4",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailState.email,
            password: passwordState.password,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      ).then((response) => {
        if (response.ok) {
          authCtx.registerHandler(true);
          setIsLoading(false);
        } else {
          return response.json().then((data) => {
            authCtx.registerHandler(false);
            setIsLoading(false);
            setError(data);
            alert(data.error.message);
          });
        }
      });
    }, 1000);
    return () => {
      clearTimeout(timer);
      authCtx.registerHandler(false);
      setIsLoading(false);
    };
  };

  return (
    <div className={classes.login}>
      {isLoading && (
        <div className={classes.spiner}>
          <Spiner />
        </div>
      )}

      {!isLoading && !authCtx.isRegistered && (
        <div className={classes["login-container"]}>
          <img src={img} alt="svg" />
          <label htmlFor="email" />
          <div className={classes.input}>
            <form onSubmit={formHandleOnSubmit}>
              <div>
                <div>
                  <Input
                    type="text"
                    placeholder="name"
                    value={nameState.name}
                    onChange={nameHandleOnChange}
                    isValid={nameState.isValid}
                    onBlur={nameHandleOnBlur}
                  />
                </div>
                <Input
                  type="text"
                  ref={emailRef}
                  placeholder="email"
                  value={emailState.email}
                  isValid={emailState.isValid}
                  onChange={emailHandleOnChange}
                  onBlur={emailHandleOnBlur}
                />
              </div>
              <div>
                <Input
                  ref={passwordRef}
                  type="password"
                  placeholder="password"
                  value={passwordState.password}
                  isValid={passwordState.isValid}
                  onChange={passwordHandleOnChange}
                  onBlur={passwordHandleOnBlur}
                />
              </div>
              <div>
                <Button>Register</Button>
              </div>
            </form>
            <div>
              <button className={classes.btn} onClick={authCtx.showRegister}>
                Back to Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
