import React from "react";
import PositionsGrid from "./PositionsGrid";
import usersBg from "@public/svg/careers/users.svg";
import PeachCurve from "@public/svg/careers/peachCurveRight.svg";
import Link from "next/link";
import Image from "next/image";
import { TJob } from "@/api/type";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
type Props = {
  jobs: TJob[];
};
const OpenRules = ({ jobs }: Props) => {
  return (
    <div className="w-full relative">
      <Image
        src={PeachCurve}
        alt=""
        className="hidden lg:block absolute right-0 top-[-6rem]"
      />
      <div className="container relative mx-auto ~px-5/[7.581rem] ">
        <div className="flex flex-col justify-center items-center ">
          {/* <p className="~pt-[5rem]/[12.5rem] font-playFair tracking-[-.04rem] ~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem] ~pb-[1rem]/5">
            Open
            <span className="font-playFairItalic text-textPurple">
              &nbsp;Roles
            </span>
          </p> */}
          <TextStaggerAnimation
            text="Open <color>Roles</color>"
            className="~pt-[5rem]/[12.5rem] font-playFair tracking-[-.04rem] ~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem] ~pb-[1rem]/5"
          />
          <div className="~px-[3.8rem]/[4rem]">
          <TextStaggerAnimation text="Join the movement to bring about" className="font-inter text-midGray text-center ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]"/>
          <TextStaggerAnimation text="strategic philanthropy impact India’s transformation." className="font-inter text-midGray text-center ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]"/>
        
          </div>
          {jobs.length != 0 && <PositionsGrid data={jobs} />}
        </div>
        {jobs.length != 0 && (
          <div className="pt-[2rem]">
            <Link className="" href="/careers/all-positions">
              <ButtonAnimation className=" px-7 py-3 flex gap-2 bg-darkPurple w-fit rounded-3xl">
                <p className=" font-inter text-white text-h9Copy5 leading-[1.225rem]">
                  See all open positions
                </p>
                <Image src={usersBg} alt="arrow down" />
              </ButtonAnimation>
            </Link>
          </div>
        )}
        <div className=" ~px-0/[6.563rem] ~pt-[2.5rem]/20  ">
          <div className="~px-5/[9.375rem] py-[2rem] rounded-[1.25rem] text-center bg-lightgrey">
            <p className="font-playFair ~text-h5/h4a ~leading-[1.75rem]/[2.113rem] text-gray80">
              Can’t Find what you are looking for?
            </p>
            <p className="font-inter text-h9Copy5 leading-[1.4rem] pt-3 text-midGray">
              Send in your resume and portfolio at&nbsp;
              <Link
                href="mailto:careers@indianphilanthropy.org"
                className="text-textPurple inline-block underline"
              >
                <ButtonAnimation className=" inline-block underline">
                  careers@indianphilanthropy.org
                </ButtonAnimation>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenRules;
