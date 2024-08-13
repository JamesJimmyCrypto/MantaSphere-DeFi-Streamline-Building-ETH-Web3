import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold text-xl">
          MantaSphere
        </Link>
        <div>
          <Link to="/profile" className="text-white px-4">
            Profile
          </Link>
          <Link to="/create-content" className="text-white px-4">
            Create Content
          </Link>
          <Link to="/marketplace" className="text-white px-4">
            Marketplace
          </Link>
          <Link to="/governance" className="text-white px-4">
            Governance
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
