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

type Props = {
  tabData: TAipResourcesCategory[];
  category: string;
  asyncParam: Record<string, any>;
};
const AipResourceTabs = ({ tabData, category, asyncParam }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <TabGroup
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
        className="flex flex-col justify-center "
      >
        <TabPanels className="">
          <TabPanel>
            <div className="flex flex-wrap pt-[2rem] items-center gap-[0.75rem]">
              <p className="~pb-[1.25rem]/0 text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
                Filter by:
              </p>
              <div className="relative flex flex-wrap gap-[.75rem]">
                <CustomFilter
                  searchParams={{ ...asyncParam }}
                  filterKey="domain"
                  category={category}
                  type="domain"
                  optionsArray={filterDatas.at(0)!.filter}
                />
              </div>
            </div>
            <div className="pt-[3.25rem] pb-[7.5rem] grid md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem]">
              {tabData.map((item, i) => (
                <ResourceCard
                  // key={i}
                  // src={item.image}
                  // title={item.title}
                  // desc={item.description}
                  // category={item.domain}
                  index={i}
                  slug={item.slug}
                  isLinkOrPdf={item.isLinkOrPdf}
                  file={item.file}
                  fileLink={item.fileLink}
                  key={i}
                  src={item.image}
                  title={item.title}
                  desc={item.description}
                  domain={item.domain}
                  category={item.category}
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
                  filterKey="domain"
                  searchParams={{ ...asyncParam }}
                  type={filterDatas.at(0)!.type}
                  optionsArray={filterDatas.at(0)!.filter}
                  category={category}
                />
                <CustomFilter
                  searchParams={{ ...asyncParam }}
                  filterKey="Type of Content"
                  category={category}
                  type={filterDatas.at(1)!.type}
                  optionsArray={filterDatas.at(1)!.filter}
                />
                <CustomFilter
                  searchParams={{ ...asyncParam }}
                  filterKey="Date"
                  category={category}
                  type={filterDatas.at(2)!.type}
                  optionsArray={filterDatas.at(2)!.filter}
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
                  category={item.category}
                  domain={item.domain}
                  date={item.date}
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
                  filterKey="Date"
                  searchParams={{ ...asyncParam }}
                  category={category}
                  type={filterDatas.at(2)!.type}
                  optionsArray={filterDatas.at(2)!.filter}
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
                  category={item.category}
                  domain={item.domain}
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
                  filterKey=""
                  searchParams={{ ...asyncParam }}
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
                  category={item.category}
                  domain={item.domain}
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
                  filterKey=""
                  searchParams={{ ...asyncParam }}
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
                  category={item.category}
                  domain={item.domain}
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
                  filterKey=""
                  searchParams={{ ...asyncParam }}
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
                  category={item.category}
                  domain={item.domain}
                  date={item.date}
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
