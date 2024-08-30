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
const whyWork = () => {
  return (
    <div className="tw-grid tw-grid-cols-2 tw-gap-20 tw-relative">
        {works.map((item, i) => (
          <ImgTitleDescVer
            key={i}
            src={item.src}
            title={item.title}
            titleClassName="tw-italic !tw-text-gray80"
            descClassName="tw-px-[0.5rem]"
            desc={item.desc}
          />
        ))}
    </div>
  );
};

export default whyWork;
