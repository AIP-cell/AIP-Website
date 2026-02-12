import { SVGProps } from "react";

const DownloadFileSvg = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 12.5v6m0 0 3-2m-3 2-3-2m4-13H8.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C5 5.02 5 5.58 5 6.7v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.428.218-.986.218-2.104V9.5m-6-6c.286.003.466.014.639.055.204.05.399.13.578.24.202.124.375.297.72.643l3.126 3.125c.346.346.518.518.642.72.11.18.19.374.24.578.04.173.051.354.054.639M13 3.5v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h2.802m0 0H19"
    />
  </svg>
);
export default DownloadFileSvg;
