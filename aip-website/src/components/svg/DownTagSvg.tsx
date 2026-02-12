import { SVGProps } from "react";
const DownTagSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={9}
    // height={6}
    viewBox="0 0 9 6"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.833 1.333 4.5 4.667 1.167 1.333"
    />
  </svg>
);
export default DownTagSvg;
