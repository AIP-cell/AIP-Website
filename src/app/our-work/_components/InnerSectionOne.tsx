import BreadCrump from "@/components/bread-crump/BreadCrump";
import EyeSvg from "@/components/svg/EyeSvg";
import Image from "next/image";
import Link from "next/link";
import WealthView from "@public/svg/projects-page/wealthView.png";
import PurpleTopSvg from "@public/svg/products-and-services/project-and-programs/topRightPurpleCurve.svg";
import bcgSvg from "@public/svg/projects-page/bcg.svg";
import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
import XSvg from "@/components/svg/XSvg";
import YoutubeSvg from "@/components/svg/YoutubeSvg";

const InnerSectionOne = () => {
  return (
    <div className="w-full relative">
      <Image
        src={PurpleTopSvg}
        alt="purple-curve"
        className="hidden lg:block absolute top-[8rem] right-0"
      />
      <div className="container mx-auto relative ~px-[1.25rem]/[7.8rem] ~pb-[3rem]/0 ~pt-[4.3rem]/[4.875rem]">
        <BreadCrump
          textOne="Our Work"
          linkOne="/our-work"
          textTwo="Projects and Programs"
          linkTwo="/our-work/projects-and-programs"
        />
        <div className="grid md:grid-cols-3 gap-5">
          <div className="col-span-2 flex flex-col ~gap-[2rem]/[2.5rem]  ~pr-0/[6.563rem]">
            <div className="font-playFair">
              <p className="~leading-[2.6rem]/[3.3rem] tracking-[-.04rem] ~text-h4/h2 text-midGray">
                Wealth with Purpose
              </p>
              <p className=" ~leading-[1.575rem]/[1.75rem] tracking-[-.02rem] font-playFairItalic ~text-h6M/h5 text-gray40 font-medium ~pt-[0.75rem]/4">
                Reports
              </p>
            </div>
            <Image
              src={WealthView}
              className="block md:hidden z-10 w-full object-cover"
              alt="image"
            />
            <p className="font-inter ~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4  text-midGray md:max-w-[31.563rem]">
              Personal Philanthropy is almost never linear, it goes through its
              twists and turns, from initiation to experimentation, slowly
              gathering conviction and strength, and finally maturing into a
              joyful and fulfilling life experience. Our cover tries to depict
              some aspects of this journey. The cover also aims to capture the
              transformative impact of philanthropic efforts across a range of
              sectors from education to healthcare to climate and the arts, with
              innovative initiatives and their profound effects on communities.
            </p>
            <div>
              <p className="font-playFair ~pb-[0.75rem]/[1rem] ~leading-[1.575rem]/[1.75rem] font-medium tracking-[-.02rem] ~text-h6M/h5 text-gray80">
                In collaboration with
              </p>
              <Image
                src={bcgSvg}
                className="border border-1 border-gray10 rounded-xl py-3 px-[.92rem] ~w-[4.25rem]/[5.313rem] ~h-[4rem]/20 bg-bgCollab"
                alt="bcg"
              />
            </div>
            <div className="h-px bg-gray10 w-full md:w-[31.563rem]"></div>
            <div className="flex gap-5">
              {/* <button className=""> */}
              <button className="group bg-darkPurple border-2 border-darkPurple transition-all  hover:bg-white hover:text-darkPurple text-white hover:border-2   hover:border-darkPurple px-7 py-3 flex items-center gap-[0.75rem] w-fit rounded-3xl">
                <p className="font-medium font-inter  text-h9Copy5 leading-[1.225rem]">
                  Download
                </p>
                <div className=" pt-[.1rem]">
                  <DownloadFileSvg className="size-[1.25rem]" />
                </div>
              </button>
            </div>
          </div>
          <Image
            src={WealthView}
            className="hidden md:block z-10 w-[25rem] object-cover"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default InnerSectionOne;
