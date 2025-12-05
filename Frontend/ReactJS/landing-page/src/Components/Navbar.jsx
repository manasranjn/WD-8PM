import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Pricing</li>
        </ul>
        <button>Register Now →</button>
      </div>
    </div>
  );
};

export default Navbar;
