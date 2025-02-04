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
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import FadeInAnimation from "@/components/animations/FadeInAnimation";
import { Api } from "@/api/Api";
import { notFound } from "next/navigation";
import { TGetInTouch } from "@/api/type";

export const dynamic = "force-dynamic";
const getContactApi = async (): Promise<TGetInTouch> => {
  const response = await Api.getContact();
  return response?.data;
};
const page = async () => {
   const response = await getContactApi();
    if (!response) {
      notFound();
    }

  return (
    <div className="pt-[5rem]">
      <div className="relative w-full">
        <Image
          src={WaveBg}
          alt="wave-peach"
          className="absolute w-[400rem] -bottom-[5rem] h-[65rem] "
        />
        <div className="relative container mx-auto ~px-[1.25rem]/[7.8rem]">
          <div className=" pt-[5rem] grid md:grid-cols-2">
            <BreadCrump textOne="Contacts" linkOne="/contact" />
            <div className=" ">
              <WordStaggerAnimation
                text="Get in Touch"
                className="font-playFair ~text-h4/h3 leading-[3.3rem]"
              />
              <FadeInAnimation delay={0.1} x1={-20} x2={0}>
                <p className="font-inter text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] pt-[1.25rem]  text-midGray md:text-gray60">
                  Please fill the form below to connect with a specific office
                  or department that can best meet your needs. Need to talk to
                  our team, please use the below information to connect with
                  them.
                </p>
              </FadeInAnimation>
            </div>
          </div>
          <div className="~pt-[2.5rem]/[1.813rem]">
            <FadeInAnimation x1={-20} x2={0} delay={0.1}>
              <Form />
            </FadeInAnimation>
          </div>

          {/* <div className="hidden md:block">
            <Form />
          </div> */}
          <div className=" grid lg:grid-cols-2 ~py-[5rem]/[7.106rem] ~gap-[2.5rem]/0">
            <div className=" relative ">
              <div className="bg-bgGray5 ~p-5/[2rem] rounded-[1.25rem]  w-full md:w-[22.9rem] h-[29.25 rem]">
                <p className="font-playFair italic font-medium text-gray50 text-xl tracking-[.02rem]">
                  General Inquiry
                </p>

                <EnquiryLink
                  image={MessageSvg}
                  alt="email"
                  type="email"
                  data={response.email}
                />

                <EnquiryLink
                  image={PhoneSvg}
                  alt="phone"
                  type="phone"
                  data={response.phoneNumber}
                />

                <div className="h-px bg-footerGray mt-5 mb-5"></div>

                {/* <p className="font-playFair italic font-medium text-gray50 text-xl tracking-[.02rem]">
                  Network Team
                </p> */}
                <EnquiryLink
                  image={MessageSvg}
                  alt="email"
                  type="email"
                  data={response?.networkTeamEmail}
                  name={response?.networkTeamName}
                />
                <div className="h-px bg-footerGray mt-5 mb-5"></div>

                {/* <p className="font-playFair italic font-medium text-gray50 text-xl tracking-[.02rem]">
                  Knowledge Team
                </p> */}
                <EnquiryLink
                  image={MessageSvg}
                  alt="email"
                  type="email"
                  data={response?.knowlwdgeTeamEmail}
                  name={response?.knowlwdgeTeamName}
                />
              </div>
            </div>
            <div className="lg:pl-[7.875rem] flex flex-col gap-5 ~pt-20/14 justify-end">
              <FadeInAnimation delay={0.1} x1={20} x2={0}>
                <h2 className=" font-playFairItalic text-h4 leading-[2.6rem] text-gray50">
                  Reach us at
                </h2>
              </FadeInAnimation>
              <div className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] flex flex-col text-midGray">
                <span className="font-bold">
                  Foundation For Accelerating Philanthropy
                </span>
                Ananda, 242 Okhla Industrial Estate Phase III
                <br />
                New Delhi, India 110020
              </div>
              <ButtonAnimation>
                <Link
                  className="group font-inter text-textPurple hover:text-white flex items-center gap-[0.875rem] bg-bgGray5 hover:bg-textPurple  py-3 w-fit h-[2.8rem] rounded-[3.125rem] px-[1.25rem] "
                  href=""
                >
                  <div className="">
                    <LocationSvg className="size-[1.313rem] " />
                  </div>

                  <p className="text-gray80 group-hover:text-white ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
                    Open Link on Maps
                  </p>
                </Link>
              </ButtonAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
