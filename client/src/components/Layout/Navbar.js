// src/components/Layout/Navbar.js

import React, { useContext } from "react";
import { AiOutlineForm, AiOutlineHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Web3Context } from "../../context/Web3Context";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { connect, disconnect, account } = useContext(Web3Context);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <NavLink to="/" className="hover:text-gray-400">
            SocialFiApp
          </NavLink>
        </div>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="bg-gray-900 text-white"
          >
            <AiOutlineHome className="inline-block mr-1" /> Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="bg-gray-900 text-white"
          >
            <MdDashboard className="inline-block mr-1" /> Dashboard
          </NavLink>
          <NavLink
            to="/create"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="bg-gray-900 text-white"
          >
            <AiOutlineForm className="inline-block mr-1" /> Create
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          {account ? (
            <button
              onClick={disconnect}
              className="text-white hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Disconnect
            </button>
          ) : (
            <button
              onClick={connect}
              className="text-white hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Connect Wallet
            </button>
          )}
          {user ? (
            <div className="relative">
              <button className="text-white hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                <FaUserCircle className="inline-block mr-1" />
                {user.username}
              </button>
              <button
                onClick={logout}
                className="text-white hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium absolute right-0 top-full mt-2"
              >
                <IoMdLogOut className="inline-block mr-1" /> Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
            >
              <FaUserCircle className="inline-block mr-1" /> Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
