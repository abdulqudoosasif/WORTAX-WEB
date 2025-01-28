import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FooterHeader = () => {
  const navbarRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Speed for typing
  const deletingSpeed = 50; // Speed for deleting

  const messages = [
    "WordPress Developer",
    "Shopify Developer",
    "React.js Developer",
    "Webflow Expert ",
    "Framer Expert",
  ];

  useEffect(() => {
    let typingTimeout;

    const handleTyping = () => {
      const currentMessage = messages[activeIndex];

      if (!isDeleting) {
        // Typing characters
        if (displayText.length < currentMessage.length) {
          setDisplayText((prev) => currentMessage.slice(0, prev.length + 1));
        } else {
          // Pause before deleting
          typingTimeout = setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting characters
        if (displayText.length > 0) {
          setDisplayText((prev) => currentMessage.slice(0, prev.length - 1));
        } else {
          // Move to the next message
          setIsDeleting(false);
          setActiveIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }
      }
    };

    typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, activeIndex, messages]);

  useEffect(() => {
    let previousScrollY = 0;

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < previousScrollY && currentScrollY > window.innerHeight) {
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
      className="w-[60vw]  fixed bg-neutral-100 z-40 rounded-xl mx-[20vw] my-2 py-2 bottom-0 lg:flex hidden justify-between items-center lg:px-12"
    >
      <div className="flex items-center space-x-3">
        <img
          src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="w-[50px] h-[50px] xl:h-[72px] xl:w-[72px] object-cover rounded-full"
        />
        <div className="text-black flex gap-1 justify-center font-semibold">
          <p className="text-[1vw]">Hire a</p>
          <p className="text-[1vw] text-blue-500">{displayText}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-2">
        <button className="bg-black text-[1vw] text-white px-4 py-2 rounded-full font-medium flex items-center space-x-1">
          <span>View Pricing</span> <span>💰</span>
        </button>
        <button 
          onClick={() => {
            window.open("https://cal.com/wortaxgamechanger/30min", "_blank");
          }}
        className="bg-lime-400 text-[1vw] text-black px-4 py-2 rounded-full font-medium flex items-center space-x-1">
          <span>Book a Call</span> <span>📞</span>
        </button>
      </div>
    </div>
  );
};

export default FooterHeader;
