"use client";
import React, { useEffect, useState } from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// component
import { Button, Input, FoodCart } from "@/components";
// data
import { categoriesColData } from "./categoriesColData";
import { categoriesData } from "@/utils/alldata";
// icons
import { LuSearch } from "react-icons/lu";

const Menu = () => {
  interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
  }

  const [dataCart, setDataCart] = useState<CartItem[]>([]);
  console.log("asdasdasdadsa", categoriesData)
  const getData = (id: number) => {
    setDataCart([]);
    console.log(id);
    const catId = categoriesData.map((item) => item._id);
    console.log("catId :" , catId)
    const theCat = catId.filter((item) => id === item)[0];
    console.log("theCat :" , theCat)
    const data = categoriesData[theCat].catData;
    console.log(data);
    if (theCat) {
      setDataCart(data);
    }
  };

  return (
    <div className="flex flex-col justify-center items-start w-full h-fit py-5 rounded-xl relative">
      {/* Swiper */}
      <div className="flex overflow-x-hidden w-full">
        <Swiper
          spaceBetween={10}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            200: {
              slidesPerView: 2,
            },
            300: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 4,
            },
            660: {
              slidesPerView: 6,
            },
            900: {
              slidesPerView: 7,
            },
            1240: {
              slidesPerView: 10,
            },
            1604: {
              slidesPerView: 13,
            },
          }}
          className=""
        >
          {categoriesColData.map((item) => (
            <SwiperSlide key={item.id} className="">
              <div
                onClick={() => getData(item.id)}
                className="w-[100px] h-[100px] my-2 rounded-full bg-white border-secondery border hover:shadow-lg hover:shadow-secondery/10 flex flex-col justify-center items-center p-4 cursor-pointer hover:bg-secondery/10 duration-200 hover:-translate-y-2"
              >
                {/* then icon here */}
                <p className="text-base">{item.icon}</p>
                <h1 className="text-zinck-700 text-xl text-center w-full">
                  {item.name}{" "}
                </h1>
              </div>
            </SwiperSlide>
          ))}

          <button className="custom-next hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-secondery/50 hover:bg-secondery/80 text-white px-4 aspect-square rounded-full shadow-lg hover:bg-blue-500">
            &#10095;
          </button>
          <button className="custom-prev hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-secondery/50 hover:bg-secondery/80 text-white px-4 aspect-square rounded-full shadow-lg hover:bg-blue-500">
            &#10094;
          </button>
        </Swiper>
      </div>

      {/* content */}

      <div className="w-full h-fit my-5">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl text-zinc-700 underline">الوجبات</h1>
          {/* search inp */}
          <div className=" relative">
            <Input
              type="text"
              placeholder="إبحث على ما تشتهي:)"
              classname="p-3 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-secondery focus:border-transparent"
            />
            {/* search icon */}
            <Button
              classname="absolute top-1/2 left-2 transform -translate-y-1/2"
              type="button"
              icon={<LuSearch />}
              iconClass="text-secondery"
            />
          </div>
        </div>

        {/* foods cart */}
        <div className="grid grid-cols-1 gap-7 mt-4 md:grid-cols-3 lg:grid-cols-4">
          {dataCart.map((item) => (
            <FoodCart key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
