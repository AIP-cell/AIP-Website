import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import Image from "next/image";
import Bg from "../../../public/svg/give-section/giveBg.svg";
import React from "react";
const giveData = [
  {
    src: "/svg/give-section/giveMore.svg",
    title: "Give",
    span: "More",
    desc: "As the wealth of Indian UHNIs continues to grow, so does their capacity to amplify their impact. By increasing the quantum of their giving, philanthropists can unlock greater possibilities for transformative change in society.",
  },
  {
    src: "/svg/give-section/giveSooner.svg",
    title: "Give",
    span: "Sooner",
    desc: "With an increasing number of younger Indians achieving affluence earlier in life, there is an unparalleled opportunity to start giving in the prime of their years. Early philanthropy allows for sustained contributions, fostering long-term impact over a lifetime of giving.",
  },
  {
    src: "/svg/give-section/giveBetter.svg",
    title: "Give",
    span: "Better",
    desc: "Strategic philanthropy has the potential to solve some of the toughest challenges of our time. By being flexible, innovative, and bold, Indian philanthropists can fuel systems change, drive breakthrough innovations, and contribute to India’s social and economic transformation.",
  },
];
const GiveSection = () => {
  return (
    <div className="tw-w-full tw-relative">
      <Image
        src={Bg}
        alt="give-section-Bg"
        className="tw-absolute ~/md:~tw-bottom-[15rem]/[10rem] tw-top-auto lg:tw-bottom-auto lg:tw-top-[-11rem] tw-right-0 ~tw-w-[7.842rem]/[13.125rem] ~tw-h-[29.87rem]/[50rem] "
      />
      <div className="container tw-mx-auto  ~tw-pt-[6.519rem]/[3.5rem] ~tw-px-[2.8rem]/[7.8rem] tw-relative">
        <div className=" tw-flex tw-flex-col lg:tw-flex-row tw-justify-center xl:tw-justify-normal ~tw-gap-[1.25rem]/[4.56rem]">
          {giveData.map((item, i) => (
            <ImgTitleDescVer
              key={i}
              src={item.src}
              title={item.title}
              span={item.span}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiveSection;
