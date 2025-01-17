import React from "react";
import img from "../../../assets/img/logo1.png";
import { motion } from "framer-motion";
import { PopupButton } from "react-calendly";
function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="h-full  px-[5vw]"
    >
      <div className="mt-[150px] lg:mt-[16vw] ">
        {["We Scale Local", "Roots to", "Digital Heights"].map((item, index) => {
          return (
            <div className="masker flex">
              {index === 1 && (
               <motion.div
               initial={{ width: 0 }}
               animate={{ width: '10vw' }}
               transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay:2.5 }}
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

      {/* Border  */}

      <div className="border-t-[1px] border-black mt-[11vw]"></div>

      <div className="lg:flex justify-between items-center mt-3 lg:mb-[3vw] lg:mx-16 mx-4">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className=" my-2">{item}</p>
        ))}
        <PopupButton
          url="https://calendly.com/emhamza-491"
          rootElement={document.getElementById("root")}
          className="relative px-5 text-sm py-2 overflow-hidden border border-zinc-800 rounded-full text-[#17191b] transition-all before:absolute before:top-0 before:left-0 before:right-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"
          text={
            <span className="relative z-10 tracking-wide font-medium">
              BOOK AN APPOINTMENT
            </span>
          }
        />
      </div>
    </div>
  );
}

export default LandingPage;
