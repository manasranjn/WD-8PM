import React, { useState, useEffect } from "react";
import images from "../../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <div className="bg-[#15beb3] flex justify-between items-center px-4 md:px-10 xl:px-20 py-2 md:py-3 xl:py-4">
        <img src={images.logo} alt="" className="h-8 md:h-10 xl:h-12" />

        <div className="hidden md:flex gap-10">
          <ul className="flex items-center gap-4 xl:gap-10 text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1"
                    : ""
                }
              >
                Courses
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1"
                    : ""
                }
              >
                Blogs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1"
                    : ""
                }
              >
                About US
              </NavLink>
            </li>
          </ul>

          <div className="flex gap-4 xl:gap-6">
            {isLoggedIn ? (
              <button
                className="bg-red-500 text-white w-24 xl:w-28 py-2 rounded-full cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  className="bg-white w-20 xl:w-28 py-2 rounded-full cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="bg-[#ffffff58] text-white w-20 xl:w-28 py-2 rounded-full cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>

        <GiHamburgerMenu
          className="block md:hidden text-white cursor-pointer"
          size={22}
          onClick={() => setOpenMenu(true)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${openMenu ? "fixed top-0 left-0 w-full h-screen pl-20 bg-white z-10" : "hidden"}`}
      >
        <IoMdClose
          className="absolute top-4 right-4 cursor-pointer"
          size={30}
          onClick={() => setOpenMenu(false)}
        />

        <ul className="flex flex-col h-1/2 gap-4">
          <li>
            <NavLink
              to="/"
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                isActive ? "text-[#15beb3] font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                isActive ? "text-[#15beb3] font-semibold" : ""
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                isActive ? "text-[#15beb3] font-semibold" : ""
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                isActive ? "text-[#15beb3] font-semibold" : ""
              }
            >
              About US
            </NavLink>
          </li>

          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <button onClick={() => navigate("/login")}>Login</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
