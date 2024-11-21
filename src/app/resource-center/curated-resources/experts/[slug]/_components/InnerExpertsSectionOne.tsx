import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
import Image from "next/image";

import PurpleTopSvg from "@public/svg/products-and-services/project-and-programs/topRightPurpleCurve.svg";
import BottomBg from "@public/svg/products-and-services/project-and-programs/bottomBgHeroSection.svg";
import LinkSvg from "@public/svg/linkingPurple.svg";

import Systemic from "@public/svg/projects-page/systemic.png";

import BreadCrump from "@/components/bread-crump/BreadCrump";

const InnerExpertsSectionOne = () => {
  return (
    <div className="tw-relative tw-w-full tw-pb-[5.75rem]">
     
      <Image
        src={PurpleTopSvg}
        alt="purple-curve"
        className="tw-absolute tw-top-[8rem] tw-right-0"
      />
      <div className="container tw-mx-auto tw-relative tw-px-[7.8rem] tw-pt-[5rem]">
        <BreadCrump
          textOne="Resource Center"
          linkOne="/resource-center"
          textTwo="Curated Resources"
          linkTwo="/resource-center/curated-resources"
          textThree="Experts"
          linkThree="/resource-center/curated-resources/slug"
          textFour="slug"
        />
        <div className="tw-relative tw-grid tw-grid-cols-3 tw-gap-5">
          <div className="tw-col-span-2 tw-flex tw-flex-col tw-gap-10  tw-pe-[6.563rem]">
            <div className="tw-font-playFair">
              <p className="tw-leading-[3.25rem] tw-tracking-[-.04rem] tw-text-h3 tw-text-midGray">
                Systemic Impact Exemplars
              </p>
              <p className=" tw-leading-[1.75rem] tw-tracking-[-.02rem] tw-font-playFairItalic tw-text-h5 tw-text-gray40 tw-font-medium tw-pt-4">
                Reports | Fields
              </p>
            </div>
            <p className="tw-font-inter tw-leading-[1.4rem]  tw-text-midGray  tw-pr-[3rem]">
              This report was conceptualised to identify and learn from
              organisations that have achieved large-scale impact by adopting
              the systems change approach. It profiles 20 of India’s leading
              SSOs, and aims to inspire and inform other social purpose
              organisations by building evidence on what works in the Indian
              context. The report serves as a comprehensive knowledge resource,
              intended to shape thinking on systems change.
            </p>
            <button className="tw-group tw-bg-darkPurple tw-border-2 tw-border-darkPurple hover:tw-bg-white  tw-transition-all  hover:tw-text-darkPurple tw-text-white hover:tw-border-2 hover:tw-border-darkPurple tw-px-7 tw-py-3 tw-flex tw-items-center tw-gap-[0.75rem] tw-w-fit tw-rounded-3xl">
              <p className=" tw-font-inter  tw-text-h9Copy5 tw-leading-[1.225rem]">
                Download
              </p>
              <div className=" tw-pt-[.1rem]">
                <DownloadFileSvg className="tw-size-[1.25rem]" />
              </div>
            </button>
            <h2 className="tw-text-h4a tw-leading-[2.113rem] tw-text-gray80 tw-font-playFair">
              Links
            </h2>
            <div className="tw-flex tw-flex-col tw-gap-[1rem]">
              <div className="tw-flex tw-w-fit tw-gap-[0.98rem] tw-px-[1.25rem] tw-py-[0.76rem] tw-bg-bgGray5 tw-rounded-full">
                <Image src={LinkSvg} alt="" className="" />
                <p className="tw-text-gray80 tw-leading-[1.4rem]">
                  theconvergencefoundation
                </p>
              </div>
              <div className="tw-flex tw-w-fit tw-gap-[0.98rem] tw-px-[1.25rem] tw-py-[0.76rem] tw-bg-bgGray5 tw-rounded-full">
                <Image src={LinkSvg} alt="" className="" />
                <p className="tw-text-gray80 tw-leading-[1.4rem]">
                  abcdxyze_loremipsum
                </p>
              </div>
            </div>
          </div>
          <div className="tw-pt-[5rem]">
            <Image
              src={Systemic}
              className=" tw-w-[25rem] tw-object-cover tw-h-[35.313rem]"
              alt="image"
            />
            <div className="tw-flex tw-pt-[1.382rem]">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerExpertsSectionOne;
