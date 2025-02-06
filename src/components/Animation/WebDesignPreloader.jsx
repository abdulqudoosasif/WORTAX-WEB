import React, { useEffect } from "react";
import { gsap } from "gsap";

function WebDesign({ onFinish }) {
  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: onFinish, 
    });

    timeline
      .fromTo(
        ".preloader-text",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .to(".preloader-text", { y: -100, opacity: 0, duration: 1, delay: 0.5 });

    return () => timeline.kill();
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
      <h1 className="preloader-text text-center flex items-center justify-center text-[13vw] uppercase poppins font-bold text-neutral-900 tracking-tighter leading-none">
     Website <br /> Design
      </h1>
    </div>
  );
}

export default WebDesign;
