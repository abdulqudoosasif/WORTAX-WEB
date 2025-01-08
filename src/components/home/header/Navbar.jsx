import React from "react";
import logo from '../../../assets/img/logo.png';
import Magnet from "./Magnet";

const Navbar = () => {
  return (
    <div className="w-[90vw] fixed bg-neutral-900 z-40 rounded-xl mx-[5vw] my-2 py-2 px-12 flex justify-between items-center">
      {/* Logo Hover Effect */}
      <Magnet padding={50} disabled={false} magnetStrength={4}>
        <img
          src={logo}
          alt="Logo"
          className="cursor-pointer"
          style={{
            width: "100px",
            height: "auto",
          }}
        />
      </Magnet>

      {/* Navigation Links */}
      <div className="flex justify-between items-center gap-4">
      <a
          href="/"
          className="font-semibold text-xs text-white p-2 rounded-lg hover:bg-[#c9ff00] hover:text-black"
        >
          Solution
        </a>
        <span className="w-1 h-1 rounded-full p-[3px] bg-[#c9ff00]"></span>
        <a
          href="/"
          className="font-semibold text-xs text-white p-2 rounded-lg hover:bg-[#c9ff00] hover:text-black"
        >
          Work
        </a>
        <span className="w-1 h-1 rounded-full p-[3px] bg-[#c9ff00]"></span>
        <a
          href="/"
          className="font-semibold text-xs text-white p-2 rounded-lg hover:bg-[#c9ff00] hover:text-black"
        >
          Pricing
        </a>
        <span className="w-1 h-1 rounded-full p-[3px] bg-[#c9ff00]"></span>
        <a
          href="/"
          className="font-semibold text-xs text-white p-2 rounded-lg hover:bg-[#c9ff00] hover:text-black"
        >
          Blog
        </a>
      </div>

      {/* Buttons */}
      <div className="flex gap-5 justify-center items-center text-white text-xs font-semibold">
        <Magnet padding={50} disabled={false} magnetStrength={4}>
          <button className="relative py-5 px-7 overflow-visible shadow-md cursor-pointer">
            <span>Book a call</span>
          </button>
        </Magnet>
        <Magnet padding={50} disabled={false} magnetStrength={4}>
          <button className="py-3 px-7 border-2 border-gray-500 rounded-xl">
            Sign up
          </button>
        </Magnet>
      </div>
    </div>
  );
};

export default Navbar;
