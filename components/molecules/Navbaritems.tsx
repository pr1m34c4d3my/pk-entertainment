import React, { useCallback, useState } from "react";
import Items from "../atoms/Items";
import Link from "next/link";

import { BsChevronDown } from "react-icons/bs";
import CompanyMenuChild from "../atoms/CompanyMenuChild";

export interface menuList {
  label: string;
  link: string;
}

interface menus {
  data: menuList[];
}

const Navbaritems = () => {
  const [showCompanyChild, setShowCompanyChild] = useState(false);
  const [showEventsChild, setShowEventsChild] = useState(false);

  const companyToggle = useCallback(() => {
    setShowCompanyChild((current) => !current);
  }, []);

  const eventsToggle = useCallback(() => {
    setShowEventsChild((current) => !current);
  }, []);

  return (
    <ul className="flex gap-7">
      <li className="text-white font-medium cursor-pointer transition">
        <Link className="hover:text-gray-300 " href="/">
          Home
        </Link>
      </li>
      <li className="text-white font-medium cursor-pointer transition relative group">
        <Link
          className="hover:text-gray-300 flex flex-row gap-2 items-center"
          href=""
          onClick={companyToggle}
        >
          <p>Company</p>
          <BsChevronDown
            className={`text-white font-medium mt-[2px] transition `}
          />
        </Link>
        <ul className="bg-black hidden absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 group-hover:flex group-hover:flex-col gap-2 w-[150%]">
          <li className="px-3 text-center text-white hover:underline group-hover:flex">
            <Link href="">About Us</Link>
          </li>
          <li className="px-3 text-center text-white hover:underline group-hover:flex">
            <Link href="">Our Team</Link>
          </li>
          <li className="px-3 text-center text-white hover:underline group-hover:flex">
            <Link href="">Our Brands</Link>
          </li>
          <li className="px-3 text-center text-white hover:underline group-hover:flex">
            <Link href="">Clients</Link>
          </li>
        </ul>
        {/*
        <CompanyMenuChild visible={showCompanyChild} />
         */}
      </li>
    </ul>
  );
};

export default Navbaritems;
