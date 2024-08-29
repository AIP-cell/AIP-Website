import React from "react";
import Link from "next/link";
import Image from "next/image";
import projectBg from "@public/svg/projectsPage/projectBg.svg";
import OurThreeIs from "./_components/OurThreeIs";

const page = () => {
  return (
    <div>
      <div className="container tw-mx-auto tw-pl-[7.8rem] tw-pt-[5rem]">
        <div className="tw-absolute tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
          <Link
            href=""
            className="tw-text-gray50 tw-text-h9BodyCopy5 tw-leading-[19.6px]"
          >
            {"<"}Careers / &nbsp;
          </Link>
          <Link href="#"> All Positions</Link>
        </div>
        <div className="tw-max-w-[38.125rem] tw-mx-auto  tw-text-center">
          <p className="tw-text-h2 tw-text-gray80 tw-leading-[3.713rem] tw-font-playFair tw-tracking-[-.04rem]">
            AIP is a peer network that
            <span className="tw-italic tw-text-textPurple">
              channels the flow{" "}
            </span>{" "}
            to accelerate strategic giving in India - a movement{" "}
            <span className="tw-italic tw-text-textPurple">
              by and for philanthropists{" "}
            </span>
          </p>
        </div>
      </div>

      <div className=" tw-absolute tw-overflow-hidden">
        <Image src={projectBg} alt="" className=" " />
      </div>

      <div className="tw-max-w-[38.125rem] tw-relative  tw-pt-[12.5rem] tw-text-center container tw-mx-auto">
          <p className="tw-text-h2 tw-text-gray80 tw-leading-[3.713rem] tw-font-playFair tw-tracking-[-.04rem]">
          Why Work With 
            <span className="tw-italic tw-text-textPurple">
            AIP?
            </span>
            </p>
            <p className="tw-font-inter tw-text-midGray">
            Philanthropy can impact India’s future. 
            And you can be a part of creating that impact.
            </p>
       
       <OurThreeIs/>
       
        </div>
        
    </div>
  );
};

export default page;
