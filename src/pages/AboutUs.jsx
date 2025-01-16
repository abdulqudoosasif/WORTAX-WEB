import React, { useState } from 'react'
import HeroSection from '../components/AboutUs/Landing-Page/HeroSection'
import About from '../components/AboutUs/About-Us/About'
import OurTeam from '../components/AboutUs/Our-Team/OurTeam'
import Footer from '../components/home/Footer'
import Preloader from "../components/Animation/AboutPraloader";
const AboutUs = () => {
   const [isLoading, setIsLoading] = useState(true);
  
    const handlePreloaderFinish = () => {
      setIsLoading(false);
    };
  return (
    <>
    {isLoading && <Preloader onFinish={handlePreloaderFinish} />}
    <div className='bg-[#f1f1f1] poppins'>
      <HeroSection />
      <About />
      <OurTeam />
      <Footer />
    </div>
    </>
  )
}

export default AboutUs
