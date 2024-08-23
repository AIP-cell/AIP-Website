import React from 'react'
import Form from './_components/Form'
import Link from 'next/link'
import MessageSvg from "@public/svg/message.svg";
import PhoneSvg from "@public/svg/phone.svg";
import EnquiryLink from './_components/EnquiryLink';

const page = () => {
  return (

    <div className="container mx-auto grid md:grid-cols-2">

     <div>
     <div className="flex flex-col gap-14 pr-[6.625rem]">
        <div >
        <p className="font-playFair text-h3Heading3 leading-[3.3rem]" >Get in Touch</p>
        <p className="font-inter leading-[1.4rem] mt-5 text-gray60">
          Please fill the form below to connect with a specific office or department that can best meet your needs. Need to talk to our team, please use the below information to connect with them.
        </p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="italic font-playFair text-h4Heading4 leading-[2.6rem] text-gray50">Reach us at</h2>
          <p className="font-inter leading-[1.4rem] flex flex-col text-midGray">
          <span className="font-bold" > Foundation For Accelerating Philanthropy</span>
            Ananda, 242 Okhla Industrial Estate Phase III<br />
            New Delhi, India 110020
          </p>
          <Link className="font-inter bg-bgGray5 px-5 pt-3 pb-3 w-[221px] h-[46px] rounded-[3.125rem] leading-[1.4rem] text-gray80" 
            href=""
          >
            Open Link on Maps
          </Link>
        </div>
</div>

      <div className="bg-bgGray5 p-[2rem] rounded-[1.25rem] mt-14 w-[22.5rem] h-[29.25 rem]">
      <p className="font-playFair italic font-medium text-gray50 text-xl tracking-[.02rem]" >General Inquiry</p>

<EnquiryLink image={MessageSvg} alt="email" data="info@indianphilanthropy.org"/>
<EnquiryLink image={PhoneSvg} alt="phone" data="+91 9876543210"/>
          <div className='h-px bg-footerGray mt-5 mb-5'></div>

          <p className="font-playFair italic font-medium text-gray50 text-xl tracking-[.02rem]">Network Team</p>
<EnquiryLink image={MessageSvg} alt="email" data="sabhyata@indianphilanthropy.org" name="Sabhayata Prakash"/>
<div className='h-px bg-footerGray mt-5 mb-5'></div>

          <p className="font-playFair italic font-medium text-gray50 text-xl tracking-[.02rem]">Knowledge Team</p>
<EnquiryLink image={MessageSvg} alt="email" data="vishal@indianphilanthropy.org"  name="Vishal Dutta"/>

      </div>
      </div>

     <Form/>
    </div>


  )
}

export default page