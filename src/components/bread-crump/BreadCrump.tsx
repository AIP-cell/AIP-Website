import Image from "next/image";
import Link from "next/link";
import BreadCrumpSvg from "@public/svg/breadCrumps.svg";

import React from "react";
import cn from "@/utils/tailwind";
import LeftOPenSvg from "../svg/LeftOpenSvg";
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
    <div className="tw-absolute tw-z-[1000] tw-flex tw-items-center ~tw-left-5/[7.8rem] tw-font-inter tw-top-[1.25rem]">
      <Link
        href={linkOne}
        className={cn(
          "tw-text-black tw-flex tw-items-center tw-gap-[0.5rem] ~tw-text-h10Copy6/h9Copy5 ~tw-leading-[1rem]/[1.225rem]",
          { "!tw-text-gray50": textTwo }
        )}
      >
        <div className="tw-text-[#6A6D75]">
          <LeftOPenSvg className="~tw-size-[0.8rem]/[1rem]" />
        </div>
        {/* <Image src={BreadCrumpSvg} alt="bread-crump-Svg" /> */}
        {textOne}
        {textTwo && <p>&nbsp;/&nbsp;</p>}
      </Link>
      {linkTwo && (
        <Link
          href={linkTwo}
          className={cn(
            " tw-text-black tw-flex tw-gap-[0.5rem] ~tw-text-h10Copy6/h9Copy5 ~tw-leading-[1rem]/[1.225rem]",
            { "!tw-text-gray50 ": textThree }
          )}
        >
          <p
            className={cn({ "tw-underline tw-underline-offset-4": textThree })}
          >
            {textTwo}
          </p>
          {textThree && <p>&nbsp;/&nbsp;</p>}
        </Link>
      )}
      {textThree && linkThree && (
        <Link
          href={linkThree}
          className={cn(
            "tw-text-black ~tw-text-h10Copy6/h9Copy5 tw-flex ~tw-leading-[1rem]/[1.225rem]",
            {
              "!tw-text-gray50": textFour,
            }
          )}
        >
          <p className={cn({ "tw-underline tw-underline-offset-4": textFour })}>
            {textThree}
          </p>
          {textFour && <p>&nbsp;/&nbsp;</p>}
        </Link>
      )}
      {textFour && linkFour && (
        <Link
          href={linkFour}
          className="tw-text-black ~tw-text-h10Copy6/h9Copy5 ~tw-leading-[1rem]/[1.225rem]"
        >
          {textFour}
        </Link>
      )}
    </div>
  );
};

export default BreadCrump;
