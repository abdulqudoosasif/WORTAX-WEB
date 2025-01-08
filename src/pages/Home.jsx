import React from "react";
import Navbar from "../components/home/header/Navbar";
import LandingPage from "../components/home/LandingPage/LandingPage";
import Marquee from "../components/home/Marquee";
import About from "../components/home/About";
import ParallaxDemo from "../components/home/ParallaxDemo";
import WalletHoverEffect from "../components/home/services/Services";
import Scroller from "../components/home/Scroller";
import GetStarted from "../components/home/get-started/GetStarted";
import Footer from "../components/home/Footer";
import ThreeDmodel from "../components/home/3dLaptop/ThreeDmodel";
import MainLaptopFile from "../components/home/3dLaptop/MainLaptopFile";

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
      <MainLaptopFile/>
      {/* <GetStarted/> */}
      <Footer/>
    </div>
  );
}

export default Home;
