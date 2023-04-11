import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import PlayButton from "../atoms/PlayButton";
import Link from "next/link";

interface EventData {
  title: string;
  description?: string;
  thumbnail: any;
  video?: any;
  stage?: string;
  date?: any;
  upcoming?: boolean;
  city?: string;
  slug?: string;
}

type Props = {
  concert: EventData;
};

const BillboardData = ({ concert }: Props) => {
  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[30%]"
        poster={concert.thumbnail.url}
        src={concert.video}
      ></video>
      <div className="absolute top-[25%] md:top-[30%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[40%] lg:text-6xl font-bold drop-shadow-lg">
          {concert.title}
        </p>
        <p className="text-white text-[8px] md:text-lg md:mt-4 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xlS">
          {concert.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId="test" />
          <Link href={`/concert/${concert.slug}`}>
            <button
              className="
            bg-white/30
            text-white
            hover:bg-white/40
            backdrop-blur-sm 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
              gap-1
            "
            >
              <AiOutlineInfoCircle className="w-4 md:w-7 mt-[1px]" />
              More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BillboardData;
