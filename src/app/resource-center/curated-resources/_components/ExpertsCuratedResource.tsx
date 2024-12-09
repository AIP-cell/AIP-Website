import ResourceCard from "@/components/cards/ResourceCard";
import CustomFilter from "@/components/custom/CustomFilter";
import React from "react";

const datas = [
  {
    src: "/svg/resource-page/resource1.svg",
    title: "Wealth with Purpose- a report on Indian Philanthropy",
    desc: "This report a collaborative effort between Accelerate India Philanthropy (AIP) and Boston Consulting Group (BCG) delves into the motivations, challenges, strategies and decision-making processes of UHNIs across various stages of philanthropy. We interviewed 100 UHNIs as part of a selective sample, ensuring diverse representation across net worth, geographical location, source of wealth and stage of giving.",
    category: "Field",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    title: "Getting Non-profits in India Scale Ready",
    desc: "A primary research report by AIP that presents a nationally representative view of the challenges that 65+ non-profits face in their journey to scale impact and recommends principles for philanthropists in supporting their grantees.",
    category: "Field",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    title: "Enabling Good Vol 11",
    desc: "A monthly roundup from the world of philanthropy. In this edition, we introduce our five new Founders-Radhika and Kartik Bharat Ram, Rati Forbes, Mathew Cyriac, Pankaj Gupta, and Swati Apte and Alok Kshirsagar-whose expertise and shared passion for philanthropy brings remarkable value to our community",
    category: "Field",
  },
  {
    src: "/svg/resource-page/resource1.svg",
    title: "Wealth with Purpose- a report on Indian Philanthropy",
    desc: "This report a collaborative effort between Accelerate India Philanthropy (AIP) and Boston Consulting Group (BCG) delves into the motivations, challenges, strategies and decision-making processes of UHNIs across various stages of philanthropy. We interviewed 100 UHNIs as part of a selective sample, ensuring diverse representation across net worth, geographical location, source of wealth and stage of giving.",
    category: "Field",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    title: "Getting Non-profits in India Scale Ready",
    desc: "A primary research report by AIP that presents a nationally representative view of the challenges that 65+ non-profits face in their journey to scale impact and recommends principles for philanthropists in supporting their grantees.",
    category: "Field",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    title: "Enabling Good Vol 11",
    desc: "A monthly roundup from the world of philanthropy. In this edition, we introduce our five new Founders-Radhika and Kartik Bharat Ram, Rati Forbes, Mathew Cyriac, Pankaj Gupta, and Swati Apte and Alok Kshirsagar-whose expertise and shared passion for philanthropy brings remarkable value to our community",
    category: "Field",
  },
];
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
const ExpertsCuratedResource = () => {
  return (
    <>
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
      <div className="tw-pt-[3.25rem] tw-pb-[7.5rem] tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-[4.5rem]">
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
    </>
  );
};

export default ExpertsCuratedResource;
