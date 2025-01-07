import { div } from 'framer-motion/client';
import React from 'react'
import { BsSpeedometer2 } from 'react-icons/bs';
import { FaRegCompass } from 'react-icons/fa';
import { IoCompassOutline } from 'react-icons/io5';

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='0.3' 
    className='bg-gray-50 rounded-t-3xl  -mt-[15vw] overflow-hidden relative pb-[2vw] z-20'>
     <div className="py-12 ">
      <div className=" mx-auto px-4 sm:px-6">
        <h2 className="lg:text-[3vw] text-3xl text-neutral-900 font-semibold text-center mb-12">
          ABOUT US
        </h2>
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* line one */}
              <div className='flex flex-col items-center '>
                <BsSpeedometer2 className=' mb-2 lg:text-[2vw] text-3xl' />
                <h3 className='lg:text-[1.5vw] text-xl  text-neutral-900 mb-2' >Speed and Precision</h3>
                <p className='text-center lg:w-[18vw] text-gray-700  '>We prioritize quick, quality hires. Our data-driven process blends technology with a human touch, reducing hiring time without compromising excellence.</p>
              </div>
              <div className='flex flex-col  items-center  px-8 lg:border-x-[1px] border-gray-400'>
                <IoCompassOutline className='mb-2 lg:text-[2vw] text-3xl' />
                <h3 className='lg:text-[1.5vw] text-xl mb-2  text-neutral-900' >Talent Scouting Expertise</h3>
                <p className='text-center lg:w-[18vw] text-gray-700' >Our recruiters are talent scouts who uncover high-potential candidates, even those not actively searching, ensuring access to untapped talent pools.</p>
              </div>
              <div className='flex flex-col  items-center '>
                <BsSpeedometer2 className='mb-2 lg:text-[2vw] text-3xl' />
                <h3 className='lg:text-[1.5vw] text-xl mb-2  text-neutral-900' >Talent That Transforms</h3>
                <p className='text-center lg:w-[18vw] text-gray-700' >We find candidates who not only fit the role but also drive growth and innovation within your organization.</p>
              </div>
              {/* line two */}

              <div className='flex flex-col   mt-7 items-center '>
                <BsSpeedometer2 className='mb-2 lg:text-[2vw] text-3xl' />
                <h3 className='lg:text-[1.5vw] text-xl mb-2  text-neutral-900' >Personalized Partnership</h3>
                <p className='text-center lg:w-[18vw] text-gray-700' >We tailor recruitment strategies to your unique needs, immersing ourselves in your company culture to deliver customized talent solutions.</p>
              </div>
              <div className='flex flex-col  mt-7 items-center  px-8 lg:border-x-[1px] border-gray-400'>
                <BsSpeedometer2 className='mb-2 lg:text-[2vw] text-3xl' />
                <h3 className='lg:text-[1.5vw] text-xl mb-2  text-neutral-900' >Industry Expertise</h3>
                <p className='text-center lg:w-[18vw] text-gray-700' >We prioritize quick, quality hires. Our data-driven process blends technology with a human touch, reducing hiring time without compromising excellence.</p>
              </div>
              <div className='flex flex-col  mt-7 items-center '>
                <BsSpeedometer2 className='mb-2 lg:text-[2vw] text-3xl' />
                <h3 className='lg:text-[1.5vw] text-xl mb-2  text-neutral-900' >Speed and Precision</h3>
                <p className='text-center lg:w-[18vw] text-gray-700' >We prioritize quick, quality hires. Our data-driven process blends technology with a human touch, reducing hiring time without compromising excellence.</p>
              </div>

              {/* line three */}

              <div className='flex flex-col   mt-7 items-center '>
                <BsSpeedometer2 className='mb-2 lg:text-[2vw] text-3xl' />
                <h3 className='lg:text-[1.5vw] text-xl mb-2  text-neutral-900' >Speed and Precision</h3>
                <p className='text-center lg:w-[18vw] text-gray-700' >We prioritize quick, quality hires. Our data-driven process blends technology with a human touch, reducing hiring time without compromising excellence.</p>
              </div>
              <div className='flex flex-col  mt-7 items-center  px-8 lg:border-x-[1px] border-gray-400'>
                <BsSpeedometer2 className='mb-2 lg:text-[2vw] text-3xl' />
                <h3 className='lg:text-[1.5vw] text-xl mb-2  text-neutral-900' >Speed and Precision</h3>
                <p className='text-center lg:w-[18vw] text-gray-700' >We prioritize quick, quality hires. Our data-driven process blends technology with a human touch, reducing hiring time without compromising excellence.</p>
              </div>
              <div className='flex flex-col  mt-7 items-center '>
                <BsSpeedometer2 className='mb-2 lg:text-[2vw] text-3xl' />
                <h3 className='lg:text-[1.5vw] text-xl mb-2  text-neutral-900' >Speed and Precision</h3>
                <p className='text-center lg:w-[18vw] text-gray-700' >We prioritize quick, quality hires. Our data-driven process blends technology with a human touch, reducing hiring time without compromising excellence.</p>
              </div>

        </div>
      </div>
    </div>
    </div>
    
  )
}

export default About
