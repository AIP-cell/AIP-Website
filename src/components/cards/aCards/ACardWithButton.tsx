import Image from "next/image";
import React from "react";
// import Src from "@public/images/aSample.png";
import RightArrow from "@public/svg/rightTag.svg";
import Linkedin from "@public/svg/grayLinkedin.svg";
import ASvg from "@/components/svg/ASvg";
import cn from "@/utils/tailwind";
const ACardWithButton = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full md:w-[18.43rem] relative ", className)}>
      <Image
        src={Linkedin}
        alt=""
        className="absolute top-0 right-0"
      />
      {/* <Image src={Src} alt="" /> */}
      <ASvg className="w-full" src="/images/aSample.png" />
      <div className="flex flex-col gap-[0.75rem]">
        <div className="flex items-center ">
          <h3 className="~text-h4a/h4 leading-[2.6rem] text-gray80 font-playFair">
            Ashish Dhawan
          </h3>
          {/* <div className="bg-darkPurple  rounded-full">
            <p className="p-[0.25rem] ">
              <Image src={RightArrow} alt="" className="size-[0.75rem] " />
            </p>
          </div> */}
        </div>
        <h4 className="~text-h6/h5 font-playFair text-gray50 font-medium italic">
          The Convergence Foundation
        </h4>
        <p className="~text-h9Copy5/h9Copy4 leading-[1.4rem] font-inter ">
          “I believe a lot more needs to be done particularly to encourage
          first-time givers. AIP aims to fill this gap and spur philanthropy in
          a very structured manner.’’
        </p>
      </div>
    </div>
  );
};

export default ACardWithButton;
