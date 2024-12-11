import Image from "next/image";
import Link from "next/link";
import Oval from "@public/svg/ovalPeach.svg";
import HeroBg from "@public/svg/about/aip-impact/foundationFactHeroSvg.svg";
import React from "react";
import BreadCrump from "@/components/bread-crump/BreadCrump";

const FoundationFactHeroSection = () => {
  return (
    <div className="pt-[5rem]">
      <div className="relative bg-container mx-auto ">
        <Image
          src={HeroBg}
          alt="oval-peach-color-svg"
          className="hidden lg:block absolute top-[4rem] w-full"
        />
        <div className="relative container mx-auto">
          <Image
            src={Oval}
            alt="oval-peach-color-svg"
            className="hidden lg:block absolute bottom-[-10.5rem] size-[11.87rem] right-[7.813rem]"
          />
          <BreadCrump
            textOne="About"
            linkOne="/about"
            textTwo="AIP Impact"
            linkTwo="/about/aip-impact"
            textThree="Foundation Fact Sheet"
            linkThree="/about/aip-impact/foundation-fact-sheet"
          />
          <div className="~pt-[4.313rem]/[7.5rem]  ~px-[1.25rem]/[7.8rem] text-left  md:text-center font-playFair  ~text-h4a/h3 text-gray80 tracking-[-1.4px] ~leading-[2.6rem]/[3.25rem]">
            AIP works to see strategic philanthropy impact India’s
            transformation. AIP is by and for philanthropists – to inspire,
            influence and inform strategic giving. AIP’s Core Founders are some
            of India’s leading philanthropists—Ashish and Manisha Dhawan (The
            Convergence Foundation), Rohini Nilekani (Rohini Nilekani
            Philanthropies), Amit and Archana Chandra (ATE Chandra Foundation)
            and Vishal Tulsyan (Motilal Oswal).
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationFactHeroSection;
