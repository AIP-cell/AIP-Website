import * as React from "react"
import { SVGProps } from "react"
const PlusSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={14}
    // height={15}
    viewBox="0 0 14 15"
    fill="none"
    {...props}
  >
    <path
      stroke="#6A6D75"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 7.5h6m0 0h6m-6 0v6m0-6v-6"
    />
  </svg>
)
export default PlusSvg
