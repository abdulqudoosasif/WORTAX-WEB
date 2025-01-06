import React from "react";
import img from "./../../assets/img/logo1.png";
import { motion } from "framer-motion";
import { PopupButton } from "react-calendly";
function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="h-full  pt-1"
    >
      <div className="mt-[16vw] ">
        {["We create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker flex mx-16">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "10vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[10vw] h-[6vw] overflow-hidden relative rounded-md top-[0.3vw] mr-3"
                >
                  <img
                    src={img}
                    className="w-full h-[6vw] object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              )}
              <h1 className="uppercase text-[7vw] font-bold leading-[6vw] tracking-tighter  text-neutral-900">
                {item}
              </h1>
            </div>
          );
        })}
      </div>

      {/* Border  */}

      <div className="border-t-[1px] border-black mt-[11vw]"></div>

      <div className="flex justify-between items-center mt-3 mb-[8vw] mx-16">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p>{item}</p>
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
