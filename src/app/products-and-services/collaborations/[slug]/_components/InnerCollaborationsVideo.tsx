import React from "react";
import BgVideo from "@public/images/sampleVideo.png";
import videoPlaySvg from "@public/svg/playButtonPurple.svg";
import rightBottomCurve from "@public/svg/products-and-services/offerings/peachLeftBottomCurve.svg";
import Image from "next/image";
const InnerCollaborationsVideo = () => {
  return (
    <div className="~tw-pt-8/[7.5rem]  container tw-relative tw-flex tw-justify-center tw-mx-auto">
      <div className="tw-w-[64.375rem] tw-relative tw-flex tw-justify-center tw-items-center ~tw-h-[12.313rem]/[35.313rem] tw-overflow-hidden tw-rounded-lg">
        <Image
          src={rightBottomCurve}
          alt="video-bg"
          className=" tw-absolute tw-left-0 tw-bottom-[-18.625rem]"
        />
        <Image
          src={BgVideo}
          alt="video-bg"
          className="tw-object-cover tw-absolute tw-inset-0"
        />
        <Image src={videoPlaySvg} alt="play-svg" className="tw-z-10" />
      </div>
    </div>
  );
};

export default InnerCollaborationsVideo;
