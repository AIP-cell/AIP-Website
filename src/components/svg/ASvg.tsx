import { StorageUrl } from "@/utils/BaseUrl";
import * as React from "react";
import { SVGProps } from "react";

type Props = {
  src?: string;
  className?: string;
};
const ASvg = ({ src, ...props }: Props) => {
  const id = React.useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // viewBox="0 0 300 345"
      // width={300}
      // height={345}
      viewBox="0 0 296 345"
      fill="none"
      {...props}
    >
      {src ? (
        <>
          <defs>
            <mask id={id} maskContentUnits="userSpaceOnUse">
              <path
                fill="#DFE0E5"
                d="M295 147.5C295 66.038 228.962 0 147.5 0S0 66.038 0 147.5 66.038 295 147.5 295h89.657a20.002 20.002 0 0 1 14.213 5.929L295 345V147.5Z"
              />
            </mask>
          </defs>
          <image
            mask={`url(#${id})`}
            preserveAspectRatio="xMidYMid slice"
            x="0"
            y="0"
            fill="#fff"
            xlinkHref={StorageUrl + src}
            width="296"
            height="345"
          />
        </>
      ) : (
        <path
          fill="#DFE0E5"
          d="M295 147.5C295 66.038 228.962 0 147.5 0S0 66.038 0 147.5 66.038 295 147.5 295h89.657a20.002 20.002 0 0 1 14.213 5.929L295 345V147.5Z"
        />
      )}
    </svg>
  );
};
export default ASvg;
