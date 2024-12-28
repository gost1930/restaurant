"use client";
import React, { useState } from "react";
import Link from "next/link";
// components
import { Button, Input } from "@/components";
// icons
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center md:w-1/2 w-full px-2 md:p-4 gap-y-10 md:mx-10">
      <h1 className="text-3xl font-bold text-center">أنشئ حساب جديد</h1>
      <form className="flex flex-col gap-4 w-full">
        <div className="w-full gap-y-3">
          <label htmlFor="" className="text-xl text-zinck-700">
            الإسم الكامل
          </label>
          <Input
            type="text"
            placeholder="إسمك الكامل"
            classname="p-3 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-secondery focus:border-transparent"
          />
        </div>
        <div className="w-full gap-y-3">
          <label htmlFor="" className="text-xl text-zinck-700">
            رقم الهاتف
          </label>
          <Input
            type="text"
            placeholder="رقم الهاتف"
            classname="p-3 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-secondery focus:border-transparent"
          />
        </div>
        <div className="w-full gap-y-2 flex flex-col">
          <label htmlFor="" className="text-xl text-zinck-700">
            كلمة المرور
          </label>
          <div className="w-full relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="كلمة المرور"
              classname="p-3 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-secondery focus:border-transparent"
            />
            <button
              type="button"
              className="absolute top-1/2 left-2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaRegEyeSlash size={20} />
              ) : (
                <FaRegEye size={20} />
              )}
            </button>
          </div>
          <label htmlFor="" className="text-xl text-zinck-700">
            تأكيد كلمة المرور
          </label>
          <div className="w-full relative">
            <Input
              type={showPassword2 ? "text" : "password"}
              placeholder=" تأكيد  كلمة المرور"
              classname="p-3 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-secondery focus:border-transparent"
            />
            <button
              type="button"
              className="absolute top-1/2 left-2 transform -translate-y-1/2"
              onClick={() => setShowPassword2(!showPassword2)}
            >
              {showPassword2 ? (
                <FaRegEyeSlash size={20} />
              ) : (
                <FaRegEye size={20} />
              )}
            </button>
          </div>
        </div>
        <Button
          type="submit"
          text="تسجيل الدخول"
          classname="bg-primary text-xl py-3 text-white w-full hover:bg-primary/90 text-center rounded-xl hover:-translate-y-2 duration-300 hover:shadow-lg hover:shadow-primary mt-10"
        />
      </form>

      <div className="flex flex-col gap-2 w-full">
        <span className="text-xl text-zinck-700">لديك حساب؟</span>
        <Button
          type="button"
          text="مرحبا بعودتك"
          classname="bg-secondery/10 text-xl py-3 text-secondery w-full hover:bg-secondery/20 text-center rounded-xl hover:-translate-y-2 duration-300 hover:shadow-lg hover:shadow-secondery border border-secondery"
        />
      </div>
    </div>
  );
};

export default FormRegister;
