import { SVGProps } from "react";

const EyeSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width={24}
      // height={25}
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.586 14.279c1.78 1.769 4.883 4.22 8.414 4.22 3.53 0 6.633-2.451 8.413-4.22.469-.467.704-.7.854-1.159.106-.327.106-.913 0-1.24-.15-.458-.385-.692-.854-1.159C18.633 8.952 15.53 6.5 12 6.5c-3.531 0-6.634 2.452-8.414 4.221-.47.467-.704.7-.854 1.159-.106.327-.106.913 0 1.24.15.458.385.692.854 1.159Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 12.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
      />
    </svg>
  );
};

export default EyeSvg;
