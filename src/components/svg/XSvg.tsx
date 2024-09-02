import { SVGProps } from "react";

const XSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={17}
    // height={18}
    viewBox="0 0 17 18"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.117 7.622 16.446 0h-1.5L9.451 6.618 5.062 0H0l6.637 10.007L0 18h1.5l5.803-6.989L11.938 18H17L10.117 7.622ZM2.04 1.17h2.304l10.603 15.714h-2.304L2.04 1.17Z"
    />
  </svg>
);
export default XSvg;
