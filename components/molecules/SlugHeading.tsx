import React from "react";
import PlayButton from "../atoms/PlayButton";
import Image from "next/image";

interface EventData {
  title: string;
  description?: string;
  thumbnail: any;
  video?: any;
  eventStage?: string;
  date?: any;
  upcoming?: boolean;
  city?: string;
  slug?: string;
  stageLayout?: any;
}

export type SingleEvent = {
  concert: EventData;
};

const SlugHeading = ({ concert }: SingleEvent) => {
  return (
    <>
      <div className="relative h-[56.25vw]">
        <video
          className="w-full h-[56.25vw] md:h-[40vw] lg:h-[40vw] object-cover brightness-[30%] rounded-b-[100px]"
          poster={concert.thumbnail.url}
          src={concert.video}
        ></video>
        <div className="absolute w-full top-[60%] md:top-[50%] text-white">
          <div className="lg:w-[1366px] md:w-[720px] w-[430px] mx-auto h-auto rounded-[50px] overflow-hidden bg-zinc-400/30 backdrop-blur-xl">
            <div className="flex flex-row p-8 w-full items-center">
              <div className="w-3/12 h-auto flex justify-center self-end">
                <figure className="w-64 h-64 rounded-full bg-zinc-400/10 backdrop-blur-sxl"></figure>
              </div>
              <div className="w-9/12 h-auto flex flex-col gap-2">
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
    </>
  );
};

export default SlugHeading;
