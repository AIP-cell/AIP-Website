import * as React from "react"
import { SVGProps } from "react"
const MinusSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={14}
    // height={3}
    viewBox="0 0 14 3"
    fill="none"
    {...props}
  >
    <path
      stroke="#91298C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 1.5h12"
    />
  </svg>
)
export default MinusSvg
