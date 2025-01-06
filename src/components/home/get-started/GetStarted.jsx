import React from 'react'
import Squares from './Squares';
import BlurText from './ BlurText';
function GetStarted() {
  return (
    <div className='h-screen bg-neutral-900 relative'>
    
    <Squares 
      speed={0.5} 
      squareSize={40}
      direction='diagonal' // up, down, left, right, diagonal
      borderColor='#fff'
      hoverFillColor='#fff'
    />
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold  text-[7vw]'>
    <BlurText
  text="Get Started"
  delay={150}
  animateBy="words"
  direction="top"
  className="text-[9vw] font-bold"
/>
    </div>
    </div>
  )
}

export default GetStarted
