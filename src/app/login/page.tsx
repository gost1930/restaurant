import React from "react";
import { FormLogin } from "@/containers";
import { MainLogin } from "@/components";

const page = () => {
  return (
    <>
      <MainLogin>
        <FormLogin />
      </MainLogin>
    </>
  );
};

export default page;
