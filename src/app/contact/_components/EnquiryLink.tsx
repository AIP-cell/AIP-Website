import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  alt: string;
  name?: string;
  image: StaticImageData;
  data: string | number;
};

const EnquiryLink = ({ image, alt, data, name }: Props) => {
  return (
    <div className="tw-flex tw-items-center tw-gap-[.75rem] tw-pt-3">
      <div className="tw-bg-gray10 tw-w-[2.5rem] tw-h-[2.5rem] tw-rounded-full tw-flex tw-items-center tw-justify-center me-1">
        <Image src={image} className="tw-w-[1.125rem] tw-h-[0.875rem]" alt={alt} />
      </div>
      <div>
        {name && (
          <p className="tw-font-inter  tw-font-bold tw-mb-1 tw-text-gray80 ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem]">
            {name}
          </p>
        )}
        <Link href="" className="tw-font-inter ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem] tw-text-gray80">{data}</Link>
      </div>
    </div>
  );
};

export default EnquiryLink;
