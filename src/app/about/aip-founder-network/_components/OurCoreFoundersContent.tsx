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
import CardAnimation from "@/components/animations/CardAnimation";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";

type Props = {
  coreFounderMembers?: TTeamMembers[];
};
const OurCoreFoundersContent = ({ coreFounderMembers }: Props) => {
  return (
    <div className="w-full relative">
      <div className="~pt-[2.125rem]/[3rem]  relative">
        <div className="flex flex-col items-center justify-center ~px-[1.25rem]/[20.938rem] container mx-auto">
          {/* <h2 className="~text-h4/h2 text-center text-gray80 ~leading-[2.6rem]/[3.2rem] font-playFair">
            <span className="text-textPurple font-playFairItalic">
              &nbsp;Core-Founders
            </span>
          </h2> */}
          <WordStaggerAnimation
            text="<color>Our Core Founders</color>"
            className="~text-h4/h2 text-center text-gray80 ~leading-[2.6rem]/[3.2rem]"
          />

          <TextStaggerAnimation
            text="Our Core Founders are amongst the foremost philanthropists of the country who have contributed immensely to developing the philanthropic ecosystem in India with their visionary thinking and philanthropic work across sectors. Their impactful work is an inspiration to all philanthropists, from emerging to well established."
            className="font-inter ~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 text-center text-gray80 ~pt-[2rem]/[1.25rem] ~px-[1rem]/0"
          />
        </div>
        <div className="relative ~pb-[5rem]/[7.37rem] ">
          {coreFounderMembers?.map((item, i) => {
            const isFirstDesign = Math.floor(i / 2) % 2 === 0;
            if (i % 2 == 0) {
              return (
                <CardAnimation index={i} delay={0.1} key={i}>
                  <div key={i} className="relative h-full">
                    {i % 2 == 0 && (
                      <Image
                        src={Bg}
                        alt=""
                        className={cn(
                          "hidden xl:block absolute  top-0  right-0",
                          { "right-auto left-0 rotate-180": !isFirstDesign }
                        )}
                      />
                    )}
                    <div
                      className={cn(
                        "sm:flex-row flex-col flex ~gap-[3.5rem]/[4.56rem] container mx-auto ",
                        {
                          "pt-[5rem] pr-12 ~pl-12/[7.8rem] max-[20rem]:pr-[0.7rem] max-[20rem]:pl-[0.7rem]":
                            isFirstDesign,
                          "~pt-14/[5.25rem] justify-end  pl-12 max-[20rem]:pr-[0.7rem] max-[20rem]:pl-[0.7rem] ~pr-12/[7.8rem]":
                            !isFirstDesign,
                        }
                      )}
                    >
                      <ACard
                        slug={item?.slug}
                        link={`/people-of-aip/coreFounder/${item.slug}`}
                        linkedin
                        linkedinLink={item?.linkedin}
                        nameClass=" underline decoration-[1px] underline-offset-4 "
                        name={item?.name}
                        desc={item?.quote}
                        work={item?.organisation}
                        image={item?.image}
                      />

                      {coreFounderMembers[i + 1] && (
                        <PCard
                          slug={item?.slug}
                          link={`/people-of-aip/coreFounder/${
                            coreFounderMembers[i + 1]?.slug
                          }`}
                          linkedin
                          linkedinLink={coreFounderMembers[i + 1]?.linkedin}
                          nameClass=" underline decoration-[1px] underline-offset-4 "
                          name={coreFounderMembers[i + 1]?.name}
                          desc={coreFounderMembers[i + 1]?.quote}
                          work={coreFounderMembers[i + 1]?.organisation}
                          image={coreFounderMembers[i + 1]?.image}
                        />
                      )}
                    </div>
                  </div>
                </CardAnimation>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default OurCoreFoundersContent;
