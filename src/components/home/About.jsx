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
                <p className='text-center lg:w-[18vw] text-gray-700  '>Transform your local presence with swift, strategic precision. Our data-driven digital optimization process combines cutting-edge technology with personalized attention, delivering rapid results while maintaining your unique local identity. We fast-track your digital growth without losing the personal touch that makes your business special.</p>
              </div>
              <div className='flex flex-col  items-center  px-8 lg:border-x-[1px] border-gray-400'>
                <IoCompassOutline className='mb-2 lg:text-[2vw] text-3xl' />
                <h3 className='lg:text-[1.5vw] text-xl mb-2  text-neutral-900' >Digital Scouting Expertise</h3>
                <p className='text-center lg:w-[18vw] text-gray-700' >We're constantly hunting for untapped digital opportunities that most local businesses miss. Our experts identify high-impact digital channels, uncover hidden market opportunities, and find innovative ways to connect with your ideal customers. We turn digital complexity into local business success.</p>
              </div>
              <div className='flex flex-col  items-center '>
                <BsSpeedometer2 className='mb-2 lg:text-[2vw] text-3xl' />
                <h3 className='lg:text-[1.5vw] text-xl mb-2  text-neutral-900' >Solutions That Transform</h3>
                <p className='text-center lg:w-[18vw] text-gray-700' >We don't just build digital presence – we create digital excellence. Our strategies help local businesses evolve from neighborhood favorites to digital champions. Whether it's optimizing your Google Business Profile, crafting engaging social media presence, or maximizing local SEO, we transform how customers discover and interact with your business.</p>
              </div>
              {/* line two */}

              <div className='flex flex-col   mt-7 items-center '>
                <BsSpeedometer2 className='mb-2 lg:text-[2vw] text-3xl' />
                <h3 className='lg:text-[1.5vw] text-xl mb-2  text-neutral-900' >Personalized Partnership</h3>
                <p className='text-center lg:w-[18vw] text-gray-700' >Every local business has its own story, and your digital strategy should tell it perfectly. We immerse ourselves in understanding your business, customers, and community. From customized social media campaigns to targeted local advertising, we create digital solutions that preserve your local charm while expanding your reach.</p>
              </div>
              <div className='flex flex-col  mt-7 items-center  px-8 lg:border-x-[1px] border-gray-400'>
                <BsSpeedometer2 className='mb-2 lg:text-[2vw] text-3xl' />
                <h3 className='lg:text-[1.5vw] text-xl mb-2  text-neutral-900' >Industry Expertise</h3>
                <p className='text-center lg:w-[18vw] text-gray-700' >Where local insight meets digital mastery. Our team brings deep understanding of both digital technologies and local business dynamics. We know what works for local businesses because we've helped hundreds grow from local favorites to digital leaders. Our strategies blend proven digital techniques with local business wisdom.</p>
              </div>
             
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default About
