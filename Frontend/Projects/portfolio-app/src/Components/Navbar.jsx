import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar for Large Screens */}
      <div className="hidden lg:flex px-20 py-3 justify-between items-center">
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

      {/* Navbar for Small Screens */}
      <div className="px-6 py-2 lg:hidden flex justify-between items-center">
        <h4>Portfolio</h4>
        <IoMenu className="text-3xl" onClick={() => setIsMenuOpen(true)} />
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`
          fixed top-0 left-0 h-full w-full bg-white p-10 z-50
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <IoClose
          className="text-3xl absolute top-5 right-6"
          onClick={() => setIsMenuOpen(false)}
        />

        <ul className="mt-12 flex flex-col items-start gap-6 text-lg">
          <li>
            <a href="#hero" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#project" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
