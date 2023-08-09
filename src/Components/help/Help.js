import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Faq from "./Faq";
import ContactUs from "./ContactUs";

function Help() {
  return (
    <div className="help-layout">
      <div className="help-layout-content">
        {/* <h3 className="font-bold" >Website Help</h3> */}
        <Faq />

        <h3 className="text-xl text-center font-bold mt-16 mb-4">
          For more information, reach out to us via the contact info below:
        </h3>

        <ContactUs />
      </div>
    </div>
  );
}

export default Help;
