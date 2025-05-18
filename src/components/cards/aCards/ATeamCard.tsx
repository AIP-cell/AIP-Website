import Image from "next/image";
import React from "react";
import Linkedin from "@public/svg/grayLinkedin.svg";
import AMediumSizeSvg from "@/components/svg/AMediumSizeSvg";
import Link from "next/link";
import cn from "@/utils/tailwind";
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
};
const ATeamCard = ({
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
}: Props) => {
  return (
    <div
      className={cn(
        "max-[23rem]:w-[8rem] flex flex-col ~w-[10rem]/[11.87rem] relative",
        sizeClass
      )}
    >
      <AMediumSizeSvg
        src={image}
        className="max-[23rem]:w-[8rem] ~w-[10rem]/[11.87rem]"
      />
      {linkedinLink && linkedin && (
        <Link
          href={linkedinLink}
          target="_blank"
          className="absolute top-0 right-0 size-[2.5rem] z-50"
        >
          <Image src={Linkedin} alt="" />
        </Link>
      )}
      <div className="flex flex-col grow  gap-[0.5rem]">
        {slug ? (
          <Link
            href={`${link}`}
            className={`~text-h4a/h4 ~leading-[2.1rem]/[2.6rem] text-gray80 font-playFair ${titleClassName}`}
          >
            {title}
          </Link>
        ) : (
          <div
            className={`~text-h4a/h4 ~leading-[2.1rem]/[2.6rem] text-gray80 font-playFair ${titleClassName}`}
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
        <p className=" ~text-h6M/h5 text-gray40 ~leading-[1.575rem]/[1.75rem] font-playFairItalic ">
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

export default ATeamCard;
