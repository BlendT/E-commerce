import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import MyAccountPage from "./pages/MyAccountPage";
import PersonalDetailsPage from "./pages/PersonalDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Navigate to="/home" />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/myaccount" element={<MyAccountPage />}></Route>
      <Route
        path="/myaccount/edit-account"
        element={<PersonalDetailsPage />}
      ></Route>
    </Routes>
  );
}

export default App;
