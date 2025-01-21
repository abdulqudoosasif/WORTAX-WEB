import React from 'react'
import { motion } from 'framer-motion';
import img from "../../assets/img/logo1.png";
import HeroContent from '../Global/HeroContent';

function ContactHero() {
  const item =["Contact Us", "for Support", "and Help"]
  return (
    <div className='px-[5vw] bg-gray-50'>
   <HeroContent item={item}/>
    </div>
  )
}

export default ContactHero
