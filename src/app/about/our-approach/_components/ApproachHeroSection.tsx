import Image from "next/image";
import ovalPeach from "@public/svg/ovalPeach.svg";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import PurpleBgCurve from "@public/svg/purple-Bg-Curve-Masked.svg";

const ApproachHeroSection = () => {
  return (
    <div className="tw-relative ">
      <Image
        src={PurpleBgCurve}
        alt=""
        className="tw-absolute tw-bottom-[-21rem]  ~tw-left-[-18rem]/0"
      />
      <div className="tw-relative tw-overflow-hidden container tw-mx-auto">
        <BreadCrump
          textOne="About Us"
          linkOne="/about"
          textTwo="The AIP Approach"
          linkTwo="/about/our-approach"
        />
        <div className="~tw-pl-5/[7.8rem] ~tw-pr-5/[7.8rem] lg:~tw-pr-5/[34rem] container tw-mx-auto">
          <h4 className="~tw-pt-[4.313rem]/[6.5rem] tw-leading-[1.3rem] tw-font-inter tw-font-semibold tw-text-purple40">
            The AIP Approach
          </h4>
          <h3 className="tw-pt-[0.75rem] tw-text-gray80 ~tw-text-h4a/h4 tw-font-playFair tw-leading-[2.6rem]">
            Personal Philanthropy is almost never linear, it goes through its
            twists and turns, from initiation to experimentation, slowly
            gathering conviction and strength, and finally maturing into a
            joyful and fulfilling life experience. Just as rivers carry water,
            philanthropy channels resources like money or time towards causes,
            circulating goodwill.
            <span className="tw-text-textPurple tw-font-playFairItalic">
              &nbsp;AIP channels the flow.
            </span>
          </h3>
        </div>
        <div className="container tw-mx-auto tw-relative ~tw-pt-20/[12.5rem] ~tw-pb-[0rem]/[5rem] ~tw-pr-5/[14.375rem] ~tw-pl-5/[14.375rem] lg:~tw-pl-5/[27.5rem]">
          <Image
            src={ovalPeach}
            alt=""
            className="tw-absolute ~tw-top-0/[4.5rem] ~tw-size-[11.563rem]/[17.62rem]  ~tw-left-[16rem]/[18rem]"
          />
          <h3 className="tw-relative tw-text-gray80 ~tw-text-h4a/h4 tw-font-playFair tw-leading-[2.6rem]">
            Founded in 2021 with an objective to transform the strategic giving
            landscape in India. AIP works with ultra-high net worth individuals
            and families (in India and the diaspora) to create sustainable
            impact by inspiring and enabling them to
            <span className="tw-text-textPurple tw-font-playFairItalic">
              &nbsp;give more, give sooner, and give better
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ApproachHeroSection;
