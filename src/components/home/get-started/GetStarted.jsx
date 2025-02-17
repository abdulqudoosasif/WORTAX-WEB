import React from 'react'
import Squares from './Squares';
import BlurText from './ BlurText';
function GetStarted() {
  return (
    <div className='h-screen z-10 rounded-3xl overflow-hidden  bg-neutral-900 relative '>
    
    <Squares 
      speed={0.5} 
      squareSize={40}
      direction='diagonal' 
      borderColor='#fff'
      hoverFillColor='#fff'
    />
    <div className='absolute top-1/2 text-nowrap left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white '>
    <BlurText
  text="Get Started"
  delay={150}
  animateBy="words"
  direction="top"
  className="lg:text-[8vw]  text-7xl text-center  font-bold"></BlurText>
    </div>
    </div>
  )
}

export default GetStarted
