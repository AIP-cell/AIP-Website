import React from 'react'
type Props={
    // options:string,
    label:string,
    placeholder:string,
}
const SelectField = ({ label, placeholder}:Props ) => {
  return (
    <> 
    <label
      className="block text-[.875rem] font-inter leading-[1.225rem] text-gray-800"
    >
      {label}
    </label>
    <select
      className="w-full h-[3.25rem] p-2 border border-gray-300 rounded-md"
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
    </>
  )
}

export default SelectField