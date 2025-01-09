import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {

  return (
    <div data-scroll data-scroll-section  className='w-full py-12 lg:py-10 pb-28 md:mb-[40px] lg:mb-0 rounded-t-3xl bg-[#004D43] lg:mt-16 mt-12 relative z-20'>
      <div className=' border-y-[1px]  border-zinc-50 flex  overflow-hidden whitespace-nowrap'>
 <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{repeat:Infinity, ease:"linear",duration:15}}  className=' text-[20vw] leading-none text-gray-50 font-bold '> WE ARE WORTAX • </motion.h1>
 <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{repeat:Infinity, ease:"linear",duration:15}} className=' text-[20vw] leading-none text-gray-50 font-bold '>   WE ARE WORTAX •</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
