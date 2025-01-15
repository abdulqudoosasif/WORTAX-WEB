import React from 'react'
import text_overlay from '../../../assets/img/text-overlay.png'

const ServicesHeader = () => {
  return (
    <div className='flex lg:flex-row md:flex-col   lg:justify-between md:justify-start justify-start lg:items-center gap-3 flex-wrap mb-[4vw] lg:px-16 md:px-7 px-5'>
      <h2 className='flex  font-semibold lg:text-5xl md:text-4xl gap-1 text-4xl'><span >What </span> 
      <span className=' text-[#7B7B7B]'>  We Do</span></h2>
      <p className='lg:max-w-[400px]  lg:text-base md:text-base text-sm'>Assemble a fully capable design and development team overnight so you can scale fast 🙌</p>
    </div>
  )
}

export default ServicesHeader
