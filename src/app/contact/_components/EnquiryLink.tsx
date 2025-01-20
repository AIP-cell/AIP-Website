import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";

type Props = {
  alt: string;
  name?: string;
  type?: string;
  image: StaticImageData;
  data: string;
};

const EnquiryLink = ({ image, alt, data, name, type }: Props) => {
  const link = type === "email" ? `mailto:${data}` : `tel:${data}`;
  return (
    <div className="flex items-center gap-[.75rem] pt-3">
      <div className="bg-gray10 w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center me-1">
        <Image src={image} className="w-[1.125rem] h-[0.875rem]" alt={alt} />
      </div>
      <div>
        {name && (
          <p className="font-inter  font-bold mb-1 text-gray80 ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
            {name}
          </p>
        )}
        <Link
          href={link ?? ""}
          className="font-inter ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-gray80"
        >
          <ButtonAnimation>{data}</ButtonAnimation>
        </Link>
      </div>
    </div>
  );
};

export default EnquiryLink;
