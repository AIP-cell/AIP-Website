import React from "react";
import Link from "next/link";
import Image from "next/image";
import OurThreeIs from "./_components/whyWork";
import Bg from "@public/svg/aboutPage/giving-roadmap/givingRoadMapHeroSectionBg.svg";
import OvalPurple from "@public/svg/ovalPurple.svg";

const page = () => {
  return (
    <div className="container tw-mx-auto tw-relative">
      <div className="tw-absolute tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
        <Link
          href=""
          className="tw-text-gray50 tw-text-h9BodyCopy5 tw-leading-[19.6px]"
        >
          {"<"}Careers / &nbsp;
        </Link>
        <Link href="#"> All Positions</Link>
      </div>

      <div className="tw-text-center tw-relative">
        <Image src={Bg} alt="" className="tw-absolute tw-top-[11rem]" />
        <Image
          src={OvalPurple}
          alt=""
          className="tw-absolute tw-bottom-[7rem] tw-right-[7.8rem]"
        />
        <p className=" tw-px-[20rem] tw-pt-[7.5rem] tw-pb-[21.531rem] tw-text-h1 tw-text-gray80 tw-leading-[3.713rem] tw-font-playFair tw-tracking-[-.04rem]">
          AIP is a peer network that{" "}
          <span className="tw-italic tw-text-textPurple">
            channels the flow{" "}
          </span>
          to accelerate strategic giving in India - a movement{" "}
          <span className="tw-italic tw-text-textPurple">
            by and for philanthropists{" "}
          </span>
        </p>
      </div>

      <div className="tw-max-w-[38.125rem] tw-relative tw-text-center container tw-mx-auto">
        <p className="tw-text-h2 tw-text-gray80 tw-leading-[3.713rem] tw-font-playFair tw-tracking-[-.04rem] tw-pb-5">
          Why Work With{" "}
          <span className="tw-italic tw-text-textPurple">AIP?</span>
        </p>
        <div className="tw-font-inter tw-text-midGray tw-pb-20">
          <p>Philanthropy can impact India’s future.</p>
          <p>And you can be a part of creating that impact.</p>
        </div>

        <OurThreeIs />

        <div className="tw-pt-[12.5rem]">
          <p className="tw-font-playFair tw-tracking-[-.04rem] tw-text-h2 tw-text-gray80 tw-leading-[3.3rem] tw-pb-5">
            {" "}
            Open
            <span className="tw-italic tw-text-textPurple">Roles</span>
          </p>
          <p className="tw-font-inter tw-text-midGray tw-leading-[1.4rem]">Join the movement to bring about</p>
          <p className="tw-font-inter tw-text-midGray tw-leading-[1.4rem]">strategic philanthropy impact India’s transformation.</p>
        </div>
      </div>
    </div>
  );
};

export default page;
