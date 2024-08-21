import OvalPurple from "@/components/ovals/OvalPurple";
import Image from "next/image";
import React from "react";
import Bg from "../../../public/svg/membersBg.svg"

const Founders = () => {
  return (
    <div className="overflow-hidden container mx-auto pt-[13.25rem]">
      <div className="relative h-[120vh]">
        <Image
          src={Bg}
          alt=""
          className="object-cover absolute inset-x-0 -bottom-[5rem]"
        />
        <OvalPurple
          title="4"
          desc="Core Founders"
          absoluteClass=" -top-[4rem] right-[11.85rem]"
        />
        <OvalPurple
          title="31"
          desc="Founders"
          absoluteClass=" top-[15.5rem] right-[6.48rem]"
        />
        <OvalPurple
          title="150 +"
          desc="Members"
          absoluteClass=" top-[20rem] right-[26rem]"
        />
        {/* <div className=""> */}
        <h2 className="text-h2Heading2 w-[38rem] text-gray50 leading-[52.8px] pl-[7.8rem]">
          Accelerate Indian Philanthropy is a peer network set up
          <i className="text-textPurple">
            {" "}
            by philanthropists,for philanthropists{" "}
          </i>
          to support their giving efforts.
        </h2>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Founders;
