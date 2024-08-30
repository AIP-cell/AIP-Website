import Image from "next/image";
import React from "react";
import Linkedin from "@public/svg/grayLinkedin.svg";
import Src from "@public/images/aTeamSample.png";
type Props = {
  linkedin: boolean;
};
const ATeamCard = ({ linkedin }: Props) => {
  return (
    <div className="tw-w-[11.87rem] tw-relative">
      <Image src={Src} alt="" className="tw-w-full" />
      {linkedin && (
        <Image
          src={Linkedin}
          alt=""
          className="tw-absolute tw-top-0 tw-right-0 tw-size-[2.5rem]"
        />
      )}
      <div className="tw-flex tw-flex-col tw-gap-[0.5rem]">
        <h3 className="tw-text-h4 tw-leading-[2.6rem] tw-text-gray80 tw-font-playFair">
          Ashish Dhawan
        </h3>
        <p className="tw-italic tw-text-h5 tw-text-gray40 tw-leading-[1.75rem] tw-font-playFair ">
          Operating Partner
        </p>
      </div>
    </div>
  );
};

export default ATeamCard;
