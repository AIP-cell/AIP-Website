import Image from "next/image";
import Link from "next/link";
import React from "react";
import PeopleOfAipTab from "../_components/PeopleOfAipTab";
const page = () => {
  return (
    <div className="tw-relative container tw-mx-auto">
      
      <div className="tw-absolute  tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
        <Link
          href=""
          className="tw-text-gray50 tw-text-h9Copy5 tw-leading-[19.6px]"
        >
          {"<"} People of AIP &nbsp;/&nbsp;
        </Link>
        <Link href="#">Our Core Founders</Link>
      </div>
      <PeopleOfAipTab/>
    </div>
  );
};

export default page;
