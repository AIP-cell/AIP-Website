"use client";
import Map from "@public/svg/map.svg";
import MailSvg from "@/components/svg/MailSvg";
import Image from "next/image";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
const AipFootprints = () => {
  return (
    <div className="pt-[12.5rem] pb-[7.5rem]">
      <h3 className="font-playFair text-h2 text-center text-gray80 pb-[2.734rem] ">
        AIP
        <span className="text-textPurple font-playFairItalic">
          Footprint
        </span>
      </h3>
      {/* <MapSvg className="w-full"/> */}
      <Image src={Map} alt="" className="w-full" />
      
      
    </div>
  );
};

export default AipFootprints;
