import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <div className="container tw-mx-auto tw-relative  tw-pl-[7.8rem] tw-pt-[5rem]">
    <div className="tw-absolute tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
      <Link
        href=""
        className="tw-text-gray50 tw-text-h9BodyCopy5 tw-leading-[19.6px]"
      >
        {"<"} Resource Center / AIP Resources / &nbsp;/&nbsp;
      </Link>
      <Link href="#">Reports</Link>
    </div></div>
  )
}

export default page