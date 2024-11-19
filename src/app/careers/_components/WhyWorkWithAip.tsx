import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import React from "react";
const works = [
  {
    src: "/svg/careers/career2.svg",
    title: "Learning & Growth",
    desc: "Opportunities to develop your skills, take on challenges, and advance your career goals along with professional development. A resourceful and enterprising environment with a growth mindset.",
  },
  {
    src: "/svg/about/aip-journey/three-I-s/influence.svg",
    title: "Company Culture",
    desc: "Open, inclusive, diverse and collaborative, the work environment inspires to explore and expand one’s own skills, while achieving goals through teamwork. The structure enables ideas and feedback openly shared with the leadership.",
  },
  {
    src: "/svg/about/aip-journey/three-I-s/inform.svg",
    title: "Enabling Good",
    desc: "Your work makes a difference and leads to sustainable change. Working with Indian and diasporic philanthropists and ecosystem partners.",
  },
  {
    src: "/svg/careers/career3.svg",
    title: "Entrepreneurial Environment",
    desc: "Working with prominent people and on projects like knowledge products, panels, convenings, workshops, etc. there are valuable opportunities to lead a wide spectrum of portfolio resources from conception to completion.",
  },
];
const WhyWorkWithAip = () => {
  return (
    <div className="tw-pt-[1rem] container tw-mx-auto">
      <div className="tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center">
        <p className="tw-text-h2 tw-text-center tw-text-gray80 tw-leading-[3.713rem] tw-font-playFair tw-tracking-[-.04rem] tw-pb-5">
          Why Work With
          <span className="tw-font-playFairItalic tw-text-textPurple">
            &nbsp;AIP?
          </span>
        </p>
        <p className="tw-font-inter tw-text-center tw-text-midGray tw-pb-20 tw-px-[20.875rem]">
          Join AIP, where careers run deep with purpose, carving pathways for
          social impact and carrying the spirit of philanthropy forward
        </p>
      </div>
      <div className=" ~tw-px-5/[8.438rem] tw-grid tw-grid-cols-2 tw-gap-x-[5rem] tw-gap-y-[3rem] tw-relative">
        {works.map((item, i) => (
          <ImgTitleDescVer
            key={i}
            imageWidth="!~tw-w-[10rem]/[11.9rem]"
            src={item.src}
            title={item.title}
            titleClassName=" !tw-text-gray80 !tw-text-h4 tw-leading-[2.6rem]"
            descClassName="tw-px-[0.5rem] tw-leading-[1.4rem]"
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyWorkWithAip;
