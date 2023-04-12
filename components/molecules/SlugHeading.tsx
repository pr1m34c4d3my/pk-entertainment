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
      </div>
    </>
  );
};

export default SlugHeading;
