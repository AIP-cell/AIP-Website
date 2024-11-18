import Image from "next/image";
import Src from "@public/images/mediaImage.png";
import React from "react";

type Props = {
  title: string;
  desc: string;
  ddmmyy: string;
};
const MediaCard = ({ title, ddmmyy, desc }: Props) => {
  return (
    <div className="tw-w-[18.438rem] tw-flex tw-flex-col tw-gap-[0.75rem]">
      <div className="tw-relative tw-w-full tw-h-[16.563rem] tw-overflow-hidden tw-rounded-2xl">
        <Image src={Src} alt="media-image" fill className="tw-object-cover" />
      </div>
      <h4 className="tw-font-semibold tw-text-gray80 pt-[0.75rem] tw-underline tw-decoration-[2px] tw-underline-offset-4">
        {title}
      </h4>
      <p className="tw-text-h9Copy5 tw-leading-[1.225rem] tw-text-gray50 ">
        {desc}
      </p>
      <div className="tw-bg-[#DFE0E5] tw-h-px"></div>
      <p className="tw-text-h9Copy5 tw-leading-[1.225rem] tw-text-gray50 ">
        {ddmmyy}
      </p>
    </div>
  );
};

export default MediaCard;
