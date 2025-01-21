import React from 'react'
import text_overlay from '../../../assets/img/text-overlay.png'

const ServicesHeader = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 flex-wrap mb-[4vw]'>
      <h2 className='lg:text-[3vw] text-3xl font-semibold'>What 
      <span className=' text-gray-500'> We Do</span></h2>
      <p className="lg:text-[1vw] text-xs lg:mt-[1.2vw] tracking-wide text-center">WE PLAN, DESIGN, BUILD AND MARKET HIGH QUALITY PRODUCTS</p>
    </div>
  )
}

export default ServicesHeader
