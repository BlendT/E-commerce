import classes from "./Login.module.css";
import Input from "../../UI/Input";
import img from "../../assets/headerLogo.svg";
import Button from "../../UI/Button";
import Register from "../Register/Register";
import { useState } from "react";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  const registerHandleOnClick = () => {
    setShowRegister(true);
  };

  const loginHandleOnClick = () => {
    setShowRegister(false);
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
                <Input type="text" placeholder="email" />
              </div>
              <div>
                <Input type="password" placeholder="password" />
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
