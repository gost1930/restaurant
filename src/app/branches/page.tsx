import React from "react";
import { AllBranches, GeneralBanner } from "@/containers";
const page = () => {
  return (
    <div className="">
      {/* banner */}
      <GeneralBanner />
      {/* all branch */}
      <AllBranches />
    </div>
  );
};

export default page;