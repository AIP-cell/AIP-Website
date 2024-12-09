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
import CustomHeaderSelect from "@/components/custom/CustomHeaderSelect";
import CustomAccordionSelect from "@/components/custom/CustomAccordionSelect";
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
const footerData = [
  {
    label: "About Us",
    id: "about",
    options: [
      { option: "The AIP Journey", link: "/about/aip-journey" },
      { option: "Our Approach", link: "/about/our-approach" },
      { option: "AIP Impact", link: "/about/aip-impact" },
      { option: "Giving Roadmap", link: "/about/giving-roadmap" },
      { option: "Financial Reports", link: "/about/financials" },
      { option: "AIP Founder Network", link: "/about/aip-founder-network" },
      {
        option: "Philanthropist Network",
        link: "/about/philanthropist-network",
      },
    ],
  },
  {
    id: "people-of-aip/founders",
    label: "people-of-aip",
    options: [
      { option: "core-founders", link: "/people-of-aip/core-founders" },
      { option: "core-founders", link: "/people-of-aip/core-founders" },
    ],
  },
  {
    label: "Our Work",
    id: "our-work",
    options: [
      { option: "What We Do", link: "/our-work/what-we-do" },
      { option: "NPO Registry", link: "/our-work/npo" },
      { option: "Experts", link: "/our-work/experts" },
      {
        option: "Projects and Programs",
        link: "/our-work/projects-and-programs",
      },
      {
        option: "Collaborations",
        link: "/our-work/collaborations",
      },
    ],
  },
  {
    label: "Resource Center",
    id: "resource-center",
    options: [
      { option: "AIP Resources", link: "/resource-center/aip-resources" },
      {
        option: "Curated Resources",
        link: "/resource-center/curated-resources",
      },
    ],
  },
];
const Footer = () => {
  return (
    <div className="">
      <div className="tw-relative tw-w-full tw-overflow-hidden">
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
        <FooterFishes />
        {/* </div> */}
        <div className="tw-flex container tw-mx-auto tw-relative tw-w-full ~tw-px-5/[7.813rem]">
          <div className="~tw-pt-[6.5rem]/[8.8rem] ~tw-pb-[10.8rem]/[1.25rem] tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-5 md:tw-grid tw-w-full">
            <div className="tw-w-full md:tw-col-span-2 ">
              <div className="tw-flex md:tw-flex-col ~tw-gap-[2.25rem]/0 ">
                <div className=" tw-shrink-0 tw-relative tw-h-[3.6rem] tw-w-[6rem]">
                  <Image src={Logo} alt="" fill />
                </div>
                <p className=" ~tw-text-h10Copy6/h9Copy5 tw-font-inter tw-text-white ~tw-pt-0/8 ~tw-pr-0/[6.625rem]">
                  Accelerate Indian Philanthropy is a peer network set up by
                  philanthropists for philanthropists to support their giving
                  efforts
                </p>
              </div>
              <div className="tw-flex lg:tw-hidden tw-flex-col tw-w-full tw-pt-[1rem]">
                <CustomAccordionSelect ArrayData={footerData} />
                <div className="tw-flex tw-text-h9Copy5 tw-leading-[1.225rem] tw-flex-wrap tw-gap-[1rem] tw-text-white tw-pt-[1rem]">
                  <p>Careers</p>|<p>FAQs</p>|<p>Foundation Fact Sheet</p>|
                  <p>Join our learning circle</p>
                </div>
                <div className=" md:tw-basis-3/4 tw-flex tw-w-full md:tw-justify-start tw-pt-[2.5rem] max-md:tw-order-2">
                  <div className="tw-w-full md:~tw-w-[21rem]/[25rem] tw-h-[2.8rem] tw-bg-white tw-flex tw-rounded-full tw-relative tw-rounded-br-full   tw-items-center tw-justify-end">
                    <input
                      type="text"
                      placeholder=" Sign up for our newsletter"
                      className="tw-outline-none tw-rounded-full tw-text-footerGray tw-w-[75%]  tw-bg-[#5a4a9a] tw-absolute tw-top-0 tw-left-0 tw-z-[100] tw-flex tw-items-center tw-border-2 tw-border-footerGray tw-pl-[1.5rem] tw-text-h9Copy5  tw-h-full "
                    ></input>
                    <button className="tw-absolute tw-w-[25%] tw-pr-[2.56rem] tw-z-[50] ~tw-pl-[3rem]/[4rem] tw-text-textPurple tw-flex tw-items-center tw-justify-center md:tw-justify-end tw-bg-white tw-h-full tw-rounded-full tw-text-right ~tw-text-h10Copy6/h9Copy5 tw-font-inter">
                      Join
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="~tw-pt-[1rem]/[1.75rem] tw-font-playFair tw-leading-[1.4rem] tw-text-white ">
                Accelerate Indian Philanthropy
              </h3>
              <p className="tw-pt-[0.75rem] ~tw-text-h10Copy6/h9Copy5 tw-font-inter tw-text-white/60">
                Ananda, 242 Okhla Industrial Estate
              </p>
              <p className=" ~tw-text-h10Copy6/h9Copy5 tw-font-inter tw-text-white/60">
                Phase III, New Delhi, India 110020
              </p>
              <ButtonAnimation>
                <Link
                  href="mailto:info@indianphilanthropy.org"
                  className=" ~tw-text-h10Copy6/h9Copy5 tw-font-inter tw-text-white/60"
                >
                  info@indianphilanthropy.org
                </Link>
              </ButtonAnimation>
              <p className="~tw-pt-[1rem]/[1.75rem] ~tw-text-h10Copy6/h9Copy5 tw-font-inter tw-text-white/60">
                <span className="tw-text-white"> CIN:</span>{" "}
                U85300DL202INPL384351
              </p>
              <div className="tw-flex tw-gap-[1.25rem] ~tw-pt-[1rem]/[2rem]">
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
              <div className="tw-hidden  lg:tw-basis-3/4 lg:tw-flex tw-w-full lg:tw-justify-start ~tw-pt-10/[2rem] max-md:tw-order-2">
                <div className="tw-w-full md:~tw-w-[21rem]/[25rem] tw-h-[2.8rem] tw-bg-white tw-flex tw-rounded-full tw-relative tw-rounded-br-full   tw-items-center tw-justify-end">
                  <input
                    type="text"
                    placeholder=" Sign up for our newsletter"
                    className="tw-outline-none tw-rounded-full tw-text-footerGray tw-w-[75%]  tw-bg-[#5a4a9a] tw-absolute tw-top-0 tw-left-0 tw-z-[100] tw-flex tw-items-center tw-border-2 tw-border-footerGray tw-pl-[1.5rem] tw-text-h9Copy5  tw-h-full "
                  ></input>
                  <button className="tw-absolute tw-w-[25%] tw-pr-[2.56rem] tw-z-[50] ~tw-pl-[3rem]/[4rem] tw-text-textPurple tw-flex tw-items-center tw-justify-center md:tw-justify-end tw-bg-white tw-h-full tw-rounded-full tw-text-right tw-text-h9Copy5 tw-font-inter">
                    Join
                  </button>
                </div>
              </div>
              <div className=" tw-text-h10Copy6 ~tw-pt-[1rem]/[2.875rem] tw-font-inter tw-text-white/60">
                <span className="tw-pr-2">
                  ©2024-25 Accelerate Indian Philanthropy
                </span>
                <Link href={""} className="tw-border-s tw-bottom-1 tw-px-2">
                  T&C
                </Link>
                <Link href={""} className="tw-border-s tw-bottom-1 tw-ps-2">
                  Privacy Policy
                </Link>
                <p className="tw-text-white/60">
                  Designed with ❤ by Sane Difference
                </p>
              </div>
            </div>
            <div className="tw-hidden lg:tw-block">
              <p className=" tw-pt-[0.75rem] tw-text-h9Copy5 tw-font-inter tw-font-bold tw-text-white">
                About Us
              </p>
              <div className="tw-flex tw-flex-col tw-gap-4 ~tw-pt-[0.75rem]/[1rem]">
                <Link
                  href="/about/aip-journey"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>The AIP Journey</ButtonAnimation>
                </Link>
                <Link
                  href="/about/our-approach"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>Our Approach</ButtonAnimation>
                </Link>
                <Link
                  href="/about/aip-impact"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation> AIP Impact</ButtonAnimation>
                </Link>
                <Link
                  href="/about/giving-roadmap"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>Giving Roadmap</ButtonAnimation>
                </Link>
                <Link
                  href="/about/financials"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>Financial Reports</ButtonAnimation>
                </Link>
                <Link
                  href="/about/aip-founder-network"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation> AIP Founder Network</ButtonAnimation>
                </Link>
                <Link
                  href="/about/philanthropist-network"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>Philanthropist Network</ButtonAnimation>
                </Link>
              </div>
            </div>
            <div className="tw-hidden lg:tw-block">
              <p className="tw-pt-[0.75rem] tw-text-h9Copy5 tw-font-inter tw-font-bold tw-text-white">
                People of AIP
              </p>
              <div className="tw-flex tw-flex-col tw-gap-4 ~tw-pt-[0.75rem]/[1rem]">
                <Link
                  href="/people-of-aip/core-founders"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>Core-Founders</ButtonAnimation>
                </Link>
                <Link
                  href="/people-of-aip/founders"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>Founders</ButtonAnimation>
                </Link>
                <Link
                  href="/people-of-aip/our-advisory-board/slug"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>Advisory Board</ButtonAnimation>
                </Link>
                <Link
                  href="/people-of-aip/team-AIP"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>Team AIP</ButtonAnimation>
                </Link>
                <Link
                  href="/people-of-aip/experts"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>Experts</ButtonAnimation>
                </Link>
              </div>

              <p className="tw-pt-[2.25rem] tw-text-h9Copy5 tw-font-inter tw-font-bold tw-text-white">
                Our Work
              </p>
              <div className="tw-flex tw-flex-col tw-gap-4 ~tw-pt-[0.75rem]/[1rem]">
                <Link
                  href="/our-work/what-we-do"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>What We Do</ButtonAnimation>
                </Link>
                <Link
                  href="/our-work/npo"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation> NPO Registry</ButtonAnimation>
                </Link>
                <Link
                  href="/our-work/projects-and-programs"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>Projects and Programs</ButtonAnimation>
                </Link>
                <Link
                  href="/our-work/collaborations"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>Collaborations</ButtonAnimation>
                </Link>
              </div>
            </div>
            <div className="tw-hidden lg:tw-block">
              <p className="tw-pt-[0.75rem] tw-text-h9Copy5 tw-font-inter tw-font-bold tw-text-white">
                Resource Center
              </p>
              <div className="tw-flex tw-flex-col tw-gap-4 ~tw-pt-[0.75rem]/[1rem]">
                <Link
                  href="/resource-center/aip-resources"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>AIP Resources</ButtonAnimation>
                </Link>
                <Link
                  href="/resource-center/curated-resources"
                  className=" tw-text-h9Copy5 tw-font-inter tw-text-white/60"
                >
                  <ButtonAnimation>Curated Resources</ButtonAnimation>
                </Link>
              </div>

              <div className="tw-pt-[2.25rem] tw-text-h9Copy5 tw-font-inter tw-font-bold tw-text-white">
                <Link href="/career">
                  <ButtonAnimation>Career</ButtonAnimation>
                </Link>
              </div>
              <div className="tw-pt-[2.25rem] tw-text-h9Copy5 tw-font-inter tw-font-bold tw-text-white">
                <Link href="/contact">
                  <ButtonAnimation>Contact</ButtonAnimation>
                </Link>
              </div>
              <div className="tw-pt-[2.25rem] tw-text-h9Copy5 tw-font-inter tw-font-bold tw-text-white">
                <Link href="/faq">
                  <ButtonAnimation>FAQs</ButtonAnimation>
                </Link>
              </div>
              <div className="tw-pt-[2.25rem] tw-text-h9Copy5 tw-font-inter tw-font-bold tw-text-white">
                <Link href="/about/aip-impact/foundation-fact-sheet">
                  <ButtonAnimation>Foundation Fact Sheet</ButtonAnimation>
                </Link>
              </div>
              <div className="tw-pt-[2.25rem] tw-text-h9Copy5 tw-font-inter tw-font-bold tw-text-white">
                <Link href="/join-our-learning-circle">
                  <ButtonAnimation>Join our learning circle</ButtonAnimation>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
