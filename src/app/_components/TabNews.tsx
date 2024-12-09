import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
// import NewsCard from "@/components/cards/NewsCard";
import CarouselNews from "./CarouselNews";
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
const TabNews = () => {
  return (
    <div className="tw-hidden md:tw-block  ">
      <TabGroup className="tw-flex tw-flex-col container tw-mx-auto ">
        <div className="tw-flex tw-justify-center">
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
        </div>
        <TabPanels>
          <TabPanel>
            <CarouselNews />
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
