import Image from "next/image";
import React from "react";
import PlayButtonPurple from "@public/svg/playButtonPurple.svg";
import { StorageUrl } from "@/utils/BaseUrl";
import dayjs from "dayjs";

type Props = {
  src?: string;
  date?: string;
  title?: string;
  desc2?: string;
};
const GalleryVideo = ({ src, date, title, desc2 }: Props) => {
  const format = dayjs(date).format("D MMMM YYYY");
  return (
    <div>
      <div className="relative shrink-0 ~w-[21.8rem]/[31.5rem] ~h-[14.3rem]/[20.698rem] rounded-xl overflow-hidden flex items-center justify-center">
        {src && (
          <video className="absolute inset-0 w-full h-full object-cover z-10">
            <source src={StorageUrl + src} type="video/mp4" />
          </video>
        )}
        {/* <Image src={src} alt="" fill className="object-cover z-10" /> */}
        <Image
          src={PlayButtonPurple}
          alt=""
          className="z-20 hover:scale-105 transition-all duration-150 cursor-pointer size-[3.312rem]"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between ~gap-[0.25rem]/[3rem] ~pt-[1rem]/[0.75rem]">
        <div className="leading-[1.4rem] font-bold  text-midGray">
          <p className="">{title}</p>
          <p className="">{desc2}</p>
        </div>
        <p className="leading-[1.4rem] text-midGray">{format}</p>
      </div>
    </div>
  );
};

export default GalleryVideo;
