import React from 'react'
import HeroContent from '../Global/HeroContent';

function BlogHeroSec() {
    const item = ["We are", "Wortax it", "solutions"];
  return (
    <div className=' w-full h-[80vh] border-b border-black relative z-10 bg-[#F1F1F1] px-[5vw] lg:py-1 py-4'>
     <HeroContent  item={item}/>
    </div>
  )
}

export default BlogHeroSec
