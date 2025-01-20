import React from 'react'
import { motion } from 'framer-motion';
import img from "../../assets/img/logo1.png";

function ContactHero() {
  return (
    <div className='px-[5vw] bg-gray-50'>
       <div className="pt-[94px] relative z-40 lg:pt-[16vw] ">
        {["Contact Us", "for Support", "and Help"].map((item, index) => {
          return (
            <div className="masker flex">
              {index === 1 && (
               <motion.div
               initial={{ width: 0 }}
               animate={{ width: '10vw' }}
               transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay:2.5 }}
               className=" lg:h-[6vw] md:h-[6vw] sm:h-[6vw] h-[8.5vw] overflow-hidden relative rounded-md  lg:top-[vw] lg:ml-[0.3vw] md:-top-[0.1vw] sm:top-0 top-[1.2vw] mr-2 origin-left"
             >
                  <img
                    src={img}
                    className="w-full lg:h-[6vw] md:h-[6vw] sm:h-[6vw] h-[29px] object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              )}
              <h1 className="text-[42px] leading-[39px] uppercase md:text-[5vw] lg:text-[7vw] font-bold lg:leading-[6vw] tracking-tighter  text-neutral-900">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ContactHero
