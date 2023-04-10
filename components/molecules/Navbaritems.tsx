import React from "react";
import Items from "../atoms/Items";

export interface menuList {
  label: string;
  link: string;
}

interface menus {
  data: menuList[];
}

const Navbaritems = ({ data }: menus) => {
  return (
    <ul className="flex gap-7">
      {data.map((v, i) => (
        <Items key={i} label={v.label} link={v.link} />
      ))}
    </ul>
  );
};

export default Navbaritems;
