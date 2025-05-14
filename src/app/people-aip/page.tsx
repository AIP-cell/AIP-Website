import React from "react";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import { TPeopleAip, TTeamMembers } from "@/api/type";
import { Api } from "@/api/Api";
import { notFound } from "next/navigation";
import PeopleOfAipTeamMembers from "@/app/people-of-aip/[slug]/_components/PeopleOfAipTeamMembers";
import Directors from "./_components/Directors";

export const dynamic = "force-dynamic";
const getPeopleOfAipApi = async (): Promise<TPeopleAip> => {
  const response = await Api.getPeopleAip();
  return response?.data;
};

const page = async () => {
  const response = await getPeopleOfAipApi();
  if (!response) {
    notFound();
  }
  const members = response;
  console.log("res:::::::::::::::::::", response);
  // const innerName = tabList.find((item)=>item.key)
  return (
    <div className="pt-[5rem] overflow-hidden">
      {members.boardOfDirectors && members.boardOfDirectors.length !== 0 && (
        <Directors teamMembers={members.boardOfDirectors} urlSlug= ' Board of Directors'/>
      )}

      <PeopleOfAipTeamMembers teamMembers={members.teamAIP} urlSlug= 'team-aip' />
    </div>
  );
};

export default page;
