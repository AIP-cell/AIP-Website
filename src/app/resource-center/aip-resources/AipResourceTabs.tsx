"use client";
import React, { useState } from "react";
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import TabListAndRespSelect from "../_components/TabListAndRespSelect";
import CustomSelect from "@/components/custom/CustomSelect";
import ResourceCard from "@/components/cards/ResourceCard";
import CustomFilter from "@/components/custom/CustomFilter";
import { TAipResourcesCategory } from "@/api/type";
import { generatingSearchParam } from "@/utils/UrlHelper";

const resourcesArray = [
  { tab: "AIP Updates" },
  { tab: "Reports & Publications" },
  { tab: "Newsletter" },
  { tab: "Inspirational Voices" },
  { tab: "In the Media" },
  { tab: "Gallery" },
];
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
    type: "domain",
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
    type: "Type of Content",
    filter: ["data1", "data2"],
  },
  { type: "Date", filter: ["data1", "data2"] },
];
// const filterDatas = [
//   {
//     type: "domain",
//     filter: [
//       { id: "0", name: "0All" },
//       { id: "1", name: "1All" },
//       { id: "2", name: "2All" },
//     ],
//   },
//   {
//     type: "Type of Content",
//     filter: [
//       { id: "0", name: "0Content" },
//       { id: "1", name: "1Content" },
//     ],
//   },
//   {
//     type: "Date",
//     filter: [
//       { id: "0", name: "0Date" },
//       { id: "1", name: "1Date" },
//     ],
//   },
// ];
type Props = {
  tabData: TAipResourcesCategory[];
  category: string;
};
const AipResourceTabs = ({ tabData, category }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <TabGroup
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
        className="flex flex-col justify-center "
      >
        <TabListAndRespSelect
          tabArray={resourcesArray}
          selectedIndex={selectedIndex}
          //   setSelected={setSelected}
          setSelectedIndex={setSelectedIndex}
          textClassName="  "
          listClassName="!w-full"
        />
        <TabPanels className="">
          <TabPanel>
            <div className="flex flex-wrap pt-[2rem] items-center gap-[0.75rem]">
              <p className="~pb-[1.25rem]/0 text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
                Filter by:
              </p>
              <div className="relative flex flex-wrap gap-[.75rem]">
                <CustomFilter
                  category={category}
                  type={filterDatas.at(0)!.type}
                  optionsArray={filterDatas.at(0)!.filter}
                />
              </div>
            </div>
            <div className="pt-[3.25rem] pb-[7.5rem] grid md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem]">
              {tabData.map((item, i) => (
                <ResourceCard
                  key={i}
                  src={item.image}
                  title={item.title}
                  desc={item.description}
                  category={item.domain}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="flex flex-wrap pt-[2rem] items-center gap-[0.75rem]">
              <p className="~pb-[1.25rem]/0 text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
                Filter by:
              </p>
              <div className="relative flex flex-wrap gap-[.75rem]">
                <CustomFilter
                  type={filterDatas.at(0)!.type}
                  optionsArray={filterDatas.at(0)!.filter}
                  // selected={domain}
                  // setSelected={setDomain}
                  category={category}
                />
              </div>
            </div>
            <div className="pt-[3.25rem] pb-[7.5rem] grid md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem]">
              {tabData.map((item, i) => (
                <ResourceCard
                  key={i}
                  src={item.image}
                  title={item.title}
                  desc={item.description}
                  category={item.domain}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-wrap pt-[2rem] items-center gap-[0.75rem]">
              <p className="~pb-[1.25rem]/0 text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] col-span-2">
                Filter by:
              </p>
              <div className="relative flex flex-wrap gap-[.75rem]">
                <CustomFilter
                  category={category}
                  type={filterDatas.at(0)!.type}
                  optionsArray={filterDatas.at(0)!.filter}
                  // selected={domain}
                  // setSelected={setDomain}
                />
              </div>
            </div>
            <div className="pt-[3.25rem] pb-[7.5rem] grid md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem]">
              {tabData.map((item, i) => (
                <ResourceCard
                  key={i}
                  src={item.image}
                  title={item.title}
                  desc={item.description}
                  category={item.domain}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-wrap pt-[2rem] items-center gap-[0.75rem]">
              <p className="~pb-[1.25rem]/0 text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
                Filter by:
              </p>
              <div className="relative flex flex-wrap gap-[.75rem]">
                <CustomFilter
                  category={category}
                  type={filterDatas.at(0)!.type}
                  optionsArray={filterDatas.at(0)!.filter}
                  // selected={domain}
                  // setSelected={setDomain}
                />
              </div>
            </div>
            <div className="pt-[3.25rem] pb-[7.5rem] grid md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem]">
              {tabData.map((item, i) => (
                <ResourceCard
                  key={i}
                  src={item.image}
                  title={item.title}
                  desc={item.description}
                  category={item.domain}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-wrap pt-[2rem] items-center gap-[0.75rem]">
              <p className="~pb-[1.25rem]/0 text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
                Filter by:
              </p>
              <div className="relative flex flex-wrap gap-[.75rem]">
                <CustomFilter
                  category={category}
                  type={filterDatas.at(0)!.type}
                  optionsArray={filterDatas.at(0)!.filter}
                  // selected={domain}
                  // setSelected={setDomain}
                />
              </div>
            </div>
            <div className="pt-[3.25rem] pb-[7.5rem] grid md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem]">
              {tabData.map((item, i) => (
                <ResourceCard
                  key={i}
                  src={item.image}
                  title={item.title}
                  desc={item.description}
                  category={item.domain}
                  date={item.date}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-wrap pt-[2rem] items-center gap-[0.75rem]">
              <p className="~pb-[1.25rem]/0 text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
                Filter by:
              </p>
              <div className="relative flex flex-wrap gap-[.75rem]">
                <CustomFilter
                  category={category}
                  type={filterDatas.at(0)!.type}
                  optionsArray={filterDatas.at(0)!.filter}
                  // selected={domain}
                  // setSelected={setDomain}
                />
              </div>
            </div>
            <div className="pt-[3.25rem] pb-[7.5rem] grid md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem]">
              {tabData.map((item, i) => (
                <ResourceCard
                  key={i}
                  src={item.image}
                  title={item.title}
                  desc={item.description}
                  category={item.domain}
                />
              ))}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default AipResourceTabs;
