"use client";
import React from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";

const FaqItem = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="tw-py-7 tw-px-5 tw-flex tw-justify-between tw-w-full">
            <p
              className={`tw-text-h6M ${
                open ? "tw-text-textPurple" : "tw-text-gray80"
              }`}
            >
              What is the mission of our organization?
            </p>
            <div
              className={`tw-transform tw-transition-transform tw-duration-300 ${
                open ? "tw-rotate-180" : "tw-rotate-0"
              }`}
            >
              {open ? (
                <MinusIcon className="tw-w-3 tw-h-3" />
              ) : (
                <PlusIcon className="tw-w-3 tw-h-3" />
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
