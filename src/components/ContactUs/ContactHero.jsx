import React from 'react'
import HeroContent from '../Global/HeroContent';

function ContactHero() {
  const item =["Contact Us", "for Support", "and Help"]
  return (
    <div className='px-[5vw] relative z-10 pb-[8vw] bg-gray-50'>
   <HeroContent item={item}/>
    </div>
  )
}

export default ContactHero
