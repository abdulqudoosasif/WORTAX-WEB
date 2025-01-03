import { useEffect, useRef } from "react";

const useParallax = ({ onProgressChange }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate scroll progress (0 to 1)
        const progress = Math.min(
          Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
          1
        );

        // Call the progress change callback
        if (onProgressChange) {
          onProgressChange(progress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once to initialize

    return () => window.removeEventListener("scroll", handleScroll);
  }, [onProgressChange]);

  return { ref };
};

export default useParallax;
