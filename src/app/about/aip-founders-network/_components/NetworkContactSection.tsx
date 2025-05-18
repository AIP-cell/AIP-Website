import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import TitleDescCard from "@/components/cards/TitleDescCard";
import MailSvg from "@/components/svg/MailSvg";
import Link from "next/link";
import React from "react";

const itemsArray = [
  {
    title1: "Build & Shape Your ",
    title2: "Philanthropic Journey ",
    desc: "Grow and build your philanthropic legacy and align it with your passion and purpose with our support.",
  },
  {
    title1: "Engage With Like-Minded",
    title2: "Peers & Experts",
    desc: "Connect and collaborate with fellow philanthropists through our wide network to gain perspectives and understanding",
  },
  {
    title1: "Access Insightful ",
    title2: "Knowledge Resources",
    desc: "Have access to valuable context setting resources curated by us for your customized understanding and philanthropic needs",
  },
  {
    title1: "Enable & ",
    title2: "Evangelize Good",
    desc: "Philanthropists are best at inspiring one another; sharing your stories and experiences sparks new ideas and inspiration",
  },
];
const NetworkContactSection = () => {
  return (
    <div className="flex flex-col items-center pt-[6rem] pb-[1rem] container mx-auto">
      <TextStaggerAnimation
        text="Reason to <color>Connect</color>"
        className="~text-h4/h2 text-center ~leading-[2.6rem]/[3.3rem] text-gray80 font-playFair"
      />
      <p className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 text-midGray ~pt-[2rem]/[2.5rem] ~px-[2.813rem]/[15.813rem] text-center">
        We believe in an independent, sector agnostic, and deeply focused
        approach. Valuing long-lasting relationships built on a strong legacy
        and an inspiring network.
      </p>
      <div className="~pt-[2rem]/[2.5rem] flex justify-center ">
        <div className="grid  md:grid-cols-2 ~gap-x-[3rem]/[5rem] ~gap-y-[1.75rem]/[3.5rem]">
          {itemsArray.map((item, i) => (
            <CardAnimation delay={0.1} key={i}>
              <TitleDescCard
                key={i}
                title1={item.title1}
                title2={item.title2}
                desc={item.desc}
                topClassName="~w-[18.438rem]/[29rem]"
              />
            </CardAnimation>
          ))}
        </div>
      </div>
      <div className="~pt-[2rem]/[3rem]">
        <ButtonAnimation className="text-white hover:text-darkPurple bg-darkPurple hover:bg-white rounded-full transition-all duration-500  py-[0.75rem] px-[1.75rem]">
          <Link
            href="/contact"
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
