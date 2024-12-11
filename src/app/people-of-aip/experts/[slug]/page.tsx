import Link from "next/link";
import React from "react";
import Bg from "@public/svg/people-of-aip/peachCurveRightDetailsPage.svg";
import Linkedin from "@public/svg/linkedinPurple.svg";
import X from "@public/svg/xPurple.svg";
import LinkSvg from "@public/svg/linkingPurple.svg";
import SampleVideo from "@public/images/sampleVideo.png";
import Image from "next/image";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import XSvg from "@/components/svg/XSvg";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import LinkedinSvg from "@/components/svg/LinkedinSvg";
import ASvg from "@/components/svg/ASvg";
import PSvg from "@/components/svg/PSvg";
import InnerCollaborationsVideo from "@/app/our-work/collaborations/[slug]/_components/InnerCollaborationsVideo";
import Contribution from "./_components/Contribution";

const ExpertInnerPage = () => {
  return (
    <div className="pt-[5rem]">
      <div className="w-full relative ">
        <Image
          src={Bg}
          alt="background-svg"
          className="absolute ~top-[2.75rem]/0 right-0 z-[-1] ~w-[15.438rem]/[32.813rem] ~h-[23.524rem]/[50rem]"
        />
        <div className="relative container mx-auto">
          <div className="~px-[1.25rem]/[7.8rem] ~pb-0/[7.5rem]">
            <BreadCrump
              textOne="People of AIP"
              linkOne="/people-of-aip"
              textTwo="Experts"
              linkTwo="/people-of-aip/our-advisory-board"
              textThree="slug"
              linkThree="/people-of-aip/our-advisory-board/slug"
            />
            <div className="~pt-[4.3rem]/[5rem] flex flex-col-reverse md:grid grid-cols-3 gap-[1.238rem]">
              <div className="col-span-2  relative">
                <h2 className="~text-h4/h2 text-midGray leading-[3.3rem] font-playFair">
                  Ashish Dhawan
                </h2>
                <h4 className="pt-[1rem] ~text-h6/h5 text-gray40 font-playFairItalic ~pr-[4rem]/0">
                  Founder-CEO, The Convergence Foundation
                </h4>
                <div className="~pt-[2rem]/[2.5rem] text-midGray ~pr-0/[6.56rem]">
                  <p className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4">
                    Ashish Dhawan is the Founder-CEO of The Convergence
                    Foundation (TCF) which is focused on accelerating India’s
                    economic growth and development. Ashish is also the Founding
                    Chairperson of Ashoka University.
                  </p>
                  <p className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 ~pt-[1rem]/[1.5rem]">
                    TCF incubates non-profits focused on creating system-wide
                    impact in the areas of economic growth, equality of
                    opportunity and sustainability. Its current portfolio
                    includes organizations working on jobs and investment, rule
                    of law, governance and state capacity, economic empowerment
                    of women, science and technology, air pollution, unlocking
                    philanthropic capital, and improving the effectiveness of
                    nonprofits.
                  </p>
                  <p className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 ~pt-[1rem]/[1.5rem]">
                    Ashoka University was established as a university in 2014
                    and is already recognized as a leading teaching and research
                    institute across the humanities, social sciences, natural
                    sciences and data & computer science. Central Square
                    Foundation has been a leading voice for foundational
                    literacy and numeracy in India and currently supports
                    several state governments in improving learning outcomes in
                    the early grades.
                  </p>
                  <p className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 ">
                    Ashish also serves on the governing board of the Bill and
                    Melinda Gates Foundation (BMGF).
                  </p>
                  <p className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 ~pt-[1rem]/[1.5rem]">
                    Before his second career as a philanthropist, Ashish was
                    among India’s most successful private equity investors. He
                    founded and ran ChrysCapital, the country’s leading private
                    equity firm. Ashish graduated from Yale University and
                    received his MBA from Harvard Business School.
                  </p>
                  <div className=" ~pt-[2rem]/[2.5rem]  flex-col flex gap-[1rem]">
                    <div className="flex gap-[1rem]">
                      <ButtonAnimation className="rounded-full ~p-[0.5rem]/[0.875rem] bg-bgGray5">
                        {/* <LinkedinSvg className="size-[1.5rem]"/> */}
                        <Image
                          src={Linkedin}
                          alt=""
                          className="w-[1.375rem]"
                        />
                      </ButtonAnimation>
                      <ButtonAnimation className="rounded-full flex justify-center items-center text-textPurple hover:text-white p-[0.93rem] bg-bgGray5 hover:bg-textPurple">
                        <XSvg className="size-[1.063rem]" />
                        {/* <Image src={X} alt="" className="" /> */}
                      </ButtonAnimation>
                    </div>
                    <div className="flex w-[17.375rem] gap-[0.98rem] px-[1.25rem] py-[0.76rem] bg-bgGray5 rounded-full">
                      <Image src={LinkSvg} alt="" className="" />
                      <p className="text-gray80 ~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4">
                        theconvergencefoundation
                      </p>
                    </div>
                    <div className="flex w-[17.375rem] gap-[0.98rem] px-[1.25rem] py-[0.76rem] bg-bgGray5 rounded-full">
                      <Image src={LinkSvg} alt="" className="" />
                      <p className="text-gray80 ~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4">
                        abcdxyze_loremipsum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 relative">
                <PSvg
                  src="/images/sample.png"
                  className="relative z-10"
                />
                <p className="text-h5 pt-[2rem] text-gray90 font-playFair font-medium leading-[1.75rem]">
                  “I believe a lot more needs to be done particularly to
                  encourage first-time givers. AIP aims to fill this gap and
                  spur philanthropy in a very structured manner.”
                </p>
              </div>
            </div>
            <div className="">
              <InnerCollaborationsVideo />
            </div>
          </div>
        </div>
        <Contribution />
      </div>
    </div>
  );
};

export default ExpertInnerPage;
