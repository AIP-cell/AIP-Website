import { SVGProps } from "react";

const UserCheckSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 15.833c0-1.84-2.239-3.333-5-3.333s-5 1.492-5 3.333m15-7.5-3.333 3.334L12.5 10m-5 0a3.333 3.333 0 1 1 0-6.667A3.333 3.333 0 0 1 7.5 10Z"
    />
  </svg>
)
export default UserCheckSvg
