import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import React from "react";

const npos = [
  {
    src: "/svg/careers/career3.svg",
    title1: "Heightened",
    title2: "Visibility",
    desc: "Gain exposure to a network of UHNIs and philanthropists actively seeking credible and impactful organizations to support.",
  },
  {
    src: "/svg/about/aip-journey/three-I-s/inspire.svg",
    title1: "Partnership",
    title2: "Opportunities",
    desc: "Increased chances to collaborate with philanthropists on projects and initiatives aligned with your organization’s mission.",
  },
  {
    src: "/svg/give-section/giveSooner.svg",
    title1: "Initiative",
    title2: "Inclusion",
    desc: "Be featured in Sector Primers, Thematic Workshops, and Giving Plans that are shared with our philanthropist network, expanding your reach and impact.",
  },
  {
    src: "/svg/about/our-approach/perspectiveModel.svg",
    title1: "Enhanced",
    title2: "Credibility",
    desc: "Benefit from the trust and credibility that comes with being referred by our stakeholders and assessed through our rigorous criteria.",
  },
  {
    src: "/svg/about/our-approach/purposeModel.svg",
    title1: "Increased",
    title2: "Access",
    desc: "Participate in AIP’s exclusive networking and convening events, where you can share your experiences and insights with philanthropists and peers.",
  },
  {
    src: "/svg/about/aip-journey/three-I-s/inform.svg",
    title1: "Support",
    title2: "System",
    desc: "Engage with philanthropists interested in long-term partnerships that contribute to your organization’s sustainability and scalability.",
  },
];

const AipAndNpo = () => {
  return (
    <div className="~pt-[5rem]/[6.688rem] pb-[5rem] container mx-auto">
      {/* <h1 className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair text-center w-full">
        AIP <span className="font-playFairItalic text-textPurple">&</span> NPOs
      </h1> */}
      <TextStaggerAnimation
        text="AIP <color>&</color> NPOs"
        className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair text-center w-full"
      />
      <div className="~px-[1.25rem]/[18rem]  flex flex-col w-full items-center ~gap-[0.7rem]/[1rem] pt-[2.5rem] text-center">
        <p className="text-gray80 ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
        AIP&apos;s NPO repository is a curated platform for connecting philanthropists with credible NPOs, fostering informed giving and strategic philanthropy in India.  It serves as a dynamic tool for various AIP initiatives, featuring NPOs assessed through secondary data and in-depth interviews. However inclusion in this repository does not guarantee fundraising. Philanthropists are also encouraged to carry out their own due diligence.
        </p>

       
      </div>
      <div className="~pt-[2rem]/[5rem] flex flex-wrap justify-center gap-x-[4.563rem] ~gap-y-[1.25rem]/[3rem] !~px-[2.8rem]/[6.438rem] ">
        {npos.map((items, i) => (
          <CardAnimation index={i} delay={0.2} key={i}>
            <ImgTitleDescVer
              titleClassName="!text-h4 !leading-[2.6rem]"
              totalWidth="!w-[19rem]"
              imageWidth="!w-[11.875rem]"
              title={items.title1}
              title2={items.title2}
              desc={items.desc}
              src={items.src}
            />
          </CardAnimation>
        ))}
      </div>
    </div>
  );
};

export default AipAndNpo;
