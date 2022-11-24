import React from "react";
import { NavLink } from "react-router-dom";



function Header() {
  return (

    <div className="d-flex justify-content-evenly">
      <NavLink exact activeClassName="active" to="/">
        About Me
      </NavLink>
      <NavLink activeClassName="active" to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>
      <NavLink activeClassName="active" to="/resume">
        Resume
      </NavLink>
  </div>
  )
  
}
export default Header;