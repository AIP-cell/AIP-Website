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
import InnerCollaborationsVideo from "@/app/products-and-services/collaborations/[slug]/_components/InnerCollaborationsVideo";

const page = () => {
  return (
    <div className="~tw-pt-[8rem]/[5rem]">
      <div className="tw-relative container tw-mx-auto">
        <div className="~tw-px-5/[7.8rem] ~tw-pb-[4rem]/[7.5rem]">
          {/* <div className="tw-absolute  tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
            <Link
              href=""
              className="tw-text-gray50 tw-text-h9Copy5 tw-leading-[19.6px]"
            >
              {"<"} People of AIP &nbsp;/&nbsp;
            </Link>
            <Link href="#">Our Advisory Board &nbsp;/&nbsp;</Link>
            <Link href="#"> Ashish Dhawan</Link>
          </div> */}
          <BreadCrump
            textOne="People of AIP"
            linkOne="/people-of-aip"
            textTwo="Our Advisory Board"
            linkTwo="/people-of-aip/our-advisory-board"
            textThree="slug"
            linkThree="/people-of-aip/our-advisory-board/slug"
          />
          <div className="~tw-pt-10/[5rem] tw-flex tw-flex-col-reverse md:tw-grid tw-grid-cols-3 tw-gap-[1.238rem]">
            <div className="tw-col-span-2  tw-relative">
              <h2 className="~tw-text-h4/h2 tw-text-midGray tw-leading-[3.3rem] tw-font-playFair">
                Ashish Dhawan
              </h2>
              <h4 className="tw-pt-[1rem] ~tw-text-h6/h5 tw-text-gray40 tw-font-playFairItalic">
                Founder-CEO, The Convergence Foundation
              </h4>
              <div className="tw-pt-[2.5rem] tw-text-midGray ~tw-pr-5/[6.56rem]">
                <p className="tw-leading-[1.4rem]">
                  Ashish Dhawan is the Founder-CEO of The Convergence Foundation
                  (TCF) which is focused on accelerating India’s economic growth
                  and development. Ashish is also the Founding Chairperson of
                  Ashoka University.
                </p>
                <p className="tw-leading-[1.4rem] tw-pt-[1.5rem]">
                  TCF incubates non-profits focused on creating system-wide
                  impact in the areas of economic growth, equality of
                  opportunity and sustainability. Its current portfolio includes
                  organizations working on jobs and investment, rule of law,
                  governance and state capacity, economic empowerment of women,
                  science and technology, air pollution, unlocking philanthropic
                  capital, and improving the effectiveness of nonprofits.
                </p>
                <p className="tw-leading-[1.4rem] tw-pt-[1.5rem]">
                  Ashoka University was established as a university in 2014 and
                  is already recognized as a leading teaching and research
                  institute across the humanities, social sciences, natural
                  sciences and data & computer science. Central Square
                  Foundation has been a leading voice for foundational literacy
                  and numeracy in India and currently supports several state
                  governments in improving learning outcomes in the early
                  grades.
                </p>
                <p className="tw-leading-[1.4rem] ">
                  Ashish also serves on the governing board of the Bill and
                  Melinda Gates Foundation (BMGF).
                </p>
                <p className="tw-leading-[1.4rem] tw-pt-[1.5rem]">
                  Before his second career as a philanthropist, Ashish was among
                  India’s most successful private equity investors. He founded
                  and ran ChrysCapital, the country’s leading private equity
                  firm. Ashish graduated from Yale University and received his
                  MBA from Harvard Business School.
                </p>
                <div className=" tw-pt-[2.5rem] md:tw-flex-row tw-flex-col tw-flex tw-gap-[1rem]">
                  <div className="tw-flex tw-gap-[1rem]">
                    <ButtonAnimation className="tw-rounded-full tw-p-[0.875rem] tw-bg-bgGray5">
                      {/* <LinkedinSvg className="tw-size-[1.5rem]"/> */}
                      <Image
                        src={Linkedin}
                        alt=""
                        className="tw-w-[1.375rem]"
                      />
                    </ButtonAnimation>
                    <ButtonAnimation className="tw-rounded-full tw-flex tw-justify-center tw-items-center tw-text-textPurple hover:tw-text-white tw-p-[0.93rem] tw-bg-bgGray5 hover:tw-bg-textPurple">
                      <XSvg className="tw-size-[1.063rem]" />
                      {/* <Image src={X} alt="" className="" /> */}
                    </ButtonAnimation>
                  </div>
                  <div className="tw-flex tw-w-fit tw-gap-[0.98rem] tw-px-[1.25rem] tw-py-[0.76rem] tw-bg-bgGray5 tw-rounded-full">
                    <Image src={LinkSvg} alt="" className="" />
                    <p className="tw-text-gray80 tw-leading-[1.4rem]">
                      theconvergencefoundation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-col-span-1 tw-relative">
              <PSvg src="/images/sample.png" className="tw-relative tw-z-10" />
              <Image
                src={Bg}
                alt="background-svg"
                className="tw-absolute tw-top-0 tw-right-0 tw-z-[-1]"
              />
            </div>
          </div>
          <div className="">
            <InnerCollaborationsVideo />
            {/* <Image
              src={SampleVideo}
              alt="background-svg"
              className="tw-w-full tw-h-[35.3rem]"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
