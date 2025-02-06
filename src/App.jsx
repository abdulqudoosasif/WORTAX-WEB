import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Navbar from "./components/header/Navbar";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import WebDev from "./components/home/services/Pages/Webdev/WebDev";
import AppDev from "./components/home/services/Pages/Appdev/AppDev";
import WebDesign from "./components/home/services/Pages/Webdesign/WebDesign";
import AiSolutions from "./components/home/services/Pages/AiSolution/AiSolutions";

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

    // Reset scroll position to top on route change
    scrollInstance.current.scrollTo(0, { duration: 0, disableLerp: true });

    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
        scrollInstance.current = null;
      }
    };
  }, [location]); 

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
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/web-development" element={<WebDev />} />
          <Route path="/app-development" element={<AppDev />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/ai-solutions" element={<AiSolutions />} />
        </Routes>
      </ScrollWrapper>
    </Router>
  );
}

export default App;
