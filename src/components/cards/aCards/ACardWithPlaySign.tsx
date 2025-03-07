import Image from "next/image";
import React, { useState } from "react";
import Src from "@public/images/aSample.png";
import Linkedin from "@public/svg/grayLinkedin.svg";

import PlayButtonPurple from "@public/svg/playButtonPurple.svg";
import ASvg from "@/components/svg/ASvg";
import CustomModal from "@/components/custom/CustomModal";
import Link from "next/link";
import cn from "@/utils/tailwind";
type Props = {
  image?: string;
  name?: string;
  post?: string;
  desc?: string;
  slug?: string;
  linkOrVideo?: string;
  videoLink?: string;
  video?: string;
  linkedin?: boolean;
  linkedinLink?: string;
  darkText?: boolean;
};
// "  "
const ACardWithPlaySign = ({
  image,
  name,
  post,
  slug,
  desc,
  linkedin,
  linkedinLink,
  linkOrVideo,
  video,
  videoLink,
  darkText,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isVideo = linkOrVideo === "Video";
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
          <ASvg src={image} className="w-[18.438rem] h-[21.563rem]" />

          {linkOrVideo != "" && (
            <Image
              onClick={() => setIsOpen(true)}
              src={PlayButtonPurple}
              alt=""
              className="absolute bottom-[4rem] hover:scale-105 transition-all duration-150 cursor-pointer"
            />
          )}
        </div>
        <div className="flex flex-col gap-[0.75rem]">
          <Link
            href={`/people-of-aip/coreFounder/${slug}`}
            className={cn(
              "!text-h4 leading-[2.6rem] text-[#DFE0E5] font-playFair underline underline-offset-4 decoration-[1px] ",
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
              "!text-h9Copy4 leading-[1.4rem] font-inter line-clamp-4 md:line-clamp-5 text-ellipsis !text-[#DFE0E5] ",
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

export default ACardWithPlaySign;
