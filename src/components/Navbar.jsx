import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const menuRef = useRef(null);

  // set theme and store it in localStorage
  useEffect(() => {
    document.body.classList = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Add scroll event listner to check y-axis position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // clear up the event listner
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cartItems = useSelector((state) => state.cart.cartItems);

  // Disable scrolling on background when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scroll is enabled on cleanup
    };
  }, [showMenu]);
  return (
    <div>
      <div
        className={`navbar bg-gray-400 md:px-20 transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-40 shadow-lg bg-opacity-90"
            : ""
        }`}
      >
        <div className="flex-1 items-center">
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img
              className="w-36 ml-10 md:ml-0 h-12 object-cover"
              src="/logo.png"
              alt="logo"
            />
          </Link>
        </div>

        {/* menu */}
        <div className="md:hidden absolute" onClick={() => setShowMenu(true)}>
          <MenuIcon style={{ fontSize: "35" }} />
        </div>

        {/* Full-screen Menu */}
        {showMenu && (
          <div
            ref={menuRef}
            className="fixed inset-0 bg-gray-800 bg-opacity-95 z-50 flex flex-col"
          >
            <div className="w-full h-16 bg-opacity-75 bg-white">
              <img className="w-32 mx-10" src="/logo.png" alt="logo" />
            </div>
            <button
              className="absolute top-4 right-5 text-white"
              onClick={() => setShowMenu(false)}
            >
              <CloseIcon style={{ fontSize: "35px" }} />
            </button>
            <div className="w-screen flex flex-col top-20 left-10 absolute text-white text-2xl">
              <Link
                to="/"
                className=" mb-5 "
                onClick={() => setShowMenu(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="mb-5"
                onClick={() => setShowMenu(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className="mb-5"
                onClick={() => setShowMenu(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="mb-5"
                onClick={() => setShowMenu(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}

        <div className="hidden md:block">
          <Link to={"/"} className="btn btn-ghost text-lg">
            Home
          </Link>
          <Link to={"/products"} className="btn btn-ghost text-lg">
            Products
          </Link>
          <Link to={"/about"} className="btn btn-ghost text-lg">
            About
          </Link>
          <Link to={"/contact"} className="btn btn-ghost text-lg">
            Contact
          </Link>
        </div>

        {/* right side */}
        <div className="flex gap-2">
          <div className="dropdown dropdown-end">
            <Link to={"/cart"}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cartItems.length}
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>

          {/* Dark mode toggle */}
          <label className="swap swap-rotate ml-3">
            <input
              type="checkbox"
              className="theme-controller"
              onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            />

            {/* Sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* Moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
