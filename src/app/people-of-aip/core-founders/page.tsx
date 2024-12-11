import React from "react";
// import PeopleOfAipTab from "../_components/PeopleOfAipTab";
// import PeopleOfAipSm from "../_components/PeopleOfAipSm";
import BreadCrump from "@/components/bread-crump/BreadCrump";
// import CoreFoundersTab from "./_components/CoreFoundersTab";
import PeopleOfAipTabs from "../_components/PeopleOfAipTabs";
import OurCoreFoundersContent from "./_components/OurCoreFoundersContent";

const page = () => {
  return (
    <div className="pt-[5rem] overflow-hidden">
      <div className="relative container mx-auto">
        <BreadCrump
          textOne="People of AIP"
          linkOne="/people-of-aip"
          textTwo="Core Founders"
          linkTwo="/people-of-aip/core-founders"
        />
      </div>

      {/* <CoreFoundersTab/>  */}
      <PeopleOfAipTabs currentTab="Our Core Founders" />
      <OurCoreFoundersContent />
      {/* <PeopleOfAipTab tabSelect="core-founders" />
      <PeopleOfAipSm tabSelect="Our Core Founders"/> */}
    </div>
  );
};

export default page;
