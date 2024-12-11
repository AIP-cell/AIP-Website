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
    <div className="w-full relative">
      <Image
        src={Bg}
        alt="give-section-Bg"
        className="absolute ~/md:~bottom-[15rem]/[10rem] top-auto lg:bottom-auto lg:top-[-11rem] right-0 ~w-[7.842rem]/[13.125rem] ~h-[29.87rem]/[50rem] "
      />
      <div className="container mx-auto  ~pt-[3.2rem]/[3.5rem] ~px-[2.8rem]/[7rem] relative">
        <div className=" flex flex-col lg:flex-row justify-center xl:justify-normal ~gap-[1.25rem]/[3rem]">
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
