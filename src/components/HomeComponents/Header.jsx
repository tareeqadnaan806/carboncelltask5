import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center font-semibold py-2">
      <div>
        <h1 className="text-2xl sm:text-lg">
          Hello, <span className="text-lime-300">Brooklyn Simmons 👋 </span>
        </h1>
        <p className="text-xl sm:text-sm">
          Welcome to <span className="text-green-400">Spot trading!</span>
        </p>
      </div>
      <div>
        <Link to="/trade">
          <button className="px-4 py-2 rounded bg-green-600">
            Start Trading
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
