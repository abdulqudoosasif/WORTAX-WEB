import React, { useState } from "react";
import LandingPage from "../components/home/LandingPage/LandingPage";
import Marquee from "../components/home/Marquee";
import About from "../components/home/About-Us/About";
import ParallaxDemo from "../components/home/parallax/ParallaxDemo";
import Scroller from "../components/home/Scroller";
import GetStarted from "../components/home/get-started/GetStarted";
import Footer from "../components/home/Footer";
import FooterHeader from "../components/header/FooterHeade";
import Preloader from "../components/Animation/HomePreloader";
import OurServices from "../components/home/services/OurServices";
import LapAnimation from "../components/3D-Model/LapAnimation";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onFinish={handlePreloaderFinish} />}

      <div className=" poppins">
        <LandingPage />
        <Marquee />
        {/* <OurServices /> */}
        <About />
        {/* <WalletHoverEffect /> */}
        <Scroller />
        <ParallaxDemo />
        {/* <GetStarted /> */}
        <LapAnimation/>
        <Footer />
        <FooterHeader />
      </div>

    </>
  );
}

export default Home;
