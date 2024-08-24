import * as React from "react"
import { SVGProps } from "react";

const OvalPurpleSvg = (props: SVGProps<SVGSVGElement>) => (
//   <div className="tk-blob">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width={190}
        // height={191}
        fill="none"
        {...props}
        className=" absolute inset-0"
      >
        <path
          fill="url(#a)"
          d="M155.291 129.443c-7.431 23.786-34.277 34.808-65.921 33.001-31.645-1.807-76.15-42.341-54.158-62.233 21.992-19.892 1.192-46.07 29.245-65.569 28.053-19.498 90.266 16.905 96.109 32.112 5.843 15.207 4.014 32.957-5.275 62.689Z"
        />
        <g filter="url(#b)">
          <path
            fill="#C265BD"
            fillOpacity={0.7}
            d="M148.416 49.903c22.908 12.738 27.853 41.608 18.308 72.252-9.545 30.644-62.433 65.042-77.768 38.905-15.334-26.137-47.568-11.716-61.025-43.712-13.457-31.995 39.432-84.72 56.644-86.973 17.212-2.253 35.207 3.605 63.841 19.528Z"
          />
        </g>
        <defs>
          <linearGradient
            id="a"
            x1={111.648}
            x2={80.65}
            y1={161.674}
            y2={28.778}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#91298C" />
            <stop offset={1} stopColor="#224193" />
          </linearGradient>
          <filter
            id="b"
            width={193.559}
            height={188.407}
            x={1.764}
            y={5.911}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation={12} />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_536_4156"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_backgroundBlur_536_4156"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
//   </div >
)
export default OvalPurpleSvg
