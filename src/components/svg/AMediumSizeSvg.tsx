import { StorageUrl } from "@/utils/BaseUrl";
import { SVGProps, useId } from "react";

type Props = {
  src?: string;
  className?: string;
};
const AMediumSizeSvg = ({ src, ...props }: Props) => {
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
      {src ? (
        <>
          <defs>
            <mask id={id}>  
              <path
                fill="#DFE0E5"
                d="M190 95c0-52.467-42.533-95-95-95S0 42.533 0 95s42.533 95 95 95h55.282c5.015 0 9.822 2.005 13.35 5.569L190 222.203V95Z"
              />
            </mask>
          </defs>
          <image
            mask={`url(#${id})`}
            preserveAspectRatio="xMidYMid meet"
            x="0"
            y="0"
            href={StorageUrl + src}
            width="100%"
            // height="100%"
          />
        </>
      ) : (
        <path
          fill="#DFE0E5"
          d="M190 95c0-52.467-42.533-95-95-95S0 42.533 0 95s42.533 95 95 95h55.282c5.015 0 9.822 2.005 13.35 5.569L190 222.203V95Z"
        />
      )}
    </svg>
  );
};
export default AMediumSizeSvg;
