"use client";
import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
// import NewsCard from "@/components/cards/NewsCard";
// import CarouselNews from "./CarouselNews";
import TabListAndRespSelect from "../resource-center/_components/TabListAndRespSelect";
import CarouselRespNews from "./CarouselRespNews";
import { CarouselNews } from "./CarouselNews";
import { THomePageNews } from "@/api/type";
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
  { key: "aipUpdates", tab: "About AIP" },
  { key: "partner", tab: "From Partners" },
  { key: "inTheMedia", tab: "In the Media" },
  { key: "worldOfPhilanthropy", tab: "World of Philanthropy" },
];
type Props = {
  newsData: THomePageNews;
  searchParams:string;
};
const TabNews = ({ newsData,searchParams }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="  ">
      <TabGroup
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
        className="flex flex-col items-center w-full"
      >
        <div className="px-[1.25rem] w-full flex justify-center ">
          <TabListAndRespSelect
            tabArray={newsTabArray}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            listboxButtonClassName="w-full"
          />
        </div>
        <TabPanels className="~px-[1.25rem]/0">
          {newsTabArray.map((items, i) => (
            <TabPanel key={i}>
              {items.key == "inTheMedia" && (
                <CarouselNews newsArray={newsData.inTheMedia} />
              )}
              {items.key == "partner" && (
                <CarouselNews newsArray={newsData.partner} />
              )}
              {items.key == "worldOfPhilanthropy" && (
                <CarouselNews newsArray={newsData.worldOfPhilanthropy} />
              )}
              {items.key == "aipUpdates" && (
                <CarouselNews newsArray={newsData.aipUpdates} />
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default TabNews;
