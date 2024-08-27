import React from "react";
import Link from "next/link";
import ResourcesTabs from "./_components/ResourcesTabs";

const page = () => {
  return (
    <div className="container tw-mx-auto tw-relative  tw-pl-[7.8rem] tw-pt-[5rem]">
      <div className="tw-absolute tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
        <Link
          href=""
          className="tw-text-gray50 tw-text-h9BodyCopy5 tw-leading-[19.6px]"
        >
          {"<"} Resource Center / AIP Resources / &nbsp;/&nbsp;
        </Link>
        <Link href="#">Reports</Link>
      </div>

      <div className="tw-max-w-[51.188rem] tw-pb-[4rem]">
        <p className="tw-font-playFair tw-leading-[3.3rem] tw-text-[3rem] tw-pb-[1.25rem]">
          AIP Resources
        </p>
        <p className="tw-leading-[1.4rem] tw-font-inter">
          A short description on the what the page is about. Giving has lagged
          behind despite a growing pool of first-generation wealth creators who
          have the ability to give forward. Giving has lagged behind despite a
          growing pool of first-generation wealth creators who have the ability
          to give forward.
        </p>
      </div>

      <ResourcesTabs  />
    </div>
  );
};

export default page;
