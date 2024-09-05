import BreadCrump from "@/components/bread-crump/BreadCrump";
import Image from "next/image";
import PeachVertWave from "@public/svg/about/philanthropist-network/peachVertWaveLeft.tsx.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
const PhilanthropistHeroSection = () => {
  return (
    <div className="tw-relative container tw-mx-auto">
      <Image
        src={PeachVertWave}
        alt=""
        className="tw-absolute tw-top-0 tw-right-0"
      />
      <Image
        src={OvalPeach}
        alt=""
        className="tw-absolute tw-top-[20.313rem] tw-z-10 tw-right-[1.18rem]"
      />
      <BreadCrump
        textOne="About Us"
        linkOne="/about"
        textTwo="Philanthropist Network"
        linkTwo="/about/philanthropist-network"
      />
      <div className="tw-pl-[7.81rem] tw-pr-[14.375rem]">
        <h4 className="tw-leading-[1.3rem] tw-font-semibold tw-uppercase tw-text-purple40 tw-pt-[6.5rem]">
          NETWORK {">"} NET WORTH
        </h4>
        <div className="tw-pt-[0.75rem] ">
          <div className=" tw-text-h4 tw-text-gray80 tw-leading-[2.6rem] tw-font-playFair">
            <p>We work with philanthropist on a project level. </p>
            <p>
              AIP has created an enabling support structure for wealth creators
              throughout their personal philanthropic journey. We are supported
              by our Core Founders and Founders who believe in the movement and
              in the potential for philanthropy to make a deep impact.
            </p>
          </div>
          <div className=" tw-text-h4 tw-text-gray80 tw-leading-[2.6rem] tw-font-playFair tw-pt-[3rem]">
            We pride ourselves on providing pro-bono support. This ensures our
            engagement remains neutral, unbiased, and devoid of conflicts. You
            don&apos;t need to be a founder to engage with us.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilanthropistHeroSection;
