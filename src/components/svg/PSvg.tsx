import { SVGProps, useId } from "react";

const PSvg = (props: SVGProps<SVGSVGElement> & { src: string }) => {
  const id = useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width={295}
      // height={345}
      viewBox="0 0 295 345"
      fill="none"
      {...props}
    >
      <defs>
        <mask id={id}>
          <path
            fill="#fff"
            d="M0 147.5C0 66.038 66.038 0 147.5 0S295 66.038 295 147.5 228.962 295 147.5 295H57.843a20 20 0 0 0-14.213 5.929L0 345V147.5Z"
          />
        </mask>
      </defs>
      <image
        mask={`url(#${id})`}
        preserveAspectRatio="xMidYMid meet"
        x="0"
        y="0"
        href={props.src}
        width="100%"
        height="100%"
      />
    </svg>
  );
};

export default PSvg;
