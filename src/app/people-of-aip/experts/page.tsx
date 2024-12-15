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
const page = async () => {
  const response = await getPeopleOfAipApi("experts");
  const expertMembers =response.teamMembers
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
      <PeopleOfAipTabs currentTab="Experts" />
      <Experts expertMembers={expertMembers}/>
      {/* <PeopleOfAipTab tabSelect="experts" />
      <PeopleOfAipSm tabSelect="Experts"/> */}
    </div>
  );
};

export default page;
