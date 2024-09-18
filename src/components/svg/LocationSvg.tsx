import { SVGProps } from "react";
const LocationSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={21}
    // height={21}
    viewBox="0 0 21 21"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.375 8.682c0 4.246 3.714 7.757 5.358 9.103.235.192.354.29.53.34a.99.99 0 0 0 .474 0c.176-.05.294-.147.53-.34 1.644-1.346 5.358-4.857 5.358-9.102a6.024 6.024 0 0 0-1.794-4.284 6.16 6.16 0 0 0-4.33-1.774 6.16 6.16 0 0 0-4.332 1.774 6.023 6.023 0 0 0-1.794 4.283Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.75 7.875a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0Z"
    />
  </svg>
);
export default LocationSvg;
