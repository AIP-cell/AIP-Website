"use client";
import Image from "next/image";
import React, { useState } from "react";
import Linkedin from "@public/svg/grayLinkedin.svg";
import PlayButtonPurple from "@public/svg/playButtonPurple.svg";
import AMediumSizeSvg from "@/components/svg/AMediumSizeSvg";
import Link from "next/link";
import cn from "@/utils/tailwind";
import CustomModal from "@/components/custom/CustomModal";

type Props = {
  linkedin: boolean;
  linkedinLink?: string;
  slug?: string;
  title?: string;
  location?: string;
  email?: string;
  image?: string;
  desc?: string;
  titleClassName?: string;
  locationClassName?: string;
  sizeClass?: string;
  link?: string;
  // Video props
  linkOrVideo?: string;
  video?: string;
  videoLink?: string;
  showVideoButton?: boolean;
};

const ATeamCardWithPlayButton = ({
  slug,
  link,
  image,
  linkedin,
  linkedinLink,
  title,
  location,
  email,
  desc,
  titleClassName,
  locationClassName,
  sizeClass,
  linkOrVideo,
  video,
  videoLink,
  showVideoButton,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "max-[23rem]:w-[8rem] flex flex-col items-center ~w-[10rem]/[11.87rem] relative",
        sizeClass
      )}
    >
      <div className="relative flex justify-center">
        <AMediumSizeSvg
          src={image}
          className="max-[23rem]:w-[8rem] ~w-[10rem]/[11.87rem]"
        />
        {/* LinkedIn Icon */}
        {linkedinLink && linkedin && (
          <Link
            href={linkedinLink}
            target="_blank"
            className="absolute top-0 right-0 size-[2.5rem] z-50"
          >
            <Image src={Linkedin} alt="LinkedIn" />
          </Link>
        )}
      </div>
      {showVideoButton && linkOrVideo && (
        <>
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 ~top-[7.5rem]/[10.5rem] z-50 bg-[#A08CC9] rounded-full ~w-[3rem]/[3.5rem] ~h-[3rem]/[3.5rem] flex items-center justify-center shadow-lg"
            onClick={() => setIsOpen(true)}
            aria-label="Play Video"
            style={{ marginTop: "-.25rem" }}
          >
            <Image src={PlayButtonPurple} alt="Play" width={32} height={32} />
          </button>
          <CustomModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            linkOrVideo={linkOrVideo}
            video={video}
            videoLink={videoLink}
          />
        </>
      )}
      <div className="flex flex-col grow gap-[0.5rem] items-start mt-[2.5rem] w-full">
        {" "}
        {slug ? (
          <Link
            href={`${link}`}
            className={`~text-h4a/h4 ~leading-[2.1rem]/[2.6rem] text-gray80 font-playFair ${titleClassName} underline`}
          >
            {title}
          </Link>
        ) : (
          <div
            className={`~text-h4a/h4 ~leading-[2.1rem]/[2.6rem] text-gray80 font-playFair ${titleClassName} underline`}
          >
            {title}
          </div>
        )}
        {!!location && (
          <p
            className={`~text-h4a/h5 ~leading-[2.113rem]/[1.75rem] text-gray80 font-playFair ${locationClassName}`}
          >
            {location}
          </p>
        )}
        <p className="~text-h6M/h5 text-gray40 ~leading-[1.575rem]/[1.75rem] font-playFairItalic ">
          {desc}
        </p>
        {!!email && (
          <Link
            href={`mailto:${email}`}
            className="break-words break-all ~text-h9Copy5/h8Copy3 text-textPurple ~leading-[1.225rem]/[1.575rem] italic underline decoration-[1px] "
          >
            {email}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ATeamCardWithPlayButton;
