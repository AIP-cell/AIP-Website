import React from "react";
import PeopleOfAipTab from "../_components/PeopleOfAipTab";
import PeopleOfAipSm from "../_components/PeopleOfAipSm";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CoreFoundersTab from "./_components/CoreFoundersTab";

const page = () => {
  return (
    <div className="tw-pt-[5rem] tw-overflow-hidden">
      <div className="tw-relative container tw-mx-auto">
        <BreadCrump
          textOne="People of AIP"
          linkOne="/people-of-aip"
          textTwo="Core Founders"
          linkTwo="/people-of-aip/core-founders"
        />
      </div>
      {/* <CoreFoundersTab/>  */}
      <PeopleOfAipTab tabSelect="core-founders" />
      <PeopleOfAipSm tabSelect="Our Core Founders"/>
    </div>
  );
};

export default page;
