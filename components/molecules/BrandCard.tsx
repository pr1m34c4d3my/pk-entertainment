import Image from "next/image";
import React from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";

interface BrandCardProps {
  data: Record<string, any>;
}

const BrandCard = ({ data }: BrandCardProps) => {
  return (
    <div className="group bg-zinc-900 col-span hover:scale-100 scale-[95%] transition relative h-[12vw]">
      <Image
        className="w-full
              cursor-pointer
              object-cover
              transition
              duration
              shadow-xl
              delay-100
              h-[16vw]
              rounded-t-xl
              "
        src={data.thumbnail.url}
        alt="Thumbnail"
        width={500}
        height={10}
      />
      <div className="bg-zinc-800/50 backdrop-blur-sm w-full lg:h-[6vw] md:h-[5vw] lg:p-3 h-[12vw] p-2 rounded-b-xl shadow-xl overflow-hidden">
        <p className="text-white font-semibold lg:text-[16px] text-[6px]">
          {data.title}
        </p>
        <p className="text-white font-semibold lg:text-[16px] text-[10px]">
          {data.date}
        </p>
      </div>
    </div>
  );
};

export default BrandCard;
