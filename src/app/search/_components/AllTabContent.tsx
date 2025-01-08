import Image from "next/image";
import React from "react";
import audio from "@public/images/aSample.png";
import cn from "@/utils/tailwind";
import PlaySvg from "@/components/svg/PlaySvg";
import { TSearch } from "@/api/type";
import { StorageUrl } from "@/utils/BaseUrl";

const tabDatas = [
  {
    title:
      "Background and Imperatives for Funding Basic Science and Medical Research",
    desc: "The world is increasingly moving towards an innovation economy, driven by exponential progress in science and technology (S&T). To be a global leader, India needs to be at the forefront of new science and technological knowledge. We have the economic size, the talent pool, the large market size and a vibrant start-up ecosystem to both invest in research and to translate S&T knowledge into social value.",
  },
  {
    title: "Op-Ed Title",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
  {
    title: "Wealth with purpose",
    desc: "This report celebrates the seminal contributions of Indian philanthropists and acknowledges the intrinsic values and motivations that drive their giving. It also identifies critical gaps that need to be addressed to unlock the full potential of Indian philanthropy.",
  },
  {
    title: "Enabling Good Vol 11",
    desc: "a monthly roundup from the world of philanthropy. In this edition, we introduce our five new founders - radhika and kartik bharat ram, rati forbes, mathew cyriac, pankaj gupta, and swati apte and alok kshirsagar - whose expertise and shared passion for philanthropy brings remarkable value to out community.",
  },
  {
    title: "Primer",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
  {
    title: "Case Study Title",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
  {
    title: "Event Name",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
  {
    title: "Amitabh Jaipuria",
    image: "/images/aSample.png",
    desc: "an extremely versatile and experienced Organization and Business Leader with critical experiences across Business Sectors such as - Consumer Products, FMCG, ancillary Financial Services, Telecoms, Industrial and Commercial products, Agricultural products (Seeds and Biotech) as well as Business Services such as Sales Enablement, Audit and Assurance, Staffing, Facilities Management, Logistics, Training, Security, Etc.",
  },
  {
    title: "Sound Byte Title",
    image: "/images/audioSample.png",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
  {
    title: "Video Interview Title",
    video: true,
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
  {
    title: "Event Gallery Title",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
    galleryImage: [
      "/images/upcoming.png",
      "/images/upcoming.png",
      "/images/upcoming.png",
      "/images/upcoming.png",
    ],
  },
];
type Props = {
  searchData: TSearch[];
};
const AllTabContent = ({ searchData }: Props) => {
  // console.log("searchData:::", searchData);
  const arrayLength = searchData.length;
  return (
    <div className="pt-[1rem] pb-[7.46rem]">
      <div className="flex flex-col ">
        {searchData.map(
          (content, i) =>
            (content.title ||
              content.image ||
              content?.video ||
              content.description ||
              content.galleryImage ) && (
              <div
                key={i}
                className={cn("border-b-2 border-[#DFE0E5]", {
                  "border-none": i === arrayLength - 1,
                })}
              >
                {content.title && (
                  <h3 className="~text-h5/h4a font-playFair text-gray80 leading-[2.1rem] pt-[1.5rem]">
                    {content.title}
                  </h3>
                )}
                <div
                  className={cn(
                    "flex gap-[1.25rem] pt-[1rem] pb-[1.5rem]",
                    { "flex-col": content.galleryImage },
                    { "flex-col md:flex-row": content.video }
                  )}
                >
                  {content.image && (
                    <div className="shrink-0 relative ~w-[4.28rem]/[3rem] ~h-[4.548rem]/[4.3rem]">
                      <Image
                        src={StorageUrl + content.image}
                        alt=""
                        className="object-contain w-full h-full"
                        fill
                      />
                    </div>
                  )}
                  {content?.video && (
                    <div className="shrink-0 flex justify-center items-center w-[18.4rem] h-[10.37rem] rounded-3xl bg-gray80">
                      <div className="rounded-full size-[4rem] bg-textPurple flex justify-center items-center">
                        <PlaySvg className="size-[2.4rem]" />
                      </div>
                    </div>
                  )}
                  {content.description && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: content.description || "",
                      }}
                      className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-midGray"
                    ></div>
                  )}
                  {content.galleryImage && (
                    <div className="flex flex-wrap gap-[1.25rem]">
                      {content.galleryImage.map((items, index) => (
                        <div
                          key={index}
                          className="~size-[10.3rem]/[11.87rem] relative rounded-3xl overflow-hidden"
                        >
                          <Image
                            src={items.image}
                            alt="gallery-images"
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default AllTabContent;
