import { StorageUrl } from "@/utils/BaseUrl";
import { SVGProps, useId } from "react";

type Props = {
  src?: string;
  className?: string;
};
const PMediumSizeSvg = ({ src, ...props }: Props) => {
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
                fill="#E1CCED"
                d="M0 95C0 42.533 42.533 0 95 0s95 42.533 95 95-42.533 95-95 95H39.718a18.784 18.784 0 0 0-13.35 5.569L0 222.203V95Z"
              />
            </mask>
          </defs>
          <image
            mask={`url(#${id})`}
            preserveAspectRatio="xMidYMid slice"
            x="0"
            y="0"
            href={StorageUrl + src}
            width="190"
            height="223"
          />
        </>
      ) : (
        <path
          fill="#E1CCED"
          d="M0 95C0 42.533 42.533 0 95 0s95 42.533 95 95-42.533 95-95 95H39.718a18.784 18.784 0 0 0-13.35 5.569L0 222.203V95Z"
        />
      )}
    </svg>
  );
};
export default PMediumSizeSvg;
