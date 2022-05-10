import React from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import CloakPage from "./components/pages/CloakPage";
import HomePage from "./components/pages/HomePage";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<CloakPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}
