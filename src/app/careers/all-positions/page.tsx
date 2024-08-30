import React from "react";
import ArrowDownSvg from "@public/svg/arrowDown.svg";
import careerBg from "@public/svg/careers/careerBg.svg";
import Image from "next/image";
import Link from "next/link";
import PositionsGrid from "../_components/PositionsGrid";


const page = () => {
  return (
    <div className=" tw-relative  tw-overflow-hidden">
      <Image
        src={careerBg}
        alt=""
        className="tw-left-[13.8rem] tw-absolute tw-top-[-3rem] "
      />
      <div className="container tw-mx-auto tw-relative tw-px-[7.8rem] tw-pt-[5rem]">
        <div className="tw-absolute tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
          <Link
            href=""
            className="tw-text-gray50 tw-text-h9BodyCopy5 tw-leading-[19.6px]"
          >
            {"<"}Careers / &nbsp;
          </Link>
          <Link href="#"> All Positions</Link>
        </div>

        <p className="tw-font-inter tw-font-semibold tw-uppercase tw-leading-[1.3rem] tw-text-purple40 tw-tracking-[.02rem]">
          All Positions
        </p>
        <p className="tw-leading-[2.6rem] tw-font-playFair tw-text-h4 tw-text-gray80 tw-pt-5 tracking-[0.02rem]">
          See where you fit into the movement!{" "}
        </p>
        <p className="tw-leading-[2.6rem] tw-font-playFair tw-text-h4 tw-text-gray80 tw-pb-[5rem]">Apply now. We’ll surely get back to you at the soonest.</p>

        <div className="tw-flex tw-pt-[2rem] tw-gap-[.75rem]">
          <p className="tw-py-3 tw-text-gray40 ">Filter by:</p>

          <div className="tw-p-3 tw-border-2 tw-rounded-md tw-flex tw-gap-[.79rem]">
            <p className=" tw-text-gray80 tw-font-inter tw-text[.875rem] leading-[1.225rem]">
              Department
            </p>
            <Image src={ArrowDownSvg} alt="arrow down" />
          </div>
          <div className="tw-p-3 tw-border-2 tw-rounded-md tw-flex tw-gap-[.79rem]">
            <p className=" tw-text-gray80 tw-font-inter tw-text[.875rem] leading-[1.225rem]">
              Date
            </p>
            <Image src={ArrowDownSvg} alt="arrow down" />
          </div>
          <div className="tw-p-3 tw-border-2 tw-rounded-md tw-flex tw-gap-[.79rem]">
            <p className=" tw-text-gray80 tw-font-inter tw-text[.875rem] leading-[1.225rem]">
              Location
            </p>
            <Image src={ArrowDownSvg} alt="arrow down" />
          </div>
        </div>


        <PositionsGrid />
      </div>
    </div>
  );
};

export default page;
