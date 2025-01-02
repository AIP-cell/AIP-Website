import Image from "next/image";
import React from "react";
import Src from "@public/images/aSample.png";
import Linkedin from "@public/svg/grayLinkedin.svg";

import PlayButtonPurple from "@public/svg/playButtonPurple.svg";
import ASvg from "@/components/svg/ASvg";
type Props = {
  image: string;
  name: string;
  post: string;
  desc: string;
  linkedin?: boolean;
};
// "  "
const ACardWithPlaySign = ({ image, name, post, desc, linkedin }: Props) => {
  return (
    <div className="w-[18.43rem] relative ">
      {linkedin && (
        <Image src={Linkedin} alt="" className="absolute top-0 right-0" />
      )}
      <div className="relative flex justify-center">
        <ASvg src={image} className="w-[18.438rem] h-[21.563rem]"/>
        <Image
          src={PlayButtonPurple}
          alt=""
          className="absolute bottom-[4rem] hover:scale-105 transition-all duration-150 cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-[0.75rem]">
        <h3 className="text-h4 leading-[2.6rem] text-[#DFE0E5] font-playFair underline underline-offset-4 decoration-[1px] ">
          {name}
        </h3>
        <h4 className="text-h5 font-playFair text-lightPurplePink font-medium italic line-clamp-1 text-ellipsis">
          {post}
        </h4>
        <div
          dangerouslySetInnerHTML={{ __html: desc || "" }}
          className="text-h9Copy4 leading-[1.4rem] font-inter line-clamp-4 md:line-clamp-5 text-ellipsis text-[#DFE0E5] "
        >
          {/* {desc} */}
        </div>
      </div>
    </div>
  );
};

export default ACardWithPlaySign;
