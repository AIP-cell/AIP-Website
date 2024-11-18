import React from "react";
import Link from "next/link";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import ResourcesSm from "../_components/ResourcesSm";
import ResourcesTabs from "../_components/ResourcesTabs";
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import CustomSelect from "@/components/custom/CustomSelect";
import ResourceCard from "@/components/cards/ResourceCard";
const resourcesArray = [
  "Featured",
  "Philanthropists",
  " Partners",
  "Experts",
  " NPO",
  " World of Philanthropy",
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
const CuratedResourcesPage = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className="container tw-mx-auto tw-relative ~tw-px-5/[7.8rem]">
        <div className="~tw-px-5/tw-flex ~tw-pt-0/[1.25rem] tw-gap-[.75rem][7.8rem]">
          <BreadCrump
            textOne="Resource Center"
            linkOne="/resource-center"
            textTwo="AIP Resources"
            linkTwo="/resource-center"
            textThree="Reports"
            linkThree="/resource-center"
          />
          <div className="tw-max-w-[51.188rem] ~tw-pt-[4.3rem]/[5rem] ~tw-pb-[2.5rem]/[4rem]">
            <p className="tw-font-playFair tw-leading-[3.3rem] ~tw-text-h4/[3rem] tw-text-gray80">
              Curated Resources
            </p>
          </div>
        </div>
        <ResourcesSm />
        <TabGroup className="md:tw-flex tw-hidden tw-flex-col tw-justify-center ">
          <ResourcesTabs
            textClassName="!tw-px-0"
            listClassName="!tw-w-full"
            resourcesArray={resourcesArray}
          />
          <TabPanels className="">
            <TabPanel>
              <div className="tw-flex tw-pt-[2rem] tw-gap-[.75rem]">
                <p className="tw-py-3 tw-text-gray40 ">Filter by:</p>

                <CustomSelect
                  optionsArray={["Domain"]}
                  ListboxButtonClassName="!tw-w-fit"
                  selectedClassName="!tw-w-fit"
                />

                <CustomSelect
                  optionsArray={["Type of Content"]}
                  ListboxButtonClassName="!tw-w-fit"
                  selectedClassName="!tw-w-fit"
                />
                <CustomSelect
                  optionsArray={["Organisation Type"]}
                  ListboxButtonClassName="!tw-w-fit"
                  selectedClassName="!tw-w-fit"
                />
                <CustomSelect
                  optionsArray={["Date"]}
                  ListboxButtonClassName="!tw-w-fit"
                  selectedClassName="!tw-w-fit"
                />
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
            </TabPanel>
            <TabPanel>Content 2</TabPanel>
            <TabPanel>Content 3</TabPanel>
            <TabPanel>
              <div className="tw-flex tw-pt-[2rem] tw-gap-[.75rem]">
                <p className="tw-py-3 tw-text-gray40 ">Filter by:</p>

                <CustomSelect
                  optionsArray={["Expert Name"]}
                  ListboxButtonClassName="!tw-w-fit"
                  selectedClassName="!tw-w-fit"
                />

                <CustomSelect
                  optionsArray={["Fields"]}
                  ListboxButtonClassName="!tw-w-fit"
                  selectedClassName="!tw-w-fit"
                />

                <CustomSelect
                  optionsArray={["Date"]}
                  ListboxButtonClassName="!tw-w-fit"
                  selectedClassName="!tw-w-fit"
                />
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
            </TabPanel>
            <TabPanel>Content 5</TabPanel>
            <TabPanel>Content 6</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default CuratedResourcesPage;
