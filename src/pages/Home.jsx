import { useState, useEffect } from "react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "../components/home/Navbar";
import LandingPage from "../components/home/LandingPage";
import Marquee from "../components/home/Marquee";
import About from "../components/home/About";
import ParallaxDemo from "../components/home/ParallaxDemo";
import WalletHoverEffect from "../components/home/services/Services";
import Scroller from "../components/home/Scroller";
import GetStarted from "../components/home/get-started/GetStarted";
import Footer from "../components/home/Footer";
import "locomotive-scroll/dist/locomotive-scroll.css";
import LoadingFile from "../components/home/Loading-file";

function Home() {
  const [counter, setCounter] = useState(0);
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    // Initialize LocomotiveScroll
    const scrollContainer = document.querySelector("#main-container");
    if (scrollContainer) {
      const scrollInstance = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
      });

      // Clean up LocomotiveScroll on component unmount
      return () => {
        scrollInstance.destroy();
      };
    }
  }, []);

  useEffect(() => {
    // Progress bar counter
    const count = setInterval(() => {
      setCounter((prevCounter) =>
        prevCounter < 100 ? prevCounter + 1 : (clearInterval(count), 100)
      );
    },10);

    // Clear interval on unmount
    return () => clearInterval(count);
  }, []);

  useEffect(() => {
    if (counter === 100) {
      reveal();
    }
  }, [counter]);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("Animation completed");
        setPreloader(false); // Hide preloader after animation
      },
    });

    t1.to(".follow", {
      width: "100%",
      ease: "Expo.easeInOut",
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: "Expo.easeInOut",
        duration: 0.7,
        delay: 0.5,
      })
      .to(".content", { width: "100%", ease: "Expo.easeInOut", duration: 0.7 })
      .to(".title-lines", { display: "block", duration: 0.1 })
      .to(".title-lines", {
        opacity: 1,
        stagger: 0.15,
        ease: "Expo.easeInOut",
        duration: 0.6,
      });
  };

  return (
    <div id="main-container" className="w-screen h-screen relative text-black">
      {/* Preloader */}
      {preloader && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-50">
          <div className="absolute top-0 h-1 bg-gray-50 overflow-hidden follow w-0 z-10">
  <LoadingFile/>

          </div>
          <div
            className="absolute top-50 h-1 bg-white hide"
            style={{ width: `${counter}%` }}
          ></div>
          <p className="absolute text-white text-[130px] font-medium translate-y-[-15px] hide">
            {counter}%
          </p>
        </div>
      )}

      {/* Content */}
      {!preloader && (
        <div className="absolute ">
          <div className="bg-gray-50">
            <Navbar />
            <LandingPage />
            <Marquee />
            <About />
            <WalletHoverEffect />
            <Scroller />
            <ParallaxDemo />
            <GetStarted />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
