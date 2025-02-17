import React, { useState } from "react";
import LandingPage from "../components/home/LandingPage/LandingPage";
import Marquee from "../components/home/Marquee";
import About from "../components/home/About-Us/About";
import ParallaxDemo from "../components/home/parallax/ParallaxDemo";
import Scroller from "../components/home/ScrollerPage/Scroller";
import GetStarted from "../components/home/get-started/GetStarted";
import Footer from "../components/home/Footer";
import FooterHeader from "../components/header/FooterHeade";
import Preloader from "../components/Animation/HomePreloader";


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
        <About />
        <Scroller />
        <ParallaxDemo />
        <GetStarted />
        <Footer />
        <FooterHeader />
      </div>

    </>
  );
}

export default Home;
