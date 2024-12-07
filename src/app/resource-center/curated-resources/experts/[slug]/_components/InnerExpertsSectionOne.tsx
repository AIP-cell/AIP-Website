import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
import Image from "next/image";

import PurpleTopSvg from "@public/svg/products-and-services/project-and-programs/topRightPurpleCurve.svg";
import BottomBg from "@public/svg/products-and-services/project-and-programs/bottomBgHeroSection.svg";
import LinkSvg from "@public/svg/linkingPurple.svg";

import Systemic from "@public/svg/projects-page/systemic.png";

import BreadCrump from "@/components/bread-crump/BreadCrump";
import InnerCollaborationsVideo from "@/app/our-work/collaborations/[slug]/_components/InnerCollaborationsVideo";

const InnerExpertsSectionOne = () => {
  return (
    <div className="tw-relative tw-w-full ~tw-pb-[3rem]/[5.75rem]">
      <Image
        src={PurpleTopSvg}
        alt="purple-curve"
        className="tw-hidden md:tw-block tw-absolute tw-top-[8rem] tw-right-0"
      />
      <div className="container tw-mx-auto tw-relative ~tw-px-[1.25rem]/[7.8rem] tw-pt-[5rem]">
        <BreadCrump
          textOne="Resource Center"
          linkOne="/resource-center"
          textTwo="Curated Resources"
          linkTwo="/resource-center/curated-resources"
          textThree="Experts"
          linkThree="/resource-center/curated-resources/slug"
          textFour="slug"
        />
        <div className="tw-relative tw-grid md:tw-grid-cols-3 tw-gap-5 ~tw-pb-[3rem]/0">
          <div className="tw-col-span-2 tw-flex tw-flex-col ~tw-gap-[2rem]/[2.5rem]  ~tw-pe-0/[6.563rem]">
            <div>
              <div className="tw-font-playFair">
                <p className="tw-leading-[3.25rem] tw-tracking-[-.04rem] tw-text-h3 tw-text-midGray ">
                  Systemic Impact Exemplars
                </p>
                <p className="tw-font-medium  tw-leading-[1.75rem]  tw-font-playFair tw-text-h5 tw-text-gray80 tw-pt-[1rem]">
                  By{" "}
                  <span className="tw-underline tw-underline-offset-3 tw-decoration-[1.5px]">
                    Karthik Muralidharan
                  </span>
                </p>
                <p className=" tw-leading-[1.75rem]  tw-font-playFairItalic tw-text-h5 tw-text-gray40 tw-font-medium tw-pt-[1rem]">
                  Reports | Fields
                </p>
              </div>
              <p className="tw-font-inter tw-leading-[1.4rem]  tw-text-midGray  tw-pt-[1rem] ~tw-pr-0/[3rem]">
                This report was conceptualised to identify and learn from
                organisations that have achieved large-scale impact by adopting
                the systems change approach. It profiles 20 of India’s leading
                SSOs, and aims to inspire and inform other social purpose
                organisations by building evidence on what works in the Indian
                context. The report serves as a comprehensive knowledge
                resource, intended to shape thinking on systems change.
              </p>
            </div>
            <div className="tw-block md:tw-hidden ">
              <Image
                src={Systemic}
                className=" tw-w-full tw-object-cover tw-h-[30.89rem]"
                alt="image"
              />
            </div>
            <div className="">
              <p className="tw-block md:tw-hidden tw-text-h6M tw-text-gray80 tw-font-playFair tw-leading-[1.575rem]">
                Launch Details
              </p>
              <button className="tw-mt-[1rem] tw-group tw-bg-darkPurple tw-border-2 tw-border-darkPurple hover:tw-bg-white  tw-transition-all  hover:tw-text-darkPurple tw-text-white hover:tw-border-2 hover:tw-border-darkPurple tw-px-7 tw-py-3 tw-flex tw-items-center tw-gap-[0.75rem] tw-w-fit tw-rounded-3xl">
                <p className=" tw-font-inter  tw-text-h9Copy5 tw-leading-[1.225rem]">
                  Download
                </p>
                <div className=" tw-pt-[.1rem]">
                  <DownloadFileSvg className="tw-size-[1.25rem]" />
                </div>
              </button>
            </div>
            <div className="tw-flex tw-flex-col tw-gap-[1rem]">
              <h2 className="~tw-text-h6M/h4a ~tw-leading-[1.575rem]/[2.113rem] tw-text-gray80 tw-font-playFair  ~tw-pb-0/[1.5rem]">
                Links
              </h2>
              <div className="tw-flex tw-w-[17.375rem] tw-gap-[0.98rem] ~tw-pl-[1rem]/[1.25rem] ~tw-py-[0.875rem]/[0.75rem] tw-bg-bgGray5 tw-rounded-full">
                <Image src={LinkSvg} alt="" className="" />
                <p className="tw-text-gray80 ~tw-leading-[1.225rem]/[1.4rem] ~tw-text-h9Copy5/h9Copy4">
                  theconvergencefoundation
                </p>
              </div>
              <div className="tw-flex tw-w-[17.375rem] tw-gap-[0.98rem] ~tw-pl-[1rem]/[1.25rem] ~tw-py-[0.875rem]/[0.75rem] tw-bg-bgGray5 tw-rounded-full">
                <Image src={LinkSvg} alt="" className="" />
                <p className="tw-text-gray80 ~tw-leading-[1.225rem]/[1.4rem] ~tw-text-h9Copy5/h9Copy4">
                  abcdxyze_loremipsum
                </p>
              </div>
            </div>
          </div>
          <div className="tw-hidden md:tw-block tw-pt-[5rem]">
            <Image
              src={Systemic}
              className=" tw-w-[25rem] tw-object-cover tw-h-[35.313rem]"
              alt="image"
            />
          </div>
        </div>
        <InnerCollaborationsVideo />
      </div>
    </div>
  );
};

export default InnerExpertsSectionOne;
