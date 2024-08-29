import * as React from "react"
import { SVGProps } from "react";

const ASvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={295}
    height={345}
    fill="none"
    {...props}
  >
    <path
      fill="#DFE0E5"
      d="M295 147.5C295 66.038 228.962 0 147.5 0S0 66.038 0 147.5 66.038 295 147.5 295h89.657a20.002 20.002 0 0 1 14.213 5.929L295 345V147.5Z"
    />
  </svg>
)
export default ASvg
