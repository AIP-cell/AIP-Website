import ACardWithButton from "@/components/cards/aCards/ACardWithButton";
import PCardWithButton from "@/components/cards/pCards/PCardWithButton";
import Image from "next/image";
import Bg from "@public/svg/peach-bg-curve-founders.svg";
import React from "react";
import ACard from "@/components/cards/aCards/ACard";
import SampleImage from "@public/images/sample.png";
import PCard from "@/components/cards/pCards/PCard";
import { TTeamMembers } from "@/api/type";
import cn from "@/utils/tailwind";

type Props = {
  coreFounderMembers: TTeamMembers[];
};
const OurCoreFoundersContent = ({ coreFounderMembers }: Props) => {
  return (
    <div className="w-full relative">
      {/* {coreFounderMembers.length != 0 && (
        <>
          <Image
            src={Bg}
            alt=""
            className="hidden xl:block absolute  top-[15.5rem]  right-0"
          />
          <Image
            src={Bg}
            alt=""
            className="hidden xl:block absolute  bottom-0  left-0 rotate-180"
          />
        </>
      )} */}
      <div className="~pt-[2.125rem]/[3rem]  relative">
        <div className="flex flex-col items-center justify-center ~px-[1.25rem]/[20.938rem] container mx-auto">
          <h2 className="~text-h4/h2 text-center text-gray80 ~leading-[2.6rem]/[3.2rem] font-playFair">
            <span className="text-textPurple font-playFairItalic">
              &nbsp;Core-Founders
            </span>
          </h2>
          <p className="font-inter ~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 text-center text-gray80 ~pt-[2rem]/[1.25rem] ~px-[1rem]/0">
            Our Founders are the foundations of the common purpose: create a
            transformative impact of philanthropic efforts across a range of
            sectors from education to healthcare to climate and the arts, with
            innovative initiatives and their profound effects on communities.
            Our founders are our banks, our north stars, all the same.
          </p>
        </div>
        <div className="relative ">
          {coreFounderMembers.map((item, i) => {
            const isFirstDesign = Math.floor(i / 2) % 2 === 0;
            if (i % 2 == 0) {
              return (
                <div key={i} className="relative h-full">
                  {i % 2 == 0 && (
                    <Image
                      src={Bg}
                      alt=""
                      className={cn("hidden xl:block absolute  top-0  right-0",{"right-auto left-0 rotate-180":!isFirstDesign})}
                    />
                  )}
                  {/* {coreFounderMembers[i + 1] && (
                    <Image
                      src={Bg}
                      alt=""
                      className="hidden xl:block absolute  bottom-0  left-0 rotate-180"
                    />
                  )} */}

                  <div
                    className={cn(
                      "sm:flex-row flex-col flex ~gap-[3.5rem]/[4.56rem] container mx-auto",
                      {
                        "pt-[5rem] pr-12 ~pl-12/[7.8rem] ": isFirstDesign,
                        "~pt-14/[5.25rem] justify-end pb-[7.37rem] pl-12 ~pr-12/[7.8rem]":
                          !isFirstDesign,
                      }
                    )}
                  >
                    <ACard
                      slug={item?.slug}
                      link={`/people-of-aip/coreFounder/${item.slug}`}
                      linkedin
                      nameClass=" underline decoration-[1px] underline-offset-4 "
                      name={item?.name}
                      desc={item?.description}
                      work={item?.designation}
                      image={item?.image}
                    />

                    {coreFounderMembers[i + 1] && (
                      <PCard
                        slug={item?.slug}
                        link={`/people-of-aip/coreFounder/${
                          coreFounderMembers[i + 1]?.slug
                        }`}
                        linkedin
                        nameClass=" underline decoration-[1px] underline-offset-4 "
                        name={coreFounderMembers[i + 1]?.name}
                        desc={coreFounderMembers[i + 1]?.description}
                        work={coreFounderMembers[i + 1]?.designation}
                        image={coreFounderMembers[i + 1]?.image}
                      />
                    )}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default OurCoreFoundersContent;
