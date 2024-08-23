import React from 'react'
import Form from './_components/Form'
import Link from 'next/link'

const page = () => {
  return (

    <div className="container mx-auto grid md:grid-cols-2">

      <div className="flex flex-col gap-14 pr-[6.625rem]">
      <div >
      <h1 className="font-playFair text-h3Heading3 leading-[3.3rem]" >Get in Touch</h1>
      <p className="font-inter leading-[1.4rem] mt-5">
        Please fill the form below to connect with a specific office or department that can best meet your needs. Need to talk to our team, please use the below information to connect with them.
      </p>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="italic font-playFair text-h4Heading4 leading-[2.6rem] text-gray50">Reach us at</h2>
        <p className="font-inter leading-[1.4rem] flex flex-col">
         <span className="font-bold" > Foundation For Accelerating Philanthropy</span>
          Ananda, 242 Okhla Industrial Estate Phase III<br />
          New Delhi, India 110020
        </p>
        <Link className="font-inter bg-bgGray5 px-5 pt-3 pb-3 w-[221px] h-[46px] rounded-full leading-[1.4rem]" 
          href=""
        >
          Open Link on Maps
        </Link>
      </div>


      <div className="bg-red-500 p-[2rem] rounded-md">
        <div className="">
          <h3 className="text-xl font-semibold">General Inquiry</h3>
          <p className="font-inter leading-[1.4rem]">info@indianphilanthropy.org</p>
          <p className="font-inter leading-[1.4rem]">+91 9876543210</p>
          <div className='h-px bg-footerGray'></div>
        </div>
        <div className="">
          <h3 className="italic font-playFair text-h5Heading5 leading-[1.75rem] text-gray50 tracking-[-2%]">Network Team</h3>
          <p className="font-inter leading-[1.4rem] font-bold">Sabhayata Prakash</p>
          <p className="font-inter leading-[1.4rem]">sabhyata@indianphilanthropy.org</p>
          <div className='h-px bg-footerGray'></div>
        </div>
        <div className="">
          <h3 className="italic font-playFair text-h5Heading5 leading-[1.75rem] text-gray50 tracking-[-2%]">Knowledge Team</h3>
          <p className="font-inter leading-[1.4rem] font-bold">Vishal Dutta</p>
          <p className="font-inter leading-[1.4rem]">vishal@indianphilanthropy.org</p>
        </div>
      </div>
      </div>

      <div>

     <Form/>
    </div>




</div>
  )
}

export default page