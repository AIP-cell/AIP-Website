"use client";
import React, { useState } from "react";
import FounderBg from "../../../public/svg/foundersBg.svg";
import ASvg from "../../../public/svg/aSvg.svg";
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
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
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
  {
    image: "/images/aSample.png",
    name: "4Ashish Dhawan",
    post: "The Convergence Foundation",
    desc: "I believe a lot more needs to be done particularly to encourage first-time givers. AIP aims to fill this gap and spur philanthropy in a very structured manner.",
  },
  {
    image: "/images/pSample.png",
    name: "5Rohini Nilekani",
    post: "Rohini Nilekani Philanthropies",
    desc: "I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.",
  },
  {
    image: "/images/aSample.png",
    name: "6Vishal Tulsyan",
    post: "Abhiyan Bharat Foundation India",
    desc: "Effective philanthropy is not just about the act of giving, but a commitment to social transformation. Like in businesses and in professional life, it is time that we think about philanthropy in terms of scale with a lasting and sustainable long term impact. AIP brings together a strong group of changemakers to enable this change in thought process.",
  },
  {
    image: "/images/pSample.png",
    name: "7Amit Chandra",
    post: "ATE Chandra Foundation",
    desc: "“I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.”",
  },
];
const Founder = () => {
  const [select, setSelect] = useState<number>(0);
  const arrayLength = founderData.length;
  const previous = () => {
    if (select == 0) {
      setSelect(arrayLength - 1);
    } else {
      setSelect(select - 1);
    }
  };
  const next = () => {
    setSelect(select + 1);
    if (select == arrayLength - 1) {
      setSelect(0);
    }
  };
  return (
    <div className="tw-w-full  tw-relative ~tw-mt-0/[-12rem]">
      <Image src={TopImage} alt="" className="tw-w-full " />
      <div className="tw-w-full tw-bg-founderGradient ~tw-h-[50rem]/[68rem] tw-relative tw-mt-[-1px]">
        <div className="tw-absolute tw-top-0 tw-w-full">
          <div className="tw-w-full  tw-relative">
            <Image
              src={PurPleCurveSvg}
              alt=""
              className="tw-hidden lg:tw-block tw-absolute tw-top-0 tw-right-0"
            />
            <Image
              src={BlueCurveSvg}
              alt=""
              className="tw-hidden lg:tw-block tw-absolute tw-bottom-[-15rem] tw-left-0"
            />
            <div className=" container tw-mx-auto tw-relative ">
              <div className="~tw-px-[1.25rem]/[7.8rem] ">
                <div className="tw-flex tw-justify-between tw-items-center">
                  <h3 className="~tw-text-h4/h2 tw-text-white/80 ~tw-leading-[2.6rem]/[3.3rem] tw-relative tw-font-playFair">
                    From our
                    <span className="tw-text-white tw-font-playFairItalic tw-block md:tw-inline-block">
                      &nbsp;Core-Founders
                    </span>
                  </h3>
                  <div className=" tw-flex tw-gap-[1.25rem] tw-relative">
                    <ButtonAnimation
                      onClick={previous}
                      className="  tw-text-darkPurple tw-leading-[22.4px] tw-font-inter tw-bg-white tw-rounded-tl-3xl tw-rounded-bl-3xl tw-rounded-tr-xl tw-rounded-br-xl tw-py-[1.15rem] tw-px-[0.92rem] tw-h-fit"
                    >
                      <LeftSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
                    </ButtonAnimation>
                    <ButtonAnimation
                      onClick={next}
                      className=" tw-text-darkPurple tw-leading-[22.4px] tw-font-inter tw-bg-white tw-rounded-tr-3xl tw-rounded-br-3xl tw-rounded-tl-xl tw-rounded-bl-xl tw-py-[1.15rem] tw-px-[0.92rem] tw-h-fit"
                    >
                      <RightSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
                    </ButtonAnimation>
                  </div>
                </div>
                <div className="tw-block lg:tw-hidden tw-relative tw-pt-[3.43rem]">
                  <>
                    <div
                      className={cn(
                        "tw-flex tw-justify-center tw-items-center",
                        {
                          "tw-hidden": select % 2 === 1,
                        }
                      )}
                    >
                      <ACardWithPlaySign
                        linkedin={true}
                        image={founderData.at(select)!.image}
                        desc={founderData.at(select)!.desc}
                        post={founderData.at(select)!.post}
                        name={founderData.at(select)!.name}
                      />
                    </div>
                    <div
                      className={cn(
                        "tw-flex tw-justify-center tw-items-center",
                        {
                          "tw-hidden": select % 2 === 0,
                        }
                      )}
                    >
                      <PCardWithPlaySign
                        linkedin={true}
                        image={founderData.at(select)!.image}
                        desc={founderData.at(select)!.desc}
                        post={founderData.at(select)!.post}
                        name={founderData.at(select)!.name}
                      />
                    </div>
                  </>
                </div>
                <div className="md:tw-hidden tw-flex tw-justify-center tw-w-full  tw-pt-[2.5rem]">
                  <div className=" tw-w-[4.5rem] tw-flex tw-gap-[0.5rem] ">
                    {founderData.map((items: any, index: number) => (
                      <div
                        key={index}
                        className={cn(
                          " tw-rounded-full tw-h-[0.5rem] tw-bg-[#E1CCED80] tw-basis-1/5",
                          { "tw-basis-2/4 tw-bg-[#E1CCED]": index === select }
                        )}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="tw-hidden lg:tw-block tw-relative tw-pt-[3.43rem] ">
                  {(() => {
                    const arrayWithFour = founderData.slice(select, select + 4);
                    const arrayWithFirstTwo = arrayWithFour.slice(0, 2);
                    const arrayWithNextTwo = arrayWithFour.slice(2, 4);
                    return (
                      <>
                        <div className="tw-flex tw-gap-[4.56rem]">
                          {arrayWithFirstTwo.map((items, i) =>
                            i == 0 ? (
                              <ACardWithPlaySign
                                key={i}
                                linkedin
                                image={items.image}
                                desc={items.desc}
                                post={items.post}
                                name={items.name}
                              />
                            ) : (
                              i === 1 && (
                                <PCardWithPlaySign
                                  key={i}
                                  linkedin
                                  image={items.image}
                                  desc={items.desc}
                                  post={items.post}
                                  name={items.name}
                                />
                              )
                            )
                          )}
                        </div>

                        <div className="tw-flex tw-justify-end tw-gap-[4.56rem] tw-pt-[3.5rem]">
                          {arrayWithNextTwo.map((items, i) =>
                            i === 0 ? (
                              <ACardWithPlaySign
                                key={i}
                                linkedin
                                image={items.image}
                                desc={items.desc}
                                post={items.post}
                                name={items.name}
                              />
                            ) : (
                              <PCardWithPlaySign
                                key={i}
                                linkedin
                                image={items.image}
                                desc={items.desc}
                                post={items.post}
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
              <div className=" tw-block md:tw-hidden "></div>
            </div>
          </div>
        </div>
      </div>
      <Image src={BottomImage} alt="" className="tw-w-full tw-mt-[-2px]" />
    </div>
  );
};

export default Founder;
