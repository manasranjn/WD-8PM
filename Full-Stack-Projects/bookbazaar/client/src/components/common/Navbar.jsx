import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import assets from "../../assets/assets.js";
import Login from "../../pages/Common/Login.jsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}

        <Link to="/">
          <img src={assets.logo} alt="logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex space-x-8 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 transition font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 transition font-semibold" : ""
              }
            >
              Books
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 transition font-semibold" : ""
              }
            >
              Categories
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 transition font-semibold" : ""
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Right Section */}

        <div className="hidden lg:flex items-center space-x-6">
          {/* Search */}

          <input
            type="text"
            placeholder="Search books..."
            className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Cart */}

          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl text-gray-700 hover:text-indigo-600 transition" />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              0
            </span>
          </Link>

          {/* Login */}

          <button
            className="bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Icon */}

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 pb-6">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/books" onClick={() => setMenuOpen(false)}>
                Books
              </Link>
            </li>

            <li>
              <Link to="/categories" onClick={() => setMenuOpen(false)}>
                Categories
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link to="/cart" onClick={() => setMenuOpen(false)}>
                Cart
              </Link>
            </li>

            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}

      <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
