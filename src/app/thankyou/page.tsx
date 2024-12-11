import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import FilterDownArrowSvg from "@/components/svg/FilterDownArrowSvg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ThankYouPage = () => {
  return (
    <div className="pt-[5rem]">
      <div className="relative">
        <BreadCrump textOne="home" linkOne="/" />
      </div>
      <div className="pt-[8rem] flex flex-col items-center justify-center">
        <div className="~text-h4/h1 text-center ~leading-[2.6rem]/[3.713rem] font-playFair text-gray80 ">
          <span className="font-playFairItalic text-textPurple text-center">
            Thank you
          </span>
          &nbsp;for
          <h2 className=" font-playFair text-gray80 ~text-h4/h1 ~leading-[2.6rem]/[3.713rem]">
            &nbsp;Submitting the Form!
          </h2>
        </div>
        <div className=" ~mt-[2.5rem]/[4.5rem] relative w-[22rem] h-[5rem] rounded-3xl flex justify-center items-center overflow-hidden">
          <Image
            src="/images/news/newsDemo.png"
            alt=""
            fill
            className="object-cover"
          />
          <Link
            href="mailto:info@indianphilanthropy.org"
            className="relative text-textPurple leading-[1.4rem] underline"
          >
            info@indianphilanthropy.org
          </Link>
        </div>
        <div className="~pt-[5rem]/[4.5rem] flex justify-center">
          <ButtonAnimation className=" py-[0.75rem] px-[2rem]  rounded-full bg-darkPurple">
            <Link href="/" className="text-white flex gap-[0.5rem]">
              <FilterDownArrowSvg className="size-[1.25rem] shrink-0 rotate-[90deg]" />
  
              <p className=" text-h9Copy5 leading-[1.225rem]">Go Back</p>
            </Link>
          </ButtonAnimation>
        </div>
        <p className="text-midGray text-h8Copy3 pt-[3.5rem] pb-[8.3rem] leading-[1.57rem]">
          WIP
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
