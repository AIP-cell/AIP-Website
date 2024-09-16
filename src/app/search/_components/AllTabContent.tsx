import Image from "next/image";
import React from "react";
import audio from "@public/images/audioSample.png";
import cn from "@/utils/tailwind";
import PlaySvg from "@/components/svg/PlaySvg";

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
const AllTabContent = () => {
  const arrayLength = tabDatas.length;
  return (
    <div className="tw-pt-[1rem] tw-pb-[7.46rem]">
      <div className="tw-flex tw-flex-col ">
        {tabDatas.map((content, i) => (
          <div
            key={i}
            className={cn("tw-border-b-2 tw-border-[#DFE0E5]", {
              "tw-border-none": i === arrayLength - 1,
            })}
          >
            <h3 className="tw-text-h4a tw-font-playFair tw-text-gray80 tw-leading-[2.1rem] tw-pt-[1.5rem]">
              {content.title}
            </h3>
            <div
              className={cn(
                "tw-flex tw-gap-[1.25rem] tw-pt-[1rem] tw-pb-[1.5rem]",
                { "tw-flex-col": content.galleryImage }
              )}
            >
              {content.image && (
                <div className="tw-shrink-0">
                  <Image
                    src={audio}
                    alt=""
                    className="tw-w-[3rem] tw-h-[4.3rem]"
                  />
                </div>
              )}
              {content.video && (
                <div className="tw-shrink-0 tw-flex tw-justify-center tw-items-center tw-w-[18.4rem] tw-h-[10.37rem] tw-rounded-3xl tw-bg-gray80">
                  <div className="tw-rounded-full tw-size-[4rem] tw-bg-textPurple tw-flex tw-justify-center tw-items-center">
                    <PlaySvg className="tw-size-[2.4rem]" />
                  </div>
                </div>
              )}
              <p className="tw-leading-[1.4rem] tw-text-midGray  ">
                {content.desc}
              </p>
              {content.galleryImage && (
                <div className="tw-flex tw-gap-[1.25rem]">
                  {content.galleryImage.map((items, index) => (
                    <div
                      key={index}
                      className="tw-size-[11.87rem] tw-relative tw-rounded-3xl tw-overflow-hidden"
                    >
                      <Image
                        src={items}
                        alt="gallery-images"
                        fill
                        className="tw-object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTabContent;
