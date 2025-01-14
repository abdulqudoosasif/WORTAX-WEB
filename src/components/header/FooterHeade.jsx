import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
const FooterHeader = () => {
  const navbarRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const messages = [
    "Your Unfair Advantage",
    "Your Unfair Advantage ",
    "Your Unfair Advantage",
    "Your Competitive Edge",
    "Your Unfair Advantage",
    "Your Competitive Edge",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [messages.length]);


  useEffect(() => {
    let previousScrollY = 0;

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY < previousScrollY && 
        currentScrollY > window.innerHeight 
      ) {
        gsap.to(navbarRef.current, { y: "30vh", duration: 5.9 });
      } else {
        gsap.to(navbarRef.current, { y: "0", duration: 0.9 });
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
      className="w-[60vw] fixed bg-neutral-100 z-50 rounded-xl mx-[20vw] my-2 py-2 bottom-0 flex justify-between items-center lg:px-12"
    >
         <div className="flex items-center space-x-3">
        <img
          src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your image URL
          alt="Profile"
          className="w-[50px] h-[50px] object-cover rounded-full"
        />
        <div className="text-black flex gap-1 justify-center h-[2vw] overflow-hidden font-semibold">
         <p className="text-[1vw]"> Giving</p>
           <div
              className="transition-transform  w-fit  duration-100 ease-in-out"
              style={{ transform: `translateY(-${activeIndex * 2}vw)` }}
            >
              {messages.map((message, index) => (
                <p
                  key={index}
                  className="  leading-[.3vw] text-[1vw] text-blue-500  w-fit pt-[0.6vw] "
                  style={{ height: "2vw" }}
                >
                  {message}
                </p>
              ))}
            </div> <p className="text-[1vw]"> their time back</p>
        </div>
      </div>

      {/* Buttons */}
      
      <div className="flex items-center space-x-2">
        <button className="bg-black text-[1vw] text-white px-4 py-2 rounded-full font-medium flex items-center space-x-1">
          <span>View Pricing</span> <span>💰</span>
        </button>
        <button className="bg-lime-400 text-[1vw] text-black px-4 py-2 rounded-full font-medium flex items-center space-x-1">
          <span>Book a Call</span> <span>📞</span>
        </button>
      </div>
    </div>
  );
};

export default FooterHeader;
