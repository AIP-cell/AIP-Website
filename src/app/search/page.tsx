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
    <div className="pt-[5rem]">
      <div className="relative container mx-auto ~pt-[4.313rem]/[5.5rem] ~px-[1.25rem]/[7.8rem]">
        <BreadCrump textOne="Search" linkOne="/search" />
        <div className="relative w-full border-b-2 border-[#A0A3AD] flex items-center justify-between">
          <input
            type="text"
            placeholder="Search"
            className="text-h4 leading-[2.6rem] w-full font-playFair pb-[0.625rem] outline-none"
          />
          <div className="absolute right-0 flex gap-[1.5rem] text-textPurple">
            <CrossSvg className="size-[1.5rem]" />
            <SearchSvg className="size-[1.5rem]" />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap ~pt-[3.25rem]/[4rem] items-center gap-[0.75rem]">
            <p className=" text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
              Filter by:
            </p>
            <div className="flex flex-wrap gap-[.75rem]">
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
