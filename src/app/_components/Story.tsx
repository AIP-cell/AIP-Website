import React from "react";
import StoryBg from "../../../public/svg/storyBg.svg";
import Image from "next/image";
const Story = () => {
  return (
    <div className="container tw-mx-auto tw-overflow-hidden tw-relative tw-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center">
      {/* <div className="tw-absolute -left-[23rem] h-[35rem] tw-w-full"> */}
      <Image
        src={StoryBg}
        alt="bg-image"
        className="tw-absolute tw-left-0 tw--bottom-[5rem]"
        // fill
      />
      {/* </div> */}
      <h2 className="tw-text-h2 tw-text-gray80 tw-flex tw-justify-center">
        Our <i className="tw-text-textPurple"> Story</i>
      </h2>
      <div className=" tw-pt-[3rem]  tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-[1rem]">
        <div className="tw-flex tw-flex-col tw-text-midGray tw-font-inter tw-items-center tw-justify-center tw-text-h9Copy4 tw-leading-[22.4px]">
          <p> When a river flows,</p>
          <p>it gives as much as it can</p>
          <p>To everyone on its way</p>
        </div>

        <div className="tw-flex tw-flex-col tw-items-center tw-text-midGray tw-font-inter tw-justify-center tw-text-h9Copy4 tw-leading-[22.4px]">
          <p>It nurtures ecosystems;</p>
          <p> connects communities</p> <p>and sculpts the landscape</p>
        </div>

        <div className="tw-flex tw-flex-col tw-items-center tw-text-midGray tw-font-inter tw-justify-center tw-text-h9Copy4 tw-leading-[22.4px]">
          <p>To enable conversations.</p> <p>To foster understanding.</p>
          <p>That inspires change.</p>
        </div>

        <div className="tw-flex tw-flex-col tw-items-center tw-text-midGray tw-font-inter tw-justify-center tw-text-h9Copy4 tw-leading-[22.4px]">
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
