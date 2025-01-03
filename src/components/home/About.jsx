import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Img1 from './../../assets/img/1.png'
import Img2 from './../../assets/img/2.png'
import Img3 from './../../assets/img/3.png'
import Img4 from './../../assets/img/4.png'
import Img5 from './../../assets/img/5.png'
import Img6 from './../../assets/img/6.png'
import Img7 from './../../assets/img/7.png'
import Img10 from './../../assets/img/10.png'
import Img11 from './../../assets/img/11.png'
import Img12 from './../../assets/img/12.png'
import Img13 from './../../assets/img/13.png'
import '../../index.css';
function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='0.2' className='bg-neutral-900 rounded-t-3xl  -mt-[15vw]  pt-[2vw] pb-[5vw] relative z-20'>
    
       <div className=' px-16 pb-[4vw] '>
        <h2 className='text-white text-[3vw] font-bold '>
        Website Design & Development Projects
        </h2>
        <p className='text-white text-lg mt-2 w-1/2'>
        At WebRay Studio, we excel in crafting unique and impactful website designs and development solutions. From intuitive UI/UX design to seamless development, our talented team brings our clients' visions to life with professionalism and creativity. Explore our portfolio to see some of our recent projects.
        </p>
        </div> 
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        centeredSlides={true}
        loop={true}
        speed={800}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,  
          }}
          modules={[Pagination, Autoplay]}
        className="mySwiper Scroll mb-3" >
       <div dir="ltr"> {/* Add this wrapper to force RTL */}
       <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4  '><img className='rounded-lg ' src={Img1} alt="" /></SwiperSlide>
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4  '><img className='rounded-lg ' src={Img2} alt="" /></SwiperSlide>
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4  '><img className='rounded-lg ' src={Img3} alt="" /></SwiperSlide>

        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4  '><img className='rounded-lg ' src={Img4} alt="" /></SwiperSlide>
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4  '><img className='rounded-lg ' src={Img5} alt="" /></SwiperSlide>
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4  '><img className='rounded-lg ' src={Img6} alt="" /></SwiperSlide>
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4  '><img className='rounded-lg ' src={Img7} alt="" /></SwiperSlide>
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4  '><img className='rounded-lg ' src={Img12} alt="" /></SwiperSlide>
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4  '><img className='rounded-lg ' src={Img13} alt="" /></SwiperSlide>
       
      </div>
      </Swiper>

      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        centeredSlides={true}
        loop={true}
        speed={800}
        autoplay={{
            delay: 2000, 
            disableOnInteraction: false, 
          }}
          modules={[Pagination, Autoplay]}
        className="mySwiper " >
       <div dir="ltr"> {/* Add this wrapper to force RTL */}
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4'><img className=' rounded-lg' src={Img11} alt="" /></SwiperSlide>
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4'><img className=' rounded-lg' src={Img10} alt="" /></SwiperSlide>
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4'><img className=' rounded-lg' src={Img7} alt="" /></SwiperSlide>

        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4'><img  className=' rounded-lg' src={Img6} alt="" /></SwiperSlide>
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4'><img className=' rounded-lg' src={Img5} alt="" /></SwiperSlide>
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4'><img className=' rounded-lg' src={Img4} alt="" /></SwiperSlide>
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4'><img className=' rounded-lg' src={Img3} alt="" /></SwiperSlide>
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4'><img className=' rounded-lg' src={Img2} alt="" /></SwiperSlide>
        <SwiperSlide className='mx-1 rounded-lg overflow-hidden p-4'><img className=' rounded-lg' src={Img1} alt="" /></SwiperSlide>
       
      </div>
      </Swiper>

    </div>
    
  )
}

export default About
