import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import CustomSelect from "@/components/custom/CustomSelect";
import CustomRadio from "@/components/custom/CustomRadio";

const Form = () => {
  // const options =[1,2,3];
  return (
    <form className="flex flex-col  ">
      <div className="grid lg:grid-cols-2 ~gap-[2.5rem]/0">
        <div>
          <CustomRadio />
        </div>
        <div className="flex flex-col md:pr-[7.875rem] lg:pl-[7.875rem] w-full ~gap-[1.75rem]/0">
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
          {/* <div className="w-full">
            <label className="font-inter leading-[1.225rem] text-sm font-semibold text-gray80 pb-[0.25rem]">
              Im a
            </label>
            <CustomSelect optionsArray={["Philanthropist", "Philanthropist"]} />
          </div> */}
          {/* <div className="w-full">
            <label className="font-inter leading-[1.225rem] text-sm font-semibold text-gray80 pb-[0.25rem]">
              I want to get in touch with
            </label>
            <CustomSelect optionsArray={["select", "hello"]} />
          </div> */}
          {/* <SelectField
            label="I want to get in touch with"
            placeholder="Philanthropist"
          /> */}

          <div>
            <label className="font-inter leading-[1.225rem] text-sm font-semibold text-gray80">
              Message
            </label>
            <textarea
              placeholder="Please type your message"
              className=" pt-[1rem] pl-[1.25rem] w-full border border-gray-300 rounded-md text-gray80 font-inter h-28"
            />
          </div>

          <ButtonAnimation
            type="submit"
            className="text-white hover:text-darkPurple leading-[1.225rem] bg-darkPurple hover:bg-white w-[8.0625rem] h-[2.75rem] rounded-[1.5rem] cursor-pointer"
          >
            Send Email
          </ButtonAnimation>
        </div>
      </div>
    </form>
  );
};

export default Form;
