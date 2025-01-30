import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { PiCrownLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const WeDo = () => {
  return (
    <div className="md:w-[38vw] w-72 lg:w-[23vw] relative h-auto">
      <img
        className="absolute top-0 left-0 h-full w-full"
        src="https://appsians.com/images/media/1632921978quin-service-webdesign1.webp"
        alt=""
      />

      <div className="md:w-[38vw] w-72 lg:w-[23vw] group relative border border-zinc-400 p-2 xl:p-4 lg:p-3 bg-neutral-900 hover:bg-opacity-75 duration-200 overflow-hidden flex justify-center items-center">
        {/* Ye div hover hone par slide karega */}
        <div
          className="lg:block md:hidden hidden rotate-[20deg] w-[100vw] -ml-[10vw] -mt-[30vw] absolute top-0 left-0 h-[40vh] bg-neutral-100 bg-opacity-5  overflow-visible
        transition-transform ease-linear duration-700 
        translate-y-0 group-hover:translate-y-[500%]"
        ></div>
        <div className="flex flex-col items-start justify-center gap-3 h-[45vh] md:h-[45vh] lg:h-[50vh] border border-zinc-400 text-white lg:py-16 lg:pl-5 pl-3 lg:pr-10 pr-5">
          <PiCrownLight size={75} />
          <h2 className="lg:text-xl text-lg font-semibold">Web Development</h2>
          <p className="text-sm leading-5">
            Need a new website? Our team of experienced web developers can bring
            your vision to life with custom design and functionality. Contact us
            for a quote today!
          </p>
          <Link className="text-sm tracking-widest flex items-center justify-center gap-2 border-b-[1.3px] ">LET'S START <BsArrowUpRight size={15}/></Link>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
