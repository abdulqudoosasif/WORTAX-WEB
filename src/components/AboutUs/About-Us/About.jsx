import React from 'react'
import EyesMovement from './EyesMovement'
import Image from './Image'

const About = () => {
    return (
        <div className='relative z-10 lg:top-[38vw] top-[50vh] w-full px-[5vw] py-5  border-t-2 border-gray-300 bg-[#F1F1F1]'>
            <div className='flex justify-between lg:flex-nowrap flex-wrap lg:gap-0 gap-3'>
                <div className="lg:w-1/2 w-full">
                    <p className='lg:text-[1.2vw] text-xl font-medium tracking-tight leading-none'>About Us:</p>
                </div>
                <div className="lg:w-1/2 w-full  flex lg:flex-nowrap flex-wrap justify-between">
                    <div className="lg:w-1/2 w-full  flex flex-col lg:gap-7 gap-3">
                        <p className='lg:text-[1.2vw] text-sm lg:leading-tight md:leading-6 leading-6 lg:max-w-full max-w-80 tracking-tight lg:px-[6px]'>
                        At Wortax IT Solutions, we are dedicated to delivering innovative technology services that drive business success. Specializing in web development, web design, application development, and AI solutions, we aim to transform your digital presence and streamline operations.
                        </p>
                        <p className='lg:text-[1.2vw] text-sm lg:leading-tight md:leading-6 leading-6 lg:max-w-full max-w-80 tracking-tight lg:px-[6px]'>
                        Our experienced team combines creativity and technical expertise to provide tailored solutions that meet your unique needs, ensuring efficiency, growth, and seamless integration into the digital world.
                        </p>
                    </div>
                    <div className='lg:w-fit w-full lg:mt-0 mt-3'>
                        <button className="relative lg:px-[1.2vw] px-[3vw]  lg:text-[1vw] text-[2.5vw] py-[0.5vw] overflow-hidden border border-gray-700 rounded-full text-[#1e2124] transition-all before:absolute before:top-0 before:left-0 before:right-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                            <span className="relative z-10 tracking-wide font-medium">
                                Our Work
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <EyesMovement />
            <Image />

        </div>
    )
}

export default About
