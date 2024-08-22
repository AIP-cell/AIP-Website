import * as React from "react"
import { SVGProps } from "react";

const HeroBgSVg = (props: SVGProps<SVGSVGElement>) => (
  <div className="tk-blob">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={741}
        fill="none"
        viewBox="0 0 1280 741"
        {...props}
      >
        <g filter="url(#a)">
          <path
            fill="#FAECC8"
            fillOpacity={0.5}
            d="M163 737C28.6 753.4-31.167 716.167-35 682.5l18.5-641L253.039 3.055a290 290 0 0 1 98.432 2.848l212.427 42.96a290.004 290.004 0 0 0 105.527 1.746l252.24-42.373a289.978 289.978 0 0 1 142.645 11.858l84.07 29.011a190 190 0 0 0 61.98 10.395H1384c3.67 130.5-31.8 412.6-33 471-1.5 73 0 247.363-121 190-135-64-268.157 39.56-368.5-13-84-44-207 20-408-38.5S331 716.5 163 737Z"
          />
        </g>
        <defs>
          <filter
            id="a"
            width={1467.27}
            height={788.846}
            x={-59}
            y={-23.851}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation={12} />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_39_4695"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_backgroundBlur_39_4695"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
  </div>
)
export default HeroBgSVg
