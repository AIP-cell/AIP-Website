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
    <div className="tw-flex tw-flex-col tw-items-center tw-pt-[6rem] tw-pb-[1rem] container tw-mx-auto">
      <h2 className="tw-text-h2 tw-text-center tw-text-gray80 tw-font-playFair">
        Reason to
        <span className="tw-text-textPurple tw-font-playFairItalic">
          &nbsp;Connect
        </span>
      </h2>
      <p className="tw-leading-[1.4rem] tw-pt-[2.5rem] tw-px-[15.813rem] tw-text-center">
        We believe in dedicating to an independent, sector agnostic, and deeply
        focused approach, personally catering to how one defines their
        philanthropy and here they wish to take it to. Valuing long-lasting
        relationships built on a strong legacy and an inspiring network.
      </p>
      <div className="tw-pt-[2.5rem] tw-flex tw-justify-center ">
        <div className="tw-grid tw-grid-cols-2 tw-gap-x-[5rem] tw-gap-y-[3.5rem]">
          {itemsArray.map((item, i) => (
            <TitleDescCard
              key={i}
              title1={item.title1}
              title2={item.title2}
              desc={item.desc}
              topClassName="tw-w-[29rem]"
            />
          ))}
        </div>
      </div>
      <div className="tw-pt-[3rem]">
        <ButtonAnimation className="tw-text-white hover:tw-text-darkPurple tw-bg-darkPurple hover:tw-bg-white tw-rounded-full  tw-py-[0.75rem] tw-px-[1.75rem]">
          <Link
            href=""
            className=" tw-flex tw-items-center tw-text-h9Copy5 tw-gap-[0.5rem]"
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
