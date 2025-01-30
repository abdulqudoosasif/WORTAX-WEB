import { motion } from "framer-motion";
import React from "react";
import img from '../../assets/img/logo1.png'

function HeroContent({item}) {
  return (
    <div className="pt-[150px] relative z-10 lg:pt-[16vw]">
      {item.map((item, index) => {
        return (
          <div key={index} className="masker flex">
            {index === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "10vw" }}
                transition={{
                  ease: [0.76, 0, 0.24, 1],
                  duration: 1,
                  delay: 2.5,
                }}
                className="lg:h-[6vw] md:h-[6vw] h-[8.3vw] overflow-hidden relative rounded-md lg:top-[0.vw] lg:ml-[0.3vw] md:-top-[0.1vw] sm:top-0 top-[1.2vw] mr-2 origin-left"
              >
                <img
                  src={img}
                  className="w-full lg:h-[6vw] md:h-[6vw] h-[8.3vw] object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            )}
            <h1 className="text-[39px] sm:text-[42px] leading-[39px] uppercase lg:text-[7vw] font-bold lg:leading-[6vw] tracking-tighter text-neutral-900">
              {item}
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default HeroContent;
