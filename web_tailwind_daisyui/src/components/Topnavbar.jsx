import React from "react";
import Myswap from "./Myswap";

export default function Topnavbar() {
  return (
    <header className="w-full bg-base-100 py-3 px-5 md:px-20">
      <div className="navbar w-full">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52 flex flex-col gap-2 font-medium"
            >
              <li>
                <a>Action</a>
              </li>
              <li>
                <a>Another Action</a>
              </li>
              <li>
                <a>Dropdown Submenu</a>
              </li>
              <li className="border-b-2">
                <a>404 page</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <ul className="flex justify-center gap-3">
              <li>
                <button className="btn w-full">Log in</button>
              </li>
              <li>
                <button className="btn btn-neutral w-full">Sign in</button>
              </li>
              </ul>

            </ul>
          </div>

          <span className="font-bold text-2xl hidden lg:inline">Tailwind</span>
          <span className="ml-1 text-2xl hidden lg:inline">CSS</span>
          <Myswap isshow={true}/>
        </div>

        <div className="navbar-center hidden lg:flex gap-10">
          <div className="dropdown dropdown-center">
            <span tabIndex={0} className="text-xl cursor-pointer">
              Featurs
            </span>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Action</a>
              </li>
              <li>
                <a>Another Action</a>
              </li>
              <li>
                <a>Dropdown Submenu</a>
              </li>
              <li>
                <a>404 page</a>
              </li>
            </ul>
          </div>
          <span className="text-xl cursor-pointer">About</span>
          <span className="text-xl cursor-pointer">Blog</span>
          <span className="text-xl cursor-pointer">Contact</span>
        </div>

        <div className="navbar-end lg:flex gap-3">
          <span className="font-bold text-2xl lg:hidden">Tailwind</span>
          <span className="ml-1 text-2xl lg:hidden">CSS</span>
          <button className="btn lg:block hidden">Log in</button>
          <button className="btn btn-neutral lg:block hidden">Sign in</button>
          <Myswap isshow={false}/>
        </div>
      </div>
    </header>
  );
}
