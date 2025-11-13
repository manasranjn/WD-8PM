import React from "react";

const Navbar = () => {
  return (
    <div className="flex px-10 md:px-20 py-3 justify-between items-center">
      <h4>Portfolio</h4>
      <ul className="flex justify-between items-center gap-4">
        <li>
          <a href="#hero">About</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
