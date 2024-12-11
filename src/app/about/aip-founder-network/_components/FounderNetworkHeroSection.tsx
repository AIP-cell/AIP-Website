import BreadCrump from "@/components/bread-crump/BreadCrump";
import Image from "next/image";
import PurpleWave from "@public/svg/about/aip-founder-network/heroSectionPurpleBg.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
import React from "react";

const FounderNetworkHeroSection = () => {
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
          linkOne="/about"
          textTwo="AIP Founder Network"
          linkTwo="/about/aip-founder-network"
        />
        <div className="~pl-5/[7.81rem] ~pr-5/[14.375rem]">
          <h4 className="~leading-[1.138rem]/[1.3rem] ~text-h9Copy5/h9Copy4 font-semibold uppercase text-purple40 ~pt-[4.313rem]/[6.5rem]">
            A Grant-maker not a fundraiser
          </h4>
          <div className="~pt-[1.25rem]/[0.75rem] ">
            <div className=" ~text-h5/h4 text-gray80  ~leading-[1.75rem]/[2.6rem] font-medium font-playFair">
              <p>AIP is by and for philanthropists - </p>
              to inspire, influence and inform strategic giving.
              <p> AIP’s Core Founders are Ashish and Manisha Dhawan</p>
              <p>(The Convergence Foundation), Rohini Nilekani </p>
              <p>(RohiniNilekani Philanthropies), Amit and Archana Chandra</p>
              (ATE Chandra Foundation) and Vishal Tulsyan.
            </div>
            <div className=" ~text-h5/h4 text-gray80  ~leading-[1.75rem]/[2.6rem] font-medium font-playFair ~pt-[2rem]/[3rem]">
              They are joined by ~30 Founders who have committed to support AIP,
              help expand this movement, and inspire others. The AIP umbrella
              has so far touched over 125 philanthropists, who are at different
              stages in their philanthropic journey, yet are bound by a shared
              vision for meaningful philanthropy that aids India’s
              transformation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderNetworkHeroSection;
