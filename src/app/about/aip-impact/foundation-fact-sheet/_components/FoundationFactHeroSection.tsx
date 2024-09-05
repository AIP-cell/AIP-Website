import Image from "next/image";
import Link from "next/link";
import Oval from "@public/svg/ovalPeach.svg";
import HeroBg from "@public/svg/about/aip-impact/foundationFactHeroSvg.svg";
import React from "react";
import BreadCrump from "@/components/bread-crump/BreadCrump";

const FoundationFactHeroSection = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className="tw-relative bg-container tw-mx-auto ">
        <Image
          src={HeroBg}
          alt="oval-peach-color-svg"
          className="tw-absolute tw-top-[5.5rem] tw-w-full"
        />
        <div className="tw-relative container tw-mx-auto">
          <Image
            src={Oval}
            alt="oval-peach-color-svg"
            className="tw-absolute tw-bottom-[-10.5rem] tw-size-[11.87rem] tw-right-[7.813rem]"
          />
          <BreadCrump
            textOne="About"
            linkOne="/about"
            textTwo="AIP Impact"
            linkTwo="/about/aip-impact"
            textThree="Foundation Fact Sheet"
            linkThree="/about/aip-impact/foundation-fact-sheet"
          />
          <div className="tw-pt-[7.5rem]  tw-px-[7.8rem] tw-text-center tw-font-playFair tw-text-h3 tw-text-gray80 tw-leading-[3.25rem]">
            AIP works to see strategic philanthropy impact India’s
            transformation. AIP is by and for philanthropists - to inspire,
            influence and inform strategic giving. AIP’s Core Founders are some
            of India’s leading philanthropists—Ashish and Manisha Dhawan (The
            Convergence Foundation), Rohini Nilekani (Rohini Nilekani
            Philanthropies), Amit and Archana Chandra (ATE Chandra Foundation)
            and Vishal Tulsyan.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationFactHeroSection;
