import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import img from '../../assets/img/logo1.png'

function WorkMain() {
  const [activeIndex, setActiveIndex] = useState(0);

  // const messages = [
  //   "Your Unfair Advantage",
  //   "Your Competitive Edge",
  //   "Your Unfair Advantage",
  //   "Your Competitive Edge",
  //   "Your Unfair Advantage",
  //   "Your Competitive Edge",
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % messages.length);
  //   }, 2000); // Change every 2 seconds
  //   return () => clearInterval(interval);
  // }, [messages.length]);

  return (

    <div className=" lg:pt-[16vw] lg:pb-[8vw] px-[5vw] ">
      {["Designing", "Unparalleled ", "Success Stories"].map((item, index) => {
        return (
          <div className="masker flex">
            {index === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '10vw' }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 2.5 }}
                className=" lg:h-[6vw] md:h-[6vw] h-[8.3vw] overflow-hidden relative rounded-md  lg:top-[0.vw] lg:ml-[0.3vw] md:-top-[0.1vw] sm:top-0 top-[1.2vw] mr-2 origin-left"
              >
                <img
                  src={img}
                  className="w-full lg:h-[6vw] md:h-[6vw] h-[8.3vw] object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            )}
            <h1 className="text-4xl uppercase lg:text-[7vw] font-bold lg:leading-[6vw] tracking-tighter  text-neutral-900">
              {item}
            </h1>
          </div>
        );
      })}
    </div>

  );
}

export default WorkMain;
