import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const links = (
    <div className="space-x-3">
      <NavLink className="font-semibold" to="/">
        Home
      </NavLink>
      <NavLink className="font-semibold" to="/services">
        Service
      </NavLink>
      <NavLink className="font-semibold" to="/profile">
        My Profile
      </NavLink>
    </div>
  );

  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        alert("logout success");
      })
      .catch((err) => {
        const errorMessage = err.message;
        alert(errorMessage);
      });
  };
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto py-5">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            WarmPaw
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleLogOut}
              to="/"
              className="btn text-xl bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/login"
              className="btn text-xl bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
