import Seo from "@/components/Seo";
import Header from "@/components/organisms/Header";
import React from "react";

type Props = {};

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

import { api } from "@/lib/graphql/api";
import { CONCERT, QUERY, SLUGLIST } from "@/lib/graphql/query";
import SlugHeading, { SingleEvent } from "@/components/molecules/SlugHeading";
import Stage from "@/components/organisms/Stage";
import PlayButton from "@/components/atoms/PlayButton";

export async function getStaticPaths() {
  const { concerts }: any = await api.request(SLUGLIST);
  return {
    paths: concerts.map((concert: any) => ({
      params: { slug: concert.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const slug: string = params.slug;
  const data: any = await api.request(CONCERT, { slug });
  const concert: string = data.concert;
  const { concerts }: any = await api.request(QUERY);
  return {
    props: {
      concerts,
      concert,
    },
  };
}

const Concert = ({ concert }: SingleEvent) => {
  SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);
  return (
    <>
      <Seo
        metaTitle={`PK Entertainment | ${concert.title}`}
        metaDesc="PK Entertainment"
        metaKey="Event Organizer Promotor"
      />
      <Header />
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 1,
        }}
      >
        <SwiperSlide>
          <SlugHeading
            concert={{
              title: concert.title,
              thumbnail: concert.thumbnail,
              eventStage: concert.eventStage,
              description: concert.description,
              city: concert.city,
              date: concert.date,
            }}
          />
        </SwiperSlide>
      </Swiper>

      <div className="hidden lg:block absolute w-full top-[60%] md:top-[50%] text-white z-50">
        <div className="lg:w-[1366px] md:w-[720px] w-[430px] mx-auto h-auto rounded-[50px] overflow-hidden bg-zinc-400/30 backdrop-blur-xl">
          <div className="flex lg:flex-row flex-col p-8 w-full items-center">
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

      <div className="">
        <Stage
          concert={{
            title: "Main Stage Layout",
            stageLayout: concert.stageLayout,
            date: concert.date,
            city: concert.city,
          }}
        />
      </div>
    </>
  );
};

export default Concert;
