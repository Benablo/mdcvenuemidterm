import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import '../css/Navbar.css';

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/venue",
      name: "venue",
    },
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="d-flex flex-row align-items-center">
        </div>
        
        {menuItem.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              key={index}
              className="text-white"
              activeclassname="active"
            >
            </NavLink>
          );
        })}
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
