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
    <div className={cn("max-[23rem]:tw-w-[8rem] ~tw-w-[10rem]/[11.87rem] tw-relative", sizeClass)}>
      <AMediumSizeSvg
        src="/images/sample.png"
        // className="tw-w-[11.87rem] tw-h-[13.88rem]"
      />
      {linkedin && (
        <Image
          src={Linkedin}
          alt=""
          className="tw-absolute tw-top-0 tw-right-0 tw-size-[2.5rem]"
        />
      )}
      <div className="tw-flex tw-flex-col tw-gap-[0.5rem]">
        <h3
          className={`~tw-text-h4a/h4 ~tw-leading-[2.1rem]/[2.6rem] tw-text-gray80 tw-font-playFair ${titleClassName}`}
        >
          {title}
        </h3>
        <h3
          className={`~tw-text-h4a/h4 ~tw-leading-[2.1rem]/[2.6rem] tw-text-gray80 tw-font-playFair ${title2ClassName}`}
        >
          {title2}
        </h3>
        {location && (
          <p
            className={`~tw-text-h4a/h5 ~tw-leading-[2.113rem]/[1.75rem] tw-text-gray80 tw-font-playFair ${locationClassName}`}
          >
            {location}
          </p>
        )}
        <p className=" ~tw-text-h6M/h5 tw-text-gray40 ~tw-leading-[1.575rem]/[1.75rem] tw-font-playFairItalic ">
          {desc}
        </p>
        <Link
          href=""
          className=" ~tw-text-h9Copy5/h8Copy3 tw-text-textPurple ~tw-leading-[1.225rem]/[1.575rem] tw-italic tw-underline tw-decoration-[1px] "
        >
          {email}
        </Link>
      </div>
    </div>
  );
};

export default ATeamCard;
