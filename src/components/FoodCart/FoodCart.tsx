import React from "react";
import Image from "next/image";
import { Button } from "@/components";
// icons
import { BsCart2 } from "react-icons/bs";

interface FoodCartProps {
  item: any;
}
const FoodCart = ({ item }: FoodCartProps) => {
  return (
    <div className=" flex flex-col items-center justify-start border border-gray-100 shadow  hover:shadow-xl duration-300 rounded-xl overflow-hidden">
      {/* the image */}
      <img src="/assets/p1.jpeg" alt="" className="w-full h-[250px] object-cover"/>
      <div className="flex gap-x-4">
        {/* the title */}
        <h1 className="text-xl font-bold text-primary">{item.name}</h1>
        {/* the price */}
        <h1 className="text-xl font-bold text-secondery">
          {item.price} ريال
        </h1>
      </div>
      {/* the description */}
      <p className="text-xl text-center text-zinc-700 my-2">
        {item.description}تشكيلة من كباب لحم مع أوصال لحم مطهي بالتتبيلة الخاصة
        والمميزة بطعهما يُقدم مع الطماطم والبصل المشوي
      </p>
      <Button
        type="button"
        text="اضافة للسلة"
        icon={<BsCart2 />}
        iconClass="text-2xl"
        classname="bg-secondery text-white py-3 px-4 mt-3 w-full"
      />
    </div>
  );
};

export default FoodCart;
