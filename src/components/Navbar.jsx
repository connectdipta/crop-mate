import React, { useState } from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const activeClass =
    "bg-primary text-secondary font-semibold rounded-lg px-3 py-1";

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/coverage"
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Coverage
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/hire"
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Hire
        </NavLink>
      </li>

      {/* <li>
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Pricing
        </NavLink>
      </li>

      <li>
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Be a Rider
        </NavLink>
      </li> */}
    </>
  );
  const {user, logout} = useAuth();
  const handleLogout= () => {
    logout()
    .then()
    .catch(error => console.log(error))

  }

  return (
    <div className="navbar bg-base-100 shadow-sm mb-5 relative rounded-2xl mx-2 mt-2 px-4">
  
      <div className="navbar-start">
  
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {open && (
          <ul className="menu bg-base-100 rounded-box absolute top-16 left-3 shadow w-52 p-2 z-50 lg:hidden">
            {links}
          </ul>
        )}

        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2">{links}</ul>
      </div>

    
      <div className="navbar-end">
        {
          user ? <Link onClick={handleLogout} className="btn btn-primary rounded-2xl text-secondary">LogOut</Link> : <Link to="/login" className="btn btn-primary rounded-2xl text-secondary">LogIn</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
