"use client";
import Image from "next/image";
import Src from "@public/images/pSample.png";
import PlayButtonPurple from "@public/svg/playButtonPurple.svg";
import Linkedin from "@public/svg/grayLinkedin.svg";

import PSvg from "@/components/svg/PSvg";
import Link from "next/link";
import { useState } from "react";
import CustomModal from "@/components/custom/CustomModal";
import cn from "@/utils/tailwind";
type Props = {
  image?: string;
  linkOrVideo?: string;
  name?: string;
  slug?: string;
  post?: string;
  desc?: string;
  linkedin?: boolean;
  darkText?: boolean;
  linkedinLink?: string;
  video?: string;
  videoLink?: string;
};
const PCardWithPlaySign = ({
  image,
  name,
  post,
  slug,
  desc,
  linkOrVideo,
  linkedin,
  linkedinLink,
  video,
  videoLink,
  darkText,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-[18.43rem] relative ">
        {linkedin && (
          <Link
            href={linkedinLink ?? ""}
            target="_blank"
            className="absolute top-0 right-0 z-50"
          >
            <Image src={Linkedin} alt="" />
          </Link>
        )}
        <div className="relative flex justify-center">
          <PSvg src={image} className="w-[18.438rem] h-[21.563rem]" />
          {linkOrVideo != "" && (
            <Image
              src={PlayButtonPurple}
              onClick={() => setIsOpen(true)}
              alt=""
              className="absolute bottom-[4rem] hover:scale-105 transition-all duration-150 cursor-pointer"
            />
          )}
        </div>
        <div className="flex flex-col gap-[0.75rem]">
          <Link
            href={`/people-of-aip/coreFounder/${slug}`}
            className={cn(
              "!text-h4 leading-[2.6rem] text-[#DFE0E5] font-playFair hover:underline underline-offset-4 decoration-[1px] transition-all duration-500",
              { "text-gray80": darkText }
            )}
          >
            {name}
          </Link>
          <h4
            className={cn(
              "!text-h5 font-playFair text-lightPurplePink font-medium italic line-clamp-1 text-ellipsis",
              { "text-gray50": darkText }
            )}
          >
            {post}
          </h4>
          <div
            dangerouslySetInnerHTML={{ __html: desc || "" }}
            className={cn(
              "!text-h9Copy4 leading-[1.4rem] line-clamp-4 md:line-clamp-5 text-ellipsis font-inter !text-[#DFE0E5] ",
              { "!text-midGray": darkText }
            )}
          ></div>
        </div>
      </div>
      <CustomModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        linkOrVideo={linkOrVideo}
        video={video}
        videoLink={videoLink}
      />
    </>
  );
};

export default PCardWithPlaySign;
