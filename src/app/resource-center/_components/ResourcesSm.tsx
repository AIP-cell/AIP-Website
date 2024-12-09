"use client";
import { useState } from "react";
import CustomGraySelect from "@/components/custom/CustomGraySelect";
import { useRouter } from "next/navigation";

import React from "react";
import ResourceCard from "../../../components/cards/ResourceCard";
import CustomSelect from "@/components/custom/CustomSelect";
import CustomFilter from "@/components/custom/CustomFilter";

const list = [
  "Reports & Publications",
  "Knowledge Resources",
  "Inspirational Stories",
  "News & Media AIP",
  "Event & Interviews Gallery",
];
const datas = [
  {
    src: "/svg/resource-page/resource1.svg",
    title: "Wealth with Purpose- a report on Indian Philanthropy",
    desc: "This report a collaborative effort between Accelerate India Philanthropy (AIP) and Boston Consulting Group (BCG) delves into the motivations, challenges, strategies and decision-making processes of UHNIs across various stages of philanthropy. We interviewed 100 UHNIs as part of a selective sample, ensuring diverse representation across net worth, geographical location, source of wealth and stage of giving.",
    category: "Field/Sector",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    title: "Getting Non-profits in India Scale Ready",
    desc: "A primary research report by AIP that presents a nationally representative view of the challenges that 65+ non-profits face in their journey to scale impact and recommends principles for philanthropists in supporting their grantees.",
    category: "Field/Sector",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    title: "Enabling Good Vol 11",
    desc: "A monthly roundup from the world of philanthropy. In this edition, we introduce our five new Founders-Radhika and Kartik Bharat Ram, Rati Forbes, Mathew Cyriac, Pankaj Gupta, and Swati Apte and Alok Kshirsagar-whose expertise and shared passion for philanthropy brings remarkable value to our community",
    category: "Field/Sector",
  },
  {
    src: "/svg/resource-page/resource1.svg",
    title: "Wealth with Purpose- a report on Indian Philanthropy",
    desc: "This report a collaborative effort between Accelerate India Philanthropy (AIP) and Boston Consulting Group (BCG) delves into the motivations, challenges, strategies and decision-making processes of UHNIs across various stages of philanthropy. We interviewed 100 UHNIs as part of a selective sample, ensuring diverse representation across net worth, geographical location, source of wealth and stage of giving.",
    category: "Field/Sector",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    title: "Getting Non-profits in India Scale Ready",
    desc: "A primary research report by AIP that presents a nationally representative view of the challenges that 65+ non-profits face in their journey to scale impact and recommends principles for philanthropists in supporting their grantees.",
    category: "Field/Sector",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    title: "Enabling Good Vol 11",
    desc: "A monthly roundup from the world of philanthropy. In this edition, we introduce our five new Founders-Radhika and Kartik Bharat Ram, Rati Forbes, Mathew Cyriac, Pankaj Gupta, and Swati Apte and Alok Kshirsagar-whose expertise and shared passion for philanthropy brings remarkable value to our community",
    category: "Field/Sector",
  },
];
const fieldsArray = ["Fields/Sector", "Fields/Sector"];
const filterDatas = [
  {
    type: "Expert Name",
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
    type: "Fields",
    filter: ["data1", "data2"],
  },
  { type: "Date", filter: ["data1", "data2"] },
];
type Props = {
  // filterDatas?: any;
  domainArray: string[];
  typeContentArray: string[];
  dateArray: string[];
};
const ResourcesSm = ({
  // filterDatas,
  domainArray,
  typeContentArray,
  dateArray,
}: Props) => {
  const [selected, setSelected] = useState(list[0]);

  return (
    <div className="tw-flex md:tw-hidden tw-flex-col tw-justify-center ">
      <CustomGraySelect
        data={list}
        selected={selected}
        setSelected={setSelected}
        mainClassName="!tw-px-0"
      />
      <div className="">
        <div className="tw-flex tw-flex-wrap tw-pt-[2rem] tw-items-center tw-gap-[0.75rem]">
          <p className="~tw-pb-[1.25rem]/0 tw-text-gray40  ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem]">
            Filter by:
          </p>
          <div className="tw-flex tw-flex-wrap tw-gap-[.75rem]">
            {filterDatas.map((items, i) => (
              <CustomFilter
                key={i}
                type={items.type}
                optionsArray={items.filter}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="tw-pt-[3.25rem] ~tw-pb-[5rem]/[7.5rem] tw-flex tw-flex-col tw-gap-[2.5rem]">
            {datas.map((item, i) => (
              <ResourceCard
                key={i}
                src={item.src}
                title={item.title}
                desc={item.desc}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSm;
