import React from 'react'
import Squares from './Squares';
import BlurText from './BlurText';
function GetStarted() {
    return (
        <div className='h-screen z-10 rounded-3xl overflow-hidden  bg-neutral-900 relative top-[20vw]'>
            <Squares
                speed={0.5}
                squareSize={40}
                direction='diagonal'
                borderColor='#fff'
                hoverFillColor='#fff'
            />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center  '>
                <BlurText
                    text="Get Started"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="lg:text-[9vw]  text-8xl text-center  font-bold"
                />
            </div>
        </div>
    )
}

export default GetStarted
