import Image from "next/image";
import ovalPeach from "@public/svg/ovalPeach.svg";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import PurpleBgCurve from "@public/svg/purple-Bg-Curve-Masked.svg";

const ApproachHeroSection = () => {
  return (
    <div className="relative ">
      <Image
        src={PurpleBgCurve}
        alt=""
        className="absolute bottom-[-21rem]  ~left-[-18rem]/0"
      />
      <div className="relative overflow-hidden container mx-auto">
        <BreadCrump
          textOne="About Us"
          linkOne="#"
          textTwo="The AIP Approach"
          linkTwo="/about/our-approach"
        />
        <div className="~pl-5/[7.8rem] ~pr-5/[7.8rem] lg:~pr-5/[34rem] container mx-auto">
          <h4 className="~pt-[4.313rem]/[6.5rem] leading-[1.3rem] font-inter font-semibold text-purple40">
            The AIP Approach
          </h4>
          <h3 className="pt-[0.75rem] text-gray80 ~text-h4a/h4 font-playFair leading-[2.6rem]">
            Personal Philanthropy is almost never linear, it goes through its
            twists and turns, from initiation to experimentation, slowly
            gathering conviction and strength, and finally maturing into a
            joyful and fulfilling life experience. Just as rivers carry water,
            philanthropy channels resources like money or time towards causes,
            circulating goodwill.
            <span className="text-textPurple font-playFairItalic">
              &nbsp;AIP channels the flow.
            </span>
          </h3>
        </div>
        <div className="container mx-auto relative ~pt-20/[12.5rem] ~pb-[0rem]/[5rem] ~pr-5/[14.375rem] ~pl-5/[14.375rem] lg:~pl-5/[27.5rem]">
          <Image
            src={ovalPeach}
            alt=""
            className="absolute ~top-0/[4.5rem] ~size-[11.563rem]/[17.62rem]  ~left-[16rem]/[18rem]"
          />
          <h3 className="relative text-gray80 ~text-h4a/h4 font-playFair leading-[2.6rem]">
            Founded in 2021 with an objective to transform the strategic giving
            landscape in India. AIP works with ultra-high net worth individuals
            and families (in India and the diaspora) to create sustainable
            impact by inspiring and enabling them to
            <span className="text-textPurple font-playFairItalic">
              &nbsp;give more, give sooner, and give better
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ApproachHeroSection;
