import CaseStudy from "@/components/cards/CaseStudy";
import React from "react";

const caseStudyData = [
  {
    title: "Grant Making",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec lacus vitae urna tincidunt aliquet. Nullam scelerisque urna ut lacus accumsan, ac porttitor nisi tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum imperdiet, velit id euismod vehicula, nulla elit malesuada libero, in posuere est justo id lorem. Aliquam erat volutpat. Sed pharetra augue ut felis fermentum, nec aliquam risus tincidunt. Donec bibendum sapien eget mauris lacinia, ut pellentesque justo luctus. Duis vehicula odio in risus sagittis, sit amet viverra mauris facilisis.",
    image: "/images/case-studies/caseStudy1.png",
  },
  {
    title: "Grant Making",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec lacus vitae urna tincidunt aliquet. Nullam scelerisque urna ut lacus accumsan, ac porttitor nisi tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum imperdiet, velit id euismod vehicula, nulla elit malesuada libero, in posuere est justo id lorem. Aliquam erat volutpat. Sed pharetra augue ut felis fermentum, nec aliquam risus tincidunt. Donec bibendum sapien eget mauris lacinia, ut pellentesque justo luctus. Duis vehicula odio in risus sagittis, sit amet viverra mauris facilisis.",
    image: "/images/case-studies/caseStudy1.png",
  },
  {
    title: "Grant Making",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec lacus vitae urna tincidunt aliquet. Nullam scelerisque urna ut lacus accumsan, ac porttitor nisi tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum imperdiet, velit id euismod vehicula, nulla elit malesuada libero, in posuere est justo id lorem. Aliquam erat volutpat. Sed pharetra augue ut felis fermentum, nec aliquam risus tincidunt. Donec bibendum sapien eget mauris lacinia, ut pellentesque justo luctus. Duis vehicula odio in risus sagittis, sit amet viverra mauris facilisis.",
    image: "/images/case-studies/caseStudy1.png",
  },
];
const CaseStudies = () => {
  return (
    <div>
      <div className="container tw-mx-auto tw-pt-[12.5rem]">
        <h2 className="tw-text-center tw-text-h2 tw-text-darkBrown tw-font-playFair">
          Case <i className="tw-text-textPurple"> Studies</i>
        </h2>
        <div className="tw-pt-[6.56rem] tw-flex tw-flex-col tw-gap-[5.5rem] tw-px-[7.8rem]">
          {caseStudyData.map((item, i) => (
            <CaseStudy key={i} index={i} title={item.title} desc={item.desc} image={item.image}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
