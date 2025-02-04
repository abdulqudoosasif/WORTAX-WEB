import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Img1 from "../../../assets/img/1.png"
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


function MobileScrollerr() {
  return (
    <div className="lg:hidden md:hidden block">
        <Swiper
          slidesPerView={2}
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
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 "
            >
              <img
                style={{ height: "100%" }}
                className="rounded-lg shadow-lg "
                src={Img1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 "
            >
              <img
                style={{ height: "100%" }}
                className="rounded-lg shadow-lg "
                src={Img2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 "
            >
              <img
                style={{ height: "100%" }}
                className="rounded-lg shadow-lg "
                src={Img3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 "
            >
              <img
                style={{ height: "100%" }}
                className="rounded-lg shadow-lg "
                src={Img4}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 "
            >
              <img
                style={{ height: "100%" }}
                className="rounded-lg shadow-lg "
                src={Img14}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 "
            >
              <img
                style={{ height: "100%" }}
                className="rounded-lg shadow-lg "
                src={Img6}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 "
            >
              <img
                style={{ height: "100%" }}
                className="rounded-lg shadow-lg "
                src={Img16}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 "
            >
              <img
                style={{ height: "100%" }}
                className="rounded-lg shadow-lg "
                src={Img12}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1 "
            >
              <img
                style={{ height: "100%" }}
                className="rounded-lg shadow-lg "
                src={Img13}
                alt=""
              />
            </SwiperSlide>
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
          className="mySwiper lg:mb-0 mb-5"
        >
          <div dir="ltr ">
            {" "}
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1"
            >
              <img
                style={{ height: "100%" }}
                className=" rounded-lg shadow-lg"
                src={Img11}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1"
            >
              <img
                style={{ height: "100%" }}
                className=" rounded-lg shadow-lg"
                src={Img10}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1"
            >
              <img
                style={{ height: "100%" }}
                className=" rounded-lg shadow-lg"
                src={Img17}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1"
            >
              <img
                style={{ height: "100%" }}
                className=" rounded-lg shadow-lg"
                src={Img6}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1"
            >
              <img
                style={{ height: "100%" }}
                className=" rounded-lg shadow-lg"
                src={Img15}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1"
            >
              <img
                style={{ height: "100%" }}
                className=" rounded-lg shadow-lg"
                src={Img4}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1"
            >
              <img
                style={{ height: "100%" }}
                className=" rounded-lg shadow-lg"
                src={Img3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1"
            >
              <img
                style={{ height: "100%" }}
                className=" rounded-lg shadow-lg"
                src={Img2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide
              style={{ height: "190px" }}
              className="mx-1 rounded-lg overflow-hidden lg:p-3 p-1"
            >
              <img
                style={{ height: "100%" }}
                className=" rounded-lg shadow-lg"
                src={Img1}
                alt=""
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
  )
}

export default MobileScrollerr
