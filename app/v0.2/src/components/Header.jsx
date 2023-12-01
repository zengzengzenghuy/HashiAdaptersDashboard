import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <div className="bg-[#0c0c0d] shadow-md">
      <div className="container mx-auto h-20 flex flex-row">
        <div className="self-center">
          <p className="text-4xl font-bold text-white font-mono ">
            Hashi Dashboard
          </p>
        </div>
        <div className="flex self-center ml-auto space-x-9">
          <Link
            to="/"
            className="text-xl font-bold  text-[#D8D9DA] font-mono hover:text-blue-600 shadow-inner"
          >
            Home
          </Link>

          <Link
            to="/adapters"
            className="text-xl font-bold text-[#D8D9DA] font-mono hover:text-blue-600 shadow-inner"
          >
            Adapters
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
