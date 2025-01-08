import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../../../assets/img/Logo.png";
import Magnet from "./Magnet";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    // GSAP Animation to hide Navbar on scroll
    let previousScrollY = 0;

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > previousScrollY && currentScrollY > window.innerHeight) {
        // Scroll Down: Hide Navbar
        gsap.to(navbarRef.current, { y: "-30vh", duration: 0.9, });
      } else {
        // Scroll Up: Show Navbar
        gsap.to(navbarRef.current, { y: "0", duration: 0.9, });
      }

      previousScrollY = currentScrollY;
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className="w-[90vw] fixed bg-neutral-900 z-50 rounded-xl mx-[5vw] my-2 py-2 px-6 flex justify-between items-center lg:px-12"
    >
      {/* Logo Hover Effect */}
      <Magnet padding={50} disabled={false} magnetStrength={4}>
        <img
          src={logo}
          alt="Logo"
          className="cursor-pointer"
          style={{
            width: "80px",
            height: "auto",
          }}
        />
      </Magnet>

      {/* Navigation Links */}
      <div className="hidden lg:flex justify-between items-center gap-4">
        {["Solution", "Work", "Pricing", "Blog"].map((item, index) => (
          <React.Fragment key={item}>
            <a
              href="/"
              className="font-semibold text-xs text-white p-2 rounded-lg hover:bg-[#c9ff00] hover:text-black"
            >
              {item}
            </a>
            {index !== 3 && (
              <span className="w-1 h-1 rounded-full p-[3px] bg-[#c9ff00]"></span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 lg:gap-5 justify-center items-center text-white text-xs font-semibold">
        <Magnet padding={50} disabled={false} magnetStrength={4}>
          <button className="relative py-3 px-5 lg:py-5 lg:px-7 overflow-visible shadow-md cursor-pointer">
            <span>Book a call</span>
          </button>
        </Magnet>
        <Magnet padding={50} disabled={false} magnetStrength={4}>
          <button className="py-2 px-5 lg:py-3 lg:px-7 border-2 border-gray-500 rounded-xl">
            Sign up
          </button>
        </Magnet>
      </div>
    </div>
  );
};

export default Navbar;
