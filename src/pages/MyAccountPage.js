import "./MyAccountPage.css";
import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import UserAccount from "../components/Login/UserAccount";
import AuthContext from "../store/auth-context";
import Register from "../components/Register/Register";

const MyAccountPage = () => {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Header />
      <main>
        {!authCtx.isLoggedIn && <Login />}
        {authCtx.registerIsShown && <Register />}
        {authCtx.isLoggedIn && <UserAccount />}
        {authCtx.isRegistered && <UserAccount />}
      </main>
    </React.Fragment>
  );
};

export default MyAccountPage;
