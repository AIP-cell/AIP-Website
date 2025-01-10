"use client";
import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
// import NewsCard from "@/components/cards/NewsCard";
// import CarouselNews from "./CarouselNews";
import TabListAndRespSelect from "../resource-center/_components/TabListAndRespSelect";
import CarouselRespNews from "./CarouselRespNews";
import { CarouselNews } from "./CarouselNews";
import { THomePageNews } from "@/api/type";
const newsTabArray = [
  { tabNo: 0, key: "aipUpdates", tab: "About AIP" },
  { tabNo: 1, key: "partner", tab: "From Partners" },
  { tabNo: 2, key: "inTheMedia", tab: "In the Media" },
  { tabNo: 3, key: "worldOfPhilanthropy", tab: "World of Philanthropy" },
];
type Props = {
  newsData: THomePageNews;
  searchParams: string;
};

const TabNews = ({ newsData, searchParams }: Props) => {
  const SelectedData = newsTabArray.find(
    (newsTab) => newsTab.tab == searchParams
  );
  const [selectedIndex, setSelectedIndex] = useState(
    searchParams ? SelectedData?.tabNo : 0
  );

  return (
    <div className="  ">
      <TabGroup
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
        className="flex flex-col items-center w-full"
      >
        <div className="px-[1.25rem] w-full flex justify-center">
          <TabListAndRespSelect
            tabArray={newsTabArray}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            listboxButtonClassName="w-full"
          />
        </div>
        <TabPanels className="~px-[1.25rem]/0">
          {newsTabArray.map((items, i) => {
            return (
              <TabPanel key={i}>
                {items.tab == "In the Media" && (
                  <CarouselNews newsArray={newsData.inTheMedia} />
                )}
                {items.tab == "From Partners" && (
                  <CarouselNews newsArray={newsData.partner} />
                )}
                {items.tab == "World of Philanthropy" && (
                  <CarouselNews newsArray={newsData.worldOfPhilanthropy} />
                )}
                {items.tab == "About AIP" && (
                  <CarouselNews newsArray={newsData.aipUpdates} />
                )}
              </TabPanel>
            );
          })}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default TabNews;
