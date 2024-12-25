"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainCarousel = () => {
  const images = ["/assets/b1.png", "/assets/b2.png", "/assets/b3.png"];
  return (
    <div className="relative my-9 ">
      <Swiper
        direction="horizontal"
        loop={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper rounded-2xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full rounded-2xl bg-cover bg-no-repeat min-h-[45vh] bg-center" style={{backgroundImage: `url(${image})` , width: "100%"}}>
            {/* <Image
              key={index}
              src={image}
              alt="slider image"
              width={1920}
              height={1080}
              className="rounded-2xl min-h-full"
            /> */}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev absolute top-1/2 left-3 transform -translate-y-1/2 z-10 bg-gray-600/50 hover:bg-gray-600/80 text-white px-4 aspect-square rounded-full shadow-lg hover:bg-blue-500">
        &#10095;{/* Left arrow icon */}
      </button>
      <button className="custom-next absolute top-1/2 right-3 transform -translate-y-1/2 z-10 bg-gray-600/50 hover:bg-gray-600/80 text-white px-4 aspect-square rounded-full shadow-lg hover:bg-blue-500">
        &#10094;{/* Right arrow icon */}
      </button>

      {/* Custom Pagination */}
      <div className="custom-pagination absolute bottom-3 left-0 right-0 flex justify-center gap-x-3 z-10 translate-y-7">
        {/* Pagination bullets will be generated here by Swiper */}
      </div>
    </div>
  );
};

export default MainCarousel;
