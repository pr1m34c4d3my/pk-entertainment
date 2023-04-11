import Image from "next/image";
import React from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";

interface EventCardProps {
  data: Record<string, any>;
}

const EventCard: React.FC<EventCardProps> = ({ data }) => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <Image
        className="w-full
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          group-hover:opacity-90
          sm:group-hover:opacity-0
          delay-100
          h-[20vw]
          md:h-[12vw]
          lg:h-[12vw]
          rounded-xl
          "
        src={data.thumbnail.url}
        alt="Thumbnail"
        width={500}
        height={10}
      />
      <div
        className="
      opacity-0
      absolute
      top-0
      transition
      duration-200
      ease-in
      z-10
      invisible
      sm:visible
      delay-100
      w-full
      scale-0
      group-hover:scale-100
      group-hover:-translate-y-[6vw]
      
      group-hover:opacity-100
      "
      >
        <Image
          className="w-full
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          delay-100
          h-[12vw]
          rounded-t-md
          "
          src={data.thumbnail.url}
          alt="Thumbnail"
          width={500}
          height={10}
        />
        <div
          className="
        z-10
        bg-zinc-800
        p-2
        lg:p-4
        absolute
        w-full
        transition
        shadow-md
        rounded-b-md
        "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                cursor-pointer
                w-6
                h-6
                lg:w-10
                lg:h-10
                bg-white
                rounded-full
                flex
                items-center
                justify-center
                transition
                hover:bg-neutral-300
                "
              onClick={() => {}}
            >
              <AiOutlineInfoCircle size={30} />
            </div>
            <p className="text-white text-[14px] w-[150px] font-bold">
              {data.title}
            </p>
          </div>

          <p className=" text-white font-semibold mt-4 text-[10px] lg:text-[14px]">
            {data.date}
          </p>
          <p className=" text-white font-semibold mt-2 text-[12px] lg:text-[16px]">
            {data.eventStage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
