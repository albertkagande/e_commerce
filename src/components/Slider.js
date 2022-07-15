import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import one from '../images/slider/1.jpg'
import two from '../images/slider/2.jpg'
import three from '../images/slider/3.jpg'
import four from '../images/slider/4.jpg'
import five from '../images/slider/5.jpg'
import six from '../images/slider/6.jpg'
import seven from '../images/slider/7.jpg'
import eight from '../images/slider/8.jpg'
import nine from '../images/slider/9.jpg'


// import required modules
import { Pagination, Navigation } from "swiper";

function Slider() {
  return (
    <>
     <h3 className="bg-gray-900 text-5xl sm:text-3xl text-yellow-400 pb-1 pt-12">New stock</h3>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Navigation]}
        className="mySwiper xl:h-96 lg:h-96 sm:h-16 md:h-48 bg-yellow-400 shadow" >
    
        <SwiperSlide className="text-teal-900 h-96 cursor-pointer hover:animate-pulse">
        <img src={one} alt=""/>
        </SwiperSlide>

        <SwiperSlide className="text-teal-900 h-96 hover:cursor-pointer hover:animate-pulse">
        <img src={two} alt="" />
        </SwiperSlide>

        <SwiperSlide className="text-teal-900 h-96 hover:cursor-pointer hover:animate-pulse">
        <img src={three} alt="" />
        </SwiperSlide>

        <SwiperSlide className="text-teal-900 h-96 hover:cursor-pointer hover:animate-pulse">
        <img src={four} alt="" />
        </SwiperSlide>

        <SwiperSlide className="text-teal-900 h-96 hover:cursor-pointer hover:animate-pulse">
        <img src={five} alt="" />
        </SwiperSlide>

        <SwiperSlide className="text-teal-900 h-96 hover:cursor-pointer hover:animate-pulse">
        <img src={six} alt="" />
        </SwiperSlide>

        <SwiperSlide className="text-teal-900 h-96 hover:cursor-pointer hover:animate-pulse">
        <img src={seven} alt="" />
        </SwiperSlide>

        <SwiperSlide className="text-teal-900 h-96 hover:cursor-pointer hover:animate-pulse">
        <img src={eight} alt="" />
        </SwiperSlide>

        <SwiperSlide className="text-teal-900 h-96 hover:cursor-pointer hover:animate-pulse">
            <img src={nine} alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default Slider
