import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
import Image from "next/image";

import PurpleTopSvg from "@public/svg/products-and-services/project-and-programs/topRightPurpleCurve.svg";
import BottomBg from "@public/svg/products-and-services/project-and-programs/bottomBgHeroSection.svg";
import LinkSvg from "@public/svg/linkingPurple.svg";

import Systemic from "@public/svg/projects-page/systemic.png";

import BreadCrump from "@/components/bread-crump/BreadCrump";
import InnerCollaborationsVideo from "@/app/our-work/collaborations/[slug]/_components/InnerCollaborationsVideo";
import { TCuratedResourcesInner } from "@/api/type";
import { StorageUrl } from "@/utils/BaseUrl";

type Props = {
  innerData: TCuratedResourcesInner;
};
const InnerExpertsSectionOne = ({ innerData }: Props) => {
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
                  {innerData.title}
                </p>
                <p className="font-medium  leading-[1.75rem]  font-playFair text-h5 text-gray80 pt-[1rem]">
                  By{" "}
                  <span className="underline underline-offset-3 decoration-[1.5px]">
                    Karthik Muralidharan
                  </span>
                </p>
                <p className=" leading-[1.75rem]  font-playFairItalic text-h5 text-gray40 font-medium pt-[1rem]">
                  {innerData.domain}
                  {/* Reports | Fields */}
                </p>
              </div>
              <p className="font-inter leading-[1.4rem]  text-midGray  pt-[1rem] ~pr-0/[3rem]">
                {innerData.description}
              </p>
            </div>
            <div className="block xl:hidden ">
              <div className="relative w-full h-[30.89rem]">
                <Image
                  src={StorageUrl + innerData.image}
                  className="  object-cover "
                  fill
                  alt="image"
                />
              </div>
            </div>
            <div className="">
              <p className="block md:hidden text-h6M text-gray80 font-playFair leading-[1.575rem]">
                Launch Details
              </p>
              <a href={innerData.fileLink} download className="mt-[1rem] group bg-darkPurple border-2 border-darkPurple hover:bg-white  transition-all  hover:text-darkPurple text-white hover:border-2 hover:border-darkPurple px-7 py-3 flex items-center gap-[0.75rem] w-fit rounded-3xl">
                <p className=" font-inter  text-h9Copy5 leading-[1.225rem]">
                  Download
                </p>
                <div className=" pt-[.1rem]">
                  <DownloadFileSvg className="size-[1.25rem]" />
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h2 className="~text-h6M/h4a ~leading-[1.575rem]/[2.113rem] text-gray80 font-playFair  ~pb-0/[1.5rem]">
                Links
              </h2>
              {innerData.links.map((link, i) => (
                <div
                  key={i}
                  className="flex w-[17.375rem] gap-[0.98rem] ~pl-[1rem]/[1.25rem] ~py-[0.875rem]/[0.75rem] bg-bgGray5 rounded-full"
                >
                  <Image src={LinkSvg} alt="" className="" />
                  <p className="text-gray80 ~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4">
                    {link.link}
                  </p>
                </div>
              ))}
              {/* <div className="flex w-[17.375rem] gap-[0.98rem] ~pl-[1rem]/[1.25rem] ~py-[0.875rem]/[0.75rem] bg-bgGray5 rounded-full">
                <Image src={LinkSvg} alt="" className="" />
                <p className="text-gray80 ~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4">
                  abcdxyze_loremipsum
                </p>
              </div> */}
            </div>
          </div>
          <div className="hidden xl:block pt-[5rem]">
            <div className="relative  w-[25rem] h-[35.313rem]">
              <Image
                src={StorageUrl + innerData.image}
                className="object-cover"
                fill
                alt="image"
              />
            </div>
          </div>
        </div>
        <InnerCollaborationsVideo video={innerData.video} />
      </div>
    </div>
  );
};

export default InnerExpertsSectionOne;
