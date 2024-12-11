import * as React from "react";
import { SVGProps } from "react";
const SquareSizedArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={22}
    // height={22}
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m2.75 11 4.583 4.583M2.75 11l4.583-4.583M2.75 11h16.5"
    />
  </svg>
);
export default SquareSizedArrow;
