import * as React from "react";
import { SVGProps } from "react";
const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={22}
    // height={23}
    viewBox="0 0 22 23"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M11 .76 9.12 2.64l7.44 7.454H.333v2.667H16.56l-7.44 7.453 1.88 1.88 10.667-10.667L11 .761Z"
    />
  </svg>
);
export default Arrow;
