import React from "react";
import BgVideo from "@public/images/sampleVideo.png";
import videoPlaySvg from "@public/svg/playButtonPurple.svg";
import rightBottomCurve from "@public/svg/products-and-services/offerings/peachLeftBottomCurve.svg";
import LeftCurve from "@public/svg/products-and-services/collaborations/leftPeachCurve.svg";

import Image from "next/image";
const InnerCollaborationsVideo = () => {
  return (
    <div className="relative ">
      <Image
        src={LeftCurve}
        alt=""
        className="hidden absolute left-0 bottom-[-15rem]"
      />

      <div className="~pt-[2rem]/[3.5rem]   container relative flex justify-center mx-auto">
        <div className="w-[64.375rem] relative flex justify-center items-center ~h-[12.313rem]/[35.313rem] overflow-hidden rounded-lg">
          {/* <Image
            src={rightBottomCurve}
            alt="video-bg"
            className=" absolute left-0 bottom-[-18.625rem]"
          /> */}
          <Image
            src={BgVideo}
            alt="video-bg"
            className="object-cover absolute inset-0 rounded-lg h-full"
          />
          <Image src={videoPlaySvg} alt="play-svg" className="z-10" />
        </div>
      </div>
    </div>
  );
};

export default InnerCollaborationsVideo;
