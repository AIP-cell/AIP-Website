import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NewsCard from "@/components/cards/NewsCard";
import { THomePageNewsInTheMedia } from "@/api/type";
import CardAnimation from "@/components/animations/CardAnimation";

type Props = {
  newsArray: THomePageNewsInTheMedia[];
};
export function CarouselNews({ newsArray }: Props) {
  const length = newsArray.length;
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full container mx-auto relative "
    >
      <CarouselContent className=" w-full ">
        {newsArray.map((items, i) => (
          <CarouselItem
            key={i}
            className="md:!basis-1/2 lg:!basis-1/2 xl:!basis-1/3 justify-center px-2 gap-[1.25rem] flex  pt-[2.5rem]"
          >
            {/* <CardAnimation delay={0.2} index={i}> */}
              <NewsCard src={items.image} text={items.description} index={i} />
            {/* </CardAnimation> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      {length != 0 && (
        <div className="absolute bottom-[-5rem] lg:bottom-auto w-full  lg:top-[-15rem] lg:~right-0/[5rem] flex justify-center lg:justify-end gap-[1.25rem] ">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      )}
    </Carousel>
  );
}
