import * as React from "react";
import { SVGProps } from "react";
type Props = {
  src: string;
  className?: string;
};
const ASvg = ({ src, ...props }: Props) => {
  const id = React.useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // viewBox="0 0 300 345"
      viewBox="0 0 296 345"
      fill="none"
      {...props}
    >
      <defs>
        <mask id={id}>
          <path
            fill="#fff"
            d="M295 147.5C295 66.038 228.962 0 147.5 0S0 66.038 0 147.5 66.038 295 147.5 295h89.657a20.002 20.002 0 0 1 14.213 5.929L295 345V147.5Z"
          />
        </mask>
      </defs>
      <image
        mask={`url(#${id})`}
        preserveAspectRatio="xMidYMid meet"
        x="0"
        y="0"
        href={src}
        width="100%"
        height="100%"
      />
    </svg>
  );
};
export default ASvg;
