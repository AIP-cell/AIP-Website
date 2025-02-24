import React from "react";
import BreadCrump from "@/components/bread-crump/BreadCrump";
// import ResourcesSm from "../_components/ResourcesSm";
// import TabListAndRespSelect from "../_components/TabListAndRespSelect";
import ResourceCard from "@/components/cards/ResourceCard";
import { Api } from "@/api/Api";
import { TAipResourcesCategory } from "@/api/type";
import CustomFilter from "@/components/custom/CustomFilter";
import ResourcesTabAndSelect from "../../_components/ResourcesTabAndSelect";
import { notFound } from "next/navigation";
import DateFilter from "@/components/custom/DatePick";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
import NoData from "@/components/NoData";

const tabList = [
  {
    slug: "aip-updates",
    toSend: "aipUpdates",
    name: "AIP Updates",
    link: "/resource-center/aip-resources/aip-updates",
  },
  {
    slug: "reports-and-publications",
    toSend: "reportsAndPublications",
    name: "Reports & Publications",
    link: "/resource-center/aip-resources/reports-and-publications",
  },
  {
    slug: "newsletter",
    toSend: "newsletter",
    name: "Newsletter",
    link: "/resource-center/aip-resources/newsletter",
  },
  {
    slug: "inspirational-voices",
    toSend: "inspirationalVoices",
    name: "Inspirational Voices",
    link: "/resource-center/aip-resources/inspirational-voices",
  },
  {
    slug: "in-the-media",
    toSend: "inTheMedia",
    name: "In the Media",
    link: "/resource-center/aip-resources/in-the-media",
  },
  {
    slug: "gallery",
    toSend: "gallery",
    name: "Gallery",
    link: "/resource-center/aip-resources/gallery",
  },
];
const aipResourcesFilter = [
  {
    filterBy: "aip-updates",
    filter: [
      {
        type: "domain",
        options: [
          "All",
          "Art and Culture",
          "Education",
          "Environment",
          "Health and Nutrition",
          "Legal and Judiciary",
          "Livelihood",
          "Disability",
          "Rural Development",
          "Sports",
          "WASH",
          "Philanthrophy",
          "Women & Child",
        ],
      },
    ],
  },
  {
    filterBy: "reports-and-publications",
    filter: [
      {
        type: "domain",
        options: [
          "All",
          "Art and Culture",
          "Education",
          "Environment",
          "Health and Nutrition",
          "Legal and Judiciary",
          "Livelihood",
          "Disability",
          "Rural Development",
          "Sports",
          "WASH",
          "Philanthrophy",
          "Women & Child",
        ],
      },
      {
        type: "c_type",
        options: [
          "Sector primers",
          "Giving Journey",
          "Research Study",
          "Philanthropist Speak",
          "Books",
          "Articles",
          "PoV",
          "White paper",
          "Newsletter",
        ],
      },
    ],
  },
  {
    filterBy: "newsletter",
    filter: [
      {
        type: "domain",
        options: [
          "All",
          "Art and Culture",
          "Education",
          "Environment",
          "Health and Nutrition",
          "Legal and Judiciary",
          "Livelihood",
          "Disability",
          "Rural Development",
          "Sports",
          "WASH",
          "Philanthrophy",
          "Women & Child",
        ],
      },
    ],
  },
  {
    filterBy: "inspirational-voices",
    filter: [
      {
        type: "domain",
        options: [
          "All",
          "Art and Culture",
          "Education",
          "Environment",
          "Health and Nutrition",
          "Legal and Judiciary",
          "Livelihood",
          "Disability",
          "Rural Development",
          "Sports",
          "WASH",
          "Philanthrophy",
          "Women & Child",
        ],
      },
      {
        type: "c_type",
        options: [
          "Sector primers",
          "Giving Journey",
          "Research Study",
          "Philanthropist Speak",
          "Books",
          "Articles",
          "PoV",
          "White paper",
          "Newsletter",
        ],
      },
    ],
  },
  {
    filterBy: "in-the-media",
    filter: [
      {
        type: "domain",
        options: [
          "All",
          "Art and Culture",
          "Education",
          "Environment",
          "Health and Nutrition",
          "Legal and Judiciary",
          "Livelihood",
          "Disability",
          "Rural Development",
          "Sports",
          "WASH",
          "Philanthrophy",
          "Women & Child",
        ],
      },
      {
        type: "c_type",
        options: [
          "Sector primers",
          "Giving Journey",
          "Research Study",
          "Philanthropist Speak",
          "Books",
          "Articles",
          "PoV",
          "White paper",
          "Newsletter",
        ],
      },
    ],
  },
  // {
  //   filterBy: "gallery",
  //   filter: [
  //     {
  //       type: "domain",
  //       options: [
  //         "All",
  //         "Art and Culture",
  //         "Education",
  //         "Environment",
  //         "Health and Nutrition",
  //         "Legal and Judiciary",
  //         "Livelihood",
  //         "Disability",
  //         "Rural Development",
  //         "Sports",
  //         "WASH",
  //         "Philanthrophy",
  //         "Women & Child",
  //       ],
  //     },
  //     {
  //       type: "c_type",
  //       options: [
  //         "Sector primers",
  //         "Giving Journey",
  //         "Research Study",
  //         "Philanthropist Speak",
  //         "Books",
  //         "Articles",
  //         "PoV",
  //         "White paper",
  //         "Newsletter",
  //       ],
  //     },
  //   ],
  // },
];

