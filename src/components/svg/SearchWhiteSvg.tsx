import { SVGProps } from "react";
const SearchWhiteSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={32}
    // height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      stroke="#F0F0F2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="m19 19 6 6m-11-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
    />
  </svg>
)
export default SearchWhiteSvg
