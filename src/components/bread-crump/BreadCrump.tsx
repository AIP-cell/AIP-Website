import Image from "next/image";
import Link from "next/link";
import BreadCrumpSvg from "@public/svg/breadCrumps.svg";

import React from "react";
import cn from "@/utils/tailwind";
type Props = {
  textOne: string;
  linkOne: string;
  textTwo?: string;
  linkTwo?: string;
  textThree?: string;
  linkThree?: string;
  textFour?: string;
  linkFour?: string;
};
const BreadCrump = ({
  textOne,
  textTwo,
  textThree,
  textFour,
  linkOne,
  linkTwo,
  linkThree,
  linkFour,
}: Props) => {
  return (
    <div className="tw-absolute tw-z-[1000] tw-flex tw-items-center tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
      <Link
        href={linkOne}
        className={cn(
          "tw-text-black tw-flex tw-gap-[0.5rem] tw-text-h9Copy5 tw-leading-[19.6px]",
          { "!tw-text-gray50": textTwo }
        )}
      >
        <Image src={BreadCrumpSvg} alt="bread-crump-Svg" /> {textOne}
        &nbsp;/&nbsp;
      </Link>
      {linkTwo && (
        <Link
          href={linkTwo}
          className={cn(
            " tw-text-black tw-flex tw-gap-[0.5rem] tw-text-h9Copy5 tw-leading-[19.6px]",
            { "!tw-text-gray50": textThree }
          )}
        >
          <p className={cn({ "tw-underline": textThree })}>{textTwo}</p>
          {textThree && <p>&nbsp;/&nbsp;</p>}
        </Link>
      )}
      {textThree && linkThree && (
        <Link
          href={linkThree}
          className={cn("tw-text-black tw-text-h9Copy5 tw-leading-[19.6px]", {
            "!tw-text-gray50": textFour,
          })}
        >
          <p className={cn({ "tw-underline": textFour })}>{textThree}</p>
          {textFour && <p>&nbsp;/&nbsp;</p>}
        </Link>
      )}
      {textFour && linkFour && (
        <Link
          href={linkFour}
          className="tw-text-black tw-text-h9Copy5 tw-leading-[19.6px]"
        >
          {textFour}
        </Link>
      )}
    </div>
  );
};

export default BreadCrump;
