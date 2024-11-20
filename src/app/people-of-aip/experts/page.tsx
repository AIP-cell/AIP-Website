import React from "react";
import PeopleOfAipTab from "../_components/PeopleOfAipTab";
import PeopleOfAipSm from "../_components/PeopleOfAipSm";
import BreadCrump from "@/components/bread-crump/BreadCrump";

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
      <PeopleOfAipTab tabSelect="experts" />
      <PeopleOfAipSm />
    </div>
  );
};

export default page;
