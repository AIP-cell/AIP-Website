import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import LeftOPenSvg from "@/components/svg/LeftOpenSvg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ThankYouPage = () => {
  return (
    <div className="tw-pt-[12.5rem] tw-flex tw-flex-col tw-items-center tw-justify-center">
      <div className="tw-text-h1 tw-font-playFair tw-text-gray80 tw-leading-[3.7rem]">
        <span className="tw-font-playFairItalic tw-text-textPurple">
          Thank you
        </span>
        &nbsp;for
        <h2 className="tw-text-h1 tw-font-playFair tw-text-gray80 tw-leading-[3.7rem]">
          &nbsp;Submitting the Form!
        </h2>
      </div>
      <div className=" tw-my-[4.5rem] tw-relative tw-w-[22rem] tw-h-[5rem] tw-rounded-3xl tw-flex tw-justify-center tw-items-center tw-overflow-hidden">
        <Image
          src="/images/news/newsDemo.png"
          alt=""
          fill
          className="tw-object-cover"
        />
        <Link
          href="mailto:info@indianphilanthropy.org"
          className="tw-relative tw-text-textPurple tw-leading-[1.4rem] tw-underline"
        >
          info@indianphilanthropy.org
        </Link>
      </div>
      <div className="tw-pt-[4.5rem] tw-flex tw-justify-center">
        <ButtonAnimation className=" tw-py-[0.75rem] tw-px-[2rem]  tw-rounded-full tw-bg-darkPurple">
          <Link href="/" className="tw-text-white tw-flex tw-gap-[0.5rem]">
            <LeftOPenSvg className="tw-size-[1.25rem]" />
            <p className=" tw-text-h9Copy5 tw-leading-[1.225rem]">Go Back</p>
          </Link>
        </ButtonAnimation>
      </div>
      <p className="tw-text-midGray tw-text-h8Copy3 tw-pt-[3.5rem] tw-pb-[8.3rem] tw-leading-[1.57rem]">
        WIP
      </p>
    </div>
  );
};

export default ThankYouPage;
