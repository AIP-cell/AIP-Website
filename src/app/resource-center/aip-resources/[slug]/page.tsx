import React from "react";
import Link from "next/link";
import BreadCrump from "@/components/bread-crump/BreadCrump";
// import ResourcesSm from "../_components/ResourcesSm";
// import TabListAndRespSelect from "../_components/TabListAndRespSelect";
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import CustomSelect from "@/components/custom/CustomSelect";
import ResourceCard from "@/components/cards/ResourceCard";
import { Api } from "@/api/Api";
import { TAipResourcesCategory } from "@/api/type";
import AipResourceTabs from "../AipResourceTabs";
import CustomFilter from "@/components/custom/CustomFilter";
import ResourcesTabAndSelect from "../../_components/ResourcesTabAndSelect";

const resourcesArray = [
  "AIP Updates",
  "Reports & Publications",
  " Newsletter",
  " Inspirational Voices",
  " In the Media",
  " Gallery",
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
const domainArray = [
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
];

const tabList = [
  {
    slug: "aipUpdates",
    name: "AIP Updates",
    link: "/resource-center/aip-resources/aipUpdates",
  },
  {
    slug: "reportsAndPublications",
    name: "Reports & Publications",
    link: "/resource-center/aip-resources/reportsAndPublications",
  },
  {
    slug: "newsletter",
    name: "Newsletter",
    link: "/resource-center/aip-resources/newsletter",
  },
  {
    slug: "inspirationalVoices",
    name: "Inspirational Voices",
    link: "/resource-center/aip-resources/inspirationalVoices",
  },
  {
    slug: "inTheMedia",
    name: "In the Media",
    link: "/resource-center/aip-resources/inTheMedia",
  },
  {
    slug: "gallery",
    name: "Gallery",
    link: "/resource-center/aip-resources/gallery",
  },
];
const aipResourcesFilter = [
  {
    filterBy: "aipUpdates",
    filter: [
      {
        type: "domain",
        options: [
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
    ],
  },
  {
    filterBy: "reportsAndPublications",
    filter: [
      {
        type: "domain",
        options: [
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
        options: ["data1", "data2"],
      },
      { type: "Date", options: ["data1", "data2"] },
    ],
  },
  {
    filterBy: "newsletter",
    filter: [
      {
        type: "domain",
        options: [
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
      { type: "Date", options: ["data1", "data2"] },
    ],
  },
  {
    filterBy: "inspirationalVoices",
    filter: [
      {
        type: "domain",
        options: [
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
        options: ["data1", "data2"],
      },
      { type: "Date", options: ["data1", "data2"] },
    ],
  },
  {
    filterBy: "inTheMedia",
    filter: [
      {
        type: "domain",
        options: [
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
        options: ["data1", "data2"],
      },
      { type: "Date", options: ["data1", "data2"] },
    ],
  },
  {
    filterBy: "gallery",
    filter: [
      {
        type: "domain",
        options: [
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
        options: ["data1", "data2"],
      },
      { type: "Date", options: ["data1", "data2"] },
    ],
  },
];
export const dynamic = "force-dynamic";
const getAipResourcesData = async (
  slug: string,
  {
    domain,
    typeOfContent,
    date,
  }: { domain: string; typeOfContent: string; date: string }
): Promise<TAipResourcesCategory[]> => {
  const response = await Api.getAipResources(slug, {
    domain,
    typeOfContent,
    date,
  });
  return response.data;
};
const AipResourcesInnerPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    domain: string;
    typeOfContent: string;
    date: string;
  }>;
}) => {
  const param = await params;
  const SearchParam = await searchParams;
  const { domain, typeOfContent, date } = await searchParams;
  const response = await getAipResourcesData(param.slug, {
    domain,
    typeOfContent,
    date,
  });
  if (!response) {
    return;
  }
  const filterBySlug = tabList.find((items) => items.slug === param.slug);
  const filterData = aipResourcesFilter.find(
    (item) => item.filterBy === param.slug
  );
  return (
    <div className="pt-[5rem]">
      <div className="container mx-auto relative ~px-5/[7.5rem]">
        <div className="~px-5/flex ~pt-0/[1.25rem] gap-[.75rem][7.8rem]">
          <BreadCrump
            textOne="Resource Center"
            linkOne="/resource-center"
            textTwo="AIP Resources"
            linkTwo="/resource-center/aip-resources"
            textThree={filterBySlug!.name}
            linkThree={`/resource-center/aip-resources/${param.slug}`}
          />
          <div className="max-w-[51.188rem] ~pt-[4.3rem]/[5rem] ~pb-[2.5rem]/[4rem]">
            <p className="font-playFair leading-[3.3rem] ~text-h4/[3rem] text-gray80">
              AIP Resources
            </p>
          </div>
        </div>
        <ResourcesTabAndSelect
          resources="aip-resources"
          currentTab={filterBySlug!.name}
          tabList={tabList}
          mainClassName="!pt-0"
          tabClassName="!w-full  !px-0"
          tabListClassName="!w-full"
        />
        <div className="flex flex-wrap pt-[2rem] items-center gap-[0.75rem]">
          <p className="~pb-[1.25rem]/0 text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
            Filter by:
          </p>
          <div className="relative flex flex-wrap gap-[.75rem]">
            {filterData?.filter.map((data, i) => (
              <CustomFilter
                key={i}
                searchParams={{ ...SearchParam }}
                filterKey={data.type}
                type={data.type}
                optionsArray={data.options}
              />
            ))}
          </div>
        </div>
        <div className="pt-[3.25rem] pb-[7.5rem] grid md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem]">
          {response.map((item, i) => (
            <ResourceCard
              key={i}
              src={item.image}
              title={item.title}
              desc={item.description}
              category={item.domain}
            />
          ))}
        </div>
        {/* <AipResourceTabs
          asyncParam={asyncParam}
          tabData={aipResourcesSelectedTabData}
          category={category}
        /> */}
      </div>
    </div>
  );
};

export default AipResourcesInnerPage;
