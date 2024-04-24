import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import Support from "../Screens/Support";
import Sidebar from "../Components/Sidebar";

const AppRoutes = () => {
  return (
    <>
    <Sidebar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/support" element={<Support />} />
    </Routes>
    </>
  );
};

export default AppRoutes;
