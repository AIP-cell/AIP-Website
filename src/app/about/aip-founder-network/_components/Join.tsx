import MailSvg from "@/components/svg/MailSvg";
import Image from "next/image";
import Link from "next/link";
import JoinCirclesOne from "@public/svg/about/aip-founder-network/JoinCirclesOne.svg";
import JoinCirclesRight from "@public/svg/about/aip-founder-network/JoinCirclesRight.svg";
import PeachMaskedSemiCircle from "@public/svg/about/aip-founder-network/semiMaskedCircles.svg";
import React from "react";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";

const joinArray = [
  {
    title1: "Aakash",
    title2: "Chaudhry",
    desc: "CEO",
    email: "xyz@abcd.com",
  },
  {
    title1: "Ambarish",
    title2: "Raghuvanshi",
    location: "West & International",
    desc: "Info Edge India",
    email: "xyz@abcd.com",
  },

  {
    title1: "GV",
    title2: "Prasad",
    location: "North & East",
    desc: "Dr. Reddy's Lab",
    email: "xyz@abcd.com",
  },
  {
    title1: "Karishma",
    title2: "Shanghvi",
    location: "South",
    desc: "Sun Pharma",
    email: "xyz@abcd.com",
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
        <div className="tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center ~tw-pt-[7.5rem]/[12.5rem]">
          <h2 className="tw-font-playFair tw-text-gray80 ~tw-text-h4/h2 ~tw-leading-[2.6rem]/[3.3rem]">
            Methods of
            <span className="tw-text-textPurple tw-font-playFairItalic">
              &nbsp;Joining
            </span>
          </h2>
          <p className="tw-text-midGray tw-text-center ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem] ~tw-px-[2.813rem]/[20.93rem] ~tw-pt-[1rem]/[1.25rem]">
            We invite you to join our growing network of philanthropists to see
            strategic philanthropy impact India’s transformation.
          </p>
          <p className="tw-text-gray80 ~tw-text-h6M/h5 ~tw-leading-[1.575rem]/[1.75rem] tw-font-playFair tw-text-center ~tw-px-5/[20.93rem] ~tw-pt-[2.5rem]/[3.123rem]">
            To initiate a conversation, email our Philanthropy Partners
          </p>
        </div>
        <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 ~tw-gap-x-[1.25rem]/[5.625rem] ~tw-gap-y-[1rem]/[5.625rem]  tw-w-full tw-justify-center ~tw-pt-[1.25rem]/[4rem] ~tw-px-[1.25rem]/[7.813rem]">
          {joinArray.map((join, i) => (
            <div key={i} className="tw-flex tw-justify-center">
              {i % 2 == 0 ? (
                <ATeamCard
                  titleClassName="tw-underline tw-decoration-[1px] tw-underline-offset-4"
                  title2ClassName="tw-underline tw-decoration-[1px] tw-underline-offset-4"
                  location={join.location}
                  email={join.email}
                  title={join.title1}
                  title2={join.title2}
                  desc={join.desc}
                  linkedin={false}
                />
              ) : (
                <PTeamCard
                  titleClassName="tw-underline tw-decoration-[1px] tw-underline-offset-4"
                  title2ClassName="tw-underline tw-decoration-[1px] tw-underline-offset-4"
                  location={join.location}
                  email={join.email}
                  title={join.title1}
                  title2={join.title2}
                  desc={join.desc}
                  linkedin={false}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Join;
