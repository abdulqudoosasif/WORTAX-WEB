import React from 'react'
import { motion } from "framer-motion"
import wortax from "../../../assets/img/logo1.png";

const HeroSection = () => {

  return (
    <div className='absolute w-full h-screen bg-[#F1F1F1] pt-1 '>
      <div className='text-structure mt-[11.5vw] px-[5vw]'>
        {["WE ARE", "WORTAX IT", "SOLUTIONS"].map((item, index) => {
          return <div className='masker'>
            <div className='w-fit flex items-center'>
              {index === 1 && (
                <motion.div initial={{ width: 0 }}
                  animate={{ width: "10vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className=" lg:h-[6vw] md:h-[6vw] h-[8.3vw] overflow-hidden relative rounded-md  lg:top-[0.3vw] lg:ml-[0.3vw] md:-top-[0.1vw] sm:top-0 top-[1.2vw] mr-2 origin-left">
                  <img src={wortax} 
                   className="w-full lg:h-[6vw] md:h-[6vw] h-[8.3vw] object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              )}
              <h1 className="text-4xl uppercase lg:text-[7vw] font-bold lg:leading-[6vw] tracking-tighter  text-neutral-900">
                {item}
              </h1>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default HeroSection
