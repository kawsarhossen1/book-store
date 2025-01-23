import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const Links = (
    <>
      <li className="hover:border hover:border-[#23BE0A] hover:text-[#23BE0A]  rounded-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:border hover:border-[#23BE0A] hover:text-[#23BE0A]  rounded-lg">
        <NavLink to="/listedBooks">Listed Books</NavLink>
      </li>
      <li className="hover:border hover:border-[#23BE0A] hover:text-[#23BE0A]  rounded-lg">
        <a>Pages to Read</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="font-bold text-2xl md:text-3xl ">Book Store</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal bg-none gap-6 px-1  font-semibold text-[18px] text-[#131313CC] ">
          {Links}
        </ul>
      </div>
      <div className="navbar-end gap-4 ">
        <a className="btn hover:bg-[#23BE0A] font-semibold text-[18px] text-white bg-[#59C6D2] px-[28px] w-[116px]">Sign In</a>
        <a className="btn  font-semibold text-[18px] w-[116px] text-white hover:bg-[#23BE0A] bg-[#59C6D2]">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
