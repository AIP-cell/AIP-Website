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
// const npos=[
//   {
//     src:"/svg/careers/career3.svg",
//     title:"Heightened Visibility",
//     desc:"Gain exposure to a network of UHNIs and philanthropists actively seeking credible and impactful organizations to support."
//   },
//   {
//     src:"/svg/about/aip-journey/three-I-s/inspire.svg",
//     title:"Partnership Opportunities",
//     desc:"Increased chances to collaborate with philanthropists on projects and initiatives aligned with your organization’s mission."
//   },
//   {
//     src:"/svg/about/aip-journey/three-I-s/inform.svg",
//     title:"",
//     desc:""
//   },
//   {
//     src:"/svg/about/our-approach/purposeModel.svg",
//     title:"",
//     desc:""
//   },
// ]
const AipAndNpo = () => {
  return (
    <div className="tw-pt-[6.688rem] tw-pb-[5rem] container tw-mx-auto">
      <h1 className="tw-text-h2 tw-leading-[3.3rem] tw-font-playFair tw-text-center tw-w-full">
        AIP <span className="tw-font-playFairItalic tw-text-textPurple">&</span>{" "}
        NPOs
      </h1>
      <div className="tw-px-[14.375rem] tw-flex tw-flex-col tw-w-full tw-items-center tw-gap-[1rem] tw-pt-[2.5rem] tw-text-center">
        <p className="tw-text-gray80 tw-leading-[1.4rem]">
          At AIP, we recognized the need for a comprehensive and credible
          repository that could serve as a bridge between philanthropists and
          NPOs. Our NPO repository is meticulously curated to address this gap,
          providing our network members with a trusted resource that showcases
          organizations demonstrating leadership, strategy, impact,
          transparency, scale, and sustainability. By doing so, we not only
          facilitate informed giving decisions but also enhance the overall
          effectiveness and impact of philanthropy in India
        </p>

        <p className="tw-text-gray80 tw-leading-[1.4rem]">
          Our repository is more than just a database—it is a dynamic tool that
          feeds into various facets of our work, including Giving Plans, Sector
          Primers, Thematic Workshops, and Field Visits. The NPOs featured in
          our repository are carefully assessed through secondary data and
          in-depth interviews with their founders and senior management,
          ensuring that they meet the high standards expected by our
          philanthropist network. This repository is not about due diligence;
          it’s about building meaningful connections between philanthropists and
          NPOs, fostering collaboration, and driving India’s transformation
          through strategic philanthropy.
        </p>
      </div>
      <div className="tw-pt-[5rem] tw-flex tw-flex-wrap tw-gap-x-[4.563rem] tw-gap-y-[3rem] !tw-px-[6.438rem] tw-ju">
        {npos.map((items, i) => (
          <ImgTitleDescVer
            titleClassName="!tw-text-h4 !tw-leading-[2.6rem]"
            totalWidth="!tw-w-[19rem]"
            imageWidth="!tw-w-[11.875rem]"
            key={i}
            title={items.title1}
            title2={items.title2}
            desc={items.desc}
            src={items.src}
          />
        ))}
      </div>
    </div>
  );
};

export default AipAndNpo;
