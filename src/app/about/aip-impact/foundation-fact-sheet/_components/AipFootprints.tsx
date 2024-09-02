"use client";
import Blob from "@/components/blob/Blob";
import ASvg from "@/components/svg/ASvg";
import MailSvg from "@/components/svg/MailSvg";
import Mail from "@public/svg/mailPurple.svg";
import Image from "next/image";
// import { Blob } from "react-interactive-blob"
const AipFootprints = () => {
  return (
    <div className="tw-pt-[12.5rem] tw-pb-[7.5rem]">
      <h3 className="tw-font-playFair tw-text-h2 tw-text-center tw-text-gray80 tw-pb-[2.734rem] ">
        AIP <i className="tw-text-textPurple"> Footprint</i>
      </h3>
      <div className="tw-h-screen">
        <Blob
          height={500}
          radius={150}
          smoothing
          markers={false}
          sensitivity={0.2}
          friction={0.0105}
          speed={0.5}
        />
      </div>
      <div className="tw-flex tw-flex-col tw-items-center tw-pt-[5.32rem]">
        <h2 className="tw-text-h2 tw-text-center tw-text-gray80 tw-font-playFair">
          <i className="tw-text-textPurple">Connect </i> with Us
        </h2>
        <div className="tw-mt-[2.5rem] tw-bg-[#F0F0F299] tw-rounded-xl tw-w-[38rem] tw-flex tw-justify-between tw-px-[1.68rem] tw-py-[2rem] ">
          <div>
            <h4 className="tw-text-h7Copy2 tw-font-bold tw-text-gray80 tw-leading-[1.75rem]">
              Sabhayata Prakash
            </h4>
            <p className="tw-text-gray80 tw-text-h9Copy4 tw-pt-[0.438rem]">
              Designation, Department, Organisation
            </p>
          </div>
          <button className="tw-rounded-full tw-border-2 tw-border-darkPurple tw-h-fit">
            <div className="tw-text-darkPurple tw-flex tw-gap-[0.5rem] tw-justify-center tw-items-center tw-py-[0.75rem] tw-px-[1.75rem] ">
              <p className=" tw-text-h9Copy5 tw-font-medium tw-leading-[1.225rem] ">
                Send Email
              </p>
              <MailSvg />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AipFootprints;
