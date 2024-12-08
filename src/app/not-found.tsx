import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import LeftOPenSvg from "@/components/svg/LeftOpenSvg";
import Link from "next/link";
import React from "react";
import ArrowDownSvg from "@public/svg/arrowDown.svg";
import Image from "next/image";
import ArrowSvg from "@/components/svg/ArrowSvg";
import DownTagSvg from "@/components/svg/DownTagSvg";
import FilterDownArrowSvg from "@/components/svg/FilterDownArrowSvg";
import BreadCrump from "@/components/bread-crump/BreadCrump";

const NotFound = () => {
  return (
    <div className="tw-pt-[5rem]  container tw-mx-auto">
      <div className="tw-relative">
        <BreadCrump textOne="home" linkOne="/" />
      </div>
      <div className="~tw-pt-[8rem]/[12.5rem] tw-flex tw-flex-col tw-items-center tw-justify-center">
        <h1 className="~tw-text-h4/h1 ~tw-leading-[2.6rem]/[3.713rem] tw-font-playFair tw-text-gray80">
          Oops!
          <span className="tw-font-playFairItalic tw-text-textPurple">
            &nbsp;Nothing here!
          </span>
        </h1>
        <div className="~tw-pt-[5rem]/[4.5rem] tw-flex tw-justify-center">
          <ButtonAnimation className="  tw-py-[0.75rem] tw-px-[2rem]  tw-rounded-full tw-bg-darkPurple">
            <Link
              href="/"
              className="tw-text-white tw-flex tw-items-center tw-gap-[0.5rem]"
            >
              <FilterDownArrowSvg className="tw-size-[1.25rem] tw-shrink-0 tw-rotate-[90deg]" />
              <p className=" tw-text-h9Copy5 tw-leading-[1.225rem]">Go Back</p>
            </Link>
          </ButtonAnimation>
        </div>
        <p className="tw-text-midGray tw-text-h8Copy3 tw-pt-[11rem] tw-pb-[13.9rem] tw-leading-[1.57rem]">
          WIP
        </p>
      </div>
    </div>
  );
};

export default NotFound;
