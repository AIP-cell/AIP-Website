"use client";
import React from "react";
import Image from "next/image";
import PlusSvg from "@public/svg/faq/plus.svg";
import MinusSvg from "@public/svg/faq/minus.svg";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const FaqItem = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="tw-py-7 tw-px-5 tw-flex tw-justify-between tw-w-full">
            <p
              className={`tw-text-h6M tw-font-inter ${
                open ? "tw-text-textPurple" : "tw-text-gray80"
              }`}
            >
              What is the mission of our organization?
            </p>
            <div
              className={`tw-transform tw-size-5 tw-flex tw-justify-center tw-items-center tw-transition-all tw-duration-300  ${
                open ? "tw-rotate-180" : "tw-rotate-0"
              }`}
            >
              {open ? (
                <Image src={MinusSvg} alt="Minus Image"  />
              ) : (
                <Image src={PlusSvg} alt="Plus Image" className="" />
              )}
            </div>
          </DisclosureButton>
          <DisclosurePanel className="tw-text-midGray tw-bg-bgGray5 tw-p-5  tw-rounded-t-[1.25rem] tw-font-inter tw-text-h9Copy5 tw-leading-[1.225rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Phasellus imperdiet, neque at consequat malesuada, lorem
            lectus ullamcorper nunc, at scelerisque erat risus at nulla. Integer
            nec urna non tortor fermentum commodo. Fusce sagittis, risus et
            facilisis interdum, velit nisi consectetur.
          </DisclosurePanel>
          <div className="tw-h-px tw-bg-gray20"></div>
        </>
      )}
    </Disclosure>
  );
};

export default FaqItem;
