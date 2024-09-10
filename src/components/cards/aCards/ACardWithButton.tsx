import Image from "next/image";
import React from "react";
// import Src from "@public/images/aSample.png";
import RightArrow from "@public/svg/rightTag.svg";
import Linkedin from "@public/svg/grayLinkedin.svg";
import ASvg from "@/components/svg/ASvg";
import cn from "@/utils/tailwind";
const ACardWithButton = ({ className }: { className?: string }) => {
  return (
    <div className={cn("tw-w-full md:tw-w-[18.43rem] tw-relative ", className)}>
      <Image
        src={Linkedin}
        alt=""
        className="tw-absolute tw-top-0 tw-right-0"
      />
      {/* <Image src={Src} alt="" /> */}
      <ASvg className="tw-w-full" src="/images/aSample.png" />
      <div className="tw-flex tw-flex-col tw-gap-[0.75rem]">
        <div className="tw-flex tw-items-center tw-gap-[0.75rem]">
          <h3 className="~tw-text-h4a/h4 tw-leading-[2.6rem] tw-text-gray80 tw-font-playFair">
            Ashish Dhawan
          </h3>
          <div className="tw-bg-darkPurple  tw-rounded-full">
            <p className="tw-p-[0.25rem] ">
              <Image src={RightArrow} alt="" className="tw-size-[0.75rem] " />
            </p>
          </div>
        </div>
        <h4 className="~tw-text-h6/h5 tw-font-playFair tw-text-gray50 tw-font-medium tw-italic">
          The Convergence Foundation
        </h4>
        <p className="~tw-text-h9Copy5/h9Copy4 tw-leading-[1.4rem] tw-font-inter ">
          “I believe a lot more needs to be done particularly to encourage
          first-time givers. AIP aims to fill this gap and spur philanthropy in
          a very structured manner.’’
        </p>
      </div>
    </div>
  );
};

export default ACardWithButton;
