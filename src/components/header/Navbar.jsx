import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "../../assets/img/wortax-black.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let previousScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close the mobile menu on scroll
      if (menuOpen) {
        setMenuOpen(false);
      }

      if (currentScrollY > previousScrollY && currentScrollY > window.innerHeight) {
        gsap.to(navbarRef.current, { y: "-30vh", duration: 0.9 });
      } else {
        gsap.to(navbarRef.current, { y: "0", duration: 0.9 });
      }
      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: "-100%", opacity: 0, display: "flex", flexDirection: "column" },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [menuOpen]);



  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Mobile Navigation Menu Behind Navbar */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-14 left-0 w-full h-60 bg-white flex flex-col items-start gap-5 text-lg font-medium px-8 z-40 ${menuOpen ? "block" : "hidden"
          }`}
      >
        {[
          { label: "Home", href: "/" },
          { label: "Work", href: "/work" },
          { label: "About us", href: "/about-us" },
          { label: "Blog", href: "#" },
          { label: "Contact Us", href: "#" },
        ].map((item) => (
          <Link key={item.label} to={item.href} className="capitalize text-gray-800" onClick={toggleMenu}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Navbar */}
      <div ref={navbarRef} className="fixed z-50 lg:backdrop-blur-md lg:bg-transparent bg-white w-full flex justify-between items-center lg:px-[4vw] px-5 py-2">
        {/* Logo */}
        <div className='logo'>
          <img src={logo} alt="Logo" className="cursor-pointer lg:h-[4vw] md:h-10 h-10" />
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden lg:flex justify-between items-center gap-[2vw] ">
          {[
            { label: "Home", href: "/" },
            { label: "Work", href: "/work" },
            { label: "About us", href: "/about-us" },
            { label: "Blog", href: "#" },
            { label: "Contact Us", href: "#" },
          ].map((item) => (
            <Link key={item.label} to={item.href} className="text-[1.2vw] font-medium capitalize nav-link">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
