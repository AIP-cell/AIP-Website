import React from "react";
import GivingJourney from "./_components/GivingJourney";
import GivingArchetype from "./_components/GivingArchetype";
import Bg from "@public/svg/about/giving-roadmap/givingRoadMapHeroSectionBg.svg";
import SmBg from "@public/svg/about/giving-roadmap/smPurpleBg.svg";
import OvalPurple from "@public/svg/ovalPurple.svg";

import Image from "next/image";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import { notFound } from "next/navigation";
import { Api } from "@/api/Api";
import { TRoadMap } from "@/api/type";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giving Roadmap | AIP’s Approach to Purposeful Philanthropy",
  description:
    "At AIP, we believe in the transformative power of philanthropy. We help philanthropists channel their drive and vision to create lasting impact through a tailored roadmap that shapes a meaningful legacy of giving.",
  alternates: {
    canonical: "/about/giving-roadmap",
  },
};

export const dynamic = "force-dynamic";
const getAipJourneyApi = async (): Promise<TRoadMap> => {
  const response = await Api.getRoadMap();
  return response?.data;
};
const page = async () => {
  const response = await getAipJourneyApi();
  if (!response) {
    notFound();
  }
  return (
    <div className="~pt-[5rem]/[10rem]">
      <div className="relative w-full">
        <Image
          src={Bg}
          alt=""
          className="hidden sm:block absolute ~top-[9rem]/[14.5rem] h-[60rem] object-cover w-[300rem]"
        />
        <Image
          src={SmBg}
          alt=""
          className="sm:hidden block absolute top-[23rem] object-cover w-full"
        />
        <div className="relative">
          <div className="container mx-auto relative">
            <BreadCrump
              textOne="About Us"
              linkOne="#"
              textTwo="Giving Roadmap"
              linkTwo="/about/giving-roadmap"
            />
            <div className="text-left md:text-center relative">
              <Image
                src={OvalPurple}
                alt=""
                className="absolute ~bottom-[4rem]/[2rem] ~w-[10rem]/[11.875rem] ~right-0/[7.8rem]"
              />
              <WordStaggerAnimation
                className="~px-[1.25rem]/[7rem] ~pt-[4.313rem]/[7.4rem] ~pb-[15rem]/[21rem] ~text-h4a/h4 text-gray80 font-playFair md:tracking-[-0.4px] ~leading-[2.113rem]/[2.6rem] "
                text="  At AIP, we believe in the transformative power of
                  philanthropy. Philanthropists can make a difference.
                  Philanthropists want to make a difference, and philanthropists
                  are the best at inspiring each other. We want to channel this
                  drive and vision to create lasting change, and ignite a ripple
                  effect of impact. Together, we craft a tailored roadmap to
                  guide your journey—identifying key sectors, clarifying your
                  purpose, and shaping a legacy of meaningful giving."
              />
            </div>
          </div>
          <GivingJourney response={response} />
          <GivingArchetype />
        </div>
      </div>
    </div>
  );
};

export default page;
