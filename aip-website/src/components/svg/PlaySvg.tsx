import { SVGProps } from "react";
const PlaySvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={40}
    // height={40}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.602 20c0 7.953 6.447 14.4 14.4 14.4s14.4-6.447 14.4-14.4-6.448-14.4-14.4-14.4c-7.953 0-14.4 6.447-14.4 14.4Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.802 24.8v-9.6l8 4.8-8 4.8Z"
    />
  </svg>
);
export default PlaySvg;
