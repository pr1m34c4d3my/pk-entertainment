import React from "react";
import { SingleEvent } from "./Stage";
import PlayButton from "../atoms/PlayButton";
import Image from "next/image";

const ArtistInfo = ({ concert }: SingleEvent) => {
  return (
    <div className=" w-ful lg:pb-96 pb-48 -mt-[30%] relative">
      <div className="hidden lg:block absolute w-full top-0 text-white z-50">
        <div className=" md:w-[80%]  mx-auto h-auto rounded-[50px] overflow-hidden bg-zinc-400/30 backdrop-blur-xl">
          <div className="flex lg:flex-row flex-col gap-6 p-8 w-full items-center">
            <div className="w-4/12 h-auto flex justify-center self-end">
              <figure className="w-64 h-64 rounded-full bg-zinc-400/10 backdrop-blur-sxl overflow-hidden relative">
                <Image
                  src=""
                  alt="Profile Band/Artis Picture"
                  width={1000}
                  height={100}
                  className="w-[150%] absolute bottom-10"
                />
              </figure>
            </div>
            <div className="w-8/12 h-auto flex flex-col gap-2">
              <div>
                <p className="font-bold text-4xl">{concert.title}</p>
              </div>
              <div className="w-full h-1 bg-zinc-500/20 rounded-full"></div>
              <div>
                <p>{concert.date}</p>
              </div>
              <div>
                <p className="font-medium text-xl">
                  {concert.eventStage} <span className="font-light">|</span>{" "}
                  {concert.city}
                </p>
              </div>
              <div>
                <p className="font-normal text-zinc-300">
                  {concert.description}
                </p>
              </div>
              <div className="text-black mt-3">
                <PlayButton movieId="test" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