export const dynamic = "force-dynamic";
const getAipResourcesData = async (
  slug: string,
  { domain, c_type, date }: { domain: string; c_type: string; date: string }
): Promise<TAipResourcesCategory[]> => {
  const response = await Api.getAipResources(slug, {
    domain,
    c_type,
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
    c_type: string;
    date: string;
  }>;
}) => {
  const param = await params;
  const SearchParam = await searchParams;
  const { domain, c_type, date } = await searchParams;
  const filterBySlug = tabList.find((items) => items.slug === param.slug);
  const response = await getAipResourcesData(filterBySlug!.toSend, {
    domain,
    c_type,
    date,
  });
  if (!response) {
    notFound();
  }
  const filterData = aipResourcesFilter.find(
    (item) => item.filterBy === param.slug
  );
  return (
    <div className="pt-[5rem] overflow-x-hidden min-h-screen">
      <div className="container mx-auto relative ~px-5/[7.5rem] pb-[7.5rem]">
        <div className="~px-5/flex ~pt-0/[1.25rem] gap-[.75rem][7.8rem]">
          <BreadCrump
            textOne="Resource Center"
            linkOne="#"
            textTwo="AIP Resources"
            linkTwo="/resource-center/aip-resources"
            textThree={filterBySlug?.name}
            linkThree={`/resource-center/aip-resources/${param.slug}`}
          />
          <div className="max-w-[51.188rem] ~pt-[4.3rem]/[5rem] ~pb-[2.5rem]/[4rem]">
            {/* <p className="font-playFair leading-[3.3rem] ~text-h4/[3rem] text-gray80">
              AIP Resources
            </p> */}
            <WordStaggerAnimation
              text="AIP Resources"
              className="font-playFair leading-[3.3rem] ~text-h4/[3rem] text-gray80"
            />
          </div>
        </div>
        <ResourcesTabAndSelect
          resources="aip-resources"
          currentTab={filterBySlug?.name}
          tabList={tabList}
          mainClassName="!pt-0"
          tabClassName="!w-full  !px-0"
          tabListClassName="!w-full"
        />
        {filterData && (
          <div className="flex flex-col md:flex-row md:items-center pt-[2rem]  ~gap-0/[0.75rem] ">
            <p className="~pb-[1.25rem]/0 text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
              Filter by:
            </p>
            <div className="relative flex flex-wrap gap-[.75rem]">
              {filterData?.filter.map((data, i) => (
                <CustomFilter
                  key={i}
                  searchParams={{ ...SearchParam }}
                  filterKey={data?.type}
                  type={data?.type}
                  optionsArray={data?.options}
                />
              ))}
              {(filterData?.filterBy === "gallery" ||
                filterData?.filterBy === "in-the-media" ||
                filterData?.filterBy === "inspirational-voices" ||
                filterData?.filterBy === "newsletter" ||
                filterData?.filterBy === "reports-and-publications") && (
                <DateFilter searchParams={{ ...SearchParam }} />
              )}
            </div>
          </div>
        )}
        {response.length != 0 ? (
          <div className="pt-[3.25rem] grid md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem]">
            {response?.map((item, i) => (
              <CardAnimation index={i} delay={0.1} key={i}>
                <ResourceCard
                  city={item.city}
                  linkKey={item?.key}
                  index={i}
                  slug={item?.slug}
                  isLinkOrPdf={item?.isLinkOrPdf}
                  file={item?.file}
                  fileLink={item?.fileLink}
                  key={i}
                  src={item?.image}
                  title={item?.title}
                  desc={item?.description}
                  category={item?.domain}
                  domain={item?.domain}
                  date={item?.date}
                />
              </CardAnimation>
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default AipResourcesInnerPage;
