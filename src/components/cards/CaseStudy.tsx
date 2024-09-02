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
    <div className="tw-relative tw-grid tw-grid-cols-2 tw-gap-[7.81rem]">
      <div
        className={cn(
          "tw-col-span-1 tw-flex tw-flex-col tw-items-start tw-order-2",
          { "!tw-order-1 ": index % 2 === 0 }
        )}
      >
        <h2 className="tw-font-playFair tw-text-h3 tw-leading-[3.25rem] tw-text-gray80">
          {title}
        </h2>
        <p className="tw-text-midGray tw-pt-[1.25rem] tw-leading-[1.4rem]">
          {desc}
        </p>
        <div className="tw-pt-[2.5rem]">
          <ButtonAnimation className=" tw-rounded-full  tw-border-2 tw-border-darkPurple ">
            <h3 className="tw-text-darkPurple tw-font-medium tw-text-h9Copy5 tw-leading-[1.225rem] tw-py-[0.75rem] tw-px-[1.75rem]">
              Read More
            </h3>
          </ButtonAnimation>
        </div>
      </div>
      <div
        className={cn(" tw-col-span-1  tw-overflow-hidden tw-order-1", {
          "!tw-order-2": index % 2 === 0,
        })}
      >
        <div className="tw-w-[25rem] tw-h-[20rem] tw-rounded-lg tw-relative ">
          <Image
            src={image}
            alt=""
            className="tw-absolute tw-top-0 tw-object-cover tw-h-fit"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
