import React from "react";
// import PeopleOfAipTab from "../_components/PeopleOfAipTab";
import BreadCrump from "@/components/bread-crump/BreadCrump";
// import PeopleOfAipSm from "../_components/PeopleOfAipSm";
import PeopleOfAipTabs from "../_components/PeopleOfAipTabs";
import { Api } from "@/api/Api";
import { TPeopleOfAip } from "@/api/type";
import Founder from "@/app/_components/Founder";
import Founders from "./_components/Founders";

export const dynamic = "force-dynamic";
const getPeopleOfAipApi = async (slug: string): Promise<TPeopleOfAip> => {
  const response = await Api.getPeopleOfAip(slug);
  return response.data;
};
const tabList = [
  { name: "Our Core Founders", link: "/people-of-aip/core-founders" },
  { name: "Founders", link: "/people-of-aip/founders" },
  {
    name: "Our Advisory Board",
    link: "/people-of-aip/our-advisory-board",
  },
  { name: "Team AIP", link: "/people-of-aip/team-AIP" },
  { name: "Experts", link: "/people-of-aip/experts" },
];
const page = async () => {
  const response = await getPeopleOfAipApi("founder");
  const founderMembers = response.teamMembers;
  return (
    <div className="pt-[5rem] overflow-hidden">
      <div className="relative container mx-auto">
        <BreadCrump
          textOne="People of AIP"
          linkOne="/people-of-aip"
          textTwo="Founders"
          linkTwo="/people-of-aip/Founders"
        />
      </div>
      <PeopleOfAipTabs tabList={tabList} currentTab="Founders" />
      <Founders founderMembers={founderMembers} />
      {/* <FoundersTab currentTab="Founders" /> */}
      <div className="w-full container mx-auto">
        <div className="">Content 2</div>
      </div>
    </div>
  );
};

export default page;
