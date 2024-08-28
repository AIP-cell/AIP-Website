import React from "react";
import Form from "./_components/Form";
import Link from "next/link";
import MessageSvg from "@public/svg/message.svg";
import PhoneSvg from "@public/svg/phone.svg";
import LocationSvg from "@public/svg/location.svg";
import WaveBg from "@public/svg/contact/peachWaveBg.svg";
import EnquiryLink from "./_components/EnquiryLink";
import Image from "next/image";

const page = () => {
  return (
    <div className="tw-relative container tw-mx-auto tw-px-[7.8rem] tw-pt-[5rem] tw-grid md:tw-grid-cols-2">
        <Image src={WaveBg} alt="" className="tw-absolute tw-inset-x-0 -tw-bottom-[15rem]" />
      <div className="tw-absolute tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
        <Link
          href=""
          className="tw-text-gray50 tw-text-h9BodyCopy5 tw-leading-[19.6px]"
        >
          {"<"} Contacts
        </Link>
      </div>
      <div className="tw-col-span-1 ">
        <div className="tw-flex tw-flex-col tw-gap-14 tw-pr-[6.625rem]">
          <div>
            <p className="tw-font-playFair tw-text-h3Heading3 tw-leading-[3.3rem]">
              Get in Touch
            </p>
            <p className="tw-font-inter tw-leading-[1.4rem] tw-mt-5 tw-text-gray60">
              Please fill the form below to connect with a specific office or
              department that can best meet your needs. Need to talk to our
              team, please use the below information to connect with them.
            </p>
          </div>

          <div className="tw-flex tw-flex-col tw-gap-5">
            <h2 className="tw-italic tw-font-playFair tw-text-h4Heading4 tw-leading-[2.6rem] tw-text-gray50">
              Reach us at
            </h2>
            <p className="tw-font-inter tw-leading-[1.4rem] tw-flex tw-flex-col tw-text-midGray">
              <span className="tw-font-bold">
                {" "}
                Foundation For Accelerating Philanthropy
              </span>
              Ananda, 242 Okhla Industrial Estate Phase III
              <br />
              New Delhi, India 110020
            </p>
            <Link
              className="tw-font-inter tw-flex tw-gap-[1.144rem] tw-bg-bgGray5 tw-px-5 tw-py-3 tw-w-[13.8rem] tw-h-[2.8rem] tw-rounded-[3.125rem] tw-leading-[1.4rem] tw-text-gray80"
              href=""
            >
              <Image
                src={LocationSvg}
                className="tw-w-[.766rem] tw-h-[0.971rem] tw-mt-[.2rem]"
                alt="location"
              />
              <p> Open Link on Maps</p>
            </Link>
          </div>
        </div>
        <div className=" tw-relative tw-pb-[5rem] tw-pt-[5rem]  ">
          <div className="tw-bg-bgGray5 tw-p-[2rem] tw-rounded-[1.25rem]  tw-w-[22.9rem] tw-h-[29.25 rem]">
            <p className="tw-font-playFair tw-italic tw-font-medium tw-text-gray50 tw-text-xl tw-tracking-[.02rem]">
              General Inquiry
            </p>

            <EnquiryLink
              image={MessageSvg}
              alt="email"
              data="info@indianphilanthropy.org"
            />

            <EnquiryLink image={PhoneSvg} alt="phone" data="+91 9876543210" />

            <div className="tw-h-px tw-bg-footerGray tw-mt-5 tw-mb-5"></div>

            <p className="tw-font-playFair tw-italic tw-font-medium tw-text-gray50 tw-text-xl tw-tracking-[.02rem]">
              Network Team
            </p>
            <EnquiryLink
              image={MessageSvg}
              alt="email"
              data="sabhyata@indianphilanthropy.org"
              name="Sabhayata Prakash"
            />
            <div className="tw-h-px tw-bg-footerGray tw-mt-5 tw-mb-5"></div>

            <p className="tw-font-playFair tw-italic tw-font-medium tw-text-gray50 tw-text-xl tw-tracking-[.02rem]">
              Knowledge Team
            </p>
            <EnquiryLink
              image={MessageSvg}
              alt="email"
              data="vishal@indianphilanthropy.org"
              name="Vishal Dutta"
            />
          </div>
        </div>
      </div>

      <div className="tw-col-span-1">
        <Form />
      </div>
    </div>
  );
};

export default page;
