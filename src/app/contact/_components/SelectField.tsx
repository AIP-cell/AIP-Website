import React from "react";
type Props = {
  // options:string,
  label: string;
  placeholder: string;
};
const SelectField = ({ label, placeholder }: Props) => {
  return (
    <div>
      <label className="font-inter leading-[1.225rem] text-sm font-semibold text-gray80">
        {label}
      </label>
      <select
        className="w-full h-[3.25rem] p-2 border border-gray-300 rounded-md"
        defaultValue=""
      >
        <option value="" disabled hidden className="text-gray80">
          {placeholder}
        </option>
        {/* {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))} */}
      </select>
    </div>
  );
};

export default SelectField;
