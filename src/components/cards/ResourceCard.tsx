import Image from "next/image";
import Download from "@public/svg/download.svg";
import View from "@public/svg/resourcePage/view.svg";
import DownloadWhite from "@public/svg/projectsPage/downloadWhite.svg";
import React from "react";
type Props = {
  src: string;
  title: string;
  desc: string;
  category: string;
};
const ResourceCard = ({
  src,
  title,
  desc,
  category,
}: Props) => {
  return (
    // tw-justify-center
    <div className="tw-flex tw-flex-col  tw-items-center tw-gap-[0.75rem]">
      <div className="tw-relative tw-w-full tw-h-[16.594rem]">
        <Image
          src={src}
          alt="svg"
          fill
          className="tw-object-cover tw-rounded-[1.25rem]"
        />
      </div>
      <p className=" tw-w-full tw-text-h6M tw-text-gray80 tw-font-inter tw-font-semibold tw-leading-[1.575rem]">
        {title}
      </p>
      <p className="tw-text-h9Copy5 tw-text-gray50 tw-font-inter tw-leading-[1.225rem]">
        {desc}
      </p>
      <div className="tw-h-px tw-bg-footerGray tw-w-full"></div>
      <div className="tw-flex tw-justify-between tw-w-full tw-text-h9BodyCopy5 tw-text-gray50 tw-font-inter tw-leading-[1.225rem]">
        <p>11 Jul 2024</p>
        <p>{category}</p>
      </div>
      <div className="tw-h-px tw-bg-footerGray tw-w-full"></div>
      <div className="tw-flex tw-justify-start tw-w-full tw-gap-[.75rem]">
        
        <div className="tw-group tw-bg-bgGray5 tw-w-[2.5rem]  hover:tw-bg-darkPurple  tw-transition-all  tw-h-[2.5rem] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-p-[.5rem]">
          <Image
            src={View}
            className="tw-w-[1.125rem] tw-h-[0.875rem] group-hover:tw-hidden "
            alt="View"
          />

           <Image
            src={View}
            className="tw-hidden group-hover:tw-block tw-w-[1.125rem] tw-h-[0.875rem]"
            alt="View"
          />
        </div>

        <div className="tw-group tw-bg-bgGray5 tw-w-[2.5rem]  hover:tw-bg-darkPurple  tw-transition-all  tw-h-[2.5rem] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-p-[.5rem]">
          <Image
            src={Download}
            className="tw-w-[1.125rem] tw-h-[0.875rem] group-hover:tw-hidden "
            alt="download"
          />

           <Image
            src={DownloadWhite}
            className="tw-hidden group-hover:tw-block tw-w-[1.125rem] tw-h-[0.875rem]"
            alt="download"
          />
        </div>
     
      </div>
    </div>
  );
};

export default ResourceCard;
