import CardAnimation from "@/components/animations/CardAnimation";
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
    <div className="pt-[1rem] container mx-auto">
      <div className="flex flex-col w-full justify-center items-center">
        <p className="~text-h4/h2 text-center text-gray80 ~leading-[2.6rem]/[3.713rem] font-playFair tracking-[-.04rem] ~pb-[1rem]/5">
          Why Work With
          <span className="font-playFairItalic text-textPurple">
            &nbsp;AIP?
          </span>
        </p>
        <p className="font-inter ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-center text-midGray ~pb-[2.5rem]/20 ~px-[4.1rem]/[20.875rem]">
          Join AIP, where careers run deep with purpose, carving pathways for
          social impact and carrying the spirit of philanthropy forward
        </p>
      </div>
      <div className=" ~px-[2.8rem]/[8.438rem] grid md:grid-cols-2 ~gap-x-[3rem]/[5rem] ~gap-y-[1.25rem]/[3rem] relative">
        {works.map((item, i) => (
          <CardAnimation index={i} delay={0.2} key={i}>
            <ImgTitleDescVer
              imageWidth="!~w-[10rem]/[11.9rem]"
              src={item.src}
              title={item.title}
              titleClassName=" !text-gray80 !text-h4 leading-[2.6rem]"
              descClassName="px-[0.5rem] leading-[1.4rem]"
              desc={item.desc}
            />
          </CardAnimation>
        ))}
      </div>
    </div>
  );
};

export default WhyWorkWithAip;
