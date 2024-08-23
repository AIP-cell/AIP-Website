import React from 'react'
type Props={
    type:string,
    label:string,
    placeholder:string,
}
const InputField = ({ type,  label ,placeholder}:Props) => {
  return (
    <>
          <label
        className="text-[.875rem] font-inter leading-[1.225rem] text-gray80"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-[3.25rem] font-inter p-5 border border-gray-300 rounded-md text-gray80" />
    </>
  )
}
export default InputField