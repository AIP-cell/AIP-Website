import { SVGProps } from "react";

const AMediumSizeSvg = (props: SVGProps<SVGSVGElement> & { src: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={160}
    // height={223}
    viewBox="0 0 190 223"
    fill="none"
    {...props}
  >
    <defs>
      <mask id="aMediumShape">
        <path
          fill="#DFE0E5"
          d="M190 95c0-52.467-42.533-95-95-95S0 42.533 0 95s42.533 95 95 95h55.282c5.015 0 9.822 2.005 13.35 5.569L190 222.203V95Z"
        />
      </mask>
    </defs>
    <image
      mask="url(#aMediumShape)"
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
      href={props.src}
      width="100%"
      height="100%"
    />
  </svg>
);
export default AMediumSizeSvg;
