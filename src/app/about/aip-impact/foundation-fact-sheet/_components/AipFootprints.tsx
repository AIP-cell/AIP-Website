"use client";
import Map from "@public/svg/map.svg";
import MailSvg from "@/components/svg/MailSvg";
import Image from "next/image";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
const AipFootprints = () => {
  return (
    <div className="tw-pt-[12.5rem] tw-pb-[7.5rem]">
      <h3 className="tw-font-playFair tw-text-h2 tw-text-center tw-text-gray80 tw-pb-[2.734rem] ">
        AIP
        <span className="tw-text-textPurple tw-font-playFairItalic">
          Footprint
        </span>
      </h3>
      {/* <MapSvg className="tw-w-full"/> */}
      <Image src={Map} alt="" className="tw-w-full" />
      
      
    </div>
  );
};

export default AipFootprints;
