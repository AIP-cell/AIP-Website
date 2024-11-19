import BreadCrump from "@/components/bread-crump/BreadCrump";
import React from "react";

const page = () => {
  return (
    <div className="~tw-pt-[8rem]/[5rem]">
      <div className=" tw-relative container tw-mx-auto tw-h-screen">
        <BreadCrump
          textOne="Join our learning circle"
          linkOne="join-our-learning-circle"
        />
        <h1 className="tw-text-h2 tw-text-midGray tw-leading-[3.3rem] tw-font-playFair tw-text-center tw-pt-[5.938rem]">
          Join our learning circle
        </h1>
      </div>
    </div>
  );
};

export default page;
