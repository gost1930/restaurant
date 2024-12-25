import React from "react";
import Image from "next/image";
// components
import { Select, Button } from "../index";
// icons
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { LuMapPinned } from "react-icons/lu";
import { FaRegFilePdf } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { IoRestaurantOutline } from "react-icons/io5";
import Link from "next/link";

interface Link {
  id: number;
  name: string;
  href: string;
  class: string;
  icon: React.ReactNode;
}

interface Language {
  id: number;
  label: string;
  value: string;
}

const NavBar: React.FC = () => {
  const links: Link[] = [
    { id: 1, name: "اللغة", href: "#", class: "hidden md:flex", icon: "" },
    {
      id: 2,
      name: "تسجيل الدخول",
      href: "#",
      class: "md:border-x",
      icon: <FaRegUser />,
    },
    {
      id: 3,
      name: "سلتك",
      href: "#",
      class: "hidden md:flex",
      icon: <FiShoppingCart />,
    },
  ];

  const languages: Language[] = [
    { id: 1, label: "العربية", value: "ar" },
    { id: 2, label: "English", value: "en" },
  ];

  interface NavBLink {
    id: number;
    name: string;
    href: string;
    class: string;
    icon: React.ReactNode;
  }
  const navBLinks: NavBLink[] = [
    {
      id: 1,
      name: "الرئيسية",
      href: "/",
      class: "",
      icon: <IoRestaurantOutline />,
    },
    { id: 2, name: "فروعنا", href: "/branches", class: "", icon: <LuMapPinned /> },
    {
      id: 3,
      name: "الشروط والأحكام",
      href: "/",
      class: "",
      icon: <FaRegFilePdf />,
    },
    { id: 4, name: "تواصل معنا", href: "/", class: "", icon: <BsChatDots /> },
  ];

  return (
    <div className="flex flex-col gap-y-2">
      {/* nav top */}
      <div className="flex flex-col md:flex-row justify-between w-full h-fit">
        {/* logo */}
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={200}
          height={200}
          className="bg-primary rounded-b-3xl px-3 py-2"
          priority={true}
        />

        {/* nav links */}
        <div className="flex justify-between w-full md:w-fit">
          <div className="flex justify-between md:justify-normal w-full ml-3 items-center mt-5">
            {links.map((link) =>
              link.id === 1 ? (
                <Select
                  key={link.id}
                  name="language"
                  id="language"
                  options={languages}
                  classname={`border-0 bg-transparent text-gray-700 text-xl mx-2 ${link.class}`}
                />
              ) : (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`flex justify-between gap-x-3 text-gray-700 text-xl hover:text-gray-900 ${link.class} border-gray-500 px-5 min-w-fit`}
                  aria-label={link.name}
                >
                  {link.name} <span>{link.icon}</span>
                </Link>
              )
            )}

            {/* btn primary */}
            <Link href="/order-now">
              <Button
                text="تسوق الان"
                type="button"
                classname="rounded mx-3 text-white min-w-fit bg-secondery text-xl px-4 py-2"
                icon={<MdFoodBank />}
                iconClass="text-xl"
              />
            </Link>
            {/* mobile nav */}
            <FaBarsStaggered className="md:hidden text-3xl text-gray-700" />
          </div>
        </div>
      </div>
      {/* nab bottom */}
      <div className="hidden lg:flex justify-between gap-x-3 bg-primary p-3 rounded-2xl items-center mb-3">
        {navBLinks.map((link, index) => (
          <React.Fragment key={link.id}>
            <Link
              href={link.href}
              className={`flex items-center justify-between gap-x-5 text-white text-xl hover:text-secondery ${link.class}`}
            >
              {link.name} <span>{link.icon}</span>
            </Link>
            {index !== navBLinks.length - 1 && (
              <span className="text-white text-xl">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
