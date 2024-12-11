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
    <div className="absolute z-[1000] flex flex-wrap items-center ~left-5/[7.8rem] font-inter top-[1.25rem]">
      <Link
        href={linkOne}
        className={cn(
          "text-black flex items-center gap-[0.5rem] ~text-h10Copy6/h9Copy5 ~leading-[1rem]/[1.225rem]",
          { "!text-gray50": textTwo }
        )}
      >
        <div className="text-[#6A6D75]">
          <LeftOPenSvg className="~size-[0.8rem]/[1rem]" />
        </div>
        {/* <Image src={BreadCrumpSvg} alt="bread-crump-Svg" /> */}
        {textOne}
        {textTwo && <p>&nbsp;/&nbsp;</p>}
      </Link>
      {linkTwo && (
        <Link
          href={linkTwo}
          className={cn(
            " text-black flex gap-[0.5rem] ~text-h10Copy6/h9Copy5 ~leading-[1rem]/[1.225rem]",
            { "!text-gray50 ": textThree }
          )}
        >
          <p
            className={cn({ "underline underline-offset-4": textThree })}
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
            "text-black ~text-h10Copy6/h9Copy5 flex ~leading-[1rem]/[1.225rem]",
            {
              "!text-gray50": textFour,
            }
          )}
        >
          <p className={cn({ "underline underline-offset-4": textFour })}>
            {textThree}
          </p>
          {textFour && <p>&nbsp;/&nbsp;</p>}
        </Link>
      )}
      {textFour && linkFour && (
        <Link
          href={linkFour}
          className="text-black ~text-h10Copy6/h9Copy5 ~leading-[1rem]/[1.225rem]"
        >
          {textFour}
        </Link>
      )}
    </div>
  );
};

export default BreadCrump;
