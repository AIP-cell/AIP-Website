import * as React from "react"
import { SVGProps } from "react"
const LinkSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={20}
    // height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.334 10.833a4.165 4.165 0 0 0 6.283.45l2.5-2.5a4.167 4.167 0 0 0-5.892-5.891L9.792 4.317m1.875 4.85a4.165 4.165 0 0 0-6.284-.45l-2.5 2.5a4.167 4.167 0 0 0 5.892 5.891l1.425-1.425"
    />
  </svg>
)
export default LinkSvg
