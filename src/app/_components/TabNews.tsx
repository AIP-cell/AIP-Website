"use client";
import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
// import NewsCard from "@/components/cards/NewsCard";
// import CarouselNews from "./CarouselNews";
import TabListAndRespSelect from "../resource-center/_components/TabListAndRespSelect";
import CarouselRespNews from "./CarouselRespNews";
import { CarouselNews } from "./CarouselNews";
// const newsData = [
//   {
//     src: "/images/news/newsDemo.png",
//     text: "An ugam is a starting point from where river begins.",
//   },
//   {
//     src: "/images/news/newsDemo.png",
//     text: "An ugam is a starting point from where river begins.",
//   },
//   {
//     src: "/images/news/newsDemo.png",
//     text: "An ugam is a starting point from where river begins.",
//   },
// ];
const newsTabArray = [
  "About AIP",
  "From Partners",
  "In the Media",
  "World of Philanthropy",
];
const TabNews = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="  ">
      <TabGroup
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
        className="tw-flex tw-flex-col tw-items-center tw-w-full"
      >
        {/* <div className="tw-flex tw-justify-center">
          <TabList className="tw-flex tw-bg-[#F0F0F2] tw-p-1 tw-rounded-full tw-w-fit">
            <Tab className="~tw-px-[1rem]/[2.5rem]  ~tw-py-[1rem]/[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
              About AIP
            </Tab>
            <Tab className="~tw-px-[1rem]/[2.5rem] ~tw-py-[1rem]/[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
              From Partners
            </Tab>
            <Tab className="~tw-px-[1rem]/[2.5rem] ~tw-py-[1rem]/[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
              In the Media
            </Tab>
            <Tab className="~tw-px-[1rem]/[2.5rem] ~tw-py-[1rem]/[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
              World of Philanthropy
            </Tab>
          </TabList>
        </div> */}
        <div className="tw-px-[1.25rem] tw-w-full tw-flex tw-justify-center ">
          <TabListAndRespSelect
            tabArray={newsTabArray}
            selectedIndex={selectedIndex}
            //   setSelected={setSelected}
            setSelectedIndex={setSelectedIndex}
            listboxButtonClassName="tw-w-full"
          />
        </div>
        <TabPanels>
          <TabPanel>
            <CarouselNews />
            {/* <CarouselRespNews /> */}
          </TabPanel>
          <TabPanel>
            <div className="tw-pt-[2.5rem]">AIP - Partners content</div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default TabNews;
