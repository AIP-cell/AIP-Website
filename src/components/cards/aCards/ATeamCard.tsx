import Image from "next/image";
import React from "react";
import Linkedin from "@public/svg/grayLinkedin.svg";
import Src from "@public/images/aTeamSample.png";
import ASvg from "@/components/svg/ASvg";
import AMediumSizeSvg from "@/components/svg/AMediumSizeSvg";
type Props = {
  linkedin: boolean;
  title: string;
  title2: string;
  desc: string;
};
const ATeamCard = ({ linkedin, title,title2, desc }: Props) => {
  return (
    <div className="tw-w-[11.87rem] tw-relative">
      {/* <Image src={Src} alt="" className="tw-w-full" /> */}
      <AMediumSizeSvg
        src="/images/sample.png"
        className="tw-w-[11.87rem] tw-h-[13.88rem]"
      />
      {linkedin && (
        <Image
          src={Linkedin}
          alt=""
          className="tw-absolute tw-top-0 tw-right-0 tw-size-[2.5rem]"
        />
      )}
      <div className="tw-flex tw-flex-col tw-gap-[0.5rem]">
        <h3 className="tw-text-h4 tw-leading-[2.6rem] tw-text-gray80 tw-font-playFair">
          {title}
        </h3>
        <h3 className="tw-text-h4 tw-leading-[2.6rem] tw-text-gray80 tw-font-playFair">
          {title2}
        </h3>
        <p className="tw-italic tw-text-h5 tw-text-gray40 tw-leading-[1.75rem] tw-font-playFair ">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ATeamCard;
