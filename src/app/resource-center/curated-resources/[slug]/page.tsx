import React from "react";
import Link from "next/link";
import BreadCrump from "@/components/bread-crump/BreadCrump";
// import ResourcesSm from "../_components/ResourcesSm";
// import TabListAndRespSelect from "../_components/TabListAndRespSelect";
import ResourceCard from "@/components/cards/ResourceCard";
import { Api } from "@/api/Api";
import { TAipResourcesCategory } from "@/api/type";
import CustomFilter from "@/components/custom/CustomFilter";
import ResourcesTabAndSelect from "../../_components/ResourcesTabAndSelect";
import { notFound } from "next/navigation";

const tabList = [
  {
    slug: "featured",
    toSend: "featured",
    name: "Featured",
    link: "/resource-center/curated-resources/featured",
  },
  // {
  //   slug: "experts",
  //   name: "Experts",
  //   link: "/resource-center/curated-resources/experts",
  // },
  {
    slug: "philanthropists",
    toSend: "philanthropists",
    name: "Philanthropists",
    link: "/resource-center/curated-resources/philanthropists",
  },
  {
    slug: "npo",
    toSend: "npo",
    name: "NPO",
    link: "/resource-center/curated-resources/npo",
  },
  {
    slug: "partners",
    toSend: "partners",
    name: "Partners",
    link: "/resource-center/curated-resources/partners",
  },
  {
    slug: "world-of-philanthropy",
    toSend: "worldOfPhilanthropy",
    name: "World of Philanthropy",
    link: "/resource-center/curated-resources/worldOfPhilanthropy",
  },
];
const curatedResourcesFilter = [
  {
    filterBy: "featured",
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
        type: "c_type",
        options: [
          "Sector primers",
          "Giving Journey",
          "Case Study",
          "Research Study",
          "Philanthropist",
          "Speak",
          "Books",
          "Articles",
          "PoV",
          "White paper",
          "Newsletter",
        ],
      },
      {
        type: "o_type",
        options: [
          "Sector primers",
          "Giving Journey",
          "Case Study",
          "Research Study",
          "Philanthropist",
          "Speak",
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
  //   filterBy: "experts",
  //   filter: [
  //     {
  //       type: "domain",
  //       options: [
  //         "All",
  //         "Art & Culture",
  //         "Education",
  //         "Environment",
  //         "Health & Nutrition",
  //         "Legal & Judiciary",
  //         "Livelihood",
  //         "Disability",
  //         "Rural Development",
  //         "Sports",
  //         "WASH",
  //         "Women & Child",
  //       ],
  //     },
  //     {
  //       type: "Type of Content",
  //       options: ["data1", "data2"],
  //     },
  //     { type: "Date", options: ["data1", "data2"] },
  //   ],
  // },
  {
    filterBy: "philanthropists",
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
      { type: "date", options: ["data1", "data2"] },
    ],
  },
  {
    filterBy: "npo",
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
        type: "c_type",
        options: ["data1", "data2"],
      },
      { type: "date", options: ["data1", "data2"] },
    ],
  },
  {
    filterBy: "partners",
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
        type: "c_type",
        options: ["data1", "data2"],
      },
      { type: "date", options: ["data1", "data2"] },
    ],
  },
  {
    filterBy: "world-of-philanthropy",
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
        type: "c_type",
        options: ["data1", "data2"],
      },
      { type: "date", options: ["data1", "data2"] },
    ],
  },
];

export const dynamic = "force-dynamic";
const getAipResourcesData = async (
  slug: string,
  {
    domain,
    c_type,
    o_type,
    date,
  }: {
    domain: string;
    c_type: string;
    o_type: string;
    date: string;
  }
): Promise<TAipResourcesCategory[]> => {
  const response = await Api.getCuratedResources(slug, {
    domain,
    c_type,
    o_type,
    date,
  });
  return response.data;
};
const CuratedResourcesInnerPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    domain: string;
    c_type: string;
    organisationType: string;
    date: string;
  }>;
}) => {
  const param = await params;
  const SearchParam = await searchParams;
  const { domain, c_type, organisationType, date } = await searchParams;
  const filterBySlug = tabList.find((items) => items.slug === param.slug);
  const response = await getAipResourcesData(filterBySlug!.toSend, {
    domain,
    c_type,
    o_type: organisationType,
    date,
  });
  if (!response) {
    notFound();
  }
  const filterData = curatedResourcesFilter.find(
    (item) => item.filterBy === param.slug
  );
  return (
    <div className="pt-[5rem]">
      <div className="container mx-auto relative ~px-5/[7.5rem]">
        <div className="~px-5/flex ~pt-0/[1.25rem] gap-[.75rem][7.8rem]">
          <BreadCrump
            textOne="Resource Center"
            linkOne="/resource-center"
            textTwo="Curated Resources"
            linkTwo="/resource-center/curated-resources"
            textThree={filterBySlug?.name}
            linkThree={`/resource-center/curated-resources/${param.slug}`}
          />
          <div className="max-w-[51.188rem] ~pt-[4.3rem]/[5rem] ~pb-[2.5rem]/[4rem]">
            <p className="font-playFair leading-[3.3rem] ~text-h4/[3rem] text-gray80">
              Curated Resources
            </p>
          </div>
        </div>
        <ResourcesTabAndSelect
          resources="curated-resources"
          currentTab={filterBySlug?.name}
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
          {response?.map((item, i) => (
            <ResourceCard
              index={i}
              slug={item?.slug}
              isLinkOrPdf={item?.isLinkOrPdf}
              file={item?.file}
              fileLink={item?.fileLink}
              key={i}
              src={item?.image}
              title={item?.title}
              desc={item?.description}
              domain={item?.domain}
              category={item?.category}
              date={item?.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuratedResourcesInnerPage;
