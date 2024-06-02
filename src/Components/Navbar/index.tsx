import React from "react";
import { TiShoppingCart } from "react-icons/ti";

import { NavLink } from "react-router-dom";
import { NavRoute } from "../../Interfaces";

const navRoutes: NavRoute[] = [
  { path: "/", label: "SmartBuy" },
  { path: "/all", label: "All" },
  { path: "/clothes", label: "Clothes" },
  { path: "/electronics", label: "Electronics" },
  { path: "/furnitures", label: "Furnitures" },
  { path: "/others", label: "Others" }
];

const userRoutes: NavRoute[] = [
  { path: "/orders", label: "Orders" },
  { path: "/account", label: "Account" },
  { path: "/signin", label: "Sign in" },
];

export const NavBar: React.FC = () => {
  const activeStyle = "underline";

  return (
    <nav className="w-full flex justify-between items-center fixed top-0 z-10 py-5 px-8 bg-white shadow-md text-sm font-light">
      <ul className="flex items-center gap-3">
        {navRoutes.map((route) => (
          <li key={route.label} className="font-semibold first:font-bold first:text-lg text-sm">
            <NavLink to={route.path} className={({ isActive }) => (isActive ? activeStyle : "")}>
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        <li className="font-bold text-sm text-slate-800">
          fidel@platzi.com
        </li>
        {userRoutes.map((route) => (
          <li key={route.label} className="font-semibold text-sm">
            <NavLink to={route.path} className={({ isActive }) => (isActive ? activeStyle : "")}>
              {route.label}
            </NavLink>
          </li>
        ))}
        <li className="relative">
          <NavLink to="/cart" className={({ isActive }) => (isActive ? activeStyle : "")}>
            <TiShoppingCart className="text-3xl text-slate-800 mr-1" />
            <span className="absolute top-4 right-0 bg-red-500 text-white text- rounded-full px-0.5">
              0
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
