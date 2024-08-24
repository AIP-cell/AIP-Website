import React from 'react'
import InputField from './InputField'
import SelectField from './SelectField'

const Form = () => {

  // const options =[1,2,3];
  return (
    <form className="flex flex-col gap-7">

    <InputField type="text" label="Name" placeholder='John Doe' />

    <InputField type="email" label=" Email ID" placeholder='john@xyz.com' />


    <SelectField label="I'm a"
      // options={options}
        placeholder="Philanthropist" />
    <SelectField label="I want to get in touch with" placeholder='Philanthropist' />

    <div>
      <label 
         className="font-inter leading-[1.225rem] text-sm font-semibold text-gray80">
        Message
      </label>
      <textarea
        className="w-full border border-gray-300 rounded-md text-gray80 font-inter h-28"
      />
    </div> 


    <button
      type="submit"
      className="text-white leading-[1.225rem] bg-darkPurple w-[8.0625rem] 
        h-[2.75rem]
        rounded-[1.5rem] cursor-pointer" 
    >
      Send Email
    </button>
  </form>

  )
}

export default Form