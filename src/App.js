import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import MyAccountPage from "./pages/MyAccountPage";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Navigate to="/home" />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/myAccount" element={<MyAccountPage />}></Route>
    </Routes>
  );
}

export default App;
