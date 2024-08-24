import React from 'react'
type Props={
    // options:string,
    label:string,
    placeholder:string,
}
const SelectField = ({ label, placeholder}:Props ) => {
  return (
    <div> 
    <label
       className="tw-font-inter tw-leading-[1.225rem] tw-text-sm tw-font-semibold tw-text-gray80"
    >
      {label}
    </label>
    <select
      className="tw-w-full tw-h-[3.25rem] tw-p-2 tw-border tw-border-gray-300 tw-rounded-md"
      defaultValue=""
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {/* {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))} */}
    </select>
    </div>
  )
}

export default SelectField