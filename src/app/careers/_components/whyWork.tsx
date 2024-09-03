import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import React from "react";
const works = [
  {
    src: "/svg/careers/career2.png",
    title: "Inclusive Diversity",
    desc: "Embracing diverse backgrounds and perspectives to create an inclusive and dynamic workplace.",
  },
  {
    src: "/svg/aboutPage/aip-journey/three-I-s/influence.svg",
    title: "Networking Opportunities",
    desc: "Offering ample opportunities for employees to build professional connections and collaborate across departments.",
  },
  {
    src: "/svg/aboutPage/aip-journey/three-I-s/inform.svg",
    title: "Innovative Environment",
    desc: "Fostering a culture of innovation where creativity and new ideas are encouraged and rewarded.",
  },
  {
    src: "/svg/careers/career3.png",
    title: "Career Development",
    desc: "Providing continuous learning and growth opportunities through training, mentorship, and career advancement programs.",
  },
];
const WhyWork = () => {
  return (
    <div className="">
      <div className="tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center">
        <p className="tw-text-h2 tw-text-center tw-text-gray80 tw-leading-[3.713rem] tw-font-playFair tw-tracking-[-.04rem] tw-pb-5">
          Why Work With
          <span className="tw-font-playFairItalic tw-text-textPurple">
            &nbsp;AIP?
          </span>
        </p>
        <div className="tw-font-inter tw-text-center tw-text-midGray tw-pb-20">
          <p >Philanthropy can impact India’s future.</p>
          <p >And you can be a part of creating that impact.</p>
        </div>
      </div>
      <div className="container tw-mx-auto tw-px-[8.438rem] tw-grid tw-grid-cols-2 tw-gap-20 tw-relative">
        {works.map((item, i) => (
          <ImgTitleDescVer
            key={i}
            src={item.src}
            title={item.title}
            titleClassName=" !tw-text-gray80 tw-text-h4 tw-leading-[2.6rem]"
            descClassName="tw-px-[0.5rem] tw-leading-[1.4rem]"
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyWork;
