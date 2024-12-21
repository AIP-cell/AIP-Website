import BreadCrump from "@/components/bread-crump/BreadCrump";
import CrossSvg from "@/components/svg/CrossSvg";
import SearchSvg from "@/components/svg/SearchSvg";
import React from "react";
import CustomFilter from "@/components/custom/CustomFilter";
import AllTabContent from "./_components/AllTabContent";
import { Api } from "@/api/Api";
import { TSearch } from "@/api/type";
import SearchBar from "./_components/SearchBar";

const searchFilter = [
  {
    type: "field",
    options: [
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
    type: "type",
    options: [
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
  { type: "date", options: ["data1", "data2"] },
];

export const dynamic = "force-dynamic";
const getSearchApi = async ({
  key,
  field,
  type,
  date,
}: {
  key: string;
  field: string;
  type: string;
  date: string;
}): Promise<TSearch[]> => {
  const response = await Api.getSearch({
    key,
    field,
    type,
    date,
  });
  return response.data;
};
const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    key: string;
    field: string;
    type: string;
    date: string;
  }>;
}) => {
  const asyncSearchParam = await searchParams;
  const { key, field, type, date } = await searchParams;
  const response = await getSearchApi({ key, field, type, date });
  return (
    <div className="pt-[5rem]">
      <div className="relative container mx-auto ~pt-[4.313rem]/[5.5rem] ~px-[1.25rem]/[7.8rem]">
        <BreadCrump textOne="Search" linkOne="/search" />
        <SearchBar key={key} searchParams={{ ...asyncSearchParam }} />
        <div>
          <div className="flex flex-wrap ~pt-[3.25rem]/[4rem] items-center gap-[0.75rem]">
            <p className=" text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
              Filter by:
            </p>
            <div className="flex flex-wrap gap-[.75rem]">
              {searchFilter.map((items, i) => (
                <CustomFilter
                  searchParams={{ ...asyncSearchParam }}
                  filterKey={items.type}
                  type={items.type}
                  key={i}
                  optionsArray={items.options}
                />
              ))}
            </div>
          </div>
          <AllTabContent searchData={response} />
        </div>
      </div>
    </div>
  );
};

export default page;
