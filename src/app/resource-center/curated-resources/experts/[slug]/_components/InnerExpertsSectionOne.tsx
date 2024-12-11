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
    <div className="relative w-full ~pb-[3rem]/[5.75rem]">
      <Image
        src={PurpleTopSvg}
        alt="purple-curve"
        className="hidden md:block absolute top-[8rem] right-0"
      />
      <div className="container mx-auto relative ~px-[1.25rem]/[7.8rem] pt-[5rem]">
        <BreadCrump
          textOne="Resource Center"
          linkOne="/resource-center"
          textTwo="Curated Resources"
          linkTwo="/resource-center/curated-resources"
          textThree="Experts"
          linkThree="/resource-center/curated-resources/slug"
          textFour="slug"
        />
        <div className="relative grid md:grid-cols-3 gap-5 ~pb-[3rem]/0">
          <div className="col-span-2 flex flex-col ~gap-[2rem]/[2.5rem]  ~pe-0/[6.563rem]">
            <div>
              <div className="font-playFair">
                <p className="leading-[3.25rem] tracking-[-.04rem] text-h3 text-midGray ">
                  Systemic Impact Exemplars
                </p>
                <p className="font-medium  leading-[1.75rem]  font-playFair text-h5 text-gray80 pt-[1rem]">
                  By{" "}
                  <span className="underline underline-offset-3 decoration-[1.5px]">
                    Karthik Muralidharan
                  </span>
                </p>
                <p className=" leading-[1.75rem]  font-playFairItalic text-h5 text-gray40 font-medium pt-[1rem]">
                  Reports | Fields
                </p>
              </div>
              <p className="font-inter leading-[1.4rem]  text-midGray  pt-[1rem] ~pr-0/[3rem]">
                This report was conceptualised to identify and learn from
                organisations that have achieved large-scale impact by adopting
                the systems change approach. It profiles 20 of India’s leading
                SSOs, and aims to inspire and inform other social purpose
                organisations by building evidence on what works in the Indian
                context. The report serves as a comprehensive knowledge
                resource, intended to shape thinking on systems change.
              </p>
            </div>
            <div className="block md:hidden ">
              <Image
                src={Systemic}
                className=" w-full object-cover h-[30.89rem]"
                alt="image"
              />
            </div>
            <div className="">
              <p className="block md:hidden text-h6M text-gray80 font-playFair leading-[1.575rem]">
                Launch Details
              </p>
              <button className="mt-[1rem] group bg-darkPurple border-2 border-darkPurple hover:bg-white  transition-all  hover:text-darkPurple text-white hover:border-2 hover:border-darkPurple px-7 py-3 flex items-center gap-[0.75rem] w-fit rounded-3xl">
                <p className=" font-inter  text-h9Copy5 leading-[1.225rem]">
                  Download
                </p>
                <div className=" pt-[.1rem]">
                  <DownloadFileSvg className="size-[1.25rem]" />
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h2 className="~text-h6M/h4a ~leading-[1.575rem]/[2.113rem] text-gray80 font-playFair  ~pb-0/[1.5rem]">
                Links
              </h2>
              <div className="flex w-[17.375rem] gap-[0.98rem] ~pl-[1rem]/[1.25rem] ~py-[0.875rem]/[0.75rem] bg-bgGray5 rounded-full">
                <Image src={LinkSvg} alt="" className="" />
                <p className="text-gray80 ~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4">
                  theconvergencefoundation
                </p>
              </div>
              <div className="flex w-[17.375rem] gap-[0.98rem] ~pl-[1rem]/[1.25rem] ~py-[0.875rem]/[0.75rem] bg-bgGray5 rounded-full">
                <Image src={LinkSvg} alt="" className="" />
                <p className="text-gray80 ~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4">
                  abcdxyze_loremipsum
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block pt-[5rem]">
            <Image
              src={Systemic}
              className=" w-[25rem] object-cover h-[35.313rem]"
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
