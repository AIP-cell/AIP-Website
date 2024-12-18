import React from "react";
import PeopleOfAipTab from "../_components/PeopleOfAipTab";
import PeopleOfAipSm from "../_components/PeopleOfAipSm";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import PeopleOfAipTabs from "../_components/PeopleOfAipTabs";
import Experts from "./_components/Experts";
import { TPeopleOfAip } from "@/api/type";
import { Api } from "@/api/Api";

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
  const response = await getPeopleOfAipApi("experts");
  const expertMembers = response.teamMembers;
  return (
    <div className="pt-[5rem] overflow-hidden">
      <div className="relative container mx-auto">
        <BreadCrump
          textOne="People of AIP"
          linkOne="/people-of-aip"
          textTwo="Experts"
          linkTwo="/people-of-aip/experts"
        />
      </div>
      <PeopleOfAipTabs tabList={tabList} currentTab="Experts" />
      <Experts expertMembers={expertMembers} />
      {/* <PeopleOfAipTab tabSelect="experts" />
      <PeopleOfAipSm tabSelect="Experts"/> */}
    </div>
  );
};

export default page;
