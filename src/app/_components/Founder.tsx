"use client";
import React, { useState } from "react";
// import FounderBg from "../../../public/svg/foundersBg.svg";
import PurPleCurveSvg from "../../../public/svg/purpleBgCurve.svg";
import BlueCurveSvg from "../../../public/svg/blueBgCurve.svg";
import TopImage from "@public/images/founderTopCurve.png";
import BottomImage from "@public/images/founderBottomCurve.png";
// import Ex from "../../../public/";
import Image from "next/image";
import ACardWithPlaySign from "@/components/cards/aCards/ACardWithPlaySign";
import PCardWithPlaySign from "@/components/cards/pCards/PCardWithPlaySign";
import RightSlickArrowSvg from "@/components/svg/RightSlickArrowSvg";
import LeftSlickArrowSvg from "@/components/svg/LeftSlickArrowSvg";
import cn from "@/utils/tailwind";
import { motion } from "framer-motion";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import { useMediaQuery } from "react-responsive";
import useClient from "@/hooks/useClient";
import { THomePageTeam } from "@/api/type";
import { AnimatePresence } from "framer-motion";
const founderData = [
  {
    image: "/images/aSample.png",
    name: "0Ashish Dhawan",
    post: "The Convergence Foundation",
    desc: "I believe a lot more needs to be done particularly to encourage first-time givers. AIP aims to fill this gap and spur philanthropy in a very structured manner.",
  },
  {
    image: "/images/pSample.png",
    name: "1Rohini Nilekani",
    post: "Rohini Nilekani Philanthropies",
    desc: "I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.",
  },
  {
    image: "/images/aSample.png",
    name: "2Vishal Tulsyan",
    post: "Abhiyan Bharat Foundation India",
    desc: "Effective philanthropy is not just about the act of giving, but a commitment to social transformation. Like in businesses and in professional life, it is time that we think about philanthropy in terms of scale with a lasting and sustainable long term impact. AIP brings together a strong group of changemakers to enable this change in thought process.",
  },
  {
    image: "/images/pSample.png",
    name: "3Amit Chandra",
    post: "ATE Chandra Foundation",
    desc: "“I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.”",
  },
];
type Props = {
  teamData: THomePageTeam[];
};
const Founder = ({ teamData }: Props) => {
  const [select, setSelect] = useState<number>(0);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const itemsPerSlide = isDesktop ? 4 : 1;
  const arrayLength = teamData.length;
  const isClient = useClient();
  if (!isClient) {
    return;
  }
  const previous = () => {
    if (select == 0) {
      setSelect(arrayLength - itemsPerSlide);
    } else {
      setSelect(select - itemsPerSlide);
    }
  };
  const next = () => {
    if (select == arrayLength - itemsPerSlide) {
      setSelect(0);
    } else setSelect(select + itemsPerSlide);
  };
  return (
    <div className="w-full  relative ~mt-0/[-12rem]">
      <Image src={TopImage} alt="" className="w-full " />
      <div className="w-full bg-founderGradient ~/md:~h-[50rem]/[37rem] lg:~h-[77rem]/[68rem] relative mt-[-1px]">
        <div className="absolute top-0 w-full">
          <div className="w-full  relative">
            <Image
              src={PurPleCurveSvg}
              alt=""
              className="hidden lg:block absolute top-0 right-0"
            />
            <Image
              src={BlueCurveSvg}
              alt=""
              className="hidden lg:block absolute bottom-[-15rem] left-0"
            />
            <div className=" container mx-auto relative ">
              <div className="~px-[1.25rem]/[7.8rem] ">
                <div className="flex justify-between items-center">
                  <h3 className="~text-h4/h2 text-white/80 ~leading-[2.6rem]/[3.3rem] relative font-playFair">
                    From our
                    <span className="text-white font-playFairItalic block md:inline-block">
                      &nbsp;Core-Founders
                    </span>
                  </h3>
                  <div className=" flex gap-[1.25rem] relative">
                    <ButtonAnimation
                      onClick={previous}
                      className="  text-darkPurple leading-[22.4px] font-inter bg-white rounded-tl-3xl rounded-bl-3xl rounded-tr-xl rounded-br-xl py-[1.15rem] px-[0.92rem] h-fit"
                    >
                      <LeftSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
                    </ButtonAnimation>
                    <ButtonAnimation
                      onClick={next}
                      className=" text-darkPurple leading-[22.4px] font-inter bg-white rounded-tr-3xl rounded-br-3xl rounded-tl-xl rounded-bl-xl py-[1.15rem] px-[0.92rem] h-fit"
                    >
                      <RightSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
                    </ButtonAnimation>
                  </div>
                </div>
                <div className="block lg:hidden relative pt-[3.43rem]">
                  <AnimatePresence>
                    <motion.div
                      key={0}
                      variants={{
                        initial: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: 0 },
                        exit: {
                          opacity: 0,
                          x: -100,
                          // transition: {
                          //   duration: 1.2,
                          //   ease: "easeInOut",
                          // },
                        },
                      }}
                      initial="initial"
                      animate="visible"
                      exit="exit"
                      transition={{ ease: "easeInOut", duration: 0.5 }}
                      className={cn("flex justify-center items-center", {
                        'hidden': select % 2 === 1,
                      })}
                    >
                      <ACardWithPlaySign
                        linkedin={true}
                        image={teamData.at(select)!.image}
                        desc={teamData.at(select)!.description}
                        post={teamData.at(select)!.designation}
                        name={teamData.at(select)!.name}
                      />
                    </motion.div>
                    <motion.div
                      key={1}
                      className={cn("flex justify-center items-center", {
                        hidden: select % 2 === 0,
                      })}
                    >
                      <PCardWithPlaySign
                        linkedin={true}
                        image={teamData.at(select)!.image}
                        desc={teamData.at(select)!.description}
                        post={teamData.at(select)!.designation}
                        name={teamData.at(select)!.name}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="md:hidden flex justify-center w-full  pt-[2.5rem]">
                  <div className=" w-[4.5rem] flex gap-[0.5rem] ">
                    {teamData.map((items: any, index: number) => (
                      <div
                        key={index}
                        className={cn(
                          " rounded-full h-[0.5rem] bg-[#E1CCED80] basis-1/5",
                          { "basis-2/4 bg-[#E1CCED]": index === select }
                        )}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:block relative pt-[3.43rem] ">
                  {(() => {
                    const arrayWithFour = teamData.slice(
                      select,
                      select + itemsPerSlide
                    );
                    const arrayWithFirstTwo = arrayWithFour.slice(0, 2);
                    const arrayWithNextTwo = arrayWithFour.slice(2, 4);
                    return (
                      <>
                        <div className="flex gap-[4.56rem]">
                          {arrayWithFirstTwo.map((items, index) =>
                            index == 0 ? (
                              <ACardWithPlaySign
                                key={index}
                                linkedin
                                image={items.image}
                                desc={items.description}
                                post={items.designation}
                                name={items.name}
                              />
                            ) : (
                              index === 1 && (
                                <PCardWithPlaySign
                                  key={index}
                                  linkedin
                                  image={items.image}
                                  desc={items.description}
                                  post={items.designation}
                                  name={items.name}
                                />
                              )
                            )
                          )}
                        </div>

                        <div className="flex justify-end gap-[4.56rem] pt-[3.5rem]">
                          {arrayWithNextTwo.map((items, i) =>
                            i === 0 ? (
                              <ACardWithPlaySign
                                key={i}
                                linkedin
                                image={items.image}
                                desc={items.description}
                                post={items.designation}
                                name={items.name}
                              />
                            ) : (
                              <PCardWithPlaySign
                                key={i}
                                linkedin
                                image={items.image}
                                desc={items.description}
                                post={items.designation}
                                name={items.name}
                              />
                            )
                          )}
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
              <div className=" block md:hidden "></div>
            </div>
          </div>
        </div>
      </div>
      <Image src={BottomImage} alt="" className="w-full mt-[-2px]" />
    </div>
  );
};

export default Founder;
