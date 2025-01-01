import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
function LandingPage() {
  return (
    <div className="h-full  pt-1">
      <div className="mt-52 ">
        {["We create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker flex mx-16">
              {index === 1 && (
                <div className="w-[160px] h-[70px] relative rounded-md top-[2vh] mr-3 bg-black"></div>
              )}
              <h1 className="uppercase text-8xl font-bold tracking-tighter bg-gradient-to-r from-blue-800 to-black bg-clip-text text-transparent">
                {item}
              </h1>
            </div>
          );
        })}
      </div>

      {/* Border  */}

      <div className="border-t-[1px] border-black mt-24"></div>

      <div className="flex justify-between items-center mt-3 mx-16">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p>{item}</p>
        ))}
        <div className="px-3 py-1 border-[1px] border-zinc-800 rounded-full">
          START THE PROJECT
        </div>
      </div>
      <div>
      <DotLottieReact 
      src="https://lottie.host/6393b579-b453-4bbc-93bb-b888d7419558/14PovrnZta.lottie"
      loop
      autoplay
    />
      </div>
    </div>
  );
}

export default LandingPage;
