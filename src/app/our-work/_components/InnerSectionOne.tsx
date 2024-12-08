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
    <div className="tw-w-full tw-relative">
      <Image
        src={PurpleTopSvg}
        alt="purple-curve"
        className="tw-hidden lg:tw-block tw-absolute tw-top-[8rem] tw-right-0"
      />
      <div className="container tw-mx-auto tw-relative ~tw-px-[1.25rem]/[7.8rem] ~tw-pb-[3rem]/0 ~tw-pt-[4.3rem]/[4.875rem]">
        <BreadCrump
          textOne="Our Work"
          linkOne="/our-work"
          textTwo="Projects and Programs"
          linkTwo="/our-work/projects-and-programs"
        />
        <div className="tw-grid md:tw-grid-cols-3 tw-gap-5">
          <div className="tw-col-span-2 tw-flex tw-flex-col ~tw-gap-[2rem]/[2.5rem]  ~tw-pr-0/[6.563rem]">
            <div className="tw-font-playFair">
              <p className="~tw-leading-[2.6rem]/[3.3rem] tw-tracking-[-.04rem] ~tw-text-h4/h2 tw-text-midGray">
                Wealth with Purpose
              </p>
              <p className=" ~tw-leading-[1.575rem]/[1.75rem] tw-tracking-[-.02rem] tw-font-playFairItalic ~tw-text-h6M/h5 tw-text-gray40 tw-font-medium ~tw-pt-[0.75rem]/4">
                Reports
              </p>
            </div>
            <Image
              src={WealthView}
              className="tw-block md:tw-hidden tw-z-10 tw-w-full tw-object-cover"
              alt="image"
            />
            <p className="tw-font-inter ~tw-leading-[1.225rem]/[1.4rem] ~tw-text-h9Copy5/h9Copy4  tw-text-midGray md:tw-max-w-[31.563rem]">
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
              <p className="tw-font-playFair ~tw-pb-[0.75rem]/[1rem] ~tw-leading-[1.575rem]/[1.75rem] tw-font-medium tw-tracking-[-.02rem] ~tw-text-h6M/h5 tw-text-gray80">
                In collaboration with
              </p>
              <Image
                src={bcgSvg}
                className="tw-border tw-border-1 tw-border-gray10 tw-rounded-xl tw-py-3 tw-px-[.92rem] ~tw-w-[4.25rem]/[5.313rem] ~tw-h-[4rem]/20 tw-bg-bgCollab"
                alt="bcg"
              />
            </div>
            <div className="tw-h-px tw-bg-gray10 tw-w-full md:tw-w-[31.563rem]"></div>
            <div className="tw-flex tw-gap-5">
              {/* <button className=""> */}
              <button className="tw-group tw-bg-darkPurple tw-border-2 tw-border-darkPurple tw-transition-all  hover:tw-bg-white hover:tw-text-darkPurple tw-text-white hover:tw-border-2   hover:tw-border-darkPurple tw-px-7 tw-py-3 tw-flex tw-items-center tw-gap-[0.75rem] tw-w-fit tw-rounded-3xl">
                <p className="tw-font-medium tw-font-inter  tw-text-h9Copy5 tw-leading-[1.225rem]">
                  Download
                </p>
                <div className=" tw-pt-[.1rem]">
                  <DownloadFileSvg className="tw-size-[1.25rem]" />
                </div>
              </button>
            </div>
          </div>
          <Image
            src={WealthView}
            className="tw-hidden md:tw-block tw-z-10 tw-w-[25rem] tw-object-cover"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default InnerSectionOne;
