"use client";
import React from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';

const FaqItem = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="py-7 px-5 flex justify-between w-full">
          <p className={`text-h6Heading6M ${open ? 'text-textPurple' : 'text-gray80'}`}>
        What is the mission of our organization?
        </p>
        <div className={`transform transition-transform duration-300 ${
                open ? 'rotate-180' : 'rotate-0'
              }`}>
         {open ? (
                <MinusIcon className="w-3 h-3" />
              ) : (
                <PlusIcon className="w-3 h-3" />
              )}
        </div>
      </DisclosureButton>
      <DisclosurePanel className="text-midGray bg-bgGray5 p-5  rounded-t-[1.25rem] font-inter text-h9BodyCopy5 leading-[1.225rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Phasellus imperdiet, neque at consequat malesuada, lorem lectus
        ullamcorper nunc, at scelerisque erat risus at nulla. Integer nec urna
        non tortor fermentum commodo. Fusce sagittis, risus et facilisis
        interdum, velit nisi consectetur.
      </DisclosurePanel>
      <div className="h-px bg-gray20"></div>
        </>
      )}
    </Disclosure>
  );
};

export default FaqItem;
