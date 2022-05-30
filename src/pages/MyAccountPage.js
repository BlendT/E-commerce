import "./MyAccountPage.css";
import React from "react";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";

const MyAccountPage = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Login />
      </main>
    </React.Fragment>
  );
};

export default MyAccountPage;
