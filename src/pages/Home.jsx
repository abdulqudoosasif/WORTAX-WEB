import React from "react";
import Navbar from "../components/home/Navbar";
import LandingPage from "../components/home/LandingPage";
import Marquee from "../components/home/Marquee";
import About from "../components/home/About";
import ParallaxDemo from "../components/home/ParallaxDemo";
import WalletHoverEffect from "../components/home/services/Services";
import Threejs from "../components/home/Threejs";

function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <WalletHoverEffect />
      <ParallaxDemo />
      <Threejs />
    </div>
  );
}

export default Home;
