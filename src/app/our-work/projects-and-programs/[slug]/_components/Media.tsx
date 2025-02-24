"use client";
import { TMedia } from "@/api/type";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import MediaCard from "@/components/cards/MediaCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  media: TMedia[];
};
const Media = ({ media }: Props) => {
  const mediaArrayLength = media.length;
  return (
    <div className="~pt-[5rem]/[7.53rem] overflow-hidden ">
      <TextStaggerAnimation
        text="In the Media"
        className="text-center font-playFair  ~leading-[2.6rem]/[3.3rem] tracking-[-.04rem] ~text-h4/h2 text-gray80"
      />
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full container mx-auto relative ~pt-[2.5rem]/[5rem] ~pb-[3.5rem]/0 ~px-0/[5.8rem] "
      >
        <CarouselContent className=" w-full ">
          {media?.map((media, i) => (
            <CarouselItem
              key={i}
              className="sm:!basis-1/2 lg:!basis-1/2 xl:!basis-1/3 justify-center ~px-[1.25rem]/[2rem] ~gap-[1.25rem]/[4.5rem]  flex  "
            >
              <CardAnimation delay={0.2} index={i}>
                <MediaCard
                  mediaArrayLength={mediaArrayLength}
                  key={i}
                  image={media?.image}
                  index={i}
                  link={media?.link}
                  title={media?.title}
                  desc={media?.description}
                  ddmmyy={media?.date}
                />
              </CardAnimation>
            </CarouselItem>
          ))}
        </CarouselContent>
        {mediaArrayLength != 0 && (
          <div className="absolute flex z-10 gap-[1.25rem] w-full md:w-auto justify-center md:justify-normal bottom-[0rem] md:bottom-auto md:top-[-2.7rem] md:~right-[1.25rem]/[7.8rem] ">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        )}
      </Carousel>
    </div>
  );
};

export default Media;
