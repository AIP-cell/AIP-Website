import { SVGProps } from "react";
const MenuSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={32}
    // height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      stroke="#F0F0F2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 22.667h24M4 16h24M4 9.334h24"
    />
  </svg>
)
export default MenuSvg
