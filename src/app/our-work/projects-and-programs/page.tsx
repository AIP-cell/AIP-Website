import Link from "next/link";
import React from "react";
import Image from "next/image";
import ArrowDownSvg from "@public/svg/arrowDown.svg";
import projectBg from "@public/svg/projects-page/projectBg.svg";
import ResourceCard from "@/components/cards/ResourceCard";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CustomSelect from "@/components/custom/CustomSelect";
import CustomFilter from "@/components/custom/CustomFilter";
import { Api } from "@/api/Api";
import { TProjectPrograms } from "@/api/type";

const datas = [
  {
    src: "/svg/resource-page/resource1.svg",
    title: "Wealth with Purpose",
    desc: "This report is the result of a collaborative effort between Accelerate Indian Philanthropy (AIP) and the Boston Consulting Group (BCG).",
    category: "Report",
  },
  {
    src: "/svg/projects-page/report1.svg",
    title: "Systemic Impact Exemplars",
    desc: "Unique Approaches Towards Solving India’s Development Challenges by identifying and learning from organisations with systems change.",
    category: "Report",
  },
  {
    src: "/svg/projects-page/report2.svg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus imperdiet, neque at consequat malesuada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus imperdiet, neque at consequat",
    category: "Report",
  },
  {
    src: "/svg/resource-page/resource1.svg",
    title: "Wealth with Purpose",
    desc: "This report is the result of a collaborative effort between Accelerate Indian Philanthropy (AIP) and the Boston Consulting Group (BCG).",
    category: "Report",
  },
  {
    src: "/svg/projects-page/report1.svg",
    title: "Systemic Impact Exemplars",
    desc: "Unique Approaches Towards Solving India’s Development Challenges by identifying and learning from organisations with systems change.",
    category: "Report",
  },
  {
    src: "/svg/projects-page/report2.svg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus imperdiet, neque at consequat malesuada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus imperdiet, neque at consequat",
    category: "Report",
  },
];
const filterDatas = [
  {
    type: "Domain",
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
    type: "Type of Content",
    key: "typeOfContent",
    filter: [
      "Thematic Workshop",
      "Panel Discussions",
      "Fireside Chats",
      "Roundtable Discussions",
    ],
  },
  {
    type: "Organization Type",
    key: "organizationType",
    filter: ["Organization Type1", "Organization Type2"],
  },
  { type: "Events", key: "events", filter: ["Events1", "Events2"] },
  { type: "Date", key: "date", filter: ["Date1", "Date2"] },
];

export const dynamic = "force-dynamic";
const getProjectsProgramsApi = async ({
  domain,
  typeOfContent,
  organizationType,
  events,
  date,
}: {
  domain?: string;
  typeOfContent?: string;
  organizationType?: string;
  events?: string;
  date?: string;
}): Promise<TProjectPrograms[]> => {
  const response = await Api.getProjectsPrograms({
    domain,
    typeOfContent,
    organizationType,
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
    typeOfContent?: string;
    organizationType?: string;
    events?: string;
    date?: string;
  }>;
}) => {
  const { domain, typeOfContent, organizationType, events, date } =
    await searchParams;
  const urlsearchParams = await searchParams;
  const response = await getProjectsProgramsApi({
    domain,
    typeOfContent,
    organizationType,
    events,
    date,
  });
  // console.log("searchParams::", searchParams);
  return (
    <div className="~pt-[4.4rem]/[5rem]">
      <div className=" relative w-full overflow-hidden ">
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
          <div className="flex flex-wrap pt-[3.25rem] items-center gap-[0.75rem]">
            <p className=" text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
              Filter by:
            </p>
            <div className="flex flex-wrap gap-[.75rem]">
              {filterDatas.map((items, i) => (
                <CustomFilter
                  key={i}
                  searchParams={{ ...urlsearchParams }}
                  filterKey={items.key}
                  type={items.type}
                  optionsArray={items.filter}
                />
              ))}
            </div>
          </div>

          <div className="pt-[3.25rem] pb-[5rem] grid md:grid-cols-3 gap-[4.5rem]">
            {response.map((item, i) => (
              <ResourceCard
                key={i}
                link={`/our-work/projects-and-programs/${item.slug}`}
                src={item.image}
                title={item.title}
                desc={item.description}
                // category={item.category}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
