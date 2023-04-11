import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  link: string;
};

const Items = (props: Props) => {
  return (
    <li className="text-white font-medium cursor-pointer hover:text-gray-300 transition">
      <Link href={props.link}>{props.label}</Link>
    </li>
  );
};

export default Items;
