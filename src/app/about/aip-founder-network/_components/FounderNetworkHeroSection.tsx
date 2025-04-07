import BreadCrump from "@/components/bread-crump/BreadCrump";
import Image from "next/image";
import PurpleWave from "@public/svg/about/aip-founder-network/heroSectionPurpleBg.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
import React from "react";
import FadeInAnimation from "@/components/animations/FadeInAnimation";

type Props = {
  desc1?: string;
  desc2?: string;
};
const FounderNetworkHeroSection = ({ desc1, desc2 }: Props) => {
  // console.log("desc1:::", desc1);
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
          textTwo="AIP Founder Network"
          linkTwo="/about/aip-founder-network"
        />
        <div className="~pl-5/[7.81rem] ~pr-5/[14.375rem] ~pt-[4.313rem]/[7.5rem]">
          {/* <h4 className="~leading-[1.138rem]/[1.3rem] ~text-h9Copy5/h9Copy4 font-semibold uppercase text-purple40 ~pt-[4.313rem]/[6.5rem]">
            A Grant-maker not a fundraiser
          </h4> */}
          <div className="~pt-[1.25rem]/[0.75rem] ">
            <FadeInAnimation delay={0.1} x1={-20} x2={0}>
            {/* dangerouslySetInnerHTML={{ __html: desc1! }} */}
              <div className=" ~text-h5/h7 text-gray80  ~leading-[1.75rem]/[2.6rem] font-medium font-playFair">
                {desc1}
              </div>
            </FadeInAnimation>
            {/* <div className=" ~text-h5/h4 text-gray80  ~leading-[1.75rem]/[2.6rem] font-medium font-playFair ~pt-[2rem]/[3rem]">
              {desc2}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderNetworkHeroSection;
