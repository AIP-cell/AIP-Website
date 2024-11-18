import PSvg from "@/components/svg/PSvg";
import Image from "next/image";
import Linkedin from "@public/svg/grayLinkedin.svg";
import React from "react";
type Props = {
  image?: string;
  name: string;
  work: string;
  desc: string;
  nameClass?: string;
  linkedin?: boolean;
};
const PCard = ({ image, name, work, desc, nameClass, linkedin }: Props) => {
  return (
    <div className="tw-w-[18.43rem] tw-relative ">
      {linkedin && (
        <Image
          src={Linkedin}
          alt=""
          className="tw-absolute tw-top-0 tw-right-0"
        />
      )}
      {image && (
        <div className="tw-w-[18.43rem] tw-h-[21.56rem] tw-relative">
          <div className="tw-w-[18.43rem] tw-h-[21.56rem] tw-relative">
            <PSvg src={image} className=" tw-w-[18.43rem] tw-h-[21.56rem]" />
            {/* <Image src={image} alt="" fill /> */}
          </div>
        </div>
      )}
      <div className="tw-flex tw-flex-col tw-gap-[0.75rem]">
        <h3
          className={`tw-text-h4 tw-leading-[2.6rem] tw-text-gray80 tw-font-playFair ${nameClass}`}
        >
          {name}
        </h3>
        <h4 className="tw-text-h5 tw-font-playFair tw-text-gray50 tw-font-medium tw-italic">
          {work}
        </h4>
        <p className="tw-text-h9Copy4 tw-leading-[1.4rem] tw-font-inter tw-line-clamp-5 tw-text-ellipsis tw-text-midGray">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default PCard;
