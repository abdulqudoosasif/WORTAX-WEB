import React, { useState, useEffect } from 'react';

function WorkMain() {
  const [activeIndex, setActiveIndex] = useState(0);

  const messages = [
    "Your Unfair Advantage",
    "Your Competitive Edge",
    "Your Unfair Advantage",
    "Your Competitive Edge",
    "Your Unfair Advantage",
    "Your Competitive Edge",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className='px-[5vw] relative z-20'>
      <div className="lg:h-[60vh] md:[50vh] h-[40vh] flex items-center justify-center">
        <div className="relative">
          <h1 className="text-[7vw] lg:leading-[7vw]  font-semibold text-center text-neutral-900">
            Designing Unparalleled <br /> Success Stories
          </h1>
          <div className="absolute bottom-[-4vw] flex flex-col font-semibold items-center right-5 bg-[#e069fe] h-[4vw] rounded-3xl w-[20vw] overflow-hidden -rotate-[7deg]">
            <div
              className="transition-transform absolute   duration-100 ease-in-out"
              style={{ transform: `translateY(-${activeIndex * 4}vw)` }}
            >
              {messages.map((message, index) => (
                <h2
                  key={index}
                  className=" text-[1.4vw] leading-[.3vw] text-center pt-[1.9vw] "
                  style={{ height: "4vw" }}
                >
                  {message}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='h-[1px] w-full bg-gray-600 mt-[2vw]'></div>
    </div>
  );
}

export default WorkMain;
