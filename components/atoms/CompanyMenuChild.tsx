import Link from "next/link";
import React from "react";

type Props = {};

interface MenuChild {
  visible?: boolean;
}

const CompanyMenuChild = ({ visible }: MenuChild) => {
  if (!visible) {
    return null;
  }
  return (
    <ul className="bg-black absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex w-[150%]">
      <li className="px-3 text-center text-white hover:underline">
        <Link href="#">About Us</Link>
      </li>
      <li className="px-3 text-center text-white hover:underline">
        <Link href="#">Our Team</Link>
      </li>
      <li className="px-3 text-center text-white hover:underline">
        <Link href="#">Our Brands</Link>
      </li>
    </ul>
  );
};

export default CompanyMenuChild;
