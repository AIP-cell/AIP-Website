import React from "react";
import Form from "./_components/Form";
import Link from "next/link";
import MessageSvg from "@public/svg/message.svg";
import PhoneSvg from "@public/svg/phone.svg";
import WaveBg from "@public/svg/contact/peachWaveBg.svg";
import EnquiryLink from "./_components/EnquiryLink";
import Image from "next/image";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import LocationSvg from "@/components/svg/LocationSvg";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";

const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className="tw-relative tw-w-full">
        <Image
          src={WaveBg}
          alt="wave-peach"
          className="tw-absolute tw-w-[400rem] -tw-bottom-[16rem] tw-h-[65rem] "
        />
        <div className="tw-relative container tw-mx-auto ~tw-px-5/[7.8rem] tw-pt-[5rem] tw-grid md:tw-grid-cols-2">
          <BreadCrump textOne="Contacts" linkOne="/contact" />
          <div className="">
            <div className=" ~tw-pr-0/[6.625rem]">
              <p className="tw-font-playFair ~tw-text-h4/h3 tw-leading-[3.3rem]">
                Get in Touch
              </p>
              <p className="tw-font-inter tw-leading-[1.4rem] tw-mt-5 tw-text-gray60">
                Please fill the form below to connect with a specific office or
                department that can best meet your needs. Need to talk to our
                team, please use the below information to connect with them.
              </p>
            </div>
            <div className="md:tw-hidden tw-block tw-pt-10">
              <Form />
            </div>

            <div className="tw-flex tw-flex-col tw-gap-5 ~tw-pt-20/14">
              <h2 className=" tw-font-playFairItalic tw-text-h4 tw-leading-[2.6rem] tw-text-gray50">
                Reach us at
              </h2>
              <div className="~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem] tw-flex tw-flex-col tw-text-midGray">
                <span className="tw-font-bold">
                  Foundation For Accelerating Philanthropy
                </span>
                Ananda, 242 Okhla Industrial Estate Phase III
                <br />
                New Delhi, India 110020
              </div>
              <ButtonAnimation>
                <Link
                  className="tw-font-inter tw-text-textPurple hover:tw-text-white tw-flex tw-items-center tw-gap-[0.875rem] tw-bg-bgGray5 hover:tw-bg-textPurple  tw-py-3 tw-w-fit tw-h-[2.8rem] tw-rounded-[3.125rem] tw-px-[1.25rem] "
                  href=""
                >
                  <div className="">
                    <LocationSvg className="tw-size-[1.313rem] " />
                  </div>

                  <p className="tw-text-gray80 hover:tw-text-white ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem]">
                    Open Link on Maps
                  </p>
                </Link>
              </ButtonAnimation>
            </div>
            <div className=" tw-relative ~tw-py-10/[5rem]  ">
              <div className="tw-bg-bgGray5 ~tw-p-5/[2rem] tw-rounded-[1.25rem]  tw-w-full md:tw-w-[22.9rem] tw-h-[29.25 rem]">
                <p className="tw-font-playFair tw-italic tw-font-medium tw-text-gray50 tw-text-xl tw-tracking-[.02rem]">
                  General Inquiry
                </p>

                <EnquiryLink
                  image={MessageSvg}
                  alt="email"
                  data="info@indianphilanthropy.org"
                />

                <EnquiryLink
                  image={PhoneSvg}
                  alt="phone"
                  data="+91 9876543210"
                />

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

          <div className="tw-hidden md:tw-block">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
