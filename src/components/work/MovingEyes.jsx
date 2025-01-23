import React, { useEffect, useState } from 'react'

const MovingEyes = () => {

  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    })
  })


  return (
    <div className='overflow-hidden w-full flex gap-10 items-center justify-center lg:py-20 py-10 bg-gray-50'>
      <div className='lg:w-[22vw] w-[35vw] lg:h-[22vw] h-[35vw] rounded-full border-2 border-[#d7d7d7] bg-gray-50 flex justify-center items-center'>
        <div className='relative w-2/3 h-2/3 rounded-full bg-black flex justify-center items-center'>
          <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='ball-line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8 px-[1px]'>
            <div className='w-[2.5vw] h-[2.5vw] rounded-full bg-white'></div>
          </div>
        </div>
      </div>

      <div className='lg:w-[22vw] w-[35vw] lg:h-[22vw] h-[35vw] rounded-full border-2 border-[#d7d7d7] bg-gray-50 flex justify-center items-center'>
        <div className='relative w-2/3 h-2/3 rounded-full bg-black'>
          <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='ball-line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8 px-[1px]'>
            <div className='w-[2.5vw] h-[2.5vw] rounded-full bg-white'></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MovingEyes
