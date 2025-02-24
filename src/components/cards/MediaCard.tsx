import Image from "next/image";
import React from "react";
import cn from "@/utils/tailwind";
import dayjs from "dayjs";
import Link from "next/link";
import { StorageUrl } from "@/utils/BaseUrl";

type Props = {
  title?: string;
  desc?: string;
  link?: string;
  ddmmyy?: string;
  image?: string;
  index: number;
  mediaArrayLength: number;
};
const MediaCard = ({
  title,
  ddmmyy,
  image,
  desc,
  index,
  mediaArrayLength,
  link,
}: Props) => {
  const dateFormat = dayjs(ddmmyy).format("D MMMM");
  return (
    <div
      // ~w-[16.125rem]/[18.438rem]
      className={cn("  flex flex-col gap-[0.75rem] w-full")}
    >
      <div className="relative w-full ~h-[14.51rem]/[16.563rem] overflow-hidden rounded-2xl cursor-pointer">
        <Image
          src={image ? StorageUrl + image : "/images/resourceCardThumbnail.png"}
          alt="media-image"
          fill
          className="object-cover"
        />
      </div>
      <Link
        href={link ?? ""}
        target="_blank"
        className="font-semibold line-clamp-2 text-ellipsis md:line-clamp-none  text-gray80  pt-[0.75rem] underline decoration-[2px] underline-offset-4"
      >
        {title}
      </Link>
      <p className="text-h9Copy5 line-clamp-4 text-ellipsis overflow-hidden leading-[1.225rem] text-gray50 ">
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
