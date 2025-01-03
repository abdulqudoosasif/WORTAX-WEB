import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const ParallaxDemo = () => {
  return (
<div className='flex bg-white h-[100vh] px-16'> 

    <div className='w-1/2 flex items-center'>
      <div>
      <h1 className='text-[3.6vw] font-semibold leading-[3vw]'>Results that<br/>
        speak for</h1>
        <h1 className='text-[3.6vw] font-semibold leading-tight text-gray-500'>themselves</h1>
      </div>
    </div>
<ParallaxProvider>
      <div className='flex overflow-hidden gap-3  w-1/2'>
        {/* Parallax Content */}
        <Parallax speed={-30} className='flex flex-col gap-4'>
          <div className='w-[22vw] rounded-lg h-[30vw] bg-slate-900 ] text-white flex items-center justify-center'>
            Moves slower (Speed: -10)
          </div>
          <div className='w-[22vw] rounded-lg h-[20vw] bg-slate-900 ] text-white flex items-center justify-center'>
            Moves slower (Speed: -10)
          </div>
          <div className='w-[22vw] rounded-lg h-[30vw] bg-slate-900 ] text-white flex items-center justify-center'>
            Moves slower (Speed: -10)
          </div>
          <div className='w-[22vw] rounded-lg h-[20vw] bg-slate-900 ] text-white flex items-center justify-center'>
            Moves slower (Speed: -10)
          </div>
          
      
        </Parallax>

        <Parallax speed={30} className='flex flex-col gap-4'>
        <div className='w-[22vw] rounded-lg h-[30vw] bg-slate-400  text-white flex items-center justify-center'>
            Moves slower (Speed: -10)
          </div>
          <div className='w-[22vw] rounded-lg h-[20vw] bg-slate-400  text-white flex items-center justify-center'>
            Moves slower (Speed: -10)
          </div>
          <div className='w-[22vw] rounded-lg h-[30vw] bg-slate-400  text-white flex items-center justify-center'>
            Moves slower (Speed: -10)
          </div>
          <div className='w-[22vw] rounded-lg h-[20vw] bg-slate-400  text-white flex items-center justify-center'>
            Moves slower (Speed: -10)
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
     </div>
  );
};

export default ParallaxDemo;
