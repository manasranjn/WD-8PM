import React, { useState } from "react";
import { FaSearch, FaUser, FaCartPlus } from "react-icons/fa";
import { IoHelpCircleSharp, IoMenu, IoClose } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar for Large Screen */}
      <div className="hidden py-3 px-6 lg:px-20 md:flex justify-between items-center shadow">
        <Link to="/">
          <div className="flex gap-2 items-center">
            <span className="bg-orange-400 px-2 py-1 text-white font-semibold md:text-lg rounded-lg">
              FH
            </span>
            <h2 className="md:text-xl font-semibold">Food Hub</h2>
          </div>
        </Link>

        <div className="flex gap-6 items-center relative">
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="px-4 pl-8 py-2 bg-gray-200 w-56 rounded focus:outline-none"
            />
          </div>

          {/* Help */}
          <Link
            to="/help"
            className="flex items-center gap-2 hover:text-orange-400 cursor-pointer"
          >
            <IoHelpCircleSharp size={24} className="text-gray-600" />
            <span className="text-sm font-semibold">Help</span>
          </Link>

          {/* User Dropdown */}
          <div className="relative">
            <div
              className="flex items-center gap-2 hover:text-orange-400 cursor-pointer"
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
            >
              <FaUser size={18} className="text-gray-600" />
              <span className="text-sm font-semibold">User</span>
            </div>
            {isUserMenuOpen && (
              <div className="absolute w-40 top-10 border-t-2 border-orange-400 right-0 bg-white shadow-md py-2 px-4 rounded">
                <ul className="flex flex-col space-y-2 text-sm">
                  <li className="cursor-pointer hover:text-orange-400">
                    Profile
                  </li>
                  <li className="cursor-pointer hover:text-orange-400">
                    Orders
                  </li>
                  <li className="flex gap-2 items-center cursor-pointer hover:text-orange-400">
                    Logout <MdLogout />
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-2 hover:text-orange-400 cursor-pointer"
          >
            <FaCartPlus size={22} className="text-gray-600" />
            <span className="text-sm font-semibold">Cart</span>
          </Link>
        </div>
      </div>

      {/* Small Screen Navbar */}
      <div className="md:hidden flex justify-between items-center shadow px-4 py-2">
        <Link to="/">
          <div className="flex gap-2 items-center">
            <span className="bg-orange-400 px-2 py-1 text-white font-semibold rounded-lg">
              FH
            </span>
            <h2 className="text-lg font-semibold">Food Hub</h2>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="flex items-center gap-1 cursor-pointer">
            <FaCartPlus size={20} className="text-gray-600" />
          </Link>

          <IoMenu
            size={28}
            className="text-gray-700 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 z-50 transition-all">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Menu</h3>
            <IoClose
              size={28}
              className="cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>

          <ul className="space-y-6 text-gray-700 text-base font-medium">
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/help" onClick={() => setIsMobileMenuOpen(false)}>
                Help
              </Link>
            </li>
            <li>
              <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/orders" onClick={() => setIsMobileMenuOpen(false)}>
                Orders
              </Link>
            </li>
            <li className="flex gap-2 items-center cursor-pointer">
              Logout <MdLogout />
            </li>

            {/* Mobile Search */}
            <li className="mt-6">
              <div className="relative">
                <FaSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-8 py-2 bg-gray-100 rounded focus:outline-none"
                />
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
