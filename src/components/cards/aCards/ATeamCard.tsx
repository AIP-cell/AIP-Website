import Image from "next/image";
import React from "react";
import Linkedin from "@public/svg/grayLinkedin.svg";
import Src from "@public/images/aTeamSample.png";
import ASvg from "@/components/svg/ASvg";
import AMediumSizeSvg from "@/components/svg/AMediumSizeSvg";
import Link from "next/link";
import cn from "@/utils/tailwind";
type Props = {
  linkedin: boolean;
  title: string;
  title2: string;
  location?: string;
  email?: string;
  desc: string;
  titleClassName?: string;
  title2ClassName?: string;
  locationClassName?: string;
  sizeClass?: string;
};
const ATeamCard = ({
  linkedin,
  title,
  title2,
  location,
  email,
  desc,
  titleClassName,
  title2ClassName,
  locationClassName,
  sizeClass,
}: Props) => {
  return (
    <div className={cn("max-[23rem]:w-[8rem] ~w-[10rem]/[11.87rem] relative", sizeClass)}>
      <AMediumSizeSvg
        src="/images/sample.png"
        // className="w-[11.87rem] h-[13.88rem]"
      />
      {linkedin && (
        <Image
          src={Linkedin}
          alt=""
          className="absolute top-0 right-0 size-[2.5rem]"
        />
      )}
      <div className="flex flex-col gap-[0.5rem]">
        <h3
          className={`~text-h4a/h4 ~leading-[2.1rem]/[2.6rem] text-gray80 font-playFair ${titleClassName}`}
        >
          {title}
        </h3>
        <h3
          className={`~text-h4a/h4 ~leading-[2.1rem]/[2.6rem] text-gray80 font-playFair ${title2ClassName}`}
        >
          {title2}
        </h3>
        {location && (
          <p
            className={`~text-h4a/h5 ~leading-[2.113rem]/[1.75rem] text-gray80 font-playFair ${locationClassName}`}
          >
            {location}
          </p>
        )}
        <p className=" ~text-h6M/h5 text-gray40 ~leading-[1.575rem]/[1.75rem] font-playFairItalic ">
          {desc}
        </p>
        <Link
          href=""
          className=" ~text-h9Copy5/h8Copy3 text-textPurple ~leading-[1.225rem]/[1.575rem] italic underline decoration-[1px] "
        >
          {email}
        </Link>
      </div>
    </div>
  );
};

export default ATeamCard;
