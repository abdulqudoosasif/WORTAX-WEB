import React, { useState } from "react";
import Logp from "./../../assets/img/Logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // For hamburger and close icons

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="px-4 md:px-16 h-[8vh] w-full flex items-center justify-between fixed bg-white shadow-md z-50">
      {/* Logo */}
      <div className="logo w-[100px] md:w-[130px]">
        <img src={Logp} alt="Logo" className="" />
      </div>

      {/* Links for larger screens */}
      <div className="hidden md:flex items-center gap-10 text-md font-medium">
        <a
          href=""
          className="relative hover:no-underline group"
        >
          Services
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a
          href=""
          className="relative hover:no-underline group"
        >
          Our Work
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a
          href=""
          className="relative hover:no-underline group"
        >
          About Us
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a
          href=""
          className="relative hover:no-underline group"
        >
          Insights
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a
          href=""
          className="relative hover:no-underline group ml-32"
        >
          Contact Us
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
      </div>

      {/* Hamburger Icon for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-20 mt-[-5px] left-0 h-full w-48 bg-white shadow-lg z-40 p-6 transition-transform duration-500 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4 text-lg font-medium">
          <li>
            <a
              href=""
              className="relative hover:no-underline group"
            >
              Services
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="relative hover:no-underline group"
            >
              Our Work
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="relative hover:no-underline group"
            >
              About Us
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="relative hover:no-underline group"
            >
              Insights
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="relative hover:no-underline group"
            >
              Contact Us
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
