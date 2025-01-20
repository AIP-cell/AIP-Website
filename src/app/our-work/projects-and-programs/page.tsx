import React from "react";
import Image from "next/image";
import projectBg from "@public/svg/projects-page/projectBg.svg";
import ResourceCard from "@/components/cards/ResourceCard";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CustomFilter from "@/components/custom/CustomFilter";
import { Api } from "@/api/Api";
import { TProjectPrograms } from "@/api/type";
import { notFound } from "next/navigation";
import DateFilter from "@/components/custom/DatePick";
import CardAnimation from "@/components/animations/CardAnimation";

const filterDatas = [
  {
    type: "domain",
    key: "domain",
    filter: [
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
    key: "typeOfContent",
    filter: [
      "Thematic Workshop",
      "Panel Discussions",
      "Fireside Chats",
      "Roundtable Discussions",
    ],
  },
  {
    type: "o_type",
    key: "organizationType",
    filter: ["Organization Type1", "Organization Type2"],
  },
  { type: "events", key: "events", filter: ["Events1", "Events2"] },
];

export const dynamic = "force-dynamic";
const getProjectsProgramsApi = async ({
  domain,
  c_type,
  o_type,
  events,
  date,
}: {
  domain?: string;
  c_type?: string;
  o_type?: string;
  events?: string;
  date?: string;
}): Promise<TProjectPrograms[]> => {
  const response = await Api.getProjectsPrograms({
    domain,
    c_type,
    o_type,
    events,
    date,
  });
  return response.data;
};

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    domain?: string;
    c_type?: string;
    o_type?: string;
    events?: string;
    date?: string;
  }>;
}) => {
  const { domain, c_type, o_type, events, date } = await searchParams;
  const urlsearchParams = await searchParams;
  const response = await getProjectsProgramsApi({
    domain,
    c_type,
    o_type,
    events,
    date,
  });
  if (!response) {
    notFound();
  }
  // console.log("searchParams::", searchParams);
  return (
    <div className="~pt-[4.4rem]/[5rem] ">
      <div className=" relative w-full  ">
        <Image
          src={projectBg}
          alt="bg"
          className=" hidden md:block inset-x-0 object-cover w-full absolute top-[-9rem] h-[30rem]"
        />
        <div className="container mx-auto relative ~px-5/[7.8rem] ~pt-[4.313rem]/[5rem]">
          <BreadCrump
            textOne="Our Work"
            linkOne="/our-work"
            textTwo="Projects and Programs"
            linkTwo="/our-work/projects-and-programs"
          />
          <p className=" ~text-h9Copy5/h9Copy4 font-inter font-semibold uppercase ~leading-[1.138rem]/[1.3rem] text-purple40">
            Projects and Programs
          </p>
          <p className="~leading-[2.113rem]/[2.6rem] font-playFair ~text-h4a/h4 text-gray80 pt-5  md:tracking-[-0.02rem]">
            Through our projects and programs, we inspire and influence each
            other by sharing their motivations, knowledge, ideas and
            experiences. All to enable shared learning and collaboration with
            insights across sectors and effective giving.
          </p>
          <div className="flex flex-wrap pt-[3.25rem] items-center gap-[0.75rem] pb-[3.25rem]">
            <p className=" text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
              Filter by:
            </p>
            <div className="flex flex-col lg:flex-row  gap-[.75rem]">
              <div className="flex flex-wrap gap-[.75rem]">
                {filterDatas.map((items, i) => (
                  <CustomFilter
                    key={i}
                    searchParams={{ ...urlsearchParams }}
                    filterKey={items.type}
                    type={items.type}
                    optionsArray={items.filter}
                  />
                ))}
              </div>
              <DateFilter searchParams={{ ...urlsearchParams }} />
            </div>
          </div>

          {response.length != 0 && (
            <div className=" pb-[5rem] grid sm:grid-cols-2 lg:grid-cols-3 ~gap-[2.5rem]/[4.5rem]">
              {response?.map((item, i) => (
                <CardAnimation index={i} delay={0.2} key={i}>
                  <ResourceCard
                    key={i}
                    index={i}
                    // link={`/our-work/projects-and-programs/${item.slug}`}
                    projectsAndProgram
                    slug={item.slug}
                    src={item.image}
                    title={item.title}
                    desc={item.description}
                    // category={item.category}
                    date={item.date}
                  />
                </CardAnimation>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
