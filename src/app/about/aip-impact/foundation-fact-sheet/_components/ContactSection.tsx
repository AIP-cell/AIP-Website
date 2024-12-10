import React from "react";
import { ButtonAnimation } from "../../../../../components/animations/ButtonAnimation";
import MailSvg from "../../../../../components/svg/MailSvg";
import BgButton from "../../../../../components/buttons/BgButton";
import TitleDescCard from "../../../../../components/cards/TitleDescCard";

const itemsArray = [
  {
    title1: "Guidance",
    desc: "Turn your philanthropic intent into a lasting legacy with AIP’s guidance and support.",
  },
  {
    title1: "Resources",
    desc: "Access valuable knowledge resources to deepen your perspective and align your giving with purpose.",
  },
  {
    title1: "Network",
    desc: "Collaborate with like-minded philanthropists through AIP’s expansive network to amplify your impact.",
  },
  {
    title1: "Impact",
    desc: "Share and inspire with powerful philanthropic stories that resonate and drive change.",
  },
];
const ContactSection = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center ~tw-pt-[10rem]/[12.5rem] ~tw-pb-[5rem]/[7.5rem]">
      <h2 className="~tw-text-h4/h2 ~tw-leading-[2.6rem]/[3.3rem] tw-text-center tw-text-gray80 tw-font-playFair">
        Reason to
        <span className="tw-text-textPurple tw-font-playFairItalic">
          &nbsp;Connect
        </span>
      </h2>
      <div className="~tw-pt-[3rem]/[5rem] tw-flex tw-justify-center ~tw-px-[1.25rem]/[19rem]">
        <div className="tw-grid md:tw-grid-cols-2 ~tw-gap-x-[3rem]/[5rem] ~tw-gap-y-[1.75rem]/[2.5rem]">
          {itemsArray.map((item, i) => (
            <TitleDescCard
              key={i}
              title1={item.title1}
              desc={item.desc}
              topClassName="  tw-w-[18.438rem] "
            />
          ))}
        </div>
      </div>
      <div className="~tw-pt-[2rem]/[5rem]">
        <BgButton
          text="Join The Flow"
          className="tw-text-h9Copy5 tw-leading-[1.225rem] tw-px-[1.75rem] tw-py-[0.75rem]"
        />
      </div>
    </div>
  );
};

export default ContactSection;
