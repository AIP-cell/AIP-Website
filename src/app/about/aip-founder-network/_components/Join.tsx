import MailSvg from "@/components/svg/MailSvg";
import Image from "next/image";
import Link from "next/link";
import JoinCirclesOne from "@public/svg/about/aip-founder-network/JoinCirclesOne.svg";
import JoinCirclesRight from "@public/svg/about/aip-founder-network/JoinCirclesRight.svg";
import PeachMaskedSemiCircle from "@public/svg/about/aip-founder-network/semiMaskedCircles.svg";
import React from "react";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import ATeamCard from "@/components/cards/aCards/ATeamCard";

const joinArray = [
  {
    title1: "Aakash",
    title2: "Chaudhry",
    desc: "Aakash Educational Services",
  },
  {
    title1: "Ambarish",
    title2: "Raghuvanshi",
    desc: "Info Edge India",
  },

  {
    title1: "GV",
    title2: "Prasad",
    desc: "Dr. Reddy's Lab",
  },
  {
    title1: "Karishma",
    title2: "Shanghvi",
    desc: "Sun Pharma",
  },
];
const Join = () => {
  return (
    <div className="tw-w-full tw-relative">
      {/* <Image
        src={JoinCirclesOne}
        alt=""
        className=" tw-absolute tw-top-[9rem] tw-left-0 tw-w-[23.56rem] tw-h-[23.3rem]"
      />
      <Image
        src={PeachMaskedSemiCircle}
        alt=""
        className=" tw-absolute tw-bottom-[-2.43rem] tw-left-0 tw-w-[23.56rem] tw-h-[23.3rem] tw-z-[-1]"
      />
      <Image
        src={JoinCirclesRight}
        alt=""
        className=" tw-absolute tw-bottom-[-11.7rem] tw-right-0 tw-w-[20.875rem] tw-h-[20.62rem] tw-z-[-1]"
      /> */}
      <div className="tw-relative container tw-mx-auto ">
        <div className="tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-[12.5rem]">
          <h2 className="tw-font-playFair tw-text-gray80 tw-text-h2 tw-leading-[3.3rem]">
            Methods of
            <span className="tw-text-textPurple tw-font-playFairItalic">
              &nbsp;Joining
            </span>
          </h2>
          <p className="tw-text-midGray tw-text-center tw-leading-[1.4rem] ~tw-px-5/[20.93rem] tw-pt-[1.25rem]">
            We invite you to join our growing network of philanthropists to see
            strategic philanthropy impact India’s transformation.
          </p>
          <p className="tw-text-gray80 tw-text-h5 tw-leading-[1.75rem] tw-font-playFair tw-text-center ~tw-px-5/[20.93rem] tw-pt-[3.123rem]">
            To initiate a conversation, email our Philanthropy Partners
          </p>
        </div>
        <div className="tw-flex tw-gap-[5.625rem] tw-w-full tw-justify-center tw-pt-[4rem]">
          {joinArray.map((join, i) => (
            <ATeamCard
              key={i}
              title={join.title1}
              title2={join.title2}
              desc={join.desc}
              linkedin={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Join;
