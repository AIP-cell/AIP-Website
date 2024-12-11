import BreadCrump from "@/components/bread-crump/BreadCrump";
import React from "react";

const page = () => {
  return (
    <div className="~pt-[8rem]/[5rem]">
      <div className=" relative container mx-auto h-screen">
        <BreadCrump
          textOne="Join our learning circle"
          linkOne="join-our-learning-circle"
        />
        <h1 className="text-h2 text-midGray leading-[3.3rem] font-playFair text-center pt-[5.938rem]">
          Join our learning circle
        </h1>
      </div>
    </div>
  );
};

export default page;
