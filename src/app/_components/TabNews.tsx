"use client";
import React, { useState } from "react";
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
// import NewsCard from "@/components/cards/NewsCard";
// import CarouselNews from "./CarouselNews";
import TabListAndRespSelect from "../resource-center/_components/TabListAndRespSelect";
import CarouselRespNews from "./CarouselRespNews";
import { CarouselNews } from "./CarouselNews";
import { THomePageNews } from "@/api/type";
import NoData from "@/components/NoData";
const newsTabArray = [
  { tabNo: 0, key: "aipUpdates", tab: "What's New" },
  // { tabNo: 1, key: "partner", tab: "Partners" },
  { tabNo: 1, key: "inTheMedia", tab: "In the Media" },
  // { tabNo: 3, key: "worldOfPhilanthropy", tab: "World of Philanthropy" },
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
        <TabPanels className="~px-[1.25rem]/0 w-full">
          {newsTabArray.map((items, i) => {
            return (
              <TabPanel key={i}>
                {items.tab == "In the Media" &&
                  (newsData.inTheMedia.length != 0 ? (
                    <CarouselNews newsArray={newsData.inTheMedia} />
                  ) : (
                    <NoData />
                  ))}
                {/* {items.tab == "Partners" &&
                  (newsData.partner.length != 0 ? (
                    <CarouselNews newsArray={newsData.partner} />
                  ) : (
                    <NoData />
                  ))}
                {items.tab == "World of Philanthropy" &&
                  (newsData.worldOfPhilanthropy.length != 0 ? (
                    <CarouselNews newsArray={newsData.worldOfPhilanthropy} />
                  ) : (
                    <NoData />
                  ))} */}
                {items.tab == "What's New" &&
                  (newsData.aipUpdates.length != 0 ? (
                    <CarouselNews newsArray={newsData.aipUpdates} />
                  ) : (
                    <NoData />
                  ))}
              </TabPanel>
            );
          })}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default TabNews;
