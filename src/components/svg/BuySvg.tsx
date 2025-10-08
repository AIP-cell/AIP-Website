import * as React from "react";
import { SVGProps } from "react";
const BuySvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15 15"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.048 1.615h-1.5c-.933 0-1.4 0-1.757.182-.313.16-.568.414-.728.728-.182.356-.182.823-.182 1.757v6.333c0 .934 0 1.4.182 1.756.16.314.415.57.728.73.356.18.823.18 1.755.18h6.338c.932 0 1.397 0 1.754-.18.313-.16.569-.416.729-.73.181-.356.181-.822.181-1.754V9.115m.834-4.167V.782m0 0H9.215m4.167 0L7.548 6.615"
    />
  </svg>
);
export default BuySvg;
