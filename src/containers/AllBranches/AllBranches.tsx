import React from "react";
import { Select , Cart } from "@/components";
import { branches, city } from "@/utils/alldata";


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
      <div className="grid grid-cols-1 gap-7 mt-4 md:grid-cols-2 lg:grid-cols-3">
        {/* card */}
        {branches.map((item, index) => (
          <Cart key={index} item={item}  />
        ))}
      </div>
    </div>
  );
};

export default AllBranches;
