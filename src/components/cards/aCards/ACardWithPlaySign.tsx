import Image from "next/image";
import React from "react";
import Src from "@public/images/aSample.png";
import Linkedin from "@public/svg/grayLinkedin.svg";

import PlayButtonPurple from "@public/svg/playButtonPurple.svg";
import ASvg from "@/components/svg/ASvg";
type Props={
  image: string
  name: string
  post: string
  desc: string
  linkedin?: boolean;
}
// "  "
const ACardWithPlaySign = ({image,name,post,desc,linkedin}:Props) => {
  return (
    <div className="tw-w-[18.43rem] tw-relative ">
      {linkedin && (
        <Image
          src={Linkedin}
          alt=""
          className="tw-absolute tw-top-0 tw-right-0"
        />
      )}
      <div className="tw-relative tw-flex tw-justify-center">
        <ASvg src={image} />
        <Image
          src={PlayButtonPurple}
          alt=""
          className="tw-absolute tw-bottom-[4rem] hover:tw-scale-105 tw-transition-all tw-duration-150 tw-cursor-pointer"
        />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-[0.75rem]">
        <h3 className="tw-text-h4 tw-leading-[2.6rem] tw-text-[#DFE0E5] tw-font-playFair tw-underline tw-underline-offset-4 tw-decoration-[1px] ">
          {name}
        </h3>
        <h4 className="tw-text-h5 tw-font-playFair tw-text-lightPurplePink tw-font-medium tw-italic tw-line-clamp-1 tw-text-ellipsis">
          {post}
        </h4>
        <p className="tw-text-h9Copy4 tw-leading-[1.4rem] tw-font-inter tw-line-clamp-4 md:tw-line-clamp-5 tw-text-ellipsis tw-text-[#DFE0E5] ">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ACardWithPlaySign;
