import { SVGProps } from "react";

const LeftSlickArrowSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={20}
    // height={12}
    viewBox="0 0 20 12"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1.75 6 4.583 4.583M1.75 6l4.583-4.583M1.75 6h16.5"
    />
  </svg>
  )
}

export default LeftSlickArrowSvg