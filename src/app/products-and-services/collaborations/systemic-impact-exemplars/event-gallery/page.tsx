import React from 'react'
import projectBg from "@public/svg/projectsPage/projectBg.svg";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className=" tw-relative tw-overflow-hidden">
    <Image
      src={projectBg}
      alt="bg"
      className="tw-left-60 tw-absolute tw-top-[-5rem] "
    />
    <div className="container tw-mx-auto tw-relative tw-px-[7.8rem] tw-pt-[5rem]">
      <div className="tw-absolute tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
        <Link
          href=""
          className="tw-text-gray50 tw-text-h9BodyCopy5 tw-leading-[19.6px]"
        >
          {"<"}Products & Services &nbsp;/ Collaborations&nbsp;/ Systemic Impact Exemplars&nbsp;/&nbsp;
        </Link>
        <Link href="#">Event Gallery</Link>
      </div>

      <p className="tw-font-inter  tw-font-semibold tw-uppercase tw-leading-[1.3rem] tw-text-purple40">
      Systemic Impact Exemplars
      </p>
      <p className="tw-leading-[2.6rem] tw-font-playFair tw-text-h4 tw-text-gray80 tw-pt-5 tw-pb-[5rem] tw-tracking-[-0.02rem]">
      AIP hosts events across cities in the world. AIP is continuously bringing inspirational
philanthropists together to help co-create this network
and establish personal philanthropy as a means
for India’s transformation.
      </p>
      </div>
      </div>
  )
}

export default page