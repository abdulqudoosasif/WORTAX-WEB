import React from "react";
import ServicesHeader from "./ServicesHeader";
import WeDo from "./WeDo";

const WhatWeDo = () => {
  return (
    <div className="w-full pt-[5vw] px-5 flex flex-col items-center justify-center bg-neutral-900">
      <ServicesHeader />
      <div className="max-w-[calc(100%-10vw)] flex items-center justify-center  lg:gap-[2vw] md:gap-10 gap-5 lg:flex-nowrap md:flex-wrap flex-wrap">
        <WeDo />
        <WeDo />
        <WeDo />
        <WeDo />
      </div>
    </div>
  );
};

export default WhatWeDo;
