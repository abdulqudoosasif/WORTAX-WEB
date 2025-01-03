import React from "react";
import useParallax from "./useParallax";
import '../../../index.css';
const Example = () => {
  const parallax = useParallax({
    onProgressChange: (progress) => {
      if (parallax.ref.current) {
        // Update CSS variable for progress
        parallax.ref.current.style.setProperty("--progress", progress.toString());
      }
    },
  });

  return (
  <div className="flex justify-center items-center h-screen"> 
      <h1
      ref={parallax.ref}
      className="text-stroke"
      style={{
        WebkitTextStrokeWidth: `calc(20px * var(--progress))`, // For WebKit browsers
        textStrokeWidth: `calc(20px * var(--progress))`,
      }}
    >
        3D Scroll Effect§   
    </h1>
  </div>
  );
};

export default Example;
