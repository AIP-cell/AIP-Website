import MailSvg from "@/components/svg/MailSvg";
import Image from "next/image";
import Link from "next/link";
import JoinCirclesOne from "@public/svg/aboutPage/aip-founder-network/JoinCirclesOne.svg";
import JoinCirclesRight from "@public/svg/aboutPage/aip-founder-network/JoinCirclesRight.svg";
import PeachMaskedSemiCircle from "@public/svg/aboutPage/aip-founder-network/semiMaskedCircles.svg";
import React from "react";

const Join = () => {
  return (
    <div className="tw-relative container tw-mx-auto ">
      <Image
        src={JoinCirclesOne}
        alt=""
        className=" tw-absolute tw-top-[9rem] tw-left-0 tw-w-[23.56rem] tw-h-[23.3rem]"
      />
      <Image
        src={PeachMaskedSemiCircle}
        alt=""
        className=" tw-absolute tw-bottom-[-2.43rem] tw-left-0 tw-w-[23.56rem] tw-h-[23.3rem]"
      />
      <Image
        src={JoinCirclesRight}
        alt=""
        className=" tw-absolute tw-bottom-[-11.7rem] tw-right-0 tw-w-[20.875rem] tw-h-[20.62rem]"
      />
      <div className="tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-[12.5rem]">
        <h2 className="tw-font-playFair tw-text-gray80 tw-text-h2 tw-leading-[3.3rem]">
          <i className="tw-text-textPurple">Join</i> Us
        </h2>
        <p className="tw-text-midGray tw-text-center tw-px-[20.94rem] tw-pt-[1.25rem]">
          We invite you to join our Core Founders, Founders, and our growing
          network of philanthropists and sector experts to see strategic
          philanthropy impact India’s transformation.
        </p>
        <Link
          href=""
          className=" tw-text-white tw-rounded-full tw-mt-[2.5rem] tw-bg-darkPurple tw-flex tw-gap-[0.5rem] tw-py-[0.75rem] tw-px-[1.75rem]"
        >
          Join The Flow
        </Link>
      </div>
      <div className=" tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-[7.5rem]">
        <h2 className="tw-font-playFair tw-text-gray80 tw-text-h2 tw-leading-[3.3rem]">
          Why<i className="tw-text-textPurple"> Join</i>
        </h2>
        <p className="tw-text-midGray tw-text-center tw-px-[20.94rem] tw-pt-[1.25rem]">
          Our steadfast dedication to an independent, sector agnostic and deeply
          focused approach. We value long-lasting relationships built on a
          strong legacy and an exceptional network.
        </p>

        <Link
          href=""
          className=" tw-mt-[2.5rem] tw-bg-darkPurple tw-rounded-full  tw-py-[0.75rem] tw-px-[1.75rem]"
        >
          <div className="tw-text-white tw-flex tw-gap-[0.5rem]">
            <p className="">Contact Us</p>
            <MailSvg />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Join;
