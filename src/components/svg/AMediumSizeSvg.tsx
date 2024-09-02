import { SVGProps } from "react";
type Props = {
  src: string;
  props?: SVGProps<any>;
  className: string;
};
const AMediumSizeSvg = ({ props, src, className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={190}
    height={223}
    fill="none"
    {...props}
  >
    <defs>
      <mask id="shape">
        <path
          fill="#DFE0E5"
          d="M190 95c0-52.467-42.533-95-95-95S0 42.533 0 95s42.533 95 95 95h55.282c5.015 0 9.822 2.005 13.35 5.569L190 222.203V95Z"
        />
      </mask>
    </defs>
    <image
      mask="url(#shape)"
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
      href={src}
      width="100%"
      height="100%"
    />
  </svg>
);
export default AMediumSizeSvg;
