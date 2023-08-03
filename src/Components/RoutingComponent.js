import React from "react";
import { useContext, useState } from "react";
import { dataContext } from "../data/DataContextProvider";
//Routes
import { Route, Routes } from "react-router-dom";
//components
import Home from "../Components/Home";
import NavBar from "../Components/NavBar";
import About from "../Components/About";
import Admin from "./Admin/Admin";
import Help from "./help/Help";

import Faq from "./help/Faq";
import ContactUs from "./help/ContactUs";

function RoutingComponent() {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="about" element={<About />} />
      <Route path="admin" element={<Admin />} />
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default RoutingComponent;
