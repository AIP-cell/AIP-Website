import React from "react";
import PositionsGrid from "./PositionsGrid";
import usersBg from "@public/svg/careers/users.svg";
import PeachCurve from "@public/svg/careers/peachCurveRight.svg";
import Link from "next/link";
import Image from "next/image";

const OpenRules = () => {
  return (
    <div className="tw-w-full tw-relative">
      <Image
        src={PeachCurve}
        alt=""
        className="tw-hidden lg:tw-block tw-absolute tw-right-0 tw-top-[-6rem]"
      />
      <div className="container tw-relative tw-mx-auto ~tw-px-5/[7.581rem] ">
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center ">
          <p className="~tw-pt-[5rem]/[12.5rem] tw-font-playFair tw-tracking-[-.04rem] ~tw-text-h4/h2 tw-text-gray80 ~tw-leading-[2.6rem]/[3.3rem] ~tw-pb-[1rem]/5">
            Open
            <span className="tw-font-playFairItalic tw-text-textPurple">
              &nbsp;Roles
            </span>
          </p>
          <div className="tw-px-[4.1rem]">
            <p className="tw-font-inter tw-text-midGray tw-text-center ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem]">
              Join the movement to bring about
            </p>
            <p className="tw-font-inter tw-text-midGray tw-text-center ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem]">
              strategic philanthropy impact India’s transformation.
            </p>
          </div>
          <PositionsGrid />
        </div>
        <div className="tw-pt-[2rem]">
          <Link
            className="tw-bg-darkPurple tw-px-7 tw-py-3 tw-flex tw-gap-2 tw-w-fit tw-rounded-3xl"
            href="/careers/all-positions"
          >
            <p className=" tw-font-inter tw-text-white tw-text-h9Copy5 tw-leading-[1.225rem]">
              See all open positions
            </p>
            <Image src={usersBg} alt="arrow down" />
          </Link>
        </div>
        <div className=" ~tw-px-0/[6.563rem] ~tw-pt-[2.5rem]/20  ">
          <div className="~tw-px-5/[9.375rem] tw-py-[2rem] tw-rounded-[1.25rem] tw-text-center tw-bg-lightgrey">
            <p className="tw-font-playFair ~tw-text-h5/h4a ~tw-leading-[1.75rem]/[2.113rem] tw-text-gray80">
              Can’t Find what you are looking for?
            </p>
            <p className="tw-font-inter tw-text-h9Copy5 tw-leading-[1.4rem] tw-pt-3 tw-text-midGray">
              Send in your resume and portfolio at
              <Link
                href="mailto:careers@indianphilanthropy.org"
                className="tw-text-textPurple tw-inline-block tw-underline"
              >
                &nbsp;careers@indianphilanthropy.org
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenRules;
