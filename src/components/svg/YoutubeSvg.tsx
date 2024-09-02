import { SVGProps } from "react";

const YoutubeSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={32}
    // height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M30.053 8.56a3.707 3.707 0 0 0-2.587-2.667C25.173 5.333 16 5.333 16 5.333s-9.173 0-11.466.614a3.707 3.707 0 0 0-2.587 2.666 38.666 38.666 0 0 0-.613 7.054c-.015 2.382.19 4.761.613 7.106a3.707 3.707 0 0 0 2.587 2.56c2.293.614 11.466.614 11.466.614s9.174 0 11.467-.614a3.706 3.706 0 0 0 2.587-2.666c.416-2.31.622-4.653.613-7a38.661 38.661 0 0 0-.613-7.107Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13 20.027 7.666-4.36L13 11.307v8.72Z"
    />
  </svg>
);
export default YoutubeSvg;
