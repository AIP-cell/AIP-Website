import * as React from "react";
import { SVGProps } from "react";
const CircleArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={21}
    //     height={20}
    viewBox="0 0 21 20"
    fill="none"
    {...props}
  >
    <path
      stroke="#121314"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.5 7 3 3-3 3m10-3a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"
    />
  </svg>
);
export default CircleArrow;
