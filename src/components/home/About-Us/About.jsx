import React from 'react'
import icon1 from '../../../assets/img/About/about-1.svg'
import icon2 from '../../../assets/img/About/about-2.svg'
import icon3 from '../../../assets/img/About/about-3.svg'
import icon4 from '../../../assets/img/About/about-4.svg'
import icon5 from '../../../assets/img/About/about-5.svg'
import Details from './Details'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='0.35'
      className='bg-gray-50 rounded-t-3xl xl:-top-[14vw] lg:-top-[14vw] md:-top-28 -top-24  overflow-hidden relative px-[5vw]  z-20 '>
      <div className="py-[4vw]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="lg:text-[3.6vw] text-3xl font-semibold">
            ABOUT <span className='text-gray-500'>US</span>
          </h2>
          <p className="lg:text-[1vw] text-xs xl:mt-[2vw] lg:mt-[1vw] tracking-wide">OUR COMPANY IN THE SIMPLEST TERMS</p>
          <div className='w-full flex flex-wrap items-center justify-center lg:gap-[1.8vw] gap-5 lg:py-[3vw] py-10'>

            <Details
              icon={icon1}
              title='Accelerate Your Growth'
              description="We combine advanced technology and personalized service to enhance your local presence while maintaining your brand's unique identity."
            />
            <Details
              icon={icon2}
              title='Uncover Hidden Opportunities'
              description="By identifying untapped digital channels, we connect you with your ideal customers and drive measurable results."
            />
            <Details
              icon={icon3}
              title='Become Online Leaders'
              description="Through strategic Google optimization, engaging social media, and powerful local SEO, we elevate your brand and amplify its reach."
            />
            <Details
              icon={icon4}
              title='Tailored Business Strategies'
              description="Every local business is unique. We craft customized social media campaigns and local ads to help your brand reach its fullest potential."
            />
            <Details
              icon={icon5}
              title='Data-Driven Digital Strategies'
              description=" By merging local market knowledge with expert digital tactics, we create strategies that are proven to drive success in your industry."
            />

          </div>


        </div>
      </div>
    </div>

  )
}

export default About
