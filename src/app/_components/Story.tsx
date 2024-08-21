import React from "react";
import StoryBg from "../../../public/svg/storyBg.svg";
import Image from "next/image";
const Story = () => {
  return (
    <div className="container mx-auto overflow-hidden relative h-screen flex flex-col justify-center items-center">
      {/* <div className="absolute -left-[23rem] h-[35rem] w-full"> */}
          <Image
            src={StoryBg}
            alt="bg-image"
            className="absolute left-0 -bottom-[5rem]"
            // fill
          />

      {/* </div> */}
      <h2 className="text-h2Heading2 text-gray80 flex justify-center">
        Our <i className="text-textPurple"> Story</i>
      </h2>
      <div className=" pt-[3rem]  flex flex-col justify-center items-center gap-[1rem]">
        <div className="flex flex-col text-midGray font-inter items-center justify-center text-h9BodyCopy4 leading-[22.4px]">
          <p> When a river flows,</p>
          <p>it gives as much as it can</p>
          <p>To everyone on its way</p>
        </div>

        <div className="flex flex-col items-center text-midGray font-inter justify-center text-h9BodyCopy4 leading-[22.4px]">
          <p>It nurtures ecosystems;</p>
          <p> connects communities</p> <p>and sculpts the landscape</p>
        </div>

        <div className="flex flex-col items-center text-midGray font-inter justify-center text-h9BodyCopy4 leading-[22.4px]">
          <p>To enable conversations.</p> <p>To foster understanding.</p>
          <p>That inspires change.</p>
        </div>

        <div className="flex flex-col items-center text-midGray font-inter justify-center text-h9BodyCopy4 leading-[22.4px]">
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
