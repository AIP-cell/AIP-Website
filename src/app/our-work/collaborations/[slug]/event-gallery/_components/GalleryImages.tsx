import LeftSlickArrowSvg from "@/components/svg/LeftSlickArrowSvg";
import RightSlickArrowSvg from "@/components/svg/RightSlickArrowSvg";
import Image from "next/image";
import React from "react";

const ImageArray = [
  {
    src: "/images/galleryVideoThumbnail.png",
    desc: "Amitabh at Systemic Impact Exemplars launch",
    ddmmyy: "11 Jul 2024",
  },
];
const GalleryImages = () => {
  return (
    <div className="tw-pt-[6.175rem]">
      <h2 className="tw-text-h2 tw-text-gray80 tw-leading-[3.3rem] tw-font-playFair !tw-text-center tw-w-full tw-pb-[5rem]">
        Images
      </h2>
      <div className="tw-relative tw-w-full tw-flex tw-items-center tw-justify-center">
        <button className=" tw-absolute tw-left-0 tw-text-white tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tl-3xl tw-rounded-bl-3xl tw-rounded-tr-xl tw-rounded-br-xl tw-py-[1.15rem] tw-px-[0.92rem]">
          <LeftSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
        </button>
        <button className=" tw-absolute tw-right-0 tw-text-white  tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tr-3xl tw-rounded-br-3xl tw-rounded-tl-xl tw-rounded-bl-xl tw-py-[1.15rem] tw-px-[0.92rem]">
          <RightSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
        </button>
        <div>
          <div className="tw-relative tw-w-[51.25rem] tw-h-[34.167rem] tw-rounded-xl tw-overflow-hidden tw-flex tw-items-center tw-justify-center">
            <Image
              src={ImageArray.at(0)!.src}
              alt=""
              fill
              className="tw-object-cover tw-z-10"
            />
          </div>
          <div className="tw-flex tw-justify-between tw-gap-[3rem] tw-pt-[0.75rem]">
            <div className="tw-leading-[1.4rem] tw-font-bold  tw-text-midGray">
              <p className="">{ImageArray.at(0)!.desc}</p>
            </div>
            <p className="tw-leading-[1.4rem] tw-text-midGray">
              {ImageArray.at(0)!.ddmmyy}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
