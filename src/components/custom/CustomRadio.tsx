"use client";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const radioArray = [
  "I'm a Philanthropist/Foundation",
  "I'm a Researcher/Academia",
  "I’m an NPO",
  "I'm Curious",
];

export default function CustomRadio() {
  const [selected, setSelected] = useState(radioArray[0]);

  return (
    <div className="max-[23rem]:tw-w-[18.5rem] ~tw-w-[21.8rem]/[25.875rem] ">
      <RadioGroup
        //   by="name"
        value={selected}
        onChange={setSelected}
        aria-label="Server size"
        className="tw-flex tw-flex-col tw-gap-[0.75rem]"
      >
        {radioArray.map((items) => (
          <Radio
            key={items}
            value={items}
            className="tw-group tw-relative tw-flex tw-items-center tw-cursor-pointer tw-rounded-xl tw-bg-bgGray5 ~tw-pl-[1.25rem]/[1.5rem] tw-gap-[1rem] tw-text-white  tw-transition  data-[checked]:tw-bg-textPurple"
          >
            <div
              className="tw-size-[1rem] tw-border-2 tw-border-black tw-rounded-full tw-flex tw-justify-center 
              group-data-[checked]:tw-border-white tw-items-center"
            >
              <div className="tw-size-[0.5rem] tw-border-2 tw-border-black tw-rounded-full tw-opacity-0 tw-transition group-data-[checked]:tw-opacity-100 group-data-[checked]:tw-border-white"></div>
            </div>
            <div className="~tw-text-h5/h9Copy4 ~tw-leading-[1.4rem]/[1.75rem]">
              <p className="tw-font-medium tw-text-midGray tw-font-playFair tw-py-[1.25rem] group-data-[checked]:tw-text-white group-data-[checked]:tw-font-playFairItalic">
                {items}
              </p>
            </div>
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
}
