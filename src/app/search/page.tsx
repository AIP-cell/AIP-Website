import BreadCrump from "@/components/bread-crump/BreadCrump";
import React from "react";
import CustomFilter from "@/components/custom/CustomFilter";
import SearchBar from "./_components/SearchBar";
import DateFilter from "@/components/custom/DatePick";
import Search from "./_components/Search";

import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/search",
  },
};

const searchFilter = [
  {
    type: "field",
    options: [
      "All",
      "Art and Culture",
      "Education",
      "Environment",
      "Health and Nutrition",
      "Legal and Judiciary",
      "Livelihood",
      "Disability",
      "Rural Development",
      "Sports",
      "WASH",
      "Philanthrophy",
      "Women & Child",
    ],
  },
  {
    type: "type",
    options: [
      "Sector primers",
      "Giving Journey",
      "Research Study",
      "Philanthropist Speak",
      "Books",
      "Articles",
      "PoV",
      "White paper",
      "Newsletter",
    ],
  },
];

export const dynamic = "force-dynamic";

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

  return (
    <div className="~pt-[5rem]/[10rem]">
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
              <DateFilter searchParams={{ ...asyncSearchParam }} />
            </div>
          </div>
          {key && (
            <p className="text-gray40 font-playFair text-center py-[1rem]">
              &quot;Search result for {key}&quot;
            </p>
          )}

          <Search searchParams={{ key, field, type, date }} />
        </div>
      </div>
    </div>
  );
};

export default page;
