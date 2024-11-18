import React from "react";

const Navbar = () => {
  return (
    <div >
      <ul className="flex gap-6 justify-center">
        <li>
          <a
            href="#donate"
            className="text-white text-xl font-semibold hover:text-green-200 transition-colors duration-300"
          >
            Donate
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-white text-xl font-semibold hover:text-green-200 transition-colors duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#tnx"
            className="text-white text-xl font-semibold hover:text-green-200 transition-colors duration-300"
          >
            Tnx
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
