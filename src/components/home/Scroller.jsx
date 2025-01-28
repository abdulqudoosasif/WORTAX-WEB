import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Img1 from './../../assets/img/1.png'
import Img2 from './../../assets/img/2.png'
import Img3 from './../../assets/img/3.png'
import Img4 from './../../assets/img/4.png'
import Img14 from './../../assets/img/14.png'
import Img6 from './../../assets/img/6.png'
import Img10 from './../../assets/img/10.png'
import Img11 from './../../assets/img/11.png'
import Img12 from './../../assets/img/12.png'
import Img13 from './../../assets/img/13.png'
import Img15 from './../../assets/img/15.png'
import Img16 from './../../assets/img/16.png'
import Img17 from './../../assets/img/17.png'
import '../../index.css';
function Scroller() {
  return (
    <div
      className='bg-neutral-900 pt-6 lg:pt-[2vw] pb-[5vw] relative z-10 rounded-t-3xl'>

      <div className=' lg:px-16 px-4 lg:flex pb-[4vw] items-center justify-center gap-10 '>
        <h2 className='text-[#fff] lg:leading-[3vw] lg:text-[3vw] text-3xl font-bold '>
          Local Business Websites <br />That Work as Hard as You Do
        </h2>
        <p className='text-[#fff] text-lg lg:mt-2  mt-6 lg:w-1/2'>
          At Wortax, we understand that your local business deserves more than just a website - it needs
          a digital foundation for growth. Our team crafts custom websites that capture the spirit of your
          business while delivering the professional edge you need to compete. From smart designs that showcase
          your products to user-friendly features that keep customers coming back, we build digital solutions that
          help local businesses thrive. Below are the Website which we have crafted
        </p>
      </div>
      <div className='lg:block md:block hidden'>
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2000,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper Scroll mb-3 lg:mt-0 mt-10"  >
          <div dir="ltr"> {/* Add this wrapper to force RTL */}
            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img className='rounded-lg shadow-lg ' src={Img1} alt="" /></SwiperSlide>
            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img className='rounded-lg shadow-lg ' src={Img2} alt="" /></SwiperSlide>
            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img className='rounded-lg shadow-lg ' src={Img3} alt="" /></SwiperSlide>

            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img className='rounded-lg shadow-lg ' src={Img4} alt="" /></SwiperSlide>
            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img className='rounded-lg shadow-lg ' src={Img14} alt="" /></SwiperSlide>
            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img className='rounded-lg shadow-lg ' src={Img6} alt="" /></SwiperSlide>

            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img className='rounded-lg shadow-lg ' src={Img16} alt="" /></SwiperSlide>
            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img className='rounded-lg shadow-lg ' src={Img12} alt="" /></SwiperSlide>
            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img className='rounded-lg shadow-lg ' src={Img13} alt="" /></SwiperSlide>

          </div>
        </Swiper>

        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2000,

          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper lg:mb-0 mb-5" >
          <div dir="ltr "> {/* Add this wrapper to force RTL */}
            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img className=' rounded-lg shadow-lg' src={Img11} alt="" /></SwiperSlide>
            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img className=' rounded-lg shadow-lg' src={Img10} alt="" /></SwiperSlide>
            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img className=' rounded-lg shadow-lg' src={Img17} alt="" /></SwiperSlide>

            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img className=' rounded-lg shadow-lg' src={Img6} alt="" /></SwiperSlide>
            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img className=' rounded-lg shadow-lg' src={Img15} alt="" /></SwiperSlide>
            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img className=' rounded-lg shadow-lg' src={Img4} alt="" /></SwiperSlide>

            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img className=' rounded-lg shadow-lg' src={Img3} alt="" /></SwiperSlide>
            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img className=' rounded-lg shadow-lg' src={Img2} alt="" /></SwiperSlide>
            <SwiperSlide className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img className=' rounded-lg shadow-lg' src={Img1} alt="" /></SwiperSlide>

          </div>
        </Swiper>
      </div>



      {/* Mobile Screen Proview */}



      <div className='lg:hidden md:hidden block'>
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2000,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper Scroll mb-3 lg:mt-0 mt-10"  >
          <div dir="ltr"> {/* Add this wrapper to force RTL */}
            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img style={{ height: '100%' }} className='rounded-lg shadow-lg ' src={Img1} alt="" /></SwiperSlide>
            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img style={{ height: '100%' }} className='rounded-lg shadow-lg ' src={Img2} alt="" /></SwiperSlide>
            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img style={{ height: '100%' }} className='rounded-lg shadow-lg ' src={Img3} alt="" /></SwiperSlide>

            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img style={{ height: '100%' }} className='rounded-lg shadow-lg ' src={Img4} alt="" /></SwiperSlide>
            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img style={{ height: '100%' }} className='rounded-lg shadow-lg ' src={Img14} alt="" /></SwiperSlide>
            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img style={{ height: '100%' }} className='rounded-lg shadow-lg ' src={Img6} alt="" /></SwiperSlide>

            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img style={{ height: '100%' }} className='rounded-lg shadow-lg ' src={Img16} alt="" /></SwiperSlide>
            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img style={{ height: '100%' }} className='rounded-lg shadow-lg ' src={Img12} alt="" /></SwiperSlide>
            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1 '><img style={{ height: '100%' }} className='rounded-lg shadow-lg ' src={Img13} alt="" /></SwiperSlide>

          </div>
        </Swiper>

        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2000,

          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper lg:mb-0 mb-5" >
          <div dir="ltr "> {/* Add this wrapper to force RTL */}
            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img style={{ height: '100%' }} className=' rounded-lg shadow-lg' src={Img11} alt="" /></SwiperSlide>
            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img style={{ height: '100%' }} className=' rounded-lg shadow-lg' src={Img10} alt="" /></SwiperSlide>
            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img style={{ height: '100%' }} className=' rounded-lg shadow-lg' src={Img17} alt="" /></SwiperSlide>

            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img style={{ height: '100%' }} className=' rounded-lg shadow-lg' src={Img6} alt="" /></SwiperSlide>
            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img style={{ height: '100%' }} className=' rounded-lg shadow-lg' src={Img15} alt="" /></SwiperSlide>
            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img style={{ height: '100%' }} className=' rounded-lg shadow-lg' src={Img4} alt="" /></SwiperSlide>

            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img style={{ height: '100%' }} className=' rounded-lg shadow-lg' src={Img3} alt="" /></SwiperSlide>
            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img style={{ height: '100%' }} className=' rounded-lg shadow-lg' src={Img2} alt="" /></SwiperSlide>
            <SwiperSlide style={{ height: '190px' }} className='mx-1 rounded-lg overflow-hidden lg:p-3 p-1'><img style={{ height: '100%' }} className=' rounded-lg shadow-lg' src={Img1} alt="" /></SwiperSlide>

          </div>
        </Swiper>
      </div>

    </div>

  )
}

export default Scroller
