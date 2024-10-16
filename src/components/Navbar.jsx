import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../components/data/img/logo.png"
const Navbar = () => {
  return (
    <>
    
    <nav className=" text-white ">
      <div className="flex justify-center space-x-4">
      {/* <img  alt="logo" className=""></img> */}
        <NavLink exact to="/" className="px-3 py-2 hover:bg-gray-700 rounded">
          Home
        </NavLink>
       
      </div>
    </nav>
    </>
  );
};

export default Navbar;
