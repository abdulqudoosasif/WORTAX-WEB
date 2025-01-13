import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Navbar from "./components/header/Navbar";

function ScrollWrapper({ children }) {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null); 
  const location = useLocation();

  useEffect(() => {
    if (scrollInstance.current) {
      scrollInstance.current.destroy(); 
    }

    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Cleanup on unmount
    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
        scrollInstance.current = null;
      }
    };
  }, [location]); // Re-run on route change

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </ScrollWrapper>
    </Router>
  );
}

export default App;
