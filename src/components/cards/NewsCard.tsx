import { StorageUrl } from "@/utils/BaseUrl";
import Image from "next/image";
import React from "react";
type Props = {
  src?: string;
  text: string;
};
const NewsCard = ({ src, text }: Props) => {
  return (
    // ~w-[16rem]/[25rem]
    <div className="flex flex-col w-full  gap-[1.25rem] shrink-0 grow-0">
      <div className="relative w-full ~h-[14.8rem]/[22.5rem] rounded-2xl overflow-hidden">
        {src ? (
          <Image src={StorageUrl + src} alt="news-image" fill className="object-cover"/>
        ) : (
          <div className="absolute inset-0 w-full h-full bg-white"></div>
        )}
      </div>
      <div
        className={`font-inter ~text-h9Copy5/h8Copy3 ~leading-[1.225rem]/[1.575rem]`}
      >
        {text}
      </div>
    </div>
  );
};

export default NewsCard;
