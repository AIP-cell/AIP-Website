import React from "react";
import videoPlaySvg from "@public/svg/playButtonPurple.svg";
import LeftCurve from "@public/svg/products-and-services/collaborations/leftPeachCurve.svg";

import Image from "next/image";
import { StorageUrl } from "@/utils/BaseUrl";
type Props = {
  video?: string;
  linkOrVideo?: string;
};
const InnerCollaborationsVideo = ({ video, linkOrVideo }: Props) => {
  return (
    <div className="relative ">
      <Image
        src={LeftCurve}
        alt=""
        className="hidden absolute left-0 bottom-[-15rem]"
      />

      <div className="~pt-[2rem]/[3.5rem]   container relative flex justify-center mx-auto">
        {linkOrVideo === "Video" ? (
          <div className="w-[64.375rem] relative flex justify-center items-center ~h-[12.313rem]/[35.313rem] overflow-hidden rounded-lg">
            <video className="z-10 border-2 absolute inset-0 w-full h-full ">
              <source src={StorageUrl + video} type="video/mp4" />
            </video>
            <Image
              src={videoPlaySvg}
              alt="play-svg"
              className="z-50 cursor-pointer"
            />
          </div>
        ) : (
          <div className="w-[64.375rem] relative flex justify-center items-center ~h-[12.313rem]/[35.313rem] overflow-hidden rounded-lg">
            <video className="z-10 border-2 absolute inset-0 w-full h-full ">
              <source src={StorageUrl + video} type="video/mp4" />
            </video>
            <Image
              src={videoPlaySvg}
              alt="play-svg"
              className="z-50 cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InnerCollaborationsVideo;
