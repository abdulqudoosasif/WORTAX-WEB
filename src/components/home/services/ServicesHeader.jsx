import React from 'react'
import text_overlay from '../../../assets/img/text-overlay.png'

const ServicesHeader = () => {
  return (
    <div className='flex lg:flex-row md:flex-col   lg:justify-between md:justify-start justify-start lg:items-center gap-3 flex-wrap  lg:px-16 md:px-7 px-5'>
      <h2 className='flex flex-col font-semibold lg:text-5xl md:text-4xl text-4xl'><span >Our</span> <img src={text_overlay} className='lg:w-[190px] md:w-[160px] w-40 lg:h-[70px] md:h-14 h-14 lg:ml-8 md:ml-2 ml-2' /><span className='absolute lg:mt-14 md:mt-12 mt-12 lg:ml-10 md:ml-[22px] ml-5  text-[#7B7B7B]'>  services</span></h2>
      <p className='lg:max-w-[400px]  lg:text-base md:text-base text-sm'>Assemble a fully capable design and development team overnight so you can scale fast 🙌</p>
    </div>
  )
}

export default ServicesHeader
