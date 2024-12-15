import { StorageUrl } from "@/utils/BaseUrl";
import { SVGProps, useId } from "react";

const PMediumSizeSvg = (props: SVGProps<SVGSVGElement> & { src: string }) => {
  const id = useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width={160}
      // height={223}
      viewBox="0 0 190 223"
      fill="none"
      {...props}
    >
      <defs>
        <mask id={id}>
          <path
            fill="#DFE0E5"
            d="M0 95C0 42.533 42.533 0 95 0s95 42.533 95 95-42.533 95-95 95H39.718a18.784 18.784 0 0 0-13.35 5.569L0 222.203V95Z"
          />
        </mask>
      </defs>
      <image
        mask={`url(#${id})`}
        preserveAspectRatio="xMidYMid meet"
        x="0"
        y="0"
        href={StorageUrl + props.src}
        width="100%"
        // height="100%"
      />
    </svg>
  );
};
export default PMediumSizeSvg;
