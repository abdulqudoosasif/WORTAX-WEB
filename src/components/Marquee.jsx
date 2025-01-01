import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {

  return (
    <div className='w-full py-20 pb-32 rounded-t-3xl bg-neutral-900 mt-16'>
      <div className=' border-y-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap'>
 <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{repeat:Infinity, ease:"linear",duration:10}}  className=' text-[20vw] leading-none text-white font-bold '> WE ARE WORTAX .</motion.h1>
 <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{repeat:Infinity, ease:"linear",duration:10}} className=' text-[20vw] leading-none text-white font-bold '>  . WE ARE WORTAX .</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
