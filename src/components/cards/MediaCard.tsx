import Image from "next/image";
import Src from "@public/images/mediaImage.png";
import React from "react";
import cn from "@/utils/tailwind";
import dayjs from "dayjs";
import Link from "next/link";

type Props = {
  title?: string;
  desc?: string;
  link?: string;
  ddmmyy?: string;
  index: number;
  mediaArrayLength: number;
};
const MediaCard = ({
  title,
  ddmmyy,
  desc,
  index,
  mediaArrayLength,
  link,
}: Props) => {
  const dateFormat = dayjs(ddmmyy).format("D MMMM");
  return (
    <div
      className={cn(
        "snap-center ~w-[16.125rem]/[18.438rem] shrink-0  flex flex-col gap-[0.75rem]",
        { "~pl-[1.25rem]/0": index === 0 },
        { "~pr-[1.25rem]/0": index === mediaArrayLength - 1 }
      )}
    >
      <div className="relative w-full ~h-[14.51rem]/[16.563rem] overflow-hidden rounded-2xl cursor-pointer">
        <Image src={Src} alt="media-image" fill className="object-cover" />
      </div>
      <Link
        href={link ?? ""}
        target="_blank"
        className="font-semibold text-gray80 pt-[0.75rem] underline decoration-[2px] underline-offset-4"
      >
        {title}
      </Link>
      <p className="text-h9Copy5 line-clamp-5 text-ellipsis overflow-hidden leading-[1.225rem] text-gray50 ">
        {desc}
      </p>
      <div className="bg-[#DFE0E5] h-px"></div>
      <p className="text-h9Copy5 leading-[1.225rem] text-gray50 ">
        {dateFormat}
      </p>
    </div>
  );
};

export default MediaCard;
