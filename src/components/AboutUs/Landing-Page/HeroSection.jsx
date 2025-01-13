import React from 'react'
import { motion } from "framer-motion"
import wortax from "../../../assets/img/logo1.png";

const HeroSection = () => {

  return (
    <div className='absolute w-full h-screen bg-[#F1F1F1] pt-1 '>
      <div className='text-structure mt-[11.5vw] px-[6vw]'>
        {["WE ARE", "WORTAX IT", "SOLUTIONS"].map((item, index) => {
          return <div className='masker'>
            <div className='w-fit flex items-center'>
              {index === 1 && (
                <motion.div initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className='w-[9vw] h-[5.2vw] relative top-[0.4vw]'>
                  <img src={wortax} alt=""
                    className="w-full h-full object-cover rounded-lg shadow-lg shadow-slate-400"
                  />
                </motion.div>
              )}
              <h1 className={`flex items-center text-[7.5vw] leading-[6vw] tracking-tight font-bold ${index === 1 && "ml-1"}`}>{item}</h1>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default HeroSection
