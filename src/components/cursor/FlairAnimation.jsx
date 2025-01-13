import React, { useEffect } from "react";
import { gsap } from "gsap";

const FlairAnimation = ({ hoverText }) => {
  useEffect(() => {
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e) => {
      const flair = document.querySelector(".flair");
      if (flair) {
        gsap.to(flair, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className=" fixed pointer-events-none z-30"
      style={{ pointerEvents: "none" }}
    >
      <span className="text-white text-sm font-semibold bg-black bg-opacity-50 px-2 py-1 rounded">
        {hoverText}
      </span>
    </div>
    
  );
};

export default FlairAnimation;
