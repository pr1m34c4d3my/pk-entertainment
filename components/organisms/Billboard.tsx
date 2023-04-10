import { EventData } from "@/lib/EventsData";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BillboardData from "../molecules/BillboardData";

export interface Events {
  data: EventData[];
}

const Billboard = ({ data }: Events) => {
  SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);
  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {data.map((v, i) => {
          return (
            <>
              {v.upcoming == true ? (
                <SwiperSlide key={i}>
                  <BillboardData
                    title={v.title}
                    thumbnail={v.thumbnail}
                    description={v.description}
                  />
                </SwiperSlide>
              ) : null}
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default Billboard;
