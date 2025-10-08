import * as React from "react";
import { SVGProps } from "react";
const CloseSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={24}
    //     height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke="#323538"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 6-6 6m0 0-6 6m6-6 6 6m-6-6L6 6"
    />
  </svg>
);
export default CloseSvg;
