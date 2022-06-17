import "./HomePage.css";
import React from "react";
import Header from "../components/Header/Header";
import PersonalDetails from "../components/PersonalDetails/PersonalDetails";

const PersonalDetailsPage = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <PersonalDetails />
      </main>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default PersonalDetailsPage;
