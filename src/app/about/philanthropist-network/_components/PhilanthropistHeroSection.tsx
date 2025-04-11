import BreadCrump from "@/components/bread-crump/BreadCrump";
import Image from "next/image";
import PeachVertWave from "@public/svg/about/philanthropist-network/peachVertWaveLeft.tsx.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
import FadeInAnimation from "@/components/animations/FadeInAnimation";
const PhilanthropistHeroSection = () => {
  return (
    <div className="w-full relative">
      <Image
        src={PeachVertWave}
        alt=""
        className="hidden lg:block absolute top-0 right-0"
      />
      <Image
        src={OvalPeach}
        alt=""
        className="hidden lg:block absolute top-[20.313rem] z-10 right-[1.18rem]"
      />
      <div className="relative container mx-auto">
        <BreadCrump
          textOne="About Us"
          linkOne="#"
          textTwo="Philanthropist Network"
          linkTwo="/about/philanthropist-network"
        />
        <div className="~pl-5/[7.81rem] ~pr-5/[14.375rem]">
          {/* <h4 className="~leading-[1.138rem]/[1.3rem] ~text-h9Copy5/h9Copy4 font-semibold uppercase text-purple40 ~pt-[4.313rem]/[6.5rem]">
            NETWORK {">"} NET WORTH
          </h4> */}
          {/* ~pt-[1.25rem]/[0.75rem] */}
          <div className=" ~pt-[4.313rem]/[6.5rem]">
            <div className="  ~text-h5/h7 text-gray80 ~leading-[1.75rem]/[2.6rem] font-playFair tracking-[-0.3px]">
              <FadeInAnimation delay={0.1} x1={-20} x2={0}>
                {/* <p className="hidden md:block">
                  We work with philanthropist on a project level.
                </p> */}
                <p className="hidden md:block ">
                  AIP has created an enabling support structure for wealth
                  creators throughout their personal philanthropic journey. We are
                  supported by our Core Founders and Founders who believe in the
                  movement and in the potential for philanthropy to make a deep
                  impact.
                </p>
              </FadeInAnimation>
              <FadeInAnimation delay={0.1} x1={-20} x2={0}>
                <p className="block md:hidden">
                  We work with philanthropist on a project level. AIP has created
                  an enabling support structure for wealth creators throughout
                  their personal philanthropic journey. We are supported by our
                  Core Founders and Founders who believe in the movement and in
                  the potential for philanthropy to make a deep impact.
                </p>
              </FadeInAnimation>
            </div>
            <FadeInAnimation delay={0.2} x1={-20} x2={0}>
              <div className="  ~text-h5/h7 text-gray80 ~leading-[1.75rem]/[2.6rem] font-playFair ~pt-[2rem]/[3rem]">
                We pride ourselves on providing pro-bono support. This ensures our
                engagement remains neutral, unbiased, and devoid of conflicts. You
                don&apos;t need to be a founder to engage with us.
              </div>
            </FadeInAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilanthropistHeroSection;
