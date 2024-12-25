import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYahoo, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
  const pay = [
    "/assets/f1.svg",
    "/assets/f2.svg",
    "/assets/f3.svg",
    "/assets/f4.svg",
  ];
  interface Social {
    id: number;
    href: string;
    icon: React.ReactNode;
    class: string;
  }
  const social: Social[] = [
    { id: 1, href: "#", icon: <FaFacebook />, class: "hover:text-blue-500" },
    { id: 2, href: "#", icon: <FaInstagram />, class: "hover:text-red-500" },
    { id: 3, href: "#", icon: <FaTwitter />, class: "hover:text-blue-400" },
    { id: 4, href: "#", icon: <FaYoutube />, class: "hover:text-red-500" },
    { id: 5, href: "#", icon: <FaYahoo />, class: "hover:text-blue-400" },
  ];
  return (
    <footer className="w-full h-fit p-10 bg-primary mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-fit container mx-auto">
        <div>
          <Link href="/">
            {/* logo */}
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={200}
              height={200}
              className="bg-primary rounded-b-3xl px-3 py-2"
              priority={true}
            />
          </Link>
          <p className="text-white ">
            حقوق الملكية محفوظة لشركة الرومانسية © 2024
          </p>
        </div>

        {/* payments */}
        <div className="flex gap-x-2">
          {pay.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt="payment"
              width={30}
              height={30}
              priority={true}
            />
          ))}
        </div>

        {/* social media */}
        <div className="flex gap-x-2">
          {social.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`text-2xl text-white ${item.class}`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
