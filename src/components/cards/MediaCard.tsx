import Image from "next/image";
import Src from "@public/images/mediaImage.png";
import React from "react";
import cn from "@/utils/tailwind";

type Props = {
  title: string;
  desc: string;
  ddmmyy: string;
  index: number;
  mediaArrayLength: number;
};
const MediaCard = ({ title, ddmmyy, desc, index, mediaArrayLength }: Props) => {
  return (
    <div
      className={cn(
        "tw-snap-center ~tw-w-[16.125rem]/[18.438rem] tw-shrink-0  tw-flex tw-flex-col tw-gap-[0.75rem]",
        { "~tw-pl-[1.25rem]/0": index === 0 },
        { "~tw-pr-[1.25rem]/0": index === mediaArrayLength - 1 }
      )}
    >
      <div className="tw-relative tw-w-full ~tw-h-[14.51rem]/[16.563rem] tw-overflow-hidden tw-rounded-2xl">
        <Image src={Src} alt="media-image" fill className="tw-object-cover" />
      </div>
      <h4 className="tw-font-semibold tw-text-gray80 pt-[0.75rem] tw-underline tw-decoration-[2px] tw-underline-offset-4">
        {title}
      </h4>
      <p className="tw-text-h9Copy5 tw-line-clamp-5 tw-text-ellipsis tw-overflow-hidden tw-leading-[1.225rem] tw-text-gray50 ">
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
