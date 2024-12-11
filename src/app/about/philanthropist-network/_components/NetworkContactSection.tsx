import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import BgButton from "@/components/buttons/BgButton";
import TitleDescCard from "@/components/cards/TitleDescCard";
import MailSvg from "@/components/svg/MailSvg";
import Link from "next/link";
import React from "react";

const itemsArray = [
  {
    title1: "Build & Shape Your ",
    title2: "Philanthropic Journey ",
    desc: "Turn your philanthropic intent into a lasting legacy with AIP’s guidance and support.",
  },
  {
    title1: "Engage With Like-Minded",
    title2: "Peers & Experts",
    desc: "Access valuable knowledge resources to deepen your perspective and align your giving with purpose.",
  },
  {
    title1: "Access Insightful ",
    title2: "Knowledge Resources",
    desc: "Collaborate with like-minded philanthropists through AIP’s expansive network to amplify your impact.",
  },
  {
    title1: "Enable & ",
    title2: "Evangelize Good",
    desc: "Share and inspire with powerful philanthropic stories that resonate and drive change.",
  },
];
const NetworkContactSection = () => {
  return (
    <div className="flex flex-col items-center pt-[6rem] pb-[1rem] container mx-auto">
      <h2 className="~text-h4/h2 text-center ~leading-[2.6rem]/[3.3rem] text-gray80 font-playFair">
        Reason to
        <span className="text-textPurple font-playFairItalic">
          &nbsp;Connect
        </span>
      </h2>
      <p className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 ~pt-[2rem]/[2.5rem] ~px-[2.813rem]/[15.813rem] text-center">
        We believe in dedicating to an independent, sector agnostic, and deeply
        focused approach, personally catering to how one defines their
        philanthropy and here they wish to take it to. Valuing long-lasting
        relationships built on a strong legacy and an inspiring network.
      </p>
      <div className="~pt-[2rem]/[2.5rem] flex justify-center ">
        <div className="grid  md:grid-cols-2 ~gap-x-[3rem]/[5rem] ~gap-y-[1.75rem]/[3.5rem]">
          {itemsArray.map((item, i) => (
            <TitleDescCard
              key={i}
              title1={item.title1}
              title2={item.title2}
              desc={item.desc}
              topClassName="~w-[18.438rem]/[29rem]"
            />
          ))}
        </div>
      </div>
      <div className="~pt-[2rem]/[3rem]">
        <ButtonAnimation className="text-white hover:text-darkPurple bg-darkPurple hover:bg-white rounded-full  py-[0.75rem] px-[1.75rem]">
          <Link
            href=""
            className=" flex items-center text-h9Copy5 leading-[1.225rem] gap-[0.5rem]"
          >
            <p className="">Contact Us</p>
            <MailSvg />
          </Link>
        </ButtonAnimation>
      </div>
    </div>
  );
};

export default NetworkContactSection;
