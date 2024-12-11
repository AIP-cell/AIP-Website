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
        "snap-center ~w-[16.125rem]/[18.438rem] shrink-0  flex flex-col gap-[0.75rem]",
        { "~pl-[1.25rem]/0": index === 0 },
        { "~pr-[1.25rem]/0": index === mediaArrayLength - 1 }
      )}
    >
      <div className="relative w-full ~h-[14.51rem]/[16.563rem] overflow-hidden rounded-2xl">
        <Image src={Src} alt="media-image" fill className="object-cover" />
      </div>
      <h4 className="font-semibold text-gray80 pt-[0.75rem] underline decoration-[2px] underline-offset-4">
        {title}
      </h4>
      <p className="text-h9Copy5 line-clamp-5 text-ellipsis overflow-hidden leading-[1.225rem] text-gray50 ">
        {desc}
      </p>
      <div className="bg-[#DFE0E5] h-px"></div>
      <p className="text-h9Copy5 leading-[1.225rem] text-gray50 ">
        {ddmmyy}
      </p>
    </div>
  );
};

export default MediaCard;
