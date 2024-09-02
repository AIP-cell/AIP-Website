import BreadCrump from "@/components/bread-crump/BreadCrump";
import EyeSvg from "@/components/svg/EyeSvg";
import Image from "next/image";
import Link from "next/link";
import WealthView from "@public/svg/projectsPage/wealthView.png";
import PurpleTopSvg from "@public/svg/products-and-services/project-and-programs/topRightPurpleCurve.svg";
import bcgSvg from "@public/svg/projectsPage/bcg.svg";
import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
import XSvg from "@/components/svg/XSvg";
import YoutubeSvg from "@/components/svg/YoutubeSvg";

const InnerSectionOne = () => {
  return (
    <div className="container tw-mx-auto tw-relative tw-px-[7.8rem] tw-pt-[4.875rem]">
      <Image
        src={PurpleTopSvg}
        alt="purple-curve"
        className="tw-absolute tw-top-[8rem] tw-right-0"
      />
      <BreadCrump
        textOne="Products & Services"
        linkOne="/products-and-services"
        textTwo="Projects and Programs"
        linkTwo="/products-and-services/projects-and-programs"
      />
      <div className="tw-grid tw-grid-cols-3 tw-gap-5">
        <div className="tw-col-span-2 tw-flex tw-flex-col tw-gap-10  tw-pe-[6.563rem]">
          <div className="tw-font-playFair">
            <p className="tw-leading-[3.3rem] tw-tracking-[-.04rem] tw-text-h2 tw-text-midGray">
              Wealth with Purpose
            </p>
            <p className=" tw-leading-[1.75rem] tw-tracking-[-.02rem] tw-font-playFairItalic tw-text-h5 tw-text-gray40 tw-font-medium tw-pt-4">
              Reports
            </p>
          </div>
          <p className="tw-font-inter tw-leading-[1.4rem]  tw-text-midGray tw-max-w-[31.563rem]">
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
            <p className="tw-font-playFair tw-pb-[1rem] tw-leading-[1.75rem] tw-font-medium tw-tracking-[-.02rem] tw-text-h5 tw-text-gray80">
              In Partnership With
            </p>
            <Image
              src={bcgSvg}
              className="tw-border tw-border-1 tw-border-gray10 tw-rounded-xl tw-py-3 tw-px-[.92rem] tw-w-[5.313rem] tw-h-20 tw-bg-bgCollab"
              alt="bcg"
            />
          </div>

          <div className="tw-h-px tw-bg-gray10 tw-w-[31.563rem]"></div>
          <div>
            <p className="tw-font-playFair tw-pb-4 tw-leading-[1.75rem] tw-font-medium tw-tracking-[-.02rem] tw-text-h5 tw-text-gray80">
              Launch Details
            </p>
            <div className="tw-flex  tw-gap-10">
              <div className="tw-text-left">
                <p className="tw-text-textPurple tw-text-h3 tw-tracking-[0.04rem] tw-leading-[3.25rem] tw-font-playFairItalic">
                  New Delhi
                </p>
                <p className="tw-font-bold tw-text-h8Copy3 tw-leading-[1.575rem] tw-font-inter tw-text-gray80">
                  25th Jun 2024
                </p>
              </div>
              <div>
                <p className="tw-text-textPurple tw-italic tw-text-h3 tw-tracking-[0.04rem] tw-leading-[3.25rem] tw-font-playFairItalic">
                  Mumbai
                </p>
                <p className="tw-font-bold tw-text-h8Copy3 tw-leading-[1.575rem] tw-font-inter tw-text-gray80">
                  18th July 2024
                </p>
              </div>
            </div>
          </div>

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

            <Link
              className=" hover:tw-bg-darkPurple tw-border-2 hover:tw-text-white  tw-transition-all  tw-bg-white tw-text-darkPurple  tw-border-darkPurple tw-px-7 tw-py-3 tw-flex tw-items-center tw-gap-[0.75rem] tw-w-fit tw-rounded-3xl"
              href="#"
            >
              <p className=" tw-font-medium tw-font-inter tw-text-h9Copy5 tw-leading-[1.225rem]">
                Visit Gallery
              </p>
              <EyeSvg className="tw-size-[1.25rem]" />
            </Link>
          </div>

          <div className="tw-h-px tw-bg-gray10"></div>

          <div>
            <p className="tw-font-playFair tw-pb-4 tw-leading-[1.75rem] tw-font-medium tw-tracking-[-.02rem] tw-text-h5 tw-text-gray80">
              Catch up on Event Updates
            </p>

            <div className="tw-flex tw-gap-4">
              <div className="tw-bg-bgGray5 tw-text-darkPurple hover:tw-text-white hover:tw-bg-darkPurple tw-p-[0.5rem] tw-rounded-full tw-flex tw-items-center tw-justify-center">
                <YoutubeSvg className="tw-size-[2rem]" />
                {/* <Image
                  src={Youtube}
                  className=" tw-w-[1.833rem] tw-h-[1.288rem] "
                  alt="Youtube Image"
                /> */}
              </div>

              <div className="tw-bg-bgGray5 tw-text-darkPurple hover:tw-text-white hover:tw-bg-darkPurple tw-w-[3rem] tw-h-[3rem] tw-rounded-full tw-flex tw-items-center tw-justify-center ">
                <XSvg className="tw-w-[1.063rem] tw-h-[1.125rem]" />
                {/* <Image
                  src={Ex}
                  className=" tw-w-[1.063rem] tw-h-[1.125rem]"
                  alt="Ex Image"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <Image
          src={WealthView}
          className="tw-z-10 tw-w-[25rem] tw-object-cover"
          alt="image"
        />
      </div>
    </div>
  );
};

export default InnerSectionOne;
