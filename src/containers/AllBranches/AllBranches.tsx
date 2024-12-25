import { Select } from "@/components";
import { branches, city } from "@/utils/alldata";
import React from "react";
import Image from "next/image";
// icons
import { FaPhoneAlt } from "react-icons/fa";
import { LuMapPinned } from "react-icons/lu";

const AllBranches = () => {
  return (
    <div className="w-full h-fit mt-10">
      {/* filter by city */}
      <div className="flex">
        <h1 className="text-zinc-700 text-2xl">تصنيف حسب :</h1>
        <Select
          name="city"
          id="city"
          options={city}
          classname="border-0 bg-transparent text-zinc-700 text-xl mx-2"
        ></Select>
      </div>
      <hr className="border-zinc-400 border" />

      {/* branches */}
      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
        {/* card */}
        {branches.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center p-4 shadow hover:-translate-y-3 hover:shadow-xl duration-300 rounded-2xl bg-white"
          >
            <Image
              src="/assets/banner.svg" // استبدل هذا بمسار الصورة الفعلي
              alt="فرع الروابي"
              width={200}
              height={200}
              className="rounded-2xl w-full h-40 object-cover"
            />
            <h2 className="text-xl font-bold text-primary text-center my-2">
              {item.title}
            </h2>
            <p className="text-lg text-gray-600 text-center">{item.map}</p>

            {/* Timing & Status */}
            <div className="flex items-center justify-evenly mt-4">
              <p className="text-sm text-gray-500">23:50 - 11:00</p>
              <span
                className={`px-3 py-1 text-lg font-semibold ${
                  item.status === "OPEN"
                    ? "text-green-800 bg-green-200"
                    : "text-white bg-red-500"
                }  rounded-full`}
              >
                {item.status === "OPEN" ? "مفتوح" : "مغلق"}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row-reverse justify-between mt-6">
              <button className="flex items-center justify-center gap-x-2 w-1/2 px-3 py-2 text-sm font-medium text-orange-700 bg-orange-100 border border-orange-400 rounded-l-lg hover:bg-orange-200">
                <LuMapPinned className="w-5 h-5 mr-2" />
                الموقع
              </button>
              <button className="flex items-center justify-center gap-x-2 w-1/2 px-3 py-2 text-sm font-medium text-white bg-orange-500 rounded-r-lg hover:bg-orange-600">
                <FaPhoneAlt className="w-5 h-5 mr-2" />
                الاتصال
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBranches;
