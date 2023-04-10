import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { BsChevronDown, BsSearch } from "react-icons/bs";

import defaultUser from "@/public/images/default-blue.png";
import logo from "@/public/images/logo.png";
import Navbaritems from "../molecules/Navbaritems";
import { Menu } from "@/lib/MenuData";
import MobileNav from "../molecules/MobileNav";
import Link from "next/link";

type Props = {};

const TOP_OFFSET = 66;

const Header = (props: Props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <header className="flex w-full z-40 fixed">
      <nav
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 w-full ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <Link href="#"></Link>
        <Image
          className="w-[50%] lg:w-[15%]"
          src={logo}
          alt="PK Entertainment"
        />
        <div className="lg:flex ml-8 gap-7 hidden">
          <Navbaritems data={Menu} />
        </div>
        <div className="lg:hidden flex flex-row items-center gap-7 ml-auto cursor-pointer relative">
          <BsSearch className="text-white" />
          <div onClick={toggleMobileMenu} className="flex gap-2 items-center">
            <p className="text-white font-medium">Browse</p>
            <BsChevronDown
              className={`text-white font-medium mt-[2px] transition ${
                showMobileMenu ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <MobileNav visible={showMobileMenu} />
        </div>

        <div className="hidden lg:flex lg:flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch className="text-white font-bold" />
          </div>
          <div className="text-white">Login</div>
          <div className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              {/* 
                <Image src={defaultUser} alt="user" />
              */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
