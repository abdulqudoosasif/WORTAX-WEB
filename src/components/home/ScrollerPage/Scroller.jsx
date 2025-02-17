import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Img1 from "../../../assets/img/1.png";
import Img2 from "../../../assets/img/2.png";
import Img3 from "../../../assets/img/3.png";
import Img4 from "../../../assets/img/4.png";
import Img14 from "../../../assets/img/14.png";
import Img6 from "../../../assets/img/6.png";
import Img10 from "../../../assets/img/10.png";
import Img11 from "../../../assets/img/11.png";
import Img12 from "../../../assets/img/12.png";
import Img13 from "../../../assets/img/13.png";
import Img15 from "../../../assets/img/15.png";
import Img16 from "../../../assets/img/16.png";
import Img17 from "../../../assets/img/17.png";
import MobileScrollerr from "./MobileScrollerr";
function Scroller() {
  return (
    <div className="bg-neutral-900 xl:pt-[14vw] relative z-10 xl:-mt-[40vw] lg:-mt-[36vw] md:-mt-[65vh] -mt-[62vh] md:pt-[20vh] lg:pt-[14vw] pt-20  pb-[5vw]   ">
      <div className=" lg:px-16 px-4 flex flex-col pb-[4vw] items-center justify-center lg:pt-[2vw]  ">
        <h2 className="text-[#fff] lg:text-[3.6vw] text-3xl font-semibold">
          Our Featured Projects
        </h2>
        <p className="text-[#fff] lg:text-[1vw] text-xs xl:mt-[2vw] lg:mt-[1vw] md:px-28 tracking-wide lg:w-[60vw] text-center lg:leading-relaxed">
          Explore our successful projects, delivering innovative solutions that
          drive growth and exceed client expectations
        </p>
      </div>
      <div className="lg:block md:block hidden">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2000,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper Scroll mb-3 lg:mt-0 mt-10"
        >
          <div dir="ltr">
            {" "}
            {/* Add this wrapper to force RTL */}
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 ">
              <img className="rounded-lg shadow-lg " src={Img1} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 ">
              <img className="rounded-lg shadow-lg " src={Img2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 ">
              <img className="rounded-lg shadow-lg " src={Img3} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 ">
              <img className="rounded-lg shadow-lg " src={Img4} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 ">
              <img className="rounded-lg shadow-lg " src={Img14} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 ">
              <img className="rounded-lg shadow-lg " src={Img6} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 ">
              <img className="rounded-lg shadow-lg " src={Img16} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 ">
              <img className="rounded-lg shadow-lg " src={Img12} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 ">
              <img className="rounded-lg shadow-lg " src={Img13} alt="" />
            </SwiperSlide>
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
          className="mySwiper lg:mb-0 mb-5"
        >
          <div dir="ltr ">
            {" "}
            {/* Add this wrapper to force RTL */}
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1">
              <img className=" rounded-lg shadow-lg" src={Img11} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1">
              <img className=" rounded-lg shadow-lg" src={Img10} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1">
              <img className=" rounded-lg shadow-lg" src={Img17} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1">
              <img className=" rounded-lg shadow-lg" src={Img6} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1">
              <img className=" rounded-lg shadow-lg" src={Img15} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1">
              <img className=" rounded-lg shadow-lg" src={Img4} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1">
              <img className=" rounded-lg shadow-lg" src={Img3} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1">
              <img className=" rounded-lg shadow-lg" src={Img2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1">
              <img className=" rounded-lg shadow-lg" src={Img1} alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

      {/* Mobile Screen Proview */}
     <MobileScrollerr/>
     
    </div>
  );
}

export default Scroller;
