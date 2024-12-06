import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import CustomSelect from "@/components/custom/CustomSelect";
import CustomRadio from "@/components/custom/CustomRadio";

const Form = () => {
  // const options =[1,2,3];
  return (
    <form className="tw-flex tw-flex-col  ">
      <div className="tw-grid lg:tw-grid-cols-2 ~tw-gap-[2.5rem]/0">
        <div>
          <CustomRadio />
        </div>
        <div className="tw-flex tw-flex-col md:tw-pr-[7.875rem] lg:tw-pl-[7.875rem] tw-w-full ~tw-gap-[1.75rem]/0">
          <InputField type="text" label="Name" placeholder="Enter your name" />
          <InputField
            type="email"
            label=" Email ID"
            placeholder="Enter your email"
          />

          {/* <SelectField
            label="I'm a"
            placeholder="Philanthropist"
          /> */}
          {/* <div className="tw-w-full">
            <label className="tw-font-inter tw-leading-[1.225rem] tw-text-sm tw-font-semibold tw-text-gray80 tw-pb-[0.25rem]">
              Im a
            </label>
            <CustomSelect optionsArray={["Philanthropist", "Philanthropist"]} />
          </div> */}
          {/* <div className="tw-w-full">
            <label className="tw-font-inter tw-leading-[1.225rem] tw-text-sm tw-font-semibold tw-text-gray80 tw-pb-[0.25rem]">
              I want to get in touch with
            </label>
            <CustomSelect optionsArray={["select", "hello"]} />
          </div> */}
          {/* <SelectField
            label="I want to get in touch with"
            placeholder="Philanthropist"
          /> */}

          <div>
            <label className="tw-font-inter tw-leading-[1.225rem] tw-text-sm tw-font-semibold tw-text-gray80">
              Message
            </label>
            <textarea
              placeholder="Please type your message"
              className=" tw-pt-[1rem] tw-pl-[1.25rem] tw-w-full tw-border tw-border-gray-300 tw-rounded-md tw-text-gray80 tw-font-inter tw-h-28"
            />
          </div>

          <ButtonAnimation
            type="submit"
            className="tw-text-white hover:tw-text-darkPurple tw-leading-[1.225rem] tw-bg-darkPurple hover:tw-bg-white tw-w-[8.0625rem] tw-h-[2.75rem] tw-rounded-[1.5rem] tw-cursor-pointer"
          >
            Send Email
          </ButtonAnimation>
        </div>
      </div>
    </form>
  );
};

export default Form;
