import React from "react";

const GeneralBanner = () => {
  return (
    <div
      className="w-full min-h-[30vw] bg-no-repeat rounded-2xl bg-center bg-cover"
      style={{ backgroundImage: "url(/assets/banner.svg)" }}
    ></div>
  );
};

export default GeneralBanner;
