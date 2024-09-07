import Image from "next/image";
import React from "react";
import FooterBg from "../../public/svg/footer/footerBg.svg";
import Logo from "@public/svg/footer/footerLogo.svg";
import X from "@public/svg/footer/x.svg";
import In from "@public/svg/footer/in.svg";
import Youtube from "@public/svg/footer/youtube.svg";
// import FooterFish from "../../public/svg/footer/fish/footerFish.svg";
import Wave from "react-wavify";

import Link from "next/link";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import FooterFishes from "./FooterFishes";
const footerLinks = [
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Fact Sheet",
    link: "",
  },
  {
    name: "Social Media",
    link: "",
  },
  {
    name: "Learning Circle",
    link: "",
  },
  {
    name: "T & C",
    link: "",
  },
  {
    name: "Copyright",
    link: "",
  },
];
const Footer = () => {
  return (
    <div className="">
      <div className="tw-relative tw-h-[31rem] tw-w-full">
        {/* <div className="tw-absolute   "> */}
        {/* <Image src={FooterBg} alt="" fill className="tw-inset-x-0 tw-object-cover" /> */}
        <Wave
          fill="url(#footerGradient)"
          paused={false}
          className="tw-inset-0 tw-object-cover tw-absolute "
          options={{
            amplitude: 60,
            speed: 0.1,
            points: 2,
          }}
        >
          <linearGradient id="footerGradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#91298C" />
            <stop offset="90%" stopColor="#224193" />
          </linearGradient>
        </Wave>
        <FooterFishes/>
        {/* </div> */}
        <div className="tw-flex container tw-mx-auto tw-relative">
          <div className="tw-pt-[12.5rem] tw-flex tw-flex-wrap">
            <div className="tw-basis-1/4 ">
              <div className="tw-relative tw-h-[3.6rem] tw-w-[6rem]">
                <Image src={Logo} alt="" fill />
              </div>
            </div>
            <div className="tw-basis-3/4 tw-flex tw-items-center tw-justify-end">
              <div className=" tw-flex tw-gap-[1.75rem]">
                {footerLinks.map((items, i) => (
                  <ButtonAnimation key={i}>
                    <Link
                      key={i}
                      href={items.link}
                      className="tw-text-h9Copy5 tw-leading-[19.6px] tw-font-inter tw-text-white"
                    >
                      {items.name}
                    </Link>
                  </ButtonAnimation>
                ))}
              </div>
            </div>
            <div className="tw-basis-1/4 ">
              <h3 className="tw-pt-[2rem] tw-font-playFair tw-leading-[22.4px] tw-text-white">
                Accelerate Indian Philanthropy
              </h3>
              <p className="tw-pt-[0.75rem] tw-text-h9Copy5 tw-font-inter tw-text-white/60">
                Ananda, 242 Okhla Industrial Estate
              </p>
              <p className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60">
                Phase III, New Delhi, India 110020
              </p>
              <ButtonAnimation>
                <Link
                  href="mailto:info@indianphilanthropy.org"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  info@indianphilanthropy.org
                </Link>
              </ButtonAnimation>
              <div className="tw-flex tw-gap-[1.25rem] tw-pt-[2rem]">
                <ButtonAnimation className="tw-relative tw-size-[2.5rem]">
                  <Image src={X} alt="" />
                </ButtonAnimation>
                <ButtonAnimation className="tw-relative tw-size-[2.5rem]">
                  <Image src={In} alt="" />
                </ButtonAnimation>
                <ButtonAnimation className="tw-relative tw-size-[2.5rem]">
                  <Image src={Youtube} alt="" />
                </ButtonAnimation>
              </div>
            </div>
            <div className="tw-basis-3/4 tw-flex tw-w-full tw-justify-end tw-pt-[2rem]">
              <div className="~tw-w-[21rem]/[25rem] tw-h-[2.8rem] tw-bg-white tw-flex tw-rounded-full  tw-relative   tw-rounded-br-full   tw-items-center tw-justify-end">
                <input
                  type="text"
                  placeholder=" Sign up for our newsletter"
                  className="tw-outline-none tw-rounded-full tw-text-footerGray tw-w-[75%]  tw-bg-[#5a4a9a] tw-absolute tw-top-0 tw-left-0 tw-z-[100] tw-flex tw-items-center tw-border-2 tw-border-footerGray tw-pl-[1.5rem]   tw-h-full "
                ></input>
                <button className="tw-absolute tw-w-[25%] tw-pr-[2.56rem] tw-z-[50] tw-pl-[4rem] tw-text-textPurple tw-flex tw-items-center tw-justify-end tw-bg-white tw-h-full tw-rounded-full tw-text-right tw-text-h9Copy5 tw-font-inter">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
