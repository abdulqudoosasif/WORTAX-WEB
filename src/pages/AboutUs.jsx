import React from 'react'
import HeroSection from '../components/AboutUs/Landing-Page/HeroSection'
import About from '../components/AboutUs/About-Us/About'
import OurTeam from '../components/AboutUs/Our-Team/OurTeam'
import Footer from '../components/home/Footer'
import GetStarted from '../components/AboutUs/Get-Started/GetStarted'

const AboutUs = () => {
  return (
    <div className='bg-[#f1f1f1]'>
      <HeroSection />
      <About />
      <OurTeam />
      {/* <GetStarted /> */}
      <Footer />
    </div>
  )
}

export default AboutUs
