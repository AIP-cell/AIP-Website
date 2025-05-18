import React from "react";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import { TTeamMembers } from "@/api/type";
import { Api } from "@/api/Api";
import { notFound } from "next/navigation";
import PeopleOfAipTeamMembers from "@/app/people-of-aip/[slug]/_components/PeopleOfAipTeamMembers";

export const dynamic = "force-dynamic";
const getPeopleOfAipApi = async (slug: string): Promise<TTeamMembers[]> => {
  const response = await Api.getPeopleOfAip(slug);
  return response?.data;
};

const InnerPage = async () => {
  const urlSlug = "advisory-board";
  const response = await getPeopleOfAipApi("advisoryBoard");
  if (!response) {
    notFound();
  }
  const members = response;
  return (
    <div className="pt-[5rem] overflow-hidden">
      <div className="relative container mx-auto">
        <BreadCrump
          textOne="About Us"
          linkOne={`#`}
          textTwo={"Our Advisory Board"}
          linkTwo={`/people-of-aip/${urlSlug}`}
        />
      </div>

      <PeopleOfAipTeamMembers teamMembers={members} urlSlug={urlSlug} />
    </div>
  );
};

export default InnerPage;
