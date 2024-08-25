import Image from "next/image";
import Link from "next/link";
import React from "react";
import Bg from "@public/svg/PeachBgCurveFounders.svg";
import FoundersTab from "./_components/FoundersTab";
const tabData = [];
const page = () => {
  return (
    <div className="tw-relative container tw-mx-auto">
      <Image
        src={Bg}
        alt=""
        className="tw-absolute  tw-top-[21.87rem]  tw-right-0"
      />
      <div className="tw-absolute  tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
        <Link
          href=""
          className="tw-text-gray50 tw-text-h9BodyCopy5 tw-leading-[19.6px]"
        >
          {"<"} People of AIP &nbsp;/&nbsp;
        </Link>
        <Link href="#">Our Core Founders</Link>
      </div>
      <FoundersTab/>
    </div>
  );
};

export default page;
