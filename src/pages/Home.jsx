import React from "react";
import Navbar from "../components/home/Navbar";
import LandingPage from "../components/home/LandingPage/LandingPage";
import Marquee from "../components/home/Marquee";
import About from "../components/home/About";
import ParallaxDemo from "../components/home/ParallaxDemo";
import WalletHoverEffect from "../components/home/services/Services";
import Example from "../components/home/3d-scroll/Example";
import Scroller from "../components/home/Scroller";
import GetStarted from "../components/home/get-started/GetStarted";
import Footer from "../components/home/Footer";

function Home() {
  return (
    <div className="bg-gray-50 ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <WalletHoverEffect />
      <Scroller/>
      <ParallaxDemo />
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default Home;
