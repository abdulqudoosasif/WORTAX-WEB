import React from 'react'
import { motion } from "framer-motion"
import wortax from "../../../assets/img/logo1.png";
import HeroContent from '../../Global/HeroContent';

const HeroSection = () => {
  const item = ["We are", "Wortax it", "solutions"];
  return (
    <div className='absolute z-10 w-full h-screen bg-[#F1F1F1] px-[5vw] lg:py-1 py-4'>
     <HeroContent  item={item}/>
    </div>
  )
}

export default HeroSection
