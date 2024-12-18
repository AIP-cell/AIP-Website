import Image from "next/image";
import React from "react";
import EyeSvg from "../svg/EyeSvg";
import DownloadFileSvg from "../svg/DowloadFileSvg";
import dayjs from "dayjs";
import { StorageUrl } from "@/utils/BaseUrl";
import Link from "next/link";
type Props = {
  src: string;
  title: string;
  desc: string;
  category?: string;
  name?: string;
  date?: string;
  link?: string;
};
const ResourceCard = ({
  src,
  title,
  desc,
  category,
  name,
  date,
  link,
}: Props) => {
  const dateFormat = dayjs(date).format("D MMMM");
  return (
    // justify-center
    <div className="flex flex-col  items-center ~gap-[1.25rem]/[0.75rem]">
      <div className="relative w-full ~h-[19.688rem]/[16.594rem]">
        <Image
          src={StorageUrl + src}
          alt="svg"
          fill
          className="object-cover rounded-[1.25rem]"
        />
      </div>
      <div className="flex flex-col w-full gap-[0.75rem]">
        <p
          className=" w-full text-h6M text-gray80 font-inter font-semibold leading-[1.575rem] underline underline-offset-4 decoration-[1.5px]"
        >
          {title}
        </p>
        {name && (
          <p className=" w-full text-gray40 font-playFairItalic font-medium ~leading-[1.4rem]/[1.575rem] ">
            {name}
          </p>
        )}
        <p className="text-h9Copy5 text-gray50 font-inter leading-[1.225rem]">
          {desc}
        </p>
      </div>
      <div className="h-px bg-footerGray w-full"></div>
      <div className="flex justify-between w-full text-h9Copy5 text-gray50 font-inter leading-[1.225rem]">
        <p>{dateFormat}</p>
        <p>{category}</p>
      </div>
      {/* <div className="h-px bg-footerGray w-full"></div>
      <div className="flex justify-start w-full gap-[.75rem]">
        <div className="group text-darkPurple bg-bgGray5 w-[2.5rem] hover:text-white  hover:bg-darkPurple  transition-all  h-[2.5rem] rounded-full flex items-center justify-center p-[.5rem]">
          <EyeSvg className="size-[1.5rem]" />
        </div>

        <div className="group text-darkPurple hover:text-white bg-bgGray5 w-[2.5rem]  hover:bg-darkPurple  transition-all  h-[2.5rem] rounded-full flex items-center justify-center p-[.5rem]">
          <DownloadFileSvg className="size-[1.5rem]" />
        </div>
      </div> */}
    </div>
  );
};

export default ResourceCard;
