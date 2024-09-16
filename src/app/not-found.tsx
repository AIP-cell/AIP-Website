import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import LeftOPenSvg from "@/components/svg/LeftOpenSvg";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="tw-pt-[12.5rem] tw-flex tw-flex-col tw-items-center tw-justify-center">
      <h1 className="tw-text-h1 tw-font-playFair tw-text-gray80">
        Oops!
        <span className="tw-font-playFairItalic tw-text-textPurple">
          &nbsp;Nothing here!
        </span>
      </h1>
      <div className="tw-pt-[4.5rem] tw-flex tw-justify-center">
        <ButtonAnimation className=" tw-py-[0.75rem] tw-px-[2rem]  tw-rounded-full tw-bg-darkPurple">
          <Link href="/" className="tw-text-white tw-flex tw-gap-[0.5rem]">
            <LeftOPenSvg className="tw-size-[1.25rem]" />
            <p className=" tw-text-h9Copy5 tw-leading-[1.225rem]">Go Back</p>
          </Link>
        </ButtonAnimation>
      </div>
      <p className="tw-text-midGray tw-text-h8Copy3 tw-pt-[11rem] tw-pb-[13.9rem] tw-leading-[1.57rem]">
        WIP
      </p>
    </div>
  );
};

export default NotFound;
