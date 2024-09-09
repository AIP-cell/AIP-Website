import cn from "@/utils/tailwind";
import Image from "next/image";
import React from "react";
import { ButtonAnimation } from "../animations/ButtonAnimation";
type Props = {
  title: string;
  desc: string;
  image: string;
  index: number;
};
const CaseStudy = ({ title, desc, image, index }: Props) => {
  return (
    <div className="tw-relative tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 ~tw-gap-4/[7.81rem]">
      <div
        className={cn(
          " tw-col-span-1 tw-flex tw-justify-center  tw-overflow-hidden lg:tw-order-1",
          {
            "lg:!tw-order-2": index % 2 === 0,
          }
        )}
      >
        <div className="tw-w-full tw-h-[20rem] tw-rounded-3xl tw-overflow-hidden tw-relative ">
          <Image
            src={image}
            alt=""
            className="tw-object-cover tw-rounded-3xl tw-h-fit"
            fill
          />
        </div>
      </div>
      <div
        className={cn(
          "tw-col-span-1 tw-flex tw-flex-col tw-items-start lg:tw-order-2",
          { "lg:!tw-order-1 ": index % 2 === 0 }
        )}
      >
        <h2 className="tw-font-playFair ~tw-text-h4a/h3 tw-leading-[3.25rem] tw-text-gray80">
          {title}
        </h2>
        <p className="tw-text-midGray tw-pt-[1.25rem] tw-leading-[1.4rem]">
          {desc}
        </p>
        <div className="tw-pt-[2.5rem]">
          <ButtonAnimation className=" tw-rounded-full  tw-border-2 tw-border-darkPurple hover:tw-bg-darkPurple ">
            <h3 className="tw-text-darkPurple hover:tw-text-white tw-font-medium tw-text-h9Copy5 tw-leading-[1.225rem] tw-py-[0.75rem] tw-px-[1.75rem]">
              Read More
            </h3>
          </ButtonAnimation>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
