import Image from "next/image";
import React from "react";
import Logo from "@public/svg/footer/footerLogo.svg";
import X from "@public/svg/footer/x.svg";
import In from "@public/svg/footer/in.svg";
import Youtube from "@public/svg/footer/youtube.svg";
import Wave from "react-wavify";
import Link from "next/link";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import FooterFishes from "./FooterFishes";
import CustomAccordionSelect from "@/components/custom/CustomAccordionSelect";

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
    label: "People of AIP",
    options: [
      { option: "Our Core Founders", link: "/people-of-aip/core-founder" },
      { option: "Founders", link: "/people-of-aip/founders" },
      {
        option: "Our Advisory Board",
        link: "/people-of-aip/advisory-board",
      },
      { option: "Team AIP", link: "/people-of-aip/team-aip" },
      // { option: "Experts", link: "/people-of-aip/experts" },
    ],
  },
  {
    label: "Our Work",
    id: "our-work",
    options: [
      { option: "What We Do", link: "/our-work/what-we-do" },
      { option: "NPO Registry", link: "/our-work/npo" },
      { option: "Experts", link: "/our-work/experts" },
      // {
      //   option: "Projects and Programs",
      //   link: "/our-work/projects-and-programs",
      // },
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
      {
        option: "AIP Resources",
        link: "/resource-center/aip-resources/aip-updates",
      },
      // {
      //   option: "Curated Resources",
      //   link: "/resource-center/curated-resources/featured",
      // },
    ],
  },
];
const Footer = () => {
  return (
    <div className="">
      <div className="relative w-full z-[5000] overflow-hidden">
        <Wave
          fill="url(#footerGradient)"
          paused={false}
          className="inset-0 object-cover absolute "
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
        <div className="flex container mx-auto relative w-full ~px-5/[7.813rem]">
          <div className="~pt-[6.5rem]/[8.8rem] ~pb-[10.8rem]/[1.25rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 md:grid w-full">
            <div className="w-full md:col-span-2 ">
              <div className="flex md:flex-col ~gap-[2.25rem]/0 ">
                <div className=" shrink-0 relative h-[3.6rem] w-[6rem]">
                  <Image src={Logo} alt="" fill />
                </div>
                <p className=" ~text-h10Copy6/h9Copy5 font-inter text-white ~pt-0/8 ~pr-0/[6.625rem]">
                  Accelerate Indian Philanthropy is a peer network set up by
                  philanthropists for philanthropists to support their giving
                  efforts
                </p>
              </div>
              <div className="flex lg:hidden flex-col w-full pt-[1rem]">
                <CustomAccordionSelect
                  ArrayData={footerData}
                  accordionTriggerClassName="!text-white"
                />
                <div className="flex text-h9Copy5 leading-[1.225rem] flex-wrap gap-[1rem] text-white pt-[1rem]">
                  <Link href="/careers">Careers</Link>|
                  <Link href="/faq">FAQs</Link>|
                  <Link href="/about/aip-impact/foundation-fact-sheet">
                    Foundation Fact Sheet
                  </Link>
                  |
                  <Link href="/join-our-learning-circle">
                    Join our learning circle
                  </Link>
                </div>
                <div className=" md:basis-3/4 flex w-full md:justify-start pt-[2.5rem] max-md:order-2">
                  <div className="w-full md:~w-[21rem]/[25rem] h-[2.8rem] bg-white flex rounded-full relative rounded-br-full   items-center justify-end">
                    <input
                      type="text"
                      placeholder=" Sign up for our newsletter"
                      className="outline-none rounded-full text-footerGray w-[75%]  bg-[#5a4a9a] absolute top-0 left-0 z-[100] flex items-center border-2 border-footerGray pl-[1.5rem] text-h9Copy5  h-full "
                    ></input>
                    <button className="absolute w-[25%] pr-[2.56rem] z-[50] ~pl-[3rem]/[4rem] text-textPurple flex items-center justify-center md:justify-end bg-white h-full rounded-full text-right ~text-h10Copy6/h9Copy5 font-inter">
                      Join
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="~pt-[1rem]/[1.75rem] font-playFair leading-[1.4rem] text-white ">
                Accelerate Indian Philanthropy
              </h3>
              <p className="pt-[0.75rem] ~text-h10Copy6/h9Copy5 font-inter text-white/60">
                Ananda, 242 Okhla Industrial Estate
              </p>
              <p className=" ~text-h10Copy6/h9Copy5 font-inter text-white/60">
                Phase III, New Delhi, India 110020
              </p>
              <ButtonAnimation>
                <Link
                  href="mailto:info@indianphilanthropy.org"
                  className=" ~text-h10Copy6/h9Copy5 font-inter text-white/60"
                >
                  info@indianphilanthropy.org
                </Link>
              </ButtonAnimation>
              <p className="~pt-[1rem]/[1.75rem] ~text-h10Copy6/h9Copy5 font-inter text-white/60">
                <span className="text-white"> CIN:</span> U85300DL202INPL384351
              </p>
              <div className="flex gap-[1.25rem] ~pt-[1rem]/[2rem]">
                <ButtonAnimation className="relative size-[2.5rem]">
                  <Image src={X} alt="" />
                </ButtonAnimation>
                <ButtonAnimation className="relative size-[2.5rem]">
                  <Image src={In} alt="" />
                </ButtonAnimation>
                <ButtonAnimation className="relative size-[2.5rem]">
                  <Image src={Youtube} alt="" />
                </ButtonAnimation>
              </div>
              <div className="hidden  lg:basis-3/4 lg:flex w-full lg:justify-start ~pt-10/[2rem] max-md:order-2">
                <div className="w-full md:~w-[21rem]/[25rem] h-[2.8rem] bg-white flex rounded-full relative rounded-br-full   items-center justify-end">
                  <input
                    type="text"
                    placeholder=" Sign up for our newsletter"
                    className="outline-none rounded-full text-footerGray w-[75%]  bg-[#5a4a9a] absolute top-0 left-0 z-[100] flex items-center border-2 border-footerGray pl-[1.5rem] text-h9Copy5  h-full "
                  ></input>
                  <button className="absolute w-[25%] pr-[2.56rem] z-[50] ~pl-[3rem]/[4rem] text-textPurple flex items-center justify-center md:justify-end bg-white h-full rounded-full text-right text-h9Copy5 font-inter">
                    Join
                  </button>
                </div>
              </div>
              <div className=" text-h10Copy6 ~pt-[1rem]/[2.875rem] font-inter text-white/60">
                <span className="pr-2">
                  ©2024-25 Accelerate Indian Philanthropy
                </span>
                <Link href="#" className="border-s bottom-1 px-2">
                  T&C
                </Link>
                <Link href="#" className="border-s bottom-1 ps-2">
                  Privacy Policy
                </Link>
                <p className="text-white/60">
                  Designed with ❤ by Sane Difference
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <p className=" pt-[0.75rem] text-h9Copy5 font-inter font-bold text-white">
                About Us
              </p>
              <div className="flex flex-col gap-4 ~pt-[0.75rem]/[1rem]">
                <Link
                  href="/about/aip-journey"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>The AIP Journey</ButtonAnimation>
                </Link>
                <Link
                  href="/about/our-approach"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>Our Approach</ButtonAnimation>
                </Link>
                <Link
                  href="/about/aip-impact"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation> AIP Impact</ButtonAnimation>
                </Link>
                <Link
                  href="/about/giving-roadmap"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>Giving Roadmap</ButtonAnimation>
                </Link>
                <Link
                  href="/about/financials"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>Financial Reports</ButtonAnimation>
                </Link>
                <Link
                  href="/about/aip-founder-network"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation> AIP Founder Network</ButtonAnimation>
                </Link>
                <Link
                  href="/about/philanthropist-network"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>Philanthropist Network</ButtonAnimation>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <p className="pt-[0.75rem] text-h9Copy5 font-inter font-bold text-white">
                People of AIP
              </p>
              <div className="flex flex-col gap-4 ~pt-[0.75rem]/[1rem]">
                <Link
                  href="/people-of-aip/core-founder"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>Core Founders</ButtonAnimation>
                </Link>
                <Link
                  href="/people-of-aip/founders"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>Founders</ButtonAnimation>
                </Link>
                <Link
                  href="/people-of-aip/advisory-board"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>Advisory Board</ButtonAnimation>
                </Link>
                <Link
                  href="/people-of-aip/team-aip"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>Team AIP</ButtonAnimation>
                </Link>
                {/* <Link
                  href="/people-of-aip/experts"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>Experts</ButtonAnimation>
                </Link> */}
              </div>

              <p className="pt-[2.25rem] text-h9Copy5 font-inter font-bold text-white">
                Our Work
              </p>
              <div className="flex flex-col gap-4 ~pt-[0.75rem]/[1rem]">
                <Link
                  href="/our-work/what-we-do"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>What We Do</ButtonAnimation>
                </Link>
                <Link
                  href="/our-work/npo"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation> NPO Registry</ButtonAnimation>
                </Link>
                {/* <Link
                  href="/our-work/projects-and-programs"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>Projects and Programs</ButtonAnimation>
                </Link> */}
                <Link
                  href="/our-work/collaborations"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>Collaborations</ButtonAnimation>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <p className="pt-[0.75rem] text-h9Copy5 font-inter font-bold text-white">
                Resource Center
              </p>
              <div className="flex flex-col gap-4 ~pt-[0.75rem]/[1rem]">
                <Link
                  href="/resource-center/aip-resources/aip-updates"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>AIP Resources</ButtonAnimation>
                </Link>
                {/* <Link
                  href="/resource-center/curated-resources/featured"
                  className=" text-h9Copy5 font-inter text-white/60"
                >
                  <ButtonAnimation>Curated Resources</ButtonAnimation>
                </Link> */}
              </div>

              <div className="pt-[2.25rem] text-h9Copy5 font-inter font-bold text-white">
                <Link href="/careers">
                  <ButtonAnimation>Careers</ButtonAnimation>
                </Link>
              </div>
              <div className="pt-[2.25rem] text-h9Copy5 font-inter font-bold text-white">
                <Link href="/contact">
                  <ButtonAnimation>Contact</ButtonAnimation>
                </Link>
              </div>
              <div className="pt-[2.25rem] text-h9Copy5 font-inter font-bold text-white">
                <Link href="/faq">
                  <ButtonAnimation>FAQs</ButtonAnimation>
                </Link>
              </div>
              <div className="pt-[2.25rem] text-h9Copy5 font-inter font-bold text-white">
                <Link href="/about/aip-impact/foundation-fact-sheet">
                  <ButtonAnimation>Foundation Fact Sheet</ButtonAnimation>
                </Link>
              </div>
              <div className="pt-[2.25rem] text-h9Copy5 font-inter font-bold text-white">
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
