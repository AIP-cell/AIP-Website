import Image from "next/image";
import React from "react";
// import Src from "@public/images/pSample.png";
import RightArrow from "@public/svg/rightTag.svg";
import Linkedin from "@public/svg/grayLinkedin.svg";
import PSvg from "@/components/svg/PSvg";

const PCardWithButton = () => {
  return (
    <div className="tw-w-[18.43rem] tw-relative">
      <Image
        src={Linkedin}
        alt=""
        className="tw-absolute tw-top-0 tw-right-0"
      />
      {/* <Image src={Src} alt="" /> */}
      <PSvg src="/images/pSample.png"/>
      <div className="tw-flex tw-flex-col tw-gap-[0.75rem]">
        <div className="tw-flex tw-items-center tw-gap-[0.75rem]">
          <h3 className="tw-text-h4 tw-leading-[2.6rem] tw-text-gray80 tw-font-playFair">
            Ashish Dhawan
          </h3>
          <div className="tw-bg-darkPurple  tw-rounded-full">
            <p className="tw-p-[0.25rem] ">
              <Image src={RightArrow} alt="" className="tw-size-[0.75rem] " />
            </p>
          </div>
        </div>
        <h4 className="tw-text-h5 tw-font-playFair tw-text-gray50 tw-font-medium tw-italic">
          The Convergence Foundation
        </h4>
        <p className="tw-text-h9Copy4 tw-leading-[1.4rem] tw-font-inter ">
          “I believe a lot more needs to be done particularly to encourage
          first-time givers. AIP aims to fill this gap and spur philanthropy in
          a very structured manner.’’
        </p>
      </div>
    </div>
  );
};

export default PCardWithButton;
