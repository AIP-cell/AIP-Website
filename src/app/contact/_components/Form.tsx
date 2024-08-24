import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const Form = () => {
  // const options =[1,2,3];
  return (
    <form className="tw-flex tw-flex-col tw-gap-7">
      <InputField type="text" label="Name" placeholder="John Doe" />

      <InputField type="email" label=" Email ID" placeholder="john@xyz.com" />

      <SelectField
        label="I'm a"
        // options={options}
        placeholder="Philanthropist"
      />
      <SelectField
        label="I want to get in touch with"
        placeholder="Philanthropist"
      />

      <div>
        <label className="tw-font-inter tw-leading-[1.225rem] tw-text-sm tw-font-semibold tw-text-gray80">
          Message
        </label>
        <textarea className=" tw-w-full tw-border tw-border-gray-300 tw-rounded-md tw-text-gray80 tw-font-inter tw-h-28" />
      </div>

      <button
        type="submit"
        className="tw-text-white tw-leading-[1.225rem] tw-bg-darkPurple tw-w-[8.0625rem] tw-h-[2.75rem] tw-rounded-[1.5rem] tw-cursor-pointer"
      >
        Send Email
      </button>
    </form>
  );
};

export default Form;
