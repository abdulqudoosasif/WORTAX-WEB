import React from 'react'
import { BsSpeedometer2 } from 'react-icons/bs';
import { IoCompassOutline } from 'react-icons/io5';

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='0.35'
      className='bg-gray-50 rounded-t-3xl xl:-top-[20vw] lg:-top-[10vw] md:-top-28 -top-24  overflow-hidden relative px-[5vw]  z-20 '>
      <div className="py-[4vw]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="lg:text-[3.6vw] text-3xl font-semibold">
            ABOUT <span className='text-gray-500'>US</span>
          </h2>
          <p className="lg:text-[1vw] text-xs xl:mt-[2vw] lg:mt-[1vw] tracking-wide">OUR COMPANY IN THE SIMPLEST TERMS</p>
          {/* <hr class="border-t-[0.15vw] border-black w-[7vw] mt-[1vw]" /> */}
          <div className='w-full flex flex-wrap items-center justify-center lg:gap-[1.8vw] gap-5 lg:py-[3vw] py-10'>
            <div className='lg:w-[calc(33%-3vw)] md:w-[calc(50%-3vw)] w-[calc(100%-3vw)] flex flex-col items-center  lg:gap-[1.8vw] gap-5 lg:px-[1.9vw] px-3 lg:pt-[3.5vw] pt-10 lg:pb-[3.5vw] pb-12 border rounded-lg lg:hover:scale-105 lg:hover:shadow-2xl shadow-slate-400 duration-300' >
              <img className='lg:w-[3.5vw] w-12' src="https://prium.github.io/reign-IV/v5.0.0/assets/img/line-icons/icons/fountain-pen.svg" alt="Content Not Found" />
              <h5 className='lg:text-[1.25vw] md:text-xl text-base tracking-[0.08vw]'>Speed and Precision</h5>
              <p className="lg:text-[1.03vw]  md:text-sm text-xs lg:leading-[1.5vw]  text-[#5f656c] text-center lg:px-[1.5vw] px-6">
              Enhance your local presence with our data-driven digital solutions. We blend advanced technology with personalized service to ensure rapid growth while preserving your unique identity.
              </p>
            </div>
            <div className='lg:w-[calc(33%-3vw)] md:w-[calc(50%-3vw)] w-[calc(100%-3vw)] flex flex-col items-center  lg:gap-[1.8vw] gap-5 lg:px-[1.9vw] px-3 lg:pt-[3.5vw] pt-10 lg:pb-[3.5vw] pb-12 border rounded-lg lg:hover:scale-105 lg:hover:shadow-2xl shadow-slate-400 duration-300' >
              <img className='lg:w-[3.5vw] w-12' src="https://prium.github.io/reign-IV/v5.0.0/assets/img/line-icons/icons/export.svg" alt="Content Not Found" />
              <h5 className='lg:text-[1.25vw] md:text-xl text-base tracking-[0.08vw]'>Digital Scouting Expertise</h5>
              <p className="lg:text-[1.03vw]  md:text-sm text-xs lg:leading-[1.5vw]  text-[#5f656c] text-center lg:px-[1.5vw] px-6">
              We actively identify overlooked opportunities for local businesses. <br /> By leveraging high-impact channels, we connect with your ideal customers and drive measurable success.
              </p>
            </div>
            <div className='lg:w-[calc(33%-3vw)] md:w-[calc(50%-3vw)] w-[calc(100%-3vw)] flex flex-col items-center  lg:gap-[1.8vw] gap-5 lg:px-[1.9vw] px-3 lg:pt-[3.5vw] pt-10 lg:pb-[3.5vw] pb-12 border rounded-lg lg:hover:scale-105 lg:hover:shadow-2xl shadow-slate-400 duration-300' >
              <img className='lg:w-[3.5vw] w-12' src="https://prium.github.io/reign-IV/v5.0.0/assets/img/line-icons/icons/light-bulb.svg" alt="Content Not Found" />
              <h5 className='lg:text-[1.25vw] md:text-xl text-base tracking-[0.08vw]'>Solutions That Transform</h5>
              <p className="lg:text-[1.03vw]  md:text-sm text-xs lg:leading-[1.5vw]  text-[#5f656c] text-center lg:px-[1.5vw] px-6">
              We craft digital excellence, transforming local businesses into online leaders. Through Google optimization, engaging social media, and impactful local SEO, we elevate your brand.
              </p>
            </div>
            <div className='lg:w-[calc(33%-3vw)] md:w-[calc(50%-3vw)] w-[calc(100%-3vw)] flex flex-col items-center  lg:gap-[1.8vw] gap-5 lg:px-[1.9vw] px-3 lg:pt-[3.5vw] pt-10 lg:pb-[3.5vw] pb-12 border rounded-lg lg:hover:scale-105 lg:hover:shadow-2xl shadow-slate-400 duration-300' >
              <img className='lg:w-[3.5vw] w-12' src="https://prium.github.io/reign-IV/v5.0.0/assets/img/line-icons/icons/wifi.svg" alt="Content Not Found" />
              <h5 className='lg:text-[1.25vw] md:text-xl text-base tracking-[0.08vw]'>Personalized Partnership</h5>
              <p className="lg:text-[1.03vw]  md:text-sm text-xs lg:leading-[1.5vw]  text-[#5f656c] text-center lg:px-[1.5vw] px-6">
              Every local business has a unique story to tell. Through tailored social media and local ads, we expand your reach while maintaining your authentic charm.
              </p>
            </div>
            <div className='lg:w-[calc(33%-3vw)] md:w-[calc(50%-3vw)] w-[calc(100%-3vw)] flex flex-col items-center  lg:gap-[1.8vw] gap-5 lg:px-[1.9vw] px-3 lg:pt-[3.5vw] pt-10 lg:pb-[3.5vw] pb-12 border rounded-lg lg:hover:scale-105 lg:hover:shadow-2xl shadow-slate-400 duration-300' >
              <img className='lg:w-[3.5vw] w-12' src="https://prium.github.io/reign-IV/v5.0.0/assets/img/line-icons/icons/pie-chart.svg" alt="Content Not Found" />
              <h5 className='lg:text-[1.25vw] md:text-xl text-base tracking-[0.08vw]'>Industry Expertise</h5>
              <p className="lg:text-[1.03vw] md:text-sm text-xs lg:leading-[1.5vw]  text-[#5f656c] text-center lg:px-[1.5vw] px-6">
              Where local insight merges with digital expertise. We combine proven strategies with business knowledge, helping favorites grow into leading industry players.
              </p>
            </div>

          </div>


        </div>
      </div>
    </div>

  )
}

export default About
