import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" text-white ">
      <div className="flex justify-center space-x-4">
        <NavLink exact to="/" className="px-3 py-2 hover:bg-gray-700 rounded">
          Home
        </NavLink>
        <NavLink
          to="/components"
          className="px-3 py-2 hover:bg-gray-700 rounded"
        >
          Components
        </NavLink>
        <NavLink to="/code" className="px-3 py-2 hover:bg-gray-700 rounded">
          Code
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
