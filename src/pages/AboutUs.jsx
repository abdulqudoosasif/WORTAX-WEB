import React from 'react'
import HeroSection from '../components/AboutUs/Landing-Page/HeroSection'
import About from '../components/AboutUs/About-Us/About'
import OurTeam from '../components/AboutUs/Our-Team/OurTeam'
import GetStarted from '../components/home/get-started/GetStarted'
import Footer from '../components/home/Footer'

const AboutUs = () => {
  return (
    <div className='bg-[#004d43] '>
      <HeroSection/>
      <About/>
      <OurTeam/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default AboutUs
