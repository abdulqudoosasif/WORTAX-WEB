import React from 'react'
import text_overlay from '../../../assets/img/text-overlay.png'

const ServicesHeader = () => {
  return (
    <div className='flex lg:flex-row md:flex-col   lg:justify-between md:justify-center justify-center lg:items-center gap-3 flex-wrap mb-[4vw]'>
      <h2 className='flex  font-semibold lg:text-[2.8vw] md:text-4xl gap-2 text-4xl'><span >What </span> 
      <span className=' text-[#7B7B7B]'>We Do</span></h2>
      <p className='lg:max-w-[20vw] max-w-[300px] lg:font-light font-normal lg:leading-[1.3vw] lg:text-[1.1vw] md:text-base text-sm lg:text-left md:text-center text-center'>WE PLAN, DESIGN, BUILD AND MARKET HIGH QUALITY PRODUCTS</p>
    </div>
  )
}

export default ServicesHeader
