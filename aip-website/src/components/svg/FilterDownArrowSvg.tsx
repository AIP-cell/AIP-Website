import * as React from "react"
import { SVGProps } from "react"
const FilterDownArrowSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16.54 7.5-5.834 5.833L4.873 7.5"
    />
  </svg>
)
export default FilterDownArrowSvg
