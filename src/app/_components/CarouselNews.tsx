import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NewsCard from "@/components/cards/NewsCard";

const newsData = [
  {
    src: "/images/news/newsDemo.png",
    text: "An ugam is a starting point from where river begins.",
  },
  {
    src: "/images/news/newsDemo.png",
    text: "An ugam is a starting point from where river begins.",
  },
  {
    src: "/images/news/newsDemo.png",
    text: "An ugam is a starting point from where river begins.",
  },
  {
    src: "/images/news/newsDemo.png",
    text: "An ugam is a starting point from where river begins.",
  },
];
const CarouselNews = () => {
  return (
    // tw-max-w-sm
    <Carousel
      opts={{
        align: "start",
      }}
      className="tw-relative tw-w-full tw-flex tw-justify-center  md:container tw-mx-auto"
    >
      <CarouselContent>
        <div className="~tw-pl-[2rem]/0 tw-flex  tw-pt-[2.5rem]  md:tw-overflow-x-auto no-scrollbar ">
          {newsData.map((items, i) => (
            <CarouselItem
              key={i}
              className="  tw-basis-[80%] sm:tw-basis-[50%]  md:tw-basis-1/3 lg:tw-basis-1/3"
            >
              <NewsCard src={items.src} text={items.text} />
            </CarouselItem>
          ))}
        </div>
      </CarouselContent>
      <CarouselPrevious className=" tw-mr-[3rem] tw-block md:tw-hidden" />
      <CarouselNext className="tw-ml-[3rem] tw-block md:tw-hidden" />
    </Carousel>
  );
};
export default CarouselNews;
