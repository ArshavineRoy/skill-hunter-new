import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full mx-auto border-b-2 mb-[100px] bg-white font-bold 2xl:max-w-7xl">
        <div className="relative flex flex-col w-full py-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a
              className="text-lg tracking-tight text-black uppercase focus:outline-none lg:text-2xl"
              href="/"
            >
              <h1>
                SKILL <span style={{ color: "slateblue" }}>HUNTER</span>
              </h1>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-black focus:outline-none focus:text-black md:hidden"
            >
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={isOpen ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
                <path
                  className={!isOpen ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav
            className={
              isOpen
                ? "flex flex-col items-center flex-grow"
                : "hidden md:pb-0 md:flex md:justify-end md:flex-row"
            }
          >
            <NavLink
              to="/"
              className="px-2 py-2 text-sm text-gray-700 lg:px-6 mr-2 md:px-3"
              style={{ fontSize: "18px" }}
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className="px-2 py-2 text-sm text-gray-700 lg:px-6 md:px-3 mr-2"
              style={{ fontSize: "18px"}}
            >
              About
            </NavLink>
            <NavLink
              to="admin"
              className="px-2 py-2 text-sm text-gray-700 lg:px-6 md:px-3 mr-2"
              style={{ fontSize: "18px" }}
            >
              Employers
            </NavLink>
            <NavLink
              to="help"
              className="px-2 py-2 text-sm text-gray-700 lg:px-6 md:px-3 mr-2"
              style={{ fontSize: "18px" }}
            >
              Help
            </NavLink>

            <div className="inline-flex items-center gap-2 px-2 list-none lg:ml-auto">
              <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black">
                Log in
              </button>
              {/* <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black">
                Sign up
              </button> */}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
