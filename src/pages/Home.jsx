import React from "react";
import Navbar from "../components/home/Navbar";
import LandingPage from "../components/home/LandingPage";
import Marquee from "../components/home/Marquee";
import About from "../components/home/About";
import ParallaxDemo from "../components/home/ParallaxDemo";
import WalletHoverEffect from "../components/home/services/Services";
import Example from "../components/home/3d-scroll/Example";

function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <WalletHoverEffect />
      <ParallaxDemo />
      <Example/>
    </div>
  );
}

export default Home;
