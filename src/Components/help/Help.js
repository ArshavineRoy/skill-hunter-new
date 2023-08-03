import React from "react";
import {NavLink, Outlet} from 'react-router-dom'


function Help() {

  return <div className="help-layout">
    <div className="help-layout-content">

     <h2>Website Help</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta
        illum, excepturi saepe
      </p>
    </div>
    <nav>
      <NavLink to="faq">View FAQ</NavLink>
      <NavLink to="contact">Contac us</NavLink> 
    </nav>

    <main>
      <Outlet/>
    </main>
  </div>;
}

export default Help;
