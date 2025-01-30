import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "../../assets/img/wortax-black-new.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = () => {
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let previousScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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
        className={`lg:hidden fixed top-14 left-0 w-full h-60 bg-white flex flex-col items-start gap-5 text-lg v px-8 z-40 ${menuOpen ? "block" : "hidden"
          }`}
      >
        {[
          { label: "Home", href: "/" },
          { label: "Work", href: "/work" },
          { label: "About us", href: "/about-us" },
          { label: "Blog", href: "/blogs" },
          { label: "Contact Us", href: "/contact" },
        ].map((item) => (
          <Link key={item.label} to={item.href} className="capitalize text-gray-800 w-full hover:bg-gray-300" onClick={toggleMenu}>
            {item.label}
          </Link>
        ))}
      
      </div>

      {/* Navbar */}
      <div ref={navbarRef} className="fixed z-50 lg:backdrop-blur-md lg:bg-transparent bg-white w-full flex justify-between items-center lg:px-[4vw] px-5 py-2">
        {/* Logo */}
        <Link to="/" className='logo'>
          <img src={logo} alt="Logo" className="cursor-pointer lg:h-[4vw] md:h-10 h-10" />
        </Link>


        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden lg:flex justify-between items-center gap-[2vw]">
  {[
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About us", href: "/about-us" },
    { label: "Blog", href: "/blogs" },
  ].map((item) => (
    <div key={item.label} className="nav-link-container relative overflow-hidden">
      <Link
        to={item.href}
        className="nav-link block text-[1.2vw] font-normal capitalize translate-y-0 transition-transform duration-300"
      >
        {item.label}
      </Link>
      <Link
        to={item.href}
        className="nav-link-duplicate block text-[1.2vw] font-normal capitalize absolute top-full left-0 transition-transform duration-300"
      >
        {item.label}
      </Link>
    </div>
  ))}
      <Link to={'/contact'}
        className="relative w-fit px-5 lg:mb-0 mb-4 lg:py-2 py-0 overflow-hidden border border-zinc-800 rounded-full transition-all before:absolute before:top-0 before:left-0 before:right-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
        <span className="relative text-[1vw] flex items-center gap-2  z-10 tracking-wide font-medium">
        Request Proposal <MdOutlineArrowOutward  className="text-[1.2vw]"/>
        </span>
      </Link>
</div>

      </div>
    </>
  );
};

export default Navbar;
