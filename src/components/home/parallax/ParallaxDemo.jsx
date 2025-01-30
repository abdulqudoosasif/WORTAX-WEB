import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Img1 from '../../../assets/img/Review/1.png'
import Img2 from '../../../assets/img/Review/2.png'
import Img3 from '../../../assets/img/Review/3.png'
import Img4 from '../../../assets/img/Review/4.png'
import Img5 from '../../../assets/img/Review/5.png'
import Img6 from '../../../assets/img/Review/6.png'
import Img7 from '../../../assets/img/Review/7.png'
import Img8 from '../../../assets/img/Review/8.png'
import Img9 from '../../../assets/img/Review/15.png'
import Img10 from '../../../assets/img/Review/10.png'
import Img11 from '../../../assets/img/Review/11.png'
import Img12 from '../../../assets/img/Review/12.png'
import Img13 from '../../../assets/img/Review/13.png'
import Img14 from '../../../assets/img/Review/14.png'
import MobileSec  from './MobileSec';
const ParallaxDemo = () => {
  return (
<div className='lg:flex relative z-10  bg-white justify-between lg:h-[100vh] px-4 lg:px-16'> 

    <div className='lg:w-[30vw] md:w-full w-full flex items-center lg:justify-start md:justify-center justify-center'>
      <div className='lg:py-0 md:py-10 pt-6'>
      <h1 className='lg:text-[3.6vw] text-3xl font-semibold lg:leading-[3vw] '>The Evidence of </h1>
        <h1 className='lg:text-[3.6vw] lg:mb-0   text-2xl font-semibold leading-tight text-gray-500 lg:text-start text-center'>Excellence</h1>
      </div>
    </div>
    <MobileSec/>
<ParallaxProvider>
      <div className='lg:flex md:flex hidden overflow-hidden  gap-3  '>
        {/* Parallax Content */}
        <Parallax speed={-30} className='flex flex-col gap-4'>
          <div className='lg:w-[29vw] rounded-lg   text-white flex items-center justify-center'>
          <img src={Img1} alt="" className=' shadow-lg border '  />
          </div>
          <div className='lg:w-[29vw] rounded-lg   text-white flex items-center justify-center'>
           <img src={Img2} alt="" className=' shadow-lg border w-full' />
          </div>
          <div className='lg:w-[29vw] rounded-lg   text-white flex items-center justify-center'>
           <img src={Img3} alt="" className=' shadow-lg border w-full' />
          </div>
          <div className='lg:w-[29vw] rounded-lg   text-white flex items-center justify-center'>
           <img src={Img4} alt="" className=' shadow-lg border w-full' />
          </div>
          <div className='lg:w-[29vw] rounded-lg   text-white flex items-center justify-center'>
           <img src={Img5} alt="" className=' shadow-lg border w-full' />
          </div>
          <div className='lg:w-[29vw] rounded-lg   text-white flex items-center justify-center'>
           <img src={Img10} alt="" className=' shadow-lg border w-full' />
          </div>
          <div className='lg:w-[29vw] rounded-lg   text-white flex items-center justify-center'>
           <img src={Img11} alt="" className=' shadow-lg border w-full' />
          </div>

          {/* repeat  */}

          <div className='lg:w-[29vw] rounded-lg   text-white flex items-center justify-center'>
           <img src={Img10} alt="" className=' shadow-lg border w-full' />
          </div>
          <div className='lg:w-[29vw] rounded-lg   text-white flex items-center justify-center'>
           <img src={Img11} alt="" className=' shadow-lg border w-full' />
          </div>

        </Parallax>

        <Parallax speed={30} className='flex flex-col gap-4'>
        <div className='lg:w-[29vw] rounded-lg  bg-slate-400  text-white flex items-center justify-center'>
           <img src={Img6} alt="" className=' shadow-lg border w-full' />
          </div>
          <div className='lg:w-[29vw] rounded-lg  bg-slate-400  text-white flex items-center justify-center'>
           <img src={Img7} alt="" className=' shadow-lg border w-full' />
          </div>
          <div className='lg:w-[29vw] rounded-lg  bg-slate-400  text-white flex items-center justify-center'>
           <img src={Img8} alt="" className=' shadow-lg border w-full' />
          </div>
          <div className='lg:w-[29vw] rounded-lg  bg-slate-400  text-white flex items-center justify-center'>
           <img src={Img9} alt="" className=' shadow-lg border w-full' />
          </div>
          <div className='lg:w-[29vw] rounded-lg  bg-slate-400  text-white flex items-center justify-center'>
           <img src={Img12} alt="" className=' shadow-lg border w-full' />
          </div>
          <div className='lg:w-[29vw] rounded-lg  bg-slate-400  text-white flex items-center justify-center'>
           <img src={Img13} alt="" className=' shadow-lg border w-full' />
          </div>
          <div className='lg:w-[29vw] rounded-lg  bg-slate-400  text-white flex items-center justify-center'>
           <img src={Img14} alt="" className=' shadow-lg border w-full' />
          </div>
          {/* repeat  */}
       <div className='lg:w-[29vw] rounded-lg  bg-slate-400  text-white flex items-center justify-center'>
           <img src={Img6} alt="" className=' shadow-lg border w-full' />
          </div>
          <div className='lg:w-[29vw] rounded-lg  bg-slate-400  text-white flex items-center justify-center'>
           <img src={Img7} alt="" className=' shadow-lg border w-full' />
          </div>
          <div className='lg:w-[29vw] rounded-lg  bg-slate-400  text-white flex items-center justify-center'>
           <img src={Img8} alt="" className=' shadow-lg border w-full' />
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>

    
     </div>
  );
};

export default ParallaxDemo;
