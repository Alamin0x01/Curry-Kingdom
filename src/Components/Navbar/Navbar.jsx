import React, { useContext } from "react";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, handleSignout } = useContext(AuthContext);
  const handleLogout = () => {
    handleSignout();
  };


  return (
    <div>
      <div className="navbar text-black shadow">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/"  >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog"  >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="#"  >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <h2 className="md:text-3xl text-lg font-bold text-primary md:ml-10">
              Flavour Fusion
            </h2>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">
            <li className="">
              <NavLink to="/"  >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog"  >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact"  >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className=" md:mr-10 mr-3 ml-auto">
          <>
            {user ? (
              <>
                {user.photoURL && (
                  <img title={user.displayName}
                    className="h-12 rounded-full border-2 border-primary"
                    src={user?.photoURL}
                    alt=""
                  />
                )}
                <button onClick={handleLogout} className="ml-5 btn btn-primary">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
