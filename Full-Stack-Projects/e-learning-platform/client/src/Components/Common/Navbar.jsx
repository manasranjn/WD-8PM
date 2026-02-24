import React, { useState } from "react";
import images from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);
  // console.log(openMenu);

  return (
    <div>
      <div className="bg-[#15beb3] flex justify-between items-center px-4 md:px-10 xl:px-20 py-2 md:py-3 xl:py-4">
        <img src={images.logo} alt="" className="h-8 md:h-10 xl:h-12" />

        <div className="hidden md:flex gap-10">
          <ul className="flex items-center gap-4 xl:gap-10 text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/about">About US</Link>
            </li>
          </ul>

          <div className="flex gap-4 xl:gap-6">
            <button
              className="bg-white text-shadow-gray-700 w-20 xl:w-28 py-2 text-sm xl:text-base rounded-full cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="bg-[#ffffff58] text-white w-20 xl:w-28 py-2 text-sm xl:text-base rounded-full cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign Up
            </button>
          </div>
        </div>
        <GiHamburgerMenu
          className="block md:hidden text-white cursor-pointer"
          size={22}
          onClick={() => setOpenMenu(true)}
        />
      </div>

      <div
        className={` ${openMenu ? "fixed top-0 left-0 w-full h-screen pl-20 bg-white z-10" : "hidden"}`}
      >
        <IoMdClose
          className="absolute top-4 right-4  cursor-pointer"
          size={30}
          onClick={() => setOpenMenu(false)}
        />
        <ul className="flex flex-col items-left justify-center h-1/2 gap-4">
          <li>
            <Link to="/" onClick={() => setOpenMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" onClick={() => setOpenMenu(false)}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={() => setOpenMenu(false)}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/about " onClick={() => setOpenMenu(false)}>
              About US
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
