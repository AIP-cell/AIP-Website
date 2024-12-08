import BreadCrump from "@/components/bread-crump/BreadCrump";
import CrossSvg from "@/components/svg/CrossSvg";
import SearchSvg from "@/components/svg/SearchSvg";
import React from "react";
import CustomFilter from "@/components/custom/CustomFilter";
import AllTabContent from "./_components/AllTabContent";

const filterDatas = [
  {
    type: "Field",
    filter: [
      "All",
      "Art & Culture",
      "Education",
      "Environment",
      "Health & Nutrition",
      "Legal & Judiciary",
      "Livelihood",
      "Disability",
      "Rural Development",
      "Sports",
      "WASH",
      "Women & Child",
    ],
  },
  {
    type: "Type",
    filter: ["data1", "data2"],
  },
  { type: "Date", filter: ["data1", "data2"] },
];
const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className="tw-relative container tw-mx-auto ~tw-pt-[4.313rem]/[5.5rem] ~tw-px-[1.25rem]/[7.8rem]">
        <BreadCrump textOne="Search" linkOne="/search" />
        <div className="tw-relative tw-w-full tw-border-b-2 tw-border-[#A0A3AD] tw-flex tw-items-center tw-justify-between">
          <input
            type="text"
            placeholder="Search"
            className="tw-text-h4 tw-leading-[2.6rem] tw-w-full tw-font-playFair tw-pb-[0.625rem] tw-outline-none"
          />
          <div className="tw-absolute tw-right-0 tw-flex tw-gap-[1.5rem] tw-text-textPurple">
            <CrossSvg className="tw-size-[1.5rem]" />
            <SearchSvg className="tw-size-[1.5rem]" />
          </div>
        </div>
        <div>
          <div className="tw-flex tw-flex-wrap ~tw-pt-[3.25rem]/[4rem] tw-items-center tw-gap-[0.75rem]">
            <p className=" tw-text-gray40  ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem]">
              Filter by:
            </p>
            <div className="tw-flex tw-flex-wrap tw-gap-[.75rem]">
              {filterDatas.map((items, i) => (
                <CustomFilter
                  type={items.type}
                  key={i}
                  optionsArray={items.filter}
                />
              ))}
            </div>
          </div>
          <AllTabContent />
        </div>
      </div>
    </div>
  );
};

export default page;
