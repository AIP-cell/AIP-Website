"use client";

import BreadCrump from "@/components/bread-crump/BreadCrump";
import Image from "next/image";
import PurpleWave from "@public/svg/about/aip-founder-network/heroSectionPurpleBg.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";

type Props = {
  desc1?: string;
};
const FounderNetworkHeroSection = ({ desc1 }: Props) => {
  return (
    <div className="w-full  relative">
      <Image
        src={PurpleWave}
        alt=""
        className="hidden lg:block absolute top-0 right-0"
      />
      <div className="relative container mx-auto">
        <Image
          src={OvalPeach}
          alt=""
          className="hidden lg:block absolute top-[20.313rem] z-10 right-[1.18rem]"
        />
        <BreadCrump
          textOne="About Us"
          linkOne="#"
          textTwo="AIP Founders Network"
          linkTwo="/about/aip-founder-network"
        />
        <div className="~pl-5/[7.81rem] ~pr-5/[14.375rem] ~pt-[4.313rem]/[7.5rem]">
          <div className="~pt-[1.25rem]/[0.75rem] ">
            <div
              className="founder-text ~text-h5/h7 text-gray80  ~leading-[1.75rem]/[2.6rem] font-medium font-playFair "
              dangerouslySetInnerHTML={{ __html: desc1 || "" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderNetworkHeroSection;
