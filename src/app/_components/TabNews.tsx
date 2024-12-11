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
        className="flex flex-col items-center w-full"
      >
        {/* <div className="flex justify-center">
          <TabList className="flex bg-[#F0F0F2] p-1 rounded-full w-fit">
            <Tab className="~px-[1rem]/[2.5rem]  ~py-[1rem]/[0.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none">
              About AIP
            </Tab>
            <Tab className="~px-[1rem]/[2.5rem] ~py-[1rem]/[0.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none">
              From Partners
            </Tab>
            <Tab className="~px-[1rem]/[2.5rem] ~py-[1rem]/[0.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none">
              In the Media
            </Tab>
            <Tab className="~px-[1rem]/[2.5rem] ~py-[1rem]/[0.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none">
              World of Philanthropy
            </Tab>
          </TabList>
        </div> */}
        <div className="px-[1.25rem] w-full flex justify-center ">
          <TabListAndRespSelect
            tabArray={newsTabArray}
            selectedIndex={selectedIndex}
            //   setSelected={setSelected}
            setSelectedIndex={setSelectedIndex}
            listboxButtonClassName="w-full"
          />
        </div>
        <TabPanels>
          <TabPanel>
            <CarouselNews />
            {/* <CarouselRespNews /> */}
          </TabPanel>
          <TabPanel>
            <div className="pt-[2.5rem]">AIP - Partners content</div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default TabNews;
