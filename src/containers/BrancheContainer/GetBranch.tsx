"use client";
import React, { useState } from "react";
import { Select, Cart } from "@/components";
import { city, branches } from "@/utils/alldata";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
const GetBranch = () => {
  const latitude = 37.7749;
  const longitude = -122.4194;

  const [location, setLocation] = useState("");
  const getLatAndLog = (e: any) => {
    console.log(e.target.value);
    console.log("e.id");
    setLocation(e.target.value);
  };
  console.log(location);
  return (
    <div className="w-full h-fit rouded-xl bg-gray-100">
      {/* city */}
      <div className="w-fit">
        <Select
          name="city"
          id="city"
          options={city}
          classname="bg-gray-100 rounded px-5 py-3"
          onchange={(e) => getLatAndLog(e)}
          // onclickOption={(e) => getLatAndLog(e)}
        />
      </div>

      {/* the map */}
      <div className="mt-5 w-full">
        <iframe
          id="googleMap"
          src={`https://www.google.com/maps?q=${location}&z=14&output=embed`} //نعمروها بخط الطول والعرض
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>

      {/* banch */}

      <Swiper
        spaceBetween={10}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2, // شاشة صغيرة (عرض كرت واحد)
          },
          1000: {
            slidesPerView:3, // شاشة كبيرة (عرض 4 كروت)
          }
        }}
        className=""
      >
        {branches.map((item, index) => (
          <SwiperSlide key={index} className="py-10 px-5">
            <Cart item={item} linkBtn={true} className="min-h-full" />
          </SwiperSlide>
        ))}
        {/* أزرار التنقل */}
        <button className="custom-next absolute top-1/2 left-3 transform -translate-y-1/2 z-10 bg-secondery/50 hover:bg-secondery/80 text-white px-4 aspect-square rounded-full shadow-lg hover:bg-blue-500">
          &#10095;{/* أيقونة السهم الأيمن */}
        </button>
        <button className="custom-prev absolute top-1/2 right-3 transform -translate-y-1/2 z-10 bg-secondery/50 hover:bg-secondery/80 text-white px-4 aspect-square rounded-full shadow-lg hover:bg-blue-500">
          &#10094;{/* أيقونة السهم الأيسر */}
        </button>
      </Swiper>
    </div>
  );
};

export default GetBranch;
