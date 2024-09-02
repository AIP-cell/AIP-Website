import { SVGProps } from "react";

const RightSlickArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={20}
    // height={12}
    viewBox="0 0 20 12"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18.25 6-4.583-4.583M18.25 6l-4.583 4.583M18.25 6H1.75"
    />
  </svg>
);
export default RightSlickArrow;
