// "use client";
// import { useRef } from "react";

// import NewsCard from "@/components/cards/NewsCard";
// import RightSlickArrowSvg from "@/components/svg/RightSlickArrowSvg";
// import LeftSlickArrowSvg from "@/components/svg/LeftSlickArrowSvg";
// import OutlineButton from "@/components/buttons/OutlineButton";

// const newsData = [
//   {
//     src: "/images/news/newsDemo.png",
//     text: "An ugam is a starting point from where river begins.",
//   },
//   {
//     src: "/images/news/newsDemo.png",
//     text: "An ugam is a starting point from where river begins.",
//   },
//   {
//     src: "/images/news/newsDemo.png",
//     text: "An ugam is a starting point from where river begins.",
//   },
// ];
// const CarouselNews = () => {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const previous = () => {
//     if (carouselRef.current) {
//       const card = carouselRef.current.querySelector("div");
//       if (card) {
//         const cardWidth = card.offsetWidth;
//         // console.log("cardWidth::", cardWidth);
//         carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
//       }
//     }
//   };
//   const next = () => {
//     if (carouselRef.current) {
//       const card = carouselRef.current.querySelector("div");
//       if (card) {
//         const cardWidth = card.offsetWidth;
//         carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
//       }
//     }
//   };
//   return (
//     <div className="hidden md:flex flex-col relative items-center">
//       <div className="absolute top-[-17rem] right-[7rem] hidden   lg:flex justify-center gap-[1.25rem] ">
//         <button
//           onClick={previous}
//           className="  text-white leading-[22.4px] font-inter bg-darkPurple rounded-tl-3xl rounded-bl-3xl rounded-tr-xl rounded-br-xl py-[1.15rem] px-[0.92rem]"
//         >
//           <LeftSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
//         </button>
//         <button
//           onClick={next}
//           className=" text-white leading-[22.4px] font-inter bg-darkPurple rounded-tr-3xl rounded-br-3xl rounded-tl-xl rounded-bl-xl py-[1.15rem] px-[0.92rem]"
//         >
//           <RightSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
//         </button>
//       </div>
//       <div
//         ref={carouselRef}
//         className="~px-[1.25rem]/0 flex gap-[1.25rem] pt-[2.5rem] snap-x snap-mandatory overflow-x-scroll no-scrollbar "
//       >
//         {newsData.map((items, i) => (
//           <NewsCard key={i} src={items.src} text={items.text} />
//         ))}
//       </div>
//       <OutlineButton
//         buttonClassName="!rounded-full !w-fit mt-[2.5rem]"
//         className=" !px-[1.75rem]  py-[0.75rem] "
//         text="Read More"
//       />
//       <div className=" pt-[2rem] flex justify-center lg:hidden gap-[1.25rem] ">
//         <button
//           onClick={previous}
//           className="  text-white leading-[22.4px] font-inter bg-darkPurple rounded-tl-3xl rounded-bl-3xl rounded-tr-xl rounded-br-xl py-[1.15rem] px-[0.92rem]"
//         >
//           <LeftSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
//         </button>
//         <button
//           onClick={next}
//           className=" text-white leading-[22.4px] font-inter bg-darkPurple rounded-tr-3xl rounded-br-3xl rounded-tl-xl rounded-bl-xl py-[1.15rem] px-[0.92rem]"
//         >
//           <RightSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
//         </button>
//       </div>
//     </div>
//   );
// };
// export default CarouselNews;
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
];
type Props = {
  newsArray: THomePageNewsInTheMedia[];
};
export function CarouselNews({ newsArray }: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full container mx-auto relative"
    >
      <CarouselContent className="~px-[1.25rem] w-fit ">
        {newsArray.map((items, i) => (
          <CarouselItem
            key={i}
            className="md:!basis-1/2 lg:!basis-1/2 xl:!basis-1/3 justify-center gap-[1.25rem] flex  pt-[2.5rem]"
          >
            <NewsCard src={items.image} text={items.description} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-[-5rem] lg:bottom-auto w-full  lg:top-[-15rem] lg:~right-0/[5rem] flex justify-center lg:justify-end gap-[1.25rem] ">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
