import BreadCrump from "@/components/bread-crump/BreadCrump";
import CrossSvg from "@/components/svg/CrossSvg";
import SearchSvg from "@/components/svg/SearchSvg";
import React from "react";
import SearchTab from "./_components/SearchTabs";

const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className="tw-relative container tw-mx-auto tw-px-[7.8rem]">
        <BreadCrump textOne="Search" linkOne="/search" />
        <div className="tw-w-full tw-pt-[5.5rem]  tw-border-b-2 tw-border-[#A0A3AD] tw-flex tw-items-center tw-justify-between">
          <input type="text" placeholder="Search" className="tw-text-h4 tw-font-playFair tw-pb-[0.625rem] tw-outline-none" />
          <div className="tw-flex tw-gap-[1.5rem] tw-text-textPurple">
            <CrossSvg className="tw-size-[1.5rem]"/>
            <SearchSvg className="tw-size-[1.5rem]" />
          </div>
        </div>
        <SearchTab/>
      </div>
    </div>
  );
};

export default page;
