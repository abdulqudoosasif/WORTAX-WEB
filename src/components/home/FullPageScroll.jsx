import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FullPageScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll(".section");
    gsap.defaults({ ease: "power1.out", duration: 1 });

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  return (
    <div ref={containerRef}>
      <div className="section bg-red-500 h-screen flex items-center justify-center">
        <h1 className="text-white text-4xl">Section 1</h1>
      </div>
      <div className="section bg-blue-500 h-screen flex items-center justify-center">
        <h1 className="text-white text-4xl">Section 2</h1>
      </div>
      <div className="section bg-green-500 h-screen flex items-center justify-center">
        <h1 className="text-white text-4xl">Section 3</h1>
      </div>
    </div>
  );
};

export default FullPageScroll;
