import React, { useState } from "react";
import LandingPage from "../components/home/LandingPage/LandingPage";
import Marquee from "../components/home/Marquee";
import About from "../components/home/About";
import ParallaxDemo from "../components/home/ParallaxDemo";
import WalletHoverEffect from "../components/home/services/Services";
import Scroller from "../components/home/Scroller";
import GetStarted from "../components/home/get-started/GetStarted";
import Footer from "../components/home/Footer";
import FooterHeader from "../components/header/FooterHeade";
import Preloader from "../components/Animation/HomePreloader";
import OurServices from "../components/home/services/OurServices";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onFinish={handlePreloaderFinish} />}

      <div className="bg-gray-50 overflow-hidden poppins">
        <LandingPage />
        <Marquee />
        <About />
        {/* <WalletHoverEffect /> */}
        <OurServices />
        <Scroller />
        <ParallaxDemo />
        <GetStarted />
        <Footer />
        {/* <FooterHeader /> */}
      </div>

    </>
  );
}

export default Home;
