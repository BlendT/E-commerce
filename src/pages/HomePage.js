import "./HomePage.css";
import React from "react";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import Category from "../components/Category/Category";
import Brands from "../components/PopularBrands/Brands";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Slider />
        <Category />
        <Brands />
      </main>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default HomePage;
