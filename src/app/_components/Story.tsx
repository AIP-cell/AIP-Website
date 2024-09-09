import React from "react";
import StoryBg from "../../../public/svg/storyBg.svg";
import Image from "next/image";
const Story = () => {
  return (
    <div className=" ~tw-pt-[2.5rem]/0 container tw-mx-auto tw-overflow-hidden tw-relative  tw-flex tw-flex-col tw-justify-center tw-items-center">
      {/* <div className="tw-absolute -left-[23rem] h-[35rem] tw-w-full"> */}
      <Image
        src={StoryBg}
        alt="bg-image"
        className="tw-absolute tw-left-0 tw--bottom-[5rem]"
        // fill
      />
      {/* </div> */}
      <h2 className="~tw-text-h4/h2 tw-text-gray80 tw-font-playFair tw-flex tw-justify-center">
        Our <span className="tw-text-textPurple tw-font-playFairItalic"> &nbsp;Story</span>
      </h2>
      <div className=" ~tw-pt-[2rem]/[3rem]  tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-[1rem]">
        <div className="tw-flex tw-flex-col tw-text-midGray  tw-items-center tw-justify-center ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.22rem]/[1.4rem]">
          <p> When a river flows,</p>
          <p>it gives as much as it can</p>
          <p>To everyone on its way</p>
        </div>

        <div className="tw-flex tw-flex-col tw-items-center tw-text-midGray  tw-justify-center tw-text-h9Copy4 tw-leading-[22.4px]">
          <p>It nurtures ecosystems;</p>
          <p> connects communities</p> <p>and sculpts the landscape</p>
        </div>

        <div className="tw-flex tw-flex-col tw-items-center tw-text-midGray  tw-justify-center tw-text-h9Copy4 tw-leading-[22.4px]">
          <p>To enable conversations.</p> <p>To foster understanding.</p>
          <p>That inspires change.</p>
        </div>

        <div className="tw-flex tw-flex-col tw-items-center tw-text-midGray  tw-justify-center tw-text-h9Copy4 tw-leading-[22.4px]">
          <p>AIP is the gentle uplifting spirit,</p>
          <p>The bank that holds, that shapes it all.</p>
          <p>To form & connect networks.</p> <p>That bridge gaps.</p>
          <p>Taking a philanthropist,</p> <p>From inspiration to impact.</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
