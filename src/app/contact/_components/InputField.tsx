import React from "react";
type Props = {
  type: string;
  label: string;
  placeholder: string;
};
const InputField = ({ type, label, placeholder }: Props) => {
  return (
    <div>
      <label className="tw-font-inter tw-leading-[1.225rem] tw-text-sm tw-font-semibold tw-text-gray80">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="tw-w-full tw-h-[3.25rem] tw-font-inter tw-p-5 tw-border tw-border-gray-300 tw-rounded-md tw-text-gray80"
      />
    </div>
  );
};
export default InputField;
