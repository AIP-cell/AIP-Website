import CaseStudy from "@/components/cards/CaseStudy";
import CurveBg from "@public/svg/about/aip-impact/caseStudyPeachCurve.svg";
import Image from "next/image";

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
type Props = {
  bottomCaseStudyCurveSvg: string;
};
const CaseStudies = ({ bottomCaseStudyCurveSvg }: Props) => {
  return (
    <div className="tw-relative tw-w-full">
        <Image
          src={CurveBg}
          alt=""
          className="tw-hidden lg:tw-flex tw-absolute tw-items-center tw-h-full tw-left-0"
        />
        <Image
          src={bottomCaseStudyCurveSvg}
          alt=""
          className="tw-hidden lg:tw-block tw-absolute  tw-bottom-[-10.938rem]  tw-right-0"
        />
      <div className=" tw-relative container tw-mx-auto ~tw-pt-[4.702rem]/[12.5rem]">
        <h2 className="tw-text-center tw-text-h2 tw-text-darkBrown tw-font-playFair">
          Case{" "}
          <span className="tw-text-textPurple tw-font-playFairItalic">
            Studies
          </span>
        </h2>
        <div className="~tw-pt-10/[6.56rem] tw-flex tw-flex-col ~tw-gap-[3.5rem]/[5.5rem] ~tw-px-[1.25rem]/[7.8rem]">
          {caseStudyData.map((item, i) => (
            <CaseStudy
              key={i}
              index={i}
              title={item.title}
              desc={item.desc}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
