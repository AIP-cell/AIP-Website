import React from "react";
import PeopleOfAipTab from "../_components/PeopleOfAipTab";
import PeopleOfAipSm from "../_components/PeopleOfAipSm";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import PeopleOfAipTabs from "../_components/PeopleOfAipTabs";
import Experts from "./_components/Experts";

const page = () => {
  return (
    <div className="tw-pt-[5rem] tw-overflow-hidden">
      <div className="tw-relative container tw-mx-auto">
        <BreadCrump
          textOne="People of AIP"
          linkOne="/people-of-aip"
          textTwo="Experts"
          linkTwo="/people-of-aip/experts"
        />
      </div>
      <PeopleOfAipTabs currentTab="Experts" />
      <Experts />
      {/* <PeopleOfAipTab tabSelect="experts" />
      <PeopleOfAipSm tabSelect="Experts"/> */}
    </div>
  );
};

export default page;
