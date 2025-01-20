"use client";
import { Radio, RadioGroup } from "@headlessui/react";
import CardAnimation from "../animations/CardAnimation";

type Props = {
  type: string;
  setType: (value: string) => void;
  radioArray: string[];
};
export default function CustomRadio({ type, setType, radioArray }: Props) {
  return (
    <div className="max-[23rem]:w-[18.5rem] ~w-[21.8rem]/[25.875rem] ">
      <RadioGroup
        //   by="name"
        value={type}
        onChange={setType}
        aria-label="Server size"
        className="flex flex-col gap-[0.75rem]"
      >
        {radioArray.map((items, index) => (
          <CardAnimation index={index} delay={0.2} key={index}>
            <Radio
              key={items}
              value={items}
              className="group relative flex items-center cursor-pointer rounded-xl bg-bgGray5 ~pl-[1.25rem]/[1.5rem] gap-[1rem] text-white  transition  data-[checked]:bg-textPurple"
            >
              <div
                className="size-[1rem] border-2 border-black rounded-full flex justify-center 
                group-data-[checked]:border-white items-center"
              >
                <div className="size-[0.5rem] border-2 border-black rounded-full opacity-0 transition group-data-[checked]:opacity-100 group-data-[checked]:border-white"></div>
              </div>
              <div className="~text-h5/h9Copy4 ~leading-[1.4rem]/[1.75rem]">
                <p className="font-medium text-midGray font-playFair py-[1.25rem] group-data-[checked]:text-white group-data-[checked]:font-playFairItalic">
                  {items}
                </p>
              </div>
            </Radio>
          </CardAnimation>
        ))}
      </RadioGroup>
    </div>
  );
}
