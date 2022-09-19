import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="d-flex flex-row-reverse bd-highlight navbar navbar-light bg-light ">
        
        <nav className="navbar navbar-light bg-light ">
          <NavLink
            to="/dashboard"
            className="btn btn-outline-success mr-4 p-2   "
            type="button"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/bookmark"
            className="btn btn-outline-success mr-4 p-2   "
            type="button"
          >
            Bookmark's
          </NavLink>

          <NavLink to="/login"> 
          <button className="btn btn-outline-success p-2 " type="button">
            logout
          </button>
          </NavLink>

        </nav>
        <div><h1 className="text-success" >Hackers Top News</h1></div>
      </div>
    </>
  );
};

export default Header;
