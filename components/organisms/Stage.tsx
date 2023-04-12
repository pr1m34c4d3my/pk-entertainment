import { isEmpty } from "lodash";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsChevronCompactRight } from "react-icons/bs";

interface EventData {
  title: string;
  description?: string;
  thumbnail?: any;
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

const Stage = ({ concert }: SingleEvent) => {
  if (isEmpty(concert)) {
    return null;
  }
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8 max-w-[1600px] mx-auto">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-[1px] h-[25px] md:h-[30px] lg:h-[40px] bg-white/30 backdrop-blur-md"></div>
            <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
              {concert.title}
            </p>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row md:flex-row flex-col w-full mx-auto justify-center gap-20 items-center ">
        <div className="lg:w-4/12 w-full flex justify-center">
          <figure className="lg:w-12/12 w-12/12 ">
            <Image
              className="w-full"
              src={concert.stageLayout.url}
              alt="Stage"
              width={1000}
              height={400}
            />
          </figure>
        </div>
        <div className="lg:w-6/12 w-full h-auto flex flex-col gap-6 bg-zinc-800  rounded-xl overflow-hidden shadow-xl">
          <div className="flex justify-between w-full">
            <div className="bg-zinc-700 p-4 rounded-bl-lg cursor-pointer hover:bg-zinc-500 transition w-full">
              <p className="text-white text-center">Tickets</p>
            </div>
            <div className="bg-zinc-700 py-4 px-4 rounded-br-lg cursor-pointer hover:bg-zinc-500 transition w-full">
              <p className="text-white text-center">Information</p>
            </div>
          </div>
          <div className="p-6 flex flex-col gap-7">
            <div className="flex flex-row items-center justify-between ">
              <div className="flex gap-10">
                <div className="flex flex-col">
                  <p className="text-white font-semibold">{concert.date}</p>
                  <p className="text-zinc-300 font-light">{concert.city}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-white font-semibold">Tribune</p>
                  <p className="text-zinc-300 font-light">Aisle Seat</p>
                </div>
              </div>
              <div className="flex gap-6">
                <p className="text-white font-semibold text-[20px]">
                  Rp 750.000
                </p>
                <BsChevronCompactRight className="text-white" size={30} />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between ">
              <div className="flex gap-10">
                <div className="flex flex-col">
                  <p className="text-white font-semibold">{concert.date}</p>
                  <p className="text-zinc-300 font-light">{concert.city}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-white font-semibold">Festival</p>
                  <p className="text-zinc-300 font-light">Aisle Seat</p>
                </div>
              </div>
              <div className="flex gap-6">
                <p className="text-white font-semibold text-[20px]">
                  Rp 1.500.000
                </p>
                <BsChevronCompactRight className="text-white" size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage;
