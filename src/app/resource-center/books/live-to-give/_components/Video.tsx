"use client";
import React, { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/videoCarousel";
import Image, { StaticImageData } from "next/image";
import event from "@public/images/mediaImage.png";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import { StorageUrl } from "@/utils/BaseUrl";
// import { Tlifevideos } from "@/api/type";
// type Props = {
//   videos: Tlifevideos[];
// };

type TVideo = {
  link: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  linkOrVideo?: "video" | "youtube"; // optional
  video?: string; // optional
};
const videos: TVideo[] = [
  {
    link: "https://www.youtube.com/embed/EtytyJk6DYs?si=6vUXMDWhVkL6p-VV",
    title: "Ashish Dhawan",
    description: "Founder-CEO, The Convergence Foundation",
    image: event,
  },

  {
    link: "https://www.youtube.com/embed/SSI9DaAbtiw?si=4jmWXQLx8tADfw4K",
    title: "Shaveta Sharma-Kukreja",
    description: "CEO and MD, Central Square Foundation",
    image: event,
  },
  {
    link: "https://www.youtube.com/embed/pVcaKEklrcg?si=A4iFzSg-rCjqp-Yd",
    title: "Rahul Ahluwalia",
    description: "Founder-Director, Foundation for Economic Development",
    image: event,
  },
  {
    link: "https://www.youtube.com/embed/WU9G6FSVMws?si=zeGkeyPryjLlfwXW",
    title: "Amitabh Jaipuria",
    description: "CEO, Accelerate Indian Philanthropy",
    image: event,
  },
  {
    link: "https://www.youtube.com/embed/KT12VDBVlhM?si=gnpVgHWzX-Bis9Jn",
    title: "Anuradha Prasad",
    description: "Founder-CEO, India Leaders for Social Sector",
    image: event,
  },
  {
    link: "https://www.youtube.com/embed/1992Zeneyi8?si=IFrHxuuWcGIdKXYM",
    title: "Varun Aggarwal",
    description: "Co-Founder, Foundation for Advancing Science and Technology",
    image: event,
  },
  {
    link: "https://www.youtube.com/embed/lDP4ZuX6Q64?si=fMuC2aHoFSMEIsDF",
    title: "Bhuvana Anand",
    description: "Co-Founder, Prosperiti",
    image: event,
  },
  // {
  //   link: "",
  //   title: "Mohit Beotra",

  //   description: "Director, Air Pollution Action Group",
  //   image: event,
  // },

  {
    link: "https://www.youtube.com/embed/tVspGsMckfs?si=3EFANJU599bqzABL",
    title: "Pooja Goyal",
    description: "Founding CEO, The Udaiti Foundation",
    image: event,
  },
  {
    link: "https://www.youtube.com/embed/Prx-62O-nXw?si=KgNPgnP80A5W5kSz",
    title: "Baishali Bomjan",
    description: "Co-Founder, Prosperiti",
    image: event,
  },
  {
    link: "https://www.youtube.com/embed/_7tUr8R6awY?si=sHzBaPfbQIQlOiEb",
    title: "Gouri Gupta",
    description: "Director, Central Square Foundation",
    image: event,
  },
  {
    link: "https://www.youtube.com/embed/8i0cwQnsT8I?si=4NN8VJudQO_Bc4M7",
    title: "Radhika Jain",
    description: "Philanthropy Partner, Accelerate Indian Philanthropy",
    image: event,
  },
];

const Video = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const handleNext = () => {
    setActiveVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setActiveVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    // <PaddingLeft>
    <div className=" relative ~mt-[0rem]/[8rem] pb-[3.409rem] md:pb-0 ">
      <Carousel className="relative ">
        <div className="relative container mx-auto">
          <Carousel className="w-fit mx-auto static">
            <div className="absolute top-1/2 left-0 -translate-y-1/2  z-20 pointer-events-none w-full flex justify-between max-lg:hidden">
              <div className="pointer-events-auto">
                <ButtonAnimation>
                  <CarouselPrevious onClick={handlePrevious} />
                </ButtonAnimation>
              </div>
              <div className="pointer-events-auto">
                <ButtonAnimation>
                  <CarouselNext onClick={handleNext} />
                </ButtonAnimation>
              </div>
            </div>
            <CarouselContent className="!~max-w-[14.875rem]/[54.938rem] ">
              <CarouselItem className="">
                {Array.isArray(videos) &&
                videos[activeVideoIndex] &&
                videos[activeVideoIndex].linkOrVideo === "video" ? (
                  <video
                    key={videos[activeVideoIndex].video}
                    className="!~w-[16.875rem]/[53.938rem] object-cover z-[500] !~h-[12.361rem]/[36.25rem]"
                    controls
                    autoPlay
                    loop
                    muted
                  >
                    <source
                      src={StorageUrl + videos[activeVideoIndex].video}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    className="!~min-w-[10.875rem]/[48.938rem] z-[500] !~min-h-[6.361rem]/[25.25rem]"
                    src={`${videos[activeVideoIndex]?.link}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}

                <h2 className="text-black ~text-msh2/sh2 font-bold ~leading-[1.219rem]/[1.8rem] ~pt-[0.5rem]/[1.25rem]">
                  {videos[activeVideoIndex].title}
                </h2>
                {/* <h2 className="text-greylight ~text-mc1/c2  ~leading-[1.056rem]/[1.463rem] ~pt-[0.25rem]/[0.5rem]">
                  {videos[activeVideoIndex].affiliation}
                </h2> */}
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        <div className="~pl-[1.563rem]/[3.75rem] ">
          <div className="flex ~gap-[0.5rem]/[1.25rem] pb-2 pl-2 w-full ~pt-[1.25rem]/[3.952rem] overflow-x-auto no-scrollbar">
            {videos.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveVideoIndex(i)}
                className={`shrink-0 cursor-pointer relative ~w-[3.44rem]/[12.531rem] ~h-[2rem]/[7.798rem] `}
              >
                <Image
                  fill
                  onClick={() => setActiveVideoIndex(i)}
                  className={` shrink-0 object-cover   relative  ${
                    activeVideoIndex === i
                      ? "ring-4 ring-blue"
                      : "brightness-[0.75]"
                  }`}
                  src={StorageUrl + item.image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-20 h-fit  gap-[1.25rem] md:hidden flex items-end justify-center w-full">
          <div className="pointer-events-auto">
            <ButtonAnimation>
              <CarouselPrevious onClick={handlePrevious} />
            </ButtonAnimation>
          </div>
          <div className="pointer-events-auto">
            <ButtonAnimation>
              <CarouselNext onClick={handleNext} />
            </ButtonAnimation>
          </div>
        </div>
      </Carousel>
    </div>
    // </PaddingLeft>
  );
};

export default Video;
