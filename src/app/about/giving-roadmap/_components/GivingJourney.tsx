import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import TitleDescCard from "@/components/cards/TitleDescCard";
import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
import Image from "next/image";
import PeachCurveBg from "@public/svg/about/giving-roadmap/givingRoadMapPeachCurveBg.svg";
import PeachBigCircleBg from "@public/svg/about/giving-roadmap/givingRoadMapBigCircleBg.svg";
import PeachSmallCircleBg from "@public/svg/about/giving-roadmap/givingRoadMapSmallCircleBg.svg";
import React from "react";
import Link from "next/link";
import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import { TRoadMap } from "@/api/type";
import LinkSvg from "@/components/svg/LinkSvg";
import { StorageUrl } from "@/utils/BaseUrl";
const itemsArray = [
  {
    title1: "Treasure",
    desc: "How do you strategically allocate your financial resources to create the greatest impact?",
  },
  {
    title1: "Involvement",
    desc: "How do you leverage your time, talent, and connections to amplify the change you wish to see?",
  },
  {
    title1: "Evangelisation",
    desc: " How do you use your voice and influence to inspire others and advocate for meaningful causes?",
  },
];
type Props = {
  response: TRoadMap;
};
const GivingJourney = ({ response }: Props) => {
  const isLink = response.isLink;
  const isFile = response.isFile;
  return (
    <div className="flex flex-col text-center ~pb-[7.5rem]/[12.5rem] relative">
      <Image
        src={PeachCurveBg}
        alt=""
        className="hidden lg:block absolute z-[-1] bottom-[7.6rem] left-0"
      />
      <Image
        src={PeachBigCircleBg}
        alt=""
        className="hidden lg:block absolute z-[-1] bottom-[33.2rem] right-0"
      />
      <Image
        src={PeachSmallCircleBg}
        alt=""
        className="hidden lg:block absolute z-[-1] bottom-[24.8rem] right-[5.37rem]"
      />
      <div className="container mx-auto relative ~px-[1.25rem]/[9.844rem]">
        <div className="font-playFair ~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem]">
          <TextStaggerAnimation text="Where are you in your" className="" />
          <TextStaggerAnimation
            text="<color>Giving Journey?</color>"
            className=""
          />
        </div>

        <p className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 ~px-[1.563rem]/[11rem] text-midGray ~pt-[2rem]/[2.5rem]">
          Embark on a transformative journey with the TIE Model of Philanthropy.
          At AIP, we categorise your philanthropic inputs into three impactful
          areas:
        </p>
        <div className="flex flex-col md:flex-row ~gap-[0.75rem]/[2.5rem] ~py-[2rem]/[3.5rem] w-full justify-center ~px-[1.563rem]/0">
          {itemsArray.map((items, i) => (
            <CardAnimation index={i} delay={0.2} key={i}>
              <TitleDescCard key={i} title1={items.title1} desc={items.desc} />
            </CardAnimation>
          ))}
        </div>
        <div className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-center ~px-[1.56rem]/[11rem] text-midGray ">
          <p className=" ">
            Understanding where you stand is the first step towards a purposeful
            journey in giving. Are you just starting to explore? Or are you
            looking to organise and elevate your philanthropic efforts?
          </p>
          <p className=" pt-[1rem]">
            Discover your unique path through our questionnaire. Download it
            here to dive deeper into how AIP can support you in channelling your
            drive for impact.
          </p>
        </div>
        <div className="~pt-[2rem]/[2.5rem] flex w-full flex-col items-center gap-[1rem] justify-center">
          <h2 className="~text-h9Copy5/h9Copy4 text-darkPurple font-playFair text-center">Discover your path</h2>
         <div className="flex w-full flex-col md:flex-row items-center justify-center gap-[1rem]">
            {isFile && (
              <Link href={StorageUrl + response.file} download target="_blank">
                <ButtonAnimation
                  type="submit"
                  className="text-white hover:text-darkPurple text-h9Copy5 flex gap-[0.5rem] leading-[1.225rem] hover:bg-white bg-darkPurple px-[1.75rem] py-[0.75rem] rounded-[1.5rem] cursor-pointer"
                >
                  <p>Download the form</p>
                  <DownloadFileSvg className="size-[1.25rem]" />
                </ButtonAnimation>
              </Link>
            )}
            {isLink && (
              <Link href={response.link ?? ""} target="_blank">
                <ButtonAnimation
                  type="submit"
                  className="text-white hover:text-darkPurple text-h9Copy5 flex items-center gap-[0.5rem] leading-[1.225rem] hover:bg-white bg-darkPurple px-[1.75rem] py-[0.75rem] rounded-[1.5rem] cursor-pointer"
                >
                  <p>Fill the form online</p>
                  <LinkSvg className="size-[1rem]" />
                </ButtonAnimation>
              </Link>
            )}
         </div>
        </div>
      </div>
    </div>
  );
};

export default GivingJourney;
