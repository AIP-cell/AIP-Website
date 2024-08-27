import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ResourceCard from "./ResourceCard";

const threeP = [
  {
    src: "/svg/aboutPage/aip-journey/three-I-s/inform.svg",
    title: "Wealth with Purpose- a report on Indian Philanthropy",
    desc: "This report a collaborative effort between Accelerate India Philanthropy (AIP) and Boston Consulting Group (BCG) delves into the motivations, challenges, strategies and decision-making processes of UHNIs across various stages of philanthropy. We interviewed 100 UHNIs as part of a selective sample, ensuring diverse representation across net worth, geographical location, source of wealth and stage of giving.",
  },
  {
    src: "/svg/aboutPage/aip-journey/three-I-s/influence.svg",
    title: "Getting Non-profits in India Scale Ready",
    desc: "A primary research report by AIP that presents a nationally representative view of the challenges that 65+ non-profits face in their journey to scale impact and recommends principles for philanthropists in supporting their grantees.",
  },
  {
    src: "/svg/aboutPage/aip-journey/three-I-s/inspire.svg",
    title: "Enabling Good Vol 11",
    desc: "A monthly roundup from the world of philanthropy. In this edition, we introduce our five new Founders-Radhika and Kartik Bharat Ram, Rati Forbes, Mathew Cyriac, Pankaj Gupta, and Swati Apte and Alok Kshirsagar-whose expertise and shared passion for philanthropy brings remarkable value to our community",
  },
];

const ResourcesTabs = () => {
  return (
    <TabGroup className="tw-flex tw-flex-col tw-justify-center tw-w-fit">
      <TabList className="tw-flex tw-bg-[#F0F0F2] tw-rounded-full tw-p-[.25rem]">
        <Tab className="tw-px-[2.5rem] tw-py-[.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9BodyCopy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
          Reports
        </Tab>
        <Tab className="tw-px-[2.5rem] tw-py-[.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9BodyCopy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
          Knowledge Resources
        </Tab>
        <Tab className="tw-px-[2.5rem] tw-py-[.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9BodyCopy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
          Inspirational Stories
        </Tab>
        <Tab className="tw-px-[2.5rem] tw-py-[.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9BodyCopy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
          News & Media AIP
        </Tab>
        <Tab className="tw-px-[2.5rem] tw-py-[.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9BodyCopy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
          Event & Interviews Gallery
        </Tab>
      </TabList>
      <TabPanels>
        <div className="tw-flex tw-pt-[2rem]">
          <p className="tw-p-2 tw-text-gray40">Filter by:</p>
          <p className="tw-p-2 tw-border-2 tw-mx-4 tw-font-inter tw-text[.875rem] leading-[1.225rem] tw-rounded-md">Fields/Sector -</p>
          <p className="tw-p-2 tw-border-2 tw-mx-4 tw-font-inter tw-text[.875rem] leading-[1.225rem] tw-rounded-md">Date -</p>
        </div>

        <TabPanel>
        <div className="tw-pt-[3.25rem] tw-grid tw-grid-cols-3 tw-gap-[4.56rem]">
          {threeP.map((item, i) => (
            <ResourceCard
              key={i}
              src={item.src}
              title={item.title}
           
              desc={item.desc}
            />
          ))}
        </div>
        </TabPanel>
        <TabPanel>Content 3</TabPanel>
        <TabPanel>Content 4</TabPanel>
        <TabPanel>Content 4</TabPanel>
        <TabPanel>Content 4</TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default ResourcesTabs;
