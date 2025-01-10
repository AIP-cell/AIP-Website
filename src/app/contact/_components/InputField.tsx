import React from "react";
import {
  FieldError,
  FieldErrors,
  UseFormRegisterReturn,
} from "react-hook-form";
type Props = {
  type: string;
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
};
const InputField = ({ type, label, placeholder, register, error }: Props) => {
  return (
    <div>
      <label className="font-inter leading-[1.225rem] text-sm font-semibold text-gray80">
        {label}
      </label>
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        className="w-full h-[3.25rem] font-inter p-5 border border-gray-300 rounded-md text-gray80"
      />
      {error && (
        <p className=" text-red-500 ">{`${error?.message}`}</p>
      )}
    </div>
  );
};
export default InputField;
