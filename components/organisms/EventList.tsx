import React from "react";
import { isEmpty } from "lodash";
import Link from "next/link";
import { BsChevronCompactRight } from "react-icons/bs";
import EventCard from "../molecules/EventCard";

interface EventListProps {
  data: Record<string, any>[];
  title: string;
}

const EventList: React.FC<EventListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-[1px] h-[25px] md:h-[30px] lg:h-[40px] bg-white/30 backdrop-blur-md"></div>
            <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
              {title}
            </p>
          </div>
          <Link className="flex gap-2" href="#">
            <p className="text-white text-sm md:text-md lg:text-lg font-light mb-4">
              View All
            </p>
            <BsChevronCompactRight className="text-white lg:mt-[7px] md:mt-[3px] mt-[3px]" />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {data.map((event, index) => (
            <EventCard key={index} data={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList;
