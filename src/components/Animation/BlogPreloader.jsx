import React, { useEffect } from "react";
import { gsap } from "gsap";

function BlogPreloader({ onFinish }) {
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
      <h1 className="preloader-text text-[15vw] uppercase poppins font-bold text-neutral-900">
        Blog
      </h1>
    </div>
  );
}

export default BlogPreloader;
