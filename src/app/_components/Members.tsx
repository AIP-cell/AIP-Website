import OvalPurple from "@/components/ovals/OvalPurple";
import Image from "next/image";
import React from "react";
import Bg from "@public/svg/wavePeachRight.svg";
import SmBg from "@public/svg/home/smMemberBg.svg";
import { THomePageCount } from "@/api/type";
import OvalPurpleCount from "@/components/ovals/OvalPurpleCount";

type Props = {
  countData: THomePageCount;
};
const Members = ({ countData }: Props) => {
  return (
    <div className=" tw-relative tw-w-full">
      <Image
        src={Bg}
        alt=""
        className="tw-hidden md:tw-block tw-object-cover tw-absolute tw-w-full ~md:~tw-bottom-[0rem]/[-10.5rem]"
      />
      <div className=" container tw-mx-auto ~tw-pt-[5rem]/[13.25rem]">
        <div className="tw-relative tw-flex tw-flex-col lg:tw-flex-row tw-w-full tw-h-[120vh]  ~tw-gap-[2rem]/0">
          <div className=" tw-w-full lg:tw-w-[65%] ~tw-pl-[1.25rem]/[7rem] ~/md:~tw-pr-[1.25rem]/[2rem] lg:tw-pr-0">
            <h2 className="~tw-text-h4/h2  tw-font-playFair tw-text-gray50 ~tw-leading-[2.6rem]/[3.3rem]">
              Accelerate Indian
            </h2>
            <h2 className="~tw-text-h4/h2  tw-font-playFair tw-text-gray50 ~tw-leading-[2.6rem]/[3.3rem] ">
              Philanthropy is a peer network set up
              <span className="tw-text-textPurple tw-font-playFairItalic">
                &nbsp;by philanthropists,
              </span>
            </h2>
            <h2 className="~tw-text-h4/h2 tw-font-playFair tw-text-gray50 ~tw-leading-[2.6rem]/[3.3rem] ">
              <span className="tw-text-textPurple tw-font-playFairItalic">
                for philanthropists
              </span>
              &nbsp;to support their giving efforts.
            </h2>
          </div>
          {/* <OvalPurpleSvg className="-top-[4rem] right-[11.85rem]"/> */}
          <div className="tw-w-full lg:tw-w-[35%] tw-relative">
            <Image
              src={SmBg}
              alt=""
              className="tw-block md:tw-hidden tw-object-cover tw-absolute tw-w-full tw-bottom-[-32rem]"
            />
            <OvalPurple
              sizeClass="~tw-size-[13rem]/[17.3rem]"
              textClass1="~tw-text-h4/h3"
              textClass2="~tw-text-h9Copy5/h9Copy4"
              text1={`${countData?.coreFoundersCount}`}
              text2="Core Founders"
              mainClass=" tw-absolute ~tw-top-0/[-4rem] tw-left-0 md:tw-left-auto ~md:~tw-right-[20rem]/[11.862rem] "
            />
            <OvalPurple
              sizeClass="~tw-size-[13rem]/[17.3rem]"
              textClass1="~tw-text-h4/h3"
              textClass2="~tw-text-h9Copy5/h9Copy4"
              text1={`${countData?.foundersCount}`}
              text2="Founders"
              mainClass=" tw-absolute ~tw-top-[6.75rem]/[15.5rem] tw-right-0  md:tw-right-[6.4rem] "
            />
            <OvalPurpleCount
              sizeClass="~tw-size-[13rem]/[17.3rem]"
              countEnd={countData?.membersCount}
              countClass="!tw-text-white"
              text2="Members"
              textClass2="~tw-text-h9Copy5/h9Copy4 !tw-text-white"
              mainClass="tw-absolute ~tw-top-[14.3rem]/[20rem] tw-left-0 md:tw-left-auto ~md:~tw-right-[25rem]/[26rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
