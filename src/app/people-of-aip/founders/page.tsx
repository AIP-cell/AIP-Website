import Image from "next/image";
import Link from "next/link";
import React from "react";
import PeopleOfAipTab from "../_components/PeopleOfAipTab";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import PeopleOfAipSm from "../_components/PeopleOfAipSm";
const page = () => {
  return (
    <div className="tw-pt-[5rem] tw-overflow-hidden">
      <div className="tw-relative container tw-mx-auto">
        <BreadCrump
          textOne="People of AIP"
          linkOne="/people-of-aip"
          textTwo="Our Core Founders"
          linkTwo="/people-of-aip/founders"
        />
        <PeopleOfAipTab />
        <PeopleOfAipSm />
      </div>
    </div>
  );
};

export default page;
