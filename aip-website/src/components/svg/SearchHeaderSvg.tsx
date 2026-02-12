import { SVGProps } from "react";
const SearchHeaderSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#5E165B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11.5 11.5 5 5m-9.167-3.333a5.833 5.833 0 1 1 0-11.667 5.833 5.833 0 0 1 0 11.667Z"
    />
  </svg>
);

export default SearchHeaderSvg;
