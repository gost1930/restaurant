import React from "react";
import Image from "next/image";
import Link from "next/link";
// icons
import { FaPhoneAlt } from "react-icons/fa";
import { LuMapPinned } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";

interface CartComp {
  item: any;
  actionBtn?: boolean;
  linkBtn?: boolean;
  className?:string;
}
const Cart = ({ item, actionBtn , linkBtn , className }: CartComp) => {
  return (
    <div className={`flex flex-col justify-center  p-4 shadow hover:-translate-y-3 hover:shadow-xl duration-300 rounded-2xl bg-white ${className}`}>
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
        <span
          className={`px-3 py-1  font-semibold ${
            item.status === "OPEN"
              ? "text-green-800 bg-green-200"
              : "text-white bg-red-500"
          }  rounded-full`}
        >
          {item.status === "OPEN" ? "مفتوح" : "مغلق"}
        </span>
        <p className="text-sm text-gray-500">11:00:00 - 23:50:00</p>
      </div>

      {/* Action Buttons */}
      {actionBtn && (
        <div className="flex flex-row-reverse justify-between mt-6">
          <button className="flex items-center justify-center gap-x-2 w-1/2 px-3 py-2 text-sm font-medium text-secondery bg-secondery/10 border border-secondery rounded-l-lg hover:bg-secondery/30">
            <LuMapPinned className="w-5 h-5 mr-2" />
            الموقع
          </button>
          <button className="flex items-center justify-center gap-x-2 w-1/2 px-3 py-2 text-sm font-medium text-white bg-secondery rounded-r-lg hover:bg-secondery">
            <FaPhoneAlt className="w-5 h-5 mr-2" />
            الاتصال
          </button>
        </div>
      )}
      {linkBtn && (
        <Link
          href="/menu"
          className="flex items-center justify-center gap-x-2 w-full px-3 py-2 text-sm font-medium text-white bg-secondery rounded-lg hover:bg-secondery"
        >
          عرض الفرع
          <span className="group-hover:-translate-x-1 duration-300">
            <IoIosArrowBack />
          </span>
        </Link>
      )}
    </div>
  );
};

export default Cart;
